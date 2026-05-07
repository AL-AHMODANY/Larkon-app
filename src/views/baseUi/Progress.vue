<template>
  <div class="progress-page">
    <CdnSection />
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#default"    :class="{ active: activeSection === 'default' }">Default Example</a>
      <a href="#labels"     :class="{ active: activeSection === 'labels' }">Labels</a>
      <a href="#height"     :class="{ active: activeSection === 'height' }">Height</a>
      <a href="#backgrounds":class="{ active: activeSection === 'backgrounds' }">Backgrounds</a>
      <a href="#striped"    :class="{ active: activeSection === 'striped' }">Striped</a>
      <a href="#animated"   :class="{ active: activeSection === 'animated' }">Animated Stripes</a>
      <a href="#multiple"   :class="{ active: activeSection === 'multiple' }">Multiple Bars</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">PROGRESS</div>

      <div v-for="s in sections" :key="s.id" class="doc-section" :id="s.id">
        <h5>{{ s.title }}</h5>
        <p class="desc" v-html="s.desc"></p>
        <div class="demo-box" v-html="s.demo"></div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copy(s.id)">{{ copied === s.id ? 'Copied!' : 'Copy' }}</button>
          </div>
          <pre class="code-pre"><code>{{ s.code }}</code></pre>
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
const copied = ref(null)

function copy(id) {
  const s = sections.find(x => x.id === id)
  if (!s) return
  navigator.clipboard.writeText(s.code).then(() => {
    copied.value = id
    setTimeout(() => { copied.value = null }, 1800)
  })
}

const sections = [
  {
    id: 'default',
    title: 'Default Example',
    desc: 'Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.',
    demo: `
      <div class="progress mb-3" style="height:6px"><div class="progress-bar" role="progressbar" style="width:25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
      <div class="progress mb-3" style="height:6px"><div class="progress-bar" role="progressbar" style="width:50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>
      <div class="progress mb-3" style="height:6px"><div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>
      <div class="progress"      style="height:6px"><div class="progress-bar" role="progressbar" style="width:100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>`,
    code:
`<div class="progress" style="height: 6px;">
  <div class="progress-bar" role="progressbar" style="width: 25%"
       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 6px;">
  <div class="progress-bar" role="progressbar" style="width: 50%"
       aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 6px;">
  <div class="progress-bar" role="progressbar" style="width: 75%"
       aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 6px;">
  <div class="progress-bar" role="progressbar" style="width: 100%"
       aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`,
  },
  {
    id: 'labels',
    title: 'Labels',
    desc: 'Add labels to your progress bars by placing text within the <code>.progress-bar</code>.',
    demo: `
      <div class="progress mb-3" style="height:20px"><div class="progress-bar" role="progressbar" style="width:25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>
      <div class="progress mb-3" style="height:20px"><div class="progress-bar bg-success" role="progressbar" style="width:50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div></div>
      <div class="progress mb-3" style="height:20px"><div class="progress-bar bg-info" role="progressbar" style="width:75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div></div>
      <div class="progress"      style="height:20px"><div class="progress-bar bg-danger" role="progressbar" style="width:100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div></div>`,
    code:
`<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%"
       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar bg-success" role="progressbar" style="width: 50%"
       aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar bg-info" role="progressbar" style="width: 75%"
       aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%"
       aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>`,
  },
  {
    id: 'height',
    title: 'Height',
    desc: 'Only set heights on the <code>.progress</code> wrapper, and the inner <code>.progress-bar</code> will automatically resize accordingly.',
    demo: `
      <div class="progress mb-3" style="height:2px"><div class="progress-bar" role="progressbar" style="width:25%"></div></div>
      <div class="progress mb-3" style="height:8px"><div class="progress-bar" role="progressbar" style="width:50%"></div></div>
      <div class="progress mb-3" style="height:14px"><div class="progress-bar" role="progressbar" style="width:75%"></div></div>
      <div class="progress"      style="height:22px"><div class="progress-bar" role="progressbar" style="width:100%"></div></div>`,
    code:
`<div class="progress" style="height: 2px;">
  <div class="progress-bar" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress" style="height: 8px;">
  <div class="progress-bar" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress" style="height: 14px;">
  <div class="progress-bar" role="progressbar" style="width: 75%"></div>
</div>
<div class="progress" style="height: 22px;">
  <div class="progress-bar" role="progressbar" style="width: 100%"></div>
</div>`,
  },
  {
    id: 'backgrounds',
    title: 'Backgrounds',
    desc: 'Use background utility classes to change the appearance of individual progress bars.',
    demo: `
      <div class="progress mb-3" style="height:8px"><div class="progress-bar bg-success" role="progressbar" style="width:25%"></div></div>
      <div class="progress mb-3" style="height:8px"><div class="progress-bar bg-info"    role="progressbar" style="width:50%"></div></div>
      <div class="progress mb-3" style="height:8px"><div class="progress-bar bg-warning" role="progressbar" style="width:75%"></div></div>
      <div class="progress"      style="height:8px"><div class="progress-bar bg-danger"  role="progressbar" style="width:100%"></div></div>`,
    code:
`<div class="progress" style="height: 8px;">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress" style="height: 8px;">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress" style="height: 8px;">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%"></div>
</div>
<div class="progress" style="height: 8px;">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%"></div>
</div>`,
  },
  {
    id: 'striped',
    title: 'Striped',
    desc: 'Add <code>.progress-bar-striped</code> to apply a stripe via CSS gradient over the progress bar\'s background color.',
    demo: `
      <div class="progress mb-3" style="height:8px"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:25%"></div></div>
      <div class="progress mb-3" style="height:8px"><div class="progress-bar progress-bar-striped bg-info"    role="progressbar" style="width:50%"></div></div>
      <div class="progress mb-3" style="height:8px"><div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width:75%"></div></div>
      <div class="progress"      style="height:8px"><div class="progress-bar progress-bar-striped bg-danger"  role="progressbar" style="width:100%"></div></div>`,
    code:
`<div class="progress" style="height: 8px;">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress" style="height: 8px;">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress" style="height: 8px;">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%"></div>
</div>
<div class="progress" style="height: 8px;">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%"></div>
</div>`,
  },
  {
    id: 'animated',
    title: 'Animated Stripes',
    desc: 'The striped gradient can also be animated by adding <code>.progress-bar-animated</code>.',
    demo: `<div class="progress" style="height:8px"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:75%"></div></div>`,
    code:
`<div class="progress" style="height: 8px;">
  <div class="progress-bar progress-bar-striped progress-bar-animated"
       role="progressbar" style="width: 75%"></div>
</div>`,
  },
  {
    id: 'multiple',
    title: 'Multiple Bars',
    desc: 'Include multiple progress bars in a progress component if you need.',
    demo: `
      <div class="progress" style="height:14px">
        <div class="progress-bar"           role="progressbar" style="width:15%"></div>
        <div class="progress-bar bg-success" role="progressbar" style="width:30%"></div>
        <div class="progress-bar bg-info"    role="progressbar" style="width:20%"></div>
      </div>`,
    code:
`<div class="progress" style="height: 14px;">
  <div class="progress-bar" role="progressbar" style="width: 15%"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%"></div>
</div>`,
  },
]
</script>

<style scoped>
.progress-page { font-family: 'Inter', sans-serif; font-size: 13.5px; color: var(--text-primary); position: relative; }

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
.doc-section p.desc :deep(code) { background: var(--accent-muted); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.82rem; }

.demo-box { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; margin-bottom: 2px; }
.demo-box :deep(.progress) { background: var(--bg-hover); margin-bottom: 0; }

.code-box { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-lang { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-pre { margin: 0; padding: 12px 16px; overflow-x: auto; font-size: 0.73rem; line-height: 1.7; color: var(--text-secondary); background: var(--app-bg); max-height: 260px; font-family: 'Courier New', monospace; white-space: pre; }
.code-pre code { font-family: inherit; font-size: inherit; color: inherit; background: none; padding: 0; }
</style>
