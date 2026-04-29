<template>
  <div class="page-wrapper-adv" style="min-height: 100vh;">
    <div class="container-fluid">

      <!-- Page Title -->
      <div class="mb-4">
        <p class="text-uppercase fw-bold mb-0" style="letter-spacing: 0.12em; font-size: 0.72rem; color: #6c757d;">Ratings</p>
      </div>

      <div class="row g-4">
        <!-- Main Content -->
        <div class="col-lg-9">

          <!-- Overview Card -->
          <div class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="d-flex align-items-start justify-content-between mb-2">
                <div>
                  <h6 class="fw-bold mb-1" style="color: #1a1e2c;">Overview</h6>
                  <p class="text-muted mb-2" style="font-size: 0.84rem;">
                    Rater js is the best star rater for the browser. No dependencies. Unlimited number of stars
                  </p>
                  <h6 class="fw-bold mb-1" style="color: #1a1e2c;">Usage</h6>
                  <p class="text-muted mb-0" style="font-size: 0.84rem;">
                    Rater js's CSS and Javascript files are bundled in the
                    <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;">vendor.min.css</a>
                    and
                    <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;">vendor.js</a>
                    and globally included in all pages.
                  </p>
                </div>
                <a href="#" class="btn btn-outline-success btn-sm ms-4 text-nowrap" style="font-size:0.78rem; border-radius:6px;">Official Website</a>
              </div>
            </div>
          </div>

          <!-- Rating Section Cards -->
          <div
            v-for="(section, index) in sections"
            :key="section.id"
            :id="section.id"
            class="card border-0 shadow-sm rounded-3 mb-4"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center gap-2 mb-3">
                <h5 class="fw-semibold mb-0" style="font-size: 0.97rem; color: #1a1e2c;">{{ section.title }}</h5>
                <span v-if="section.badge" class="text-muted" style="font-size:0.8rem;">{{ section.badge }}</span>
              </div>

              <!-- Star Rating Preview -->
              <div class="mb-3 d-flex align-items-center gap-2">
                <div class="d-flex align-items-center">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="star-icon"
                    :class="star <= section.rating ? 'filled' : 'empty'"
                    style="font-size: 1.5rem; cursor: pointer; transition: color 0.15s;"
                    @click="!section.readonly && setRating(index, star)"
                    @mouseover="!section.readonly && hoverRating(index, star)"
                    @mouseleave="!section.readonly && resetHover(index)"
                  >★</span>
                </div>
                <button
                  v-if="section.showReset"
                  class="btn btn-light btn-sm ms-2"
                  style="font-size:0.78rem; border-radius:6px;"
                  @click="resetRating(index)"
                >Reset</button>
                <span
                  v-if="section.showHoverNum"
                  class="badge bg-info align-middle ms-1"
                  style="font-size:0.72rem;"
                >{{ section.hoverValue || section.rating }}</span>
              </div>

              <!-- Code Tabs -->
              <div class="rounded-3 overflow-hidden border">
                <!-- Tab Header -->
                <div class="d-flex align-items-center justify-content-between px-3 py-2" style="background: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                  <div class="d-flex gap-0">
                    <button
                      class="btn btn-sm me-1 fw-semibold tab-btn"
                      :class="activeTab[index] === 'html' ? 'tab-active-html' : 'tab-inactive'"
                      style="font-size: 0.72rem; border-radius: 5px; padding: 0.2rem 0.65rem;"
                      @click="activeTab[index] = 'html'"
                    >HTML</button>
                    <button
                      class="btn btn-sm fw-semibold tab-btn"
                      :class="activeTab[index] === 'js' ? 'tab-active-js' : 'tab-inactive'"
                      style="font-size: 0.72rem; border-radius: 5px; padding: 0.2rem 0.65rem;"
                      @click="activeTab[index] = 'js'"
                    >JAVASCRIPT</button>
                  </div>
                  <button
                    class="btn btn-sm btn-outline-secondary py-1 px-2"
                    style="font-size: 0.72rem;"
                    :class="copiedIndex === index ? 'btn-success border-success text-success' : ''"
                    @click="copyCode(index)"
                  >{{ copiedIndex === index ? 'Copied!' : 'Copy' }}</button>
                </div>

                <!-- Code Body -->
                <div style="background: #ffffff; overflow-x: auto; min-height: 52px;">
                  <pre class="mb-0 px-3 py-3" style="font-size: 0.78rem; color: #c0392b; font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace; line-height: 1.75; white-space: pre;">{{ activeTab[index] === 'html' ? section.htmlCode : section.jsCode }}</pre>
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
    <PageFooter />
  </div>
</template>

<script setup>
import PageFooter from '../../components/layout/Footer.vue'
import { ref, reactive, onMounted } from 'vue'

const activeId = ref('section-basic')
const copiedIndex = ref(null)

const activeTab = reactive({})

const sections = reactive([
  {
    id: 'section-basic',
    title: 'Basic Rater Example',
    badge: null,
    rating: 3,
    hoverValue: 0,
    readonly: false,
    showReset: false,
    showHoverNum: false,
    htmlCode: `<div id="basic-rater" dir="ltr"></div>`,
    jsCode: `raterJs({
  element: document.querySelector("#basic-rater"),
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  }
});`
  },
  {
    id: 'section-step',
    title: 'Rater with Step Example',
    badge: null,
    rating: 1,
    hoverValue: 0,
    readonly: false,
    showReset: false,
    showHoverNum: false,
    htmlCode: `<div id="rater-step" dir="ltr"></div>`,
    jsCode: `raterJs({
  element: document.querySelector("#rater-step"),
  step: 0.5,
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  }
});`
  },
  {
    id: 'section-message',
    title: 'Custom Messages Example',
    badge: null,
    rating: 0,
    hoverValue: 0,
    readonly: false,
    showReset: false,
    showHoverNum: false,
    htmlCode: `<div id="rater-message" dir="ltr"></div>`,
    jsCode: `raterJs({
  element: document.querySelector("#rater-message"),
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  },
  starMessages: ["Poor", "Not bad", "Good", "Very good", "Excellent"]
});`
  },
  {
    id: 'section-readonly',
    title: 'ReadOnly Example',
    badge: null,
    rating: 3,
    hoverValue: 0,
    readonly: true,
    showReset: false,
    showHoverNum: false,
    htmlCode: `<div id="rater-unlimitedstar" dir="ltr"></div>`,
    jsCode: `raterJs({
  element: document.querySelector("#rater-unlimitedstar"),
  readOnly: true,
  rating: 3.5,
  starSize: 25
});`
  },
  {
    id: 'section-hover',
    title: 'On Hover Event Example',
    badge: null,
    rating: 1,
    hoverValue: 0,
    readonly: false,
    showReset: false,
    showHoverNum: true,
    htmlCode: `<div dir="ltr">
    <div id="rater-onhover" class="align-middle"></div>
    <span class="ratingnum badge bg-info align-middle ms-2"></span>
</div>`,
    jsCode: `raterJs({
  element: document.querySelector("#rater-onhover"),
  onHover: function(currentIndex, currentRating) {
    document.querySelector(".ratingnum").innerHTML = currentIndex;
  },
  onLeave: function(currentIndex, currentRating) {
    document.querySelector(".ratingnum").innerHTML = currentRating;
  }
});`
  },
  {
    id: 'section-reset',
    title: 'Clear/Reset Rater Example',
    badge: '""',
    rating: 2,
    hoverValue: 0,
    readonly: false,
    showReset: true,
    showHoverNum: false,
    htmlCode: `<div dir="ltr">
    <div id="raterreset" class="align-middle"></div>
    <span class="clear-rating"></span>
    <button id="raterreset-button" class="btn btn-light btn-sm ms-2">Reset</button>
</div>`,
    jsCode: `var raterReset = raterJs({
  element: document.querySelector("#raterreset"),
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  }
});

document.querySelector("#raterreset-button").addEventListener("click", function() {
  raterReset.setRating(0);
});`
  }
])

// Initialize active tabs
sections.forEach((_, i) => { activeTab[i] = 'html' })

function setRating(index, value) {
  sections[index].rating = value
  sections[index].hoverValue = 0
}

function hoverRating(index, value) {
  sections[index].hoverValue = value
}

function resetHover(index) {
  sections[index].hoverValue = 0
}

function resetRating(index) {
  sections[index].rating = 0
  sections[index].hoverValue = 0
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
/* Stars */
.star-icon.filled {
  color: #f5a623;
}
.star-icon.empty {
  color: #dee2e6;
}
.star-icon:hover,
.star-icon:hover ~ .star-icon {
  color: #dee2e6;
}

/* TOC */
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

/* Tabs */
.tab-active-html {
  background: #fd7e14 !important;
  color: #fff !important;
  border: none !important;
}
.tab-active-js {
  background: transparent !important;
  color: #495057 !important;
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

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .tab-inactive {
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .tab-inactive:hover {
  background: var(--app-bg) !important;
}
</style>