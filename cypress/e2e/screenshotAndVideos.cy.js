describe("Suite", () => {

    it("Capture screenshots and Videos", () => {

        cy.visit("https://demo.opencart.com/")
        //   cy.screenshot('Homepage')

        cy.wait(3000)
        //   cy.get("#logo > a > img").screenshot("Logo") // makes the screenshot of the particular element


        // Automatically capture screenshot and video on failure - only when executing through CLI


        cy.get('#narbar-menu > ul > li:nth-child(7) > a').click() // Cameras
        cy.get("#content > h2").should("have.text", "Tablets") // THIS WILL FAIL INTENTIONALLY



    })
})