///<reference types = "Cypress" />

import {topHeader} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"
import {sidebar,info,accountDemoInfo } from "../../support/pom_files/homePageDemo"

const customerUser = Cypress.env("customerUser")
const agentUser = Cypress.env("agentUser")

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Login application tests', function() {
     beforeEach('Navigate to Login page and login demo user', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.loginToApp(customerUser.username,customerUser.password)
     });

     it('Verify homePage demo user', function() {
         cy.get(sidebar.addFunds).should('be.visible')
         cy.get(accountDemoInfo.accountInfoName).should('have.text', 'Demo')
         cy.userLogout()
     })
})