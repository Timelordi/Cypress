require('cypress-xpath')
import('cypress-iframe')

describe("Handling frames", () => {

    it("Approach 1", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        // заходим в Iframe, документ и проверяем если он доступен
        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        //очищаем содержание Iframe и заполняем словом "Welcome"
        iframe.clear().type("Hello Dmitriy {ctrl+a}")
        cy.get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1) > span > svg > path").click()
    })

    it("Approach 2 - by using custom command", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        // в commands.js создали функцию и ее вызываем, в дальнейшем выполняя действия
        cy.getIFrame("#mce_0_ifr").clear().type("Hello Dmitriy {ctrl+a}")
        
        cy.get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1) > span > svg > path").click()
    })

    it("Approach 3 - by using Cypress Iframe plugin", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.frameLoaded("#mce_0_ifr"); // load the frame

        cy.iframe("#mce_0_ifr").clear().type("Hi Dmitriy Again {ctrl+a}") //очистили содержимое, напечатали и выделили весь текст
        cy.get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1) > span > svg > path").click()  // клик по кнопке "Жирный"
        
    })
})