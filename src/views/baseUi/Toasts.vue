<template>
  <div class="toasts-page">
    <CdnSection />
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#default" :class="{ active: activeSection === 'default' }">Default Toast</a>
      <a href="#live" :class="{ active: activeSection === 'live' }">Live Toast</a>
      <a href="#translucent" :class="{ active: activeSection === 'translucent' }">Translucent</a>
      <a href="#stacking" :class="{ active: activeSection === 'stacking' }">Stacking</a>
      <a href="#custom" :class="{ active: activeSection === 'custom' }">Custom Content</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">TOASTS</div>

      <div class="doc-section" id="default">
        <h5>Default Toast</h5>
        <p class="desc">Toasts are lightweight notifications designed to mimic the push notifications. They are built with flexbox, so they are easy to align and position.</p>
        <div class="demo-box">
          <div class="toast-container">
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap.default }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="live">
        <h5>Live Toast</h5>
        <p class="desc">Click the button below to see a toast in action.</p>
        <div class="demo-box">
          <div class="toast-container p-3">
            <button type="button" class="btn btn-primary mb-2" @click="showLiveToast">
              Show Live Toast
            </button>
            <div class="toast" id="liveToast" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small>Just now</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap.live }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="translucent">
        <h5>Translucent</h5>
        <p class="desc">Toasts offer some transparency when placed over lighter elements.</p>
        <div class="demo-box bg-dark p-3 rounded">
          <div class="toast-container">
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small class="text-muted">Just now</small>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                See? Just like this.
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap.translucent }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="stacking">
        <h5>Stacking</h5>
        <p class="desc">Toasts are automatically stacked when there are multiple of them.</p>
        <div class="demo-box">
          <div class="toast-container">
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small class="text-muted">just now</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                See? This is a toast message.
              </div>
            </div>
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small class="text-muted">5 seconds ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Heads up, toasts will stack automatically.
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap.stacking }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="custom">
        <h5>Custom Content</h5>
        <p class="desc">If you're okay with different HTML, you can also use more elaborate markup to create custom toast content.</p>
        <div class="demo-box">
          <div class="toast-container">
            <div class="toast show align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="d-flex">
                <div class="toast-body">
                  Hello, world! This is a toast message.
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap.custom }}</code></pre>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref, onMounted } from 'vue'
import Toast from 'bootstrap/js/dist/toast'

const activeSection = ref('default')
let liveToastInstance = null

onMounted(() => {
  const liveToastEl = document.getElementById('liveToast')
  if (liveToastEl) {
    liveToastInstance = new Toast(liveToastEl, { delay: 5000 })
  }
})

const showLiveToast = () => {
  if (liveToastInstance) {
    liveToastInstance.show()
  }
}

const codeMap = {
  default: `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="https://randomuser.me/api/portraits/men/32.jpg"
         class="rounded me-2" alt="User avatar" width="24" height="24">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>`,
  live: `<!-- Trigger button -->
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<!-- Toast -->
<div class="toast" id="liveToast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">Hello, world!</div>
</div>

<script>
var toastEl = document.getElementById('liveToast')
var toast = new bootstrap.Toast(toastEl)
document.getElementById('liveToastBtn').addEventListener('click', function () {
  toast.show()
})
<\/script>`,
  translucent: `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-muted">Just now</small>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">See? Just like this.</div>
</div>`,
  stacking: `<div class="toast-container">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">See? This is a toast message.</div>
  </div>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">5 seconds ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">Heads up, toasts will stack automatically.</div>
  </div>
</div>`,
  custom: `<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">Hello, world! This is a toast message.</div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`,
}

function copyCode(event) {
  const sectionId = event.target.closest('.doc-section')?.id
  navigator.clipboard.writeText(codeMap[sectionId] || '').then(() => {
    event.target.textContent = 'Copied!'
    setTimeout(() => (event.target.textContent = 'Copy'), 1800)
  })
}
</script>

<style scoped>
.toasts-page {
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  color: var(--text-primary);
  position: relative;
}

.right-nav {
  position: fixed;
  top: 80px;
  right: 24px;
  width: 170px;
  font-size: 12px;
}
.right-nav-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}
.right-nav a {
  display: block;
  padding: 3px 0;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.15s;
}
.right-nav a:hover { color: var(--accent); }
.right-nav a.active { color: var(--accent); font-weight: 600; }

.main-content {
  padding: 28px 32px 60px 32px;
  margin-right: 200px;
}
.page-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.doc-section { margin-bottom: 44px; }
.doc-section h5 { font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
.doc-section p.desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.6; }

.demo-box {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2px;
}

.code-box {
  border: 1px solid var(--card-border);
  border-radius: 8px;
  overflow: hidden;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: var(--app-bg);
  border-bottom: 1px solid var(--card-border);
}
.code-lang {
  background: var(--accent); color: #fff;
  font-size: 0.67rem; font-weight: 700;
  padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px;
}
.copy-btn {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 5px;
  font-size: 0.73rem;
  padding: 3px 10px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
pre, pre.code-pre {
  margin: 0;
  padding: 12px 16px;
  overflow-x: auto;
  font-size: 0.73rem;
  line-height: 1.7;
  color: var(--text-secondary);
  background: var(--app-bg);
  max-height: 200px;
  font-family: 'Courier New', monospace;
}
pre.code-pre code {
  display: block;
  white-space: pre;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  padding: 0;
}
pre :deep(.tag)  { color: #e06c75; }
pre :deep(.attr) { color: #d19a66; }
pre :deep(.val)  { color: #98c379; }

.toast-container {
  position: relative;
  padding: 1rem;
}

.toast {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
}

.toast-header {
  background: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  color: var(--text-primary);
}

.toast-body {
  color: var(--text-primary);
}

.toast-header img {
  width: 24px;
  height: 24px;
}

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--accent); text-decoration: none; }
</style>
