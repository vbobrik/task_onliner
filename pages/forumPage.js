let BasePage = require('./basePage');
const locator = require('./locators');

const forumButton = locator.FORUM_BUTTON_css;
const newDuring24hTab = locator.NEW_DURING24h_TAB_xpath;
const fondTopics = locator.FOND_TOPICS_css;
const topicPages = locator.TOPICS_PAGES_css;
const theLastTopicPage = locator.THE_LAST_TOPICS_PAGE_css;
const topicCreationTime = locator.TIME_OF_TOPIC_CREATION_css;

"use strict";
class ForumPage extends BasePage {

    constructor(driver, url) {
        super(driver, url);
    }

    goToForum() {
        const result = this.findByXpath(forumButton).click();
        console.log('---------------' + result);
        return result;
    }

    async goToTheLastNews() {
        const result = await this.findByXpath(newDuring24hTab).click();
        return result.getText();
    }

    async findTopics() {
        return await this.findByXpath(fondTopics);
    }

    async topicsTimeCreationOnTheLastPage() {
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
        for (let topic of topics) {
            
            const topicData = await topic.getAttribute('title');
            const topicDataTime = new Data(topicData);
            console.log('------------' + topicData);
            return (currentDate - topicDataTime <= 24*60*60*1000) ? true : false;

        }
    }
}
module.exports = ForumPage;