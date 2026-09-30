// With the dev server open in Playwright CLI:
// playwright-cli run-code --filename=credit-card-app/scripts/check-hero.browser.js
// eslint-disable-next-line no-unused-expressions -- Playwright CLI invokes this function expression.
async (page) => {
  const assert = (ok, message) => { if (!ok) throw new Error(message); };
  const origin = await page.evaluate(() => location.origin);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto(origin);
  await page.locator('.card-hero-fan.is-ready').waitFor();
  const frame = async time => page.locator('.card-hero-fan').evaluate((fan, ms) => {
    fan.getAnimations({ subtree: true }).forEach(animation => {
      animation.pause();
      animation.currentTime = ms;
    });
    return [...fan.querySelectorAll('.card-hero-card')].map(card => {
      const rect = card.getBoundingClientRect();
      return { x: rect.x, y: rect.y, right: rect.right, bottom: rect.bottom, width: rect.width };
    });
  }, time);
  const initial = await frame(0);
  assert(initial[2].y > 768, 'The leading card must start below the screen');
  const center = await frame(1250);
  assert(Math.abs(center[2].x + center[2].width / 2 - 683) < 25, 'The leading card must settle in the center');
  assert(center.every(card => Math.abs(card.x - center[2].x) < 1), 'The stack must stay together before spreading');
  await page.screenshot({ path: 'output/playwright/hero-center.png' });
  const spread = await frame(3100);
  assert(spread.every((card, i) => i === 0 || card.x > spread[i - 1].x + 30), 'All six cards must spread left to right');
  await page.screenshot({ path: 'output/playwright/hero-laptop.png' });
  await page.getByRole('button', { name: 'Replay spread' }).click();
  assert((await frame(0))[2].y > 768, 'Replay must restart the rise');
  await frame(3100);

  for (const [width, height] of [[1536, 736], [1440, 1000], [768, 1024], [390, 844], [320, 740]]) {
    await page.setViewportSize({ width, height });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow at ${width}px`);
    const heading = await page.locator('.card-hero-heading').boundingBox();
    for (const time of [1250, 1700, 2300, 3100]) {
      const cards = await frame(time);
      assert(cards.every(card => card.x >= 0 && card.right <= width), `Cards clipped at ${width}px (${time}ms)`);
      assert(cards.every(card => card.y >= heading.y + heading.height + 16), `Cards overlap the heading at ${width}px (${time}ms)`);
    }
    await page.screenshot({ path: `output/playwright/hero-${width}.png` });
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert(await page.locator('.card-hero-fan').evaluate(fan => fan.getAnimations({ subtree: true }).length === 0), 'Reduced motion must disable the entrance');
  assert(!await page.getByRole('button', { name: 'Replay spread' }).isVisible(), 'Hide replay when motion is disabled');
  const cardLinks = await page.locator('.card-hero-card').evaluateAll(links => links.map(link => [link.getAttribute('aria-label'), link.getAttribute('href')]));
  assert(cardLinks.length === 6 && cardLinks.every(([name, route]) => name.startsWith('View ') && route.startsWith('/')), 'Every hero card needs a named destination');
  for (const [name, route] of cardLinks) {
    await page.goto(`${origin}${route}`);
    await page.locator('h1').first().waitFor();
    assert(await page.locator('h1').first().isVisible(), `Card page failed: ${name}`);
    assert(!await page.getByText('Credit Card Not Found').isVisible(), `Unknown card route: ${route}`);
  }
  await page.goto(origin);
  for (let index = 0; index < cardLinks.length; index++) {
    const point = await page.locator('.card-hero-card').nth(index).evaluate(card => {
      const rect = card.getBoundingClientRect();
      for (let y = rect.top + 8; y < rect.bottom - 8; y += 12) {
        for (let x = rect.left + 8; x < rect.right - 8; x += 12) {
          if (document.elementFromPoint(x, y)?.closest('.card-hero-card') === card) return { x, y };
        }
      }
      return null;
    });
    assert(point, `Card ${index + 1} has no visible clickable area`);
    await page.mouse.click(point.x, point.y);
    await page.waitForURL(`${origin}${cardLinks[index][1]}`);
    assert(page.url() === `${origin}${cardLinks[index][1]}`, `Clicking card ${index + 1} opened the wrong page`);
    await page.goBack();
  }
  await page.getByRole('link', { name: 'Compare cards', exact: true }).first().click();
  assert(page.url() === `${origin}/compare-credit-cards`, 'Compare navigation failed');
  await page.goBack();
  await page.locator('.card-hero-secondary').click();
  assert(page.url() === `${origin}/credit-card-eligibility`, 'Eligibility navigation failed');
  await page.goBack();
  await page.locator('.card-hero-footer a').click();
  assert(page.url() === `${origin}/explore`, 'Catalogue navigation failed');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(origin);
  console.log('Hero checks passed: rise, center, spread, spacing, replay, five viewports, reduced motion, and all six card routes.');
}
