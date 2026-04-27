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
        <router-view />
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
const handleSidebarToggle = (size) => {
  const isMobile = window.innerWidth <= 1024;

  if (isMobile) {
    mobileSidebarOpen.value = !mobileSidebarOpen.value;
    sidebarRef.value?.setMobileOpen?.(mobileSidebarOpen.value);
    return;
  }

  // Desktop: cycle or apply the requested size
  sidebarSize.value = size ?? "default";
  // Keep body attributes in sync for any Bootstrap-style CSS that reads them
  applyBodyAttrs();
};

/* ── Close mobile sidebar on resize to desktop ───── */
const handleResize = () => {
  if (window.innerWidth > 1024 && mobileSidebarOpen.value) {
    closeMobileSidebar();
  }
};

/* ── Persist body data-* attrs (Larkon reads these) ─ */
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
    const s = JSON.parse(localStorage.getItem("larkon_settings") || "{}");

    document.documentElement.setAttribute("data-theme",  s.colorScheme  || "light");
    document.body.setAttribute("data-topbar", s.topbarColor || "light");
    document.body.setAttribute("data-menu",   s.menuColor   || "dark");
    document.body.setAttribute("data-layout", "vertical"); // Larkon default

    if (s.sidebarSize && s.sidebarSize !== "default") {
      sidebarSize.value = s.sidebarSize;
    }
    applyBodyAttrs();
  } catch {
    document.documentElement.setAttribute("data-theme", "light");
    document.body.setAttribute("data-menu",   "dark");
    document.body.setAttribute("data-layout", "vertical");
  }

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
/* ═══════════════════════════════════════════════════
   LARKON LAYOUT — exact spec from techzaa.in/larkon
   ═══════════════════════════════════════════════════ */

/* ── Reset ──────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  /* No overflow:hidden on html/body — Larkon lets body scroll on mobile */
}

/* ── CSS variables (matches Larkon defaults) ─────── */
:root {
  --sidebar-width:            260px;   /* default sidebar width             */
  --sidebar-collapsed-width:   70px;   /* condensed / small-hover icon width*/
  --topbar-height:             70px;   /* header bar height                 */
  --content-bg:              #f4f6fb;  /* page background                   */
  --sidebar-bg:              #1e2f4d;  /* dark menu default                 */
  --sidebar-transition:      0.2s ease;
}

/* Dark theme overrides */
[data-theme="dark"] {
  --content-bg: #1a2035;
}

/* Light menu */
[data-menu="light"] {
  --sidebar-bg: #ffffff;
}

/* ── Root layout ─────────────────────────────────── */
.app-layout {
  display: flex;
  min-height: 100vh;
  background: var(--content-bg);
  overflow-x: hidden;
  /* Sidebar is a fixed-position element in Larkon; main shifts via margin */
}

/* ── Sidebar (the real element lives in Sidebar.vue)  */
/* These rules adjust the MAIN CONTENT margin based on sidebar mode */

/* Default: sidebar is 260 px wide, fixed left */
.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: var(--sidebar-width);          /* push right of fixed sidebar */
  transition: margin-left var(--sidebar-transition);
  overflow: hidden;
}

/* ── Sidebar size variants ───────────────────────── */

/* Condensed (icon-only, 70 px) */
[data-sidebar-size="condensed"] .app-main,
.app-layout.sidebar-condensed  .app-main {
  margin-left: var(--sidebar-collapsed-width);
}

/* Hidden (sidebar is completely off-screen) */
[data-sidebar-size="hidden"] .app-main,
.app-layout.sidebar-hidden .app-main {
  margin-left: 0;
}

/* Small Hover Active (same footprint as condensed until hovered) */
[data-sidebar-size="smallhover-active"] .app-main,
.app-layout.sidebar-smallhover-active .app-main {
  margin-left: var(--sidebar-collapsed-width);
}

/* Small Hover (pure icon, expands on hover, no margin shift) */
[data-sidebar-size="smallhover"] .app-main,
.app-layout.sidebar-smallhover .app-main {
  margin-left: var(--sidebar-collapsed-width);
}

/* ── Header / Topbar ─────────────────────────────── */
/* Larkon topbar is sticky, full-width of the .app-main column */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--topbar-height);
}

/* ── Page content area ───────────────────────────── */
.app-content {
  flex: 1;
  padding: 24px;
  /* Larkon scrolls the full page, not a nested container */
  overflow: visible;
}

/* ── Mobile Overlay ──────────────────────────────── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;           /* just below the sidebar (z-index: 1000) */
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
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
</style>