package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
///tags are used to run a specific scenario
(
		features="src/main/java/com/features",
		glue="com.stepdefs",
		plugin="html:test-output",
		//tags="@Logo",
		//tags="@register",
		//tags={"@Logo,@register"},
	//	tags="@invalidLogin",
		tags="@invalidloginerrormsg",	
		//tags="@AddUser",
		//tags="@Dashboard",
		dryRun=false
		
		)
public class TestRunner {

}
