<template>
  <div class="spinner-page">
    <CdnSection />

  <!-- Theme Toggle removed — uses global theme from settings -->

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
    <PageFooter />
  </div>
</template>

<script>
import CdnSection from '../../components/CdnSection.vue'
// footer
import PageFooter from '../../components/layout/Footer.vue'
export default {
  name: 'SpinnerPage',
  data() {
    return {
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
/* ── Spinner page uses global theme vars ── */
.spinner-page { padding: 0; min-height: 100vh; background: var(--bg-body); color: var(--text-primary); }

.section-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; color: var(--text-primary); }
.section-desc  { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.85rem; line-height: 1.6; }

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