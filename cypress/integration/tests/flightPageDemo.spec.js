///<reference types = "Cypress" />

import {topHeader, mainMenu, headerPage, leftMenu} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"
import {searchFlights} from "../../support/pom_files/flightsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe('Flight page tests', function() {
     beforeEach('Navigate to Flight page and login demo user', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.get(leftMenu.languages).click({force: true})
         cy.get(leftMenu.usLanguage).click({force: true})
         cy.contains(mainMenu.flights).click({force: true})
         cy.get(headerPage.pageTitle, {timeout:3000}).contains('SEARCH FOR BEST FLIGHTS').should('be.visible')
     });
      

it.only('Search flights', function() {
    cy.getDropdownOptions(searchFlights.flyingFrom,"CGK")
    cy.get(searchFlights.flyingFrom).should('have.value', 'CGK - Soekarno Hatta Intl - Jakarta')
    cy.getDropdownOptions(searchFlights.toDestination,"DPS")
    cy.get(searchFlights.toDestination).should('have.value', 'DPS - Bali Ngurah Rai - Denpasar')

    cy.get(searchFlights.passengers).click({force: true})
    cy.get(searchFlights.adultsPlus).click({force: true})
    cy.get(searchFlights.childsPlus).click({force: true})
    cy.get 
})
     })
