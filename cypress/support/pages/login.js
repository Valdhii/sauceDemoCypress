const locator = require ('../locator/locatorLogin')
const locatorProduct = require('../locator/locatorProduct')


class PageLogin {
    async standardUserLogin (standard_user){
        cy.get(locator.locatorId.fieldUsername)
        .click().type(standard_user);
    }

    async typePassword (password){
        cy.get(locator.locatorId.fieldPassword)
        .click().type(password);
    }

    async clickButtonLogin (){
        cy.get(locator.locatorId.buttonLogin).click();
    }

    async verifySuccessLogin (){
        cy.get(locatorProduct.locatorId.pageTitleProduct)
        .should('be.visible')
    }

    async lockedOutUserLogin (locked_out_user){
        cy.get(locator.locatorId.fieldUsername)
        .click().type(locked_out_user);
    }

    async problemUserLogin (problem_user){
        cy.get(locator.locatorId.fieldUsername)
        .click().type(problem_user);
    }

    async glitchUserLogin (performance_glitch_user){
        cy.get(locator.locatorId.fieldUsername)
        .click().type(performance_glitch_user);
    }

    async errordUserLogin (error_user){
        cy.get(locator.locatorId.fieldUsername)
        .click().type(error_user);
    }

    async visualUserLogin (visual_user){
        cy.get(locator.locatorId.fieldUsername)
        .click().type(visual_user);
    }

}

module.exports = PageLogin;