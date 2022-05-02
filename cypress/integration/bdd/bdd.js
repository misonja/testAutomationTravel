import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import {title, form} from "../../support/pom_files/loginPage"
const customerUser = Cypress.env("customerUser")
const agentUser = Cypress.env("agentUser")

Given('user is logged in', () => {
    cy.visit(Cypress.env("baseUrl"))
    cy.loginToApp(customerUser.username, customerUser.password);
});

When('user navigates to {string} page', (menuItem) => {
    cy.get('a.waves-effect').contains(menuItem).click()
});

Then('user is on {string} page', (title) => {
    cy.get('.text-center').contains(title)
    cy.wait(2000)
});

And('user is logged out', () => {
    cy.userLogoutAccount()
});
