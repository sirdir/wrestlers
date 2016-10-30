'use strict';

var SearchPage = function () {
    this.search = function (searchedText) {
        element(by.model('searchFor')).sendKeys(searchedText);
        element(by.buttonText('Search')).click();
    };

    this.getCountOFResults = function () {
        return $$('div.mt80>table>tbody>tr').count();
    };

    this.addNewWrestler = function(){
        return $('[ng-click="newWrestler()"]').click();
    };

};

module.exports = SearchPage;