class AppPage {
  get alertDialogs() {
    return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
  }

  async openAlertDialogs() {
    await this.alertDialogs.waitForDisplayed();
    await this.alertDialogs.click();
  }
}

export default new AppPage();
