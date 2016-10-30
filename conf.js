exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4445/wd/hub',
    // baseUrl: 'http://streamtv.net.ua/base',
    specs: ['./specs/wrestlers.js', './specs/login.js','./specs/search.js'],
    shardTestFiles: true,
    maxInstances: 2,
    params: {
        login: 'auto',
        pwd: 'test'
    }
};