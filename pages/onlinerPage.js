const BasePage = require('./basePage');
const locator = require('../data/locators');
// const {JavaScriptExecutor} = require('');
//onliner
const catalogButton = locator.CATALOG_BUTTON_xpath;
const mobilePhoneButton = locator.MOBILE_PHONES_BUTTON_xpath;
const honorCheckbox = locator.HONOR_CHECKBOX_xpath;
const dropdownForSort = locator.SORT_DROPDOWN_VALUE_css;
const expensive = locator.EXPENSIVE_DROPDOWN_VALUE_xpath;
const scroll300pxScript = locator.SCROLL_DOWN_300PX;
const scrollDownScript = locator.SCROLL_DOWN_FULL;
const pageHeader = locator.PAGE_HEADER_css;
const sortedPhones = locator.SORTED_PHONES_css;
const moreFoundElements = locator.SHOW_MORE_FOUND_ELEMENTS_css;
// const priceValue = locator.PRICE_VALUE_css;
const priceValue = '.schema-product__price-value.schema-product__price-value_primary';
//registration
const logIn = locator.ENTRANCE_BUTTON_css;
const registration = locator.REGISTRATION_LINK_css;
const email = locator.EMAIL_FIELD_css;
const wrongEmail = locator.WRONG_EMAIL_TIP_css;
const passwordFirst = locator.FIRST_PASSWORD_FIELD_css;
const passwordSecond = locator.SECOND_PASSWORD_FIELD_css;
const wrongPass = locator.WRONG_PASS_TIP_css;
const differentPass = locator.DIFFERENT_TIP_PASS_css;
const headerRegistration = locator.REGISTRATION_HEADER_css;
//forum
const forumButton = locator.FORUM_BUTTON_css;
const newDuring24hTab = locator.NEW_DURING24h_TAB_xpath;
const fondTopics = locator.FOND_TOPICS_css;
const topicPages = locator.TOPICS_PAGES_css;
const theLastTopicPage = locator.THE_LAST_TOPICS_PAGE_css;
const topicCreationTime = locator.TIME_OF_TOPIC_CREATION_css;
const topicCreationPeriod = locator.DURATION_OF_TOPIC_CREATION_css;

class OnlinerPage extends BasePage {

    constructor(driver, url) {
        super(driver, url);
    }

    async goToCatalog() {
        await (await this.findByXpath(catalogButton)).click();
        return await this.getPageTitle();
    }

    async goToMobilePhones() {
        await (await this.findByXpath(mobilePhoneButton)).click();
    }

    async sortByProducer() {
        try {
            await this.script(scroll300pxScript);
            await (await this.findByXpath(honorCheckbox)).click();
            let arrayWithPhones = [];
            let swichButtonClick = await this.findByCss(moreFoundElements);
            for (let i = 1; i < 3; i++) {
                let elem = await this.sortElements(sortedPhones);
                arrayWithPhones = arrayWithPhones.concat(elem);
                await this.scrollDownHotKeys();
                if (i == 2) break;
                await swichButtonClick.click();
            }
            return arrayWithPhones;
        } catch (err) {
            console.error(err);
        }
    }

    async sortByPriceDown() {
        await (await this.findByCss(dropdownForSort)).click();
        await (await this.findByXpath(expensive)).click();
        const arrayWithPrices = await this.sortElements(priceValue);
        return this.getNumbersFromArray(arrayWithPrices);
    }

    //-------------------------------------------------------
    async goToRegistration() {
        await (await this.findByCss(logIn)).click();
        await (await this.findByCss(registration)).click();
        return await this.getPageHeader(headerRegistration);
    }

    // TODO: show wrong msg
    async typeEmail(emailMessage) {
        await this.sendText(email, emailMessage);
    }

    async typePassword(writePassword) {
        await this.sendText(passwordFirst, writePassword);
    }

    async typeBothPasswords(firstPassword, secondPassword) {
        await this.sendText(passwordFirst, firstPassword);
        await this.sendText(passwordSecond, secondPassword);
    }

    async showTipWrongEmail() {
        const elem = await this.findByCss(wrongEmail);
        return await elem.getText();
    }

    async showTipWrongPass() {
        const tip = await this.findByCss(wrongPass);
        return await tip.getText();
    }

    async showTipDifferentPass() {
        const tip = await this.findByCss(differentPass);
        return await tip.getText();
    }

    //-------------------------------------------------------

    async goToForum() {
        await (await this.findByCss(forumButton)).click();
        return await this.getPageTitle();
    }
//TODO: передать селектор конкретный
    async goToTheLastNews() {
        await (await this.findByXpath(newDuring24hTab)).click();
        return await this.getPageHeader();
    }

    async findTopics() {
        return await this.findElementsByCss(fondTopics);
    }

    async todaysTopicsIsOnThePage() {
        await (await this.findByCss(theLastTopicPage)).click();
        let topics = await this.findElementsByCss(topicCreationPeriod);
        let timeFromCreation = [];
        for (let topic of topics) {
            let lastAdding = await topic.getText();
            timeFromCreation = lastAdding.split(' ');
        }
        return ((24 - +timeFromCreation[0] <= 24) || (Number.isNaN(+timeFromCreation[0])) ? true : false);
    }
}

module.exports = OnlinerPage;

// async topicsTimeCreationOnTheLastPage() {
//     // await this.findByCss(theLastTopicPage).click();
//     await this.findByCss(theLastTopicPage).click();
//     // await this.findElementsByCss(topicCreationTime)
//     //     .then((elements) => {
//     //         console.log('---------------' + elements.size());
//     //         for (let item of elements) {
//     //             if (item <= Data) {
//     //                 return item.getAttribute('title').then((item) => item);
//     //             } else return null;
//     //         }
//     //     })
//     //OR
//     let topics = await this.findElementsByCss(topicCreationPeriod);
//
//
//     // let topics = await this.findElementsByCss(topicCreationTime);
//     // const aDate = new Date();
//     // const currentDate = aDate.getTime();
//     // console.log('currentDate------------' + currentDate);
//     let timeFromCreation = [];
//     for (let topic of topics) {
//
//         let lastAdding = await topic.getText();
//         let timeFromCreation = lastAdding.split(' ');
//         console.log('timeFromCreation------------' + timeFromCreation[0]);
//
//         // const dateOfOneTopic = await topic.getAttribute('title');
//
//         // console.log('topicData------------' + dateOfOneTopic);
//
//         //lib MOMENTjs
//         // var momentDate = moment('2015-01-16 22:15:00', 'YYYY-MM-DD HH:mm:ss'); var jsDate = momentDate.toDate();
//         // var dateString = "2015-01-16 22:15:00";
//
//         // let options = {
//         //     year: 'numeric',
//         //     month: 'long',
//         //     day: 'numeric',
//         //     hour: '2-digit',
//         //     minute: '2-digit',
//         //     hour12: false,
//         //     timezone: 'Europe/Minsk'
//         // };
//
//         // var datetime = "20/02/2017 10:30";
//         // let tmp = dateOfOneTopic.split(' ');
//         // var date = tmp[0].split('/');
//         // let time = tmp[3].split(':');
//         // let result1 = new Date(tmp[2], tmp[1], tmp[0], time[0], time[1]);
//
//         // let date = new Date(result1);
//         // let date = new Date(dateOfOneTopic);
//         //    date.toLocaleString("ru", options);
//
//         // var date = Date.parse(dateOfOneTopic, "dd MM yyyy HH:mm").toLocaleString('ru', options);
//         // Date.parse(dateOfOneTopic, options)
//
//         //             const topicDateTime = new Date(date);
//         //             console.log('topicDataTime------------' + topicDateTime);
//         // let result = ((currentDate - timeFromCreation[0]) <= 24 * 60 * 60 * 1000) ? true : false;
//
//         // return (currentDate - topicDateTime <= 24 * 60 * 60 * 1000) ? true : false;
//     }
//     return ((24 - +timeFromCreation[0] <= 24 )|| (Number.isNaN(+timeFromCreation[0])) ? true : false);
// }