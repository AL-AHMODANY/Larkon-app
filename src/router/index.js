// src/router/index.js or src/router.js
import { createRouter, createWebHistory } from "vue-router";

// Base UI pages
import Buttons from "../views/baseUi/Button.vue";
import Cards from "../views/baseUi/Card.vue";
import Home from "../components/layout/Dashboard.vue";
import Modals from "../views/baseUi/Modal.vue";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, 
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/modals",
    name: "Modals",
    component: Modals,
  }
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;