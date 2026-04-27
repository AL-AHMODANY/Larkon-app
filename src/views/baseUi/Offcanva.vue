<template>
  <div class="offcanvas-page" :class="{ dark: isDark }">

    <!-- Theme Toggle -->
    <div class="theme-toggle-bar">
      <span class="theme-label">{{ isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}</span>
      <button class="theme-btn" @click="isDark = !isDark">
        {{ isDark ? 'Switch to Light' : 'Switch to Dark' }}
      </button>
    </div>

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
  &lt;div class="offcanvas-body"&gt;...&lt;/div&gt;
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
  &lt;div class="offcanvas-body"&gt;Content here...&lt;/div&gt;
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

  </div>
</template>

<script>
export default {
  name: 'OffcanvasPage',
  data() {
    return {
      isDark: false,
      copied: null
    }
  },
  methods: {
    copy(id) {
      const el = document.getElementById(id)
      if (el) {
        navigator.clipboard.writeText(el.innerText).then(() => {
          this.copied = id
          setTimeout(() => { this.copied = null }, 2000)
        })
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── Light mode defaults ── */
.offcanvas-page {
  --bg:               #f4f6f9;
  --surface:          #ffffff;
  --border:           #e2e8f0;
  --text:             #1a202c;
  --text-muted:       #64748b;
  --list-text:        #374151;
  --code-bg:          #1e2030;
  --code-header-bg:   #252840;
  --code-border:      #3b3f52;
  --code-text:        #c0caf5;
  --inline-code-bg:   #eef2ff;
  --inline-code-text: #e11d48;
  --copy-bg:          #3b3f52;
  --copy-text:        #a9b1d6;
  --copy-hover:       #515572;
  --toggle-bg:        #6366f1;
  --toggle-text:      #ffffff;

  font-family: 'DM Sans', sans-serif;
  background-color: var(--bg);
  min-height: 100vh;
  color: var(--text);
  transition: background-color 0.3s, color 0.3s;
}

/* ── Dark mode overrides ── */
.offcanvas-page.dark {
  --bg:               #0f1117;
  --surface:          #1a1d27;
  --border:           #2d3148;
  --text:             #e2e8f0;
  --text-muted:       #8892b0;
  --list-text:        #a0aec0;
  --code-bg:          #13141f;
  --code-header-bg:   #1e2030;
  --code-border:      #2d3148;
  --code-text:        #c0caf5;
  --inline-code-bg:   #1e2030;
  --inline-code-text: #ff79c6;
  --copy-bg:          #2d3148;
  --copy-text:        #a9b1d6;
  --copy-hover:       #3b3f52;
  --toggle-bg:        #7c3aed;
}

/* ── Theme bar ── */
.theme-toggle-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 0.65rem 1.5rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s, border-color 0.3s;
}
.theme-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-muted);
}
.theme-btn {
  background: var(--toggle-bg);
  color: var(--toggle-text);
  border: none;
  border-radius: 6px;
  padding: 0.32rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: opacity 0.2s;
}
.theme-btn:hover { opacity: 0.82; }

/* ── Sections ── */
.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text);
  transition: color 0.3s;
}
.section-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
  line-height: 1.6;
  transition: color 0.3s;
}
.position-list {
  list-style: disc;
  padding-left: 1.25rem;
  font-size: 0.87rem;
  color: var(--list-text);
  transition: color 0.3s;
}
.position-list li { margin-bottom: 0.3rem; }

/* ── Demo box ── */
.demo-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 1.5rem;
  transition: background 0.3s, border-color 0.3s;
}

/* ── Code wrapper ── */
.code-wrapper {
  border: 1px solid var(--code-border);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  margin-bottom: 0.25rem;
  transition: border-color 0.3s;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.42rem 1rem;
  background: var(--code-header-bg);
  border-bottom: 1px solid var(--code-border);
  transition: background 0.3s;
}
.code-lang {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--code-text);
  opacity: 0.55;
  font-family: 'JetBrains Mono', monospace;
}
.copy-btn {
  background: var(--copy-bg);
  color: var(--copy-text);
  border: 1px solid var(--code-border);
  border-radius: 5px;
  padding: 0.18rem 0.65rem;
  font-size: 0.72rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.2s, color 0.2s;
}
.copy-btn:hover {
  background: var(--copy-hover);
  color: #fff;
}

/* ── Code block ── */
.code-block {
  margin: 0;
  padding: 1rem 1.25rem;
  background: var(--code-bg);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--code-text);
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.75;
  overflow-x: auto;
  transition: background 0.3s, color 0.3s;
}

/* ── Inline code ── */
code {
  background: var(--inline-code-bg);
  color: var(--inline-code-text);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.82rem;
  font-family: 'JetBrains Mono', monospace;
  transition: background 0.3s, color 0.3s;
}

/* ── Responsive ── */
@media (max-width: 576px) {
  .container { padding-left: 1rem; padding-right: 1rem; }
  .demo-box { padding: 1rem; }
  .theme-toggle-bar { padding: 0.5rem 1rem; }
}
</style> 