module.exports = {
    //Onliner catalog
    MAIN_URL: 'https://www.onliner.by/',
    CATALOG_BUTTON_xpath: './/div/nav//*[text()="Каталог"]',
    MOBILE_PHONES_BUTTON_xpath: './/*[text()="Мобильные телефоны"]',
    HONOR_CHECKBOX_xpath: './/li//*[text()="HONOR"]',
    EXPENSIVE_DROPDOWN_VALUE_xpath: './/*[text()="Дорогие"]',
    SORT_DROPDOWN_VALUE_css: '.schema-order__link',
    SCROLL_DOWN_300PX: 'window.scrollBy(0,300)',
//Onliner registration
    ENTRANCE_BUTTON_css: '.auth-bar__item.auth-bar__item--text',
    REGISTRATION_LINK_css: '[href$="registration"]',
    EMAIL_FIELD_css: '[type="email"]',
    WRONG_EMAIL_SIGN_xpath: './/*[text()="Некорректный e-mail"]',
    PASSWORD_FIELD_css: '[placeholder="Придумайте пароль"]',
    WRONG_PASS_SIGN_xpath: './/*[text()="Минимум 8 символов"]'
}

// const MAIN_URL = 'https://www.onliner.by/';
// const CATALOG_BUTTON = By.xpath('.//div/nav//*[text()="Каталог"]');
// const MOBILE_PHONES_BUTTON = By.xpath('.//*[text()="Мобильные телефоны"]');
// const HONOR_CHECKBOX = By.xpath('.//li//*[text()="HONOR"]');
// const EXPENSIVE_DROPDOWN_VALUE = By.xpath('.//*[text()="Дорогие"]');