'use strict';

var TabsBlock = function () {

    this.getTextOfHeader = function(){
        return $('div.tab-heading').getText();
    };

    this.gotoSearch = function(){
        return $('div.tab-heading').click();
    };

    this.gotoWrestler = function(name) {
        if (arguments.length !== 1){
            throw new Error('you dont wrote the name of thew DUDE!');
        }
        return $('div.tab-heading').click();
    };

};

module.exports = TabsBlock;