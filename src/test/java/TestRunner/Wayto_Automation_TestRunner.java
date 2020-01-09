package TestRunner;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;
import java.util.Scanner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.google.common.util.concurrent.Service;


import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.BeforeTest;

//@RunWith(Cucumber.class)
@CucumberOptions
(
		features 	= "classpath:Feature",
		glue		= {"Step_Definition"},		
	    tags        = {"@adduser"},		
		dryRun		= false,
		monochrome	= true,
		plugin 		= {"pretty:STDOUT","html:Reports/cucumberhtmlreport",
		"com.cucumber.listener.ExtentCucumberFormatter:Output/Way_To_Automation_Report.html"}
)

public class Wayto_Automation_TestRunner extends AbstractTestNGCucumberTests
{
	
}