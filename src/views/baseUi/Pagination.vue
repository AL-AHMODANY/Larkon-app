<template>
  <div class="pagination-page">
    <CdnSection />
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#default"    :class="{ active: activeSection === 'default' }">Default Example</a>
      <a href="#disabled"   :class="{ active: activeSection === 'disabled' }">Disabled &amp; Active States</a>
      <a href="#sizing"     :class="{ active: activeSection === 'sizing' }">Sizing</a>
      <a href="#alignment"  :class="{ active: activeSection === 'alignment' }">Alignment</a>
      <a href="#with-icons" :class="{ active: activeSection === 'with-icons' }">With Icons</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">PAGINATION</div>

      <!-- Default -->
      <div class="doc-section" id="default">
        <h5>Default Example</h5>
        <p class="desc">A pagination with 5 pages, using block level utility classes.</p>
        <div class="demo-box">
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">5</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
          </nav>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.default }}</code></pre>
        </div>
      </div>

      <!-- Disabled & Active -->
      <div class="doc-section" id="disabled">
        <h5>Disabled &amp; Active States</h5>
        <p class="desc">Use <code>.disabled</code> to show pages that cannot be navigated and <code>.active</code> to indicate the current page.</p>
        <div class="demo-box">
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
          </nav>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.disabled }}</code></pre>
        </div>
      </div>

      <!-- Sizing -->
      <div class="doc-section" id="sizing">
        <h5>Sizing</h5>
        <p class="desc">Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
        <div class="demo-box">
          <nav aria-label="Large"><ul class="pagination pagination-lg mb-3">
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
          </ul></nav>
          <nav aria-label="Default"><ul class="pagination mb-3">
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
          </ul></nav>
          <nav aria-label="Small"><ul class="pagination pagination-sm mb-0">
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
          </ul></nav>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.sizing }}</code></pre>
        </div>
      </div>

      <!-- Alignment -->
      <div class="doc-section" id="alignment">
        <h5>Alignment</h5>
        <p class="desc">Change the alignment of pagination components with flexbox utilities.</p>
        <div class="demo-box">
          <nav aria-label="Center"><ul class="pagination justify-content-center mb-3">
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
          </ul></nav>
          <nav aria-label="End"><ul class="pagination justify-content-end mb-0">
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
          </ul></nav>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap.alignment }}</code></pre>
        </div>
      </div>

      <!-- With Icons -->
      <div class="doc-section" id="with-icons">
        <h5>Pagination with Icons</h5>
        <p class="desc">Using icons in place of text for previous/next links.</p>
        <div class="demo-box">
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item"><a class="page-link" href="javascript:void(0);" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
            </ul>
          </nav>
        </div>
        <div class="code-box">
          <div class="code-header"><span class="code-lang">HTML</span><button class="copy-btn" @click="copyCode($event)">Copy</button></div>
          <pre class="code-pre"><code>{{ codeMap['with-icons'] }}</code></pre>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref } from 'vue'

const activeSection = ref('default')

const codeMap = {
  default:
`<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>`,

  disabled:
`<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>`,

  sizing:
`<!-- Large -->
<ul class="pagination pagination-lg">
  <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>

<!-- Default -->
<ul class="pagination">
  <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>

<!-- Small -->
<ul class="pagination pagination-sm">
  <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>`,

  alignment:
`<!-- Center aligned -->
<ul class="pagination justify-content-center">
  <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>

<!-- Right aligned -->
<ul class="pagination justify-content-end">
  <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>`,

  'with-icons':
`<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`,
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
.pagination-page { font-family: 'Inter', sans-serif; font-size: 13.5px; color: var(--text-primary); position: relative; }
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
:global([data-theme="dark"]) .demo-box { background: var(--card-bg) !important; border-color: var(--border-color) !important; }
</style>
