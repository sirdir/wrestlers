var newWrestler = require('./../pages/NewWrestler.js');
var searchPage = require('./../pages/SearchBlock.js');
var loginPage = require('./../pages/LoginPage.js');

describe('wrestlers: ', function () {
    var id;
    var search;
    var newW;
    beforeAll(function () {
        browser.driver.manage().window().maximize();
        newW = new newWrestler();
        search = new searchPage();
    });
    beforeEach(function () {
        var login = new loginPage();
        login.get();
        login.loginAs('auto', 'test');
    });
    it('create new', function () {
        search.addNewWrestler();
        var name = "Timur_"+ new Date().getTime();
        id = name;
        newW.setupNewWrestler(name, "sdffsdfsd", "11-11-2011", "dfggdfg", "Donetska", "Spartak", "FW", "Cadet", "2015");
        expect(newW.isPhotoBlockPresent()).toBe(true);
    });
    it('add photo', function () {
        search.search(id);
        browser.sleep(4000);

    });
    it('delete existed', function () {

    });
});