<template>
  <div class="alerts-page">

    <!-- Right Nav -->
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#basic" :class="{ active: activeSection === 'basic' }">Basic Example</a>
      <a href="#dismissible" :class="{ active: activeSection === 'dismissible' }">Alert Dismissible</a>
      <a href="#link" :class="{ active: activeSection === 'link' }">Alert Link</a>
      <a href="#icons" :class="{ active: activeSection === 'icons' }">Icons Alert</a>
      <a href="#additional" :class="{ active: activeSection === 'additional' }">Additional Content Alert</a>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="page-title mb-4">ALERTS</div>

      <!-- 1. Basic Example -->
      <div class="doc-section" id="basic">
        <h5>Basic Example</h5>
        <p class="desc">
          Provide contextual feedback messages for typical user actions with the handful of available and flexible
          alert messages. Alerts are available for any length of text, as well as an optional dismiss button.
        </p>
        <div class="demo-box demo-box-top">
          <div v-for="variant in basicVariants" :key="variant" :class="`alert alert-${variant}`" role="alert">
            A simple {{ variant }} alert—check it out!
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-primary"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple primary alert—check it out!
<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-secondary"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple secondary alert—check it out!
<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-success"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple success alert—check it out!
<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-danger"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple danger alert—check it out!
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <!-- 2. Dismissible Alerts -->
      <div class="doc-section" id="dismissible">
        <h5>Dismissible Alerts Example</h5>
        <p class="desc">
          Add a dismiss button and the <code>alert-dismissible</code> class, which adds extra padding to the right of
          the alert and positions the <code>.btn-close</code> button.
        </p>
        <div class="demo-box demo-box-top">
          <template v-for="item in dismissibles" :key="item.type">
            <div
              v-if="!item.dismissed"
              :class="`alert alert-dismissible fade show alert-${item.type}`"
              role="alert"
            >
              A simple {{ item.type }} alert—check it out!
              <button type="button" class="btn-close" @click="item.dismissed = true" aria-label="Close"></button>
            </div>
          </template>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-primary alert-dismissible fade show"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple primary alert—check it out!
  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="val">"button"</span> <span class="attr">class</span>=<span class="val">"btn-close"</span> <span class="attr">data-bs-dismiss</span>=<span class="val">"alert"</span> <span class="attr">aria-label</span>=<span class="val">"Close"</span><span class="tag">&gt;&lt;/button&gt;</span>
<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-dark alert-dismissible fade show mb-0"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple dark alert—check it out!
  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="val">"button"</span> <span class="attr">class</span>=<span class="val">"btn-close btn-close-white"</span> <span class="attr">data-bs-dismiss</span>=<span class="val">"alert"</span> <span class="attr">aria-label</span>=<span class="val">"Close"</span><span class="tag">&gt;&lt;/button&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <!-- 3. Alert Link -->
      <div class="doc-section" id="link">
        <h5>Alert Link Example</h5>
        <p class="desc">Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>
        <div class="demo-box demo-box-top">
          <div class="alert alert-primary" role="alert">A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
          <div class="alert alert-secondary" role="alert">A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
          <div class="alert alert-success" role="alert">A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
          <div class="alert alert-danger mb-0" role="alert">A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-primary"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple primary alert with <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="val">"#"</span> <span class="attr">class</span>=<span class="val">"alert-link"</span><span class="tag">&gt;</span>an example link<span class="tag">&lt;/a&gt;</span>.
<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-success"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple success alert with <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="val">"#"</span> <span class="attr">class</span>=<span class="val">"alert-link"</span><span class="tag">&gt;</span>an example link<span class="tag">&lt;/a&gt;</span>.
<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-danger"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  A simple danger alert with <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="val">"#"</span> <span class="attr">class</span>=<span class="val">"alert-link"</span><span class="tag">&gt;</span>an example link<span class="tag">&lt;/a&gt;</span>.
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <!-- 4. Icons Alert -->
      <div class="doc-section" id="icons">
        <h5>Icons Alert Example</h5>
        <p class="desc">You can also include additional elements like icons, heading, etc along side the actual message.</p>
        <div class="demo-box demo-box-top">
          <div class="alert alert-primary alert-icon" role="alert">
            <div class="icon-circle"><i class="bi bi-info-circle-fill"></i></div>
            <div>A simple primary alert—check it out!</div>
          </div>
          <div class="alert alert-secondary alert-icon" role="alert">
            <div class="icon-circle"><i class="bi bi-info-circle-fill"></i></div>
            <div>A simple secondary alert—check it out!</div>
          </div>
          <div class="alert alert-success alert-icon" role="alert">
            <div class="icon-circle"><i class="bi bi-check-circle-fill"></i></div>
            <div>A simple success alert—check it out!</div>
          </div>
          <div class="alert alert-danger alert-icon mb-0" role="alert">
            <div class="icon-circle"><i class="bi bi-exclamation-circle-fill"></i></div>
            <div>A simple danger alert—check it out!</div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-primary alert-icon"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"icon-circle"</span><span class="tag">&gt;&lt;i</span> <span class="attr">class</span>=<span class="val">"bi bi-info-circle-fill"</span><span class="tag">&gt;&lt;/i&gt;&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>A simple primary alert—check it out!<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-success alert-icon"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"icon-circle"</span><span class="tag">&gt;&lt;i</span> <span class="attr">class</span>=<span class="val">"bi bi-check-circle-fill"</span><span class="tag">&gt;&lt;/i&gt;&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>A simple success alert—check it out!<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <!-- 5. Additional Content -->
      <div class="doc-section" id="additional">
        <h5>Additional Content Alert Example</h5>
        <p class="desc">Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
        <div class="demo-box demo-box-top">
          <div class="row">
            <div class="col-md-6">
              <div class="alert alert-primary alert-additional mb-3 mb-md-0" role="alert">
                <h5><i class="bi bi-check2-circle me-1"></i> Well done!</h5>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr />
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="alert alert-secondary alert-additional mb-0" role="alert">
                <h5><i class="bi bi-check2-circle me-1"></i> Well done!</h5>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr />
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"alert alert-primary"</span> <span class="attr">role</span>=<span class="val">"alert"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;h4</span> <span class="attr">class</span>=<span class="val">"alert-heading"</span><span class="tag">&gt;</span>Well done!<span class="tag">&lt;/h4&gt;</span>
  <span class="tag">&lt;p&gt;</span>Aww yeah, you successfully read this important alert message.<span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;hr&gt;</span>
  <span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="val">"mb-0"</span><span class="tag">&gt;</span>Whenever you need to, be sure to use margin utilities.<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <!-- Footer -->
      <div class="page-footer">2024 © Larkon. Crafted by <a href="#">Techzaa</a></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const basicVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

const dismissibles = reactive([
  { type: 'primary',   dismissed: false },
  { type: 'secondary', dismissed: false },
  { type: 'success',   dismissed: false },
  { type: 'danger',    dismissed: false },
  { type: 'warning',   dismissed: false },
  { type: 'info',      dismissed: false },
  { type: 'light',     dismissed: false },
  { type: 'dark',      dismissed: false },
])

const activeSection = ref('basic')

function copyCode(event) {
  const pre = event.target.closest('.code-box').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
    event.target.textContent = 'Copied!'
    setTimeout(() => (event.target.textContent = 'Copy'), 1800)
  })
}
</script>

<style scoped>
.alerts-page {
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  color: #333;
  position: relative;
}

/* ── RIGHT NAV ── */
.right-nav {
  position: fixed;
  top: 80px;
  right: 24px;
  width: 170px;
  font-size: 12px;
  color: #555;
}
.right-nav-title {
  font-size: 11px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}
.right-nav a {
  display: block;
  padding: 3px 0;
  color: #555;
  text-decoration: none;
  transition: color 0.15s;
}
.right-nav a:hover { color: #6366f1; }
.right-nav a.active { color: #6366f1; font-weight: 600; }

/* ── MAIN CONTENT ── */
.main-content {
  padding: 28px 32px 60px 32px;
  margin-right: 200px;
}
.page-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.3px;
}

/* ── SECTIONS ── */
.doc-section { margin-bottom: 44px; }
.doc-section h5 { font-size: 15px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
.doc-section p.desc { font-size: 13px; color: #666; margin-bottom: 14px; line-height: 1.6; }

/* ── DEMO BOX ── */
.demo-box {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2px;
}
.demo-box-top {
  border-bottom: none;
  border-radius: 8px 8px 0 0;
}

/* ── CODE BOX ── */
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
pre :deep(.cmt)  { color: #6b7280; font-style: italic; }

/* ── ALERT OVERRIDES ── */
.alert { font-size: 13px; padding: 10px 16px; border-radius: 5px; margin-bottom: 8px; }
.alert-primary   { background: #e8eeff; border-color: #c7d2fe; color: #3730a3; }
.alert-secondary { background: #f3f4f6; border-color: #d1d5db; color: #374151; }
.alert-success   { background: #ecfdf5; border-color: #a7f3d0; color: #065f46; }
.alert-danger    { background: #fff1f2; border-color: #fecdd3; color: #9f1239; }
.alert-warning   { background: #fffbeb; border-color: #fde68a; color: #92400e; }
.alert-info      { background: #ecfeff; border-color: #a5f3fc; color: #155e75; }
.alert-light     { background: #fafafa; border-color: #e5e7eb; color: #374151; }
.alert-dark      { background: #2d3254; border-color: #3a3f5c; color: #c5cae9; }

.alert-dismissible .btn-close { padding: 12px; font-size: 11px; }
.alert-link { font-weight: 600; }

/* ── ICON ALERTS ── */
.alert-icon { display: flex; align-items: center; gap: 12px; }
.icon-circle {
  width: 32px; height: 32px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0; color: #fff;
}
.alert-primary   .icon-circle { background: #6366f1; }
.alert-secondary .icon-circle { background: #6b7280; }
.alert-success   .icon-circle { background: #10b981; }
.alert-danger    .icon-circle { background: #f43f5e; }

/* ── ADDITIONAL CONTENT ── */
.alert-additional { padding: 16px 20px; }
.alert-additional h5 { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
.alert-additional p  { font-size: 12.5px; margin-bottom: 0; line-height: 1.6; }
.alert-additional hr { border-color: rgba(0, 0, 0, 0.1); margin: 10px 0; }

/* ── FOOTER ── */
.page-footer { font-size: 12px; color: #aaa; text-align: center; margin-top: 40px; }
.page-footer a { color: #6366f1; text-decoration: none; }
</style>