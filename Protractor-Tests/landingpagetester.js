class LandingPageTester {
    constructor(config) {
    }

    runTests(browser, url, departments){
        this.testDepartmentCardsArePresent(browser, url)
        this.testCorrectDepartmentCards(browser, url, departments)
        this.testDepartmentsCanBeReached(browser, url, departments)
    }

    testDepartmentCardsArePresent(browser, url){
        it('should show cards', function() {
            browser.get(url)
            expect(element.all(by.css('.card')).count()).toBe(6)
        })
    }

    testCorrectDepartmentCards(browser, url, departments){
        it('should have correct card titles', function() {
            for(var i = 0; i < departments.length; i++){
                browser.get(url)
                var text = element(by.xpath("//h4//a[contains(text(), '"+departments[i]+"')]"));
                expect(text.getText()).toBe(departments[i])
            }
        })
    }

    testDepartmentsCanBeReached(browser, url, departments){
        it('should have navigate to each department', function() {
            for(var i = 0; i < departments.length; i++){
                browser.get(url+"/home")
                browser.driver.findElement(by.xpath("//h4//a[contains(text(), '"+departments[i]+"')]")).click();
                expect(browser.getCurrentUrl()).toEqual(url+"/career?id="+(i+1).toString())
            }
        })
    }
}
module.exports = LandingPageTester