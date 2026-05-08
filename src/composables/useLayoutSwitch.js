/**
 * useLayoutSwitch — shared helper for layout pages.
 * Dispatches a custom event that App.vue listens to,
 * so layout changes apply instantly without page reload.
 */
export function applyLayoutSettings(opts = {}) {
  // Persist to localStorage
  try {
    const s = JSON.parse(localStorage.getItem("AL-AHMODANY_settings") || "{}");
    if (opts.colorScheme  !== undefined) s.colorScheme  = opts.colorScheme;
    if (opts.topbarColor  !== undefined) s.topbarColor  = opts.topbarColor;
    if (opts.menuColor    !== undefined) s.menuColor    = opts.menuColor;
    if (opts.sidebarSize  !== undefined) s.sidebarSize  = opts.sidebarSize;
    localStorage.setItem("AL-AHMODANY_settings", JSON.stringify(s));
  } catch { /* noop */ }

  // Apply DOM attributes immediately
  if (opts.colorScheme !== undefined) {
    document.documentElement.setAttribute("data-theme", opts.colorScheme);
  }
  if (opts.topbarColor !== undefined) {
    document.body.setAttribute("data-topbar", opts.topbarColor);
  }
  if (opts.menuColor !== undefined) {
    document.body.setAttribute("data-menu", opts.menuColor);
  }
  if (opts.sidebarSize !== undefined) {
    if (opts.sidebarSize && opts.sidebarSize !== "default") {
      document.body.setAttribute("data-sidebar-size", opts.sidebarSize);
    } else {
      document.body.removeAttribute("data-sidebar-size");
    }
  }

  // Notify App.vue to update its reactive sidebarSize ref
  window.dispatchEvent(new CustomEvent("larkon:layout-change", { detail: opts }));
}
