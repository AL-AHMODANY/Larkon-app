<template>
  <div class="page-wrapper-adv" style="min-height: 100vh;">
    <CdnSection />
    <div class="container-fluid">

      <!-- Page Title -->
      <div class="mb-4">
        <p class="text-uppercase fw-bold mb-0" style="letter-spacing: 0.12em; font-size: 0.72rem; color: #6c757d;">Ratings</p>
      </div>

      <div class="row g-4">
        <div class="col-lg-9">

          <!-- Overview -->
          <div id="section-overview" class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="d-flex align-items-start justify-content-between mb-2">
                <div>
                  <h6 class="fw-bold mb-1" style="color:#1a1e2c;">Overview</h6>
                  <p class="text-muted mb-2" style="font-size:0.84rem;">
                    Simple star rating built with pure HTML, CSS, and JavaScript. No dependencies required.
                  </p>
                  <h6 class="fw-bold mb-1" style="color:#1a1e2c;">Usage</h6>
                  <p class="text-muted mb-0" style="font-size:0.84rem;">
                    Copy the HTML and JavaScript snippets below — they work exactly as shown in the preview above each block.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Section cards -->
          <div v-for="(section, index) in sections" :key="section.id"
               :id="section.id" class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body p-4">
              <h5 class="fw-semibold mb-3" style="font-size:0.97rem;color:#1a1e2c;">{{ section.title }}</h5>

              <!-- Live preview — identical structure to the HTML code snippet -->
              <div class="mb-3 d-flex align-items-center gap-2">
                <div class="d-flex align-items-center" style="gap:2px;">
                  <span
                    v-for="star in 5" :key="star"
                    class="star-icon"
                    :class="star <= (section.hoverValue || section.rating) ? 'filled' : 'empty'"
                    :data-value="star"
                    @click="!section.readonly && setRating(index, star)"
                    @mouseover="!section.readonly && hoverRating(index, star)"
                    @mouseleave="!section.readonly && resetHover(index)"
                  >&#9733;</span>
                </div>
                <button v-if="section.showReset"
                  class="btn btn-light btn-sm"
                  @click="resetRating(index)">Reset</button>
                <span v-if="section.showHoverNum"
                  class="badge bg-info ms-1" style="font-size:0.72rem;">
                  {{ section.hoverValue || section.rating }}
                </span>
                <span v-if="section.showMsg && (section.hoverValue || section.rating)"
                  class="text-muted" style="font-size:0.85rem;">
                  {{ messages[section.hoverValue || section.rating] }}
                </span>
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
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref, reactive } from 'vue'

const activeId    = ref('section-overview')
const copiedIndex = ref(null)
const activeTab   = reactive({})
const messages    = { 1: 'Poor', 2: 'Not bad', 3: 'Good', 4: 'Very good', 5: 'Excellent' }

const sections = reactive([
  {
    id: 'section-basic',
    title: 'Basic Rater Example',
    rating: 3, hoverValue: 0,
    readonly: false, showReset: false, showHoverNum: false, showMsg: false,
    htmlCode:
`<div id="basic-rater" style="display:inline-flex;gap:2px;">
  <span class="star" data-value="1" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="2" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="3" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="4" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="5" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
</div>`,
    jsCode:
`var container = document.getElementById("basic-rater");
var stars = container.querySelectorAll(".star");
var currentRating = 3;

function setRating(value) {
  currentRating = value;
  stars.forEach(function(s) {
    s.style.color = +s.dataset.value <= value ? "#f5a623" : "#dee2e6";
  });
}

setRating(currentRating);

stars.forEach(function(star) {
  star.addEventListener("click", function() { setRating(+star.dataset.value); });
  star.addEventListener("mouseover", function() {
    stars.forEach(function(s) {
      s.style.color = +s.dataset.value <= +star.dataset.value ? "#f5a623" : "#dee2e6";
    });
  });
  star.addEventListener("mouseleave", function() { setRating(currentRating); });
});`
  },
  {
    id: 'section-step',
    title: 'Rater with Step Example',
    rating: 1, hoverValue: 0,
    readonly: false, showReset: false, showHoverNum: false, showMsg: false,
    htmlCode:
`<div id="rater-step" style="display:inline-flex;gap:2px;">
  <span class="star" data-value="1" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="2" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="3" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="4" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="5" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
</div>`,
    jsCode:
`var container = document.getElementById("rater-step");
var stars = container.querySelectorAll(".star");
var currentRating = 1;

function setRating(value) {
  currentRating = value;
  stars.forEach(function(s) {
    s.style.color = +s.dataset.value <= value ? "#f5a623" : "#dee2e6";
  });
}

setRating(currentRating);

stars.forEach(function(star) {
  star.addEventListener("click", function() { setRating(+star.dataset.value); });
  star.addEventListener("mouseover", function() {
    stars.forEach(function(s) {
      s.style.color = +s.dataset.value <= +star.dataset.value ? "#f5a623" : "#dee2e6";
    });
  });
  star.addEventListener("mouseleave", function() { setRating(currentRating); });
});`
  },
  {
    id: 'section-message',
    title: 'Custom Messages Example',
    rating: 0, hoverValue: 0,
    readonly: false, showReset: false, showHoverNum: false, showMsg: true,
    htmlCode:
`<div style="display:inline-flex;align-items:center;gap:8px;">
  <div id="rater-message" style="display:inline-flex;gap:2px;">
    <span class="star" data-value="1" data-msg="Poor"      style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="2" data-msg="Not bad"   style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="3" data-msg="Good"      style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="4" data-msg="Very good" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="5" data-msg="Excellent" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  </div>
  <span id="rater-message-label" class="text-muted" style="font-size:0.85rem;"></span>
</div>`,
    jsCode:
`var container = document.getElementById("rater-message");
var stars = container.querySelectorAll(".star");
var label = document.getElementById("rater-message-label");
var currentRating = 0;

function setRating(value, msg) {
  currentRating = value;
  label.textContent = msg || "";
  stars.forEach(function(s) {
    s.style.color = +s.dataset.value <= value ? "#f5a623" : "#dee2e6";
  });
}

stars.forEach(function(star) {
  star.addEventListener("click", function() {
    setRating(+star.dataset.value, star.dataset.msg);
  });
  star.addEventListener("mouseover", function() {
    label.textContent = star.dataset.msg;
    stars.forEach(function(s) {
      s.style.color = +s.dataset.value <= +star.dataset.value ? "#f5a623" : "#dee2e6";
    });
  });
  star.addEventListener("mouseleave", function() { setRating(currentRating); });
});`
  },
  {
    id: 'section-readonly',
    title: 'ReadOnly Example',
    rating: 3, hoverValue: 0,
    readonly: true, showReset: false, showHoverNum: false, showMsg: false,
    htmlCode:
`<div id="rater-readonly" style="display:inline-flex;gap:2px;pointer-events:none;">
  <span class="star" data-value="1" style="font-size:1.5rem;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="2" style="font-size:1.5rem;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="3" style="font-size:1.5rem;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="4" style="font-size:1.5rem;color:#dee2e6;">&#9733;</span>
  <span class="star" data-value="5" style="font-size:1.5rem;color:#dee2e6;">&#9733;</span>
</div>`,
    jsCode:
`var container = document.getElementById("rater-readonly");
var stars = container.querySelectorAll(".star");
var rating = 3; // fixed, read-only value

stars.forEach(function(s, i) {
  s.style.color = i < rating ? "#f5a623" : "#dee2e6";
});

// pointer-events: none on the container prevents any interaction`
  },
  {
    id: 'section-hover',
    title: 'On Hover Event Example',
    rating: 1, hoverValue: 0,
    readonly: false, showReset: false, showHoverNum: true, showMsg: false,
    htmlCode:
`<div style="display:inline-flex;align-items:center;gap:8px;">
  <div id="rater-onhover" style="display:inline-flex;gap:2px;">
    <span class="star" data-value="1" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="2" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="3" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="4" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="5" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  </div>
  <span class="badge bg-info ratingnum">1</span>
</div>`,
    jsCode:
`var container = document.getElementById("rater-onhover");
var stars = container.querySelectorAll(".star");
var badge = document.querySelector(".ratingnum");
var currentRating = 1;

function setRating(value) {
  currentRating = value;
  badge.textContent = value;
  stars.forEach(function(s) {
    s.style.color = +s.dataset.value <= value ? "#f5a623" : "#dee2e6";
  });
}

setRating(currentRating);

stars.forEach(function(star) {
  star.addEventListener("click", function() { setRating(+star.dataset.value); });
  star.addEventListener("mouseover", function() {
    badge.textContent = star.dataset.value;
    stars.forEach(function(s) {
      s.style.color = +s.dataset.value <= +star.dataset.value ? "#f5a623" : "#dee2e6";
    });
  });
  star.addEventListener("mouseleave", function() { setRating(currentRating); });
});`
  },
  {
    id: 'section-reset',
    title: 'Clear/Reset Rater Example',
    rating: 2, hoverValue: 0,
    readonly: false, showReset: true, showHoverNum: false, showMsg: false,
    htmlCode:
`<div style="display:inline-flex;align-items:center;gap:8px;">
  <div id="raterreset" style="display:inline-flex;gap:2px;">
    <span class="star" data-value="1" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="2" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="3" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="4" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
    <span class="star" data-value="5" style="font-size:1.5rem;cursor:pointer;color:#dee2e6;">&#9733;</span>
  </div>
  <button id="raterreset-button" class="btn btn-light btn-sm">Reset</button>
</div>`,
    jsCode:
`var container = document.getElementById("raterreset");
var stars = container.querySelectorAll(".star");
var resetBtn = document.getElementById("raterreset-button");
var currentRating = 2;

function setRating(value) {
  currentRating = value;
  stars.forEach(function(s) {
    s.style.color = +s.dataset.value <= value ? "#f5a623" : "#dee2e6";
  });
}

setRating(currentRating);

stars.forEach(function(star) {
  star.addEventListener("click", function() { setRating(+star.dataset.value); });
  star.addEventListener("mouseover", function() {
    stars.forEach(function(s) {
      s.style.color = +s.dataset.value <= +star.dataset.value ? "#f5a623" : "#dee2e6";
    });
  });
  star.addEventListener("mouseleave", function() { setRating(currentRating); });
});

resetBtn.addEventListener("click", function() { setRating(0); });`
  },
])

sections.forEach((_, i) => { activeTab[i] = 'html' })

function setRating(index, value)  { sections[index].rating = value; sections[index].hoverValue = 0 }
function hoverRating(index, value){ sections[index].hoverValue = value }
function resetHover(index)        { sections[index].hoverValue = 0 }
function resetRating(index)       { sections[index].rating = 0; sections[index].hoverValue = 0 }

async function copyCode(index) {
  const code = activeTab[index] === 'html' ? sections[index].htmlCode : sections[index].jsCode
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

.star-icon { font-size: 1.5rem; cursor: pointer; transition: color 0.15s; }
.star-icon.filled { color: #f5a623; }
.star-icon.empty  { color: #dee2e6; }

.toc-link { color: var(--text-secondary, #495057); border-left: 2px solid transparent; transition: all 0.15s; }
.toc-link:hover { color: var(--accent, #fd7e14); background-color: var(--accent-muted, #fff3e8); border-left-color: var(--accent, #fd7e14); }
.toc-active { color: var(--accent, #fd7e14) !important; background-color: var(--accent-muted, #fff3e8); border-left: 2px solid var(--accent, #fd7e14); }

:global([data-theme="dark"]) .star-icon.empty { color: #4a5568; }

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

:global([data-theme="dark"]) .code-block { border-color: var(--border-color) !important; }
:global([data-theme="dark"]) .code-header { background: var(--app-bg) !important; border-color: var(--border-color) !important; }
:global([data-theme="dark"]) .code-body { background: var(--app-bg) !important; }
:global([data-theme="dark"]) .code-pre { color: #c9d1d9 !important; }
:global([data-theme="dark"]) .code-copy-btn { background: var(--card-bg) !important; border-color: var(--border-color) !important; color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .code-copy-btn:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
</style>
