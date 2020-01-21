const URL = 'https://www.onliner.by/';
const onlinerPage = require('../pages/onlinerPage');
const PASS_LESS_THAN_MIN = 1234567;
const PASS_LESS_THAN_MIN_2 = 12345005;

let basePage;
let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

beforeAll(async () => {
    basePage = new onlinerPage();
    driver = basePage.driver;
    await basePage.visit(URL);
})

describe('Test case №2, verification of registration page:', function () {
    it('go to registration page', async () => {
        const header = await basePage.goToRegistration();
        expect(header).toContain('Регистрация', 'The header doesn\'t contain "Регистрация"');
    })

    it('type incorrect email', async () => {
        await basePage.typeEmail('incorrect email');
        const email = await basePage.showTipWrongEmail();
        expect(email).toEqual('Некорректный e-mail', 'The tip "Некорректный e-mail" is absent');
    })

    it('type password less then 8 symbols', async () => {
        await basePage.typePassword(PASS_LESS_THAN_MIN);
        const text = await basePage.showTipWrongPass();
        expect(text).toEqual('Минимум 8 символов', 'The tip "Минимум 8 символов" is absent');
    })

    it('type different pass into the pass input fields', async () => {
        await basePage.typeBothPasswords(PASS_LESS_THAN_MIN, PASS_LESS_THAN_MIN_2);
        const passwordTip = await basePage.showTipDifferentPass();
        expect(passwordTip).toEqual('Пароли не совпадают', 'The tip "Пароли не совпадают" is absent');
    })
})

afterAll(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    await basePage.quit();
})
