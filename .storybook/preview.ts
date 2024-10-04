import { INITIAL_VIEWPORTS, type ViewportMap } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/vue3";

const customViewports: ViewportMap = {
  mobile: {
    name: "Mobile 320px",
    styles: {
      width: "320px",
      height: "568px",
    },
    type: "mobile",
  },
  desktop: {
    name: "Desktop 1200px",
    styles: {
      width: "1200px",
      height: "800px",
    },
    type: "desktop",
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
