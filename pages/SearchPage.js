'use strict';

var SearchPage = function () {
    this.search = function (searchedText) {
        element(by.model('searchFor')).sendKeys(searchedText);
        element(by.buttonText('Search')).click();
    }
};

module.exports = SearchPage;