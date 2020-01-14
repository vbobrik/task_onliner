
const URL = 'https://www.onliner.by/';
const Page = require('../pages/onlinerPage');

describe('', async function () {
    let basePage, driver;
    //Preparation
    beforeEach(async () => {
        basePage = new Page();
        driver = basePage.driver;
        await basePage.visit(URL);
    })

      it('go to catalog on the onliner',async function () {
                const result = await basePage.goToCatalog();
        expect(result).toEqual(basePage.currentTitle());
    })

    // it('go to "Mobile phones" tab', function () {
    //   expect(basePage.goToMobilePhones()).toEqual(basePage.currentTitle());
    // })

    // it('sort elements by "HONOR" producer', function () {
    //   expect(basePage.sortByProducer()).toEqual("HONOR"); //TODO: 1. Check lower case too  2. Check on 2 pages
    // })                                                    // Во всех результатах поиска (на двух страницах) присутствует слово «HONOR»

    // it('sort elements by price descending', function () {
    //   expect(basePage.sortByPriceDown()).toBeGreaterThanOrEqual(basePage.currentTitle()); //Цена первого(-ых) результатов должна быть равна или больше следующих
    // })

    afterEach(async () => {
        await basePage.quit();
    })
})