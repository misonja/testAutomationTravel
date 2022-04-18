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
      cy.get(formSignUp.signup).should("be.enabled")
      cy.get(formSignUp.login).should("be.enabled")
   });


     it('Click on Sing-up while all fields are not populated', function() {   
        cy.get(formSignUp.signup).click({force: true})       
          cy.get(formSignUp.firstName).invoke('prop', 'validationMessage')
          .should('equal', form.inputFieldEmpty)
     });

     it.only('Check if all sign up fields are mandatory and have proper error message', function() {   
      cy.get(formSignUp.signup).click({force: true})    
        cy.get(formSignUp.firstName).invoke('prop', 'validationMessage')
              .should('equal', form.inputFieldEmpty)

        cy.get(formSignUp.firstName)
        .click({force: true})
        .type(accountInfo1.firstName, {force: true})
        cy.get(formSignUp.signup).click({force: true})       
        cy.get(formSignUp.lastName).invoke('prop', 'validationMessage')
          .should('equal', form.inputFieldEmpty)

          cy.get(formSignUp.lastName)
          .click({force: true})
          .type(accountInfo1.lastName, {force: true})
          cy.get(formSignUp.signup).click({force: true})       
          cy.get(formSignUp.phone).invoke('prop', 'validationMessage')
            .should('equal', form.inputFieldEmpty)

            cy.get(formSignUp.phone)
            .click({force: true})
            .type(accountInfo1.phone, {force: true})
            cy.get(formSignUp.signup).click({force: true})       
            cy.get(formSignUp.email).invoke('prop', 'validationMessage')
              .should('equal', form.inputFieldEmpty)

              cy.get(formSignUp.email)
              .click({force: true})
              .type(accountInfo1.email, {force: true})
              cy.get(formSignUp.signup).click({force: true})       
              cy.get(formSignUp.password).invoke('prop', 'validationMessage')
                .should('equal', form.inputFieldEmpty)
      
     });
     
     it('Login - entered proper email', function() {   
        cy.get(form.email).type(customerUser.username, {force: true})    
        cy.get(form.login).click({force: true})  
        cy.get(form.password).invoke('prop', 'validationMessage')
          .should('equal', form.inputFieldEmpty)
     });
     
     it('Login - entered proper email, empty password', function() {   
        cy.get(form.email).type(customerUser.username, {force: true})    
        cy.get(form.login).click({force: true})  
        cy.get(form.password).invoke('prop', 'validationMessage')
        .should('equal', form.inputFieldEmpty)
     });
          
     it('Login - entered proper email, wrong password', function() {   
        cy.get(form.email).type(customerUser.username, {force: true})   
        cy.get(form.password).type(customerUser.wrongPassword, {force: true})
        cy.get(form.login).click({force: true})  
        cy.get(form.wrongCredential, {timeout:2000}).should('have.text', form.wrongCredentialText);
     });

     it('Login - entered wrong email, proper password', function() {   
      cy.get(form.email).type(customerUser.wrongUsername, {force: true})   
      cy.get(form.password).type(customerUser.password, {force: true})
      cy.get(form.login).click({force: true})  
      cy.get(form.email).invoke('prop', 'validationMessage')
      .should('equal', form.emailFormat)
   });
})