import "cypress-xpath";

describe("Home Page Tests", () => {
  context("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(1200, 800); // Desktop viewport
      cy.visit("/"); // Assuming the home page is at the root path
    });

    it("Checks elements using CSS Selectors on Desktop", () => {
      cy.get(".hello h1").should("exist");
      cy.get(".hello p").should("exist");
      cy.get(".hello h3").should("have.length", 3);
      cy.get(".hello ul").should("have.length", 3);
      cy.get(".hello ul li a").should("have.length.at.least", 5);
    });

    it("Checks elements using XPath on Desktop", () => {
      cy.xpath("//div[contains(@class, 'hello')]/h1").should("exist");
      cy.xpath("//div[contains(@class, 'hello')]//p").should("exist");
      cy.xpath("//div[contains(@class, 'hello')]//h3").should("have.length", 3);
      cy.xpath("//div[contains(@class, 'hello')]//ul").should("have.length", 3);
      cy.xpath("//div[contains(@class, 'hello')]//ul//li//a").should(
        "have.length.at.least",
        5
      );
    });
  });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(320, 568); // Mobile viewport
      cy.visit("/");
    });

    it("Checks elements using CSS Selectors on Mobile", () => {
      cy.get(".hello h1").should("exist");
      cy.get(".hello p").should("exist");
      cy.get(".hello h3").should("have.length", 3);
      cy.get(".hello ul").should("have.length", 3);
      cy.get(".hello ul li a").should("have.length.at.least", 5);
    });

    it("Checks elements using XPath on Mobile", () => {
      cy.xpath("//div[contains(@class, 'hello')]/h1").should("exist");
      cy.xpath("//div[contains(@class, 'hello')]//p").should("exist");
      cy.xpath("//div[contains(@class, 'hello')]//h3").should("have.length", 3);
      cy.xpath("//div[contains(@class, 'hello')]//ul").should("have.length", 3);
      cy.xpath("//div[contains(@class, 'hello')]//ul//li//a").should(
        "have.length.at.least",
        5
      );
    });
  });
});
