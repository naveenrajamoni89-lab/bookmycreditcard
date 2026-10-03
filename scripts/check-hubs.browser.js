// Run with playwright-cli run-code --filename=scripts/check-hubs.browser.js
// eslint-disable-next-line no-unused-expressions
async (page) => {
  const assert = (ok, message) => { if (!ok) throw new Error(message); };
  const routes = ['hdfc-bank','sbi-card','yes-bank','cashback-credit-cards','travel-credit-cards','fd-backed-credit-cards'];
  for (const width of [1440, 390]) {
    await page.setViewportSize({width,height:900});
    for (const route of routes) {
      await page.goto('http://127.0.0.1:5175/' + route);
      await page.locator('.hub-hero h1').waitFor();
      await page.locator('.pb-card-item').first().waitFor();
      await page.evaluate(() => Promise.all([...document.querySelectorAll('.hub-product img,.hub-issuer img')].map(img=>img.complete ? Promise.resolve() : new Promise(resolve=>{img.onload=resolve;img.onerror=resolve;}))));
      assert(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth), route + ': page overflow at ' + width);
      assert(await page.locator('.hub-product-gallery img').count() > 0, route + ': missing artwork');
      assert(await page.locator('.hub-product-gallery img').evaluateAll(images=>images.every(img=>img.naturalWidth>0)), route + ': broken artwork');
      if (route==='hdfc-bank' || route==='sbi-card' || route==='yes-bank') {
        const bank = route==='hdfc-bank' ? 'HDFC' : route==='sbi-card' ? 'SBI' : 'YES';
        assert(await page.locator('.pb-card-bank').evaluateAll((items,bank)=>items.every(item=>item.textContent.toUpperCase().includes(bank)),bank),route+': unrelated issuer in catalogue');
        assert(await page.locator('.hub-issuer img').evaluate(img=>img.naturalWidth>0),route+': bank logo missing');
      }
      const faq=page.locator('.hub-faq').first();
      if(await faq.count()) {
        await faq.locator('summary').click();
        assert(await faq.evaluate(el=>el.open),route+': FAQ did not open');
      }
      await page.evaluate(async () => {
        const images=[...document.querySelectorAll('.bmcc-hub-page img')];
        images.forEach(img=>img.loading='eager');
        await Promise.all(images.map(img=>img.decode().catch(()=>{})));
        scrollTo(0,0);
      });
      await page.screenshot({path:'output/playwright/hub-'+route+'-'+width+'.png',fullPage:true});
      if(route==='hdfc-bank' || route==='cashback-credit-cards') await page.screenshot({path:'output/playwright/hub-hero-'+route+'-'+width+'.png'});
    }
  }
  const allRoutes = ['cashback-credit-cards','rewards-credit-cards','travel-credit-cards','fuel-credit-cards','rupay-credit-cards','credit-cards-lounge-access','lounge-access-credit-cards','lifetime-free-credit-cards','shopping-credit-cards','dining-credit-cards','zero-forex-markup-credit-cards','international-credit-cards','secured-credit-cards','fd-backed-credit-cards','onecard-credit-cards','hdfc-bank','sbi-bank','sbi-card','icici-bank','axis-bank','kotak-mahindra-bank','indusind-bank','yes-bank','rbl-bank','bank-of-baroda','bobcard','hsbc-bank','punjab-national-bank','idfc-first-bank','federal-bank','au-small-finance-bank','amex-bank','american-express','kotak-bank','idfc-bank','bob-bank','pnb-bank','standard-chartered-bank'];
  await page.setViewportSize({width:1440,height:900});
  for (const route of allRoutes) {
    await page.goto('http://127.0.0.1:5175/' + route);
    await page.locator('.hub-hero h1').waitFor();
    assert(await page.locator('.hub-hero h1').textContent(),route+': missing title');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth),route+': overflow');
  }
  await page.goto('http://127.0.0.1:5175/hdfc-bank');
  await page.locator('.pb-card-item').first().waitFor();
  await page.locator('.pb-card-compare input').first().check();
  assert(await page.locator('.pb-card-compare input').first().isChecked(),'Comparison selection failed');
  console.log('Bank filtering, images, FAQs, comparison and responsive layouts passed.');
}
