import type { ChainablePromiseElement } from 'webdriverio';

export class WaitUtils {

// the $() function returns a ChainablePromiseElement, not a direct Element.
  // static async waitForElement(el: ChainablePromiseElement) {
  //   await el.waitForDisplayed({ timeout: 5000 });
  // }

static async waitForElement(el: ChainablePromiseElement) {
  const resolvedEl = await el;
  await browser.execute("arguments[0].style.border='3px solid red'", resolvedEl);
  await browser.pause(800);
  await browser.execute("arguments[0].style.border='3px solid blue'", resolvedEl);
  await resolvedEl.waitForDisplayed({ timeout: 5000 });
}


}
