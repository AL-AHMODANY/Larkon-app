<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Checkbox &amp; Radio</h4>
      <p class="page-subtitle">Bootstrap 5 checkbox, radio, and toggle switch components.</p>
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

const sections = [
  {
    id: 'checkboxes', title: 'Default Checkboxes',
    desc: 'Browser default checkboxes improved with Bootstrap custom styles.',
    preview: `<div class="d-flex flex-wrap gap-4">
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c1" checked /><label class="form-check-label" for="c1">Default checkbox (checked)</label></div>
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c2" /><label class="form-check-label" for="c2">Default checkbox</label></div>
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c3" disabled /><label class="form-check-label" for="c3">Disabled checkbox</label></div>
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c4" checked disabled /><label class="form-check-label" for="c4">Disabled checked</label></div>
    </div>`,
    code: `<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1" checked />
  <label class="form-check-label" for="check1">Default checkbox (checked)</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check2" />
  <label class="form-check-label" for="check2">Default checkbox</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check3" disabled />
  <label class="form-check-label" for="check3">Disabled checkbox</label>
</div>`,
  },
  {
    id: 'inline-checks', title: 'Inline Checkboxes',
    desc: 'Group checkboxes on the same horizontal row with .form-check-inline.',
    preview: `<div class="d-flex flex-wrap gap-3">
      <div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="ic1" checked /><label class="form-check-label" for="ic1">Option 1</label></div>
      <div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="ic2" /><label class="form-check-label" for="ic2">Option 2</label></div>
      <div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="ic3" /><label class="form-check-label" for="ic3">Option 3</label></div>
    </div>`,
    code: `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheck1" checked />
  <label class="form-check-label" for="inlineCheck1">Option 1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheck2" />
  <label class="form-check-label" for="inlineCheck2">Option 2</label>
</div>`,
  },
  {
    id: 'radios', title: 'Default Radio Buttons',
    desc: 'For selecting one option from a set.',
    preview: `<div class="d-flex flex-wrap gap-4">
      <div class="form-check"><input class="form-check-input" type="radio" name="r1" id="r1" checked /><label class="form-check-label" for="r1">Option 1</label></div>
      <div class="form-check"><input class="form-check-input" type="radio" name="r1" id="r2" /><label class="form-check-label" for="r2">Option 2</label></div>
      <div class="form-check"><input class="form-check-input" type="radio" name="r1" id="r3" /><label class="form-check-label" for="r3">Option 3</label></div>
      <div class="form-check"><input class="form-check-input" type="radio" name="r2" id="r4" disabled /><label class="form-check-label" for="r4">Disabled radio</label></div>
    </div>`,
    code: `<div class="form-check">
  <input class="form-check-input" type="radio" name="radioGroup" id="radio1" checked />
  <label class="form-check-label" for="radio1">Option 1</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioGroup" id="radio2" />
  <label class="form-check-label" for="radio2">Option 2</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioGroup" id="radio3" disabled />
  <label class="form-check-label" for="radio3">Disabled radio</label>
</div>`,
  },
  {
    id: 'switches', title: 'Toggle Switches',
    desc: 'A switch has the markup of a custom checkbox but uses the .form-switch class.',
    preview: `<div class="d-flex flex-wrap gap-4">
      <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="sw1" checked /><label class="form-check-label" for="sw1">Enabled (checked)</label></div>
      <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="sw2" /><label class="form-check-label" for="sw2">Enabled (unchecked)</label></div>
      <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="sw3" disabled /><label class="form-check-label" for="sw3">Disabled switch</label></div>
    </div>`,
    code: `<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1" checked />
  <label class="form-check-label" for="switch1">Enabled (checked)</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch2" />
  <label class="form-check-label" for="switch2">Enabled (unchecked)</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch3" disabled />
  <label class="form-check-label" for="switch3">Disabled switch</label>
</div>`,
  },
  {
    id: 'btn-checks', title: 'Button-style Checkboxes',
    desc: 'Create button-like checkboxes and radio buttons using .btn-check.',
    preview: `<div class="btn-group" role="group">
      <input type="checkbox" class="btn-check" id="bc1" checked /><label class="btn btn-outline-primary" for="bc1">Checkbox 1</label>
      <input type="checkbox" class="btn-check" id="bc2" /><label class="btn btn-outline-primary" for="bc2">Checkbox 2</label>
      <input type="checkbox" class="btn-check" id="bc3" /><label class="btn btn-outline-primary" for="bc3">Checkbox 3</label>
    </div>`,
    code: `<div class="btn-group" role="group">
  <input type="checkbox" class="btn-check" id="btncheck1" checked />
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" />
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" />
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>`,
  },
  {
    id: 'btn-radios', title: 'Button-style Radio Buttons',
    desc: 'Radio buttons can also be styled as buttons using .btn-check.',
    preview: `<div class="btn-group" role="group">
      <input type="radio" class="btn-check" name="br" id="br1" checked /><label class="btn btn-outline-primary" for="br1">Radio 1</label>
      <input type="radio" class="btn-check" name="br" id="br2" /><label class="btn btn-outline-primary" for="br2">Radio 2</label>
      <input type="radio" class="btn-check" name="br" id="br3" /><label class="btn btn-outline-primary" for="br3">Radio 3</label>
    </div>`,
    code: `<div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>`,
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
