import About from "./About.vue";

export default {
  title: "About",
  component: About,
};

const Template = (args) => ({
  components: { About },
  setup() {
    return { args };
  },
  template: '<About v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
