var shell = require('shelljs');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
// baseUrl: 'http://streamtv.net.ua/base',
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },
    beforeLaunch: () => {//todo redone wait of grid started
        shell.exec('docker-compose up -d', {silent: true});
        shell.exec('docker-compose logs', {silent: true});
        process.on('uncaughtException', function () {
            reporter.jasmineDone();
            reporter.afterLaunch();
        });
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },
    afterLaunch: (exitCode) => {
        shell.exec('docker-compose stop', {silent: true});
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    specs: ['./specs/wrestlers.js', './specs/login.js','./specs/search.js'],
    capabilities : {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 3,
    },
    params: {
        login: 'auto',
        pwd: 'test'
    }
};