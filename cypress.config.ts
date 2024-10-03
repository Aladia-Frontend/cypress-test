import { prepareArchives } from "@chromaui/test-archiver/cypress";
import { defineConfig } from "cypress";
const { installPlugin } = require("@chromatic-com/cypress");

export default defineConfig({
  component: {
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      process.env.CHROMATIC_ARCHIVE_LOCATION =
        "/Users/rr/DevOps/cypress-test/cypress/screenshots/";

      installPlugin(on, config);

      on("task", {
        prepareArchives,
      });

      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome" && browser.isHeadless) {
          launchOptions.args.push("--remote-debugging-port=9222");
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--use-fake-device-for-media-stream");
        }
        return launchOptions;
      });
    },
  },

  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      process.env.CHROMATIC_ARCHIVE_LOCATION =
        "/Users/rr/DevOps/cypress-test/cypress/screenshots/";

      installPlugin(on, config);

      on("task", {
        prepareArchives,
      });

      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome" && browser.isHeadless) {
          launchOptions.args.push("--remote-debugging-port=9222");
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--use-fake-device-for-media-stream");
        }
        return launchOptions;
      });
    },
  },
});
