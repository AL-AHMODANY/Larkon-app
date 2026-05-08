<template>
  <div class="offcanvas-page">
    <CdnSection />

  <!-- Theme Toggle removed — uses global theme from settings -->

    <div class="container py-5">

      <!-- Default Buttons -->
      <section class="mb-5">
        <h2 class="section-title">Default Buttons</h2>
        <p class="section-desc">
          You can use a link with the <code>href</code> attribute, or a button with the
          <code>data-bs-target</code> attribute. In both cases,
          <code>data-bs-toggle="offcanvas"</code> is required.
        </p>
        <div class="demo-box d-flex flex-wrap gap-3">
          <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasLink" role="button">Link with href</a>
          <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasButton">
            Button with data-bs-target
          </button>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('o1')">{{ copied === 'o1' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="o1">&lt;a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasLink" role="button"&gt;
  Link with href
&lt;/a&gt;
&lt;button class="btn btn-secondary" type="button"
  data-bs-toggle="offcanvas" data-bs-target="#offcanvasButton"&gt;
  Button with data-bs-target
&lt;/button&gt;</pre>
        </div>
      </section>

      <!-- Static Backdrop -->
      <section class="mb-5">
        <h2 class="section-title">Static Backdrop</h2>
        <p class="section-desc">
          Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible.
          Use <code>data-bs-scroll</code> to toggle scrolling and <code>data-bs-backdrop</code> to toggle the backdrop.
        </p>
        <div class="demo-box d-flex flex-wrap gap-3">
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScroll">
            Enable Body Scrolling
          </button>
          <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop">
            Enable Backdrop (Default)
          </button>
          <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth">
            Enable Both Scrolling &amp; Backdrop
          </button>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('o2')">{{ copied === 'o2' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="o2">&lt;!-- scrolling offcanvas --&gt;
&lt;div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
  tabindex="-1" id="offcanvasScroll"&gt;
  &lt;div class="offcanvas-header"&gt;
    &lt;h5 class="offcanvas-title"&gt;Body Scrolling Enabled&lt;/h5&gt;
    &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="offcanvas-body"&gt;
    Body scrolling is enabled. Backdrop is disabled.
  &lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Offcanvas Position -->
      <section class="mb-5">
        <h2 class="section-title">Offcanvas Position</h2>
        <p class="section-desc">Try the top, right, bottom and left examples out below.</p>
        <ul class="position-list mb-3">
          <li><code>.offcanvas-top</code> — places offcanvas on the top of the viewport</li>
          <li><code>.offcanvas-end</code> — places offcanvas on the right of the viewport</li>
          <li><code>.offcanvas-bottom</code> — places offcanvas on the bottom of the viewport</li>
          <li><code>.offcanvas-start</code> — places offcanvas on the left of the viewport</li>
        </ul>
        <div class="demo-box d-flex flex-wrap gap-3">
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">Left Offcanvas</button>
          <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Right Offcanvas</button>
          <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop">Top Offcanvas</button>
          <button class="btn btn-info text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">Bottom Offcanvas</button>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('o3')">{{ copied === 'o3' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="o3">&lt;!-- left offcanvas --&gt;
&lt;div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft"
  aria-labelledby="offcanvasLeftLabel"&gt;
  &lt;div class="offcanvas-header"&gt;
    &lt;h5 class="offcanvas-title" id="offcanvasLeftLabel"&gt;Left Offcanvas&lt;/h5&gt;
    &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="offcanvas-body"&gt;Slides in from the left side of the viewport.&lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </section>

    </div>

    <!-- ───── Offcanvas panels ───── -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLink" aria-labelledby="offcanvasLinkLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLinkLabel">Link Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Opened via a link with <strong>href</strong>.</div>
    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasButton" aria-labelledby="offcanvasButtonLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasButtonLabel">Button Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Opened via a button with <strong>data-bs-target</strong>.</div>
    </div>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScroll">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Body Scrolling Enabled</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Body scrolling is enabled. Backdrop is disabled.</div>
    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasBackdrop">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Backdrop Enabled (Default)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Default behavior — backdrop enabled, scrolling disabled.</div>
    </div>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasBoth">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Both Scrolling &amp; Backdrop</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Both body scrolling and backdrop are enabled.</div>
    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLeftLabel">Left Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Slides in from the <strong>left</strong>.</div>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Right Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Slides in from the <strong>right</strong>.</div>
    </div>

    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasTopLabel">Top Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Slides in from the <strong>top</strong>.</div>
    </div>

    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Bottom Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">Slides in from the <strong>bottom</strong>.</div>
    </div>
    <PageFooter />

  </div>
</template>

<script>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'

const codeStrings = {
  o1: `<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasLink" role="button">
  Link with href
</a>
<button class="btn btn-secondary" type="button"
  data-bs-toggle="offcanvas" data-bs-target="#offcanvasButton">
  Button with data-bs-target
</button>

<!-- Offcanvas panel -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLink">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas Title</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Some text as placeholder. In real life you can have the elements you have chosen.
  </div>
</div>`,

  o2: `<!-- Scrolling enabled, backdrop disabled -->
<button class="btn btn-primary" type="button"
  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScroll">
  Enable Body Scrolling
</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
  tabindex="-1" id="offcanvasScroll">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Body Scrolling Enabled</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Body scrolling is enabled. Backdrop is disabled.
  </div>
</div>

<!-- Backdrop enabled (default) -->
<button class="btn btn-secondary" type="button"
  data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop">
  Enable Backdrop (Default)
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasBackdrop">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Backdrop Enabled</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Default behavior — backdrop enabled, scrolling disabled.
  </div>
</div>`,

  o3: `<!-- Left offcanvas -->
<button class="btn btn-primary" type="button"
  data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
  Left Offcanvas
</button>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Left Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">Slides in from the left side of the viewport.</div>
</div>

<!-- Right offcanvas -->
<button class="btn btn-secondary" type="button"
  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
  Right Offcanvas
</button>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Right Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">Slides in from the right side of the viewport.</div>
</div>

<!-- Top offcanvas -->
<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Top Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">Slides in from the top.</div>
</div>

<!-- Bottom offcanvas -->
<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Bottom Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">Slides in from the bottom.</div>
</div>`,
}

export default {
  name: 'OffcanvasPage',
  components: { CdnSection, PageFooter },
  data() {
    return { copied: null }
  },
  methods: {
    copy(id) {
      const text = codeStrings[id] || ''
      navigator.clipboard.writeText(text).then(() => {
        this.copied = id
        setTimeout(() => { this.copied = null }, 2000)
      })
    }
  }
}
</script>

<style scoped>
/* ── Offcanvas page uses global theme vars ── */
.offcanvas-page { padding: 0; min-height: 100vh; background: var(--bg-body); color: var(--text-primary); }

.section-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; color: var(--text-primary); }
.section-desc  { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.85rem; line-height: 1.6; }
.position-list { list-style: disc; padding-left: 1.25rem; font-size: 0.87rem; color: var(--text-secondary); }
.position-list li { margin-bottom: 0.3rem; }

.demo-box {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 1.5rem;
}

.code-wrapper {
  border: 1px solid var(--card-border);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}
.code-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px;
  background: var(--app-bg);
  border-bottom: 1px solid var(--card-border);
}
.code-lang {
  background: var(--accent); color: #fff;
  font-size: 0.67rem; font-weight: 700;
  padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px;
}
.copy-btn {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 5px; padding: 3px 10px; font-size: 0.73rem;
  color: var(--text-muted); cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }

.code-block {
  margin: 0; padding: 12px 16px;
  background: var(--app-bg);
  font-family: 'Courier New', monospace;
  font-size: 0.76rem; color: var(--text-secondary);
  white-space: pre-wrap; word-break: break-word;
  line-height: 1.75; overflow-x: auto;
}

code {
  background: var(--accent-muted); color: var(--accent);
  padding: 1px 5px; border-radius: 4px; font-size: 0.82rem;
}

@media (max-width: 576px) {
  .container { padding-left: 1rem; padding-right: 1rem; }
  .demo-box { padding: 1rem; }
}
</style> 