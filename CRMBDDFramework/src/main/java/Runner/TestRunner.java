package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\PC User1\\Desktop\\SeleniumFiles\\CRMBDDFramework\\src\\main\\java\\Features\\login.feature", //path for feature file
		glue={"stepsDefinitions"}, // test definitions folder name
		format = {"pretty", "html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, // you can create json file to generate different time of reporting 
		monochrome = true, // display the console output in a proper readable format
		dryRun = false,// to check the mapping is proper between feature file and step definition file
		strict = true // it will check if any step is not defined in step definition file
		)

public class TestRunner {

}
