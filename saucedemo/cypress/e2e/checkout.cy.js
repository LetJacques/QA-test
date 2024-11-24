import { selectors } from "../selectors/checkout.sel.js";

describe("SauceDemo Checkout Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("loginData.json").then((data) => {
      const user = data.validUsers.standard_user;
      cy.get(selectors.usernameInput).type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.submitButton).click();
      cy.url().should("include", "/inventory.html");
    });
  });

  it("Should add items to cart and complete checkout", () => {
    cy.get(selectors.addToCartBackpack).click();
    cy.get(selectors.addToCartBikeLight).click();
    cy.get(selectors.addToCartBoltTshirt).click();
    cy.get(selectors.cartLink).click();
    cy.get(selectors.checkoutButton).click();
    cy.get(selectors.firstNameInput).type("John");
    cy.get(selectors.lastNameInput).type("Marston");
    cy.get(selectors.postalCodeInput).type("12345");
    cy.get(selectors.continueButton).click();
    cy.get(selectors.finishButton).click();
    cy.get(selectors.backToProductsButton).click();
  });

  it("Should sort products by price and continue shopping", () => {
    cy.get(selectors.productSortContainer).select("hilo");
    cy.get(selectors.addToCartFleeceJacket).click();
    cy.get(selectors.cartLink).click();
  });

  it("Should sort products by name and continue shopping", () => {
    cy.get(selectors.productSortContainer).select("az");
    cy.get(selectors.addToCartBackpack).click();
    cy.get(selectors.cartLink).click();
  });

  it("Should remove items from the cart", () => {
    cy.get(selectors.addToCartBackpack).click();
    cy.get(selectors.addToCartBikeLight).click();
    cy.get(selectors.addToCartBoltTshirt).click();
    cy.get(selectors.cartLink).click();
    cy.get(selectors.removeBackpack).click();
    cy.get(selectors.removeBikeLight).click();
    cy.get(selectors.removeBoltTshirt).click();
    cy.get(selectors.continueShoppingButton).click();
  });
});
