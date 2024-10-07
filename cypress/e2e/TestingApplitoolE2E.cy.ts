import "cypress-xpath";

describe("Vue Application E2E Tests", () => {
  const runCommonTests = () => {
    it("renders the Button component and checks functionality", () => {
      cy.get("button").should("exist");
      cy.get("button").should("have.class", "storybook-button");
      cy.get("button").should("contain.text", "Login");
      cy.eyesCheckWindow({ tag: "Button Component" }); // Visual AI Checkpoint
    });

    it("navigates to the About page", () => {
      cy.get("nav").should("exist");
      cy.get("nav a").contains("About").click();
      cy.url().should("include", "/about");
      cy.get("h1").should("contain.text", "This is an about page");
      cy.eyesCheckWindow({ tag: "About Page" }); // Visual AI Checkpoint
    });

    it("navigates to the Login page", () => {
      cy.get("nav").should("exist");
      cy.get("nav a").contains("Login").click();
      cy.url().should("include", "/login");
      cy.eyesCheckWindow({ tag: "Login Page" }); // Visual AI Checkpoint
    });

    it("renders the Login Form correctly", () => {
      cy.get("nav a").contains("Login").click();
      cy.get("input[placeholder='Email']").should("exist");
      cy.get("input[placeholder='Password']").should("exist");
      cy.get("button").contains("Login").should("exist");
      cy.eyesCheckWindow({ tag: "Login Form" }); // Visual AI Checkpoint
    });
  };

  context("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(1200, 800);
      cy.visit("/login");
      cy.wait(1000);
      cy.eyesOpen({
        appName: "Your Vue Application", // Set your app name
        testName: Cypress.currentTest.title,
      });
    });

    runCommonTests();

    afterEach(() => {
      cy.eyesClose(); // End Applitools Visual AI Test
    });
  });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(450, 568);
      cy.visit("/login");
      cy.wait(1000);
      cy.eyesOpen({
        appName: "Your Vue Application", // Set your app name
        testName: Cypress.currentTest.title,
      });
    });

    runCommonTests();

    afterEach(() => {
      cy.eyesClose(); // End Applitools Visual AI Test
    });
  });
});
