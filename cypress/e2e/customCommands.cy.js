describe("Custom Commands", () => {

    it.skip("Handling links", () => {

        cy.visit("https://demo.nopcommerce.com/")

        // 1. This is a direct approach
        //   cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div > div.product-grid.home-page-product-grid > div.item-grid > div:nth-child(2) > div > div.details > h2 > a").click()

        // 2. This is using customer command from commands.js
        cy.clickLink("Apple MacBook Pro 13-inch")

        //verification
        cy.get("#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name > h1").should("have.text", "Apple MacBook Pro 13-inch")
    })

    // This is for the file customCommands.cy.js
    it("Login command", () => {
        cy.visit("https://demo.nopcommerce.com/")
        // Login
        // Search

        cy.clickLink("Log in") // custom command
        cy.loginApp("Dmitriy@gmail.com", "test123")
    })

})