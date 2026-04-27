import {
  ChartBarSquareIcon,
  SparklesIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/outline";

const createItem = (name, icon, options = {}) => ({
  name,
  icon,
  route: options.route || "",
  dropdown: options.dropdown || null,
  isOpen: false,
});

export const createSidebarMenu = () => [
  {
    label: "General",
    items: [createItem("Dashboard", Squares2X2Icon, { route: "/dashboard" })],
  },
  {
    label: "Components",
    items: [
      createItem("Base UI", Squares2X2Icon, {
        dropdown: [
          { name: "Accordion", route: "/accordion" },
          { name: "Alerts", route: "/alerts" },
          { name: "Avatar", route: "/avatar" },
          { name: "Badges", route: "/badges" },
          { name: "Breadcrumbs", route: "/breadcrumbs" },
          { name: "Buttons", route: "/buttons" },
          { name: "Cards", route: "/cards" },
          { name: "Carousel", route: "/carousel" },
          { name: "Collapse", route: "/collapse" },
          { name: "Dropdown", route: "/dropdown" },
          { name: "List Group", route: "/listgroup" },
          { name: "Modals", route: "/modals" },
          { name: "Tabs", route: "/tabs" },
          { name: "Offcanvas", route: "/offcanva" },
          { name: "Spinners", route: "/spinner" },
        ],
      }),
      createItem("Advanced UI", SparklesIcon, {
        dropdown: [
          { name: "Ratings", route: "/ratings" },
          { name: "Sweet Alert", route: "/sweetalert" },
          { name: "Swiper Slider", route: "/swiper-slider" },
          { name: "Scrollbar", route: "/scrollbar" },
          { name: "Toastify", route: "/toastify" },
        ],
      }),
      createItem("Charts", ChartBarSquareIcon, {
        dropdown: [{ name: "Area Charts", route: "/AreaChart" }],
      }),
    ],
  },
];
