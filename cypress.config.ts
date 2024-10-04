import { prepareArchives } from "@chromaui/test-archiver/cypress";
import { defineConfig } from "cypress";
const { installPlugin } = require("@chromatic-com/cypress");
const { archiveCypress } = require("@chromaui/test-archiver/cypress");

export default defineConfig({
  component: {
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      installPlugin(on, config);

      on("task", {
        prepareArchives,
        archiveCypress,
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
    viewportWidth: 1000,
    viewportHeight: 660,
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      installPlugin(on, config);

      on("task", {
        prepareArchives,
        archiveCypress,
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
