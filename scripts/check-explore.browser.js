/* eslint-disable no-unused-expressions -- This function is executed by playwright-cli run-code. */
// With /explore open: playwright-cli run-code --filename=credit-card-app/scripts/check-explore.browser.js
async (page) => {
  const assert = (ok, message) => { if (!ok) throw new Error(message); };
  await page.goto('http://127.0.0.1:5174/explore');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 850 });
    const section = page.locator('.bmcc-final-call');
    await section.scrollIntoViewIfNeeded();
    await page.mouse.move(0, 0);
    await page.waitForFunction(() => [...document.querySelectorAll('.bmcc-carousel-face img')].every(img => img.complete && img.naturalWidth > 0));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `No overflow at ${width}px`);
    assert(await section.evaluate(el => getComputedStyle(el).backgroundColor === 'rgb(0, 0, 0)'), 'Pure black background');
    assert(await section.evaluate(el => el.offsetHeight < innerHeight), 'Section fits viewport height');
    assert(await section.evaluate(el => parseFloat(getComputedStyle(el).borderRadius) > 0), 'Section has rounded corners');
    assert(await page.locator('.bmcc-carousel-face').count() === 4, 'Four different cards with wider spacing');
    const card = page.locator('.bmcc-carousel-card').first();
    const position = await card.evaluate(el => getComputedStyle(el).transform);
    await page.waitForTimeout(250);
    assert(position !== await card.evaluate(el => getComputedStyle(el).transform), 'Cards move');
    assert(await page.locator('.bmcc-carousel-face').first().evaluate(el => getComputedStyle(el).transform === 'none'), 'Card faces stay upright without wobble');
    if (width === 1440) {
      const target = await page.locator('.bmcc-carousel-card').evaluateAll(cards => cards.map(el => {
        const r = el.getBoundingClientRect();
        return { x: r.x + r.width * .85, y: r.y + r.height * .15 };
      }).find(p => p.x > 750 && p.x < innerWidth - 60));
      assert(target, 'A card is available for hover');
      await page.mouse.move(target.x, target.y);
      const hovered = page.locator('.bmcc-carousel-card:hover');
      assert(await hovered.evaluate(el => parseFloat(el.style.getPropertyValue('--tilt-x')) > 0 && parseFloat(el.style.getPropertyValue('--tilt-y')) > 0), 'Top-right corner tilts back');
      const before = await hovered.evaluate(el => getComputedStyle(el).transform);
      await page.waitForTimeout(100);
      assert(before !== await hovered.evaluate(el => getComputedStyle(el).transform), 'Carousel keeps moving during tilt');
      await page.mouse.move(0, 0);
      assert(await page.locator('.bmcc-carousel-card').evaluateAll(cards => cards.every(el => !el.style.getPropertyValue('--tilt-x'))), 'Tilt resets on exit');
    }
    assert(await page.getByRole('button', { name: 'Pause animation', exact: true }).textContent() === '', 'Pause control uses only an icon');
    await page.getByRole('button', { name: 'Pause animation', exact: true }).click();
    const pausedPosition = await card.evaluate(el => getComputedStyle(el).transform);
    await page.waitForTimeout(150);
    assert(pausedPosition === await card.evaluate(el => getComputedStyle(el).transform), 'Pause freezes cards');
    assert(await page.locator('.bmcc-carousel-face').first().evaluate(el => getComputedStyle(el, '::after').animationPlayState === 'paused'), 'Pause also freezes shine');
    await page.screenshot({ path: `output/playwright/explore-${width}.png` });
    await page.getByRole('button', { name: 'Resume animation', exact: true }).click();
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert(await page.locator('.bmcc-carousel-card').first().evaluate(el => getComputedStyle(el).animationName === 'none'), 'Reduced motion is static');
  assert(await page.getByRole('link', { name: 'Find your fit' }).getAttribute('href') === '/credit-card-eligibility', 'CTA retains eligibility route');
  assert(await page.getByRole('link', { name: 'Find your fit' }).textContent() === 'Find your fit', 'CTA has no arrow');
  const routes = await page.locator('.bmcc-carousel-face').evaluateAll(links => links.map(link => ({ href: link.getAttribute('href'), name: link.getAttribute('aria-label') })));
  for (const { href, name } of routes) {
    const link = page.locator('.bmcc-final-call').getByRole('link', { name, exact: true });
    await link.focus();
    await link.press('Enter');
    await page.waitForURL(`**${href}`);
    await page.locator('h1').waitFor();
    assert(await page.locator('h1').count() === 1, `Card detail loads for ${name}`);
    await page.goto('http://127.0.0.1:5174/explore');
  }
  const touchContext = await page.context().browser().newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  const touchPage = await touchContext.newPage();
  await touchPage.goto('http://127.0.0.1:5174/explore');
  await touchPage.locator('.bmcc-final-call').scrollIntoViewIfNeeded();
  const target = await touchPage.locator('.bmcc-carousel-face').evaluateAll(links => links.map(link => {
    const rect = link.getBoundingClientRect();
    return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2, href: link.getAttribute('href') };
  }).find(card => card.x > 20 && card.x < innerWidth - 20 && card.y > 0 && card.y < innerHeight));
  assert(target, 'A card is reachable on touch screens');
  await touchPage.touchscreen.tap(target.x, target.y);
  await touchPage.waitForURL(`**${target.href}`);
  await touchPage.locator('h1').waitFor();
  await touchContext.close();
  console.log('Explore carousel checks passed at desktop, mobile, and 320px.');
}
