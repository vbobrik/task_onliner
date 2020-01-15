
const URL = 'https://www.onliner.by/';
const BasePage = require('../pages/onlinerPage');


async function catalog() {
    try {
        let basePage, driver;
        //Preparation
        basePage = new BasePage(driver);
        driver = basePage.driver;

        await basePage.visit(URL);
        const result = await basePage.goToCatalog();
        expect(result.getText()).toEqual(await basePage.currentTitle());
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await basePage.quit();
    }
}

catalog();