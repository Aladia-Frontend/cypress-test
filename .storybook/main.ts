import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "@chromatic/chromatic",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};

export default config;
