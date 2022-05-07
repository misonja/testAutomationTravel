///<reference types = "Cypress" />

import {topHeader} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"
import {titleSignUp, formSignUp} from "../../support/pom_files/signUpPage"
import {accountInfo1} from "../../fixtures/newAccount"


describe('Navigate to Sing Up page', function() {
     beforeEach('Visit application', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.get(topHeader.signup).click()
     });

     it('Verify elements on the page', function() {   
      cy.get(titleSignUp.title).should("be.visible")    
      cy.get(titleSignUp.info).should("be.visible")   

      cy.get(formSignUp.firstName).should("be.visible")     
      cy.get(formSignUp.lastName).should("be.visible") 
      cy.get(formSignUp.phone).should("be.visible") 
      cy.get(formSignUp.email).should("be.visible") 
      cy.get(formSignUp.password).should("be.visible") 
      cy.get(formSignUp.accountType).should("be.visible").should("have.text", "Customer")  
      cy.get(formSignUp.signup).should("be.visible")
      cy.get(formSignUp.login).should("be.visible")
   });


     it('Click on Sing-up while all fields are not populated', function() {   
          cy.verifyRequiredFields(formSignUp.firstName )
     });

     it('Check if all sign up fields are mandatory and have proper error message', function() {   

        cy.get(formSignUp.firstName)
        .click({force: true})
        .type(accountInfo1.firstName, {force: true})
          cy.verifyRequiredFields(formSignUp.lastName )

          cy.get(formSignUp.lastName)
          .click({force: true})
          .type(accountInfo1.lastName, {force: true})
            cy.verifyRequiredFields(formSignUp.phone )

            cy.get(formSignUp.phone)
            .click({force: true})
            .type(accountInfo1.phone, {force: true})
              cy.verifyRequiredFields(formSignUp.email )

              cy.get(formSignUp.email)
              .click({force: true})
              .type(accountInfo1.email, {force: true})
              cy.verifyRequiredFields(formSignUp.password )
      
     });
     
     it('Navigate back to Login page', function() {   
        cy.get(formSignUp.login).click({force: true})    
        cy.get(form.email).should("be.visible")
     });
})