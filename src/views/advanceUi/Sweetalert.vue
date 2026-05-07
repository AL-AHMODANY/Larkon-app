<template>
  <div class="page-wrapper-adv" style="min-height: 100vh;">
    <CdnSection />
    <div class="container-fluid">

      <!-- Page Title -->
      <div class="mb-4">
        <p class="text-uppercase fw-bold mb-0" style="letter-spacing: 0.12em; font-size: 0.72rem; color: #6c757d;">Sweet Alert</p>
      </div>

      <div class="row g-4">
        <!-- Main Content -->
        <div class="col-lg-9">

          <!-- Overview Card -->
          <div id="section-overview" class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="d-flex align-items-start justify-content-between">
                <div>
                  <h6 class="fw-bold mb-1" style="color: #1a1e2c;">Overview</h6>
                  <p class="text-muted mb-3" style="font-size: 0.84rem;">
                    A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes
                  </p>
                  <h6 class="fw-bold mb-1" style="color: #1a1e2c;">Usage</h6>
                  <p class="text-muted mb-0" style="font-size: 0.84rem;">
                    Sweetalert2's CSS and Javascript files are bundled in the
                    <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;">vendor.min.css</a>
                    and
                    <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;">vendor.js</a>
                    and globally included in all pages.
                  </p>
                </div>
                <a
                  href="https://sweetalert2.github.io"
                  target="_blank"
                  class="btn btn-outline-success btn-sm ms-4 text-nowrap"
                  style="font-size:0.78rem; border-radius:6px;"
                >Official Website</a>
              </div>
            </div>
          </div>

          <!-- Section Cards -->
          <div
            v-for="(section, index) in sections"
            :key="section.id"
            :id="section.id"
            class="card border-0 shadow-sm rounded-3 mb-4"
          >
            <div class="card-body p-4">
              <h5 class="fw-semibold mb-3" style="font-size: 0.97rem; color: #1a1e2c;">{{ section.title }}</h5>

              <!-- Demo Buttons -->
              <div class="d-flex flex-wrap gap-2 mb-3">
                <button
                  v-for="(btn, bi) in section.buttons"
                  :key="bi"
                  :class="`btn btn-${btn.variant}`"
                  style="font-size: 0.84rem; border-radius: 6px; padding: 0.45rem 1.1rem;"
                  @click="fireAlert(section.id, bi)"
                >{{ btn.label }}</button>
              </div>

              <!-- Code Tabs -->
              <div class="code-block rounded-3 overflow-hidden border">
                <div class="code-header d-flex align-items-center justify-content-between px-3 py-2">
                  <div class="d-flex gap-1">
                    <button
                      class="btn btn-sm fw-semibold code-tab"
                      :class="activeTab[index] === 'html' ? 'code-tab-active' : ''"
                      @click="activeTab[index] = 'html'"
                    >HTML</button>
                    <button
                      class="btn btn-sm fw-semibold code-tab"
                      :class="activeTab[index] === 'js' ? 'code-tab-active' : ''"
                      @click="activeTab[index] = 'js'"
                    >JAVASCRIPT</button>
                  </div>
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
                  <pre class="code-pre mb-0">{{ activeTab[index] === 'html' ? section.htmlCode : section.jsCode }}</pre>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- TOC Sidebar -->
        <div class="col-lg-3 d-none d-lg-block">
          <div class="card border-0 shadow-sm rounded-3" style="position: sticky; top: 1.5rem;">
            <div class="card-body p-3">
              <a
                href="javascript:void(0)"
                class="d-block text-decoration-none py-1 px-3 mb-1 toc-link"
                :class="{ 'toc-active': activeId === 'section-overview' }"
                style="font-size: 0.82rem; border-radius: 6px;"
                @click="scrollToSection('section-overview')"
              >Overview</a>
              <a
                v-for="section in sections"
                :key="section.id"
                href="javascript:void(0)"
                class="d-block text-decoration-none py-1 px-3 mb-1 toc-link"
                :class="{ 'toc-active': activeId === section.id }"
                style="font-size: 0.82rem; border-radius: 6px;"
                @click="scrollToSection(section.id)"
              >{{ section.title }}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
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
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'

const activeId = ref('section-overview')
const copiedIndex = ref(null)
const activeTab = reactive({})

const sections = [
  {
    id: 'section-basic',
    title: 'Basic',
    buttons: [{ label: 'Click me', variant: 'primary' }],
    htmlCode: `<button type="button" class="btn btn-primary" id="sweetalert-basic">Click me</button>`,
    jsCode: `document.getElementById("sweetalert-basic").addEventListener("click", function () {
  Swal.fire({
    title: 'Any fool can use a computer',
    confirmButtonClass: 'btn btn-primary w-xs mt-2',
    buttonsStyling: false,
    showCloseButton: true
  })
});`,
    fire: () => Swal.fire({
      title: 'Any fool can use a computer',
      confirmButtonClass: 'btn btn-primary w-xs mt-2',
      buttonsStyling: false,
      showCloseButton: true
    })
  },
  {
    id: 'section-title',
    title: 'A Title with a Text Under',
    buttons: [{ label: 'Click me', variant: 'primary' }],
    htmlCode: `<button type="button" class="btn btn-primary" id="sweetalert-title">Click me</button>`,
    jsCode: `document.getElementById("sweetalert-title").addEventListener("click", function () {
  Swal.fire({
    title: "The Internet?",
    text: 'That thing is still around?',
    icon: 'question',
    confirmButtonClass: 'btn btn-primary w-xs mt-2',
    buttonsStyling: false,
    showCloseButton: false
  })
});`,
    fire: () => Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      confirmButtonClass: 'btn btn-primary w-xs mt-2',
      buttonsStyling: false,
      showCloseButton: false
    })
  },
  {
    id: 'section-message',
    title: 'Message',
    buttons: [
      { label: 'Success', variant: 'success' },
      { label: 'Warning', variant: 'warning' },
      { label: 'Info',    variant: 'info'    },
      { label: 'Error',   variant: 'danger'  },
    ],
    htmlCode: `<button type="button" class="btn btn-success" id="sweetalert-success">Success</button>
<button type="button" class="btn btn-warning" id="sweetalert-warning">Warning</button>
<button type="button" class="btn btn-info"    id="sweetalert-info">Info</button>
<button type="button" class="btn btn-danger"  id="sweetalert-error">Error</button>`,
    jsCode: `// Success
document.getElementById("sweetalert-success").addEventListener("click", function () {
  Swal.fire({
    title: 'Good job!',
    text: 'You clicked the button!',
    icon: 'success',
    showCancelButton: true,
    confirmButtonClass: 'btn btn-primary w-xs me-2 mt-2',
    cancelButtonClass: 'btn btn-danger w-xs mt-2',
    buttonsStyling: false
  })
});

// Warning
document.getElementById("sweetalert-warning").addEventListener("click", function () {
  Swal.fire({
    title: 'Oops...',
    text: 'Something went wrong!',
    icon: 'warning',
    confirmButtonClass: 'btn btn-primary w-xs mt-2',
    buttonsStyling: false,
    footer: '<a href="">Why do I have this issue?</a>'
  })
});

// Info
document.getElementById("sweetalert-info").addEventListener("click", function () {
  Swal.fire({
    title: 'Oops...',
    text: 'Something went wrong!',
    icon: 'info',
    confirmButtonClass: 'btn btn-primary w-xs mt-2',
    buttonsStyling: false,
    footer: '<a href="">Why do I have this issue?</a>'
  })
});

// Error
document.getElementById("sweetalert-error").addEventListener("click", function () {
  Swal.fire({
    title: 'Oops...',
    text: 'Something went wrong!',
    icon: 'error',
    confirmButtonClass: 'btn btn-primary w-xs mt-2',
    buttonsStyling: false,
    footer: '<a href="">Why do I have this issue?</a>'
  })
});`,
    fire: (btnIndex) => {
      const configs = [
        { title: 'Good job!', text: 'You clicked the button!', icon: 'success', showCancelButton: true, confirmButtonClass: 'btn btn-primary w-xs me-2 mt-2', cancelButtonClass: 'btn btn-danger w-xs mt-2', buttonsStyling: false },
        { title: 'Oops...', text: 'Something went wrong!', icon: 'warning', confirmButtonClass: 'btn btn-primary w-xs mt-2', buttonsStyling: false, footer: '<a href="">Why do I have this issue?</a>' },
        { title: 'Oops...', text: 'Something went wrong!', icon: 'info', confirmButtonClass: 'btn btn-primary w-xs mt-2', buttonsStyling: false, footer: '<a href="">Why do I have this issue?</a>' },
        { title: 'Oops...', text: 'Something went wrong!', icon: 'error', confirmButtonClass: 'btn btn-primary w-xs mt-2', buttonsStyling: false, footer: '<a href="">Why do I have this issue?</a>' },
      ]
      Swal.fire(configs[btnIndex])
    }
  },
  {
    id: 'section-longcontent',
    title: 'Long content Images Message',
    buttons: [{ label: 'Click me', variant: 'primary' }],
    htmlCode: `<button type="button" class="btn btn-primary" id="sweetalert-longcontent">Click me</button>`,
    jsCode: `document.getElementById("sweetalert-longcontent").addEventListener("click", function () {
  Swal.fire({
    imageUrl: 'https://placeholder.pics/svg/300x1500',
    imageHeight: 1500,
    imageAlt: 'A tall image',
    confirmButtonClass: 'btn btn-primary w-xs mt-2',
    buttonsStyling: false
  })
});`,
    fire: () => Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      imageAlt: 'A tall image',
      confirmButtonClass: 'btn btn-primary w-xs mt-2',
      buttonsStyling: false
    })
  },
  {
    id: 'section-params',
    title: 'Parameter',
    buttons: [{ label: 'Click me', variant: 'primary' }],
    htmlCode: `<button type="button" class="btn btn-primary" id="sweetalert-params">Click me</button>`,
    jsCode: `document.getElementById("sweetalert-params").addEventListener("click", function () {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'btn btn-primary w-xs me-2 mt-2',
    cancelButtonClass: 'btn btn-danger w-xs mt-2',
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success',
        confirmButtonClass: 'btn btn-primary w-xs mt-2',
        buttonsStyling: false
      })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error',
        confirmButtonClass: 'btn btn-primary mt-2',
        buttonsStyling: false
      })
    }
  });
});`,
    fire: () => Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-primary w-xs me-2 mt-2',
      cancelButtonClass: 'btn btn-danger w-xs mt-2',
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', confirmButtonClass: 'btn btn-primary w-xs mt-2', buttonsStyling: false })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({ title: 'Cancelled', text: 'Your imaginary file is safe :)', icon: 'error', confirmButtonClass: 'btn btn-primary mt-2', buttonsStyling: false })
      }
    })
  },
]

sections.forEach((_, i) => { activeTab[i] = 'html' })

function fireAlert(sectionId, btnIndex) {
  const section = sections.find(s => s.id === sectionId)
  if (!section) return
  if (typeof section.fire === 'function') {
    section.fire(btnIndex)
  }
}

async function copyCode(index) {
  const code = activeTab[index] === 'html'
    ? sections[index].htmlCode
    : sections[index].jsCode
  try {
    await navigator.clipboard.writeText(code)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = code
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
  color: #4a6cf7 !important;
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
.code-tab {
  font-size: 0.72rem;
  border-radius: 5px;
  padding: 0.25rem 0.75rem;
  background: transparent;
  color: var(--text-secondary, #6c757d);
  border: none;
  transition: all 0.15s;
}
.code-tab:hover {
  background: var(--card-bg, #fff);
  color: var(--text-primary, #313a46);
}
.code-tab-active {
  background: var(--accent, #fd7e14) !important;
  color: #fff !important;
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

/* ── Dark mode overrides ── */
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