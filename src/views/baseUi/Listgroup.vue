<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">List Group</h4>
      <p class="page-subtitle">List groups are a flexible component for displaying a series of content.</p>
    </div>

    <div v-for="section in sections" :key="section.id" class="demo-card">
      <h6 class="demo-title">{{ section.title }}</h6>
      <p class="demo-desc" v-html="section.desc"></p>

      <div class="demo-box" v-html="section.preview"></div>

      <div class="code-block mt-3">
        <div class="code-bar">
          <span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy(section.id, section.code)">
            <i class="bi bi-clipboard me-1"></i>{{ copied === section.id ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="code-body"><code>{{ section.code }}</code></pre>
      </div>
    </div>

    <!-- Interactive: Links & Buttons -->
    <div class="demo-card">
      <h6 class="demo-title">Links and Buttons</h6>
      <p class="demo-desc">Use <code>.list-group-item-action</code> for actionable items with hover, disabled, and active states.</p>
      <div class="demo-box">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <p class="small fw-semibold text-muted mb-2">Anchors</p>
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active" aria-current="true">The current link item</a>
              <a href="#" class="list-group-item list-group-item-action">A second link item</a>
              <a href="#" class="list-group-item list-group-item-action">A third link item</a>
              <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <p class="small fw-semibold text-muted mb-2">Buttons</p>
            <div class="list-group">
              <button type="button" class="list-group-item list-group-item-action active">The current button</button>
              <button type="button" class="list-group-item list-group-item-action">A second button item</button>
              <button type="button" class="list-group-item list-group-item-action">A third button item</button>
              <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
            </div>
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar">
          <span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('links', linksCode)">
            <i class="bi bi-clipboard me-1"></i>{{ copied === 'links' ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="code-body"><code>{{ linksCode }}</code></pre>
      </div>
    </div>

    <!-- Interactive: Numbered with badges -->
    <div class="demo-card">
      <h6 class="demo-title">Numbered</h6>
      <p class="demo-desc">Add <code>.list-group-numbered</code> to opt into numbered list group items.</p>
      <div class="demo-box">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">A list item</li>
              <li class="list-group-item">A list item</li>
              <li class="list-group-item">A list item</li>
            </ol>
          </div>
          <div class="col-12 col-md-6">
            <ol class="list-group list-group-numbered">
              <li v-for="(item, i) in numberedItems" :key="i"
                  class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{{ item.title }}</div>{{ item.content }}
                </div>
                <span class="badge bg-primary rounded-pill">{{ item.badge }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar">
          <span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('numbered', numberedCode)">
            <i class="bi bi-clipboard me-1"></i>{{ copied === 'numbered' ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="code-body"><code>{{ numberedCode }}</code></pre>
      </div>
    </div>

    <!-- Interactive: Checkboxes & Radios -->
    <div class="demo-card">
      <h6 class="demo-title">Checkboxes and Radios</h6>
      <p class="demo-desc">Place Bootstrap's checkboxes and radios within list group items.</p>
      <div class="demo-box">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <p class="small fw-semibold text-muted mb-2">Checkboxes</p>
            <ul class="list-group">
              <li v-for="(item, i) in checkboxItems" :key="i" class="list-group-item">
                <input class="form-check-input me-2" type="checkbox" :id="`chk-${i}`" v-model="item.checked" />
                <label class="form-check-label stretched-link" :for="`chk-${i}`">{{ item.label }}</label>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <p class="small fw-semibold text-muted mb-2">Radios</p>
            <ul class="list-group">
              <li v-for="(label, i) in radioLabels" :key="i" class="list-group-item">
                <input class="form-check-input me-2" type="radio" name="lgRadio" :id="`rad-${i}`" :value="i" v-model="selectedRadio" />
                <label class="form-check-label stretched-link" :for="`rad-${i}`">{{ label }}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar">
          <span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('checks', checksCode)">
            <i class="bi bi-clipboard me-1"></i>{{ copied === 'checks' ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="code-body"><code>{{ checksCode }}</code></pre>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const copied = ref('')
function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

const numberedItems = ref([
  { title: 'Subheading', content: 'Content for list item', badge: 14 },
  { title: 'Subheading', content: 'Content for list item', badge: 2 },
  { title: 'Subheading', content: 'Content for list item', badge: 1 },
])
const checkboxItems = ref([
  { label: 'First checkbox', checked: true },
  { label: 'Second checkbox', checked: false },
  { label: 'Third checkbox', checked: false },
])
const radioLabels = ['First radio', 'Second radio', 'Third radio']
const selectedRadio = ref(0)

const sections = [
  {
    id: 'basic', title: 'Basic Example',
    desc: 'The most basic list group is an unordered list with list items and the proper classes.',
    preview: `<ul class="list-group" style="max-width:360px"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>`,
    code: `<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`,
  },
  {
    id: 'active', title: 'Active Items',
    desc: 'Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.',
    preview: `<ul class="list-group" style="max-width:360px"><li class="list-group-item active" aria-current="true">An active item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,
    code: `<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,
  },
  {
    id: 'disabled', title: 'Disabled Items',
    desc: 'Add <code>.disabled</code> to a <code>.list-group-item</code> to make it appear disabled.',
    preview: `<ul class="list-group" style="max-width:360px"><li class="list-group-item disabled" aria-disabled="true">A disabled item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,
    code: `<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,
  },
  {
    id: 'flush', title: 'Flush',
    desc: 'Add <code>.list-group-flush</code> to remove borders and rounded corners.',
    preview: `<ul class="list-group list-group-flush" style="max-width:360px;border:1px solid #dee2e6;border-radius:.375rem"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,
    code: `<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,
  },
  {
    id: 'horizontal', title: 'Horizontal',
    desc: 'Add <code>.list-group-horizontal</code> to change the layout from vertical to horizontal.',
    preview: `<ul class="list-group list-group-horizontal mb-2"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,
    code: `<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,
  },
  {
    id: 'contextual', title: 'Contextual Classes',
    desc: 'Use contextual classes to style list items with a stateful background and color.',
    preview: `<ul class="list-group" style="max-width:440px"><li class="list-group-item">Default</li><li class="list-group-item list-group-item-primary">Primary</li><li class="list-group-item list-group-item-success">Success</li><li class="list-group-item list-group-item-danger">Danger</li><li class="list-group-item list-group-item-warning">Warning</li><li class="list-group-item list-group-item-info">Info</li></ul>`,
    code: `<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
</ul>`,
  },
]

const linksCode = `<!-- Anchors -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a class="list-group-item list-group-item-action disabled" aria-disabled="true">
    A disabled link item
  </a>
</div>

<!-- Buttons -->
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action" disabled>
    A disabled button item
  </button>
</div>`

const numberedCode = `<!-- Simple -->
<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>

<!-- With badges -->
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>`

const checksCode = `<!-- Checkboxes -->
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-2" type="checkbox" id="checkbox1" />
    <label class="form-check-label stretched-link" for="checkbox1">First checkbox</label>
  </li>
</ul>

<!-- Radios -->
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-2" type="radio" name="listGroupRadio" id="radio1" />
    <label class="form-check-label stretched-link" for="radio1">First radio</label>
  </li>
</ul>`
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }

.demo-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 20px 22px;
  margin-bottom: 20px;
  box-shadow: var(--card-shadow);
}
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.6; }
.demo-desc code { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }

.demo-box {
  background: var(--app-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 20px;
}

/* Override Bootstrap active color to match Larkon orange */
:deep(.list-group-item.active),
:deep(.list-group-item-action.active) {
  background-color: var(--accent) !important;
  border-color: var(--accent) !important;
  color: #fff !important;
}
:deep(.list-group-item-action:hover):not(.active) {
  background-color: var(--bg-hover);
  color: var(--text-primary);
}
:deep(.badge.bg-primary) { background-color: var(--accent) !important; }
:deep(.form-check-input:checked) { background-color: var(--accent); border-color: var(--accent); }

.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px;
  background: var(--app-bg);
  border-bottom: 1px solid var(--card-border);
}
.code-badge {
  background: var(--accent); color: #fff;
  font-size: 0.67rem; font-weight: 700;
  padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px;
}
.copy-btn {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 5px; font-size: 0.73rem; padding: 3px 10px;
  color: var(--text-muted); cursor: pointer; transition: all 0.15s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body {
  background: var(--app-bg); margin: 0; padding: 12px 16px;
  font-size: 0.73rem; color: var(--text-secondary);
  line-height: 1.7; overflow-x: auto; max-height: 200px;
  font-family: 'Courier New', monospace;
}

@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
