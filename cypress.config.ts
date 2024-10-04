import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {},
  },

  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {},
  },
});
