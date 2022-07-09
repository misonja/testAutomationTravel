///<reference types = "Cypress" />

import {topHeader, mainMenu} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"
import {headerVisa, search, submissionForm } from "../../support/pom_files/visaPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe('Visa page tests', function() {
     beforeEach('Navigate to Visa page and login demo user', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.contains(mainMenu.visa).click({force: true})
         cy.get(headerVisa.titleVisa, {timeout:3000}).should('be.visible')
     });
      
     it('Submit visa - validation', function() {
        cy.get(search.submit).click({force:true})
        cy.get(form.email).invoke('prop', 'validationMessage')
        .should('equal', form.emailFormat)
})
     })
