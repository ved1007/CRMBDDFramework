package stepsDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	WebDriver driver;

	@Given("^user is alread on the login page$")
	public void user_is_alread_on_the_login_page() {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\PC User1\\git\\WebDrivers1\\WebDrivers\\src\\DriversEXEfile\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://sso.teachable.com/secure/42299/users/sign_in?clean_login=true&reset_purchase_session=1");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);

	}

	@When("^title of login page is Let's' Kode It$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Let's Kode It", title);

	}
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password)  {
		driver.findElement(By.id("user_email")).clear();
		driver.findElement(By.id("user_email")).sendKeys("username"); // if you don't want to hard code value the use \"(.*)\" and \"(.*)\" 
		driver.findElement(By.id("user_password")).clear();
		driver.findElement(By.id("user_password")).sendKeys("password");
	

//	@Then("^user enters username and passwrod$")
//	public void user_enters_username_and_passwrod() {
//		driver.findElement(By.id("user_email")).clear();
//		driver.findElement(By.id("user_email")).sendKeys("ved1007@gmail.com"); // if you don't want to hard code value the use \"(.*)\" and \"(.*)\" 
//		driver.findElement(By.id("user_password")).clear();
//		driver.findElement(By.id("user_password")).sendKeys("Welcome01");
	}

//	@Then("^user clicks on the login button$")
//	public void user_clicks_on_the_login_button() throws Throwable {
//		driver.findElement(By.xpath("//*[@id='new_user']/div[3]/input")).click();

//	}

	@Then("^user will close the website$")
	public void user_will_close_the_website() throws Throwable {
		driver.quit();

	}

}
