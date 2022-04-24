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
import {topHeader} from "../support/pom_files/header"
export {title, form} from "../support/pom_files/loginPage"


Cypress.Commands.add("loginToApp", (email, password) => {
  cy.get(form.email).type(email, {force: true})       
  cy.get(form.password).type(password, {force: true})
  cy.get(form.login).click({force: true})
  });

Cypress.Commands.add("verifyRequiredFields", () => {
    cy.get(formSignUp.signup).click({force: true})       
    cy.get(formSignUp.lastName).invoke('prop', 'validationMessage')
      .should('equal', form.inputFieldEmpty)
    });
