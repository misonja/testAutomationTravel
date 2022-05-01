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
import {title, form} from "../support/pom_files/loginPage"
import { tours,searchTours,filter} from "./pom_files/toursPage";
import {titleSignUp, formSignUp} from "./pom_files/signUpPage";

Cypress.Commands.add('loginToApp', (emailText, passwordText) => {
  cy.get(topHeader.login).click()
  cy.get(form.email).type(emailText, {force: true})       
  cy.get(form.password).type(passwordText, {force: true})
  cy.get(form.login).click({force: true})
  });

Cypress.Commands.add('verifyRequiredFields', (element2) => {
    cy.get(formSignUp.signup).click({force: true})       
    cy.get(element2).invoke('prop', 'validationMessage')
      .should('equal', form.inputFieldEmpty)
    });

 Cypress.Commands.add("setAmountRange", () => {
      cy.get(searchTours.filterTitle)
        .scrollIntoView()

        cy.get(filter.minTours)
        .trigger('mousedown',{force: true} )
        .invoke('attr', 'value', '1320').trigger('mousemove',{force: true} )
    });