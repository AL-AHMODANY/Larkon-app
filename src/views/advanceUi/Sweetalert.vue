<template>
  <div class="py-4 px-3 px-md-4 bg-light" style="min-height: 100vh;">
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
              <div class="rounded-3 overflow-hidden border">
                <div
                  class="d-flex align-items-center justify-content-between px-3 py-2"
                  style="background: #f8f9fa; border-bottom: 1px solid #e9ecef;"
                >
                  <div class="d-flex gap-1">
                    <button
                      class="btn btn-sm fw-semibold"
                      :class="activeTab[index] === 'html' ? 'tab-active' : 'tab-inactive'"
                      style="font-size: 0.72rem; border-radius: 5px; padding: 0.2rem 0.65rem;"
                      @click="activeTab[index] = 'html'"
                    >HTML</button>
                    <button
                      class="btn btn-sm fw-semibold"
                      :class="activeTab[index] === 'js' ? 'tab-active' : 'tab-inactive'"
                      style="font-size: 0.72rem; border-radius: 5px; padding: 0.2rem 0.65rem;"
                      @click="activeTab[index] = 'js'"
                    >JAVASCRIPT</button>
                  </div>
                  <button
                    class="btn btn-sm py-1 px-2"
                    :class="copiedIndex === index ? 'btn-success' : 'btn-outline-secondary'"
                    style="font-size: 0.72rem;"
                    @click="copyCode(index)"
                  >{{ copiedIndex === index ? 'Copied!' : 'Copy' }}</button>
                </div>
                <div style="background: #fff; overflow-x: auto;">
                  <pre
                    class="mb-0 px-3 py-3"
                    style="font-size: 0.76rem; color: #c0392b; font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace; line-height: 1.75; white-space: pre;"
                  >{{ activeTab[index] === 'html' ? section.htmlCode : section.jsCode }}</pre>
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
        <small class="text-muted">2026 © Larkon. Crafted with ❤️ by Techzaa</small>
      </div>

    </div>
  </div>
</template>

<script setup>
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
  Swal.fire("Hello World!");
});`
  },
  {
    id: 'section-title',
    title: 'A Title with a Text Under',
    buttons: [{ label: 'Click me', variant: 'primary' }],
    htmlCode: `<button type="button" class="btn btn-primary" id="sweetalert-title">Click me</button>`,
    jsCode: `document.getElementById("sweetalert-title").addEventListener("click", function () {
  Swal.fire("The Internet?", "That thing is still around?", "question");
});`
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
    jsCode: `document.getElementById("sweetalert-success").addEventListener("click", function () {
  Swal.fire("Good job!", "You clicked the button!", "success");
});
document.getElementById("sweetalert-warning").addEventListener("click", function () {
  Swal.fire("Warning!", "Something looks a bit off...", "warning");
});
document.getElementById("sweetalert-info").addEventListener("click", function () {
  Swal.fire("Info", "Here is some information.", "info");
});
document.getElementById("sweetalert-error").addEventListener("click", function () {
  Swal.fire("Oops...", "Something went wrong!", "error");
});`
  },
  {
    id: 'section-longcontent',
    title: 'Long content Images Message',
    buttons: [{ label: 'Click me', variant: 'primary' }],
    htmlCode: `<button type="button" class="btn btn-primary" id="sweetalert-longcontent">Click me</button>`,
    jsCode: `document.getElementById("sweetalert-longcontent").addEventListener("click", function () {
  Swal.fire({
    imageUrl: "https://placeholder.pics/svg/300x1500",
    imageHeight: 1500,
    imageAlt: "A tall image",
  });
});`
  },
  {
    id: 'section-params',
    title: 'Parameter',
    buttons: [{ label: 'Click me', variant: 'primary' }],
    htmlCode: `<button type="button" class="btn btn-primary" id="sweetalert-params">Click me</button>`,
    jsCode: `document.getElementById("sweetalert-params").addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
});`
  },
]

sections.forEach((_, i) => { activeTab[i] = 'html' })

function fireAlert(sectionId, btnIndex) {
  switch (sectionId) {
    case 'section-basic':
      Swal.fire('Hello World!')
      break

    case 'section-title':
      Swal.fire('The Internet?', 'That thing is still around?', 'question')
      break

    case 'section-message': {
      const types = [
        () => Swal.fire('Good job!', 'You clicked the button!', 'success'),
        () => Swal.fire('Warning!', 'Something looks a bit off...', 'warning'),
        () => Swal.fire('Info', 'Here is some information.', 'info'),
        () => Swal.fire('Oops...', 'Something went wrong!', 'error'),
      ]
      types[btnIndex]?.()
      break
    }

    case 'section-longcontent':
      Swal.fire({
        imageUrl: 'https://picsum.photos/300/600',
        imageHeight: 600,
        imageAlt: 'A long image',
        title: 'Long Content Image',
      })
      break

    case 'section-params':
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
        }
      })
      break
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
.tab-active {
  background: #fd7e14 !important;
  color: #fff !important;
  border: none !important;
}
.tab-inactive {
  background: transparent !important;
  color: #6c757d !important;
  border: none !important;
}
.tab-inactive:hover {
  background: #e9ecef !important;
}
</style>