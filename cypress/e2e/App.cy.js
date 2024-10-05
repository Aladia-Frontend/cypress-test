import "cypress-xpath";

describe("App Component Tests", () => {
  context("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/");
    });

    it("Verifies that NavBar is displayed on Desktop", () => {
      cy.get("nav").should("exist").and("be.visible");
    });

    it("Verifies that the Home page is displayed on Desktop", () => {
      cy.get(".hello").should("exist");
    });

    it("Navigates to About page on Desktop", () => {
      cy.get("nav button").contains("About").click();
      cy.url().should("include", "/about");
      cy.get(".about h1").should("contain.text", "About Us");
    });

    it("Checks elements using XPath on Desktop", () => {
      cy.xpath("//nav").should("exist");
      cy.xpath("//div[@id='app']").should("exist");
    });
  });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(320, 568); // Mobile viewport
      cy.visit("/");
    });

    it("Verifies that NavBar is displayed on Mobile", () => {
      cy.get("nav").should("exist").and("be.visible");
    });

    it("Verifies that the Home page is displayed on Mobile", () => {
      cy.get(".hello").should("exist");
    });

    it("Navigates to About page on Mobile", () => {
      cy.get("nav button").contains("About").click();
      cy.url().should("include", "/about");
      cy.get(".about h1").should("contain.text", "About Us");
    });

    it("Checks elements using XPath on Mobile", () => {
      cy.xpath("//nav").should("exist");
      cy.xpath("//div[@id='app']").should("exist");
    });
  });
});
