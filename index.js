const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const width = height = 1080;

const URL = 'https://www.onliner.by/';
const SEARCH_WORD = 'catalog';


(async function () {
    try{
const driver = await new Builder()
.forBrowser('chrome')
// установить нужное разрешение окна (> 1000px)
.setChromeOptions(new chrome.Options().addArguments(`window-size=${width},${height}`))
.build();

await driver.get(URL);
await console.log('------------url here');
//draft
// await driver.findElement(By.css('a[href^="https://catalog.onliner.by"]')).click();
// await driver.findElement(By.partialLinkText("https://catalog.onliner.by")).click();
// await (await driver.findElement(By.css('a[href^="https://catalog.onliner.by/mobile"]'))).click();
// await driver.findElement(By.css('.schema-product.schema-product_narrow-sizes'));

//1st case
// await driver.findElement(By.xpath('.//div/nav//*[text()="Каталог"]')).click();
// await driver.findElement(By.xpath('.//*[text()="Мобильные телефоны"]')).click();
// await driver.executeScript('window.scrollBy(0,300)');
// await (await driver.findElement(By.xpath('.//li//*[text()="HONOR"]'))).click();
// await driver.findElement(By.css('.schema-order__link')).click();
// await driver.findElement(By.xpath('.//*[text()="Дорогие"]')).click();
// GOOD


//2nd case
await driver.findElement(By.css('.auth-bar__item.auth-bar__item--text')).click();
await driver.findElement(By.css("[href$='registration']")).click(); //'Зарегистрироваться'

}
catch(err) {
    console.error(err);
}
})();