var shell = require('shelljs');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
// baseUrl: 'http://streamtv.net.ua/base',
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },
    beforeLaunch: () => {//todo redone wait of grid started
        shell.exec('docker-compose up -d', {silent: true});
        shell.exec('docker-compose logs', {silent: true});
    },
    afterLaunch: () => {
        shell.exec('docker-compose stop', {silent: true});
    },
    specs: ['./specs/wrestlers.js', './specs/login.js','./specs/search.js'],
    capabilities : {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 3,
        count: 1
    },
    params: {
        login: 'auto',
        pwd: 'test'
    }
};
