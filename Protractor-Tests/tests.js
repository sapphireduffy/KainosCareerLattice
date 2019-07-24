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