//let logger =  require('./log.js')
let Common = require('./commonActions.js')
let Locators = require('./locators.js')
let Library = require('./commonLibraries.js')
const { browser, element, by } = require('protractor')

const common = new Common()
const locators = new Locators()
const library = new Library()

const credentials = browser.params.usrcredentials


describe("Open the Pinpoint Viewer home page", function () {

  beforeAll(function () {
    console.log("Case id : C001 started")
    common.openUrl(browser.params.url)

  })


  it('should able to log into application', async function () {

    common.waitForElementPresent(locators.loginBtn)
    common.waitForElementClickable(locators.loginBtn)

    library.login(credentials)
    // logger.log('info','Login to the application');
  });


  it('User should able to I agree the EULA popup', async function () {

    library.handleEulapop()

  });


  afterAll(function () {
    library.logout()
    console.log("-----------------------------------------------------Case id : C001 End--------------------------------------------------------")
    //  browser.close();
  })

})