const { Builder, By, Key, until, Actions } = require("selenium-webdriver");

(async function () {
  try {
    const chromeDriverPath = "path/to/chromedriver.exe";

    const driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions()
      .usingServer()
      .build();

    await driver.get("http://the-internet.herokuapp.com/hovers");

    const avatarElement = await driver.findElement(By.css(".figure"));
    const actions = driver.actions();

    await actions.move({ origin: avatarElement }).perform();

    const textElement = await driver.findElement(By.css(".figcaption"));
    await driver.wait(until.elementIsVisible(textElement), 5000);

    const displayedText = await textElement.getText();

    if (displayedText.includes("name: user1")) {
      console.log('Text "name: user1" appears under the picture.');
    } else {
      console.log('Text "name: user1" does not appear under the picture.');
    }

    await driver.quit();
  } catch (error) {
    console.error("Error occurred:", error);
    await driver.quit();
  }
})();
