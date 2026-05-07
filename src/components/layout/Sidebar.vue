<template>
  <Teleport to="body">
    <div
      class="sidebar-overlay"
      :class="{ show: isMobileOpen }"
      @click="closeSidebar"
    />
  </Teleport>

  <aside
    class="sidebar"
    :class="{
      'mobile-open':        isMobileOpen,
      'is-condensed':       isCondensed,
      'is-sm-hover':        isSmHover,
      'is-sm-hover-active': isSmHoverActive,
      'is-hidden':          isHiddenSize,
      'theme-light':        menuColor.value === 'light',
      'theme-dark':         menuColor.value === 'dark',
    }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- ΓöÇΓöÇ Logo ΓöÇΓöÇ -->
    <div class="sidebar__logo">
      <router-link to="/dashboard" class="logo-link" @click="closeSidebar">
        <span class="logo-badge">
          <ShoppingBagIcon class="logo-icon" />
        </span>
        <span class="logo-wordmark">AL-AHMODANY</span>
      </router-link>

      <button
        class="sidebar__collapse"
        type="button"
        aria-label="Toggle sidebar"
        @click="toggleSidebarSize"
      >
        <ChevronDoubleRightIcon class="collapse-icon" :class="{ rotated: !isCollapsed }" />
      </button>
    </div>

    <!-- ΓöÇΓöÇ Nav body ΓöÇΓöÇ -->
    <div class="sidebar__body">
      <ul class="sidebar__nav">
        <template v-for="section in menuSections" :key="section.label">
          <li class="nav-section__label"><span>{{ section.label }}</span></li>

          <li
            v-for="item in section.items"
            :key="item.name"
            class="nav-item"
            :class="{ open: item.isOpen, active: isItemActive(item) }"
          >
            <!-- Plain link -->
            <router-link
              v-if="item.route && !item.dropdown"
              :to="item.route"
              class="nav-item__link"
              :class="{ active: isItemActive(item) }"
              @click="closeSidebar"
            >
              <span class="nav-item__icon">
                <component :is="item.icon" class="menu-icon" />
              </span>
              <span class="nav-item__text">{{ item.name }}</span>
              <span v-if="item.badge" class="nav-item__badge">{{ item.badge }}</span>
              <span class="nav-item__tooltip">{{ item.name }}</span>
            </router-link>

            <!-- Dropdown trigger -->
            <button
              v-else
              class="nav-item__link nav-item__link--button"
              :class="{ active: item.isOpen || isItemActive(item) }"
              type="button"
              @click="toggleDropdown(item)"
            >
              <span class="nav-item__icon">
                <component :is="item.icon" class="menu-icon" />
              </span>
              <span class="nav-item__text">{{ item.name }}</span>
              <span v-if="item.badge" class="nav-item__badge">{{ item.badge }}</span>
              <span class="nav-item__arrow">
                <ChevronDownIcon class="arrow-icon" />
              </span>
              <span class="nav-item__tooltip">{{ item.name }}</span>
            </button>

            <!-- Submenu -->
            <Transition name="dropdown">
              <div v-if="item.dropdown && item.isOpen && !isCollapsed" class="nav-dropdown">
                <ul class="nav-dropdown__list">
                  <li
                    v-for="sub in item.dropdown"
                    :key="sub.route"
                    class="nav-dropdown__item"
                  >
                    <router-link
                      :to="sub.route"
                      class="nav-dropdown__link"
                      :class="{ active: route.path === sub.route }"
                      @click="closeSidebar"
                    >
                      {{ sub.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </Transition>
          </li>
        </template>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import {
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  HomeIcon,
  CubeIcon,
  TagIcon,
  ArchiveBoxIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon,
  CogIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  UserGroupIcon,
  UsersIcon,
  TicketIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  CalendarIcon,
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  DocumentMagnifyingGlassIcon,
  ShieldExclamationIcon,
  RectangleGroupIcon,
  DocumentDuplicateIcon,
  KeyIcon,
  RectangleStackIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  Bars3BottomLeftIcon,
  TableCellsIcon,
  BoltIcon,
  MapPinIcon,
  Bars3Icon,
  NoSymbolIcon,
} from "@heroicons/vue/24/outline";

const emit = defineEmits(["mobile-close"]);
const route = useRoute();

// ΓöÇΓöÇ State ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const isMobileOpen = ref(false);
const sidebarSize  = ref("default");
const menuColor    = ref("dark");   // "dark" | "light"
const isDarkTheme  = ref(false);
let   bodyObserver = null;
let   htmlObserver = null;

// ΓöÇΓöÇ Sync menu color and theme from DOM attrs ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const syncMenuColor = () => {
  menuColor.value   = document.body.getAttribute("data-menu") || "dark";
  isDarkTheme.value = document.documentElement.getAttribute("data-theme") === "dark";
};

// ΓöÇΓöÇ Computed ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const isCondensed     = computed(() => sidebarSize.value === "condensed");
const isHiddenSize    = computed(() => sidebarSize.value === "hidden");
const isSmHover       = computed(() => sidebarSize.value === "sm-hover");
const isSmHoverActive = computed(() => sidebarSize.value === "sm-hover-active");
const isCollapsed     = computed(() => isCondensed.value || isSmHover.value);

// ΓöÇΓöÇ Full menu ΓÇö exactly matching Larkon live demo ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const menuSections = ref([
  // ΓöÇΓöÇ GENERAL ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  {
    label: "General",
    items: [
      { name: "Dashboard", icon: HomeIcon, route: "/dashboard" },
  ]},
  // ΓöÇΓöÇ COMPONENTS ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  {
    label: "Components",
    items: [
      {
        name: "Base UI", icon: RectangleStackIcon, isOpen: false,
        dropdown: [
          { name: "Accordion",    route: "/accordion"    },
          { name: "Alerts",       route: "/alerts"       },
          { name: "Avatar",       route: "/avatar"       },
          { name: "Badge",        route: "/badges"       },
          { name: "Breadcrumb",   route: "/breadcrumbs"  },
          { name: "Buttons",      route: "/buttons"      },
          { name: "Card",         route: "/cards"        },
          { name: "Carousel",     route: "/carousel"     },
          { name: "Collapse",     route: "/collapse"     },
          { name: "Dropdown",     route: "/dropdown"     },
          { name: "List Group",   route: "/listgroup"    },
          { name: "Modal",        route: "/modals"       },
          { name: "Tabs",         route: "/tabs"         },
          { name: "Offcanvas",    route: "/offcanva"     },
          { name: "Pagination",   route: "/pagination"   },
          { name: "Placeholders", route: "/placeholders" },
          { name: "Popovers",     route: "/popovers"     },
          { name: "Progress",     route: "/progress"     },
          { name: "Scrollspy",    route: "/scrollspy"    },
          { name: "Spinners",     route: "/spinner"      },
          { name: "Toasts",       route: "/toasts"       },
          { name: "Tooltips",     route: "/tooltips"     },
        ],
      },
      {
        name: "Advanced UI", icon: PuzzlePieceIcon, isOpen: false,
        dropdown: [
          { name: "Ratings",       route: "/ratings"       },
          { name: "Sweet Alert",   route: "/sweet-alert"   },
          { name: "Swiper Slider", route: "/swiper-slider" },
          { name: "Scrollbar",     route: "/scrollbar"     },
          { name: "Toastify",      route: "/toastify"      },
        ],
      },
      {
        name: "Charts", icon: ChartBarIcon, isOpen: false,
        dropdown: [
          { name: "Area",        route: "/area"        },
          { name: "Bar",         route: "/bar"         },
          { name: "Bubble",      route: "/bubble"      },
          { name: "Candlestick", route: "/candlestick" },
          { name: "Column",      route: "/column"      },
          { name: "Heatmap",     route: "/heatmap"     },
          { name: "Line",        route: "/line"        },
          { name: "Mixed",       route: "/mixed"       },
          { name: "Timeline",    route: "/timeline"    },
          { name: "Boxplot",     route: "/boxplot"     },
          { name: "Treemap",     route: "/treemap"     },
          { name: "Pie",         route: "/pie"         },
          { name: "Radar",       route: "/radar"       },
          { name: "RadialBar",   route: "/radialbar"   },
          { name: "Scatter",     route: "/scatter"     },
          { name: "Polar Area",  route: "/polar-area"  },
        ],
      },
      {
        name: "Forms", icon: Bars3BottomLeftIcon, isOpen: false,
        dropdown: [
          { name: "Basic Elements",   route: "/forms/basic"         },
          { name: "Checkbox & Radio", route: "/forms/checkbox-radio"},
          { name: "Validation",       route: "/forms/validation"    },
          { name: "File Upload",      route: "/forms/file-upload"   },
          { name: "Editors",          route: "/forms/editors"       },
          { name: "Input Mask",       route: "/forms/input-mask"    },
          { name: "Slider",           route: "/forms/slider"        },
        ],
      },
      {
        name: "Tables", icon: TableCellsIcon, isOpen: false,
        dropdown: [
          { name: "Basic Tables", route: "/tables/basic"  },
          { name: "Grid Js",      route: "/tables/gridjs" },
        ],
      },
      {
        name: "Icons", icon: BoltIcon, isOpen: false,
        dropdown: [
          { name: "Boxicons",    route: "/icons/boxicons" },
          { name: "Solar Icons", route: "/icons/solar"    },
        ],
      },
      {
        name: "Maps", icon: MapPinIcon, isOpen: false,
        dropdown: [
          { name: "Google Maps", route: "/maps/google" },
          { name: "Vector Maps", route: "/maps/vector" },
        ],
      },
      {
        name: "Menu Item", icon: Bars3Icon, isOpen: false,
        dropdown: [
          { name: "Menu Item 1", route: "/menu/item-1" },
          { name: "Menu Item 2", route: "/menu/item-2" },
        ],
      },
      { name: "Disable Item", icon: NoSymbolIcon, route: "/menu/disable" },
    ],
  },
]);

// ΓöÇΓöÇ Public API ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const openSidebar   = () => { isMobileOpen.value = true; };
const closeSidebar  = () => { isMobileOpen.value = false; emit("mobile-close"); };
const setMobileOpen = (v) => { isMobileOpen.value = v; };
defineExpose({ openSidebar, closeSidebar, setMobileOpen });

// ΓöÇΓöÇ Size sync (body attr ΓåÆ reactive state) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const syncSize = () => {
  sidebarSize.value = document.body.getAttribute("data-sidebar-size") || "default";
};

const persistSize = (size) => {
  try {
    const s = JSON.parse(localStorage.getItem("larkon_settings") || "{}");
    localStorage.setItem("larkon_settings", JSON.stringify({ ...s, sidebarSize: size }));
  } catch { /* noop */ }
};

const applySize = (size) => {
  if (size && size !== "default") {
    document.body.setAttribute("data-sidebar-size", size);
  } else {
    document.body.removeAttribute("data-sidebar-size");
  }
  persistSize(size);
};

const toggleSidebarSize = () => {
  if (window.innerWidth <= 1024) return;
  applySize(isCondensed.value ? "default" : "condensed");
};

// ΓöÇΓöÇ sm-hover expand / collapse ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const onMouseEnter = () => { if (isSmHover.value)       applySize("sm-hover-active"); };
const onMouseLeave = () => { if (isSmHoverActive.value) applySize("sm-hover"); };

// ΓöÇΓöÇ Active state ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const isItemActive = (item) => {
  if (item.route)    return route.path === item.route;
  if (item.dropdown) return item.dropdown.some((s) => s.route === route.path);
  return false;
};

// ΓöÇΓöÇ Dropdown accordion ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const closeAll = () =>
  menuSections.value.forEach((sec) =>
    sec.items.forEach((it) => { if (it.dropdown) it.isOpen = false; })
  );

const openActiveGroup = () =>
  menuSections.value.forEach((sec) =>
    sec.items.forEach((it) => {
      if (it.dropdown) it.isOpen = !isCollapsed.value && isItemActive(it);
    })
  );

const toggleDropdown = (item) => {
  if (isCollapsed.value && window.innerWidth > 1024) return;
  const was = item.isOpen;
  closeAll();
  item.isOpen = !was;
};

// ΓöÇΓöÇ Keyboard ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const onKeydown = (e) => { if (e.key === "Escape" && isMobileOpen.value) closeSidebar(); };

// ΓöÇΓöÇ Lifecycle ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
onMounted(() => {
  syncSize();
  syncMenuColor();
  openActiveGroup();
  window.addEventListener("keydown", onKeydown);
  bodyObserver = new MutationObserver(() => { syncSize(); syncMenuColor(); });
  bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["data-sidebar-size", "data-menu"] });
  htmlObserver = new MutationObserver(syncMenuColor);
  htmlObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
});
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  bodyObserver?.disconnect();
  htmlObserver?.disconnect();
});
watch([() => route.path, isCollapsed], openActiveGroup);
</script>

<style scoped>
/* -- Overlay -------------------------------------------- */
:global(.sidebar-overlay) {
  display: none; position: fixed; inset: 0;
  background: rgba(13,18,28,0.6); z-index: 1049;
  backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
  opacity: 0; transition: opacity 0.25s ease;
}
:global(.sidebar-overlay.show) { display: block; opacity: 1; }

/* -------------------------------------------------------
   CSS VARIABLES ∩┐╜ set via .theme-dark / .theme-light
   bound reactively from Vue (menuColor ref)
------------------------------------------------------- */
.sidebar {
  --sb-bg:            #313a46;
  --sb-border:        rgba(255,255,255,0.07);
  --sb-text:          #8996af;
  --sb-text-hover:    #e2e8f4;
  --sb-text-active:   #ffffff;
  --sb-muted:         #4a5568;
  --sb-icon-color:    #8996af;
  --sb-icon-active:   #fd7e14;
  --sb-hover-bg:      rgba(255,255,255,0.06);
  --sb-active-bg:     rgba(255,255,255,0.08);
  --sb-sub-color:     #6c7a8d;
  --sb-section-color: #4a5568;
  --sb-accent:        #fd7e14;
  --sb-ease:          0.22s ease;
}
.sidebar.theme-dark {
  --sb-bg:            #313a46;
  --sb-border:        rgba(255,255,255,0.07);
  --sb-text:          #8996af;
  --sb-text-hover:    #e2e8f4;
  --sb-text-active:   #ffffff;
  --sb-muted:         #4a5568;
  --sb-icon-color:    #8996af;
  --sb-icon-active:   #fd7e14;
  --sb-hover-bg:      rgba(255,255,255,0.06);
  --sb-active-bg:     rgba(255,255,255,0.08);
  --sb-sub-color:     #6c7a8d;
  --sb-section-color: #4a5568;
}
.sidebar.theme-light {
  --sb-bg:            #ffffff;
  --sb-border:        #eef2f7;
  --sb-text:          #6c757d;
  --sb-text-hover:    #313a46;
  --sb-text-active:   #313a46;
  --sb-muted:         #adb5bd;
  --sb-icon-color:    #6c757d;
  --sb-icon-active:   #fd7e14;
  --sb-hover-bg:      #f4f6fb;
  --sb-active-bg:     rgba(253,126,20,0.08);
  --sb-sub-color:     #8996af;
  --sb-section-color: #adb5bd;
  box-shadow: 2px 0 8px rgba(0,0,0,0.06);
}
.sidebar.theme-light .logo-wordmark { color: #313a46; }

/* -- Base sidebar --------------------------------------- */
.sidebar {
  position: fixed; top: 0; left: 0; bottom: 0;
  width: 260px; z-index: 1050;
  display: flex; flex-direction: column;
  background: var(--sb-bg);
  border-right: 1px solid var(--sb-border);
  transition: width var(--sb-ease), transform var(--sb-ease),
              background 0.2s ease, border-color 0.2s ease,
              box-shadow var(--sb-ease);
  overflow: hidden;
}

/* -- Size variants -------------------------------------- */
.sidebar.is-condensed       { width: 70px; }
.sidebar.is-hidden          { width: 0; border-right: none; }
.sidebar.is-sm-hover        { width: 70px; }
.sidebar.is-sm-hover-active { width: 260px; box-shadow: 4px 0 24px rgba(0,0,0,.4); }

/* -- Logo area ------------------------------------------ */
.sidebar__logo {
  display: flex; align-items: center; justify-content: space-between;
  height: 70px; padding: 0 20px 0 18px;
  border-bottom: 1px solid var(--sb-border);
  flex-shrink: 0; overflow: hidden;
  transition: padding var(--sb-ease);
}
.sidebar.is-condensed .sidebar__logo,
.sidebar.is-sm-hover  .sidebar__logo { padding: 0; justify-content: center; }

.logo-link {
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none; overflow: hidden; min-width: 0;
}
.logo-badge {
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
  background: linear-gradient(135deg,#ff9b44 0%,#fd7e14 100%);
  color: #fff; display: inline-flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(253,126,20,.4);
}
.logo-icon { width: 17px; height: 17px; stroke-width: 2; }
.logo-wordmark {
  font-size: 20px; font-weight: 800; letter-spacing: -0.02em;
  color: #ffffff; white-space: nowrap; opacity: 1;
  transition: opacity var(--sb-ease), width var(--sb-ease);
}
.sidebar.is-condensed .logo-wordmark,
.sidebar.is-sm-hover  .logo-wordmark { opacity: 0; width: 0; pointer-events: none; }

.sidebar__collapse {
  flex-shrink: 0; width: 24px; height: 24px;
  border: none; border-radius: 5px; background: transparent;
  color: var(--sb-muted);
  display: inline-flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background 0.15s, color 0.15s, opacity var(--sb-ease);
}
.sidebar__collapse:hover { background: var(--sb-hover-bg); color: var(--sb-text-hover); }
.sidebar.is-condensed .sidebar__collapse,
.sidebar.is-sm-hover  .sidebar__collapse { opacity: 0; pointer-events: none; }
.collapse-icon { width: 14px; height: 14px; transition: transform 0.22s ease; }
.collapse-icon.rotated { transform: rotate(180deg); }

/* -- Scrollable nav body -------------------------------- */
.sidebar__body {
  flex: 1; overflow-y: auto; overflow-x: hidden;
  padding: 8px 0 20px;
  scrollbar-width: thin; scrollbar-color: var(--sb-border) transparent;
}
.sidebar__body::-webkit-scrollbar       { width: 3px; }
.sidebar__body::-webkit-scrollbar-thumb { background: var(--sb-border); border-radius: 99px; }

/* -- Nav list ------------------------------------------- */
.sidebar__nav {
  list-style: none; margin: 0; padding: 0 12px;
  display: flex; flex-direction: column; gap: 1px;
}
.sidebar.is-condensed .sidebar__nav, .sidebar.is-sm-hover .sidebar__nav { padding: 0 4px; }

.nav-section__label {
  padding: 18px 8px 6px; font-size: 10px; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--sb-section-color); white-space: nowrap; overflow: hidden;
  transition: opacity var(--sb-ease), height var(--sb-ease), padding var(--sb-ease);
}
.sidebar.is-condensed .nav-section__label,
.sidebar.is-sm-hover  .nav-section__label {
  opacity: 0; height: 0; padding: 0; margin: 0; pointer-events: none;
}

.nav-item { list-style: none; width: 100%; }

/* -- Nav link / button ---------------------------------- */
.nav-item__link {
  position: relative; width: 100%;
  display: flex; align-items: center; gap: 9px;
  padding: 9px 10px; border: none; border-radius: 6px;
  background: transparent; color: var(--sb-text);
  font-size: 13.5px; font-weight: 500; font-family: inherit;
  text-decoration: none; text-align: left;
  cursor: pointer; white-space: nowrap;
  transition: background 0.15s, color 0.15s; min-width: 0;
}
.nav-item__link::before {
  content: ""; position: absolute;
  left: -12px; top: 50%; transform: translateY(-50%);
  width: 3px; height: 0; border-radius: 0 3px 3px 0;
  background: var(--sb-accent); transition: height 0.15s;
}
.nav-item__link:hover          { background: var(--sb-hover-bg); color: var(--sb-text-hover); }
.nav-item__link.active         { background: var(--sb-active-bg); color: var(--sb-text-active); }
.nav-item__link.active::before { height: 18px; }
.nav-item.open > .nav-item__link { color: var(--sb-text-active); }

.nav-item__icon {
  flex-shrink: 0; width: 30px; height: 30px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--sb-icon-color); border-radius: 6px; transition: color 0.15s;
}
.menu-icon { width: 18px; height: 18px; stroke-width: 1.8; flex-shrink: 0; }
.nav-item__link:hover        .nav-item__icon,
.nav-item__link.active       .nav-item__icon,
.nav-item.open > .nav-item__link .nav-item__icon { color: var(--sb-icon-active); }

.nav-item__text {
  flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis;
  transition: opacity var(--sb-ease);
}
.nav-item__badge {
  flex-shrink: 0; padding: 1px 7px; background: var(--sb-accent);
  color: #fff; font-size: 10px; font-weight: 700;
  border-radius: 99px; line-height: 1.6; transition: opacity var(--sb-ease);
}
.nav-item__arrow {
  flex-shrink: 0; display: inline-flex; align-items: center;
  color: var(--sb-muted);
  transition: transform 0.2s, color 0.15s, opacity var(--sb-ease);
}
.arrow-icon { width: 13px; height: 13px; }
.nav-item.open > .nav-item__link .nav-item__arrow {
  transform: rotate(-180deg); color: var(--sb-accent);
}

/* -- Icon-only (condensed / sm-hover) ------------------- */
.sidebar.is-condensed .nav-item__text,
.sidebar.is-condensed .nav-item__arrow,
.sidebar.is-condensed .nav-item__badge,
.sidebar.is-sm-hover  .nav-item__text,
.sidebar.is-sm-hover  .nav-item__arrow,
.sidebar.is-sm-hover  .nav-item__badge {
  opacity: 0; width: 0; overflow: hidden; pointer-events: none; flex-shrink: 0;
}
.sidebar.is-condensed .nav-item__link,
.sidebar.is-sm-hover  .nav-item__link {
  justify-content: center; align-items: center;
  padding: 0; gap: 0; height: 40px; width: 100%;
}
.sidebar.is-condensed .nav-item__link::before,
.sidebar.is-sm-hover  .nav-item__link::before { display: none; }
.sidebar.is-condensed .nav-item__icon,
.sidebar.is-sm-hover  .nav-item__icon {
  margin: 0; width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* -- Tooltip -------------------------------------------- */
.nav-item__tooltip {
  position: absolute; left: 80px; top: 50%; transform: translateY(-50%);
  padding: 5px 12px; background: #1a2035; color: #e2e8f4;
  font-size: 12px; font-weight: 600; border-radius: 6px; white-space: nowrap;
  box-shadow: 0 6px 20px rgba(0,0,0,.3); pointer-events: none;
  opacity: 0; transition: opacity 0.15s; z-index: 1100;
}
.sidebar.is-condensed .nav-item__link:hover .nav-item__tooltip,
.sidebar.is-sm-hover  .nav-item__link:hover .nav-item__tooltip { opacity: 1; }
.sidebar:not(.is-condensed):not(.is-sm-hover) .nav-item__tooltip { display: none; }

/* -- Dropdown transition -------------------------------- */
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.18s ease, max-height 0.22s ease; overflow: hidden;
}
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; max-height: 0; }
.dropdown-enter-to, .dropdown-leave-from { opacity: 1; max-height: 600px; }

/* -- Sub-menu list -------------------------------------- */
.nav-dropdown__list {
  list-style: none; margin: 2px 0 4px; padding: 0 0 2px 40px;
  display: flex; flex-direction: column; gap: 1px;
}
.nav-dropdown__link {
  position: relative; display: block;
  padding: 6px 10px 6px 16px; border-radius: 5px;
  color: var(--sb-sub-color); font-size: 13px; font-weight: 500;
  text-decoration: none; transition: background 0.15s, color 0.15s;
}
.nav-dropdown__link::before {
  content: ""; position: absolute; left: 3px; top: 50%; transform: translateY(-50%);
  width: 5px; height: 5px; border-radius: 50%;
  border: 1.5px solid currentColor; background: transparent;
  opacity: 0.5; transition: opacity 0.15s, background 0.15s, border-color 0.15s;
}
.nav-dropdown__link:hover { background: var(--sb-hover-bg); color: var(--sb-text-hover); }
.nav-dropdown__link:hover::before { opacity: 1; }
.nav-dropdown__link.active { color: var(--sb-accent); font-weight: 600; }
.nav-dropdown__link.active::before {
  background: var(--sb-accent); border-color: var(--sb-accent); opacity: 1;
}

/* -- Mobile --------------------------------------------- */
@media (max-width: 1024px) {
  .sidebar { width: 260px !important; transform: translateX(-100%); }
  .sidebar.mobile-open {
    transform: translateX(0); box-shadow: 8px 0 32px rgba(0,0,0,.5);
  }
  .sidebar.mobile-open .sidebar__logo {
    padding: 0 20px 0 18px !important; justify-content: space-between !important;
  }
  .sidebar.mobile-open .logo-wordmark,
  .sidebar.mobile-open .nav-section__label,
  .sidebar.mobile-open .nav-item__text,
  .sidebar.mobile-open .nav-item__badge,
  .sidebar.mobile-open .nav-item__arrow {
    opacity: 1 !important; width: auto !important;
    overflow: visible !important; pointer-events: auto !important;
    height: auto !important; padding: revert !important;
  }
  .sidebar.mobile-open .nav-item__link {
    justify-content: flex-start !important;
    padding: 9px 10px !important; gap: 9px !important; height: auto !important;
  }
  .nav-item__tooltip { display: none !important; }
  .sidebar__collapse { display: none; }
}
@media (max-width: 767px) { .sidebar { width: 240px !important; } }
</style>
