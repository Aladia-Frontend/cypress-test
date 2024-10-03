// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("test:after:run", (test, runnable) => {
  const parentTitle = runnable?.parent?.title || "Unknown Parent";
  const testTitle = test?.title || "Unknown Test";

  if (test.state === "failed") {
    cy.screenshot(`${parentTitle} -- ${testTitle} (failed)`);
  } else {
    cy.screenshot(`${parentTitle} -- ${testTitle} (step)`);
  }
});
