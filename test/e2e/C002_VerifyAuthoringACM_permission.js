//let logger =  require('./log.js')
let Common = require('./commonActions.js')
let Locators = require('./locators.js')
let Library = require('./commonLibraries.js')
const { browser, element, by } = require('protractor')
const commonLibrary = require('./commonLibraries.js')

const common = new Common()
const locators = new Locators()
const library = new Library()

const credentials = browser.params.usrcredentials
const checkbox = locators.acmReadpermission_checkbox

describe("Open Pinpoint & Navigate to ACM home page", function () {

    beforeAll(function () {
        console.log("Case id : C002 started")
        common.openUrl(browser.params.url)

    })

 /*    it('should able to log into Pinpoint viewer', async function () {
        common.waitForElementPresent(locators.loginBtn)
        await common.waitForElementClickable(locators.loginBtn)
        library.login(credentials)

    }); */

    it('User should able to I agree the EULA popup', async function () {

        library.handleEulapop()

    });

    it('should able to switch to ACM home page in New Tab', async function () {
        common.waitForElementClickable(locators.acmIcon)
        common.waitForElementAndClick(locators.acmIcon)
        console.log("Switching to new window tab")
        let tabCount = await common.tabCount()
        common.switchToNewTab()
        expect(tabCount).toBe(2)
        console.log("New window title is:" + await browser.getTitle());

    });

    it('Go to Privileges page', function () {
        common.waitForElementClickable(locators.privilegeIcn)
        common.waitForElementAndClick(locators.privilegeIcn)
        console.log("Privileges page opened")

    });

    it('Navigate to Privilage > Role > select rr-author Role', async function () {
        common.waitForElementClickable(locators.privDropdown)
        common.waitForElementAndClick(locators.privDropdown)
        common.waitForElementClickable(locators.privDropdown_role)
        common.waitForElementAndClick(locators.privDropdown_role)
        common.waitForElementClickable(locators.selectOrgRole)
        common.waitForElementAndClick(locators.selectOrgRole)

        // console.log(locators.selectOrgRole.getText())
        // browser.sleep(3000)

    });

    it('Verify/Enable rr-author role user have "can author content" read permission', async function () {

        common.waitForElementClickable(locators.acm_PPresoureceTree)
        common.waitForElementAndClick(locators.acm_PPresoureceTree)
        common.waitForElementClickable(locators.acm_PPresoureceTree2)
        common.waitForElementAndClick(locators.acm_PPresoureceTree2)
        common.waitForElementClickable(locators.acmCanAuthrCnt)
        common.waitForElementAndClick(locators.acmCanAuthrCnt)

        //  library.selectCheckbox(locators.acmReadpermission_checkbox)

        var chkbox = element(by.css('#permissionTypeCheckboxRead'));
        chkbox.isSelected().then(bSelected => {
            console.log('chkbox', bSelected);
        })

    });

    afterAll(async function () {
        /* common.waitForElementClickable(locators.acmlogOut)
        common.waitForElementAndClick(locators.acmlogOut)
        console.log("Acm logged-out succssfuly") */
        
        browser.close()
        common.switchToParentTab()
        
        console.log("Current Window title is:" + await browser.getTitle());

        library.logout()
        console.log("-----------------------------------------------------Case id : C002 End--------------------------------------------------------")
        
    })

})