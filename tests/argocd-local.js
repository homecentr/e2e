describe('Argo CD when accessed locally should', () => {
  this.tags = [ "localonly" ]

  afterEach((browser) => {
    browser.end()
  })

  it('Load main screen after signing in as admin', (browser) => {
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
  });
});
