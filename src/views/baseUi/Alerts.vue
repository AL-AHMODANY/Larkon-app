<template>
  <div class="alerts-page">
    <CdnSection />

    <!-- Right Nav -->
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#basic"      :class="{ active: activeSection === 'basic' }">Basic Example</a>
      <a href="#dismissible":class="{ active: activeSection === 'dismissible' }">Alert Dismissible</a>
      <a href="#link"       :class="{ active: activeSection === 'link' }">Alert Link</a>
      <a href="#icons"      :class="{ active: activeSection === 'icons' }">Icons Alert</a>
      <a href="#additional" :class="{ active: activeSection === 'additional' }">Additional Content Alert</a>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="page-title mb-4">ALERTS</div>

      <!-- 1. Basic Example -->
      <div class="doc-section" id="basic">
        <h5>Basic Example</h5>
        <p class="desc">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        <div class="demo-box demo-box-top">
          <div v-for="variant in basicVariants" :key="variant" :class="`alert alert-${variant}`" role="alert">
            A simple {{ variant }} alert—check it out!
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('basic')">{{ copied === 'basic' ? 'Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-pre"><code>{{ codes.basic }}</code></pre>
        </div>
      </div>

      <!-- 2. Dismissible Alerts -->
      <div class="doc-section" id="dismissible">
        <h5>Dismissible Alerts Example</h5>
        <p class="desc">Add a dismiss button and the <code>alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the <code>.btn-close</code> button.</p>
        <div class="demo-box demo-box-top">
          <template v-for="item in dismissibles" :key="item.type">
            <div v-if="!item.dismissed" :class="`alert alert-dismissible fade show alert-${item.type}`" role="alert">
              A simple {{ item.type }} alert—check it out!
              <button type="button" class="btn-close" @click="item.dismissed = true" aria-label="Close"></button>
            </div>
          </template>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('dismissible')">{{ copied === 'dismissible' ? 'Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-pre"><code>{{ codes.dismissible }}</code></pre>
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
            <button class="copy-btn" @click="copy('link')">{{ copied === 'link' ? 'Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-pre"><code>{{ codes.link }}</code></pre>
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
            <button class="copy-btn" @click="copy('icons')">{{ copied === 'icons' ? 'Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-pre"><code>{{ codes.icons }}</code></pre>
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
            <button class="copy-btn" @click="copy('additional')">{{ copied === 'additional' ? 'Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-pre"><code>{{ codes.additional }}</code></pre>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
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
const copied = ref(null)

const codes = {
  basic:
`<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
<div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
<div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
<div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
<div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
<div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
<div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
<div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>`,

  dismissible:
`<div class="alert alert-primary alert-dismissible fade show" role="alert">
  A simple primary alert—check it out!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-dark alert-dismissible fade show mb-0" role="alert">
  A simple dark alert—check it out!
  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`,

  link:
`<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>.
</div>`,

  icons:
`<div class="alert alert-primary d-flex align-items-center gap-3" role="alert">
  <i class="bi bi-info-circle-fill fs-5"></i>
  <div>A simple primary alert—check it out!</div>
</div>
<div class="alert alert-success d-flex align-items-center gap-3" role="alert">
  <i class="bi bi-check-circle-fill fs-5"></i>
  <div>A simple success alert—check it out!</div>
</div>
<div class="alert alert-danger d-flex align-items-center gap-3" role="alert">
  <i class="bi bi-exclamation-circle-fill fs-5"></i>
  <div>A simple danger alert—check it out!</div>
</div>`,

  additional:
`<div class="alert alert-primary" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>`,
}

function copy(key) {
  navigator.clipboard.writeText(codes[key] || '').then(() => {
    copied.value = key
    setTimeout(() => { copied.value = null }, 2000)
  })
}
</script>

<style scoped>
.alerts-page { font-family: 'Inter', sans-serif; font-size: 13.5px; color: #333; position: relative; }

.right-nav { position: fixed; top: 80px; right: 24px; width: 170px; font-size: 12px; color: #555; }
.right-nav-title { font-size: 11px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; letter-spacing: 0.3px; }
.right-nav a { display: block; padding: 3px 0; color: #555; text-decoration: none; transition: color 0.15s; }
.right-nav a:hover { color: #6366f1; }
.right-nav a.active { color: #6366f1; font-weight: 600; }

.main-content { padding: 28px 32px 60px 32px; margin-right: 200px; }
.page-title { font-size: 18px; font-weight: 700; color: #1a1a1a; letter-spacing: -0.3px; }

.doc-section { margin-bottom: 44px; }
.doc-section h5 { font-size: 15px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
.doc-section p.desc { font-size: 13px; color: #666; margin-bottom: 14px; line-height: 1.6; }

.demo-box { background: #fff; border: 1px solid #e8e8e8; border-radius: 8px; padding: 20px; margin-bottom: 2px; }
.demo-box-top { border-bottom: none; border-radius: 8px 8px 0 0; }

.code-box { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-lang { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-pre { margin: 0; padding: 12px 16px; overflow-x: auto; font-size: 0.73rem; line-height: 1.7; color: var(--text-secondary); background: var(--app-bg); max-height: 260px; font-family: 'Courier New', monospace; white-space: pre; }
.code-pre code { font-family: inherit; font-size: inherit; color: inherit; background: none; padding: 0; }

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

.alert-icon { display: flex; align-items: center; gap: 12px; }
.icon-circle { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; color: #fff; }
.alert-primary   .icon-circle { background: #6366f1; }
.alert-secondary .icon-circle { background: #6b7280; }
.alert-success   .icon-circle { background: #10b981; }
.alert-danger    .icon-circle { background: #f43f5e; }

.alert-additional { padding: 16px 20px; }
.alert-additional h5 { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
.alert-additional p  { font-size: 12.5px; margin-bottom: 0; line-height: 1.6; }
.alert-additional hr { border-color: rgba(0,0,0,0.1); margin: 10px 0; }

:global([data-theme="dark"]) .alerts-page { background: var(--bg-body) !important; color: var(--text-primary) !important; }
:global([data-theme="dark"]) .demo-box { background: var(--card-bg) !important; border-color: var(--border-color) !important; }
:global([data-theme="dark"]) .demo-box-top { border-color: var(--border-color) !important; }
:global([data-theme="dark"]) .right-nav a { color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .right-nav a.active { color: var(--accent) !important; }
</style>
