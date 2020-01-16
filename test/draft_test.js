
const URL = 'https://www.onliner.by/';
const OnlinerPage = require('../pages/onlinerPage');
const assert = require('assert');

"use strict";
async function catalog() {
    try {
        let basePage, driver;
        //Preparation
        basePage = new OnlinerPage();
        driver = basePage.driver;
        await basePage.visit(URL);

        // const result = await basePage.getCurrentTitle();
        // assert(result, 'Каталог Onliner');


        await basePage.goToMobilePhones();
        let header = await basePage.getPageHeader();
        console.log('---------------' + header);
        // await basePage.getSortedElements();
        await basePage.sortByPriceDown();
        
        // await basePage.sortByPriceDown();
    }
    catch (err) {
        console.error(err);
    }
    finally {
        // await basePage.quit();
    }
}

catalog();