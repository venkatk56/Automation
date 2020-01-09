package Page_Objects;

import org.openqa.selenium.By;

import Step_Definition.Adduser;

public class Adduser_pagesobjects
{
	
	public static String way2automation_url = "http://www.way2automation.com/angularjs-protractor/webtables/";
	public static String way2automation_page_title= "Protractor practice website - WebTables";
	public static String adduser_xpath = "//button[@type='add']";
	public static String firstname_xpath = "//input[@name='FirstName']";
	public static String lastname_xpath = "//input[@name='LastName']";
	public static String username_xpath = "//input[@name='UserName']";
	public static String password_xpath = "//input[@name='Password']";
	public static String compnay_aaa_xpath = "//input[@name='optionsRadios']";
	public static String company_bbb_xpath ="(//input[@name='optionsRadios'])[2]";
	public static String role_xpath = "//select[@name='RoleId']";
	public static String email_xpath = "//input[@name='Email']";
	public static String mobile_xpath = "//input[@name='Mobilephone']";
	public static String success_xpath = "//button[2]";
	public static String search_text_xpath = "//input[@type='text']";
	public static String search_valid_text_xpath = "//td[3]";
	
}
