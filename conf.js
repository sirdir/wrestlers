exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // baseUrl: 'http://streamtv.net.ua/base',
    specs: ['./specs/wrestlers.js', './specs/login.js']
};