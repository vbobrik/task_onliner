const basePage = require('basePage');


class BaseSteps extends BasePage {
let driver = 0;
// function openPage(browser, url) {
//     await browser.get(url);
// }

function BaseSteps(driver) {
    this.driver = driver;
}

function goToCatalog(browser) {
    await browser.findElement(By.xpath('.//div/nav//*[text()="Каталог"]')).click();
    return basePage;
}

function goToMobilePhones(browser) {
    await browser.findElement(By.xpath('.//*[text()="Мобильные телефоны"]')).click();
}

function SortByProducer(browser) {
    await browser.executeScript('window.scrollBy(0,300)');
    await browser.findElement(By.xpath('.//li//*[text()="HONOR"]')).click();
}

function SortByPriceDown(browser) {
    await browser.findElement(By.css('.schema-order__link')).click();
    await browser.findElement(By.xpath('.//*[text()="Дорогие"]')).click();
}

}