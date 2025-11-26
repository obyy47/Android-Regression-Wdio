class AlertPage {
  get textEntryButton() {
    return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
  }

  get usernameField() {
    return $('//*[@resource-id="io.appium.android.apis:id/username_edit"]');
  }

  get passwordField() {
    return $('//*[@resource-id="io.appium.android.apis:id/password_edit"]');
  }

  async openTextEntry() {
    await this.textEntryButton.click();
  }

  async fillForm(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
  }
}

export default new AlertPage();
