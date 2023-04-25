describe('Argo CD should', () => {
  afterEach((browser) => {
    browser.end()
  })

  it('Allow admins to use the app', (browser) => {
    browser
      .subdomain('argocd')
      .click('a > button') // Redirects to AAD
      .signInAsAdmin()
      .assert.textContains("div.sidebar__logo", "Argo CD")
  });

  it('Not allow non-admins to use the app', (browser) => {
    browser
      .subdomain('argocd')
      .click('a > button') // Redirects to AAD
      .signInAsNonAdmin()
      .assert.isAadPermissionRejectedPage()
      //.textContains("#exceptionMessageContainer", "AADSTS50105")
  });
});