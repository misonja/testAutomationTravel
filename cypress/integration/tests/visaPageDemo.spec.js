///<reference types = "Cypress" />

import {topHeader, mainMenu, headerPage} from "../../support/pom_files/header"
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
         cy.get(headerPage.pageTitle, {timeout:3000}).should('be.visible')
     });
      
     it('Submit visa - validation', function() {
        cy.get(search.submit).click({force:true})
        cy.get(search.fromCountry).invoke('prop', 'validationMessage')
        .should('equal', search.countryEmpty)

        cy.get(search.fromCountry).select("RS",{force:true})
        cy.get(search.submit).click({force:true})
        cy.get(search.toCountry).invoke('prop', 'validationMessage')
        .should('equal', search.countryEmpty)
})

it('Search visa', function() {
    cy.get(search.fromCountry).select("RS",{force:true})
    cy.get(search.submit).click({force:true})

    cy.get(search.toCountry).select("GR",{force:true})
    cy.get(search.submit).click({force:true})

    cy.get(submissionForm.submissionHeader).should('be.visible')
})

it('Submit visa', function() {
    cy.get(search.fromCountry).select("RS",{force:true})
    cy.get(search.submit).click({force:true})

    cy.get(search.toCountry).select("GR",{force:true})
    cy.get(search.submit).click({force:true})

    cy.get(submissionForm.submissionHeader).should('be.visible')
    cy.get(submissionForm.submissionHeaderDate).should('be.visible')
    cy.get(submissionForm.firstName).type('Sonja', {force: true})
    cy.get(submissionForm.lastName).type('Milovanovic', {force: true})
    cy.get(submissionForm.phone).type('1111111111', {force: true})
    cy.get(submissionForm.notes).type('Notes text', {force: true})
    cy.get(submissionForm.submit).click({force:true})
    cy.get(submissionForm.successfulMessageSubmit).should('be.visible')
})
     })
