async (page) => {
  for (const [width,height] of [[1920,900],[1440,700],[1100,600],[390,844]]) {
    await page.setViewportSize({width,height});
    await page.goto('http://127.0.0.1:5175/');
    const mobile = width <= 1024;
    if(mobile) await page.getByRole('button',{name:'Open navigation'}).click();
    const open = async name => {
      const button = page.getByRole('button',{name});
      if(mobile) await button.click(); else await button.hover();
    };
    const check = async () => {
      await page.waitForTimeout(220);
      for(const panel of await page.locator('.pb-header [role="menu"]').all()) {
        const b=await panel.boundingBox();
        if(!mobile && !await panel.evaluate(el=>el.classList.contains('pb-dropdown-menu'))) {
          const parent=await panel.evaluate(el=>el.offsetParent.getBoundingClientRect().right);
          if(b.x < parent-1) throw new Error('Flyout opened left');
        }
        if(b.x < -1 || b.x+b.width>width+1 || (!mobile && (b.y<0 || b.y+b.height>height+1))) throw new Error('Overflow at '+width+'x'+height+': '+JSON.stringify(b));
      }
    };
    await open('Explore');
    await open(/By Category/);
    await check();
    await open(/By Bank/);
    await open(/Other Banks/);
    await check();
    if(!mobile) {
      await page.locator('.pb-other-banks-flyout').evaluate(el=>el.scrollTop=el.scrollHeight);
      if(!await page.locator('.pb-other-banks-flyout').getByText('American Express',{exact:true}).isVisible()) throw new Error('Final bank missing');
    }
    if(width===1440 || mobile) await page.screenshot({path:'output/playwright/nav-responsive-'+width+'.png'});
    await page.keyboard.press('Escape');
    await open('Learn');
    await check();
  }
  console.log('All menus fit at 1920, 1440, 1100 and 390 pixels.');
}
