class CareerTableTester {
    constructor(config) {}

    runTests(browser, url, departments){
        this.testTableTitleIsCorrect(browser,url,departments)
    }

    testTableTitleIsCorrect(browser, url, departments){
        it('should display the department title', function() {
            for(var i = 0; i < departments.length; i++){
                browser.get(url+'/career?id='+(i+1).toString())
                var title = element(by.xpath("//table//th[contains(@class, 'job-family')]"));
                expect(title.getText()).toBe(departments[i])
            }
        })
    }
}
module.exports = CareerTableTester