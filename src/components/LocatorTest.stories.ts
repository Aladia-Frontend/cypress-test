import type { Meta, StoryFn } from "@storybook/vue3";
import LocatorTest from "../components/LocatorTest.vue";

export default {
  title: "LocatorTest",
  component: LocatorTest,
} as Meta;

const Template: StoryFn = (args) => ({
  components: { LocatorTest },
  setup() {
    return { args };
  },
  template: '<LocatorTest v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
