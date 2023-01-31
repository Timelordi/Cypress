// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add("getIFrame", (iFrame) => {
    return cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})


//-----------------------------------------
// customer command for clicking on link using label

Cypress.Commands.add("clickLink", (label) => {
    cy.get("a").contains(label).click();
})

//Customer commans for Login
Cypress.Commands.add('loginApp', (email, password) => {

    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.buttons > button").click()

    //validation
    cy.get("body > div.master-wrapper-page > div.header > div.header-upper > div.header-links-wrapper > div.header-links > ul > li:nth-child(1) > a").should('have.text', "My account");
})
