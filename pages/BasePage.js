'use strict';

var BasePage = function(){

    this.getTextFromBase = function(){
        return $('div.tab-heading').getText();
    };

    this.addNewWrestler = function(){
        return $('[ng-click="newWrestler()"]').click();
    }
};

module.exports = BasePage;