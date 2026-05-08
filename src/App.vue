<template>
  <div class="app-layout" :class="layoutClasses">
    <!-- Sidebar -->
    <Sidebar ref="sidebarRef" />

    <!-- Mobile Overlay -->
    <Transition name="overlay-fade">
      <div
        v-if="mobileSidebarOpen"
        class="mobile-overlay"
        @click="closeMobileSidebar"
      />
    </Transition>

    <!-- Main Content -->
    <div class="app-main">
      <Header @toggle-sidebar="handleSidebarToggle" />

      <main class="app-content">
        <router-view v-slot="{ Component, route }">
          <Transition name="page-fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";

const sidebarRef      = ref(null);
const mobileSidebarOpen = ref(false);
const sidebarSize     = ref("default"); // default | condensed | hidden | smallhover | smallhover-active

// Sync layoutClasses onto <div> instead of <body> attrs so Vue controls it reactively
const layoutClasses = computed(() => ({
  [`sidebar-${sidebarSize.value}`]: sidebarSize.value !== "default",
  "sidebar-mobile-open": mobileSidebarOpen.value,
}));

/* ── Mobile sidebar ─────────────────────────────── */
const closeMobileSidebar = () => {
  mobileSidebarOpen.value = false;
  sidebarRef.value?.setMobileOpen?.(false);
};

/* ── Toggle handler from Header ─────────────────── */
const handleSidebarToggle = () => {
  const isMobile = window.innerWidth <= 1024;

  if (isMobile) {
    mobileSidebarOpen.value = !mobileSidebarOpen.value;
    sidebarRef.value?.setMobileOpen?.(mobileSidebarOpen.value);
    return;
  }

  // Desktop: cycle default → condensed → default
  if (sidebarSize.value === "default") {
    sidebarSize.value = "condensed";
  } else if (sidebarSize.value === "condensed") {
    sidebarSize.value = "default";
  } else {
    sidebarSize.value = "default";
  }
  applyBodyAttrs();
};

/* ── Close mobile sidebar on resize to desktop ───── */
const handleResize = () => {
  if (window.innerWidth > 1024 && mobileSidebarOpen.value) {
    closeMobileSidebar();
  }
};

/* ── Persist body data-* attrs (AL-AHMODANY reads these) ─ */
const applyBodyAttrs = () => {
  if (sidebarSize.value && sidebarSize.value !== "default") {
    document.body.setAttribute("data-sidebar-size", sidebarSize.value);
  } else {
    document.body.removeAttribute("data-sidebar-size");
  }
};

/* ── Load saved settings ─────────────────────────── */
onMounted(() => {
  try {
    const s = JSON.parse(localStorage.getItem("AL-AHMODANY_settings") || "{}");

    document.documentElement.setAttribute("data-theme",  s.colorScheme  || "light");
    document.body.setAttribute("data-topbar", s.topbarColor || "light");
    document.body.setAttribute("data-menu",   s.menuColor   || "dark");
    document.body.setAttribute("data-layout", "vertical");

    if (s.sidebarSize && s.sidebarSize !== "default") {
      sidebarSize.value = s.sidebarSize;
    }
    applyBodyAttrs();
  } catch {
    document.documentElement.setAttribute("data-theme", "light");
    document.body.setAttribute("data-menu",   "dark");
    document.body.setAttribute("data-layout", "vertical");
  }

  // Listen for layout changes dispatched by layout pages
  window.addEventListener("larkon:layout-change", handleLayoutChange);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("larkon:layout-change", handleLayoutChange);
  window.removeEventListener("resize", handleResize);
});

/* ── Handle layout change events from layout pages ── */
const handleLayoutChange = (e) => {
  const { sidebarSize: size, menuColor, topbarColor, colorScheme } = e.detail || {};

  if (colorScheme) {
    document.documentElement.setAttribute("data-theme", colorScheme);
  }
  if (topbarColor) {
    document.body.setAttribute("data-topbar", topbarColor);
  }
  if (menuColor) {
    document.body.setAttribute("data-menu", menuColor);
  }
  if (size !== undefined) {
    sidebarSize.value = size || "default";
    applyBodyAttrs();
  }
};
</script>

<style>
/* ═══════════════════════════════════════════════════
   AL-AHMODANY LAYOUT — exact spec from techzaa.in/AL-AHMODANY
   ═══════════════════════════════════════════════════ */

/* ── Reset ──────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Suppress CSS transitions on initial load to prevent flash/blur */
/* NOTE: Only suppress transition, NOT animation — Vue Transitions need animation */
.no-transition *,
.no-transition *::before,
.no-transition *::after {
  transition: none !important;
}

html,
body {
  height: 100%;
  /* No overflow:hidden on html/body — AL-AHMODANY lets body scroll on mobile */
}

/* ── CSS variables (matches AL-AHMODANY defaults) ─────── */
:root {
  --sidebar-width:            260px;
  --sidebar-collapsed-width:   70px;
  --topbar-height:             70px;
  --content-bg:              #f4f6fb;
  --sidebar-bg:              #313a46;
  --sidebar-transition:      0.2s ease;
}

[data-theme="dark"] {
  --content-bg: #1a2035;
}

[data-menu="light"] {
  --sidebar-bg: #ffffff;
}

/* ── Root layout ─────────────────────────────────── */
.app-layout {
  display: flex;
  min-height: 100vh;
  background: var(--content-bg, #f4f6fb);
}

/* ── Page content area ───────────────────────────── */
.app-content {
  flex: 1;
  padding: 24px;
  background: var(--content-bg, #f4f6fb);
  overflow: visible;
  min-width: 0;
}

/* ── Sidebar (the real element lives in Sidebar.vue)  */
/* These rules adjust the MAIN CONTENT margin based on sidebar mode */

/* Default: sidebar is 260 px wide, fixed left */
.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: var(--sidebar-width);
  padding-top: 0; /* offset for fixed header */
  transition: margin-left var(--sidebar-transition);
  overflow: visible;
  min-width: 0;
}

/* ── Sidebar size variants ───────────────────────── */

/* Condensed (icon-only, 70 px) */
[data-sidebar-size="condensed"] .app-main,
.app-layout.sidebar-condensed  .app-main {
  margin-left: var(--sidebar-collapsed-width);
}

/* Hidden */
[data-sidebar-size="hidden"] .app-main,
.app-layout.sidebar-hidden .app-main {
  margin-left: 0;
}

/* Small Hover — icon-only until hovered */
[data-sidebar-size="sm-hover"] .app-main,
[data-sidebar-size="sm-hover-active"] .app-main,
.app-layout.sidebar-sm-hover .app-main,
.app-layout.sidebar-sm-hover-active .app-main {
  margin-left: var(--sidebar-collapsed-width);
}

/* ── Header / Topbar ─────────────────────────────── */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--topbar-height);
}

/* Ensure header is always sticky and above content */
.app-main > header {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* ── Mobile Overlay ──────────────────────────────── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
}

/* Vue <Transition name="overlay-fade"> */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.25s ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

/* ── Responsive: ≤ 1024 px (tablet / mobile) ────── */
@media (max-width: 1024px) {
  /* Sidebar slides in over the content; main takes full width */
  .app-main {
    margin-left: 0 !important;
  }
}

/* ── Responsive: ≤ 768 px (phone) ───────────────── */
@media (max-width: 768px) {
  .app-content {
    padding: 16px;
  }
}

/* ── Page transition animation ───────────────────── */
.page-fade-enter-active {
  animation: pageFadeIn 0.32s ease both;
}
.page-fade-leave-active {
  animation: pageFadeOut 0.18s ease both;
}

@keyframes pageFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pageFadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-6px);
  }
}</style>