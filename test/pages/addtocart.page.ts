import { JSCommands } from "../utils/js.commands";
import { WaitUtils } from "../utils/wait.utils";
import { assert, expect } from 'chai';

class LoginPage {

    private get gearMenu() { return $('//span[text()="Gear"]/ancestor::li'); }
    private get bags() { return $('//span[text()="Bags"]/parent::a'); }
    private get bagsHeading() { return $('span[data-ui-id="page-title-wrapper"]'); }
    private get bagsList() { return $('strong[class*="product-item-name"] a'); }
    private get bagPrice() { return $('(//span[@class="price"])[1]'); }
    private get addedProductName() { return $('span[data-ui-id="page-title-wrapper"]'); }
    private get addToCartCTA() { return $('button[id="product-addtocart-button"]'); }



    async selectBag() {
        await browser.pause(2000);

    }



}
export default new LoginPage();
