<template>
  <div class="spinner-page" :class="{ dark: isDark }">

    <!-- Theme Toggle -->
    <div class="theme-toggle-bar">
      <span class="theme-label">{{ isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}</span>
      <button class="theme-btn" @click="isDark = !isDark">
        {{ isDark ? 'Switch to Light' : 'Switch to Dark' }}
      </button>
    </div>

    <div class="container py-5">

      <!-- Border Spinners -->
      <section class="mb-5">
        <h2 class="section-title">Border Spinners</h2>
        <p class="section-desc">Use the border spinners for a lightweight loading indicator.</p>
        <div class="demo-box">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c1')">{{ copied === 'c1' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c1">&lt;!-- Border Spinner --&gt;
&lt;div class="spinner-border text-primary" role="status"&gt;
  &lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;
&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Color Spinners -->
      <section class="mb-5">
        <h2 class="section-title">Color Spinners</h2>
        <p class="section-desc">You can use any of our text color utilities on the standard spinner.</p>
        <div class="demo-box d-flex flex-wrap gap-3 align-items-center">
          <div v-for="color in colors" :key="color" :class="`spinner-border text-${color}`" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c2')">{{ copied === 'c2' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c2">&lt;div class="spinner-border text-primary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-secondary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-success" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-danger" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-warning" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-info" role="status"&gt;&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Growing Spinners -->
      <section class="mb-5">
        <h2 class="section-title">Growing Spinners</h2>
        <p class="section-desc">If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!</p>
        <div class="demo-box">
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c3')">{{ copied === 'c3' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c3">&lt;!-- Growing Spinner --&gt;
&lt;div class="spinner-grow text-primary" role="status"&gt;
  &lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;
&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Color Growing Spinners -->
      <section class="mb-5">
        <h2 class="section-title">Color Growing Spinners</h2>
        <p class="section-desc">You can use any of our text color utilities on the standard spinner.</p>
        <div class="demo-box d-flex flex-wrap gap-3 align-items-center">
          <div v-for="color in colors" :key="'g-' + color" :class="`spinner-grow text-${color}`" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c4')">{{ copied === 'c4' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c4">&lt;div class="spinner-grow text-info" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-warning" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-danger" role="status"&gt;&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Alignment -->
      <section class="mb-5">
        <h2 class="section-title">Alignment</h2>
        <p class="section-desc">Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them.</p>
        <div class="demo-box">
          <div class="d-flex justify-content-center border p-2">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c5')">{{ copied === 'c5' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c5">&lt;div class="d-flex justify-content-center border p-2"&gt;
  &lt;div class="spinner-border text-primary" role="status"&gt;
    &lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Size -->
      <section class="mb-5">
        <h2 class="section-title">Size</h2>
        <p class="section-desc">Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make a smaller spinner that can quickly be used within other components.</p>
        <div class="demo-box d-flex gap-3 align-items-center">
          <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
          <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
          <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
          <div class="spinner-grow text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c6')">{{ copied === 'c6' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c6">&lt;div class="spinner-border spinner-border-sm text-primary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow spinner-grow-sm text-primary" role="status"&gt;&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Placement -->
      <section class="mb-5">
        <h2 class="section-title">Placement</h2>
        <p class="section-desc">Use float utilities or text alignment utilities to place spinners exactly where you need them.</p>
        <div class="demo-box">
          <div class="d-flex align-items-center border p-2">
            <strong>Loading...</strong>
            <div class="spinner-border spinner-border-sm text-primary ms-auto" role="status" aria-hidden="true"></div>
          </div>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c7')">{{ copied === 'c7' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c7">&lt;div class="d-flex align-items-center border p-2"&gt;
  &lt;strong&gt;Loading...&lt;/strong&gt;
  &lt;div class="spinner-border ms-auto" role="status" aria-hidden="true"&gt;&lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </section>

      <!-- Buttons Spinner -->
      <section class="mb-5">
        <h2 class="section-title">Buttons Spinner</h2>
        <p class="section-desc">Use spinners within buttons to indicate an action is currently processing or taking place.</p>
        <div class="demo-box d-flex flex-wrap gap-3">
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
            Loading...
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </div>
        <div class="code-wrapper">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy('c8')">{{ copied === 'c8' ? '✓ Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-block" id="c8">&lt;button class="btn btn-primary" type="button" disabled&gt;
  &lt;span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"&gt;&lt;/span&gt;
  Loading...
&lt;/button&gt;
&lt;button class="btn btn-primary" type="button" disabled&gt;
  &lt;span class="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"&gt;&lt;/span&gt;
  Loading...
&lt;/button&gt;</pre>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerPage',
  data() {
    return {
      isDark: false,
      copied: null,
      colors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
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
.spinner-page {
  --bg:               #f4f6f9;
  --surface:          #ffffff;
  --border:           #e2e8f0;
  --text:             #1a202c;
  --text-muted:       #64748b;
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
.spinner-page.dark {
  --bg:               #0f1117;
  --surface:          #1a1d27;
  --border:           #2d3148;
  --text:             #e2e8f0;
  --text-muted:       #8892b0;
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