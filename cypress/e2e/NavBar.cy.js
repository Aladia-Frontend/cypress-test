import "cypress-xpath";

describe("NavBar Component Tests", () => {
  context("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/"); // Ensure NavBar is visible
    });

    it("Checks navigation buttons using CSS Selectors on Desktop", () => {
      cy.get("nav").should("exist");
      cy.get("nav button").should("have.length.at.least", 1);
      cy.get("nav button").each(($btn) => {
        cy.wrap($btn).should("be.visible");
      });
    });

    it("Navigates using the first button on Desktop", () => {
      cy.get("nav button").first().click();
      // You may need to adjust the expected URL or behavior
      cy.url().should("not.eq", "/");
    });

    it("Checks elements using XPath on Desktop", () => {
      cy.xpath("//nav//button").should("have.length.at.least", 1);
    });
  });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(320, 568); // Mobile viewport
      cy.visit("/");
    });

    it("Checks navigation buttons using CSS Selectors on Mobile", () => {
      cy.get("nav").should("exist");
      cy.get("nav button").should("have.length.at.least", 1);
      cy.get("nav button").each(($btn) => {
        cy.wrap($btn).should("be.visible");
      });
    });

    it("Navigates using the first button on Mobile", () => {
      cy.get("nav button").first().click();
      cy.url().should("not.eq", "/");
    });

    it("Checks elements using XPath on Mobile", () => {
      cy.xpath("//nav//button").should("have.length.at.least", 1);
    });
  });
});
