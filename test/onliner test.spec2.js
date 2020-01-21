const URL = 'https://www.onliner.by/';
const onlinerPage = require('../pages/onlinerPage');

let basePage;
let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

beforeAll(async () => {
    basePage = new onlinerPage();
    driver = basePage.driver;
    await basePage.visit(URL);
})


describe('Test case №1, verification of onliner page:', function () {
    it('go to catalog on the onliner and verify title', async function () {
        expect(await basePage.goToCatalog()).toMatch('Каталог Onliner', 'The title is not "Каталог Onliner"');
    })

    it('go to "Mobile phones" tab', async function () {
        await basePage.goToMobilePhones();
        expect(await basePage.getPageTitle()).toContain('Мобильный телефон', 'The title doesn\'t contain "Мобильный телефон"');
        expect(await basePage.getPageHeader()).toMatch('Мобильные телефоны', 'The header is not "Мобильные телефоны"');
    })

    it('sort elements by "HONOR" producer', async function () {
        const sortedPhones = await basePage.sortByProducer();
        console.log(sortedPhones.length);
        for await (let phone of sortedPhones) {
            expect(phone).toContain("HONOR", 'Found pages does not match goal of search "HONOR"');
        }
    })

    it('sort elements by price descending', async function () {
        const elements = await basePage.sortByPriceDown();
        elements.forEach((item, index) => {
            if (index == elements.length - 1) return;
            expect(item >= elements[index + 1]).toBeTruthy();
            expect(elements[index]).toBeGreaterThanOrEqual(elements[index + 1], 'sort by price is absent');
        })
    })

    afterAll(async () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        await basePage.quit();
    })
})

