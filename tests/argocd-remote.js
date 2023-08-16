describe('Argo CD when accessed remotely should', () => {
  this.tags = [ "remoteonly" ]
  
  afterEach((browser) => {
    browser.end()
  })

  it('Load main screen after signing in as admin', (browser) => {
    browser
      .subdomain('argocd')
      .signInAsAdmin() // Sign into Cloudflare access
      .click('a > button') // Redirects to AAD
      .assert.textContains("div.sidebar__logo", "Argo CD")
  });

  it('Not allow non-admins to use the app', (browser) => {
    browser
      .subdomain('argocd')
      .signInAsNonAdmin()  // Sign into Cloudflare access
      .assert.isCloudflarePermissionRejectedPage()
  });
});