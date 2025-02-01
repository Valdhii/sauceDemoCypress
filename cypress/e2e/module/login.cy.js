const datatestLogin = require ('../../support/datatest/dataLogin');
const PageLogin = require ('../../support/pages/login');

let pagesLogin = new PageLogin();



describe ('Login', function(){

    it ('Success Login', function (){

        cy.upScreenView();
        cy.visitSauceDemo();
        pagesLogin.standardUserLogin(datatestLogin.dataId.standard_user);
        pagesLogin.typePassword(datatestLogin.dataId.password);
        pagesLogin.clickButtonLogin();
        pagesLogin.verifySuccessLogin();
        // cy.getCookies().should('not.be.empty');
        // cy.clearCookies();
        // cy.getCookies().should('be.empty');

    })
})