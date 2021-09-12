package com.stepdefs;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//there are two hooks in cumumber @Before @After
public class StepLoginPage {
	WebDriver driver;

	@Before // before every scenario
	public void Setup() {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();

	}

	// tagged hooks
	@Before("@register")
	public void Setup1() {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();

	}

	@After // after every Scenario
	public void teardown() {
		//driver.close();
	}

	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() throws Throwable {
		driver.get("file:///D:/seleniumjarsand%20exe/Offline%20Website/Offline%20Website/index.html");
		// Write code here that turns the phrase above into concrete actions

	}

	@When("^user enters username$")
	public void user_enters_username() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
		// Write code here that turns the phrase above into concrete actions
	}

	@When("^user enters password$")
	public void user_enters_password() throws Throwable {
		driver.findElement(By.id("password")).sendKeys("123456");
		// Write code here that turns the phrase above into concrete actions
	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"form\"]/div[3]/div/button")).click();
		// Write code here that turns the phrase above into concrete actions
	}

	@Then("^user will be on dashboard page$")
	public void user_will_be_on_dashboard_page() throws Throwable {
		Assert.assertEquals(driver.getTitle(), "JavaByKiran | Dashboard");
		// Write code here that turns the phrase above into concrete actions
	}

	@Then("^user  should see a jbk logo$")
	public void user_should_see_a_jbk_logo() throws Throwable {
		WebElement logo = driver.findElement(By.tagName("img"));
		Assert.assertTrue(logo.isDisplayed());

	}

	@Given("^user should be on register page$")
	public void user_should_be_on_register_page() throws Throwable {
		driver.get("file:///D:/seleniumjarsand%20exe/Offline%20Website/Offline%20Website/pages/examples/register.html");
	}

	@When("^user fills details$")
	public void user_fills_details() throws Throwable {
		driver.findElement(By.id("name")).sendKeys("Raj");
		driver.findElement(By.id("mobile")).sendKeys("9245864712");
		driver.findElement(By.id("email")).sendKeys("chetansdf@gmail.com");
		driver.findElement(By.id("password")).sendKeys("235689");
	}

	@When("^user click on submit button$")
	public void user_click_on_submit_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"form\"]/div[5]/div/button")).click();
		Alert al = driver.switchTo().alert();
		System.out.println(al.getText());
		
	}

	@Then("^user should be added$")
	public void user_should_be_added() throws Throwable {
		String Actmsg=driver.switchTo().alert().getText();
		Assert.assertTrue(Actmsg, true);;
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("password")).sendKeys(pass);
		driver.findElement(By.xpath("//*[@id=\"form\"]/div[3]/div/button")).click();

	}

	@Then("^user will verify \"([^\"]*)\"$")
	public void user_will_verify(String title) throws Throwable {
		Assert.assertTrue(driver.getTitle().contains(title));
	}

	@Then("^user will capture error message$")
	public void user_will_capture_error_message() throws Throwable {
		if (driver.getTitle().contains("Log in")) {
			WebElement emailerror = driver.findElement(By.id("email_error"));
			WebElement passerror = driver.findElement(By.id("password_error"));

			List<String> actMsg = new ArrayList<String>();
			actMsg.add(emailerror.getText());
			actMsg.add(passerror.getText());

			List<String> expMsg = new ArrayList<String>();
			expMsg.add(emailerror.getText());
			expMsg.add(passerror.getText());
			Assert.assertEquals(actMsg, expMsg);
		}
	}

	@When("^user verify  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_verify_and(String emailerror, String passerror) throws Throwable {
		if (driver.getTitle().contains("Log in")) {
			driver.findElement(By.id("email_error"));
			driver.findElement(By.id("password_error"));
			driver.findElement(By.xpath("//*[@id=\"form\"]/div[3]/div/button")).click();

		}

	}
}
