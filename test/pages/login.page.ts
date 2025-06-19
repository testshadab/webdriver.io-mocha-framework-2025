import { JSCommands } from "../utils/js.commands";
import { WaitUtils } from "../utils/wait.utils";
import { assert, expect } from 'chai';

class LoginPage {

    private get signInCTA() { return $('.panel > .header > .authorization-link > a'); }
    private get email() { return $('[id="email"]'); }
    private get password() { return $('[name="login[password]"]'); }
    private get loginCTA() { return $('[class*="login primary"]'); }
    private get dropdownMenu() { return $(':nth-child(2) > .customer-welcome > .customer-name > .action'); }
    private get signOutCTA() { return $('(//li[@class="authorization-link"]//following-sibling::a)[1]'); }

    async login(user: string, pass: string) {
        await WaitUtils.waitForElement(this.signInCTA);
        await JSCommands.clickElement(this.signInCTA);
        await JSCommands.setValue(this.email, user);
        await JSCommands.setValue(this.password, pass);
        await JSCommands.clickElement(this.loginCTA);
    }

    async verifyLogoutButton() {
        await WaitUtils.waitForElement(this.dropdownMenu);
        await JSCommands.clickElement(this.dropdownMenu);
        await browser.pause(2000);
        // expect(await this.signOutCTA.isDisplayed()).to.be.true;
        assert.isTrue(await this.signOutCTA.isDisplayed(), 'Sign out CTA is not visible');
        await JSCommands.clickElement(this.signOutCTA);
    }


}
export default new LoginPage();
