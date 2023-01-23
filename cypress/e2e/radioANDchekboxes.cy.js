require('cypress-xpath')

describe ("Check UI elements", () => {
 /*  it("Checking Radio Buttons", () =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        //visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')
        
        //selecting radio buttons
        cy.get('#male').check().should("be.checked")
        cy.get('#female').should("not.be.checked")

        cy.get('#female').check().should("be.checked")
        cy.get('#male').should("not.be.checked")
        


    })
*/
    it("Checking checkboxes", () =>{
       cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    
    //visibility of the element
        cy.get("#monday").should("be.visible")

    //selecting single checkbox - monday
        cy.get("#monday").check().should("be.checked")
    
    //unselecting checkbox
        cy.get("#monday").uncheck().should("not.be.checked")
        
    //select  all checkboxes
    cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
    cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

    //select first checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check()
    cy.get("input.form-check-input[type='checkbox']").last().check()

})

})