require('cypress-xpath')

describe("Handle dropdowns", () =>{
    it.skip("drop down with selector", () =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //identify the dropdown
        cy.get("body > div > div:nth-child(5) > div.card-body > div > select").select("Malta").should("contain", "Malta")

    })

    it.skip("drop down without selector", () =>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        //identify the dropdown
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Ukraine").type('{enter}')

        cy.get("#select2-billing_country-container").should("have.text", 'Ukraine')
    })

    it.skip("Auto-suggested drop down", () =>{
        cy.visit("https://www.wikipedia.org/")

        //identify the dropdown
        cy.get("#searchInput").type("Ukraine")
        cy.get(".suggestion-title").contains("Украина").click()
        
    })

    it("Dynamic drop down", () =>{
        cy.visit("https://www.google.com")

        //identify the dropdown
        cy.get("input[name='q']").type("cypress automation")
        
        cy.wait(3000)
        
        cy.get("div.wM6W7d>span").should('have.length', 11)
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
         
        })
        cy.get("input[name='q']").should('have.value', 'cypress automation tool')
        
    } )
    
})