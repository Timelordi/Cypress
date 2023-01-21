describe('My First Test', () => {

  it('Verify title - positive', function() {
   cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq', 'OrangeHRM')
  })

  it('Verify title - negative', function() {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.title().should('eq', 'OrangeHRM-NEGATIVE')
   })


})