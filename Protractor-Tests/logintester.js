const LOGIN = require("../login.json")

class LoginTester {
    constructor(config) {}

    runTests(browser, url){
        this.testInvalidCredentials(browser, url)
        this.testValidCredentials(browser, url)
    }

    testInvalidCredentials(browser, url){
        it('should not login with incorrect details', function() {
            browser.get(url);
            browser.driver.findElement(by.name('Username')).sendKeys('incorrect');       
            browser.driver.findElement(by.name('Password')).sendKeys('incorrect')
            browser.driver.findElement(by.xpath('//div//button')).click();
            expect(browser.getCurrentUrl()).toEqual(url+"/login")
        })
    }

    testValidCredentials(browser, url){
        it('should login with correct details', function() {
            browser.get(url);
            browser.driver.findElement(by.name('Username')).sendKeys(LOGIN.username);        
            browser.driver.findElement(by.name('Password')).sendKeys(LOGIN.password);
            browser.driver.findElement(by.xpath('//div//button')).click();
            expect(browser.getCurrentUrl()).toEqual(url+"/home")
        })
    }
}
module.exports = LoginTester