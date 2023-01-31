require('cypress-xpath')

describe("Assertions demo", () => {
    it("Implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        //should 
       // cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('contain', "opensource")
        

       // cy.url().should('include', 'orangehrmlive.com')
       // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // .should('contain', "opensource")

       //AND
       cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', "opensource")
        .and('not.contain', "blah")

        cy.title().should('include', "Orange")
        .and('eq', "OrangeHRM")
        .and ('contain', "HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath("//a").should('have.length', '5') // Number of links
        //entering Username
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Admin") //provide value into input box
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").should('have.value', 'Admin')
    })

    it("Explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        //entering Username
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Admin")
        //entering Username
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        let expName="Paul Collings";
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > img")
        .then((x)=>{
            let actualName=x.text()

            //BDD style
            expect(actualName).to.equal(expName)    
            expect(actualName).to.not.equal(expName)
            
            //TDD style
            assert.equal(actualName,expName)
            assert.notEqual(actualName,expName)
        })


        
    
    

    
    })
    })