<template>
  <div class="page-wrapper-adv" style="min-height: 100vh;">
    <CdnSection />
    <div class="container-fluid">

      <!-- Page Title -->
      <div class="mb-4">
        <p class="text-uppercase fw-bold mb-0" style="letter-spacing: 0.12em; font-size: 0.72rem; color: #6c757d;">Toastify</p>
      </div>

      <div class="row g-4">
        <div class="col-lg-9">

          <!-- Overview -->
          <div id="section-overview" class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="d-flex align-items-start justify-content-between">
                <div>
                  <h6 class="fw-bold mb-1" style="color:#1a1e2c;">Overview</h6>
                  <p class="text-muted mb-3" style="font-size:0.84rem;">
                    A lightweight JavaScript library for non-blocking notifications. No dependencies required.
                  </p>
                  <h6 class="fw-bold mb-1" style="color:#1a1e2c;">Usage</h6>
                  <p class="text-muted mb-0" style="font-size:0.84rem;">
                    Toastify-js's Javascript files are bundled in the vendor.js and globally included in all pages.
                  </p>
                </div>
                <a href="https://apvarun.github.io/toastify-js/" target="_blank"
                   class="btn btn-outline-success btn-sm ms-4 text-nowrap"
                   style="font-size:0.78rem;border-radius:6px;">Official Website</a>
              </div>
            </div>
          </div>

          <!-- Section cards -->
          <div v-for="(section, index) in sections" :key="section.id"
               :id="section.id" class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body p-4">
              <h5 class="fw-semibold mb-1" style="font-size:0.97rem;color:#1a1e2c;">{{ section.title }}</h5>
              <p class="text-muted mb-3" style="font-size:0.83rem;">{{ section.desc }}</p>

              <!-- Live demo buttons -->
              <div class="d-flex flex-wrap gap-2 mb-3">
                <button
                  v-for="(btn, bi) in section.buttons" :key="bi"
                  :class="btn.cls"
                  @click="section.fire(bi)"
                >{{ btn.label }}</button>
              </div>

              <!-- Code block -->
              <div class="code-block rounded-3 overflow-hidden border">
                <div class="code-header d-flex align-items-center justify-content-between px-3 py-2">
                  <div class="d-flex gap-1">
                    <button class="btn btn-sm fw-semibold code-tab"
                      :class="activeTab[index] === 'html' ? 'code-tab-active' : ''"
                      @click="activeTab[index] = 'html'">HTML</button>
                    <button class="btn btn-sm fw-semibold code-tab"
                      :class="activeTab[index] === 'js' ? 'code-tab-active' : ''"
                      @click="activeTab[index] = 'js'">JAVASCRIPT</button>
                  </div>
                  <button class="btn btn-sm code-copy-btn"
                    :class="copiedIndex === index ? 'copied' : ''"
                    @click="copyCode(index)">
                    <i :class="copiedIndex === index ? 'bx bx-check' : 'bx bx-copy'"></i>
                    {{ copiedIndex === index ? 'Copied!' : 'Copy' }}
                  </button>
                </div>
                <div class="code-body">
                  <pre class="code-pre mb-0">{{ activeTab[index] === 'html' ? section.htmlCode : section.jsCode }}</pre>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- TOC -->
        <div class="col-lg-3 d-none d-lg-block">
          <div class="card border-0 shadow-sm rounded-3" style="position:sticky;top:1.5rem;">
            <div class="card-body p-3">
              <a href="javascript:void(0)"
                 class="d-block text-decoration-none py-1 px-3 mb-1 toc-link"
                 :class="{ 'toc-active': activeId === 'section-overview' }"
                 style="font-size:0.82rem;border-radius:6px;"
                 @click="scrollTo('section-overview')">Overview</a>
              <a v-for="s in sections" :key="s.id"
                 href="javascript:void(0)"
                 class="d-block text-decoration-none py-1 px-3 mb-1 toc-link"
                 :class="{ 'toc-active': activeId === s.id }"
                 style="font-size:0.82rem;border-radius:6px;"
                 @click="scrollTo(s.id)">{{ s.title }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5 pb-3">
        <small class="text-muted">2026 © AL-AHMODANY. Crafted with ❤️ by Techzaa</small>
      </div>
    </div>

    <!-- Toast containers -->
    <div v-for="pos in positions" :key="pos" class="toast-container" :class="`toast-${pos}`">
      <TransitionGroup name="toast" tag="div" class="toast-stack">
        <div v-for="t in getByPos(pos)" :key="t.id"
             class="toast-item" :class="`toast-${t.type}`" :style="t.offsetStyle">
          <div class="toast-content">
            <div class="toast-icon">
              <i v-if="t.type==='success'" class="bi bi-check-circle-fill text-success fs-5"></i>
              <i v-else-if="t.type==='warning'" class="bi bi-exclamation-triangle-fill text-warning fs-5"></i>
              <i v-else-if="t.type==='error'" class="bi bi-x-circle-fill text-danger fs-5"></i>
              <i v-else class="bi bi-bell-fill text-primary fs-5"></i>
            </div>
            <div class="toast-message flex-grow-1">{{ t.message }}</div>
            <button v-if="t.showClose" @click="removeToast(t.id)" class="toast-close-btn">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref, reactive } from 'vue'

const activeId  = ref('section-overview')
const copiedIndex = ref(null)
const activeTab = reactive({})

// ── Toast engine ──────────────────────────────────────────────────────────────
const toasts = ref([])
let nextId = 1
const positions = ['top-left','top-center','top-right','bottom-left','bottom-center','bottom-right']

const getByPos = (pos) => toasts.value.filter(t => t.position === pos)

function addToast({ message, type = 'default', position = 'top-right', duration = 3000, showClose = true, offsetX = 0, offsetY = 0 }) {
  const id = nextId++
  const offsetStyle = (offsetX || offsetY) ? { marginLeft: `${offsetX}px`, marginTop: `${offsetY}px` } : {}
  const t = { id, message, type, position, duration, showClose, offsetStyle, timeout: null }
  toasts.value.push(t)
  t.timeout = setTimeout(() => removeToast(id), duration)
}

function removeToast(id) {
  const i = toasts.value.findIndex(t => t.id === id)
  if (i !== -1) { clearTimeout(toasts.value[i].timeout); toasts.value.splice(i, 1) }
}

// ── Sections — demo fire() matches code snippets exactly ─────────────────────
const sections = [
  {
    id: 'section-basic',
    title: 'Basic Toastify JS Example',
    desc: 'Default | Success | Warning | Error',
    buttons: [
      { label: 'Default', cls: 'btn btn-primary px-4' },
      { label: 'Success', cls: 'btn btn-success px-4' },
      { label: 'Warning', cls: 'btn btn-warning px-4' },
      { label: 'Error',   cls: 'btn btn-danger px-4'  },
    ],
    fire(bi) {
      const opts = [
        { message: 'Welcome Back! This is a Toast Notification', type: 'default', position: 'top-right', duration: 3000, showClose: true },
        { message: 'Your application was successfully sent',      type: 'success', position: 'top-right', duration: 3000, showClose: true },
        { message: 'Warning! Something went wrong try again',     type: 'warning', position: 'top-right', duration: 3000, showClose: true },
        { message: 'Error! An error occurred.',                   type: 'error',   position: 'top-right', duration: 3000, showClose: true },
      ]
      addToast(opts[bi])
    },
    htmlCode:
`<button type="button" class="btn btn-primary" id="toast-default">Default</button>
<button type="button" class="btn btn-success" id="toast-success">Success</button>
<button type="button" class="btn btn-warning" id="toast-warning">Warning</button>
<button type="button" class="btn btn-danger"  id="toast-error">Error</button>`,
    jsCode:
`// Default
document.getElementById("toast-default").addEventListener("click", function () {
  Toastify({
    text: "Welcome Back! This is a Toast Notification",
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    className: "primary"
  }).showToast();
});

// Success
document.getElementById("toast-success").addEventListener("click", function () {
  Toastify({
    text: "Your application was successfully sent",
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    className: "success"
  }).showToast();
});

// Warning
document.getElementById("toast-warning").addEventListener("click", function () {
  Toastify({
    text: "Warning! Something went wrong try again",
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    className: "warning"
  }).showToast();
});

// Error
document.getElementById("toast-error").addEventListener("click", function () {
  Toastify({
    text: "Error! An error occurred.",
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    className: "danger"
  }).showToast();
});`
  },
  {
    id: 'section-position',
    title: 'Display Position Example',
    desc: 'Top Left | Top Center | Top Right | Bottom Left | Bottom Center | Bottom Right',
    buttons: [
      { label: 'Top Left',      cls: 'btn btn-outline-secondary' },
      { label: 'Top Center',    cls: 'btn btn-outline-secondary' },
      { label: 'Top Right',     cls: 'btn btn-outline-secondary' },
      { label: 'Bottom Left',   cls: 'btn btn-outline-secondary' },
      { label: 'Bottom Center', cls: 'btn btn-outline-secondary' },
      { label: 'Bottom Right',  cls: 'btn btn-outline-secondary' },
    ],
    fire(bi) {
      const opts = [
        { message: 'Welcome Back! This is a Toast Notification', type: 'default', position: 'top-left',      duration: 3000, showClose: true },
        { message: 'Welcome Back! This is a Toast Notification', type: 'default', position: 'top-center',    duration: 3000, showClose: true },
        { message: 'Welcome Back! This is a Toast Notification', type: 'default', position: 'top-right',     duration: 3000, showClose: true },
        { message: 'Welcome Back! This is a Toast Notification', type: 'default', position: 'bottom-left',   duration: 3000, showClose: true },
        { message: 'Welcome Back! This is a Toast Notification', type: 'default', position: 'bottom-center', duration: 3000, showClose: true },
        { message: 'Welcome Back! This is a Toast Notification', type: 'default', position: 'bottom-right',  duration: 3000, showClose: true },
      ]
      addToast(opts[bi])
    },
    htmlCode:
`<button type="button" class="btn btn-outline-secondary" id="toast-top-left">Top Left</button>
<button type="button" class="btn btn-outline-secondary" id="toast-top-center">Top Center</button>
<button type="button" class="btn btn-outline-secondary" id="toast-top-right">Top Right</button>
<button type="button" class="btn btn-outline-secondary" id="toast-bottom-left">Bottom Left</button>
<button type="button" class="btn btn-outline-secondary" id="toast-bottom-center">Bottom Center</button>
<button type="button" class="btn btn-outline-secondary" id="toast-bottom-right">Bottom Right</button>`,
    jsCode:
`document.getElementById("toast-top-left").addEventListener("click", function () {
  Toastify({ text: "Welcome Back! This is a Toast Notification", duration: 3000, gravity: "top", position: "left", close: true }).showToast();
});
document.getElementById("toast-top-center").addEventListener("click", function () {
  Toastify({ text: "Welcome Back! This is a Toast Notification", duration: 3000, gravity: "top", position: "center", close: true }).showToast();
});
document.getElementById("toast-top-right").addEventListener("click", function () {
  Toastify({ text: "Welcome Back! This is a Toast Notification", duration: 3000, gravity: "top", position: "right", close: true }).showToast();
});
document.getElementById("toast-bottom-left").addEventListener("click", function () {
  Toastify({ text: "Welcome Back! This is a Toast Notification", duration: 3000, gravity: "bottom", position: "left", close: true }).showToast();
});
document.getElementById("toast-bottom-center").addEventListener("click", function () {
  Toastify({ text: "Welcome Back! This is a Toast Notification", duration: 3000, gravity: "bottom", position: "center", close: true }).showToast();
});
document.getElementById("toast-bottom-right").addEventListener("click", function () {
  Toastify({ text: "Welcome Back! This is a Toast Notification", duration: 3000, gravity: "bottom", position: "right", close: true }).showToast();
});`
  },
  {
    id: 'section-offset',
    title: 'Offset, Close Button & Duration Example',
    desc: 'Offset Position | Close Icon Display | Duration',
    buttons: [
      { label: 'Offset Position',    cls: 'btn btn-outline-secondary px-4' },
      { label: 'Close Icon Display', cls: 'btn btn-outline-secondary px-4' },
      { label: 'Duration 5s',        cls: 'btn btn-outline-secondary px-4' },
    ],
    fire(bi) {
      const opts = [
        { message: 'Offset Position Example (X: 50px, Y: 30px)', type: 'default', position: 'top-left',     duration: 4000, showClose: true, offsetX: 50, offsetY: 30 },
        { message: 'This toast includes a close icon — click ✖ to dismiss', type: 'success', position: 'top-right', duration: 4000, showClose: true },
        { message: 'This toast will disappear after 5 seconds',  type: 'warning', position: 'bottom-center', duration: 5000, showClose: true },
      ]
      addToast(opts[bi])
    },
    htmlCode:
`<button type="button" class="btn btn-outline-secondary" id="toast-offset">Offset Position</button>
<button type="button" class="btn btn-outline-secondary" id="toast-close">Close Icon Display</button>
<button type="button" class="btn btn-outline-secondary" id="toast-duration">Duration 5s</button>`,
    jsCode:
`// Offset Position
document.getElementById("toast-offset").addEventListener("click", function () {
  Toastify({
    text: "Offset Position Example (X: 50px, Y: 30px)",
    duration: 4000,
    gravity: "top",
    position: "left",
    close: true,
    offset: { x: 50, y: 30 }
  }).showToast();
});

// Close Icon Display
document.getElementById("toast-close").addEventListener("click", function () {
  Toastify({
    text: "This toast includes a close icon — click ✖ to dismiss",
    duration: 4000,
    gravity: "top",
    position: "right",
    close: true
  }).showToast();
});

// Duration 5s
document.getElementById("toast-duration").addEventListener("click", function () {
  Toastify({
    text: "This toast will disappear after 5 seconds",
    duration: 5000,
    gravity: "bottom",
    position: "center",
    close: true
  }).showToast();
});`
  },
]

sections.forEach((_, i) => { activeTab[i] = 'html' })

async function copyCode(index) {
  const TOASTIFY_CDN = `<!-- Add to your <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.css" />
<script src="https://cdn.jsdelivr.net/npm/toastify-js"><\/script>

`
  const rawCode = activeTab[index] === 'html' ? sections[index].htmlCode : sections[index].jsCode
  // Prepend CDN comment to JS tab so users know what library is needed
  const code = activeTab[index] === 'js' ? TOASTIFY_CDN + rawCode : rawCode
  try { await navigator.clipboard.writeText(code) } catch {
    const ta = document.createElement('textarea')
    ta.value = code; document.body.appendChild(ta); ta.select()
    document.execCommand('copy'); document.body.removeChild(ta)
  }
  copiedIndex.value = index
  setTimeout(() => { copiedIndex.value = null }, 2000)
}

function scrollTo(id) {
  activeId.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.page-wrapper-adv { padding: 1.5rem 1rem; min-height: 100vh; background: var(--bg-body); color: var(--text-primary); }

.toc-link { color: var(--text-secondary, #495057); border-left: 2px solid transparent; transition: all 0.15s; }
.toc-link:hover { color: var(--accent, #fd7e14); background-color: var(--accent-muted, #fff3e8); border-left-color: var(--accent, #fd7e14); }
.toc-active { color: var(--accent, #fd7e14) !important; background-color: var(--accent-muted, #fff3e8); border-left: 2px solid var(--accent, #fd7e14); }

/* Code block */
.code-block { border: 1px solid var(--card-border, #eef2f7); transition: border-color 0.2s; }
.code-header { background: var(--app-bg, #f3f4f9); border-bottom: 1px solid var(--card-border, #eef2f7); transition: background 0.2s, border-color 0.2s; }
.code-tab { font-size: 0.72rem; border-radius: 5px; padding: 0.25rem 0.75rem; background: transparent; color: var(--text-secondary, #6c757d); border: none; transition: all 0.15s; }
.code-tab:hover { background: var(--card-bg, #fff); color: var(--text-primary, #313a46); }
.code-tab-active { background: var(--accent, #fd7e14) !important; color: #fff !important; }
.code-copy-btn { font-size: 0.72rem; padding: 0.25rem 0.65rem; background: var(--card-bg, #fff); border: 1px solid var(--card-border, #eef2f7); color: var(--text-secondary, #6c757d); border-radius: 5px; transition: all 0.15s; display: inline-flex; align-items: center; gap: 4px; }
.code-copy-btn:hover { border-color: var(--accent, #fd7e14); color: var(--accent, #fd7e14); }
.code-copy-btn.copied { border-color: var(--success, #2ecc71); color: var(--success, #2ecc71); background: var(--success-muted, #d4edda); }
.code-copy-btn i { font-size: 13px; }
.code-body { background: var(--app-bg, #f3f4f9); overflow-x: auto; max-height: 320px; transition: background 0.2s; }
.code-pre { padding: 1rem 1.25rem; font-size: 0.76rem; color: var(--text-secondary, #6c757d); font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace; line-height: 1.75; white-space: pre; margin: 0; overflow-wrap: normal; word-break: normal; }

/* Toast containers */
.toast-container { position: fixed; z-index: 1090; display: flex; flex-direction: column; pointer-events: none; max-width: 380px; min-width: 260px; }
.toast-stack { display: flex; flex-direction: column; gap: 0.75rem; }
.toast-top-left    { top: 20px; left: 20px; }
.toast-top-center  { top: 20px; left: 50%; transform: translateX(-50%); }
.toast-top-right   { top: 20px; right: 20px; }
.toast-bottom-left    { bottom: 20px; left: 20px; }
.toast-bottom-center  { bottom: 20px; left: 50%; transform: translateX(-50%); }
.toast-bottom-right   { bottom: 20px; right: 20px; }

.toast-item { pointer-events: auto; background: var(--card-bg, rgba(255,255,255,0.96)); border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); border: 1px solid var(--card-border, rgba(255,255,255,0.5)); width: 100%; }
.toast-default { border-left: 4px solid #3b82f6; }
.toast-success { border-left: 4px solid #10b981; }
.toast-warning { border-left: 4px solid #f59e0b; }
.toast-error   { border-left: 4px solid #ef4444; }
.toast-content { display: flex; align-items: center; gap: 12px; padding: 12px 16px; }
.toast-message { font-weight: 500; font-size: 0.88rem; line-height: 1.4; color: var(--text-primary, #1e293b); flex: 1; }
.toast-close-btn { background: transparent; border: none; cursor: pointer; color: var(--text-muted, #94a3b8); width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.15s; }
.toast-close-btn:hover { background: var(--app-bg, #f1f5f9); color: var(--text-primary, #0f172a); }

.toast-enter-active, .toast-leave-active { transition: all 0.25s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(20px); }
.toast-top-left .toast-enter-from, .toast-bottom-left .toast-enter-from { transform: translateX(-20px); }
.toast-top-center .toast-enter-from, .toast-bottom-center .toast-enter-from { transform: translateY(-15px); }

/* Dark mode */
:global([data-theme="dark"]) .code-block { border-color: var(--border-color) !important; }
:global([data-theme="dark"]) .code-header { background: var(--app-bg) !important; border-color: var(--border-color) !important; }
:global([data-theme="dark"]) .code-body { background: var(--app-bg) !important; }
:global([data-theme="dark"]) .code-pre { color: #c9d1d9 !important; }
:global([data-theme="dark"]) .code-copy-btn { background: var(--card-bg) !important; border-color: var(--border-color) !important; color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .code-copy-btn:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
:global([data-theme="dark"]) .toast-item { background: rgba(30,41,59,0.96) !important; border-color: rgba(255,255,255,0.1) !important; }
:global([data-theme="dark"]) .toast-message { color: #e2e8f0 !important; }
</style>
