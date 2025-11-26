class HomePage {
  get menuApp() {
    return $('//android.widget.TextView[@text="App"]');
  }

  async clickApp() {
    await this.menuApp.waitForDisplayed();
    await this.menuApp.click();
  }
}

export default new HomePage();
