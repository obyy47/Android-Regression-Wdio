import { expect } from "chai";
import HomePage from "../pages/HomePage.js";
import AppPage from "../pages/AppPage.js";
import AlertPage from "../pages/AlertPage.js";
import ViewsPage from "../pages/ViewsPage.js";

describe("API Demo Testing", () => {
  it("Klik menu App", async () => {
    await HomePage.clickApp();
    expect(await AppPage.alertDialogs.isDisplayed()).to.equal(true);
    console.log("Menu App tampil dengan benar!");

    await driver.back();
  });

  it("Input form Alert Dialog", async () => {
    await HomePage.clickApp();
    await AppPage.openAlertDialogs();
    await AlertPage.openTextEntry();

    await AlertPage.fillForm("obby", "12345678");

    expect(await AlertPage.usernameField.getText()).to.equal("obby");
    expect(await AlertPage.passwordField.getText()).to.not.equal("");
    console.log("Assertion input form berhasil!");

    await driver.back();
    await driver.back();
    await driver.back();
  });

  it("Scroll ke menu Layouts", async () => {
    await ViewsPage.openViews();
    await ViewsPage.scrollToLayouts();
    console.log("Berhasil scroll dan klik Layouts!");

    await driver.back();
    await driver.back();
  });
});
