import { createRouter, createWebHistory } from "vue-router";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import LocatorTest from "./components/LocatorTest.vue";

const routes = [
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
