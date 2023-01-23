require('cypress-xpath')

describe("Child Windows", () => {

    it.skip("Approach 1", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")

        // remove target attribute to open new window in the same tab
        cy.get("#content > div > a").invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(3000)
        cy.go('back') // back to the parent tab
    })

    it("Approach 2", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")

        // remove target attribute to open new window in the same tab
        cy.get("#content > div > a").then((e) => {
            let url = e.prop('href');
            cy.visit(url)
            })
       
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(3000)
        cy.go('back') // back to the parent tab
    
    })
})