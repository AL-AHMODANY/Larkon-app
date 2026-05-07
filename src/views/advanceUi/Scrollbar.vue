<template>
  <div class="page-wrapper-adv" style="min-height: 100vh;">
    <CdnSection />
    <div class="container-fluid">

      <!-- Page Title -->
      <div class="mb-4">
        <p class="text-uppercase text-muted fw-bold mb-0" style="letter-spacing: 0.12em; font-size: 0.72rem;">Scrollbar</p>
      </div>

      <div class="row g-4">
        <!-- Main Content -->
        <div class="col-lg-9">

          <div
            v-for="(section, index) in sections"
            :key="section.id"
            :id="section.id"
            class="card border-0 shadow-sm rounded-3 mb-4"
          >
            <div class="card-body p-4">
              <h5 class="fw-semibold mb-1" style="font-size: 0.97rem; color: #1a1e2c;">
                {{ section.title }}
              </h5>
              <p class="text-muted mb-3" style="font-size: 0.83rem;" v-html="section.description"></p>

              <!-- SimpleBar Live Preview -->
              <div class="border rounded-2 bg-white overflow-hidden mb-3" style="height: 250px;">
                <div
                  :ref="el => { if (el) previewRefs[index] = el }"
                  style="height: 250px; padding: 1.1rem 1.25rem;"
                >
                  <div v-html="section.previewHtml"></div>
                </div>
              </div>

              <!-- Code Block -->
              <div class="code-block rounded-3 overflow-hidden border">
                <div class="code-header d-flex align-items-center justify-content-between px-3 py-2">
                  <span class="code-lang">HTML</span>
                  <button
                    class="btn btn-sm code-copy-btn"
                    :class="copiedIndex === index ? 'copied' : ''"
                    @click="copyCode(index)"
                  >
                    <i :class="copiedIndex === index ? 'bx bx-check' : 'bx bx-copy'"></i>
                    {{ copiedIndex === index ? 'Copied!' : 'Copy' }}
                  </button>
                </div>
                <div class="code-body">
                  <pre class="code-pre mb-0">{{ section.code }}</pre>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Table of Contents -->
        <div class="col-lg-3 d-none d-lg-block">
          <div class="card border-0 shadow-sm rounded-3" style="position: sticky; top: 1.5rem;">
            <div class="card-body p-3">
              <a
                v-for="section in sections"
                :key="section.id"
                href="javascript:void(0)"
                class="d-block text-decoration-none py-1 px-3 mb-1 toc-link"
                :class="{ 'toc-active': activeId === section.id }"
                style="font-size: 0.82rem; border-radius: 6px;"
                @click="scrollToSection(section.id)"
              >
                {{ section.title }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5 pb-3">
        <small class="text-muted">2026 © AL-AHMODANY. Crafted with ❤️ by Techzaa</small>
      </div>

    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref, onMounted, nextTick } from 'vue'
import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.min.css'

const previewRefs = ref([])
const copiedIndex = ref(null)
const activeId = ref('section-default')

const innerHtml = `
  <h6 style="font-size:0.88rem;font-weight:600;color:#1a1e2c;margin:0 0 0.4rem;">Design it as you want</h6>
  <p style="font-size:0.82rem;color:#555;line-height:1.65;margin-bottom:0.9rem;">
    SimpleBar uses pure CSS to style the scrollbar. You can easily customize it as you want!
    Or even have multiple style on the same page...or just keep the default style ("Mac OS" scrollbar style).
  </p>
  <h6 style="font-size:0.88rem;font-weight:600;color:#1a1e2c;margin:0 0 0.4rem;">Lightweight and performant</h6>
  <p style="font-size:0.82rem;color:#555;line-height:1.65;margin-bottom:0.9rem;">
    Only 6kb minified. SimpleBar doesn't use Javascript to handle scrolling.
    You keep the performances/behaviours of the native scroll.
  </p>
  <h6 style="font-size:0.88rem;font-weight:600;color:#1a1e2c;margin:0 0 0.4rem;">Supported everywhere</h6>
  <p style="font-size:0.82rem;color:#555;line-height:1.65;margin-bottom:0.9rem;">
    SimpleBar has been tested on the following browsers: Chrome, Firefox, Safari, Edge, IE 11.
  </p>
  <h6 style="font-size:0.88rem;font-weight:600;color:#1a1e2c;margin:0 0 0.4rem;">Design it as you want</h6>
  <p style="font-size:0.82rem;color:#555;line-height:1.65;margin-bottom:0.9rem;">
    SimpleBar uses pure CSS to style the scrollbar. You can easily customize it as you want!
    Or even have multiple style on the same page...or just keep the default style ("Mac OS" scrollbar style).
  </p>
  <h6 style="font-size:0.88rem;font-weight:600;color:#1a1e2c;margin:0 0 0.4rem;">Lightweight and performant</h6>
  <p style="font-size:0.82rem;color:#555;line-height:1.65;margin-bottom:0;">
    Only 6kb minified. SimpleBar doesn't use Javascript to handle scrolling.
    You keep the performances/behaviours of the native scroll.
  </p>
`

const codeStyle = 'background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;color:#d63384;'

const sections = [
  {
    id: 'section-default',
    title: 'Default Scroll Example',
    description: `Just use data attribute <code style="${codeStyle}">data-simplebar</code> and add <code style="${codeStyle}">max-height: **px</code> oh fix height`,
    previewHtml: innerHtml,
    simplebarOptions: {},
    colorClass: null,
    code: `<div class="px-3" data-simplebar style="max-height: 250px;">
  SimpleBar does only one thing: replace the browser's default scrollbar
  with a custom CSS-styled one without losing performances.
  Unlike some popular plugins, SimpleBar doesn't mimic scroll with
  Javascript, causing janks and strange scrolling behaviours...
  You keep the awesomeness of native scrolling...with a custom scrollbar!
  <p>SimpleBar <strong>does NOT implement a custom scroll
      behaviour</strong>. It keeps the <strong>native</strong>
    <code>overflow: auto</code> scroll and <strong>only</strong> replace
    the scrollbar visual appearance.
  </p>
  <h5>Design it as you want</h5>
  <p>SimpleBar uses pure CSS to style the scrollbar. You can easily
    customize it as you want! Or even have multiple style on the same
    page...or just keep the default style ("Mac OS" scrollbar style).
  </p>
  <h5>Lightweight and performant</h5>
  <p>Only 6kb minified. SimpleBar doesn't use Javascript to handle
    scrolling. You keep the performances/behaviours of the native scroll.</p>
  <h5>Supported everywhere</h5>
  <p>SimpleBar has been tested on the following browsers: Chrome, Firefox,
    Safari, Edge, IE11.</p>
</div>`
  },
  {
    id: 'section-rtl',
    title: 'RTL Position',
    description: `Just use data attribute <code style="${codeStyle}">data-simplebar</code> <code style="${codeStyle}">data-simplebar-direction='rtl'</code> and add <code style="${codeStyle}">max-height: **px</code> oh fix height`,
    previewHtml: innerHtml,
    simplebarOptions: { direction: 'rtl' },
    colorClass: null,
    code: `<div class="px-3" data-simplebar data-simplebar-direction='rtl' style="max-height: 250px;">
  SimpleBar does only one thing: replace the browser's default scrollbar
  with a custom CSS-styled one without losing performances.
  Unlike some popular plugins, SimpleBar doesn't mimic scroll with
  Javascript, causing janks and strange scrolling behaviours...
  You keep the awesomeness of native scrolling...with a custom scrollbar!
  <p>SimpleBar <strong>does NOT implement a custom scroll
      behaviour</strong>. It keeps the <strong>native</strong>
    <code>overflow: auto</code> scroll and <strong>only</strong> replace
    the scrollbar visual appearance.
  </p>
  <h5>Design it as you want</h5>
  <p>SimpleBar uses pure CSS to style the scrollbar. You can easily
    customize it as you want! Or even have multiple style on the same
    page...or just keep the default style ("Mac OS" scrollbar style).
  </p>
  <h5>Lightweight and performant</h5>
  <p>Only 6kb minified. SimpleBar doesn't use Javascript to handle
    scrolling. You keep the performances/behaviours of the native scroll.</p>
  <h5>Supported everywhere</h5>
  <p>SimpleBar has been tested on the following browsers: Chrome, Firefox,
    Safari, Edge, IE11.</p>
</div>`
  },
  {
    id: 'section-size',
    title: 'Scroll Size',
    description: `Just use data attribute <code style="${codeStyle}">data-simplebar</code>, <code style="${codeStyle}">data-simplebar-lg</code> and add <code style="${codeStyle}">max-height: **px</code> oh fix height`,
    previewHtml: innerHtml,
    simplebarOptions: { scrollbarMinSize: 10, scrollbarMaxSize: 10 },
    colorClass: null,
    code: `<div class="px-3" data-simplebar data-simplebar-lg style="max-height: 250px;">
  SimpleBar does only one thing: replace the browser's default scrollbar
  with a custom CSS-styled one without losing performances.
  Unlike some popular plugins, SimpleBar doesn't mimic scroll with
  Javascript, causing janks and strange scrolling behaviours...
  You keep the awesomeness of native scrolling...with a custom scrollbar!
  <p>SimpleBar <strong>does NOT implement a custom scroll
      behaviour</strong>. It keeps the <strong>native</strong>
    <code>overflow: auto</code> scroll and <strong>only</strong> replace
    the scrollbar visual appearance.
  </p>
  <h5>Design it as you want</h5>
  <p>SimpleBar uses pure CSS to style the scrollbar. You can easily
    customize it as you want! Or even have multiple style on the same
    page...or just keep the default style ("Mac OS" scrollbar style).
  </p>
  <h5>Lightweight and performant</h5>
  <p>Only 6kb minified. SimpleBar doesn't use Javascript to handle
    scrolling. You keep the performances/behaviours of the native scroll.</p>
  <h5>Supported everywhere</h5>
  <p>SimpleBar has been tested on the following browsers: Chrome, Firefox,
    Safari, Edge, IE11.</p>
</div>`
  },
  {
    id: 'section-color',
    title: 'Scroll Color',
    description: `Just use data attribute <code style="${codeStyle}">data-simplebar</code> <code style="${codeStyle}">data-simplebar-*</code> and add <code style="${codeStyle}">max-height: **px</code> oh fix height`,
    previewHtml: innerHtml,
    simplebarOptions: {},
    colorClass: 'primary-scrollbar',
    code: `<div class="px-3" data-simplebar data-simplebar-primary style="max-height: 250px;">
  SimpleBar does only one thing: replace the browser's default scrollbar
  with a custom CSS-styled one without losing performances.
  Unlike some popular plugins, SimpleBar doesn't mimic scroll with
  Javascript, causing janks and strange scrolling behaviours...
  You keep the awesomeness of native scrolling...with a custom scrollbar!
  <p>SimpleBar <strong>does NOT implement a custom scroll
      behaviour</strong>. It keeps the <strong>native</strong>
    <code>overflow: auto</code> scroll and <strong>only</strong> replace
    the scrollbar visual appearance.
  </p>
  <h5>Design it as you want</h5>
  <p>SimpleBar uses pure CSS to style the scrollbar. You can easily
    customize it as you want! Or even have multiple style on the same
    page...or just keep the default style ("Mac OS" scrollbar style).
  </p>
  <h5>Lightweight and performant</h5>
  <p>Only 6kb minified. SimpleBar doesn't use Javascript to handle
    scrolling. You keep the performances/behaviours of the native scroll.</p>
  <h5>Supported everywhere</h5>
  <p>SimpleBar has been tested on the following browsers: Chrome, Firefox,
    Safari, Edge, IE11.</p>
</div>`
  }
]

async function copyCode(index) {
  try {
    await navigator.clipboard.writeText(sections[index].code)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = sections[index].code
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copiedIndex.value = index
  setTimeout(() => { copiedIndex.value = null }, 2000)
}

function scrollToSection(id) {
  activeId.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(async () => {
  await nextTick()
  sections.forEach((section, index) => {
    const el = previewRefs.value[index]
    if (el) {
      new SimpleBar(el, { autoHide: false, ...section.simplebarOptions })
      if (section.colorClass) {
        el.classList.add(section.colorClass)
      }
    }
  })
})
</script>

<style scoped>
.page-wrapper-adv { padding: 1.5rem 1rem; min-height: 100vh; background: var(--bg-body); color: var(--text-primary); }
.toc-link {
  color: #495057;
  border-left: 2px solid transparent;
  transition: all 0.15s;
}
.toc-link:hover {
  color: #4a6cf7;
  background-color: #f0f3ff;
  border-left-color: #4a6cf7;
}
.toc-active {
  color: #4a6cf7;
  background-color: #f0f3ff;
  border-left: 2px solid #4a6cf7;
}

/* Code Block Styling */
.code-block {
  border: 1px solid var(--card-border, #eef2f7);
  transition: border-color 0.2s;
}
.code-header {
  background: var(--app-bg, #f3f4f9);
  border-bottom: 1px solid var(--card-border, #eef2f7);
  transition: background 0.2s, border-color 0.2s;
}
.code-lang {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--text-secondary, #6c757d);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.code-copy-btn {
  font-size: 0.72rem;
  padding: 0.25rem 0.65rem;
  background: var(--card-bg, #fff);
  border: 1px solid var(--card-border, #eef2f7);
  color: var(--text-secondary, #6c757d);
  border-radius: 5px;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.code-copy-btn:hover {
  border-color: var(--accent, #fd7e14);
  color: var(--accent, #fd7e14);
}
.code-copy-btn.copied {
  border-color: var(--success, #2ecc71);
  color: var(--success, #2ecc71);
  background: var(--success-muted, #d4edda);
}
.code-copy-btn i {
  font-size: 13px;
}
.code-body {
  background: var(--app-bg, #f3f4f9);
  overflow-x: auto;
  max-height: 280px;
  transition: background 0.2s;
}
.code-pre {
  padding: 1rem 1.25rem;
  font-size: 0.76rem;
  color: var(--text-secondary, #6c757d);
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;
  line-height: 1.75;
  white-space: pre;
  margin: 0;
}

:deep(.simplebar-scrollbar::before) {
  background: #adb5bd;
  opacity: 1 !important;
  border-radius: 4px;
}

:deep(.primary-scrollbar .simplebar-scrollbar::before) {
  background: #4a6cf7 !important;
  opacity: 1 !important;
}

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .border.rounded-2.bg-white {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .code-block {
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .code-header {
  background: var(--app-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .code-body {
  background: var(--app-bg) !important;
}
:global([data-theme="dark"]) .code-pre {
  color: #c9d1d9 !important;
}
:global([data-theme="dark"]) .code-lang {
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .code-copy-btn {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .code-copy-btn:hover {
  border-color: var(--accent) !important;
  color: var(--accent) !important;
}
</style>
