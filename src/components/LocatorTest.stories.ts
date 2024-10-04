import type { Meta, StoryFn } from "@storybook/vue3";
import { allModes } from "../../.storybook/modes";
import LocatorTest from "./LocatorTest.vue";

export default {
  title: "Components/LocatorTest",
  component: LocatorTest,
  parameters: {
    chromatic: {
      modes: {
        mobile: allModes.mobile,
        desktop: allModes.desktop,
      },
    },
  },
} as Meta<typeof LocatorTest>;

const Template: StoryFn<typeof LocatorTest> = (args) => ({
  components: { LocatorTest },
  setup() {
    return { args };
  },
  template: '<LocatorTest v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
