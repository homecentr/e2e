describe('Kubernetes dashboard should', () => {
  afterEach((browser) => {
    console.log("MyProp: " + browser.globals.myProp)
    browser.end()
  })

  it('Load main screen after sign in', async (browser) => {
    browser
      .subdomain('k8s')
      .signInAsAdmin()
      .waitForElementVisible("css selector", "a[href^='#/about']")
      .click("a[href^='#/about']")
      .assert.textContains("body", "Dashboard")
  });
});