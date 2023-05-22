describe('Proxmox VE should', () => {
  afterEach((browser) => {
    browser.end()
  })

  it('Load main screen after signing in as admin', (browser) => {
    browser
      .subdomain('pve')
      .setValue('#pveloginrealm-inputEl', 'Azure Active Directory')
      .click('a#button-1070')  // Redirects to AAD
      .signInAsAdmin()
      .assert.textContains("#versioninfo-innerCt", "Virtual Environment")
  });

  it('Not allow non-admins to use the app', (browser) => {
    browser
      .subdomain('pve')
      .setValue('#pveloginrealm-inputEl', 'Azure Active Directory')
      .click('a#button-1070') // Redirects to AAD
      .signInAsNonAdmin()
      .assert.isAadPermissionRejectedPage()
  });
});