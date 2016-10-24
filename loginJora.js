var loginPage = require('./../wrestlers/pages/LoginJora.js');
var basePage = require('./../wrestlers/pages/BasePage.js');
var newWrestler = require('./../wrestlers/pages/NewWrestler.js');

describe('login', function () {

    beforeAll(function () {
        browser.driver.manage().window().maximize();
        login = new loginPage();
        base = new basePage();
        newW = new newWrestler();
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

    it('positive', function () {
        login.loginAs('auto', 'test');
        expect(base.getTextFromBase()).toBe('Wrestlers');
        base.addNewWrestler();
        newW.setupNewWrestler("sfsaafas", "sdffsdfsd", "11-11-2011", "dfggdfg", "Donetska", "Spartak", "FW", "Cadet", "2015");
        expect($('.col-sm-4').isPresent()).toBe(true);
        // expect(newW.photoDisplayed()).toBe(true);
    });
});