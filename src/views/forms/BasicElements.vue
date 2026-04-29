<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Basic Elements</h4>
      <p class="page-subtitle">Standard HTML form controls styled with Bootstrap 5.</p>
    </div>

    <div v-for="s in sections" :key="s.id" class="demo-card">
      <h6 class="demo-title">{{ s.title }}</h6>
      <p class="demo-desc" v-if="s.desc">{{ s.desc }}</p>
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
    <div class="demo-card">
      <h6 class="demo-title">Range</h6>
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
</template>

<script setup>
import { ref } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const rangeVal = ref(50)
const copied = ref('')
function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

const rangeCode = `<input type="range" class="form-range" min="0" max="100" />
<input type="range" class="form-range" min="0" max="100" step="10" />`

const sections = [
  {
    id: 'text-inputs', title: 'Text Inputs',
    desc: 'Standard text input controls with various states.',
    preview: `<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default Input</label><input type="text" class="form-control" placeholder="Enter text..." /></div>
      <div class="col-12 col-md-6"><label class="form-label">With Helper Text</label><input type="text" class="form-control" placeholder="username@example.com" /><div class="form-text">We'll never share your email.</div></div>
      <div class="col-12 col-md-6"><label class="form-label">Disabled</label><input type="text" class="form-control" placeholder="Disabled input" disabled /></div>
      <div class="col-12 col-md-6"><label class="form-label">Read Only</label><input type="text" class="form-control" value="Read-only value" readonly /></div>
    </div>`,
    code: `<input type="text" class="form-control" placeholder="Enter text..." />

<!-- With helper text -->
<input type="text" class="form-control" placeholder="username@example.com" />
<div class="form-text">We'll never share your email.</div>

<!-- Disabled -->
<input type="text" class="form-control" placeholder="Disabled input" disabled />

<!-- Read only -->
<input type="text" class="form-control" value="Read-only value" readonly />`,
  },
  {
    id: 'sizing', title: 'Input Sizing',
    desc: 'Use .form-control-lg and .form-control-sm for different sizes.',
    preview: `<div class="d-flex flex-column gap-3">
      <input type="text" class="form-control form-control-lg" placeholder="Large input (.form-control-lg)" />
      <input type="text" class="form-control" placeholder="Default input" />
      <input type="text" class="form-control form-control-sm" placeholder="Small input (.form-control-sm)" />
    </div>`,
    code: `<input type="text" class="form-control form-control-lg" placeholder="Large input" />
<input type="text" class="form-control" placeholder="Default input" />
<input type="text" class="form-control form-control-sm" placeholder="Small input" />`,
  },
  {
    id: 'select', title: 'Select',
    desc: 'Use the form-select class for custom select menus.',
    preview: `<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default Select</label><select class="form-select"><option selected>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div>
      <div class="col-12 col-md-6"><label class="form-label">Multiple Select</label><select class="form-select" multiple><option>One</option><option>Two</option><option>Three</option></select></div>
    </div>`,
    code: `<!-- Default select -->
<select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Multiple select -->
<select class="form-select" multiple>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>`,
  },
  {
    id: 'textarea', title: 'Textarea',
    desc: 'Use rows attribute to control the height of the textarea.',
    preview: `<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default Textarea</label><textarea class="form-control" rows="4" placeholder="Enter your message..."></textarea></div>
      <div class="col-12 col-md-6"><label class="form-label">Disabled Textarea</label><textarea class="form-control" rows="4" placeholder="Disabled..." disabled></textarea></div>
    </div>`,
    code: `<textarea class="form-control" rows="4" placeholder="Enter your message..."></textarea>

<!-- Disabled -->
<textarea class="form-control" rows="4" disabled></textarea>`,
  },
  {
    id: 'input-groups', title: 'Input Groups',
    desc: 'Extend form controls by adding text, buttons, or button groups on either side.',
    preview: `<div class="d-flex flex-column gap-3">
      <div class="input-group"><span class="input-group-text">@</span><input type="text" class="form-control" placeholder="Username" /></div>
      <div class="input-group"><input type="text" class="form-control" placeholder="Recipient's username" /><span class="input-group-text">@example.com</span></div>
      <div class="input-group"><span class="input-group-text">$</span><input type="number" class="form-control" placeholder="Amount" /><span class="input-group-text">.00</span></div>
      <div class="input-group"><button class="btn btn-outline-secondary" type="button">Button</button><input type="text" class="form-control" placeholder="Search..." /><button class="btn btn-primary" type="button">Go</button></div>
    </div>`,
    code: `<!-- Prepend text -->
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
</div>`,
  },
  {
    id: 'validation', title: 'Validation States',
    desc: 'Use .is-valid and .is-invalid to show validation feedback.',
    preview: `<div class="row g-3">
      <div class="col-12 col-md-4"><label class="form-label">Valid Input</label><input type="text" class="form-control is-valid" value="Looks good!" /><div class="valid-feedback">Looks good!</div></div>
      <div class="col-12 col-md-4"><label class="form-label">Invalid Input</label><input type="text" class="form-control is-invalid" value="Wrong value" /><div class="invalid-feedback">Please provide a valid value.</div></div>
    </div>`,
    code: `<!-- Valid -->
<input type="text" class="form-control is-valid" value="Looks good!" />
<div class="valid-feedback">Looks good!</div>

<!-- Invalid -->
<input type="text" class="form-control is-invalid" value="Wrong value" />
<div class="invalid-feedback">Please provide a valid value.</div>`,
  },
  {
    id: 'file', title: 'File Input',
    desc: 'Use the form-control class on input[type="file"] for consistent styling.',
    preview: `<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default File Input</label><input class="form-control" type="file" /></div>
      <div class="col-12 col-md-6"><label class="form-label">Multiple Files</label><input class="form-control" type="file" multiple /></div>
    </div>`,
    code: `<input class="form-control" type="file" />

<!-- Multiple files -->
<input class="form-control" type="file" multiple />`,
  },
]
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 200px; font-family: 'Courier New', monospace; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
