describe("Capture Screenshot", function () {
  it("Open URL", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.screenshot("cypress");
  });
});
