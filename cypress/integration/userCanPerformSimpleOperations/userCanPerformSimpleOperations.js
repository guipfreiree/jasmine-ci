/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the user is at the simple calculator page', () => {
    cy.visit('file:///Users/guilherme.freire/projects/simple%20calculator/simple-calculator.html')
})

Given('the user typed {string} {string} {string}', (firstNumber, operation, secondNumber) => {
    cy.get('.input').type(firstNumber)
    cy.get('.input').type(operation)
    cy.get('.input').type(secondNumber)
})

When('the focus is changed from the input operation field', () => {
    cy.get('.title').click()
})

Then('the result is {string}', (result) => {
    cy.get('#result').should('have.value', result)
})
