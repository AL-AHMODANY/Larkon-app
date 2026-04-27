// src/router/index.js or src/router.js
import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/layout/Dashboard.vue";

const Buttons = () => import("../views/baseUi/Button.vue");
const Cards = () => import("../views/baseUi/Card.vue");
const Modals = () => import("../views/baseUi/Modal.vue");
const Alerts = () => import("../views/baseUi/Alerts.vue");
const Badge = () => import("../views/baseUi/Badges.vue");
const Accordion = () => import("../views/baseUi/Accordion.vue");
const Avatar = () => import("../views/baseUi/Avatar.vue");
const Breadcrumbs = () => import("../views/baseUi/Breadcrumbs.vue");
const Dropdown = () => import("../views/baseUi/Dropdown.vue");
const Listgroup = () => import("../views/baseUi/Listgroup.vue");
const Spinner = () => import("../views/baseUi/Spinner.vue");
const Offcanva = () => import("../views/baseUi/Offcanva.vue");
const Tabs = () => import("../views/baseUi/Tabs.vue");
const Toastify = () => import("../views/advanceUi/Toastify.vue");
const SweetAlert = () => import("../views/advanceUi/Sweetalert.vue");
const Scrollbar = () => import("../views/advanceUi/Scrollbar.vue");
const Rating = () => import("../views/advanceUi/Rating.vue");
const Swiperslider = () => import("../views/advanceUi/Swiperslider.vue");
const Area = () => import("../views/charts/Area.vue");
const Carousel = () => import("../views/baseUi/Carousel.vue");
const Collapse = () => import("../views/baseUi/Collapse.vue");
// Define your routes
const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/offcanva",
    name: "   Offcanva",
    component: Offcanva,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
  {
    path: "/accordion",
    name: "Accordion",
    component: Accordion,
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: Dropdown,
  },
  {
    path: "/listgroup",
    name: "List Group",
    component: Listgroup,
  },
  {
    path: "/alerts",
    name: "Alerts",
    component: Alerts,
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: Avatar,
  },
  {
    path: "/spinner",
    name: "Spinner",
    component: Spinner,
  },
  {
    path: "/breadcrumbs",
    name: "Breadcrumbs",
    component: Breadcrumbs,
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
  },
  {
    path: "/badges",
    name: "Badge",
    component: Badge,
  },
  {
    path: "/toastify",
    name: "Toastify",
    component: Toastify,
  },
  {
    path: "/sweetalert",
    name: "SweetAlert",
    component: SweetAlert,
  },
  {
    path: "/scrollbar",
    name: "Scrollbar",
    component: Scrollbar,
  },
  {
    path: "/ratings",
    name: "Rating",
    component: Rating,
  },
  {
    path: "/swiper-slider",
    name: "SwiperSlider",
    component: Swiperslider,
  },
  {
    path: "/AreaChart",
    name: "AreaChart",
    component: Area,
  },
  {
    path: "/charts-apex-area",
    redirect: "/AreaChart",
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: Carousel,
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: Collapse,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
