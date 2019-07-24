const LoginTester = require('./logintester.js')
const LandingPageTester = require('./landingpagetester.js')
const CareerTableTester = require('./careertabletester.js')

const url = 'http://localhost:4200'
const departments = ['Sales & Marketing','Technical','Consulting','Experience Design','Management','Central Services Team']

describe('Login', function() {
  const login = new LoginTester()
  login.runTests(browser, url)
})

describe('Landing Page', function() {
  const landingPage = new LandingPageTester()
  landingPage.runTests(browser, url, departments)
})

describe('Careers table', function() {
  const careerTableTester = new CareerTableTester()
  careerTableTester.runTests(browser,url, departments)
})

/*
describe('Careers', function() {

  it('should have Sales Marketing card navigate to correct page', function() {
      browser.get('http://localhost:4200/home');
      browser.driver.findElement(by.xpath("//h4//a[contains(text(), 'Sales & Marketing')]")).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/career?id=1")
    });

  it('should display the correct title for Sales and Marketing', function() {
      browser.get('http://localhost:4200/career?id=1')
      var title = element(by.xpath("//table//th[contains(@class, 'job-family')]"));
      expect(title.getText()).toBe('Sales & Marketing')
  });

    it('should have Technical card navigate to correct page', function() {
      browser.get('http://localhost:4200/home');
      browser.driver.findElement(by.xpath("//h4//a[contains(text(), 'Technical')]")).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/career?id=2")
    });

    it('should display the correct title for Technical', function() {
      browser.get('http://localhost:4200/career?id=2')
      var title = element(by.xpath("//table//th[contains(@class, 'job-family')]"));
      expect(title.getText()).toBe('Technical')
  });

    it('should have Consulting card navigate to correct page', function() {
      browser.get('http://localhost:4200/home');
      browser.driver.findElement(by.xpath("//h4//a[contains(text(), 'Consulting')]")).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/career?id=3")
    });

    it('should display the correct title for Consulting', function() {
      browser.get('http://localhost:4200/career?id=3')
      var title = element(by.xpath("//table//th[contains(@class, 'job-family')]"));
      expect(title.getText()).toBe('Consulting')
  });

    it('should have Experience Design card navigate to correct page', function() {
      browser.get('http://localhost:4200/home');
      browser.driver.findElement(by.xpath("//h4//a[contains(text(), 'Experience Design')]")).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/career?id=4")
    });

    it('should display the correct title for Experience Design', function() {
      browser.get('http://localhost:4200/career?id=4')
      var title = element(by.xpath("//table//th[contains(@class, 'job-family')]"));
      expect(title.getText()).toBe('Experience Design')
  });

    it('should have Management card navigate to correct page', function() {
      browser.get('http://localhost:4200/home');
      browser.driver.findElement(by.xpath("//h4//a[contains(text(), 'Management')]")).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/career?id=5")
    });

    it('should display the correct title for Management', function() {
      browser.get('http://localhost:4200/career?id=5')
      var title = element(by.xpath("//table//th[contains(@class, 'job-family')]"));
      expect(title.getText()).toBe('Management')
  });

    it('should have Central Services Team card navigate to correct page', function() {
      browser.get('http://localhost:4200/home');
      browser.driver.findElement(by.xpath("//h4//a[contains(text(), 'Central Services Team')]")).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/career?id=6")
    });

    it('should display the correct title for Central Services Team', function() {
      browser.get('http://localhost:4200/career?id=6')
      var title = element(by.xpath("//table//th[contains(@class, 'job-family')]"));
      expect(title.getText()).toBe('Central Services Team')
  });

});
});*/