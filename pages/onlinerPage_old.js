let Page = require('./basePage.js');
const locator = require('./locators.js');

const catalogButton = locator.CATALOG_BUTTON_xpath;
const mobilePhoneButton = locator.MOBILE_PHONES_BUTTON_xpath;
const honorCheckbox = locator.HONOR_CHECKBOX_xpath;
const sortDropdown = locator.SORT_DROPDOWN_VALUE_css;
const expensive = locator.EXPENSIVE_DROPDOWN_VALUE_xpath;
const scrollScript = locator.SCROLL_DOWN_300PX;

Page.prototype.goToCatalog = async function () {
    const result = await this.findByXpath(catalogButton).click();
    return result;
}

Page.prototype.goToMobilePhones = async function () {
    const result = await this.findByXpath(mobilePhoneButton).click();
    return result.getText();
}

Page.prototype.sortByProducer = async function () {
    await this.script(scrollScript);
   return await this.findByXpath(honorCheckbox).click();
}

Page.prototype.sortByPriceDown = async function () {
    await this.findByCss(sortDropdown).click();
  return  await this.findByXpath(expensive).click();
}

module.exports = Page;