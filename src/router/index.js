// src/router/index.js or src/router.js
import { createRouter, createWebHashHistory } from "vue-router";

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
const Pagination = () => import("../views/baseUi/Pagination.vue");
const Placeholders = () => import("../views/baseUi/Placeholders.vue");
const Popovers = () => import("../views/baseUi/Popovers.vue");
const Progress = () => import("../views/baseUi/Progress.vue");
const Scrollspy = () => import("../views/baseUi/Scrollspy.vue");
const Toasts = () => import("../views/baseUi/Toasts.vue");
const Tooltips = () => import("../views/baseUi/Tooltips.vue");
const Carousel = () => import("../views/baseUi/Carousel.vue");
const Collapse = () => import("../views/baseUi/Collapse.vue");
const Toastify = () => import("../views/advanceUi/Toastify.vue");
const SweetAlert = () => import("../views/advanceUi/Sweetalert.vue");
const Scrollbar = () => import("../views/advanceUi/Scrollbar.vue");
const Rating = () => import("../views/advanceUi/Rating.vue");
const Swiperslider = () => import("../views/advanceUi/Swiperslider.vue");
const Area = () => import("../views/charts/Area.vue");
const Bar = () => import("../views/charts/Bar.vue");
const Bubble = () => import("../views/charts/Bubble.vue");
const Candlestick = () => import("../views/charts/Candlestick.vue");
const Column = () => import("../views/charts/Column.vue");
const Heatmap = () => import("../views/charts/Heatmap.vue");
const Line = () => import("../views/charts/Line.vue");
const Mixed = () => import("../views/charts/Mixed.vue");
const Timeline = () => import("../views/charts/Timeline.vue");
const Boxplot = () => import("../views/charts/Boxplot.vue");
const Treemap = () => import("../views/charts/Treemap.vue");
const Pie = () => import("../views/charts/Pie.vue");
const Radar = () => import("../views/charts/Radar.vue");
const RadialBar = () => import("../views/charts/RadialBar.vue");
const Scatter = () => import("../views/charts/Scatter.vue");
const PolarArea = () => import("../views/charts/PolarArea.vue");

// Forms
const FormBasic      = () => import("../views/forms/BasicElements.vue");
const FormCheckbox   = () => import("../views/forms/CheckboxRadio.vue");
const FormValidation = () => import("../views/forms/Validation.vue");
const FormFileUpload = () => import("../views/forms/FileUpload.vue");
const FormEditors    = () => import("../views/forms/Editors.vue");
const FormInputMask  = () => import("../views/forms/InputMask.vue");
const FormSlider     = () => import("../views/forms/Slider.vue");

// Tables
const TableBasic  = () => import("../views/tables/BasicTables.vue");
const TableGridJs = () => import("../views/tables/GridJs.vue");

// Icons
const IconBoxicons = () => import("../views/icons/Boxicons.vue");
const IconSolar    = () => import("../views/icons/SolarIcons.vue");

// Maps
const MapGoogle = () => import("../views/maps/GoogleMaps.vue");
const MapVector = () => import("../views/maps/VectorMaps.vue");

// Menu
const MenuItem1   = () => import("../views/menu/MenuItem1.vue");
const MenuItem2   = () => import("../views/menu/MenuItem2.vue");
const DisableItem = () => import("../views/menu/DisableItem.vue");

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
    path: "/sweet-alert",
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
    path: "/pagination",
    name: "Pagination",
    component: Pagination,
  },
  {
    path: "/placeholders",
    name: "Placeholders",
    component: Placeholders,
  },
  {
    path: "/popovers",
    name: "Popovers",
    component: Popovers,
  },
  {
    path: "/progress",
    name: "Progress",
    component: Progress,
  },
  {
    path: "/scrollspy",
    name: "Scrollspy",
    component: Scrollspy,
  },
  {
    path: "/toasts",
    name: "Toasts",
    component: Toasts,
  },
  {
    path: "/tooltips",
    name: "Tooltips",
    component: Tooltips,
  },
  {
    path: "/area",
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
    path: "/bar",
    name: "Bar",
    component: Bar,
  },
  {
    path: "/bubble",
    name: "Bubble",  
    component: Bubble,   
  },
  {
    path: "/candlestick",
    name: "Candlestick",
    component: Candlestick,
  },
  { path: "/column",    name: "Column",    component: Column    },
  { path: "/heatmap",   name: "Heatmap",   component: Heatmap   },
  { path: "/line",      name: "Line",      component: Line      },
  { path: "/mixed",     name: "Mixed",     component: Mixed     },
  { path: "/timeline",  name: "Timeline",  component: Timeline  },
  { path: "/boxplot",   name: "Boxplot",   component: Boxplot   },
  { path: "/treemap",   name: "Treemap",   component: Treemap   },
  { path: "/pie",       name: "Pie",       component: Pie       },
  { path: "/radar",     name: "Radar",     component: Radar     },
  { path: "/radialbar", name: "RadialBar", component: RadialBar },
  { path: "/scatter",   name: "Scatter",   component: Scatter   },
  { path: "/polar-area",name: "PolarArea", component: PolarArea },

  // Forms
  { path: "/forms/basic",        name: "FormBasic",      component: FormBasic      },
  { path: "/forms/checkbox-radio",name:"FormCheckbox",   component: FormCheckbox   },
  { path: "/forms/validation",   name: "FormValidation", component: FormValidation },
  { path: "/forms/file-upload",  name: "FormFileUpload", component: FormFileUpload },
  { path: "/forms/editors",      name: "FormEditors",    component: FormEditors    },
  { path: "/forms/input-mask",   name: "FormInputMask",  component: FormInputMask  },
  { path: "/forms/slider",       name: "FormSlider",     component: FormSlider     },

  // Tables
  { path: "/tables/basic",  name: "TableBasic",  component: TableBasic  },
  { path: "/tables/gridjs", name: "TableGridJs", component: TableGridJs },

  // Icons
  { path: "/icons/boxicons", name: "IconBoxicons", component: IconBoxicons },
  { path: "/icons/solar",    name: "IconSolar",    component: IconSolar    },

  // Maps
  { path: "/maps/google", name: "MapGoogle", component: MapGoogle },
  { path: "/maps/vector", name: "MapVector", component: MapVector },

  // Menu
  { path: "/menu/item-1",  name: "MenuItem1",   component: MenuItem1   },
  { path: "/menu/item-2",  name: "MenuItem2",   component: MenuItem2   },
  { path: "/menu/disable", name: "DisableItem", component: DisableItem },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
  
];

// Create the router
const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

export default router;
