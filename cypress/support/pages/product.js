const locator = require ('../locator/locatorProduct')

class PageProduct {
    async verifyBackPack (){
        cy.get(locator.locatorId.productBackpack)
        .should('be.visible')
    }

    
    async verifyBikeLight (){
        cy.get(locator.locatorId.productBikeLight)
        .should('be.visible')
    }

    async verifyBoltShirt (){
        cy.get(locator.locatorId.productBoltShirt)
        .should('be.visible')
    }

    async verifyJacket (){
        cy.get(locator.locatorId.productJacket)
        .should('be.visible')
    }

    async verifyOnesie (){
        cy.get(locator.locatorId.productOnesie)
        .should('be.visible')
    }

    async verifyRedShirt (){
        cy.get(locator.locatorId.productRedShirt)
        .should('be.visible')
    }

    async clickAddBackpack (){
        cy.get(locator.locatorId.buttonAddBackpack).click()
    }

    async verifyBackpackAdded(){
        cy.get(locator.locatorId.buttonRemoveBackpack)
        .should('be.visible')
    }

    async clickAddJacket (){
        cy.get(locator.locatorId.buttonAddJacket).click()
    }

    async verifyJacketAdded(){
        cy.get(locator.locatorId.buttonRemoveJacket)
        .should('be.visible')
    }

    async clickCart(){
        cy.get(locator.locatorId.buttonCart).click()
    }


}

module.exports = PageProduct;