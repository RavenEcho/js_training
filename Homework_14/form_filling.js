const { Builder, By, Key, until } = require("selenium-webdriver");

(async function () {
  let driver;

  try {
    const chromeDriverPath = "path/to/chromedriver.exe";

    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions()
      .usingServer()
      .build();

    await driver.get("http://formy-project.herokuapp.com/form");

    await driver.findElement(By.id("first-name")).sendKeys("Peter");
    await driver.findElement(By.id("last-name")).sendKeys("Peterson");
    await driver.findElement(By.id("job-title")).sendKeys("tester");

    await driver.findElement(By.id("radio-button-2")).click();

    await driver.findElement(By.id("checkbox-1")).click();

    const yearsOfExperienceDropdown = await driver.findElement(
      By.id("select-menu")
    );
    await yearsOfExperienceDropdown.click();
    await driver.findElement(By.css('option[value="2"]')).click();

    await driver.findElement(By.id("datepicker")).sendKeys("12/12/2020");

    await driver.findElement(By.css("a.btn.btn-lg.btn-primary")).click();

    await driver.wait(
      until.elementLocated(By.css(".alert.alert-success")),
      5000
    );

    const successMessage = await driver
      .findElement(By.css(".alert.alert-success"))
      .getText();
    console.log("Success Message:", successMessage);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
