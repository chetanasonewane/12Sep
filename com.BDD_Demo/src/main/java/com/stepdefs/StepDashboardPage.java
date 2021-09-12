package com.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDashboardPage {
	 WebDriver driver;
	 @Before//before every scenario
	 public void Setup() {
		 System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
			driver=new ChromeDriver();
		 
	 }
	//tagged hooks
	 @Before("@Dashboard")
	 public void Setup1() {
		 System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
			driver=new ChromeDriver();
		 
	 }
	 @After
	 public void TearDown() {
		// driver.close();
	 }

	@Given("^user should be on AddUser page$")
	public void user_should_be_on_AddUser_page() throws Throwable {
		driver.get("file:///D:/seleniumjarsand%20exe/Offline%20Website/Offline%20Website/pages/examples/add_user.html");
	   
	}
	@When("^user fills the details  in userlist$")
	public void user_fills_the_details_in_userlist() throws Throwable {
		driver.findElement(By.id("username")).sendKeys("Ridhish");
		driver.findElement(By.id("mobile")).sendKeys("1235489");
		driver.findElement(By.id("email")).sendKeys("Ridth748@gmail.com");
		driver.findElement(By.id("course")).sendKeys("Java");
		driver.findElement(By.id("Male")).click();
		WebElement selectt=driver.findElement(By.xpath("/html/body/div/div[1]/section[2]/div/div/div/form/div[1]/div[6]/div/select"));
		Select ss = new Select(selectt);
		ss.selectByIndex(1);
		driver.findElement(By.id("password")).sendKeys("1234567");
		
	}
	@When("^user clicks on the submit button$")
	public void user_clicks_on_the_submit_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"submit\"]")).click();
		driver.switchTo().alert().getText();
		System.out.println(driver.switchTo().alert().getText());
		//driver.switchTo().alert().accept();
	}
	@Then("^user will be added$")
	public void user_will_be_added() throws Throwable {
	   Assert.assertTrue(driver.switchTo().alert().getText(), true);
	  
	}
	

@Given("^user must be in Dashboard page$")
public void user_must_be_in_Dashboard_page() throws Throwable {
    driver.get("file:///D:/seleniumjarsand%20exe/Offline%20Website/Offline%20Website/pages/examples/dashboard.html");
}

@When("^click on User link$")
public void click_on_User_link() throws Throwable {
	driver.findElement(By.xpath("/html/body/div[1]/aside/section/ul/li[3]/a/span")).click();
   
}

@Then("^User page will displayed$")
public void user_page_will_displayed() throws Throwable {
   Assert.assertEquals(driver.getTitle(), "JavaByKiran | User");
}

@When("^click on Add Users Buttons$")
public void click_on_Add_Users_Buttons() throws Throwable {
    driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div/div/div/div[1]/a/button")).click();
    System.out.println(driver.getTitle());
}

@When("^click on Operators Link$")
public void click_on_Operators_Link() throws Throwable {
   driver.findElement(By.xpath("/html/body/div[1]/aside/section/ul/li[4]/a/span")).click();
}

@Then("^Operators page Will be Displayed$")
public void operators_page_Will_be_Displayed() throws Throwable {
   Assert.assertEquals(driver.getTitle(),"JavaByKiran | Operators");
}

@When("^click on Usefull Link$")
public void click_on_Usefull_Link() throws Throwable {
    driver.findElement(By.xpath("/html/body/div/aside[1]/section/ul/li[5]/a/span")).click();
}

@Then("^Usefull Link page will Open$")
public void usefull_Link_page_will_Open() throws Throwable {
    Assert.assertEquals(driver.getTitle(), "JavaByKiran | Useful Links");
}

@When("^click on DownlOads$")
public void click_on_DownlOads() throws Throwable {
  driver.findElement(By.xpath("/html/body/div/aside[1]/section/ul/li[6]/a/span")).click();
}

@Then("^Download Page will Visible$")
public void download_Page_will_Visible() throws Throwable {
    Assert.assertEquals(driver.getTitle(), "JavaByKiran | Downloads");

}

@When("^click on LogOut$")
public void click_on_LogOut() throws Throwable {
    driver.findElement(By.xpath("/html/body/div/aside[1]/section/ul/li[7]/a/span")).click();
}

@Then("^User Will be on Login Page$")
public void user_Will_be_on_Login_Page() throws Throwable {
    Assert.assertEquals(driver.getTitle(), "JavaByKiran | Log in");

}


}
