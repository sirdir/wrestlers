var newWrestler = require('./../pages/NewWrestler.js');
var searchPage = require('./../pages/SearchPage.js');
var mainPage = require('./../pages/MainPage.js');
var loginPage = require('./../pages/LoginJora.js');

describe('wrestlers: ', function () {
    var id;
    var main;
    var search;
    var base;
    var login;
    var newW;
    beforeAll(function () {
        browser.driver.manage().window().maximize();
        newW = new newWrestler();
        login = new loginPage();
        main = new mainPage();
        search = new searchPage();
        base = new mainPage();
    });
    beforeEach(function () {
        login.get();
        login.loginAs('auto', 'test');
    });
    it('create new', function () {
        main.addNewWrestler();
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