'use strict';
var LoginPage = function () {

    this.get = () => {
        browser.get('http://streamtv.net.ua/base');
    };
    this.loginAs = (email, pwd) => {
        $('#username>div>input').sendKeys(email);
        $('[value="user.password"]>div>input').sendKeys(pwd);
        element(by.buttonText('Login')).click();
    };

    this.getError = () => $('div.panel-heading').getText();

};

module.exports = LoginPage;