import LocatorTest from "./LocatorTest.vue";

export default {
  title: "LocatorTest",
  component: LocatorTest,
};

const Template = (args) => ({
  components: { LocatorTest },
  setup() {
    return { args };
  },
  template: '<LocatorTest v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
