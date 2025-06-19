import LoginPage from '../pages/login.page';
import { BaseTest } from '../base/base.test';

describe('Login Suite', () => {
  const base = new BaseTest();

  beforeEach(async () => {
    await browser.url(base.getBaseUrl());
  });

  it('should login with valid credentials', async () => {
    await LoginPage.login('magento21@getnada.com', 'Test@1234');
    await LoginPage.verifyLogoutButton();
  });

  


});
