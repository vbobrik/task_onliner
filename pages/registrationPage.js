let BasePage = require('./basePage');
const locator = require('./locators');

const logIn = locator.ENTRANCE_BUTTON_css;
const registration = locator.REGISTRATION_LINK_css;
const email = locator.EMAIL_FIELD_css;
const wrongEmail = locator.WRONG_EMAIL_SIGN_xpath;
const pass = locator.PASSWORD_FIELD_css;
const wrongPass = locator.WRONG_PASS_SIGN_xpath;

class RegistrationPage extends BasePage {

    constructor(driver, url) {
        super(driver, url);
    }

    async goToRegistration() {
        await this.findByCss(logIn).click();
        const result = await this.findByCss(registration).click();
        return result;
    }
    //TODO: show wrong msg
    async typeEmail() {
        const result = await this.findByCss(email).click();
        return result.getText();
    }
    //TODO: show wrong msg
    async typePassword() {
        return await this.findByCss(pass).click();
    }
}

module.exports = RegistrationPage;