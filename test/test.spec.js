const URL = 'https://www.onliner.by/';
const onlinerPage = require('../pages/onlinerPage');
const PASS_LESS_THAN_MIN = 1234567;
const PASS_LESS_THAN_MIN_2 = 12345005;

// "use strict";
describe('verification of onliner pages', function () {
    let basePage, driver;
    let originalTimeout;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

    beforeAll(async () => {
        basePage = new onlinerPage();
        driver = basePage.driver;
        await basePage.visit(URL);
    })

    // beforeEach(async () => {
    //     await basePage.visit(URL);
    // })

    describe('Test case №1', function () {

        it('go to catalog on the onliner and verify title', async function () {
            expect(await basePage.goToCatalog()).toMatch('Каталог Onliner', 'The title is not "Каталог Onliner"');
        })

        it('go to "Mobile phones" tab', async function () {
            await basePage.goToMobilePhones();
            // expect(await basePage.getPageTitle()).toContain('Мобильный телефон', 'The title doesn\'t contain "Мобильный телефон"');
            // expect(await basePage.getPageHeader()).toMatch('Мобильные телефоны', 'The header is not "Мобильные телефоны"');
        })

        it('sort elements by "HONOR" producer', async function () {
            const sortedPhones = await basePage.sortByProducer();
            // for await (let phone of sortedPhones) {
            //     const phoneName = await phone.getText();            
            //     expect(phoneName).toContain("HONOR", 'Found pages does not match goal of search "HONOR"');
            // }

        })

        it('sort elements by price descending', async function () {

            const elements = await basePage.sortByPriceDown();
            console.log('elements---------' + elements);
            //  elements = await elements.getText();
            console.log(Array.isArray(elements));
            console.log(typeof (elements));
            elements.forEach((item, index) => {
                if (index == elements.length - 1) {
                    return;
                }
                console.log('item---------' + item);
                console.log('1+item---------' + elements[index + 1]);
                // expect(elements[index] >= elements[index + 1]).toBeTruthy();         
                // expect(item >= elements[index + 1]).toBeTruthy();         
                expect(elements[index]).toBeGreaterThanOrEqual(elements[index + 1], 'sort by price is absent');

            })
            //     for await (let item of elements) {
            //     //    for (i = 0; i < elements.length - 1; i++) {
            //        for (i = 0; i < 5; i++) {

            //             console.log('item---------' + item);               
            //             console.log('item---------' + item[i]);               
            //             console.log('1+item---------' + (item[i + 1]));               
            // // expect(item[i]).toBeGreaterThanOrEqual(item [i + 1], 'sort by price is absent');
            //         }
            //     }
        })
    })

    // describe('Test case №2', function () {
    //     it('go to registration page', async () => {
    //         const title = await basePage.goToRegistration();
    //         expect(await title.getText()).toContain('Регистрация', 'The header doesn\'t contain "Регистрация"');
    //     })

    //     it('type incorrect email', async () => {
    //         await basePage.typeEmail('incorrect email');
    //         const email = await basePage.showTipWrongEmail();
    //         expect(await email.getText()).toEqual('Некорректный e-mail', 'The tip "Некорректный e-mail" is absent');
    //     })

    //     it('type password less then 8 symbols', async () => {
    //         await basePage.typePassword(PASS_LESS_THAN_MIN);
    //         const text = await basePage.showTipWrongPass();
    //         expect(await text.getText()).toEqual('Минимум 8 символов', 'The tip "Минимум 8 символов" is absent');
    //     })

    //     it('type different pass into the pass input fields', async () => {
    //         await basePage.typeBothPasswords(PASS_LESS_THAN_MIN, PASS_LESS_THAN_MIN_2);
    //         const passwordTip = await basePage.showTipDifferentPass();
    //         expect(await passwordTip.getText()).toEqual('Пароли не совпадают', 'The tip "Пароли не совпадают" is absent');
    //     })
    // })

    // describe('Test case №3', function () {
    // it('go to forum page', async () => {
    //     expect(await basePage.goToForum()).toEqual('Форум onliner.by - Главная страница', 'The title is not "Форум onliner.by - Главная страница"');
    // })
    // //TODO: toContain() replace by toEqual(), Before needs to get h1 without children
    // it('Go to tab "New durin the last 24 hour"', async () => {
    //     expect(await basePage.goToTheLastNews()).toContain('Новое за 24 часа', 'The header is not "Новое за 24 часа"');
    // })

    // it('amount of found topics is more then 1', async () => {
    //     const topics = await basePage.findTopics();
    //     expect(topics.length).toBeGreaterThanOrEqual(1, 'Topics amount is not less than 1');
    // })

    // it('all topics on the last page were created today', async () => {
    // await basePage.topicsTimeCreationOnTheLastPage();

    //     // expect(basePage.topicsTimeCreationOnTheLastPage()).toBeTruthy(, 'All topics have created less than 24h ago);
    // })
    // })

    afterAll(async () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        // await basePage.quit();
    })

    // afterALL(async () => {
    //     await basePage.quit();
    // })
})