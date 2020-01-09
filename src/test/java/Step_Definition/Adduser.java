package Step_Definition;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import Page_Objects.Adduser_pagesobjects;


public class Adduser  {
	
	public static WebDriver driver;
@Test
@Given("^User navigates to the link \"([^\"]*)\"$")
public void user_navigates_to_the_link(String link) throws Throwable {
	
	String strProjectLoc = System.getProperty("user.dir");
	ChromeOptions options = new ChromeOptions();
	options.setExperimentalOption("useAutomationExtension", false);
    System.setProperty("webdriver.chrome.driver", strProjectLoc + File.separator + "src" + File.separator + "test" + File.separator + "resources" + File.separator + "Driver" + File.separator + "chromedriver_updated.exe");
    driver = new ChromeDriver(options);	
    driver.get(link);
	driver.manage().window().maximize();	
}

@Test
@When("^User_Validates that user are is on the User List Table$")
public void user_validates_that_user_are_is_on_the_User_List_Table() throws Throwable {
	
	String Title = driver.getTitle();
	if (Title.equalsIgnoreCase(Adduser_pagesobjects.way2automation_page_title))
	{
		System.out.println("user is on the way to automation page");
	}

	else
	{
		throw new ElementNotVisibleException("way to automation page fails to load");
	}
}

@Test
@When("^User Clicks on the Add user button$")
public void user_Clicks_on_the_Add_user_button() throws Throwable {

	// the below code is to click on the new user button
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	driver.findElement(By.xpath(Adduser_pagesobjects.adduser_xpath)).click();

}

@Test
@When("^User_EL captures unique username \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_el_captures_unique_username_and(String firstname, String lastName, String username, String password, String customer, String role, String email, String cellphone) throws Throwable {

	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	driver.findElement(By.xpath(Adduser_pagesobjects.firstname_xpath)).sendKeys(firstname);
	driver.findElement(By.xpath(Adduser_pagesobjects.lastname_xpath)).sendKeys(lastName);
	driver.findElement(By.xpath(Adduser_pagesobjects.username_xpath)).sendKeys(username);
	driver.findElement(By.xpath(Adduser_pagesobjects.password_xpath)).sendKeys(password);
	//******************************** the below code is to capture customer type********************************************
	if (customer.equalsIgnoreCase("Company AAA"))
	{
	driver.findElement(By.xpath(Adduser_pagesobjects.compnay_aaa_xpath)).click();
	}
	else if (customer.equalsIgnoreCase("Company BBB"))
	{
	driver.findElement(By.xpath(Adduser_pagesobjects.company_bbb_xpath)).click();
	}
	//******************************** the below code is to capture role type********************************************
	if (role.equalsIgnoreCase("Sales Team"))
	{
		driver.findElement(By.name("RoleId")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath(Adduser_pagesobjects.role_xpath)).sendKeys(role);
	}
	else if (role.equalsIgnoreCase("Customer"))
	{
		driver.findElement(By.name("RoleId")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath(Adduser_pagesobjects.role_xpath)).sendKeys(role);
	}
	else if (role.equalsIgnoreCase("Admin"))
	{
		driver.findElement(By.name("RoleId")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath(Adduser_pagesobjects.role_xpath)).sendKeys(role);
	}
	
	driver.findElement(By.xpath(Adduser_pagesobjects.email_xpath)).sendKeys(email);
	driver.findElement(By.xpath(Adduser_pagesobjects.mobile_xpath)).sendKeys(cellphone);
	
}
@Test
@When("^User_EL clicks Save button$")
public void user_el_clicks_Save_button() throws Throwable {

	driver.findElement(By.xpath(Adduser_pagesobjects.success_xpath)).click();
	
}
@Test
@Then("^User Validates that saved record is successfully displyed in search screen \"([^\"]*)\"$")
public void user_Validates_that_saved_record_is_successfully_displyed_in_search_screen(String username) throws Throwable {

	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	driver.findElement(By.xpath(Adduser_pagesobjects.search_text_xpath)).sendKeys(username);
	
	//Extract value of the user name and compare it against the value that has been saved
	String newusername = driver.findElement(By.xpath(Adduser_pagesobjects.search_valid_text_xpath)).getText();
	System.out.println("the user name is" + newusername);
	if(newusername.equalsIgnoreCase(username))
	{
		System.out.println("username matches");
		
	}
	
	else
	{
		throw new NoSuchElementException ("username do not match");
	}
	
}

}