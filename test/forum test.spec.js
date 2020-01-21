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

describe('Test case №3, verification of goToForum page:', function () {
    it('go to forum page', async () => {
        expect(await basePage.goToForum()).toEqual('Форум onliner.by - Главная страница', 'The title is not "Форум onliner.by - Главная страница"');
    })
    //TODO: toContain() replace by toEqual(), Before needs to get h1 without children
    it('Go to tab "New durin the last 24 hour"', async () => {
        // expect(await basePage.goToTheLastNews()).toContain('Новое за 24 часа', 'The header is not "Новое за 24 часа"');
        expect(await basePage.goToTheLastNews()).toMatch('Новое за 24 часа', 'The header is not "Новое за 24 часа"');
        await basePage.goToTheLastNews();
    })

    // it('amount of found topics is more then 1', async () => {
    //     const topics = await basePage.findTopics();
    //     expect(topics.length).toBeGreaterThanOrEqual(1, 'Topics amount is not less than 1');
    // })
    //
    // it('all topics on the last page were created today', async () => {
    //     expect(await basePage.todaysTopicsIsOnThePage()).toBeTrue();
    // })
})

afterAll(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    await basePage.quit();
})