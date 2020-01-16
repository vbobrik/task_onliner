let BasePage = require('./basePage');
const locator = require('./locators');

const catalogButton = locator.CATALOG_BUTTON_xpath;
const mobilePhoneButton = locator.MOBILE_PHONES_BUTTON_xpath;
const honorCheckbox = locator.HONOR_CHECKBOX_xpath;
const dropdownForSort = locator.SORT_DROPDOWN_VALUE_css;
const expensive = locator.EXPENSIVE_DROPDOWN_VALUE_xpath;
const scrollScript = locator.SCROLL_DOWN_300PX;
const pageHeader = locator.PAGE_HEADER_css;
// const priceValue = locator.PRICE_VALUE_css;
const priceValue = '.schema-product__price-value.schema-product__price-value_primary';
"use strict";
class OnlinerPage extends BasePage {

    constructor(driver, url) {
        super(driver, url);
    }

    async goToCatalog() {
        // const result = this.findByXpath(catalogButton).click();
        // console.log('---------------' + result);
        // return result;

        await this.findByXpath(catalogButton).click();
        //  return this.getCurrentUrl();
    }

    async getSortedElements() {
        
        await this.findByCss(priceValue);
        
    }

    async goToMobilePhones() {
        await this.findByXpath(mobilePhoneButton).click();
    }

    async sortByProducer() {
        await this.script(scrollScript);
        await this.findByXpath(honorCheckbox).click();
    }

    async sortByPriceDown() {
        const arrayOfElements = [];
        await this.findByCss(dropdownForSort).click();
        await this.findByXpath(expensive).click();
      const elements =  await this.findElementsByCss(priceValue);
    //   await some.size[]
     await console.log('-------' + elements.length);
    
    //  elements.forEach((item) => {
        for await (let item of elements) {
          async  () => {
        // arrayOfElements.push(item);
        const text = await item.getText();
       const arr = text.split(',');
       arrayOfElements.push(arr[0]);
             }
            }
     await console.log(arrayOfElements.toString());
    }

    async getPageHeader() {
        return (await this.findByCss(pageHeader)).getText();
    }
}
module.exports = OnlinerPage;