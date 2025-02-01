const locator = require ('../locator/locatorCart')

class PageCart {

    async clickButtonCheckout(){
        cy.get(locator.locatorId.buttonCheckout).click()
    }


}

module.exports = PageCart;