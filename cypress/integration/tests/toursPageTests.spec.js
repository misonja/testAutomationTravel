///<reference types = "Cypress" />

import {topHeader, mainMenu} from "../../support/pom_files/header"
import {tours,searchTours,filter} from "../../support/pom_files/toursPage"

const expected = 'Private Custom New York City Tour by SUV                    \n                  '

  describe('Login application tests', function() {
    beforeEach('Navigate to Tours page and login demo user', function() {
        cy.visit(Cypress.env("baseUrl"))
   //     cy.loginToApp(demoUser.username,demoUser.password)
        cy.get(mainMenu.tours).click({force:true})
    });

    it('Verify tours demo user', function() {
        cy.get(tours.title).should('be.visible')
    });

    it.only('Verify tours for specific price', function() {
      cy.get(tours.destinationDropDown).click({force:true})
      cy.get(tours.destinationField).type("York", {force:true})
      cy.get(tours.destinationDropDownItem).click({force:true})
      cy.get(tours.search).click({force:true})

      cy.setAmountRange()
      cy.wait(5000)
      
      cy.get(searchTours.tourTitleFirst)
            .should('have.text', expected)
    })
         })
