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
          { name: "Accordion",    route: "/accordion"   },
          { name: "Alerts",       route: "/alerts"      },
          { name: "Avatar",       route: "/avatar"      },
          { name: "Badges",       route: "/badges"      },
          { name: "Breadcrumbs",  route: "/breadcrumbs" },
          { name: "Buttons",      route: "/buttons"     },
          { name: "Cards",        route: "/cards"       },
          { name: "Carousel",     route: "/carousel"    },
          { name: "Collapse",     route: "/collapse"    },
          { name: "Dropdown",     route: "/dropdown"    },
          { name: "List Group",   route: "/listgroup"   },
          { name: "Modals",       route: "/modals"      },
          { name: "Offcanvas",    route: "/offcanva"    },
          { name: "Pagination",   route: "/pagination"  },
          { name: "Placeholders", route: "/placeholders"},
          { name: "Popovers",     route: "/popovers"    },
          { name: "Progress",     route: "/progress"    },
          { name: "Scrollspy",    route: "/scrollspy"   },
          { name: "Spinners",     route: "/spinner"     },
          { name: "Tabs",         route: "/tabs"        },
          { name: "Toasts",       route: "/toasts"      },
          { name: "Tooltips",     route: "/tooltips"    },
        ],
      }),
      createItem("Advanced UI", SparklesIcon, {
        dropdown: [
          { name: "Ratings",      route: "/ratings"      },
          { name: "Sweet Alert",  route: "/sweet-alert"  },
          { name: "Swiper Slider",route: "/swiper-slider"},
          { name: "Scrollbar",    route: "/scrollbar"    },
          { name: "Toastify",     route: "/toastify"     },
        ],
      }),
      createItem("Charts", ChartBarSquareIcon, {
        dropdown: [
          { name: "Area",        route: "/area"       },
          { name: "Bar",         route: "/bar"        },
          { name: "Bubble",      route: "/bubble"     },
          { name: "Candlestick", route: "/candlestick"},
          { name: "Column",      route: "/column"     },
          { name: "Heatmap",     route: "/heatmap"    },
          { name: "Line",        route: "/line"       },
          { name: "Mixed",       route: "/mixed"      },
          { name: "Timeline",    route: "/timeline"   },
          { name: "Boxplot",     route: "/boxplot"    },
          { name: "Treemap",     route: "/treemap"    },
          { name: "Pie",         route: "/pie"        },
          { name: "Radar",       route: "/radar"      },
          { name: "RadialBar",   route: "/radialbar"  },
          { name: "Scatter",     route: "/scatter"    },
          { name: "Polar Area",  route: "/polar-area" },
        ],
      }),
    ],
  },
];
