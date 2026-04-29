<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Tabs</h4>
      <p class="page-subtitle">Bootstrap 5 nav tabs, pills, and vertical tab examples.</p>
    </div>

    <!-- Nav Tabs -->
    <div class="demo-card">
      <h6 class="demo-title">Nav Tabs</h6>
      <p class="demo-desc">Use the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
      <div class="demo-box">
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item"><a class="nav-link" :class="{active: t1==='home'}" @click="t1='home'" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t1==='profile'}" @click="t1='profile'" href="#">Profile</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t1==='messages'}" @click="t1='messages'" href="#">Messages</a></li>
          <li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1">Disabled</a></li>
        </ul>
        <div class="tab-content-text">{{ dummy }}</div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('t1', codes.tabs)"><i class="bi bi-clipboard me-1"></i>{{ copied==='t1'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.tabs }}</code></pre>
      </div>
    </div>

    <!-- Tabs Justified -->
    <div class="demo-card">
      <h6 class="demo-title">Tabs Justified</h6>
      <p class="demo-desc">Using <code>.nav-justified</code> forces tabs to fill the available width.</p>
      <div class="demo-box">
        <ul class="nav nav-tabs nav-justified mb-3">
          <li class="nav-item"><a class="nav-link" :class="{active: t2==='home'}" @click="t2='home'" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t2==='profile'}" @click="t2='profile'" href="#">Profile</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t2==='messages'}" @click="t2='messages'" href="#">Messages</a></li>
        </ul>
        <div class="tab-content-text">{{ dummy }}</div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('t2', codes.tabsJustified)"><i class="bi bi-clipboard me-1"></i>{{ copied==='t2'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.tabsJustified }}</code></pre>
      </div>
    </div>

    <!-- Nav Pills -->
    <div class="demo-card">
      <h6 class="demo-title">Nav Pills</h6>
      <p class="demo-desc">Use the <code>.nav-pills</code> class to generate a pill-style navigation.</p>
      <div class="demo-box">
        <ul class="nav nav-pills mb-3">
          <li class="nav-item"><a class="nav-link" :class="{active: t3==='home'}" @click="t3='home'" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t3==='profile'}" @click="t3='profile'" href="#">Profile</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t3==='messages'}" @click="t3='messages'" href="#">Messages</a></li>
          <li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1">Disabled</a></li>
        </ul>
        <div class="tab-content-text">{{ dummy }}</div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('t3', codes.pills)"><i class="bi bi-clipboard me-1"></i>{{ copied==='t3'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.pills }}</code></pre>
      </div>
    </div>

    <!-- Pills Justified -->
    <div class="demo-card">
      <h6 class="demo-title">Pills Justified</h6>
      <p class="demo-desc">Using <code>.nav-justified</code> with <code>.nav-pills</code> fills the available width.</p>
      <div class="demo-box">
        <ul class="nav nav-pills nav-justified mb-3">
          <li class="nav-item"><a class="nav-link" :class="{active: t4==='home'}" @click="t4='home'" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t4==='profile'}" @click="t4='profile'" href="#">Profile</a></li>
          <li class="nav-item"><a class="nav-link" :class="{active: t4==='messages'}" @click="t4='messages'" href="#">Messages</a></li>
        </ul>
        <div class="tab-content-text">{{ dummy }}</div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('t4', codes.pillsJustified)"><i class="bi bi-clipboard me-1"></i>{{ copied==='t4'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.pillsJustified }}</code></pre>
      </div>
    </div>

    <!-- Vertical Left -->
    <div class="demo-card">
      <h6 class="demo-title">Tabs Vertical Left</h6>
      <p class="demo-desc">Navigation tags can display in vertical directions using <code>.flex-column</code>.</p>
      <div class="demo-box">
        <div class="d-flex gap-3">
          <ul class="nav nav-pills flex-column flex-shrink-0" style="min-width:120px">
            <li class="nav-item"><a class="nav-link" :class="{active: t5==='home'}" @click="t5='home'" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" :class="{active: t5==='profile'}" @click="t5='profile'" href="#">Profile</a></li>
            <li class="nav-item"><a class="nav-link" :class="{active: t5==='messages'}" @click="t5='messages'" href="#">Messages</a></li>
          </ul>
          <div class="tab-content-text flex-grow-1">{{ dummy }}</div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('t5', codes.vertical)"><i class="bi bi-clipboard me-1"></i>{{ copied==='t5'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.vertical }}</code></pre>
      </div>
    </div>

    <!-- Vertical Right -->
    <div class="demo-card">
      <h6 class="demo-title">Tabs Vertical Right</h6>
      <p class="demo-desc">Navigation tags can also display vertically on the right side.</p>
      <div class="demo-box">
        <div class="d-flex gap-3">
          <div class="tab-content-text flex-grow-1">{{ dummy }}</div>
          <ul class="nav nav-pills flex-column flex-shrink-0" style="min-width:120px">
            <li class="nav-item"><a class="nav-link" :class="{active: t6==='home'}" @click="t6='home'" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" :class="{active: t6==='profile'}" @click="t6='profile'" href="#">Profile</a></li>
            <li class="nav-item"><a class="nav-link" :class="{active: t6==='settings'}" @click="t6='settings'" href="#">Settings</a></li>
          </ul>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('t6', codes.verticalRight)"><i class="bi bi-clipboard me-1"></i>{{ copied==='t6'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.verticalRight }}</code></pre>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const t1 = ref('home'), t2 = ref('home'), t3 = ref('home')
const t4 = ref('home'), t5 = ref('home'), t6 = ref('home')
const copied = ref('')
const dummy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

const codes = {
  tabs: `<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link disabled" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content mt-3">
  <div class="tab-pane fade show active" id="home">Home content...</div>
  <div class="tab-pane fade" id="profile">Profile content...</div>
</div>`,

  tabsJustified: `<ul class="nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#messages">Messages</button>
  </li>
</ul>`,

  pills: `<ul class="nav nav-pills" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link disabled" disabled>Disabled</button>
  </li>
</ul>`,

  pillsJustified: `<ul class="nav nav-pills nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#messages">Messages</button>
  </li>
</ul>`,

  vertical: `<div class="d-flex gap-3">
  <ul class="nav nav-pills flex-column flex-shrink-0">
    <li class="nav-item">
      <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#v-home">Home</button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#v-profile">Profile</button>
    </li>
  </ul>
  <div class="tab-content flex-grow-1">
    <div class="tab-pane fade show active" id="v-home">Home content...</div>
    <div class="tab-pane fade" id="v-profile">Profile content...</div>
  </div>
</div>`,

  verticalRight: `<div class="d-flex gap-3">
  <div class="tab-content flex-grow-1">
    <div class="tab-pane fade show active" id="vr-home">Home content...</div>
    <div class="tab-pane fade" id="vr-profile">Profile content...</div>
  </div>
  <ul class="nav nav-pills flex-column flex-shrink-0">
    <li class="nav-item">
      <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#vr-home">Home</button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#vr-profile">Profile</button>
    </li>
  </ul>
</div>`,
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }

.demo-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 20px 22px;
  margin-bottom: 20px;
  box-shadow: var(--card-shadow);
}
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.6; }
.demo-desc code { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }

.demo-box {
  background: var(--app-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 20px;
}
.tab-content-text {
  font-size: 0.83rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Override Bootstrap active color to Larkon orange */
:deep(.nav-pills .nav-link.active) {
  background-color: var(--accent) !important;
  color: #fff !important;
}
:deep(.nav-tabs .nav-link.active) {
  color: var(--accent) !important;
  border-bottom: 2px solid var(--accent) !important;
  background: transparent !important;
}
:deep(.nav-tabs .nav-link) {
  color: var(--text-secondary);
  border: none;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}
:deep(.nav-tabs .nav-link:hover) { color: var(--accent); }
:deep(.nav-tabs) { border-bottom-color: var(--card-border); }
:deep(.nav-pills .nav-link) { color: var(--text-secondary); }
:deep(.nav-pills .nav-link:hover) { color: var(--accent); background: var(--app-bg); }

.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px;
  background: var(--app-bg);
  border-bottom: 1px solid var(--card-border);
}
.code-badge {
  background: var(--accent); color: #fff;
  font-size: 0.67rem; font-weight: 700;
  padding: 2px 8px; border-radius: 4px;
}
.copy-btn {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 5px; font-size: 0.73rem; padding: 3px 10px;
  color: var(--text-muted); cursor: pointer; transition: all 0.15s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body {
  background: var(--app-bg); margin: 0; padding: 12px 16px;
  font-size: 0.73rem; color: var(--text-secondary);
  line-height: 1.7; overflow-x: auto; max-height: 200px;
  font-family: 'Courier New', monospace;
}

@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
