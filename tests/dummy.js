describe('Dummy should', () => {
  afterEach((browser) => {
    browser.end()
  })

  it('Load and assert google', async (browser) => {
    browser
      .navigateTo("https://google.com")
      .assert.isAadErrorPage("AADSTS50105")
  });
});