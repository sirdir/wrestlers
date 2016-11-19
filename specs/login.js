var loginPage = require('./../pages/LoginPage.js');
var tabsBlock = require('./../pages/TabsBlock.js');

function foo() {
        beforeAll(function () {
            browser.driver.manage().window().maximize();
            login = new loginPage();
            tabs = new tabsBlock();
        });

        beforeEach(function () {
            login.get();
        });

        afterEach(function () {
            browser.driver.manage().deleteAllCookies();
        });

        it('wrong creds', function () {
            login.loginAs('auto', 'xuy');
            expect(login.getError()).toBe('Incorrect credentials');
        });

        it('successful login', function () {
            login.loginAs('auto', 'test');
            expect(tabs.getTextOfHeader()).toBe('Wrestlers');
        });
    }

describe('main', foo);