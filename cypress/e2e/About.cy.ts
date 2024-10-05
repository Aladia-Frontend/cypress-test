import "cypress-xpath";

describe("About Page Tests", () => {
  context("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/about"); // Adjust the path if necessary
    });

    it("Checks elements using CSS Selectors on Desktop", () => {
      cy.get(".about h1").should("contain.text", "About Us");
      cy.get(".about p").should(
        "contain.text",
        "This is a simple About page for our Vue.js application."
      );
    });

    it("Checks elements using XPath on Desktop", () => {
      cy.xpath("//div[contains(@class, 'about')]/h1").should(
        "have.text",
        "About Us"
      );
      cy.xpath("//div[contains(@class, 'about')]/p").should(
        "have.text",
        "This is a simple About page for our Vue.js application."
      );
    });
  });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(320, 568); // Mobile viewport
      cy.visit("/about"); // Adjust the path if necessary
    });

    it("Checks elements using CSS Selectors on Mobile", () => {
      cy.get(".about h1").should("contain.text", "About Us");
      cy.get(".about p").should(
        "contain.text",
        "This is a simple About page for our Vue.js application."
      );
    });

    it("Checks elements using XPath on Mobile", () => {
      cy.xpath("//div[contains(@class, 'about')]/h1").should(
        "have.text",
        "About Us"
      );
      cy.xpath("//div[contains(@class, 'about')]/p").should(
        "have.text",
        "This is a simple About page for our Vue.js application."
      );
    });
  });
});
