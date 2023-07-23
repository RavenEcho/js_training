const { Builder, By, Key, until } = require("selenium-webdriver");

(async function () {
  try {
    const chromeDriverPath = "path/to/chromedriver.exe";

    const driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions()
      .usingServer()
      .build();

    await driver.get("http://the-internet.herokuapp.com/dropdown");

    const dropDown = await driver.findElement(By.id("dropdown"));
    const options = await dropDown.findElements(By.tagName("option"));
    const isFirstElementActive = await options[0].isEnabled();
    const isSecondElementActive = await options[1].isEnabled();

    console.log("Is the 1st element active?", isFirstElementActive);
    console.log("Is the 2nd element active?", isSecondElementActive);

    await driver.quit();
  } catch (error) {
    console.error("Error occurred:", error);
    await driver.quit();
  }
})();
