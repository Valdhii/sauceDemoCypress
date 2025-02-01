const locator = require ('../locator/locatorCheckout')

class PageCheckout {

    async typeFirstName(firstName){
        cy.get(locator.locatorId.fieldFirstName)
        .type(firstName)
    }

    async typeLastName(lastName){
        cy.get(locator.locatorId.fieldLastName)
        .type(lastName)
    }

    async typePostalCode(postalCode){
        cy.get(locator.locatorId.fieldPostalCode)
        .type(postalCode)
    }

    async clickButtonContinue(){
        cy.get(locator.locatorId.buttonContinue).click()
        cy.wait(7000);
    }

    async clickButtonFinish(){
        cy.get(locator.locatorId.buttonFinish).click()
    }

    async verifySuccessOrder(textThanku){
        cy.get(locator.locatorId.textThanku)
        .should('be.visible').contains(textThanku);
        cy.wait(10000);
    }

    async clickBackToProduct(){
        cy.get(locator.locatorId.buttonToProduct).click();
    }


}

module.exports = PageCheckout;