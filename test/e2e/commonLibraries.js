const { element, browser } = require('protractor')
let Common = require('./commonActions.js')
let Locators = require('./locators.js')

const common = new Common()
const locators = new Locators()

let commonLibrary = function () {

    this.login = function (credentials) {

        common.clearAndEnterValues(locators.userIdTxtBox, credentials.username)
        common.clearAndEnterValues(locators.passwordTxtBox, credentials.password)
        common.waitForElementClickable(locators.loginBtn)
        common.waitForElementAndClick(locators.loginBtn)

    }

    this.handleEulapop = async function () {
        common.waitForElementClickable(locators.eulaPopup)
        await common.waitForElementAndClick(locators.eulaPopup)
        //  console.log("Page title is:" + await browser.getTitle());
        console.log("User Agreed the Eula Popup");
    }
    
   
    this.logout = function () {
        common.waitForElementAndClick(locators.moreButton)
        common.waitForElementAndClick(locators.logoutButton)
        let alrt = browser.switchTo().alert();
        
        alrt.getText().then(function(text)
       {
        console.log("Alert confimration text is: " +text + " Accepted the Logout confirmation alert popup");
       })
       alrt.accept();     // clicks 'OK' button
        //console.log("Accepted the Logout confirmation alert popup");
        browser.driver.manage().deleteAllCookies();
        //browser.executeScript('window.localStorage.clear()');

    }

    /* this.pencilIconPresent = function()
    {
        var pencilisIconPresent = browser.isElementPresent(locators.pencilIcon)
        pencilisIconPresent.getText().then(function(){
            console.log("Authoring icon is display = "+pencilisIconPresent);
        })
       
    } */

    /* this.selectCheckbox = function (el) {
        this.expect(element(by.css(el)).isSelected()).to.eventually.be(true)

        if (checkbox!=true) {
            checkbox.click();         
        } 
    }*/ 
    
                          /* Aler method*/
                        /*this.alertpopup = function()
                            {
                            alrt = browser.switchTo().alert();
                                // clicks 'OK' button
                            alrt.getText().then(function (text)  {
                                console.log(text);
                            })
                            alrt.accept();
                        } */

}

module.exports = commonLibrary;