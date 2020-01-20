const BasePage = require('./basePage');
const locator = require('./locators');

const logIn = locator.ENTRANCE_BUTTON_css;
const registration = locator.REGISTRATION_LINK_css;
const email = locator.EMAIL_FIELD_css;
const wrongEmail = locator.WRONG_EMAIL_SIGN_xpath;
const pass = locator.PASSWORD_FIELD_css;
const wrongPass = locator.WRONG_PASS_SIGN_xpath;
const headerRegistration = locator.HEADER_REGISTATION_css;

class RegistrationPage extends BasePage {

    constructor(driver, url) {
        super(driver, url);
    }

    async goToRegistration() {
        await this.findByCss(logIn).click();
        await this.findByCss(registration).click();
        return await this.findByCss(headerRegistration);
    }


    //TODO: show wrong msg
    async typeEmail(emailMessage) {
        await this.findByCss(email).sendKeys(emailMessage);
        // return await result.getText();
    }

    //TODO: show wrong msg
    async typePassword() {
        await this.findByCss(pass).click();
    }

    showTipWrongEmail() {
        // this.wait(until.elementLocated(this.findByXpath(wrongEmail)), 5000);
        return new Promise(resolve => {
            let x;
            setTimeout(async () => {
                x = await this.findByXpath(wrongEmail);
                console.log('-------' +  x);
            }, 2000);
            resolve(x);
        })
        // return await this.findByXpath(wrongEmail);
    }

    async showTipWrongPass() {
        return await this.findByXpath(wrongPass);
    }


}

module.exports = RegistrationPage;