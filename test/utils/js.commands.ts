import type { ChainablePromiseElement } from 'webdriverio';

export class JSCommands {

  static async highlight(el: ChainablePromiseElement) {
    await browser.execute("arguments[0].style.border='3px solid red'", el);
  }

  static async clickElement(el: ChainablePromiseElement) {
    const resolvedEl = await el;
    await resolvedEl.waitForClickable({ timeout: 5000 });
    await browser.execute("arguments[0].style.border='3px solid blue'", resolvedEl);
    await browser.pause(800);
    await browser.execute("arguments[0].style.border='3px solid green'", resolvedEl);
    await resolvedEl.click();
  }

  static async setValue(el: ChainablePromiseElement, value: string) {
    const resolvedEl = await el;
    await resolvedEl.waitForDisplayed({ timeout: 5000 });
    await browser.execute("arguments[0].style.border='3px solid blue'", resolvedEl);
    await browser.pause(800);
    await browser.execute("arguments[0].style.border='3px solid green'", resolvedEl);
    await resolvedEl.setValue(value);
  }

  static async scrollIntoView(el: ChainablePromiseElement) {
    const resolvedEl = await el;
    await browser.execute("arguments[0].style.border='3px solid blue'", resolvedEl);
    await browser.pause(800);
    await browser.execute("arguments[0].style.border='3px solid green'", resolvedEl);
    await resolvedEl.scrollIntoView();
  }

  static async pressEnter() {
    await browser.keys('Enter');
  }








}
