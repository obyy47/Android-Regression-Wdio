class ViewsPage {
  get viewsMenu() {
    return $('//android.widget.TextView[@content-desc="Views"]');
  }

  get targetLayouts() {
    return $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Layouts"))'
    );
  }

  async openViews() {
    await this.viewsMenu.waitForDisplayed({ timeout: 10000 });
    await this.viewsMenu.click();
  }

  async scrollToLayouts() {
    await this.targetLayouts.waitForDisplayed({ timeout: 10000 });
    await this.targetLayouts.click();
  }
}

export default new ViewsPage();
