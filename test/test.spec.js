
const URL = 'https://www.onliner.by/';
const onlinerPage = require('../pages/onlinerPage');
const registrationPage = require('../pages/registrationPage');
const forumPage = require('../pages/forumPage');
let originalTimeout;

describe('Тест кейс №1', function () {
    let basePage, driver;
    //Preparation
    beforeAll(async () => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        basePage = new onlinerPage();
        driver = basePage.driver;
        await basePage.visit(URL);
    })

    it('go to catalog on the onliner',  function () {
        const result =  basePage.goToCatalog();
        console.log('---------------22' + result);
        expect(result).toEqual(basePage.currentTitle());
    })

    it('go to "Mobile phones" tab', function () {
        console.log('---------------33' + result);
      expect(basePage.goToMobilePhones()).toEqual(basePage.currentTitle());
    })

    // it('sort elements by "HONOR" producer', function () {
    //   expect(basePage.sortByProducer()).toEqual("HONOR"); //TODO: 1. Check lower case too  2. Check on 2 pages
    // })                                                    // Во всех результатах поиска (на двух страницах) присутствует слово «HONOR»

    // it('sort elements by price descending', function () {
    //   expect(basePage.sortByPriceDown()).toBeGreaterThanOrEqual(basePage.currentTitle()); //Цена первого(-ых) результатов должна быть равна или больше следующих
    // })

    it('go to registration page', async () => {
        expect(registrationPage.goToRegistration()).toEqual(registrationPage.currentTitle());
        registrationPage.typeEmail('incorrect email');
        expect(registrationPage.showTipWrongEmail()).toEqual('Некорректный e-mail');
        const passUpTo7Symb = 1234567;
        registrationPage.typePass(passUpTo7Symb);
        expect(registrationPage.showTipWrongPass()).toEqual('Минимум 8 символов');
        registrationPage.typePass(passUpTo7Symb); // TODO with spec!!!!!!!!
        expect(registrationPage.showTipWrongPass()).toEqual('Пароли не совпадают');
    })

    it('go to forum page', async () => {
        forum = new forumPage();
        await forum.goToForum();
        expect(forum.currentTitle()).toEqual('Форум onliner.by – Главная страница');
        forum.goToTheLastNews();
        const topics = await forum.findTopics();
        expect(topics.length).toBeGreaterThanOrEqual(1);
        forum.lastTopic().click();
        forum.lastTopic().click();
        expect(registrationPage.showTipWrongEmail()).toEqual('Некорректный e-mail');
      
    })

    afterALL(async () => {
        await basePage.quit();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })
})