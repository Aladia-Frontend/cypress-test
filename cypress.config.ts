import { startDevServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      on("file:preprocessor", vitePreprocessor());
      on("dev-server:start", (options) => startDevServer({ options }));
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
