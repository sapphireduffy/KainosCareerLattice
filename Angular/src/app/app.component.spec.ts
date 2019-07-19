import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { browser, element, by } from 'protractor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MySQLConn'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MySQLConn');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MySQLConn!');
  });

  describe('Login', function() {

    it('should not login with incorrect details', function() {
        browser.get('http://localhost:4200');
        browser.driver.findElement(by.name('Username')).sendKeys('incorrect');        
        browser.driver.findElement(by.name('Password')).sendKeys('incorrect');
        browser.driver.findElement(by.xpath('//div//button')).click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/login")
        });
  
    it('should login with correct details', function() {
        browser.get('http://localhost:4200');
        browser.driver.findElement(by.name('Username')).sendKeys('test2');        
        browser.driver.findElement(by.name('Password')).sendKeys('pass');
        browser.driver.findElement(by.xpath('//div//button')).click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/home")
        });
  });
  
  describe('Navigation Page', function() {
  
    it('should show cards', function() {
      browser.get('http://localhost:4200');
      expect(element.all(by.css('.card')).count()).toBe(6);
    });
  
    it('should have correct card titles', function() {
        browser.get('http://localhost:4200');
        var text = element(by.xpath("//h4//a[contains(text(), 'Sales & Marketing')]"));
        expect(text.getText()).toBe('Sales & Marketing')
      });
  
      it('should have correct card titles', function() {
        browser.get('http://localhost:4200');
        var text = element(by.xpath("//h4//a[contains(text(), 'Technical')]"));
        expect(text.getText()).toBe('Technical')
      });
  
      it('should have correct card titles', function() {
        browser.get('http://localhost:4200');
        var text = element(by.xpath("//h4//a[contains(text(), 'Consulting')]"));
        expect(text.getText()).toBe('Consulting')
      });
  
      it('should have correct card titles', function() {
        browser.get('http://localhost:4200');
        var text = element(by.xpath("//h4//a[contains(text(), 'Experience Design')]"));
        expect(text.getText()).toBe('Experience Design')
      });
  
      it('should have correct card titles', function() {
        browser.get('http://localhost:4200');
        var text = element(by.xpath("//h4//a[contains(text(), 'Management')]"));
        expect(text.getText()).toBe('Management')
      });
  
      it('should have correct card titles', function() {
        browser.get('http://localhost:4200');
        var text = element(by.xpath("//h4//a[contains(text(), 'Central Services Team')]"));
        expect(text.getText()).toBe('Central Services Team')
      });
  
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
  });

});
