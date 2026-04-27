<template>
  <div class="placeholders-page">
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#default" :class="{ active: activeSection === 'default' }">Default Example</a>
      <a href="#colors" :class="{ active: activeSection === 'colors' }">Colors</a>
      <a href="#sizing" :class="{ active: activeSection === 'sizing' }">Sizing</a>
      <a href="#animation" :class="{ active: activeSection === 'animation' }">Animation</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">PLACEHOLDERS</div>

      <div class="doc-section" id="default">
        <h5>Default Example</h5>
        <p class="desc">Placeholders can be used to enhance the experience of loading content. They are visual placeholders only and don't communicate any actual content.</p>
        <div class="demo-box">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <div class="placeholder-glow">
                    <span class="placeholder col-12"></span>
                  </div>
                  <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                    <span class="placeholder col-5"></span>
                  </p>
                  <a href="javascript:void(0);" class="btn btn-primary disabled placeholder col-3"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"card"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"card-body"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;h5</span> <span class="attr">class</span>=<span class="val">"card-title"</span><span class="tag">&gt;</span>Special title treatment<span class="tag">&lt;/h5&gt;</span>
    <span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="val">"card-text"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-6"</span><span class="tag">&gt;&lt;/span&gt;</span>
      <span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-4"</span><span class="tag">&gt;&lt;/span&gt;</span>
    <span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"btn btn-primary disabled placeholder col-3"</span><span class="tag">&gt;&lt;/a&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="colors">
        <h5>Colors</h5>
        <p class="desc">Using the standard color utility classes, you may set the background of a placeholder.</p>
        <div class="demo-box">
          <span v-for="color in colors" :key="color" :class="`placeholder col-12 mb-2 bg-${color}`"></span>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12 bg-primary"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12 bg-secondary"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12 bg-success"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12 bg-danger"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12 bg-warning"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12 bg-info"</span><span class="tag">&gt;&lt;/span&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="sizing">
        <h5>Sizing</h5>
        <p class="desc">Set sizes using size utility classes like <code>.placeholder-lg</code>, <code>.placeholder-sm</code>, or <code>.placeholder-xs</code>.</p>
        <div class="demo-box">
          <span class="placeholder placeholder-xs col-12 mb-2"></span>
          <span class="placeholder placeholder-sm col-12 mb-2"></span>
          <span class="placeholder col-12 mb-2"></span>
          <span class="placeholder placeholder-lg col-12"></span>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder placeholder-xs"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder placeholder-sm"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder placeholder-lg"</span><span class="tag">&gt;&lt;/span&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="animation">
        <h5>Animation</h5>
        <p class="desc">Animate placeholders with <code>.placeholder-glow</code> or <code>.placeholder-wave</code>.</p>
        <div class="demo-box">
          <div class="row">
            <div class="col-md-6">
              <p class="placeholder-glow">
                <span class="placeholder col-12 mb-2"></span>
                <span class="placeholder col-12 mb-2"></span>
                <span class="placeholder col-12 mb-2"></span>
                <span class="placeholder col-12"></span>
              </p>
            </div>
            <div class="col-md-6">
              <p class="placeholder-wave">
                <span class="placeholder col-12 mb-2"></span>
                <span class="placeholder col-12 mb-2"></span>
                <span class="placeholder col-12 mb-2"></span>
                <span class="placeholder col-12"></span>
              </p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="val">"placeholder-glow"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;/p&gt;</span>

<span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="val">"placeholder-wave"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="val">"placeholder col-12"</span><span class="tag">&gt;&lt;/span&gt;</span>
<span class="tag">&lt;/p&gt;</span></pre>
        </div>
      </div>

      <div class="page-footer">2024 &copy; Larkon. Crafted by <a href="#">Techzaa</a></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeSection = ref('default')
const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

function copyCode(event) {
  const pre = event.target.closest('.code-box').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
    event.target.textContent = 'Copied!'
    setTimeout(() => (event.target.textContent = 'Copy'), 1800)
  })
}
</script>

<style scoped>
.placeholders-page {
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

.card {
  background: var(--bg-card);
  border-color: var(--border-color);
}
.card-body { color: var(--text-primary); }
.card-title { color: var(--text-primary); }
.card-text { color: var(--text-secondary); }

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--brand-primary); text-decoration: none; }
</style>
