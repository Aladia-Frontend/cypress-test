import About from "./About.vue";
import Home from "./Home.vue";
import LocatorTest from "./LocatorTest.vue";
import NavBar from "./NavBar.vue";

export default {
  title: "NavBar",
  component: NavBar,
};

const mockRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { label: "Go to Home" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { label: "Go to About" },
  },
  {
    path: "/locator-test",
    name: "LocatorTest",
    component: LocatorTest,
    meta: { label: "Go to Locator test" },
  },
];

const Template = (args) => ({
  components: { NavBar },
  setup() {
    return { args };
  },
  template: '<NavBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  routes: mockRoutes,
};
