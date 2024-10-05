// About.stories.ts
import { Meta, StoryFn } from "@storybook/vue3";
import About from "./About.vue";

export default {
  title: "About",
  component: About,
} as Meta;

const Template: StoryFn = (args) => ({
  components: { About },
  setup() {
    return { args };
  },
  template: '<About v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
