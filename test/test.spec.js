const URL = 'https://www.onliner.by/';
const onlinerPage = require('../pages/onlinerPage');
const registrationPage = require('../pages/registrationPage');
const forumPage = require('../pages/forumPage');

"use strict";
describe('verification of onliner pages', function () {
    let basePage, driver;
    let originalTimeout;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    //Preparation
    // beforeAll(async () => {
    //     basePage = new onlinerPage();
    //     driver = basePage.driver;
    //     await basePage.visit(URL);
    // })

    //for case 1
    // beforeAll(async()=> {

    //     basePage = new onlinerPage();
    //              driver = basePage.driver;
    //     await basePage.visit(URL);
    //     // await basePage.navigate(URL);
    // })

    //for case 2
    beforeAll(async () => {

        basePage = new registrationPage();
        driver = basePage.driver;
        await basePage.visit(URL);
    })

    // describe('Test case №1', function () {

    //     it('go to catalog on the onliner and verify title',async function () {            
    //         await basePage.goToCatalog();
    //         let title = await basePage.getCurrentTitle();
    //         console.log('---------------22' + title);
    //         expect(title).toEqual('Каталог Onliner');
    //     })

    //     it('go to "Mobile phones" tab', async function () {
    //         await basePage.goToMobilePhones();
    //         const result = await basePage.getCurrentTitle();
    //         console.log('---------------33' + result);
    //         expect(result).toContain('Мобильный телефон');
    //         const header = await basePage.getPageHeader();
    //         expect(header).toMatch('Мобильные телефоны');
    //     })

    // it('sort elements by "HONOR" producer', function () {
    //     basePage.sortByProducer();
    //     const result = basePage.get
    //     expect().toEqual("HONOR"); //TODO: 1. Check lower case too  2. Check on 2 pages
    // })                                                    // Во всех результатах поиска (на двух страницах) присутствует слово «HONOR»

    // it('sort elements by price descending', async function () {

    // const result = await basePage.sortByPriceDown();
    // console.log(result);
    // expect(result).toBeGreaterThanOrEqual(basePage.currentTitle());
    // })
    // })

    describe('Test case №2', function () {
        it('go to registration page', async () => {
            let title = await basePage.goToRegistration();
            title = await title.getText();
            await console.log('---------------22' + title);
            expect(title).toContain('Регистрация');

        })

            it('type incorrect email', async () => {
               await basePage.typeEmail('incorrect email');
                let email = await basePage.showTipWrongEmail();
                // email = await email.getText();
                // console.log('-------' + );
                console.log('-------' +  email);
                expect(email).toEqual('Некорректный e-mail');
            })

        //     it('type password less then 8 symbols', async () => {
        //         const passUpTo7Symb = 1234567;
        //         registrationPage.typePass(passUpTo7Symb);
        //         expect(registrationPage.showTipWrongPass()).toEqual('Минимум 8 символов');
        //     })

        //     it('type different pass into the pass input fields', async () => {
        //         registrationPage.typePass(passUpTo7Symb); // TODO with spec!!!!!!!!
        //         expect(registrationPage.showTipWrongPass()).toEqual('Пароли не совпадают');
        //     })
    })

    // describe('Test case №3', function () {
    //     it('go to forum page', async () => {
    //         forum = new forumPage();
    //         await forum.goToForum();
    //         expect(forum.currentTitle()).toEqual('Форум onliner.by – Главная страница');
    //     })

    //     it('Go to tab "New durin the last 24 hour"', async () => {
    //         forum.goToTheLastNews();
    //         const topics = await forum.findTopics();
    //         expect(topics.length).toBeGreaterThanOrEqual(1);
    //     })

    //     it('amount of found topics is more then 1', async () => {
    //         forum.lastTopic().click();
    //         forum.lastTopic().click();
    //         expect(registrationPage.showTipWrongEmail()).toEqual('Некорректный e-mail');

    //     })

    //     it('all topics on the last page was created today', async () => {
    //         expect(forum.topicsTimeCreationOnTheLastPage()).toBeTruthy();

    //     })
    // })

    afterAll(async () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        // await basePage.quit();
    })

    // afterALL(async () => {
    //     await basePage.quit();
    // })
})