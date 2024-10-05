import Home from "./Home.vue";

export default {
  title: "Home",
  component: Home,
  argTypes: {
    msg: { control: "text" },
  },
};

const Template = (args) => ({
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
