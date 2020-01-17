const URL = 'https://www.onliner.by/';
const onlinerPage = require('../pages/onlinerPage');

"use strict";
describe('verification of onliner pages', function () {
    let basePage, driver;
    let originalTimeout;
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
      
    beforeAll(async () => {
        basePage = new onlinerPage();
        driver = basePage.driver;
        await basePage.visit(URL);
        // await basePage.navigate(URL);
    })

    // describe('Test case №1', function () {

    //     it('go to catalog on the onliner and verify title', async function () {
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

        // it('sort elements by "HONOR" producer', async function () {
            // await basePage.sortByProducer();
            // const sortedPhones = await basePage.sortByProducer();
            // for await (let phone of sortedPhones) {
            //    let phoneName = await phone.getText();
            //    console.log('phoneName---------------' + phoneName);
            //    console.log('phoneName---------------' + await sortedPhones[5].getText());
            // expect(phoneName).toContain("HONOR"); //TODO: 1. Check lower case too  2. Check on 2 pages
        
            // }
        // })                                                   

        // it('sort elements by price descending', async function () {

        //     const elements = await basePage.sortByPriceDown();
        //     console.log('elements---------' + elements);


        //     for await (let item of elements) {
        //         async () => {
        //             console.log('item---------' + item);
                    // expect(item.next()).toBeGreaterThanOrEqual(item);
                // }
                // expect(result).toBeGreaterThanOrEqual(basePage.getCurrentTitle());
    //         }
    //     })
    // })

    describe('Test case №2', function () {
        it('go to registration page', async () => {
            let title = await basePage.goToRegistration();
            title = await title.getText();
            await console.log('---------------22' + title);
            expect(title).toContain('Регистрация');

        })

    // it('type incorrect email', async () => {
    //    await basePage.typeEmail('incorrect email');
    //     let email = await basePage.showTipWrongEmail();
    //     // email = await email.getText();
    //     // console.log('-------' + );
    //    await console.log('-------' +  email);
    //     // expect(email).toEqual('Некорректный e-mail');
    // })

        it('type password less then 8 symbols', async () => {
            const passUpTo7Symb = "1234567";
            // const passUpTo7Symb = 1234567;
           await basePage.typePassword(passUpTo7Symb);
           const text = await basePage.showTipWrongPass();
           await text.getText();
            expect(text).toEqual('Минимум 8 символов');
        })

    //     it('type different pass into the pass input fields', async () => {
    //         basePage.typePass(passUpTo7Symb); // TODO with spec!!!!!!!!
    //         expect(basePage.showTipWrongPass()).toEqual('Пароли не совпадают');
    //     })
    })

    // describe('Test case №3', function () {
        // it('go to forum page', async () => {
        //     await basePage.goToForum();
        //     expect(await basePage.getCurrentTitle()).toEqual('Форум onliner.by - Главная страница');
        // })

        // it('Go to tab "New durin the last 24 hour"', async () => {
        //    await basePage.goToTheLastNews();          
        //         expect(await basePage.getPageHeader()).toContain('Новое за 24 часа');          
        // })

        // it('amount of found topics is more then 1', async () => {
        //                 const topics = await basePage.findTopics();
        //                 console.log('topics-------' + topics.length);
            
        //         expect(topics.length).toBeGreaterThanOrEqual(1);            
        // })

        // it('all topics on the last page was created today', async () => {
        // await basePage.topicsTimeCreationOnTheLastPage();
        
            
        //     // expect(basePage.topicsTimeCreationOnTheLastPage()).toBeTruthy();
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