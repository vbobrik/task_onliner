module.exports = {
    //Onliner catalog
    MAIN_URL: 'https://www.onliner.by/',
    CATALOG_BUTTON_xpath: './/div/nav//*[text()="Каталог"]',
    MOBILE_PHONES_BUTTON_xpath: './/*[text()="Мобильные телефоны"]',
    HONOR_CHECKBOX_xpath: './/li//*[text()="HONOR"]',
    EXPENSIVE_DROPDOWN_VALUE_xpath: './/*[text()="Дорогие"]',
    SORT_DROPDOWN_VALUE_css: '.schema-order__link',
    SCROLL_DOWN_300PX: 'window.scrollBy(0,300)',
    SCROLL_DOWN_FULL: 'window.scrollTo(0,140300)',
    PAGE_HEADER_css: '.schema-header__title',
    PRICE_VALUE_css: '.schema-product__price-value.schema-product__price-value_primary',
    SORTED_PHONES_css: '.schema-product.schema-product_narrow-sizes',
    SHOW_MORE_FOUND_ELEMENTS_css: '.schema-pagination__main>span',
//Onliner registration
    ENTRANCE_BUTTON_css: '.auth-bar__item.auth-bar__item--text',
    REGISTRATION_LINK_css: '[href$="registration"]',
    REGISTRATION_HEADER_css: '.auth-form__title',
    EMAIL_FIELD_css: '[type="email"]',
    // WRONG_EMAIL_SIGN_xpath: './/*[text()="Некорректный e-mail"]',
    WRONG_EMAIL_TIP_css: '.auth-form__description_extended-other',
    FIRST_PASSWORD_FIELD_css: '[placeholder="Придумайте пароль"]',
    SECOND_PASSWORD_FIELD_css: '[placeholder="Повторите пароль"]',
    // WRONG_PASS_SIGN_xpath: './/*[text()="Минимум 8 символов"]',
    WRONG_PASS_TIP_css: '.auth-form__description_tiny',
    DIFFERENT_TIP_PASS_css: '[min-length="8"] .auth-form__description_extended-other',
    //Onliner forum
    FORUM_BUTTON_css: '[href="https://forum.onliner.by/"]',
    NEW_DURING24h_TAB_xpath: './/*[text()="Новое за 24 часа"]',
    FOND_TOPICS_css: '.b-list-topics li', // OR ('li[class=""]') OR find without class: '.h-btmtopic li:not([class])'
    TOPICS_PAGES_css: '.b-hdtopic > script + .b-pages li:not([class])',
    THE_LAST_TOPICS_PAGE_css: '.b-hdtopic > script + .b-pages li:not([class]):nth-last-of-type(2)', //old '.h-btmtopic li:not([class]):last-child',
    TIME_OF_TOPIC_CREATION_css: '.b-lt-author>[title]'
}

// const MAIN_URL = 'https://www.onliner.by/';
// const CATALOG_BUTTON = By.xpath('.//div/nav//*[text()="Каталог"]');
// const MOBILE_PHONES_BUTTON = By.xpath('.//*[text()="Мобильные телефоны"]');
// const HONOR_CHECKBOX = By.xpath('.//li//*[text()="HONOR"]');
// const EXPENSIVE_DROPDOWN_VALUE = By.xpath('.//*[text()="Дорогие"]');