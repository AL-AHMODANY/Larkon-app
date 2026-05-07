<template>
  <div class="popovers-page">
    <CdnSection />
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#default"    :class="{ active: activeSection === 'default' }">Default Popover</a>
      <a href="#directions" :class="{ active: activeSection === 'directions' }">Directions</a>
      <a href="#elements"   :class="{ active: activeSection === 'elements' }">Custom Elements</a>
      <a href="#dismiss"    :class="{ active: activeSection === 'dismiss' }">Dismiss on Next Click</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">POPOVERS</div>

      <div class="doc-section" id="default">
        <h5>Default Popover</h5>
        <p class="desc">Popovers are similar to tooltips, but can contain more content. Click the button to toggle the popover.</p>
        <div class="demo-box">
          <div class="d-flex flex-wrap gap-3 justify-content-center">
            <button type="button" class="btn btn-primary" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
              Click to toggle popover
            </button>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.default }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="directions">
        <h5>Directions</h5>
        <p class="desc">Click the buttons below to see the four popover directions: top, right, bottom, and left.</p>
        <div class="demo-box">
          <div class="row text-center">
            <div class="col-12 mb-3">
              <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Popover on top">Popover on top</button>
            </div>
            <div class="col-6 text-end mb-3">
              <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Popover on left">Popover on left</button>
            </div>
            <div class="col-6 text-start mb-3">
              <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Popover on right">Popover on right</button>
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Popover on bottom">Popover on bottom</button>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.directions }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="elements">
        <h5>Custom Popovers</h5>
        <p class="desc">Custom popovers with different colors using <code>btn-soft-*</code> variants.</p>
        <div class="demo-box">
          <div class="d-flex flex-wrap gap-3 justify-content-center">
            <button type="button" class="btn btn-soft-primary" data-bs-toggle="popover" title="Primary" data-bs-content="This is a primary popover">Primary</button>
            <button type="button" class="btn btn-soft-success" data-bs-toggle="popover" title="Success" data-bs-content="This is a success popover">Success</button>
            <button type="button" class="btn btn-soft-danger"  data-bs-toggle="popover" title="Danger"  data-bs-content="This is a danger popover">Danger</button>
            <button type="button" class="btn btn-soft-warning" data-bs-toggle="popover" title="Warning" data-bs-content="This is a warning popover">Warning</button>
            <button type="button" class="btn btn-soft-info"    data-bs-toggle="popover" title="Info"    data-bs-content="This is an info popover">Info</button>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.elements }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="dismiss">
        <h5>Dismiss on Next Click</h5>
        <p class="desc">Use the <code>focus</code> trigger to dismiss popovers on the user's next click of a different element.</p>
        <div class="demo-box">
          <div class="d-flex justify-content-center">
            <a tabindex="0" class="btn btn-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">
              Dismissible popover
            </a>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.dismiss }}</code></pre>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref, onMounted } from 'vue'
import Popover from 'bootstrap/js/dist/popover'

const activeSection = ref('default')

onMounted(() => {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new Popover(el))
})

const codeMap = {
  default:
`<button type="button" class="btn btn-primary"
  data-bs-toggle="popover"
  title="Popover title"
  data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Click to toggle popover
</button>`,

  directions:
`<!-- Top -->
<button type="button" class="btn btn-secondary"
  data-bs-toggle="popover" data-bs-placement="top"
  data-bs-content="Popover on top">
  Popover on top
</button>

<!-- Right -->
<button type="button" class="btn btn-secondary"
  data-bs-toggle="popover" data-bs-placement="right"
  data-bs-content="Popover on right">
  Popover on right
</button>

<!-- Bottom -->
<button type="button" class="btn btn-secondary"
  data-bs-toggle="popover" data-bs-placement="bottom"
  data-bs-content="Popover on bottom">
  Popover on bottom
</button>

<!-- Left -->
<button type="button" class="btn btn-secondary"
  data-bs-toggle="popover" data-bs-placement="left"
  data-bs-content="Popover on left">
  Popover on left
</button>`,

  elements:
`<button type="button" class="btn btn-soft-primary"
  data-bs-toggle="popover" title="Primary"
  data-bs-content="This is a primary popover">Primary</button>
<button type="button" class="btn btn-soft-success"
  data-bs-toggle="popover" title="Success"
  data-bs-content="This is a success popover">Success</button>
<button type="button" class="btn btn-soft-danger"
  data-bs-toggle="popover" title="Danger"
  data-bs-content="This is a danger popover">Danger</button>
<button type="button" class="btn btn-soft-warning"
  data-bs-toggle="popover" title="Warning"
  data-bs-content="This is a warning popover">Warning</button>
<button type="button" class="btn btn-soft-info"
  data-bs-toggle="popover" title="Info"
  data-bs-content="This is an info popover">Info</button>`,

  dismiss:
`<a tabindex="0" class="btn btn-primary" role="button"
  data-bs-toggle="popover" data-bs-trigger="focus"
  title="Dismissible popover"
  data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Dismissible popover
</a>`,
}

function copyCode(event) {
  const sectionId = event.target.closest('.doc-section')?.id
  navigator.clipboard.writeText(codeMap[sectionId] || '').then(() => {
    event.target.textContent = 'Copied!'
    setTimeout(() => (event.target.textContent = 'Copy'), 1800)
  })
}
</script>

<style scoped>
.popovers-page { font-family: 'Inter', sans-serif; font-size: 13.5px; color: var(--text-primary); position: relative; }
.right-nav { position: fixed; top: 80px; right: 24px; width: 170px; font-size: 12px; }
.right-nav-title { font-size: 11px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; letter-spacing: 0.3px; }
.right-nav a { display: block; padding: 3px 0; color: var(--text-secondary); text-decoration: none; transition: color 0.15s; }
.right-nav a:hover { color: var(--accent); }
.right-nav a.active { color: var(--accent); font-weight: 600; }
.main-content { padding: 28px 32px 60px 32px; margin-right: 200px; }
.page-title { font-size: 18px; font-weight: 700; color: var(--text-primary); letter-spacing: -0.3px; }
.doc-section { margin-bottom: 44px; }
.doc-section h5 { font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
.doc-section p.desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.6; }
.doc-section p.desc code { background: var(--accent-muted); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.82rem; }
.demo-box { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; margin-bottom: 2px; }
.code-box { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-lang { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-pre { margin: 0; padding: 12px 16px; overflow-x: auto; font-size: 0.73rem; line-height: 1.7; color: var(--text-secondary); background: var(--app-bg); max-height: 260px; font-family: 'Courier New', monospace; }
.code-pre code { display: block; white-space: pre; font-family: inherit; font-size: inherit; color: inherit; background: none; padding: 0; }
.btn-soft-primary { color: #556ee6; background: rgba(85,110,230,0.16); border-color: transparent; }
.btn-soft-success  { color: #34c38f; background: rgba(52,195,143,0.16); border-color: transparent; }
.btn-soft-danger   { color: #f46a6a; background: rgba(244,106,106,0.18); border-color: transparent; }
.btn-soft-warning  { color: #f7b84b; background: rgba(247,184,75,0.2);  border-color: transparent; }
.btn-soft-info     { color: #50a5f1; background: rgba(80,165,241,0.16); border-color: transparent; }
</style>
