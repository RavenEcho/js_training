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

    await driver.get("http://the-internet.herokuapp.com/tables");
    const secondTable = await driver.findElement(By.id("table2"));
    await driver.executeScript("arguments[0].scrollIntoView();", secondTable);

    const dueColumnHeader = await driver.findElement(
      By.xpath("//table[@id='table2']/thead/tr/th[4]")
    );
    await dueColumnHeader.click();

    await driver.wait(
      until.elementLocated(By.xpath("//table[@id='table2']/tbody/tr[1]/td[4]")),
      5000
    );

    const dueColumnCells = await driver.findElements(
      By.xpath("//table[@id='table2']/tbody/tr/td[4]")
    );
    const dueColumnValues = await Promise.all(
      dueColumnCells.map(async (cell) => await cell.getText())
    );

    const sortedDueColumnValues = [...dueColumnValues].sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const isSorted =
      JSON.stringify(dueColumnValues) === JSON.stringify(sortedDueColumnValues);

    console.log("'Is Due' column sorted in ascending order?", isSorted);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
