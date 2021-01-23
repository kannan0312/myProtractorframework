const { by } = require("protractor");
const locators = require("./locators");

var waitInMilliSeconds = 5000;
var common = function () {

    var that = this;


    //Common function for Open url

    this.openUrl = function (url) {
        browser.waitForAngularEnabled(false);
        browser.get(url);

    }
    //Common function to load & wait for elements present in DOM
    this.waitForElementPresent = function (el) {
        browser.wait(protractor.ExpectedConditions.presenceOf(el), waitInMilliSeconds, 'Element taking too long to appear in the DOM');
    }

    //Common function to wait for element to load in DOM and the element is clickable

    this.waitForElementAndClick = function (el) {
        this.waitForElementClickable(el)
        el.click()
    }

    /*  this.alrt = function (){
         that.alrt= browser.switchTo().alert();
         alrt.accept();
     } */

    this.waitForElementClickable = function (el) {
        browser.wait(protractor.ExpectedConditions.presenceOf(el), waitInMilliSeconds, 'Element taking too long to appear in the DOM');
        browser.wait(protractor.ExpectedConditions.visibilityOf(el), waitInMilliSeconds, 'Element is taking too long to Visible in the DOM');
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(el), waitInMilliSeconds, 'Element is not clickable');
    }

    this.clearAndEnterValues = function (el, txt) {
        that.waitForElementPresent(el)
        el.clear()
        el.sendKeys(txt)
    }

    this.getText = function (el) {
        that.waitForElementClickable(el)
        return el.getText().then(function (text) {
            return text;
        })
    }
    //Count the number of Tabs/windows
    this.tabCount = function () {
        return browser.getAllWindowHandles().then(function (handles) {
            return handles.length
        })
    }

    //Switc to another Tabs/windows
    this.switchToNewTab = function () {
        browser.getAllWindowHandles().then(function (tabs) {
            browser.driver.switchTo().window(tabs[1])
        })

        this.switchToParentTab = function () {
            browser.getAllWindowHandles().then(function (tabs) {
                browser.driver.switchTo().window(tabs[0])
            })
        }


    }
};

module.exports = common;