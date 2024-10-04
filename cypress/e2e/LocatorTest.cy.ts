import "cypress-xpath";

describe("Locator Test", () => {
  context("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport(1200, 800);
      cy.visit("/locator-test/");
    });

    it("Find elements using CSS Selectors on Desktop", () => {
      cy.get(".header").should("contain.text", "Locator Test Page");
      cy.get("#username").type("TestUser");
      cy.get(".primary-button").click();
      cy.get("ul > li").should("have.length", 3);
    });

    it("Find elements using XPath on Desktop", () => {
      cy.xpath('//h1[@id="main-title"]').should(
        "contain.text",
        "Locator Test Page"
      );
      cy.xpath('//input[@id="password"]').type("TestPassword");
      cy.xpath('//button[contains(@class, "secondary-button")]').click();
      cy.xpath('//li[text()="Item 2"]').should("exist");
    });
  });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport(320, 568);
      cy.visit("/locator-test/");
    });

    it("Find elements using CSS Selectors on Mobile", () => {
      cy.get(".header").should("contain.text", "Locator Test Page");
      cy.get("#username").type("TestUser");
      cy.get(".primary-button").click();
      cy.get("ul > li").should("have.length", 3);
    });

    it("Find elements using XPath on Mobile", () => {
      cy.xpath('//h1[@id="main-title"]').should(
        "contain.text",
        "Locator Test Page"
      );
      cy.xpath('//input[@id="password"]').type("TestPassword");
      cy.xpath('//button[contains(@class, "secondary-button")]').click();
      cy.xpath('//li[text()="Item 2"]').should("exist");
    });
  });
});
