var loginPage = require('./../pages/LoginJora.js');
var mainPage = require('./../pages/MainPage.js');

describe('main', function () {

    beforeAll(function () {
        browser.driver.manage().window().maximize();
        login = new loginPage();
        main = new mainPage();
    });

    beforeEach(function () {
        login.get();
    });

    afterEach(function () {
        browser.driver.manage().deleteAllCookies();
    });

    it('wrong creds', function () {
        login.loginAs('auto', 'xuy');
        expect(login.getError()).toBe('Incorrect credentials');
    });

    it('successful login', function () {
        login.loginAs('auto', 'test');
        expect(main.getTextFromBase()).toBe('Wrestlers');
    });
});