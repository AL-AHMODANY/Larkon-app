<template>
  <div class="pagination-page">
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#default" :class="{ active: activeSection === 'default' }">Default Example</a>
      <a href="#disabled" :class="{ active: activeSection === 'disabled' }">Disabled & Active States</a>
      <a href="#sizing" :class="{ active: activeSection === 'sizing' }">Sizing</a>
      <a href="#alignment" :class="{ active: activeSection === 'alignment' }">Alignment</a>
      <a href="#with-icons" :class="{ active: activeSection === 'with-icons' }">With Icons</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">PAGINATION</div>

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
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;nav</span> <span class="attr">aria-label</span>=<span class="val">"Page navigation example"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>Previous<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>1<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>2<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>3<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>Next<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;/nav&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="disabled">
        <h5>Disabled & Active States</h5>
        <p class="desc">Use <code>.disabled</code> class to show pages that cannot be navigated and <code>.active</code> class to indicate the current page.</p>
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
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;nav</span> <span class="attr">aria-label</span>=<span class="val">"Page navigation example"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item disabled"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>Previous<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>1<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item active"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>2<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>3<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>Next<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;/nav&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="sizing">
        <h5>Sizing</h5>
        <p class="desc">Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
        <div class="demo-box">
          <nav aria-label="Large size pagination">
            <ul class="pagination pagination-lg mb-3">
              <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
          </nav>
          <nav aria-label="Default pagination">
            <ul class="pagination mb-3">
              <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
          </nav>
          <nav aria-label="Small size pagination">
            <ul class="pagination pagination-sm mb-0">
              <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
          </nav>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination pagination-lg"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination pagination-sm"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/ul&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="alignment">
        <h5>Alignment</h5>
        <p class="desc">Change the alignment of pagination components with flexbox utilities.</p>
        <div class="demo-box">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center mb-3">
              <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
          </nav>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end mb-0">
              <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
          </nav>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination justify-content-center"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination justify-content-end"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/ul&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="with-icons">
        <h5>Pagination with Icons</h5>
        <p class="desc">Using icons in place of text for some pagination links.</p>
        <div class="demo-box">
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;nav</span> <span class="attr">aria-label</span>=<span class="val">"Page navigation example"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"pagination"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span> <span class="attr">aria-label</span>=<span class="val">"Previous"</span><span class="tag">&gt;</span>
        <span aria-hidden="true">&laquo;</span>
      <span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>1<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>2<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"page-item"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"page-link"</span> <span class="attr">href</span>=<span class="val">"#"</span> <span class="attr">aria-label</span>=<span class="val">"Next"</span><span class="tag">&gt;</span>
        <span aria-hidden="true">&raquo;</span>
      <span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;/nav&gt;</span></pre>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import PageFooter from '../../components/layout/Footer.vue'
import { ref } from 'vue'

const activeSection = ref('default')

function copyCode(event) {
  const pre = event.target.closest('.code-box').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
    event.target.textContent = 'Copied!'
    setTimeout(() => (event.target.textContent = 'Copy'), 1800)
  })
}
</script>

<style scoped>
.pagination-page {
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
  color: #555;
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
.right-nav a:hover { color: var(--accent); }
.right-nav a.active { color: var(--accent); font-weight: 600; }

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
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2px;
}

.code-box {
  border: 1px solid var(--card-border);
  border-radius: 8px;
  overflow: hidden;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 5px;
  font-size: 0.73rem;
  padding: 3px 10px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
pre {
  margin: 0;
  padding: 12px 16px;
  overflow-x: auto;
  font-size: 0.73rem;
  line-height: 1.7;
  color: var(--text-secondary);
  background: var(--app-bg);
  max-height: 200px;
  font-family: 'Courier New', monospace;
}
pre :deep(.tag)  { color: #e06c75; }
pre :deep(.attr) { color: #d19a66; }
pre :deep(.val)  { color: #98c379; }
pre :deep(.cmt)  { color: #6b7280; font-style: italic; }

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--accent); text-decoration: none; }

[data-theme="dark"] .demo-box {
  background: var(--card-bg);
  border-color: var(--border-color);
}
</style>
