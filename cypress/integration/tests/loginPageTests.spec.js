///<reference types = "Cypress" />

import {topHeader} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"


const customerUser = Cypress.env("customerUser")
const agentUser = Cypress.env("agentUser")

describe('Login application tests', function() {
     beforeEach('Navigate to Login page', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.get(topHeader.login).click()
     });

     it('Login with empty email and password', function() {   
        cy.get(form.login).click({force: true})       
            cy.get(form.email).invoke('prop', 'validationMessage')
              .should('equal', form.inputFieldEmpty)
     });

     it('Login - wrong email', function() {   
        cy.get(form.email).type(customerUser.wrongUsername,{force: true})    
        cy.get(form.login).click({force: true})  
            cy.get(form.email).invoke('prop', 'validationMessage')
              .should('equal', form.emailFormat)
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