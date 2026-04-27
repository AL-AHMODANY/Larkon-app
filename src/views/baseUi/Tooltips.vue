<template>
  <div class="tooltips-page">
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#overview" :class="{ active: activeSection === 'overview' }">Overview</a>
      <a href="#directions" :class="{ active: activeSection === 'directions' }">Directions</a>
      <a href="#elements" :class="{ active: activeSection === 'elements' }">Elements</a>
      <a href="#disabled" :class="{ active: activeSection === 'disabled' }">Disabled Elements</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">TOOLTIPS</div>

      <div class="doc-section" id="overview">
        <h5>Overview</h5>
        <p class="desc">Bootstrap tooltip is a small pop-up that appears when the user moves the mouse pointer over an element like a link or a button to provide hints about the element.</p>
        <div class="demo-box">
          <div class="d-flex flex-wrap gap-3 justify-content-center">
            <button type="button" class="btn btn-primary" title="Tooltip on top" data-bs-toggle="tooltip" data-bs-placement="top">
              Tooltip on top
            </button>
            <button type="button" class="btn btn-primary" title="Tooltip on right" data-bs-toggle="tooltip" data-bs-placement="right">
              Tooltip on right
            </button>
            <button type="button" class="btn btn-primary" title="Tooltip on bottom" data-bs-toggle="tooltip" data-bs-placement="bottom">
              Tooltip on bottom
            </button>
            <button type="button" class="btn btn-primary" title="Tooltip on left" data-bs-toggle="tooltip" data-bs-placement="left">
              Tooltip on left
            </button>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="val">"button"</span> <span class="attr">class</span>=<span class="val">"btn btn-primary"</span> <span class="attr">title</span>=<span class="val">"Tooltip on top"</span> <span class="attr">data-bs-toggle</span>=<span class="val">"tooltip"</span> <span class="attr">data-bs-placement</span>=<span class="val">"top"</span><span class="tag">&gt;</span>
  Tooltip on top
<span class="tag">&lt;/button&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="directions">
        <h5>Directions</h5>
        <p class="desc">Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.</p>
        <div class="demo-box">
          <div class="row text-center">
            <div class="col-12 mb-3">
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                Tooltip on top
              </button>
            </div>
            <div class="col-6 text-end mb-3">
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
                Tooltip on left
              </button>
            </div>
            <div class="col-6 text-start mb-3">
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
                Tooltip on right
              </button>
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                Tooltip on bottom
              </button>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="val">"button"</span> <span class="attr">class</span>=<span class="val">"btn btn-secondary"</span> <span class="attr">data-bs-toggle</span>=<span class="val">"tooltip"</span> <span class="attr">data-bs-placement</span>=<span class="val">"top"</span> <span class="attr">title</span>=<span class="val">"Tooltip on top"</span><span class="tag">&gt;</span>
  Tooltip on top
<span class="tag">&lt;/button&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="elements">
        <h5>Custom Tooltips</h5>
        <p class="desc">Custom HTML tooltips with color variations.</p>
        <div class="demo-box">
          <div class="d-flex flex-wrap gap-3 justify-content-center">
            <button type="button" class="btn btn-soft-primary custom-tooltip" title="Primary Tooltip">
              Primary
            </button>
            <button type="button" class="btn btn-soft-success custom-tooltip" title="Success Tooltip">
              Success
            </button>
            <button type="button" class="btn btn-soft-danger custom-tooltip" title="Danger Tooltip">
              Danger
            </button>
            <button type="button" class="btn btn-soft-warning custom-tooltip" title="Warning Tooltip">
              Warning
            </button>
            <button type="button" class="btn btn-soft-info custom-tooltip" title="Info Tooltip">
              Info
            </button>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="val">"button"</span> <span class="attr">class</span>=<span class="val">"btn btn-primary custom-tooltip"</span> <span class="attr">title</span>=<span class="val">"Primary Tooltip"</span><span class="tag">&gt;</span>
  Primary
<span class="tag">&lt;/button&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="disabled">
        <h5>Disabled Elements</h5>
        <p class="desc">Elements with the <code>disabled</code> attribute can be made into a tooltip by wrapping them in a <code>&lt;span&gt;</code> and applying the tooltip on that.</p>
        <div class="demo-box">
          <div class="d-flex justify-content-center">
            <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
              <button class="btn btn-primary" type="button" disabled>Disabled button</button>
            </span>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"d-inline-block"</span> <span class="attr">tabindex</span>=<span class="val">"0"</span> <span class="attr">data-bs-toggle</span>=<span class="val">"tooltip"</span> <span class="attr">title</span>=<span class="val">"Disabled tooltip"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="val">"btn btn-primary"</span> <span class="attr">type</span>=<span class="val">"button"</span> <span class="attr">disabled</span><span class="tag">&gt;</span>Disabled button<span class="tag">&lt;/button&gt;</span>
<span class="tag">&lt;/span&gt;</span></pre>
        </div>
      </div>

      <div class="page-footer">2024 &copy; Larkon. Crafted by <a href="#">Techzaa</a></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Tooltip from 'bootstrap/js/dist/tooltip'

const activeSection = ref('overview')

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
})

function copyCode(event) {
  const pre = event.target.closest('.code-box').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
    event.target.textContent = 'Copied!'
    setTimeout(() => (event.target.textContent = 'Copy'), 1800)
  })
}
</script>

<style scoped>
.tooltips-page {
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  color: var(--text-primary);
  position: relative;
}

.right-nav {
  position: fixed;
  top: 80px;
  right: 24px;
  width: 170px;
  font-size: 12px;
}
.right-nav-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}
.right-nav a {
  display: block;
  padding: 3px 0;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.15s;
}
.right-nav a:hover { color: var(--brand-primary); }
.right-nav a.active { color: var(--brand-primary); font-weight: 600; }

.main-content {
  padding: 28px 32px 60px 32px;
  margin-right: 200px;
}
.page-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.doc-section { margin-bottom: 44px; }
.doc-section h5 { font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
.doc-section p.desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.6; }

.demo-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2px;
}

.code-box {
  background: #1e2139;
  border-radius: 0 0 8px 8px;
  border: 1px solid #2d3254;
  border-top: none;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid #2d3254;
}
.code-lang { color: #a5b4fc; font-size: 11px; font-weight: 600; }
.copy-btn {
  background: transparent;
  border: 1px solid #3a3f5c;
  color: #a5b4fc;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}
.copy-btn:hover { background: #2d3254; }
pre {
  margin: 0;
  padding: 14px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.65;
  color: #c5cae9;
}
pre :deep(.tag)  { color: #f472b6; }
pre :deep(.attr) { color: #fbbf24; }
pre :deep(.val)  { color: #86efac; }

.btn-soft-primary {
  color: #556ee6;
  background: rgba(85, 110, 230, 0.16);
  border-color: transparent;
}
.btn-soft-success {
  color: #34c38f;
  background: rgba(52, 195, 143, 0.16);
  border-color: transparent;
}
.btn-soft-danger {
  color: #f46a6a;
  background: rgba(244, 106, 106, 0.18);
  border-color: transparent;
}
.btn-soft-warning {
  color: #f7b84b;
  background: rgba(247, 184, 75, 0.2);
  border-color: transparent;
}
.btn-soft-info {
  color: #50a5f1;
  background: rgba(80, 165, 241, 0.16);
  border-color: transparent;
}

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--brand-primary); text-decoration: none; }
</style>
