<template>
  <!-- Compact CDN banner — fits inside any page layout without breaking it -->
  <div class="cdn-banner">
    <div class="cdn-banner__inner">

      <!-- Left: icon + label + description -->
      <div class="cdn-banner__left">
        <span class="cdn-banner__icon">
          <i class="bx bx-link-alt"></i>
        </span>
        <div class="cdn-banner__text">
          <span class="cdn-banner__label">Use via CDN</span>
          <span class="cdn-banner__desc">
            Add to your <code>&lt;head&gt;</code> — <code>library.css</code> provides all custom classes &amp; dark mode
          </span>
        </div>
      </div>

      <!-- Right: copy button + expand toggle -->
      <div class="cdn-banner__actions">
        <button class="cdn-banner__copy-btn" @click="copySnippet" :class="{ copied: wasCopied }">
          <i :class="wasCopied ? 'bx bx-check' : 'bx bx-copy'"></i>
          {{ wasCopied ? 'Copied!' : 'Copy CDN links' }}
        </button>
        <button class="cdn-banner__toggle" @click="expanded = !expanded" :aria-expanded="expanded">
          <i :class="expanded ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i>
        </button>
      </div>
    </div>

    <!-- Expandable code block -->
    <Transition name="cdn-expand">
      <div v-if="expanded" class="cdn-banner__code-wrap">
        <div class="cdn-banner__tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="cdn-banner__tab"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >{{ tab.label }}</button>
        </div>

        <div class="cdn-banner__code-block">
          <div class="cdn-banner__code-bar">
            <span class="cdn-banner__code-lang">HTML</span>
            <button
              class="cdn-banner__code-copy"
              @click="copyActive"
              :class="{ copied: wasCodeCopied }"
            >
              <i :class="wasCodeCopied ? 'bx bx-check' : 'bx bx-copy'"></i>
              {{ wasCodeCopied ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <pre class="cdn-banner__pre"><code>{{ activeTab === 'snippet' ? cdnSnippet : fullExample }}</code></pre>
        </div>

        <p class="cdn-banner__note">
          <i class="bx bx-info-circle"></i>
          <strong>Load order matters</strong> — Bootstrap first, <code>library.css</code> last.
          Custom classes like <code>btn-purple</code>, <code>btn-soft-*</code>, <code>badge-soft-*</code>, <code>avatar-*</code> and dark-mode support all require <code>library.css</code>.
          Swiper, SimpleBar and Toastify are optional; only include them for pages that use those components.
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  baseUrl: { type: String, default: '/cdn' }
})

const expanded     = ref(false)
const wasCopied    = ref(false)
const wasCodeCopied = ref(false)
const activeTab    = ref('snippet')

const tabs = [
  { id: 'snippet',  label: 'CDN Links' },
  { id: 'full',     label: 'Full working page' },
]

// Mirrors src/main.js import order exactly
const cdnSnippet = `<!-- ① Bootstrap 5.3 — grid, utilities, components (REQUIRED) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

<!-- ② Bootstrap Icons 1.13 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" />

<!-- ③ Boxicons 2.1 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" />

<!-- ④ Swiper 12 (only needed for carousel/slider pages) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />

<!-- ⑤ SimpleBar 6 (only needed for custom scrollbar pages) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar@6/dist/simplebar.css" />

<!-- ⑥ Toastify (only needed for toast notification pages) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.css" />

<!-- ⑦ AL-AHMODANY theme + overrides — MUST be last
     Provides: CSS variables, dark mode, btn-purple/pink/orange,
     btn-soft-*, btn-outline-*, badge-soft-*, badge-outline-*,
     avatar-xs/sm/md/lg/xl, and all component styles. -->
<link rel="stylesheet" href="${props.baseUrl}/library.css" />

<!-- ⑧ Bootstrap JS bundle (dropdowns, modals, tooltips, etc.) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"><\/script>

<!-- ⑨ AL-AHMODANY JS (copy buttons, theme toggle, scroll spy, clock) -->
<script src="${props.baseUrl}/library.js" defer><\/script>`

const fullExample = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Page — AL-AHMODANY</title>

  <!-- ① Bootstrap 5.3 CSS — REQUIRED, must come first -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

  <!-- ② Bootstrap Icons 1.13 -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" />

  <!-- ③ Boxicons 2.1 -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" />

  <!-- ④–⑥ Optional plugins — remove if not used on this page -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar@6/dist/simplebar.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.css" />

  <!-- ⑦ AL-AHMODANY theme — MUST be last.
       Provides: CSS variables, dark mode, btn-purple/pink/orange,
       btn-soft-*, btn-outline-*, badge-soft-*, badge-outline-*,
       avatar-xs/sm/md/lg/xl, and all component styles. -->
  <link rel="stylesheet" href="${props.baseUrl}/library.css" />
</head>

<body>

  <div class="container py-5">

    <!-- ─── Page header ─────────────────────────────── -->
    <h4 class="fw-bold text-uppercase mb-1" style="letter-spacing:.05em">Components</h4>
    <p class="text-muted mb-4">Copy any snippet below — all styles come from library.css.</p>

    <!-- ─── Buttons ─────────────────────────────────── -->
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title mb-1">Buttons</h5>
        <p class="text-muted small mb-3">
          Standard Bootstrap variants + custom <code>btn-purple</code>, <code>btn-pink</code>,
          <code>btn-orange</code> and soft/outline variants from <code>library.css</code>.
        </p>

        <!-- Default -->
        <p class="fw-semibold small mb-2">Default</p>
        <div class="d-flex flex-wrap gap-2 mb-3">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-dark">Dark</button>
          <button type="button" class="btn btn-purple">Purple</button>
          <button type="button" class="btn btn-pink">Pink</button>
          <button type="button" class="btn btn-orange">Orange</button>
          <button type="button" class="btn btn-light">Light</button>
        </div>

        <!-- Soft -->
        <p class="fw-semibold small mb-2">Soft (requires library.css)</p>
        <div class="d-flex flex-wrap gap-2 mb-3">
          <button type="button" class="btn btn-soft-primary">Primary</button>
          <button type="button" class="btn btn-soft-secondary">Secondary</button>
          <button type="button" class="btn btn-soft-success">Success</button>
          <button type="button" class="btn btn-soft-danger">Danger</button>
          <button type="button" class="btn btn-soft-warning">Warning</button>
          <button type="button" class="btn btn-soft-info">Info</button>
          <button type="button" class="btn btn-soft-purple">Purple</button>
          <button type="button" class="btn btn-soft-pink">Pink</button>
        </div>

        <!-- Outline -->
        <p class="fw-semibold small mb-2">Outline</p>
        <div class="d-flex flex-wrap gap-2">
          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-purple">Purple</button>
          <button type="button" class="btn btn-outline-pink">Pink</button>
          <button type="button" class="btn btn-outline-orange">Orange</button>
        </div>
      </div>
    </div>

    <!-- ─── Badges ───────────────────────────────────── -->
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title mb-1">Badges</h5>
        <p class="text-muted small mb-3">
          Solid, soft, and outline badge variants — soft/outline require <code>library.css</code>.
        </p>

        <p class="fw-semibold small mb-2">Solid</p>
        <div class="d-flex flex-wrap gap-2 mb-3">
          <span class="badge bg-primary">Primary</span>
          <span class="badge bg-secondary">Secondary</span>
          <span class="badge bg-success">Success</span>
          <span class="badge bg-danger">Danger</span>
          <span class="badge bg-warning">Warning</span>
          <span class="badge bg-info">Info</span>
          <span class="badge bg-purple">Purple</span>
          <span class="badge bg-pink">Pink</span>
        </div>

        <p class="fw-semibold small mb-2">Soft (requires library.css)</p>
        <div class="d-flex flex-wrap gap-2 mb-3">
          <span class="badge badge-soft-primary">Primary</span>
          <span class="badge badge-soft-secondary">Secondary</span>
          <span class="badge badge-soft-success">Success</span>
          <span class="badge badge-soft-danger">Danger</span>
          <span class="badge badge-soft-warning">Warning</span>
          <span class="badge badge-soft-info">Info</span>
          <span class="badge badge-soft-purple">Purple</span>
          <span class="badge badge-soft-pink">Pink</span>
        </div>

        <p class="fw-semibold small mb-2">Outline (requires library.css)</p>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge badge-outline badge-outline-primary">Primary</span>
          <span class="badge badge-outline badge-outline-success">Success</span>
          <span class="badge badge-outline badge-outline-danger">Danger</span>
          <span class="badge badge-outline badge-outline-warning">Warning</span>
          <span class="badge badge-outline badge-outline-purple">Purple</span>
        </div>
      </div>
    </div>

    <!-- ─── Avatars ───────────────────────────────────── -->
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title mb-1">Avatars</h5>
        <p class="text-muted small mb-3">
          Size classes <code>avatar-xs</code> through <code>avatar-xl</code> from <code>library.css</code>.
        </p>
        <div class="d-flex align-items-end gap-3">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face"
               class="avatar-xs rounded-circle" alt="xs" />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
               class="avatar-sm rounded-circle" alt="sm" />
          <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop&crop=face"
               class="avatar-md rounded-circle" alt="md" />
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face"
               class="avatar-lg rounded-circle" alt="lg" />
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face"
               class="avatar-xl rounded-circle" alt="xl" />
        </div>
      </div>
    </div>

    <!-- ─── Dark mode toggle ─────────────────────────── -->
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title mb-1">Dark Mode</h5>
        <p class="text-muted small mb-3">
          Toggle dark mode by setting <code>data-theme="dark"</code> on <code>&lt;html&gt;</code>.
          <code>library.js</code> handles persistence automatically.
        </p>
        <button class="btn btn-outline-secondary" data-theme-toggle>
          <i class="bi bi-moon-stars me-1"></i> Toggle Dark Mode
        </button>
      </div>
    </div>

  </div>

  <!-- ⑧ Bootstrap JS bundle (dropdowns, modals, tooltips, etc.) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"><\/script>

  <!-- ⑨ AL-AHMODANY JS — copy buttons, theme toggle, scroll spy, clock -->
  <script src="${props.baseUrl}/library.js" defer><\/script>

</body>
</html>`

function copySnippet() {
  doCopy(cdnSnippet, wasCopied)
}
function copyActive() {
  doCopy(activeTab.value === 'snippet' ? cdnSnippet : fullExample, wasCodeCopied)
}
function doCopy(text, flag) {
  navigator.clipboard.writeText(text).then(() => {
    flag.value = true
    setTimeout(() => { flag.value = false }, 2000)
  }).catch(() => {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0'
    document.body.appendChild(ta)
    ta.focus(); ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    flag.value = true
    setTimeout(() => { flag.value = false }, 2000)
  })
}
</script>

<style scoped>
/* ── Banner shell ── */
.cdn-banner {
  background: var(--card-bg, #fff);
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: background .2s, border-color .2s;
}

/* ── Top row ── */
.cdn-banner__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  flex-wrap: wrap;
}

.cdn-banner__left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.cdn-banner__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--accent-muted, #fff3e8);
  color: var(--accent, #fd7e14);
  font-size: 16px;
  flex-shrink: 0;
}

.cdn-banner__text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.cdn-banner__label {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--text-primary, #313a46);
  white-space: nowrap;
}

.cdn-banner__desc {
  font-size: 0.76rem;
  color: var(--text-muted, #8996af);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cdn-banner__desc code {
  background: var(--accent-muted, #fff3e8);
  color: var(--accent, #fd7e14);
  padding: 0 4px;
  border-radius: 3px;
  font-size: 0.72rem;
}

/* ── Action buttons ── */
.cdn-banner__actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.cdn-banner__copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: var(--accent, #fd7e14);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.76rem;
  font-weight: 600;
  padding: 6px 12px;
  cursor: pointer;
  transition: opacity .15s, background .15s;
  font-family: inherit;
  white-space: nowrap;
}
.cdn-banner__copy-btn:hover { opacity: .88; }
.cdn-banner__copy-btn.copied { background: var(--success, #2ecc71); }
.cdn-banner__copy-btn i { font-size: 13px; }

.cdn-banner__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: var(--app-bg, #f3f4f9);
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 6px;
  color: var(--text-secondary, #6c757d);
  cursor: pointer;
  transition: background .15s, color .15s, border-color .15s;
  font-size: 16px;
}
.cdn-banner__toggle:hover {
  background: var(--accent-muted, #fff3e8);
  border-color: var(--accent, #fd7e14);
  color: var(--accent, #fd7e14);
}

/* ── Expandable area ── */
.cdn-banner__code-wrap {
  border-top: 1px solid var(--card-border, #eef2f7);
  padding: 14px 16px;
  transition: border-color .2s;
}

/* ── Tabs ── */
.cdn-banner__tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
}

.cdn-banner__tab {
  background: transparent;
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 5px;
  font-size: 0.74rem;
  font-weight: 600;
  padding: 4px 12px;
  color: var(--text-secondary, #6c757d);
  cursor: pointer;
  transition: all .15s;
  font-family: inherit;
}
.cdn-banner__tab:hover {
  border-color: var(--accent, #fd7e14);
  color: var(--accent, #fd7e14);
}
.cdn-banner__tab.active {
  background: var(--accent, #fd7e14);
  border-color: var(--accent, #fd7e14);
  color: #fff;
}

/* ── Code block ── */
.cdn-banner__code-block {
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  transition: border-color .2s;
}

.cdn-banner__code-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 14px;
  background: var(--app-bg, #f3f4f9);
  border-bottom: 1px solid var(--card-border, #eef2f7);
  transition: background .2s, border-color .2s;
}

.cdn-banner__code-lang {
  background: var(--accent, #fd7e14);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: .4px;
}

.cdn-banner__code-copy {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--card-bg, #fff);
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 5px;
  font-size: 0.72rem;
  padding: 3px 10px;
  color: var(--text-muted, #8996af);
  cursor: pointer;
  transition: border-color .15s, color .15s;
  font-family: inherit;
}
.cdn-banner__code-copy:hover { border-color: var(--accent, #fd7e14); color: var(--accent, #fd7e14); }
.cdn-banner__code-copy.copied { border-color: var(--success, #2ecc71); color: var(--success, #2ecc71); }
.cdn-banner__code-copy i { font-size: 12px; }

.cdn-banner__pre {
  background: var(--app-bg, #f3f4f9);
  margin: 0;
  padding: 12px 16px;
  font-size: 0.72rem;
  color: var(--text-secondary, #6c757d);
  line-height: 1.7;
  overflow-x: auto;
  max-height: 280px;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre;
  transition: background .2s, color .2s;
}

.cdn-banner__pre code {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  padding: 0;
}

/* ── Note ── */
.cdn-banner__note {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.76rem;
  color: var(--text-secondary, #6c757d);
  margin: 0;
  line-height: 1.5;
}
.cdn-banner__note i { font-size: 14px; color: var(--info, #5b73e8); flex-shrink: 0; margin-top: 1px; }
.cdn-banner__note strong { color: var(--text-primary, #313a46); }
.cdn-banner__note code {
  background: var(--accent-muted, #fff3e8);
  color: var(--accent, #fd7e14);
  padding: 0 4px;
  border-radius: 3px;
  font-size: 0.7rem;
}

/* ── Expand transition ── */
.cdn-expand-enter-active,
.cdn-expand-leave-active {
  transition: opacity .2s ease, max-height .25s ease;
  overflow: hidden;
  max-height: 600px;
}
.cdn-expand-enter-from,
.cdn-expand-leave-to {
  opacity: 0;
  max-height: 0;
}

/* ── Dark mode ── */
:global([data-theme="dark"]) .cdn-banner {
  background: var(--card-bg) !important;
  border-color: var(--card-border) !important;
}
:global([data-theme="dark"]) .cdn-banner__code-wrap {
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .cdn-banner__code-block {
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .cdn-banner__code-bar {
  background: var(--app-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .cdn-banner__pre {
  background: var(--app-bg) !important;
  color: #c9d1d9 !important;
}
:global([data-theme="dark"]) .cdn-banner__code-copy {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .cdn-banner__code-copy:hover {
  border-color: var(--accent) !important;
  color: var(--accent) !important;
}
:global([data-theme="dark"]) .cdn-banner__toggle {
  background: var(--app-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .cdn-banner__tab {
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .cdn-banner__tab:hover {
  border-color: var(--accent) !important;
  color: var(--accent) !important;
}
:global([data-theme="dark"]) .cdn-banner__label {
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .cdn-banner__desc {
  color: var(--text-muted) !important;
}
:global([data-theme="dark"]) .cdn-banner__note strong {
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .cdn-banner__note {
  color: var(--text-secondary) !important;
}
</style>
