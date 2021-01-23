var HtmlReporter = require('protractor-beautiful-reporter');
var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');

exports.config = {
    directConnect: true,

    params: {

        url: "https://rr-mropp-dev-pp7.flatironssolutions.com/pinpoint/#/main",
        //url: "https://pp-tha-dev.flatironssolutions.com/pinpoint/#/main",

        // url: "https://rr-mropp-dev-pp7.flatironssolutions.com/pinpoint/#/main",
        // url: "https://rr-mropp-qc-pp-ppm.flatironssolutions.com/pinpoint/#/main",

        usrcredentials: { username: 'rr-author', password: 'author123' },
        //waitInMilliSeconds: 2000,
    },

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'unexpectedAlertBehaviour': 'ignore',
        },

    ],


    /*   
    seleniumAddress: 'http://localhost:9515',
      multiCapabilities: [
          {
              browserName: 'MicrosoftEdge',
              elementScrollBehavior: 1,
              nativeEvents: false
            },
      ], */

    specs: [
        '../e2e/C001_OpenPinpoint.spec.js',
        '../e2e/C002_VerifyAuthoringACM_permission.js',
         '../e2e/C003_VerifyAuthoringBtnPinpoint.js'

    ],

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(80000);
        browser.waitForAngularEnabled(false);
        
        /*Report config */
        //Allure Report
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
        var reporter = new HtmlReporter({
            baseDirectory: 'tmp/screenshots',
        });


        //Protractor html reporter 2
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));


    },

    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: false,
        disableScreenshot: false,
        screenshotPath: './reports/screenshots',
        screenshotOnExpectFailure: true,
        screenshotOnSpecFailure: true,
        clearFoldersBeforeTest: true,
        htmlReportDir: './reports/htmlReports'
    }],

    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });
    }

}










