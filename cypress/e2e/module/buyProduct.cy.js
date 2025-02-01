
const datatestCheckout = require ('../../support/datatest/dataCheckout');
const PageProduct = require ('../../support/pages/product');
const PageCart = require ('../../support/pages/cart');
const PageCheckout = require ('../../support/pages/checkout');
const datatestLogin = require ('../../support/datatest/dataLogin');
const PageLogin = require ('../../support/pages/login');

let pagesProduct = new PageProduct();
let pagesCart = new PageCart();
let pagesCheckout = new PageCheckout();
let pagesLogin = new PageLogin();

describe ('Buy 2 Product', function(){

    it ('Success Buy 2 Product', function(){
        cy.upScreenView();
        cy.visitSauceDemo();
        pagesLogin.standardUserLogin(datatestLogin.dataId.standard_user);
        pagesLogin.typePassword(datatestLogin.dataId.password);
        pagesLogin.clickButtonLogin();
        pagesLogin.verifySuccessLogin();
        pagesProduct.verifyBackPack();
        pagesProduct.verifyBikeLight();
        pagesProduct.verifyBoltShirt();
        pagesProduct.verifyJacket();
        pagesProduct.verifyOnesie();
        pagesProduct.verifyRedShirt();
        pagesProduct.clickAddBackpack();
        pagesProduct.verifyBackpackAdded();
        pagesProduct.clickAddJacket();
        pagesProduct.verifyJacketAdded();
        pagesProduct.clickCart();
        pagesProduct.verifyBackPack();
        pagesProduct.verifyJacket();
        pagesCart.clickButtonCheckout();
        pagesCheckout.typeFirstName(datatestCheckout.dataId.firstName);
        pagesCheckout.typeLastName(datatestCheckout.dataId.lastName);
        pagesCheckout.typePostalCode(datatestCheckout.dataId.postalCode);
        pagesCheckout.clickButtonContinue();
        pagesCheckout.clickButtonFinish();
        pagesCheckout.verifySuccessOrder(datatestCheckout.dataId.textThanku);
        pagesCheckout.clickBackToProduct();


    })
})

