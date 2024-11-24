import { selectors } from "../selectors/login.sel.js";

describe("SauceDemo Login Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login successfully with standard_user", () => {
    cy.fixture("loginData.json").then((data) => {
      const user = data.validUsers.standard_user;
      cy.get(selectors.usernameInput).click().type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.loginButton).click();
      cy.url().should("include", "/inventory");
    });
  });

  it("Should fail to login with locked_out_user", () => {
    cy.fixture("loginData.json").then((data) => {
      const user = data.validUsers.locked_out_user;
      cy.get(selectors.usernameInput).click().type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.loginButton).click();
      cy.get(selectors.errorMessage).should("be.visible");
    });
  });

  it("Should login successfully with problem_user", () => {
    cy.fixture("loginData.json").then((data) => {
      const user = data.validUsers.problem_user;
      cy.get(selectors.usernameInput).click().type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.loginButton).click();
      cy.url().should("include", "/inventory");
    });
  });

  it("Should login successfully with performance_glitch_user", () => {
    cy.fixture("loginData.json").then((data) => {
      const user = data.validUsers.performance_glitch_user;
      cy.get(selectors.usernameInput).click().type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.loginButton).click();
      cy.url().should("include", "/inventory");
    });
  });

  it("Should login successfully with visual_user", () => {
    cy.fixture("loginData.json").then((data) => {
      const user = data.validUsers.visual_user;
      cy.get(selectors.usernameInput).click().type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.loginButton).click();
      cy.url().should("include", "/inventory");
    });
  });

  it("Should fail to login with invalid_user", () => {
    cy.fixture("loginData.json").then((data) => {
      const user = data.invalidUser;
      cy.get(selectors.usernameInput).click().type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.loginButton).click();
      cy.get(selectors.errorMessage)
        .should("be.visible")
        .and("contain", user.errorMessage);
    });
  });
});
