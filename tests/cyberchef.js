describe('CyberChef should', () => {
  afterEach((browser) => {
    browser.end()
  })

  it('Load main screen after signing in as non-admin', (browser) => {
    browser
      .subdomain('cyberchef')
      .signInAsNonAdmin()
      .getText("#bake > span", result => {
        console.log("Element text: " + result.value)
      })
      .assert.textContains("#bake > span", "BAKE!")
  });
});