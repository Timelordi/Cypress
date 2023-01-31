describe("Fixtures", () => {

    it("DataDrivenTest", () => {

        cy.fixture("orangehrm2.json").then((data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/")

            data.forEach((userdata) => {

                cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type(userdata.username)
                cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type(userdata.password)
                cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()

                if (userdata.username == "Admin" && userdata.password == "admin123") {
                    //verifying
                    cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should("have.text", userdata.expected)
                    
                    //clicking on the Logout
                    cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > p").click() 
                    cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a").click()
                }
                else {
                    cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p").should("have.text", userdata.expected)
                }
            })

        })

    })

})