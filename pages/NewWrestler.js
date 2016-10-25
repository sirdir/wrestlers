'use strict';

var NewWrestler = function () {
    var last = $('[value="wr.lname"]>div>input');
    var first = $('[value="wr.fname"]>div>input');
    var dob = $('[value="wr.dob"]>div>input');
    var middle = $('[value="wr.mname"]>div>input');
    var reg = $('[value="wr.region1"]>div>select');
    var fst1 = $('[value="wr.fst1"]>div>select');
    var stl = $('[value="wr.style"]>div>select');
    var title = $('[value="wr.lictype"]>div>select');
    var expires = $('[value="wr.expires"]>div>select');


    this.setupNewWrestler = function(lastName, firstName, dateOfBirth, middleName, region, fst, style, age, year) {
        if (arguments.length !== 9){
            throw new Error('you are not welcome here wit only ' + arguments.length + ' params');
        }
        last.sendKeys(lastName);
        first.sendKeys(firstName);
        dob.sendKeys(dateOfBirth);
        middle.sendKeys(middleName);
        reg.sendKeys(region);
        fst1.sendKeys(fst);
        stl.sendKeys(style);
        title.sendKeys(age);
        expires.sendKeys(year);
        $('button.btn-success').click();
    };

    this.isPhotoBlockPresent = function () {
        return $('.col-sm-4').isPresent();
    }
};

module.exports = NewWrestler;