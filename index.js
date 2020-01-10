const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const width = height = 1080;

const URL = 'https://www.onliner.by/';
const SEARCH_WORD = 'catalog';


(async function () {
    try{
const driver = await new Builder()
.forBrowser('chrome')
// .setChromeOptions(new chrome.Options().windowSize(1080, 1080))
.setChromeOptions(new chrome.Options().addArguments(`window-size=${width},${height}`))
.build();
// установить нужное разрешение окна (> 1000px)
await driver.get(URL);
await console.log('------------url here');
// await driver.findElement(By.css('a[href^="https://catalog.onliner.by"]')).click();
await driver.findElement(By.partialLinkText("https://catalog.onliner.by")).click();
await (await driver.findElement(By.css('a[href^="https://catalog.onliner.by/mobile"]'))).click();
}
catch(err) {
    console.error(err);
}
})();