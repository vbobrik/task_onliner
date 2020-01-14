let BasePage = require('./basePage');
const locator = require('./locators');

const catalogButton = locator.CATALOG_BUTTON_xpath;
const mobilePhoneButton = locator.MOBILE_PHONES_BUTTON_xpath;
const honorCheckbox = locator.HONOR_CHECKBOX_xpath;
const sortDropdown = locator.SORT_DROPDOWN_VALUE_css;
const expensive = locator.EXPENSIVE_DROPDOWN_VALUE_xpath;
const scrollScript = locator.SCROLL_DOWN_300PX;

class OnlinerPage extends BasePage{

    constructor(driver, url) {
        super(driver, url);
                    }

async goToCatalog() {
    const result = await this.findByXpath(catalogButton).click();
    return result;
}

async goToMobilePhones() {
    const result = await this.findByXpath(mobilePhoneButton).click();
    return result.getText();
}

async sortByProducer() {
    await this.script(scrollScript);
   return await this.findByXpath(honorCheckbox).click();
}

async sortByPriceDown() {
    await this.findByCss(sortDropdown).click();
  return  await this.findByXpath(expensive).click();
}
}
module.exports = OnlinerPage;