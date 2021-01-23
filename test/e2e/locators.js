let Common = require('./commonActions.js')
const { element, by } = require("protractor")

let locators = function () {

    this.samlLogtext = element(by.xpath("//a[text()='Enter your username and password']"))
    this.userIdTxtBox = element(by.css('#username'))
    this.passwordTxtBox = element(by.css('#password'))
    this.loginBtn = element(by.css('#submit_button'))
    this.loginBtn_fleet = element(by.css('#btnLogin'))
    this.moreButton = element(by.css("[title='More...'][role='button']"))
    this.logoutButton = element(by.css("[class='dropdown-li ng-scope'][title='Logout']"))
    this.acmlogOut = element(by.css("[class='ng-isolate-scope'][title='Log Out']"))
    this.showEula = element(by.css('#showEulaPopup'))
    this.eulaPopup = element(by.css("button[ng-click*='vm.eulaAccepted()']"))                   //css('#eula-footer>button:nth-child(1)'))
    this.acmIcon = element(by.css("[class='navbar-icon ng-scope'][title='Access Control']"))   //element(by.css("[title='Access Control'][role='button']"))
    this.privilegeIcn = element(by.repeater('shortcut in config.shortcuts').row(0))             //element(by.className('icon-key'))
    this.privDropdown = element(by.model('vm.currentGroupRole'))
    this.privDropdown_role = element(by.repeater('groupOrRole in vm.groupOrRoleTypes').row(1))
    this.selectOrgRole = element(by.xpath("//tr[@ng-repeat='userGroup in vm.userGroups | filter:vm.search']/td[text()='RR-Author Role | Author ']"))//xpath("//tr[@ng-repeat='userGroup in vm.userGroups | filter:vm.search']/td[text()='[N4701] Organization Administrators ']"))             //element(by.repeater('userGroup in vm.userGroups | filter:vm.search').row(0))
    this.acm_PPresoureceTree = element(by.css('#resourceNavigationTree_3_switch'))
    this.acm_PPresoureceTree2 = element(by.css('#resourceNavigationTree_4_switch'))
    this.acmCanAuthrCnt = element(by.css('#resourceNavigationTree_7_span'))
    this.acmReadpermission_checkbox = element(by.css('#permissionTypeCheckboxRead'))
    this.sysOrgTree = element(by.css('#libraryTree_88_switch'))                                  //xpath("//div[@class='pp-ui-widget-content']//span[text()='System']")
    this.filterID = element(by.css('#filter'))
    this.tocclick = element(by.css('#toc_title_id'))
    // this.rrOrgTree = element(by.css('ul#libraryTree>li:first-of-type'))
    this.libTree_dummy = element(by.css('#libraryTree_7_switch'))
    this.libTree = element(by.xpath("//span[contains(@id,'libraryTree_')][text()[normalize-space()='MK-Author']]"))         //(by.css('#libraryTree>li>#libraryTree_6_switch'))//css('libraryTree_92_a'))
    this.publication_S1000D30 = element(by.css('#libraryTree_11_span'))                 //css('#libraryTree_13_span'))
    this.tocTree_DA0 = element(by.css('#tocTree_2_switch'))
    this.tocTree_00 = element(by.css('#tocTree_10_switch'))
    this.tocTree_00_1 = element(by.css('#tocTree_13_switch'))
    this.contentPage_wheelDesc = element(by.css('#tocTree_14_span'))
    this.pencilIcon = element(by.xpath("//i[@class='ng-scope fa fa-pencil']"))                      //css("[title='Turn on authoring mode']"))
    //this.authConfrmpopup = element(by.xpath("//div[@class='bootbox modal fade bootbox-confirm in']//descendant::button[@data-bb-handler='confirm']"))
    this.authConfrmpopup = element(by.css("div[class='bootbox modal fade bootbox-confirm in'] :last-child[data-bb-handler='confirm']"))



    /*  by.addLocator('ngClick', function(ngClick,toState,parentelement) {
             
                 
         var using = parentelement || document ;
         var prefixes = ['ng-click'];
         for (var p = 0; p < prefixes.length; ++p) {
             var selector = '*[' + prefixes[p] + '="' + toState + '"]';
             var buttons = using.querySelectorAll(selector);         
             if (buttons.length) {
                 return buttons;
             }
             	
         }		
 
     }); */

}

module.exports = locators