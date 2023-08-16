describe('Kubernetes dashboard should', () => {
  afterEach((browser) => {
    browser.end()
  })

  it('Load main screen after sign in', (browser) => {
    browser
      .subdomain('k8s')
      .signInAsAdmin()
      .waitForElementVisible("css selector", "a[href^='#/about']")
      .click("a[href^='#/about']")
      .assert.textContains("body", "Dashboard")
  });

  it('Not allow non-admins to use the app', (browser) => {
    browser
      .subdomain('k8s')
      .signInAsNonAdmin()
      .assert.isCloudflareOrPomeriumPermissionRejectedPage()
  });
});