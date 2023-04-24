describe('Homepage should should', () => {
  it('Show main screen after signing in with SSO', () => {
    cy.visitSubdomain('homepage')
    cy.contains("Hello")
    // cy.signIn()
    
    // cy.title().should('include', 'Homepage')
  })
})