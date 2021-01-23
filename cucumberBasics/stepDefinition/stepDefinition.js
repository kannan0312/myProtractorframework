var {Given,When,Then} = require('@cucumber/cucumber');

Given('User navigates to Pinpoint website',function(){
return console.log('@Given -- User navigates to Pinpoint website');
});

When('User validates the ACM Title', function()
{
    return console.log('@When -- User validates the ACM Title');
});

Then('user entered valid user name', function(){
    return console.log('@Then -- user entered valid user name');
});

Then('user entered valid password', function(){
    return console.log('@Then -- user entered valid password');
});

Then('user should be logged In successfully', function(){
    return console.log('@Then -- user should be logged In successfully');
});