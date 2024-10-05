// Home.stories.ts
import { Meta, StoryFn } from "@storybook/vue3";
import Home from "./Home.vue";

export default {
  title: "Home",
  component: Home,
  argTypes: {
    msg: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { Home },
  setup() {
    return { args };
  },
  template: '<Home v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to our Vue.js Application!",
};
