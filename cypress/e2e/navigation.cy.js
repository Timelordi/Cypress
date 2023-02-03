describe ("Navigation", () => {

    it("Navigation test", () => {

        cy.visit("https://demo.opencart.com/")

        cy.title().should("eq", "Your Store"); // Home page

        cy.get('#narbar-menu > ul > li:nth-child(7) > a').click() // Move to Cameras page

        cy.get("#content > h2").should("have.text", "Cameras")

        cy.go('back'); // go back to Home page
        cy.title().should("eq", "Your Store"); // validate the Home page again

        cy.go("forward") // go to Cameras page
        cy.get("#content > h2").should("have.text", "Cameras") // validate the Cameras page again

        cy.reload(); // reload the page


    })
})