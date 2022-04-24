///<reference types = "Cypress" />

import {topHeader} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"
import {sidebar,info,accountDemoInfo } from "../../support/pom_files/homePageDemo"

const customerUser = Cypress.env("customerUser")
const agentUser = Cypress.env("agentUser")

describe('Login application tests', function() {
     beforeEach('Navigate to Login page and login demo user', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.get(topHeader.login).click()
         cy.get(form.email).type(customerUser.username, {force: true})       
         cy.get(form.password).type(customerUser.password, {force: true})
         cy.get(form.login).click({force: true})
     });

     it('Verify homePage demo user', function() {
         cy.get(sidebar.addFunds).should('be.visible')
     })
})