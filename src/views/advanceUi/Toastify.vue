<template>
  <div class="toastify-page">
    <!-- Overview Section -->
    <div class="row g-4">
      <div class="col-12">
        <div class="card shadow-sm border-0 rounded-4">
          <div class="card-body p-4">
            <div class="d-flex flex-wrap align-items-start justify-content-between gap-3">
              <div>
                <h1 class="h3 fw-semibold mb-2">Toastify</h1>
                <p class="text-muted mb-1">Rater js is the best star rater for the browser. No dependencies. Unlimited number of stars</p>
                <p class="text-muted small mb-0">Toastify-js's Javascript files are bundled in the vendor.js and globally included in all pages.</p>
              </div>
              <a href="https://apvarun.github.io/toastify-js/" target="_blank" class="btn btn-outline-primary rounded-pill px-4">
                <i class="bi bi-box-arrow-up-right me-1"></i> Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Basic Toastify JS Example -->
    <div class="row g-4 mt-3">
      <div class="col-12">
        <div class="card shadow-sm border-0 rounded-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-2">Basic Toastify JS Example</h5>
            <p class="text-muted small mb-3">Default | Success | Warning | Error</p>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <button @click="showToast('default')" class="btn btn-primary px-4">Default</button>
              <button @click="showToast('success')" class="btn btn-success px-4">Success</button>
              <button @click="showToast('warning')" class="btn btn-warning px-4">Warning</button>
              <button @click="showToast('error')" class="btn btn-danger px-4">Error</button>
            </div>

            <!-- Code Preview -->
            <div class="code-preview position-relative mt-3">
              <pre class="bg-light p-3 rounded-3 mb-0 overflow-auto"><code>{{ basicCodeSnippet }}</code></pre>
              <button @click="copyCode('basic')" class="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2">
                <i class="bi bi-files me-1"></i> Copy
              </button>
              <div v-if="copied.basic" class="copy-feedback badge bg-success position-absolute top-0 end-0 mt-2 me-5">Copied!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Display Position Example -->
    <div class="row g-4 mt-3">
      <div class="col-12">
        <div class="card shadow-sm border-0 rounded-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-2">Display Position Example</h5>
            <p class="text-muted small mb-3">Top Left | Top Center | Top Right | Bottom Left | Bottom Center | Bottom Right</p>
            <div class="row g-2 mb-4">
              <div class="col-md-2 col-sm-4 col-6">
                <button @click="showPositionToast('top-left')" class="btn btn-outline-secondary w-100">Top Left</button>
              </div>
              <div class="col-md-2 col-sm-4 col-6">
                <button @click="showPositionToast('top-center')" class="btn btn-outline-secondary w-100">Top Center</button>
              </div>
              <div class="col-md-2 col-sm-4 col-6">
                <button @click="showPositionToast('top-right')" class="btn btn-outline-secondary w-100">Top Right</button>
              </div>
              <div class="col-md-2 col-sm-4 col-6">
                <button @click="showPositionToast('bottom-left')" class="btn btn-outline-secondary w-100">Bottom Left</button>
              </div>
              <div class="col-md-2 col-sm-4 col-6">
                <button @click="showPositionToast('bottom-center')" class="btn btn-outline-secondary w-100">Bottom Center</button>
              </div>
              <div class="col-md-2 col-sm-4 col-6">
                <button @click="showPositionToast('bottom-right')" class="btn btn-outline-secondary w-100">Bottom Right</button>
              </div>
            </div>

            <!-- Code Preview -->
            <div class="code-preview position-relative mt-3">
              <pre class="bg-light p-3 rounded-3 mb-0 overflow-auto"><code>{{ positionCodeSnippet }}</code></pre>
              <button @click="copyCode('position')" class="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2">
                <i class="bi bi-files me-1"></i> Copy
              </button>
              <div v-if="copied.position" class="copy-feedback badge bg-success position-absolute top-0 end-0 mt-2 me-5">Copied!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Offset, Close Button & Duration Example -->
    <div class="row g-4 mt-3">
      <div class="col-12">
        <div class="card shadow-sm border-0 rounded-4">
          <div class="card-body p-4">
            <h5 class="card-title fw-semibold mb-2">Offset, Close Button & Duration Example</h5>
            <p class="text-muted small mb-3">Offset Position | Close Icon Display | Duration</p>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <button @click="showOffsetToast" class="btn btn-outline-secondary px-4">Offset Position</button>
              <button @click="showCloseIconToast" class="btn btn-outline-secondary px-4">Close Icon Display</button>
              <button @click="showDurationToast" class="btn btn-outline-secondary px-4">Duration 5s</button>
            </div>

            <!-- Code Preview -->
            <div class="code-preview position-relative mt-3">
              <pre class="bg-light p-3 rounded-3 mb-0 overflow-auto"><code>{{ offsetCodeSnippet }}</code></pre>
              <button @click="copyCode('offset')" class="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2">
                <i class="bi bi-files me-1"></i> Copy
              </button>
              <div v-if="copied.offset" class="copy-feedback badge bg-success position-absolute top-0 end-0 mt-2 me-5">Copied!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Containers for each position -->
    <div v-for="pos in positions" :key="pos" class="toast-container" :class="`toast-${pos}`">
      <TransitionGroup name="toast" tag="div" class="toast-stack">
        <div v-for="toast in getToastsByPosition(pos)" :key="toast.id" class="toast-item mb-2" :class="`toast-${toast.type}`" :style="toast.offsetStyle">
          <div class="toast-content">
            <div class="toast-icon">
              <i v-if="toast.type === 'success'" class="bi bi-check-circle-fill text-success fs-5"></i>
              <i v-else-if="toast.type === 'warning'" class="bi bi-exclamation-triangle-fill text-warning fs-5"></i>
              <i v-else-if="toast.type === 'error'" class="bi bi-x-circle-fill text-danger fs-5"></i>
              <i v-else class="bi bi-bell-fill text-primary fs-5"></i>
            </div>
            <div class="toast-message flex-grow-1">{{ toast.message }}</div>
            <button v-if="toast.showClose" @click="removeToast(toast.id)" class="toast-close-btn">
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
import PageFooter from '../../components/layout/Footer.vue'
import { ref, reactive } from 'vue'

// --- Toast State ---
const toasts = ref([])
let nextId = 1

// Available positions
const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']

// Helper to filter toasts by position
const getToastsByPosition = (position) => {
  return toasts.value.filter(t => t.position === position)
}

// Add toast with full options
const addToast = ({ message, type = 'default', position = 'top-right', duration = 3000, showClose = true, offsetX = 0, offsetY = 0 }) => {
  const id = nextId++
  let offsetStyle = {}
  if (offsetX || offsetY) {
    offsetStyle = { marginLeft: `${offsetX}px`, marginTop: `${offsetY}px` }
  }
  const toast = {
    id,
    message,
    type,
    position,
    duration,
    showClose,
    offsetStyle,
    timeout: null
  }
  toasts.value.push(toast)
  
  // Auto dismiss
  toast.timeout = setTimeout(() => {
    removeToast(id)
  }, duration)
  
  return id
}

const removeToast = (id) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index !== -1) {
    const toast = toasts.value[index]
    if (toast.timeout) clearTimeout(toast.timeout)
    toasts.value.splice(index, 1)
  }
}

// --- Toast Demos ---
// Basic types
const showToast = (type) => {
  const messages = {
    default: 'Welcome Back! This is a Toast Notification Default',
    success: 'Success! Operation completed successfully.',
    warning: 'Warning! Something went wrong. Please check.',
    error: 'Error! Something went wrong.'
  }
  addToast({
    message: messages[type],
    type: type,
    position: 'top-right',
    duration: 3000,
    showClose: true
  })
}

// Position demo
const showPositionToast = (position) => {
  const posName = position.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
  addToast({
    message: `Welcome Back! This is a Toast Notification ${posName}`,
    type: 'default',
    position: position,
    duration: 3000,
    showClose: true
  })
}

// Offset demo (with custom x,y)
const showOffsetToast = () => {
  addToast({
    message: 'Offset Position Example (X: 50px, Y: 30px)',
    type: 'default',
    position: 'top-left',
    duration: 4000,
    showClose: true,
    offsetX: 50,
    offsetY: 30
  })
}

// Close icon demo (always true, but we explicitly ensure showClose)
const showCloseIconToast = () => {
  addToast({
    message: 'This toast includes a close icon — click the ✖ to dismiss',
    type: 'success',
    position: 'top-right',
    duration: 4000,
    showClose: true
  })
}

// Duration demo (5 seconds)
const showDurationToast = () => {
  addToast({
    message: 'This toast will disappear after 5 seconds (Duration demo)',
    type: 'warning',
    position: 'bottom-center',
    duration: 5000,
    showClose: true
  })
}

// --- Copy Code Snippets with Feedback ---
const basicCodeSnippet = `<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notif Default">Default</button>
<button type="button" data-toast data-toast-text="Success! Operation completed." data-toast-type="success">Success</button>
<button type="button" data-toast data-toast-text="Warning! Something went wrong." data-toast-type="warning">Warning</button>
<button type="button" data-toast data-toast-text="Error! Something went wrong." data-toast-type="error">Error</button>`

const positionCodeSnippet = `<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notif Top Left" data-toast-position="top-left">Top Left</button>
<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notif Top Center" data-toast-position="top-center">Top Center</button>
<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notif Top Right" data-toast-position="top-right">Top Right</button>
<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notif Bottom Left" data-toast-position="bottom-left">Bottom Left</button>
<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notif Bottom Center" data-toast-position="bottom-center">Bottom Center</button>
<button type="button" data-toast data-toast-text="Welcome Back! This is a Toast Notif Bottom Right" data-toast-position="bottom-right">Bottom Right</button>`

const offsetCodeSnippet = `<button type="button" data-toast data-toast-text="Offset Position Demo" data-toast-offset='{"x":50,"y":30}'>Offset Position</button>
<button type="button" data-toast data-toast-text="Close Icon Display Demo" data-toast-close="true">Close Icon Display</button>
<button type="button" data-toast data-toast-text="Duration 5s Demo" data-toast-duration="5000">Duration 5s</button>`

const copied = reactive({
  basic: false,
  position: false,
  offset: false
})

const copyCode = async (section) => {
  let text = ''
  if (section === 'basic') text = basicCodeSnippet
  else if (section === 'position') text = positionCodeSnippet
  else text = offsetCodeSnippet
  
  try {
    await navigator.clipboard.writeText(text)
    copied[section] = true
    setTimeout(() => {
      copied[section] = false
    }, 2000)
  } catch (err) {
    console.error('Copy failed', err)
  }
}
</script>

<style scoped>
.toastify-page {
  padding: 1.5rem;
  background: #f8fafc;
  min-height: 100vh;
}

/* Card styling */
.card {
  transition: all 0.2s ease;
  border-radius: 1rem;
}
.card:hover {
  transform: translateY(-2px);
}

/* Code preview */
.code-preview pre {
  background: #f1f5f9 !important;
  font-size: 0.8rem;
  border: 1px solid #e2e8f0;
  font-family: 'SF Mono', 'Menlo', monospace;
}
.copy-feedback {
  animation: fadeOut 2s forwards;
  pointer-events: none;
}
@keyframes fadeOut {
  0% { opacity: 1; }
  70% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
}

/* Toast Containers */
.toast-container {
  position: fixed;
  z-index: 1090;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  max-width: 380px;
  width: auto;
  min-width: 260px;
}
.toast-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Positions */
.toast-top-left {
  top: 20px;
  left: 20px;
}
.toast-top-center {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.toast-top-right {
  top: 20px;
  right: 20px;
}
.toast-bottom-left {
  bottom: 20px;
  left: 20px;
}
.toast-bottom-center {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.toast-bottom-right {
  bottom: 20px;
  right: 20px;
}

/* Toast Item */
.toast-item {
  pointer-events: auto;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.96);
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
  width: 100%;
}
.toast-default {
  border-left: 5px solid #3b82f6;
}
.toast-success {
  border-left: 5px solid #10b981;
  background: rgba(240, 253, 244, 0.96);
}
.toast-warning {
  border-left: 5px solid #f59e0b;
  background: rgba(254, 252, 232, 0.96);
}
.toast-error {
  border-left: 5px solid #ef4444;
  background: rgba(254, 242, 242, 0.96);
}
.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
}
.toast-message {
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #1e293b;
}
.toast-close-btn {
  background: transparent;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #94a3b8;
  transition: all 0.2s;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
}
.toast-close-btn:hover {
  background: #f1f5f9;
  color: #0f172a;
}

/* Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.toast-top-left .toast-enter-from,
.toast-bottom-left .toast-enter-from {
  transform: translateX(-20px);
}
.toast-top-center .toast-enter-from,
.toast-bottom-center .toast-enter-from {
  transform: translateY(-15px);
}

/* Responsive */
@media (max-width: 576px) {
  .toast-container {
    max-width: calc(100% - 40px);
    left: 20px !important;
    right: 20px !important;
    transform: none !important;
  }
  .toast-top-center, .toast-bottom-center {
    left: 20px;
    right: 20px;
    transform: none;
  }
}

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .code-preview pre {
  background: var(--app-bg) !important;
  color: #c9d1d9 !important;
}
</style>