//let logger = require('./log');
let Common = require('./commonActions.js')
let Locators = require('./locators.js')
let Library = require('./commonLibraries.js')
const { browser, element, by, CommandName } = require('protractor')

const common = new Common()
const locators = new Locators()
const library = new Library()

const credentials = browser.params.usrcredentials


describe("Open the Pinpoint Viewer home page", function () {

    beforeAll(function () {

        console.log("Case id : C003 started")
        common.openUrl(browser.params.url)

    })

    /*   it('should able to log into application', async function () {
          common.waitForElementClickable(locators.loginBtn)
          library.login(credentials)
  
      }); */

    it('User should able to I agree the EULA popup', async function () {

        library.handleEulapop()
    });

    it('Open Manual and verify Authoring icon is displaying', async function () {
        /*  common.waitForElementPresent(locators.sysOrgTree)
         common.waitForElementClickable(locators.sysOrgTree)
         common.waitForElementAndClick(locators.sysOrgTree) */

       /*  common.waitForElementClickable(locators.libTree_dummy) */
        common.waitForElementAndClick(locators.libTree_dummy)
        common.waitForElementPresent(locators.filterID)
        common.waitForElementAndClick(locators.tocclick)

        common.waitForElementClickable(locators.libTree)
        common.waitForElementAndClick(locators.libTree)

        
        common.waitForElementClickable(locators.publication_S1000D30)
        common.waitForElementAndClick(locators.publication_S1000D30)

        common.waitForElementClickable(locators.tocTree_DA0)
        common.waitForElementAndClick(locators.tocTree_DA0)

        common.waitForElementClickable(locators.tocTree_00)
        common.waitForElementAndClick(locators.tocTree_00)

        common.waitForElementClickable(locators.tocTree_00_1)
        common.waitForElementAndClick(locators.tocTree_00_1)

        common.waitForElementClickable(locators.contentPage_wheelDesc)
        common.waitForElementAndClick(locators.contentPage_wheelDesc)

        //browser.sleep(10000)
       var pencilIconPresent = browser.isElementPresent(locators.pencilIcon)
        console.log("Authoring icon is display = "+pencilIconPresent);

    });

    it('Verify is able to click Authoring icon and Auhtoring mode confirmation pop', async function () {

        common.waitForElementClickable(locators.pencilIcon)
        common.waitForElementAndClick(locators.pencilIcon)

        common.waitForElementClickable(locators.authConfrmpopup)
        //browser.sleep(2000)
        common.waitForElementAndClick(locators.authConfrmpopup)


    });

    afterAll(function () {
        library.logout()
        console.log("-----------------------------------------------------Case id : C003 End--------------------------------------------------------")
        //browser.close();
    })

})