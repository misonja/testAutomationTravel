///<reference types = "Cypress" />

import {topHeader, mainMenu} from "../../support/pom_files/header"
import {tours,searchTours,filter} from "../../support/pom_files/toursPage"

const expected = 'Boston Chauffeured Sedan Service'


  describe('Login application tests', function() {
    beforeEach('Navigate to Tours page and login demo user', function() {
        cy.visit(Cypress.env("baseUrl"))
        cy.contains(mainMenu.tours).click({force:true})
    });

    it('Verify tours demo user', function() {
        cy.get(tours.title).should('be.visible')
    });

    it('Verify tours for specific price', function() {
      cy.get(tours.destinationDropDown).click({force:true})
      cy.get(tours.destinationField).type("York", {force:true})
      cy.get(tours.destinationDropDownItem).click({force:true})
      cy.get(tours.search).click({force:true})

      cy.setAmountRange()
      cy.wait(5000)
      
      cy.get(searchTours.tourTitleFirst)
            .contains(expected)
    })
         })
