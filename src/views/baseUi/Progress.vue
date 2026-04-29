<template>
  <div class="progress-page">
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#default" :class="{ active: activeSection === 'default' }">Default Example</a>
      <a href="#labels" :class="{ active: activeSection === 'labels' }">Labels</a>
      <a href="#height" :class="{ active: activeSection === 'height' }">Height</a>
      <a href="#backgrounds" :class="{ active: activeSection === 'backgrounds' }">Backgrounds</a>
      <a href="#striped" :class="{ active: activeSection === 'striped' }">Striped</a>
      <a href="#animated" :class="{ active: activeSection === 'animated' }">Animated Stripes</a>
      <a href="#multiple" :class="{ active: activeSection === 'multiple' }">Multiple Bars</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">PROGRESS</div>

      <div class="doc-section" id="default">
        <h5>Default Example</h5>
        <p class="desc">Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
        <div class="demo-box">
          <div class="progress mb-3" style="height: 6px;">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 6px;">
            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 6px;">
            <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" style="height: 6px;">
            <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress"</span> <span class="attr">style</span>=<span class="val">"height: 6px"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 25%"</span> <span class="attr">aria-valuenow</span>=<span class="val">"25"</span> <span class="attr">aria-valuemin</span>=<span class="val">"0"</span> <span class="attr">aria-valuemax</span>=<span class="val">"100"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="labels">
        <h5>Labels</h5>
        <p class="desc">Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>
        <div class="demo-box">
          <div class="progress mb-3" style="height: 20px;">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div>
          <div class="progress mb-3" style="height: 20px;">
            <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div class="progress mb-3" style="height: 20px;">
            <div class="progress-bar bg-info" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <div class="progress" style="height: 20px;">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 25%"</span><span class="tag">&gt;</span>25%<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="height">
        <h5>Height</h5>
        <p class="desc">Only set heights on the <code>.progress</code> wrapper, and the inner <code>.progress-bar</code> will automatically resize accordingly.</p>
        <div class="demo-box">
          <div class="progress mb-3" style="height: 2px;">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 8px;">
            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 14px;">
            <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" style="height: 22px;">
            <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress"</span> <span class="attr">style</span>=<span class="val">"height: 2px"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 25%"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress"</span> <span class="attr">style</span>=<span class="val">"height: 8px"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 50%"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="backgrounds">
        <h5>Backgrounds</h5>
        <p class="desc">Use background utility classes to change the appearance of individual progress bars.</p>
        <div class="demo-box">
          <div class="progress mb-3" style="height: 8px;">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 8px;">
            <div class="progress-bar bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 8px;">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" style="height: 8px;">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar bg-success"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 25%"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar bg-info"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 50%"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar bg-warning"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 75%"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar bg-danger"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 100%"</span><span class="tag">&gt;&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="striped">
        <h5>Striped</h5>
        <p class="desc">Add <code>.progress-bar-striped</code> to apply a stripe via CSS gradient over the progress bar's background color.</p>
        <div class="demo-box">
          <div class="progress mb-3" style="height: 8px;">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 8px;">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 8px;">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" style="height: 8px;">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar progress-bar-striped"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 25%"</span><span class="tag">&gt;&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="animated">
        <h5>Animated Stripes</h5>
        <p class="desc">The striped gradient can also be animated by adding <code>.progress-bar-animated</code>.</p>
        <div class="demo-box">
          <div class="progress" style="height: 8px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar progress-bar-striped progress-bar-animated"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 75%"</span><span class="tag">&gt;&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="doc-section" id="multiple">
        <h5>Multiple Bars</h5>
        <p class="desc">Include multiple progress bars in a progress component if you need.</p>
        <div class="demo-box">
          <div class="progress" style="height: 14px;">
            <div class="progress-bar" role="progressbar" style="width: 15%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-info" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress"</span> <span class="attr">style</span>=<span class="val">"height: 14px"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 15%"</span><span class="tag">&gt;&lt;/div&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar bg-success"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 30%"</span><span class="tag">&gt;&lt;/div&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"progress-bar bg-info"</span> <span class="attr">role</span>=<span class="val">"progressbar"</span> <span class="attr">style</span>=<span class="val">"width: 20%"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
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
.progress-page {
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

.progress {
  background: var(--bg-hover);
}

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--accent); text-decoration: none; }
</style>
