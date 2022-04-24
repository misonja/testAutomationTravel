///<reference types = "Cypress" />

import {topHeader, mainMenu} from "../../support/pom_files/header"
import {title, form} from "../../support/pom_files/loginPage"
import {sidebar,info,accountDemoInfo } from "../../support/pom_files/homePageDemo"
import {search,featuredHotels, searchResult } from "../../support/pom_files/hotelsPage"

const customerUser = Cypress.env("customerUser")
const agentUser = Cypress.env("agentUser")

const expected = [
    'Rendezvous Hotels',
    'Swissotel Le Plaza Basel ',
]

describe('Login application tests', function() {
     beforeEach('Navigate to Hotels page and login demo user', function() {
         cy.visit(Cypress.env("baseUrl"))
         cy.get(topHeader.login).click()
         cy.get(form.email).type(customerUser.username, {force: true})       
         cy.get(form.password).type(customerUser.password, {force: true})
         cy.get(form.login).click({force: true})
         cy.get(mainMenu.hotels).click({force: true})
         cy.get(search.cityName, {timeout:3000}).should('be.visible')
     });
      
     it('Search Hotel by name demo user', function() {
        let hotelsNum;
        cy.get(search.cityName).click({force:true})
        cy.get(search.cityNameInput, {timeout:4000}).type('Sing', {force: true})
        cy.get(search.cityNameItem).click()
        cy.get(search.search).click({force:true})
        cy.get('#fadein > section.breadcrumb-area.bread-bg-7 > div > div > div > div:nth-child(2) > div > ul > li')
        .find('strong')
        .then((value) =>{
            hotelsNum = value[0].innerText;
        }).then(()=>{
        cy.get(searchResult.hotelsList).children().then((item) => {
        expect(item.length).to.be.eq(Number(hotelsNum));
        for(let i = 0; i < item.length; i++){
            cy.get('li')
              .eq(i)
              .find('div')
              .eq(2)
              .find('h3')
              .should('have.text', expected[i])
        }
    })
})
     })
    }) 