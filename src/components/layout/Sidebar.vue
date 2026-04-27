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
    }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- ── Logo ── -->
    <div class="sidebar__logo">
      <router-link to="/dashboard" class="logo-link" @click="closeSidebar">
        <span class="logo-badge">
          <ShoppingBagIcon class="logo-icon" />
        </span>
        <span class="logo-wordmark">Larkon</span>
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

    <!-- ── Nav body ── -->
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

// ── State ──────────────────────────────────────────────
const isMobileOpen = ref(false);
const sidebarSize  = ref("default");
let   bodyObserver = null;

// ── Computed ───────────────────────────────────────────
const isCondensed     = computed(() => sidebarSize.value === "condensed");
const isHiddenSize    = computed(() => sidebarSize.value === "hidden");
const isSmHover       = computed(() => sidebarSize.value === "sm-hover");
const isSmHoverActive = computed(() => sidebarSize.value === "sm-hover-active");
const isCollapsed     = computed(() => isCondensed.value || isSmHover.value);

// ── Full menu — exactly matching Larkon live demo ──────
const menuSections = ref([
  // ── GENERAL ──────────────────────────────────────────
  {
    label: "General",
    items: [
      { name: "Dashboard", icon: HomeIcon, route: "/dashboard" },
  ]},
  // ── COMPONENTS ───────────────────────────────────────
  {
    label: "Components",
    items: [
      {
        name: "Base UI", icon: RectangleStackIcon, isOpen: false,
        dropdown: [
          { name: "Accordion",    route: "accordion" },
          { name: "Alerts",       route: "alerts" },
          { name: "Avatar",       route: "avatar" },
          { name: "Badge",        route: "badge" },
          { name: "Breadcrumb",   route: "breadcrumb" },
          { name: "Buttons",      route: "buttons" },
          { name: "Card",         route: "card" },
          { name: "Carousel",     route: "carousel" },
          { name: "Collapse",     route: "collapse" },
          { name: "Dropdown",     route: "dropdown" },
          { name: "List Group",   route: "list-group" },
          { name: "Modal",        route: "modal" },
          { name: "Tabs",         route: "tabs" },
          { name: "Offcanvas",    route: "offcanvas" },
          { name: "Pagination",   route: "pagination" },
          { name: "Placeholders", route: "placeholders" },
          { name: "Popovers",     route: "popovers" },
          { name: "Progress",     route: "progress" },
          { name: "Scrollspy",    route: "scrollspy" },
          { name: "Spinners",     route: "spinners" },
          { name: "Toasts",       route: "toasts" },
          { name: "Tooltips",     route: "tooltips" },
        ],
      },
      {
        name: "Advanced UI", icon: PuzzlePieceIcon, isOpen: false,
        dropdown: [
          { name: "Ratings",       route: "ratings" },
          { name: "Sweet Alert",   route: "sweet-alert" },
          { name: "Swiper Slider", route: "swiper-slider" },
          { name: "Scrollbar",     route: "scrollbar" },
          { name: "Toastify",      route: "toastify" },
        ],
      },
      {
        name: "Charts", icon: ChartBarIcon, isOpen: false,
        dropdown: [
          { name: "Area",        route: "area" },
          { name: "Bar",         route: "bar" },
          { name: "Bubble",      route: "bubble" },
          { name: "Candlestick", route: "candlestick" },
          { name: "Column",      route: "column" },
          { name: "Heatmap",     route: "heatmap" },
          { name: "Line",        route: "line" },
          { name: "Mixed",       route: "mixed" },
          { name: "Timeline",    route: "timeline" },
          { name: "Boxplot",     route: "boxplot" },
          { name: "Treemap",     route: "treemap" },
          { name: "Pie",         route: "pie" },
          { name: "Radar",       route: "radar" },
          { name: "RadialBar",   route: "radialbar" },
          { name: "Scatter",     route: "scatter" },
          { name: "Polar Area",  route: "polar-area" },
        ],
      },
      {
        name: "Forms", icon: Bars3BottomLeftIcon, isOpen: false,
        dropdown: [
          { name: "Basic Elements",   route: "basic" },
          { name: "Checkbox & Radio", route: "checkbox-radio" },
          { name: "Choice Select",    route: "choice-select" },
          { name: "Clipboard",        route: "clipboard" },
          { name: "Flatepicker",      route: " flatepicker" },
          { name: "Validation",       route: "/forms/validation" },
          { name: "Wizard",           route: "/forms/wizard" },
          { name: "File Upload",      route: "/forms/file-upload" },
          { name: "Editors",          route: "/forms/editors" },
          { name: "Input Mask",       route: "/forms/input-mask" },
          { name: "Slider",           route: "/forms/slider" },
        ],
      },
      {
        name: "Tables", icon: TableCellsIcon, isOpen: false,
        dropdown: [
          { name: "Basic Tables", route: "/tables/basic" },
          { name: "Grid Js",      route: "/tables/gridjs" },
        ],
      },
      {
        name: "Icons", icon: BoltIcon, isOpen: false,
        dropdown: [
          { name: "Boxicons",    route: "/icons/boxicons" },
          { name: "Solar Icons", route: "/icons/solar" },
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

// ── Public API ─────────────────────────────────────────
const openSidebar   = () => { isMobileOpen.value = true; };
const closeSidebar  = () => { isMobileOpen.value = false; emit("mobile-close"); };
const setMobileOpen = (v) => { isMobileOpen.value = v; };
defineExpose({ openSidebar, closeSidebar, setMobileOpen });

// ── Size sync (body attr → reactive state) ─────────────
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

// ── sm-hover expand / collapse ─────────────────────────
const onMouseEnter = () => { if (isSmHover.value)       applySize("sm-hover-active"); };
const onMouseLeave = () => { if (isSmHoverActive.value) applySize("sm-hover"); };

// ── Active state ───────────────────────────────────────
const isItemActive = (item) => {
  if (item.route)    return route.path === item.route;
  if (item.dropdown) return item.dropdown.some((s) => s.route === route.path);
  return false;
};

// ── Dropdown accordion ─────────────────────────────────
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

// ── Keyboard ───────────────────────────────────────────
const onKeydown = (e) => { if (e.key === "Escape" && isMobileOpen.value) closeSidebar(); };

// ── Lifecycle ──────────────────────────────────────────
onMounted(() => {
  syncSize();
  openActiveGroup();
  window.addEventListener("keydown", onKeydown);
  bodyObserver = new MutationObserver(syncSize);
  bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["data-sidebar-size"] });
});
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  bodyObserver?.disconnect();
});
watch([() => route.path, isCollapsed], openActiveGroup);
</script>

<style scoped>
/* ── Overlay ──────────────────────────────────────────── */
:global(.sidebar-overlay) {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(13, 18, 28, 0.52);
  z-index: 1049;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 0.25s ease;
}
:global(.sidebar-overlay.show) {
  display: block;
  opacity: 1;
}

/* ── Variables ────────────────────────────────────────── */
.sidebar {
  --sb-width:          260px;
  --sb-icon-width:      70px;
  --sb-bg:            #2b3445;   /* exact dark bg from screenshot */
  --sb-border:        rgba(255,255,255,0.06);
  --sb-text:          #8996af;
  --sb-text-hover:    #e2e8f4;
  --sb-text-active:   #ffffff;
  --sb-muted:         #4f5d73;
  --sb-icon-color:    #8996af;
  --sb-icon-active:   #fd7e14;
  --sb-hover-bg:      rgba(255,255,255,0.05);
  --sb-active-bg:     rgba(255,255,255,0.07);
  --sb-sub-color:     #6f7d96;
  --sb-section-color: #4a5568;
  --sb-accent:        #fd7e14;
  --sb-ease:          0.22s ease;
}
:global([data-menu="light"]) .sidebar {
  --sb-bg:            #ffffff;
  --sb-border:        #eef2f7;
  --sb-text:          #7a8599;
  --sb-text-hover:    #313a46;
  --sb-text-active:   #313a46;
  --sb-muted:         #b0bac9;
  --sb-icon-color:    #7a8599;
  --sb-hover-bg:      #f5f7fa;
  --sb-active-bg:     #eef2f7;
  --sb-sub-color:     #8795a8;
  --sb-section-color: #b0bac9;
}

/* ── Base sidebar ─────────────────────────────────────── */
.sidebar {
  position: fixed;
  top: 0; left: 0; bottom: 0;
  width: var(--sb-width);
  z-index: 1050;
  display: flex;
  flex-direction: column;
  background: var(--sb-bg);
  border-right: 1px solid var(--sb-border);
  transition: width var(--sb-ease), transform var(--sb-ease), box-shadow var(--sb-ease);
  overflow: hidden;
}

/* ── Size variants ────────────────────────────────────── */
.sidebar.is-condensed       { width: var(--sb-icon-width); }
.sidebar.is-hidden          { width: 0; border-right: none; }
.sidebar.is-sm-hover        { width: var(--sb-icon-width); }
.sidebar.is-sm-hover-active { width: var(--sb-width); box-shadow: 4px 0 24px rgba(0,0,0,.35); }

/* ── Logo ─────────────────────────────────────────────── */
.sidebar__logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 18px 0 16px;
  border-bottom: 1px solid var(--sb-border);
  flex-shrink: 0;
  overflow: hidden;
  transition: padding var(--sb-ease), justify-content var(--sb-ease);
}
.sidebar.is-condensed .sidebar__logo,
.sidebar.is-sm-hover  .sidebar__logo {
  padding: 0;
  justify-content: center;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  overflow: hidden;
  min-width: 0;
}

.logo-badge {
  flex-shrink: 0;
  width: 30px; height: 30px;
  border-radius: 8px;
  background: linear-gradient(160deg, #ff9b44 0%, #fd7e14 100%);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(253,126,20,.35);
}
.logo-icon { width: 16px; height: 16px; stroke-width: 2.2; }

.logo-wordmark {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #fff;
  white-space: nowrap;
  opacity: 1;
  transition: opacity var(--sb-ease), width var(--sb-ease);
}
:global([data-menu="light"]) .logo-wordmark { color: #313a46; }

.sidebar.is-condensed .logo-wordmark,
.sidebar.is-sm-hover  .logo-wordmark {
  opacity: 0; width: 0; pointer-events: none;
}

/* Collapse toggle — the little >> / << arrow at top right */
.sidebar__collapse {
  flex-shrink: 0;
  width: 26px; height: 26px;
  border: none; border-radius: 6px;
  background: transparent;
  color: var(--sb-muted);
  display: inline-flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, opacity var(--sb-ease);
}
.sidebar__collapse:hover { background: var(--sb-hover-bg); color: var(--sb-text-hover); }
.sidebar.is-condensed .sidebar__collapse,
.sidebar.is-sm-hover  .sidebar__collapse { opacity: 0; pointer-events: none; }

.collapse-icon {
  width: 14px; height: 14px;
  transition: transform 0.22s ease;
}
/* rotated = pointing left (expanded state) */
.collapse-icon.rotated { transform: rotate(180deg); }

/* ── Scrollable body ──────────────────────────────────── */
.sidebar__body {
  flex: 1;
  overflow-y: auto; overflow-x: hidden;
  padding: 10px 0 24px;
  scrollbar-width: thin;
  scrollbar-color: var(--sb-border) transparent;
}
.sidebar__body::-webkit-scrollbar       { width: 3px; }
.sidebar__body::-webkit-scrollbar-thumb { background: var(--sb-border); border-radius: 999px; }

/* ── Nav ──────────────────────────────────────────────── */
.sidebar__nav {
  list-style: none;
  margin: 0; padding: 0 10px;
  display: flex; flex-direction: column; gap: 1px;
}

/* Section label e.g. "GENERAL", "USERS" */
.nav-section__label {
  padding: 16px 10px 5px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sb-section-color);
  white-space: nowrap; overflow: hidden;
  transition: opacity var(--sb-ease), height var(--sb-ease), padding var(--sb-ease);
}
.sidebar.is-condensed .nav-section__label,
.sidebar.is-sm-hover  .nav-section__label {
  opacity: 0; height: 0; padding: 0; pointer-events: none;
}

.nav-item { list-style: none; }

/* ── Link / button (shared) ───────────────────────────── */
.nav-item__link {
  position: relative;
  width: 100%;
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px;
  border: none; border-radius: 7px;
  background: transparent;
  color: var(--sb-text);
  font-size: 14px; font-weight: 500; font-family: inherit;
  text-decoration: none; text-align: left;
  cursor: pointer; white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease;
}
/* Active left-bar indicator */
.nav-item__link::after {
  content: "";
  position: absolute;
  left: -10px; top: 8px; bottom: 8px;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: transparent;
  transition: background 0.15s ease;
}
.nav-item__link:hover             { background: var(--sb-hover-bg); color: var(--sb-text-hover); }
.nav-item__link.active            { background: var(--sb-active-bg); color: var(--sb-text-active); }
.nav-item.open > .nav-item__link  { background: var(--sb-active-bg); color: var(--sb-text-active); }
.nav-item__link.active::after     { background: var(--sb-accent); }

/* Icon wrapper */
.nav-item__icon {
  flex-shrink: 0;
  width: 28px; height: 28px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--sb-icon-color);
  border-radius: 5px;
  transition: color 0.15s ease;
}
.menu-icon { width: 18px; height: 18px; stroke-width: 1.8; }

.nav-item__link:hover        .nav-item__icon,
.nav-item__link.active       .nav-item__icon,
.nav-item.open > .nav-item__link .nav-item__icon { color: var(--sb-icon-active); }

/* Text */
.nav-item__text {
  flex: 1; min-width: 0;
  overflow: hidden; text-overflow: ellipsis;
  transition: opacity var(--sb-ease);
}

/* Badge e.g. "9+" on Widgets */
.nav-item__badge {
  flex-shrink: 0;
  padding: 1px 6px;
  background: #fd7e14;
  color: #fff;
  font-size: 10px; font-weight: 700;
  border-radius: 999px;
  line-height: 1.6;
  transition: opacity var(--sb-ease);
}

/* Arrow */
.nav-item__arrow {
  flex-shrink: 0;
  display: inline-flex; align-items: center;
  color: var(--sb-muted);
  transition: transform 0.2s ease, color 0.15s ease, opacity var(--sb-ease);
}
.arrow-icon { width: 13px; height: 13px; }
.nav-item.open > .nav-item__link .nav-item__arrow {
  transform: rotate(-180deg);
  color: var(--sb-accent);
}

/* ── Icon-only states: hide text / badge / arrow, centre icon ── */
.sidebar.is-condensed .nav-item__text,
.sidebar.is-condensed .nav-item__arrow,
.sidebar.is-condensed .nav-item__badge,
.sidebar.is-sm-hover  .nav-item__text,
.sidebar.is-sm-hover  .nav-item__arrow,
.sidebar.is-sm-hover  .nav-item__badge {
  opacity: 0; width: 0; overflow: hidden; pointer-events: none;
}
.sidebar.is-condensed .nav-item__link,
.sidebar.is-sm-hover  .nav-item__link {
  justify-content: center; padding: 10px 0; gap: 0;
}

/* ── Tooltip (icon-only hover) ────────────────────────── */
.nav-item__tooltip {
  position: absolute;
  left: calc(var(--sb-icon-width) + 8px);
  top: 50%; transform: translateY(-50%);
  padding: 5px 11px;
  background: #1e2637;
  color: #fff;
  font-size: 12px; font-weight: 600;
  border-radius: 6px; white-space: nowrap;
  box-shadow: 0 8px 20px rgba(0,0,0,.28);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: 1100;
}
:global([data-menu="light"]) .nav-item__tooltip { background: #313a46; }

.sidebar.is-condensed .nav-item__link:hover .nav-item__tooltip,
.sidebar.is-sm-hover  .nav-item__link:hover .nav-item__tooltip { opacity: 1; }

/* Hide tooltip when sidebar is expanded */
.sidebar:not(.is-condensed):not(.is-sm-hover) .nav-item__tooltip { display: none; }

/* ── Dropdown transition ──────────────────────────────── */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: top;
}
.dropdown-enter-from,
.dropdown-leave-to { opacity: 0; transform: scaleY(0.94); }

.nav-dropdown__list {
  list-style: none;
  margin: 2px 0 4px;
  padding: 0 0 2px 38px;
  display: flex; flex-direction: column; gap: 1px;
}

.nav-dropdown__link {
  position: relative;
  display: block;
  padding: 6px 10px 6px 14px;
  border-radius: 6px;
  color: var(--sb-sub-color);
  font-size: 13px; font-weight: 500;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;
}
/* Dot */
.nav-dropdown__link::before {
  content: "";
  position: absolute;
  left: 2px; top: 50%; transform: translateY(-50%);
  width: 5px; height: 5px;
  border-radius: 50%;
  border: 1.5px solid var(--sb-sub-color);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.nav-dropdown__link:hover              { background: var(--sb-hover-bg); color: var(--sb-text-hover); }
.nav-dropdown__link:hover::before      { border-color: var(--sb-accent); background: var(--sb-accent); }
.nav-dropdown__link.active             { color: var(--sb-accent); font-weight: 600; }
.nav-dropdown__link.active::before     { background: var(--sb-accent); border-color: var(--sb-accent); }

/* ── Mobile (≤ 1024 px) ───────────────────────────────── */
@media (max-width: 1024px) {
  .sidebar {
    width: 260px !important;
    transform: translateX(-100%);
  }
  .sidebar.mobile-open {
    transform: translateX(0);
    box-shadow: 8px 0 32px rgba(0,0,0,.45);
  }
  /* Force expanded look on mobile regardless of data-sidebar-size */
  .sidebar.mobile-open .sidebar__logo  { padding: 0 18px 0 16px !important; justify-content: space-between !important; }
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
    padding: 8px 10px !important; gap: 10px !important;
  }
  .nav-item__tooltip { display: none !important; }
  .sidebar__collapse { display: none; }
}

@media (max-width: 767px) {
  .sidebar { width: 240px !important; }
}
</style>