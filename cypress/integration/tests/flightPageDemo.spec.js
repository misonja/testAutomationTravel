///<reference types = "Cypress" />

import {topHeader, mainMenu, headerPage} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"
import {searchFlights } from "../../support/pom_files/flightsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe('Flight page tests', function() {
     beforeEach('Navigate to Flight page and login demo user', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.contains(mainMenu.flights).click({force: true})
         cy.get(headerPage.pageTitle, {timeout:3000}).contains('SEARCH FOR BEST FLIGHTS').should('be.visible')
     });
      

it.only('Search flights', function() {
    cy.get(searchFlights.fromCountry).select("CNS",{force:true})

})
     })
