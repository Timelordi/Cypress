require('cypress-xpath')

describe("Alerts", () => {
    // 1.)  Javascript alert: It will have text and an OK button
    it.skip("JS alert", () =>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//*[@id='content']/div/ul/li[1]/button").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })
        //alert windows automatically closed by cypress
        cy.get("#result").should('have.text', "You successfully clicked an alert")
    })

    // 2.) Javascript confirm Alert: IT will have some test with "OK" and "Cancel"
    it("JS Confirm aleart - OK", () =>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//*[@id='content']/div/ul/li[2]/button").click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })

        //cypress automatically closed alert window with "OK"
        cy.get("#result").should('have.text', "You clicked: Ok")

    })

    it.skip("JS Confirm aleart - Cancel", () =>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//*[@id='content']/div/ul/li[2]/button").click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })

        cy.on('window:confirm', () => false); //cypress closes alert using "Cancel" button
        cy.get("#result").should('have.text', "You clicked: Cancel")
    })

    // 3.) Javascript prompt Alert: It will have some text with a text bot for user input along with "Ok"
        it.skip("JS prompt alert - click OK", () =>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        //отправляем значение в всплывающее окно еще до того как мы его вызвали
            cy.window().then((win)=>{
          cy.stub(win, 'prompt').returns("Welcome");
         })
        cy.xpath("//*[@id='content']/div/ul/li[3]/button").click(); //сам клик на кнопку
         // cypress will automatically close prompted alert - it will use "OK" button by default
         cy.get("#result").should("have.text", "You entered: Welcome")
        })

    it.skip("JS prompt alert - click Cancel", () =>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
            //отправляем значение в всплывающее окно еще до того как мы его вызвали
        cy.window().then((win)=>{cy.stub(win, 'prompt').returns("Welcome");})
        cy.on("//*[@id='content']/div/ul/li[3]/button", () => false);
        
        cy.get("#result").should("have.text", '')
    })

    // 4.) Authentication Alert
    it("Browser alert with Authentication request", () =>{
        // approach 1
      //  cy.visit("https://the-internet.herokuapp.com/basic_auth", 
         //   {auth:{username:"admin", password:"admin"}}) //передали пароль и юзера при открытии страницы

        //    cy.get("#content > div > p").should("have.contain", "Congratulations")

        // approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("#content > div > p").should("have.contain", "Congratulations")
    })
})