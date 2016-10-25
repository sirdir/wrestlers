'use strict';
var LoginPage = function () {

    this.get = function () {
        browser.get('http://streamtv.net.ua/base');
    };
    this.loginAs = function (email, pwd) {
        $('#username>div>input').sendKeys(email);
        $('[value="user.password"]>div>input').sendKeys(pwd);
        element(by.buttonText('Login')).click();
    };

    this.getError = function () {
        return $('div.panel-heading').getText();
    };

};

module.exports = LoginPage;