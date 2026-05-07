<template>
  <div class="page-wrapper">
    <CdnSection />

    <div class="page-layout">
      <div class="page-main">
        <div class="page-header">
          <h4 class="page-title">Basic Elements</h4>
          <p class="page-subtitle">Standard HTML form controls styled with Bootstrap 5.</p>
        </div>

        <div v-for="s in sections" :key="s.id" :id="s.id" class="demo-card">
          <h6 class="demo-title">{{ s.title }}</h6>
          <p class="demo-desc" v-if="s.desc" v-html="s.desc"></p>
          <div class="demo-box" v-html="s.preview"></div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy(s.id, s.code)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === s.id ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ s.code }}</code></pre>
          </div>
        </div>

        <!-- Range (interactive) -->
        <div id="range" class="demo-card">
          <h6 class="demo-title">Range</h6>
          <p class="demo-desc">Use <code>input[type="range"]</code> with the <code>.form-range</code> class.</p>
          <div class="demo-box">
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <label class="form-label">Default Range <span class="text-muted">({{ rangeVal }})</span></label>
                <input type="range" class="form-range" v-model="rangeVal" min="0" max="100" />
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">Stepped Range</label>
                <input type="range" class="form-range" min="0" max="100" step="10" />
              </div>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('range', rangeCode)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'range' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ rangeCode }}</code></pre>
          </div>
        </div>

        <PageFooter />
      </div>

      <!-- Right TOC -->
      <aside class="toc-sidebar d-none d-xl-block">
        <div class="toc-title">ON THIS PAGE</div>
        <nav class="toc-nav">
          <a v-for="item in tocItems" :key="item.id"
            :href="`#${item.id}`" class="toc-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const rangeVal = ref(50)
const copied = ref('')
const activeSection = ref('text-inputs')

const tocItems = [
  { id: 'text-inputs',  label: 'Text Inputs' },
  { id: 'sizing',       label: 'Input Sizing' },
  { id: 'select',       label: 'Select' },
  { id: 'textarea',     label: 'Textarea' },
  { id: 'input-groups', label: 'Input Groups' },
  { id: 'validation',   label: 'Validation States' },
  { id: 'file',         label: 'File Input' },
  { id: 'range',        label: 'Range' },
]

function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}
function scrollTo(id) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function onScroll() {
  for (const item of [...tocItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 120) { activeSection.value = item.id; break }
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const rangeCode = `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default Range</label>
    <input type="range" class="form-range" min="0" max="100" />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Stepped Range</label>
    <input type="range" class="form-range" min="0" max="100" step="10" />
  </div>
</div>`

const sections = [
  {
    id: 'text-inputs',
    title: 'Text Inputs',
    desc: 'Standard text input controls with various states.',
    preview: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default Input</label>
    <input type="text" class="form-control" placeholder="Enter text..." />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">With Helper Text</label>
    <input type="text" class="form-control" placeholder="username@example.com" />
    <div class="form-text">We'll never share your email.</div>
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Disabled</label>
    <input type="text" class="form-control" placeholder="Disabled input" disabled />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Read Only</label>
    <input type="text" class="form-control" value="Read-only value" readonly />
  </div>
</div>`,
    code: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default Input</label>
    <input type="text" class="form-control" placeholder="Enter text..." />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">With Helper Text</label>
    <input type="text" class="form-control" placeholder="username@example.com" />
    <div class="form-text">We'll never share your email.</div>
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Disabled</label>
    <input type="text" class="form-control" placeholder="Disabled input" disabled />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Read Only</label>
    <input type="text" class="form-control" value="Read-only value" readonly />
  </div>
</div>`,
  },
  {
    id: 'sizing',
    title: 'Input Sizing',
    desc: 'Use <code>.form-control-lg</code> and <code>.form-control-sm</code> for different sizes.',
    preview: `<div class="d-flex flex-column gap-3">
  <input type="text" class="form-control form-control-lg" placeholder="Large input (.form-control-lg)" />
  <input type="text" class="form-control" placeholder="Default input" />
  <input type="text" class="form-control form-control-sm" placeholder="Small input (.form-control-sm)" />
</div>`,
    code: `<div class="d-flex flex-column gap-3">
  <input type="text" class="form-control form-control-lg" placeholder="Large input (.form-control-lg)" />
  <input type="text" class="form-control" placeholder="Default input" />
  <input type="text" class="form-control form-control-sm" placeholder="Small input (.form-control-sm)" />
</div>`,
  },
  {
    id: 'select',
    title: 'Select',
    desc: 'Use the <code>.form-select</code> class for custom select menus.',
    preview: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default Select</label>
    <select class="form-select">
      <option selected>Open this select menu</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </select>
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Multiple Select</label>
    <select class="form-select" multiple>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </select>
  </div>
</div>`,
    code: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default Select</label>
    <select class="form-select">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Multiple Select</label>
    <select class="form-select" multiple>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div>`,
  },
  {
    id: 'textarea',
    title: 'Textarea',
    desc: 'Use the <code>rows</code> attribute to control the height of the textarea.',
    preview: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default Textarea</label>
    <textarea class="form-control" rows="4" placeholder="Enter your message..."></textarea>
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Disabled Textarea</label>
    <textarea class="form-control" rows="4" placeholder="Disabled..." disabled></textarea>
  </div>
</div>`,
    code: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default Textarea</label>
    <textarea class="form-control" rows="4" placeholder="Enter your message..."></textarea>
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Disabled Textarea</label>
    <textarea class="form-control" rows="4" placeholder="Disabled..." disabled></textarea>
  </div>
</div>`,
  },
  {
    id: 'input-groups',
    title: 'Input Groups',
    desc: 'Extend form controls by adding text, buttons, or button groups on either side.',
    preview: `<div class="d-flex flex-column gap-3">
  <div class="input-group">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username" />
  </div>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Recipient's username" />
    <span class="input-group-text">@example.com</span>
  </div>
  <div class="input-group">
    <span class="input-group-text">$</span>
    <input type="number" class="form-control" placeholder="Amount" />
    <span class="input-group-text">.00</span>
  </div>
  <div class="input-group">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <input type="text" class="form-control" placeholder="Search..." />
    <button class="btn btn-primary" type="button">Go</button>
  </div>
</div>`,
    code: `<div class="d-flex flex-column gap-3">
  <!-- Prepend text -->
  <div class="input-group">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username" />
  </div>

  <!-- Append text -->
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Recipient's username" />
    <span class="input-group-text">@example.com</span>
  </div>

  <!-- Both sides -->
  <div class="input-group">
    <span class="input-group-text">$</span>
    <input type="number" class="form-control" placeholder="Amount" />
    <span class="input-group-text">.00</span>
  </div>

  <!-- With buttons -->
  <div class="input-group">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <input type="text" class="form-control" placeholder="Search..." />
    <button class="btn btn-primary" type="button">Go</button>
  </div>
</div>`,
  },
  {
    id: 'validation',
    title: 'Validation States',
    desc: 'Use <code>.is-valid</code> and <code>.is-invalid</code> to show validation feedback.',
    preview: `<div class="row g-3">
  <div class="col-12 col-md-4">
    <label class="form-label">Valid Input</label>
    <input type="text" class="form-control is-valid" value="Looks good!" />
    <div class="valid-feedback">Looks good!</div>
  </div>
  <div class="col-12 col-md-4">
    <label class="form-label">Invalid Input</label>
    <input type="text" class="form-control is-invalid" value="Wrong value" />
    <div class="invalid-feedback">Please provide a valid value.</div>
  </div>
  <div class="col-12 col-md-4">
    <label class="form-label">Invalid Select</label>
    <select class="form-select is-invalid">
      <option value="">Choose...</option>
      <option>One</option>
    </select>
    <div class="invalid-feedback">Please select an option.</div>
  </div>
</div>`,
    code: `<div class="row g-3">
  <div class="col-12 col-md-4">
    <label class="form-label">Valid Input</label>
    <input type="text" class="form-control is-valid" value="Looks good!" />
    <div class="valid-feedback">Looks good!</div>
  </div>
  <div class="col-12 col-md-4">
    <label class="form-label">Invalid Input</label>
    <input type="text" class="form-control is-invalid" value="Wrong value" />
    <div class="invalid-feedback">Please provide a valid value.</div>
  </div>
  <div class="col-12 col-md-4">
    <label class="form-label">Invalid Select</label>
    <select class="form-select is-invalid">
      <option value="">Choose...</option>
      <option>One</option>
    </select>
    <div class="invalid-feedback">Please select an option.</div>
  </div>
</div>`,
  },
  {
    id: 'file',
    title: 'File Input',
    desc: 'Use the <code>.form-control</code> class on <code>input[type="file"]</code> for consistent styling.',
    preview: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default File Input</label>
    <input class="form-control" type="file" />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Multiple Files</label>
    <input class="form-control" type="file" multiple />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Images Only</label>
    <input class="form-control" type="file" accept="image/*" />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Small Size</label>
    <input class="form-control form-control-sm" type="file" />
  </div>
</div>`,
    code: `<div class="row g-3">
  <div class="col-12 col-md-6">
    <label class="form-label">Default File Input</label>
    <input class="form-control" type="file" />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Multiple Files</label>
    <input class="form-control" type="file" multiple />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Images Only</label>
    <input class="form-control" type="file" accept="image/*" />
  </div>
  <div class="col-12 col-md-6">
    <label class="form-label">Small Size</label>
    <input class="form-control form-control-sm" type="file" />
  </div>
</div>`,
  },
]
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-layout { display: flex; gap: 0; align-items: flex-start; }
.page-main { flex: 1; min-width: 0; padding-right: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); scroll-margin-top: 80px; }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.6; }
.demo-desc :deep(code) { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 260px; font-family: 'Courier New', monospace; }
.toc-sidebar { width: 190px; flex-shrink: 0; position: sticky; top: 80px; align-self: flex-start; }
.toc-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 10px; text-transform: uppercase; }
.toc-nav { display: flex; flex-direction: column; gap: 2px; }
.toc-link { display: block; padding: 5px 10px; font-size: 0.8rem; color: var(--text-secondary); text-decoration: none; border-radius: 6px; border-left: 2px solid transparent; transition: all 0.15s; }
.toc-link:hover { color: var(--accent); background: var(--accent-muted); }
.toc-link.active { color: var(--accent); border-left-color: var(--accent); background: var(--accent-muted); font-weight: 600; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .page-main { padding-right: 0; } }
</style>
