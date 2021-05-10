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
// cypress/support/commands.js
const Locators = require("../fixtures/Locators.json")
Cypress.Commands.add("login", (emailOrdUser, password)=>{
    cy.get(Locators.Login.SignIn).eq(0).click()
    cy.get(Locators.Login.Email).eq(1).type(emailOrdUser)
    cy.get(Locators.Login.Password).eq(2).type(password)
    cy.get(Locators.Login.Submit).eq(3).click()
})