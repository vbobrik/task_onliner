let BasePage = require('./basePage');
const locator = require('./locators');
//onliner
const catalogButton = locator.CATALOG_BUTTON_xpath;
const mobilePhoneButton = locator.MOBILE_PHONES_BUTTON_xpath;
const honorCheckbox = locator.HONOR_CHECKBOX_xpath;
const dropdownForSort = locator.SORT_DROPDOWN_VALUE_css;
const expensive = locator.EXPENSIVE_DROPDOWN_VALUE_xpath;
const scrollScript = locator.SCROLL_DOWN_300PX;
const pageHeader = locator.PAGE_HEADER_css;
const sortedPhones = locator.SORTED_PHONES_css;
// const priceValue = locator.PRICE_VALUE_css;
const priceValue = '.schema-product__price-value.schema-product__price-value_primary';
//registration
const logIn = locator.ENTRANCE_BUTTON_css;
const registration = locator.REGISTRATION_LINK_css;
const email = locator.EMAIL_FIELD_css;
const wrongEmail = locator.WRONG_EMAIL_SIGN_xpath;
const pass = locator.PASSWORD_FIELD_css;
const wrongPass = locator.WRONG_PASS_SIGN_xpath;
const headerRegistration = locator.REGISTRATION_HEADER_css;
//forum
const forumButton = locator.FORUM_BUTTON_css;
const newDuring24hTab = locator.NEW_DURING24h_TAB_xpath;
const fondTopics = locator.FOND_TOPICS_css;
const topicPages = locator.TOPICS_PAGES_css;
const theLastTopicPage = locator.THE_LAST_TOPICS_PAGE_css;
const topicCreationTime = locator.TIME_OF_TOPIC_CREATION_css;
"use strict";
class OnlinerPage extends BasePage {

    constructor(driver, url) {
        super(driver, url);
    }

    async goToCatalog() {
        // const result = this.findByXpath(catalogButton).click();
        // console.log('---------------' + result);
        // return result;
        //  return await this.getCurrentUrl();

        await this.findByXpath(catalogButton).click();
    }

    async goToForum() {
        await this.findByCss(forumButton).click();
    }

    async goToRegistration() {
        await this.findByCss(logIn).click();
        await this.findByCss(registration).click();
        return await this.findByCss(headerRegistration);
    }

    async goToTheLastNews() {
        await this.findByXpath(newDuring24hTab).click();
    }

    async findTopics() {
        return await this.findElementsByCss(fondTopics);
    }

    async getSortedElements() {
        await this.findElementsByCss(sortedPhones);
    }

    async goToMobilePhones() {
        await this.findByXpath(mobilePhoneButton).click();
    }

   

    async sortByProducer() {
        await this.script(scrollScript);
        await this.findByXpath(honorCheckbox).click();
        // return await this.findElementsByCss(sortedPhones);
        await this.findElementsByCss(sortedPhones);
       let elements = await this.findElementsByCss(sortedPhones);
        console.log('-------' + elements.length);
        console.log('getAllElements-------' + await this.getAllElements(elements));
      
       
    }
  

   

    async sortByPriceDown() {
        const arrayOfElements = [];
        const text = '';
        const arr = [];

        await this.findByCss(dropdownForSort).click(); //OK
        await this.findByXpath(expensive).click();//OK
        //с этого момента все идет не по плану
        const elements = await this.findElementsByCss(priceValue);
        //   await some.size[]
        await console.log('-------' + elements.length);

        async () => {
            //  elements.forEach((item) => {
            for (let item of elements) {

                // arrayOfElements.push(item);
                text = await item.getText();
                console.log('text-------' + text);
                arr = text.split(',');
                console.log('arr-------' + arr[0]);
                await arrayOfElements.push(arr[0]);
            }
        }

        await console.log('arrayOfElements-------' + arrayOfElements.toString());
        return arrayOfElements;
    }

    async getPageHeader() {
        //case1
        // return (await this.findByCss(pageHeader)).getText();
        // return await this.findByCss('h1').clone().children().remove().end().text();
        //case3, for case1 too
        return await (await this.findByCss('h1')).getText();
        // console.log(trim($(".in-featuredlisting").contents().not($(".in-featuredlisting").children()).text()));

    }

    async findTopics() {
        return await this.findElementsByCss(fondTopics);
    }

    //TODO: show wrong msg
    async typeEmail(emailMessage) {
        await this.findByCss(email).sendKeys(emailMessage);
        // return await result.getText();
    }


    //TODO: show wrong msg
    async typePassword(writePassword) {
        await this.findByCss(pass).sendKeys(writePassword);
            }

    showTipWrongEmail() {
        // this.wait(until.elementLocated(this.findByXpath(wrongEmail)), 5000);
        return new Promise(resolve => {
            const x = '';
            // const text;
            setTimeout(async () => {
                x = await this.findByXpath(wrongEmail);
                // text = await x.getText();
                console.log('x-------' + x);
            }, 4000);
            resolve(x);
        })
        // return await this.findByXpath(wrongEmail);
    }

    async showTipWrongPass() {
            return new Promise(resolve => setTimeout(async() => {
              return  resolve(await this.findByXpath(wrongPass));
         }, 1000));
        // this.wait(until.elementLocated(this.findByXpath(wrongEmail)), 5000);
        
    }

    async topicsTimeCreationOnTheLastPage() {
        // await this.findByCss(theLastTopicPage).click();
        await this.findByCss(theLastTopicPage).click();
        // await this.findElementsByCss(topicCreationTime)
        //     .then((elements) => {
        //         console.log('---------------' + elements.size());
        //         for (let item of elements) {
        //             if (item <= Data) {
        //                 return item.getAttribute('title').then((item) => item);
        //             } else return null;
        //         }
        //     })
        //OR
        let topics = await this.findElementsByCss(topicCreationTime);
        const aDate = new Date();
        const currentDate = aDate.getTime();
        console.log('currentDate------------' + currentDate);
        // const dateOfOneTopic = '';
        for (let topic of topics) {

            const dateOfOneTopic = await topic.getAttribute('title');
            console.log('topicData------------' + dateOfOneTopic);
            // var momentDate = moment('2015-01-16 22:15:00', 'YYYY-MM-DD HH:mm:ss'); var jsDate = momentDate.toDate();
            // var dateString = "2015-01-16 22:15:00"; 
            let options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timezone: 'Europe/Minsk'
            };
            let date = new Date().toLocaleString("ru", options);

            // var date = Date.parse(dateOfOneTopic, "dd MM yyyy HH:mm").toLocaleString('ru', options);
            console.log('date------------' + date);
            //             const topicDateTime = new Date(date);
            //             console.log('topicDataTime------------' + topicDateTime);
            let result = ((currentDate - date) <= 24 * 60 * 60 * 1000) ? true : false;
            console.log(result);
            // return (currentDate - topicDateTime <= 24 * 60 * 60 * 1000) ? true : false;
        }
    }
}
module.exports = OnlinerPage;