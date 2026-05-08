<template>
  <div class="cdn-block">
    <div class="cdn-block__bar">
      <span class="cdn-block__label">CDN Links</span>
      <button class="cdn-block__copy" @click="copy" :class="{ copied }">
        <i :class="copied ? 'bx bx-check' : 'bx bx-copy'"></i>
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <pre class="cdn-block__pre"><code>{{ links }}</code></pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const copied = ref(false)

const links = `<!-- Bootstrap 5.3 CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

<!-- Bootstrap Icons 1.13 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" />

<!-- Boxicons 2.1 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" />

<!-- Swiper 12 (carousel / slider pages only) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />

<!-- SimpleBar 6 (custom scrollbar pages only) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar@6/dist/simplebar.css" />

<!-- Toastify (toast notification pages only) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.css" />

<!-- Bootstrap JS bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"><\/script>`

function copy() {
  navigator.clipboard.writeText(links).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }).catch(() => {
    const ta = document.createElement('textarea')
    ta.value = links
    ta.style.cssText = 'position:fixed;top:-9999px;opacity:0'
    document.body.appendChild(ta)
    ta.focus(); ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<style scoped>
.cdn-block {
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: border-color .2s;
}

.cdn-block__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: var(--app-bg, #f3f4f9);
  border-bottom: 1px solid var(--card-border, #eef2f7);
  transition: background .2s, border-color .2s;
}

.cdn-block__label {
  background: var(--accent, #fd7e14);
  color: #fff;
  font-size: 0.67rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: .4px;
  text-transform: uppercase;
}

.cdn-block__copy {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--card-bg, #fff);
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 5px;
  font-size: 0.73rem;
  padding: 3px 10px;
  color: var(--text-muted, #8996af);
  cursor: pointer;
  transition: border-color .15s, color .15s, background .15s;
  font-family: inherit;
}
.cdn-block__copy:hover  { border-color: var(--accent, #fd7e14); color: var(--accent, #fd7e14); }
.cdn-block__copy.copied { border-color: #2ecc71; color: #2ecc71; }
.cdn-block__copy i { font-size: 13px; }

.cdn-block__pre {
  margin: 0;
  padding: 14px 16px;
  background: var(--app-bg, #f3f4f9);
  font-size: 0.73rem;
  color: var(--text-secondary, #6c757d);
  line-height: 1.75;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre;
  transition: background .2s, color .2s;
}

.cdn-block__pre code {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  padding: 0;
}

/* Dark mode */
:global([data-theme="dark"]) .cdn-block {
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .cdn-block__bar {
  background: var(--app-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .cdn-block__pre {
  background: var(--app-bg) !important;
  color: #c9d1d9 !important;
}
:global([data-theme="dark"]) .cdn-block__copy {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .cdn-block__copy:hover {
  border-color: var(--accent) !important;
  color: var(--accent) !important;
}
</style>
