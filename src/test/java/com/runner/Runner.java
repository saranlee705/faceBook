package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.baseClass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features ="src\\test\\java\\com\\feature\\facebook.feature",
glue="com.stepdefinition",monochrome =true, plugin= {"pretty",
		"html:Report/HtmlReport1.html",
		"junit:Report/xmlReport.xml",
		"json:Report/JsonReport1.json",
})
public class Runner {
	public static WebDriver driver;
	@BeforeClass
	public static void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\WELCOME\\eclipse-workspace\\Facebook\\src\\test\\java\\com\\feature\\facebook.feature");
	driver = BaseClass.browserLaunch("chrome");

		}
	@AfterClass
	public  static void tearDown() {
		driver.close();
		
	}
	
	

}
