import LoginPage from '../pages/login.page';
import { BaseTest } from '../base/base.test';
import testData from '../resources/testData.json';

describe('Add to cart Suite', () => {
  const base = new BaseTest();

  beforeEach(async () => {
    await browser.url(base.getBaseUrl());
  });

  it('Validate the order summary', async () => {
    console.log('Add to cart test');
    await LoginPage.login('magento21@getnada.com', 'Test@1234');
    const { bagText, bagAmount } = testData[0];
    const priceAsDouble = parseFloat(bagAmount);
    


  });




});
