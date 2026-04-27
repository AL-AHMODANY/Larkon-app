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

      <div class="page-footer">2024 &copy; Larkon. Crafted by <a href="#">Techzaa</a></div>
    </div>
  </div>
</template>

<script setup>
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
pre :deep(.cmt)  { color: #6b7280; font-style: italic; }

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--brand-primary); text-decoration: none; }

[data-theme="dark"] .demo-box {
  background: var(--bg-card);
  border-color: var(--border-color);
}
</style>
