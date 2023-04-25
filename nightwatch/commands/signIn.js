module.exports = {
  command: function (email, password) {
    return this
      // E-mail
      .setValue("input[type=email]", email)
      .click('input[type=submit]')

      // Password
      .waitForElementVisible("css selector", "input[type=password].form-control") // Checking the e-mail may take a few seconds
      .setValue("input[type=password].form-control", password)
      .click("input[value='Sign in']")

      .element("css selector", "input[type=button][value=No]", result => {
        if(result.status != -1) {
          // Sign in succeeded and AAD showed the "Stay signed in?" screen
          browser.click("input[type=button][value=No]")
        }
      })
      
      // .click("input[type=button][value=No]")
  }
}