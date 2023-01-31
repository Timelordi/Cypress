describe("Fixtures", ()=>{

    // Direct access
 /*   it('Fixture Demo Test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
      
        // using fixture method and specifying the fixture file
       cy.fixture("orangehrm").then((data) => {

       
       
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type(data.username)
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type(data.password)
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()

        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should("have.text", data.expected)
    })
    })
*/

    // Access through the hook - for multiple it blocks
      let userdata; // объявили глобальную переменную
    before(() => {
        cy.fixture("orangehrm").then((data) =>{
            userdata=data; // присвоили глобальной переменной массив значений из файла фикстур
        })
    })
 
    it("Fixtures Demo Test", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
      
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type(userdata.username)
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type(userdata.password)
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()

        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").should("have.text", userdata.expected)
})

})