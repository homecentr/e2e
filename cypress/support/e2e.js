Cypress.Commands.add('signIn', () => {
  // E-mail
  cy.get('input[type=email]').type("homecentr-e2e@lholota.com")
  // cy.get('input[type=submit]').click()

  // // Password
  // cy.get('input[type=password].form-control', { timeout: 5000 }).type('StTJtD8ppWpX3Y@ZK^Zi&6Dq8Yp5eTgyt34z*ghoAQWdb6t3&^MD@Uh&3Kt%nzS')
  // cy.get('input[value=\'Sign in\']').click()

  // // Stay signed in? screen
  // cy.get('input[type=button][value=No]').click()
})

Cypress.Commands.add('visitSubdomain', (subdomain) => { 
  const suffix = Cypress.env('domainSuffix')
  const url = `https://${subdomain}${suffix}`

  return cy.visit(url)
})