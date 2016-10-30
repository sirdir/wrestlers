'use strict';
var loginP = require('./../pages/LoginPage.js');
var searchP = require('./../pages/SearchBlock.js');
var searchResultsP = require('./../pages/SearchBlock.js');

describe('search: ', function(){
    var search;
    var searchResults;

    beforeAll(function () {
        var login = new loginP();
        search = new searchP();
        searchResults = new searchResultsP();
        login.get();
        login.loginAs(browser.params.login, browser.params.pwd);
    });

    it('nothing', function () {
        search.search('somethingimadeup');
        expect(search.getCountOFResults()).toBe(0);
    })
} );