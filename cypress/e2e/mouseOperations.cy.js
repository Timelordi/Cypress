describe("Mouse Operations", () => {
require ("@4tw/cypress-drag-drop")

    it.skip("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com/") // load the page
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should("not.be.visible") // at this moment the button is not visible
        cy.get("#narbar-menu > ul > li:nth-child(1) > a").trigger('mouseover').click() // hover the mouse above the button
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should("be.visible") // after hovering the button becomes visible
    })

    it.skip("Right Click", () => {
        // Approach 1
        cy.visit("https://cps-check.com/right-button-click-test")
        cy.get('#click-test > div.col-sm-7.text-center').rightclick()

        // Approach 2
       // cy.get('#click-test > div.col-sm-7.text-center').trigger("contextmenu")
    })

    it.skip("Double Click", () => {
        cy.visit("https://mousetester.com/")
        cy.get("#clickMe > p").dblclick()
        cy.get("#clickMe > p").dblclick()
        cy.get("#button_0_double").should("have.text", "2")  
    })

    it.skip("Drag and Drop using plugin", () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").drag("#box106") // GET the target element and drop as a parameter in DRAG method
    })

    it("Scrolling Page", () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(93) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(93) > :nth-child(1) > img').should("be.visible")
        
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(30) > td:nth-child(1) > img").scrollIntoView({duration:2000})
        cy.get("#content > div.container > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(30) > td:nth-child(1) > img").should("be.visible")

        cy.wait(1000)


    })





})