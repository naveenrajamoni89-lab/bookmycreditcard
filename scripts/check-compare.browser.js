// Run with the comparison page open:
// playwright-cli run-code --filename=credit-card-app/scripts/check-compare.browser.js
async (page) => {
  const assert = (ok, message) => { if (!ok) throw new Error(message); };
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.mouse.move(0, 0);
  const activeCard = () => page.locator('.compare-showcase-dots button[aria-pressed="true"]').getAttribute('aria-label');
  assert(await page.locator('.compare-showcase-dots button').count() === 6, 'Show six replacement cards');
  assert(await page.getByRole('button', { name: 'Show IndianOil RBL Bank XTRA Credit Card' }).count() === 1, 'Portrait replacement must appear in the carousel');
  assert(await page.getByRole('button', { name: 'Show Axis Bank SELECT Credit Card' }).count() === 0, 'Landscape SELECT card must be removed from the carousel');
  await page.locator('.compare-showcase').hover();
  const initialCard = await activeCard();
  await page.waitForTimeout(3400);
  assert(await activeCard() !== initialCard, 'Carousel must keep advancing while hovered');
  await page.getByRole('button', { name: 'Pause card animation', exact: true }).click();
  await page.getByRole('button', { name: 'Next featured card', exact: true }).click();
  const nextCard = await activeCard();
  await page.getByRole('button', { name: 'Previous featured card', exact: true }).click();
  assert(await activeCard() !== nextCard, 'Carousel controls must change the featured card');
  await page.getByRole('heading', { name: 'Good cards. Better together.' }).click();
  await page.mouse.move(0, 0);
  const pausedCard = await activeCard();
  await page.waitForTimeout(3400);
  assert(await activeCard() === pausedCard, 'Paused carousel must stay still');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.getByRole('button', { name: 'Play card animation', exact: true }).click();
  await page.getByRole('heading', { name: 'Good cards. Better together.' }).click();
  await page.mouse.move(0, 0);
  const reducedCard = await activeCard();
  await page.waitForTimeout(3400);
  assert(await activeCard() === reducedCard, 'Reduced motion must disable autoplay');
  assert(await page.locator('.compare-showcase-card').first().evaluate(el => getComputedStyle(el).transitionDuration) === '0s', 'Reduced motion must remove spatial transitions');
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(150);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Hero overflow at ${width}px`);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  const clear = page.getByRole('button', { name: 'Clear all', exact: true });
  if (await clear.isVisible()) await clear.click();
  await page.getByText('0 of 3 selected').waitFor();
  await page.screenshot({ path: 'output/playwright/compare-desktop.png', fullPage: true });
  await page.getByLabel('Choose card 1', { exact: true }).click();
  const search = page.getByRole('searchbox', { name: 'Find your card' });
  await search.fill('no-card-matches-this');
  assert(await page.getByText('No cards found. Try another card or bank.').isVisible(), 'Missing no-results state');
  await search.fill('HDFC');
  const options = page.locator('details[open] .compare-picker-options button');
  assert(await options.count() > 0, 'Search must return HDFC cards');
  const firstName = await options.first().locator('strong').textContent();
  await page.screenshot({ path: 'output/playwright/compare-search.png', fullPage: true });
  await options.first().click();
  await page.getByText('1 of 3 selected').waitFor();
  await page.getByLabel('Choose card 2', { exact: true }).click();
  assert(await page.locator('details[open] .compare-picker-options strong').filter({ hasText: firstName }).count() === 0, 'Selected card must not appear again');
  await page.locator('details[open] .compare-picker-options button').first().click();
  await page.getByRole('table').waitFor();
  await page.getByLabel('Choose card 3', { exact: true }).click();
  await page.locator('details[open] .compare-picker-options button').first().click();
  await page.getByText('3 of 3 selected').waitFor();
  assert(await page.locator('.compare-card-picker').count() === 0, 'Only three cards allowed');
  await page.reload();
  await page.getByText('3 of 3 selected').waitFor();
  await page.screenshot({ path: 'output/playwright/compare-selected.png', fullPage: true });
  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.waitForTimeout(150);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Page overflow at ${width}px`);
  }
  await page.screenshot({ path: 'output/playwright/compare-mobile-selected.png', fullPage: true });
  await clear.click();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'output/playwright/compare-mobile.png', fullPage: true });
  await page.getByLabel('Choose card 1', { exact: true }).click();
  await page.getByRole('searchbox', { name: 'Find your card' }).press('Escape');
  assert(await page.locator('details[open]').count() === 0, 'Escape must dismiss picker');
  assert(await page.getByLabel('Choose card 1', { exact: true }).evaluate(el => el === document.activeElement), 'Escape must restore keyboard focus');
  await page.setViewportSize({ width: 1440, height: 1000 });
  return 'Comparison search, duplicate exclusion, selection limit, persistence, clear, Escape and mobile overflow passed.';
}
