<template>
  <div class="page-wrapper">
    <CdnSection />

    <div class="page-layout">
      <div class="page-main">
        <div class="page-header">
          <h4 class="page-title">Input Mask</h4>
          <p class="page-subtitle">Formatted input fields with built-in masking patterns — no external library required.</p>
        </div>

        <!-- Common Masks -->
        <div id="common-masks" class="demo-card">
          <h6 class="demo-title">Common Input Masks</h6>
          <p class="demo-desc">Live formatting applied on input — pure JavaScript, no dependencies.</p>
          <div class="demo-box">
            <div class="row g-4">
              <div class="col-12 col-md-6">
                <label class="form-label">Phone Number</label>
                <input type="text" class="form-control" :value="phone" @input="formatPhone"
                  placeholder="(000) 000-0000" maxlength="14" />
                <div class="form-text">Format: (000) 000-0000</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">Credit Card</label>
                <input type="text" class="form-control" :value="card" @input="formatCard"
                  placeholder="0000 0000 0000 0000" maxlength="19" />
                <div class="form-text">Format: 0000 0000 0000 0000</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">Date</label>
                <input type="text" class="form-control" :value="date" @input="formatDate"
                  placeholder="MM/DD/YYYY" maxlength="10" />
                <div class="form-text">Format: MM/DD/YYYY</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">ZIP Code</label>
                <input type="text" class="form-control" :value="zip" @input="formatZip"
                  placeholder="00000" maxlength="5" />
                <div class="form-text">US ZIP code (5 digits)</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">SSN</label>
                <input type="text" class="form-control" :value="ssn" @input="formatSSN"
                  placeholder="000-00-0000" maxlength="11" />
                <div class="form-text">Format: 000-00-0000</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">Time (24h)</label>
                <input type="text" class="form-control" :value="time" @input="formatTime"
                  placeholder="HH:MM" maxlength="5" />
                <div class="form-text">Format: HH:MM</div>
              </div>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML + JS</span>
              <button class="copy-btn" @click="copy('mask', codes.mask)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'mask' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ codes.mask }}</code></pre>
          </div>
        </div>

        <PageFooter />
      </div>

      <!-- Right TOC -->
      <aside class="toc-sidebar d-none d-xl-block">
        <div class="toc-title">ON THIS PAGE</div>
        <nav class="toc-nav">
          <a v-for="item in tocItems" :key="item.id"
            :href="`#${item.id}`" class="toc-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const phone = ref(''), card = ref(''), date = ref('')
const zip = ref(''), ssn = ref(''), time = ref('')
const copied = ref('')
const activeSection = ref('common-masks')

const tocItems = [
  { id: 'common-masks', label: 'Common Masks' },
]

function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}
function scrollTo(id) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function onScroll() {
  for (const item of [...tocItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 120) { activeSection.value = item.id; break }
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function formatPhone(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 10)
  if (v.length >= 6) v = `(${v.slice(0,3)}) ${v.slice(3,6)}-${v.slice(6)}`
  else if (v.length >= 3) v = `(${v.slice(0,3)}) ${v.slice(3)}`
  phone.value = v
}
function formatCard(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 16)
  card.value = v.replace(/(.{4})/g, '$1 ').trim()
}
function formatDate(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 8)
  if (v.length >= 4) v = `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4)}`
  else if (v.length >= 2) v = `${v.slice(0,2)}/${v.slice(2)}`
  date.value = v
}
function formatZip(e) { zip.value = e.target.value.replace(/\D/g, '').slice(0, 5) }
function formatSSN(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 9)
  if (v.length >= 5) v = `${v.slice(0,3)}-${v.slice(3,5)}-${v.slice(5)}`
  else if (v.length >= 3) v = `${v.slice(0,3)}-${v.slice(3)}`
  ssn.value = v
}
function formatTime(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 4)
  if (v.length >= 2) v = `${v.slice(0,2)}:${v.slice(2)}`
  time.value = v
}

const codes = {
  mask: `<div class="row g-4">

  <!-- Phone: (000) 000-0000 -->
  <div class="col-12 col-md-6">
    <label class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="phone"
      placeholder="(000) 000-0000" maxlength="14" />
    <div class="form-text">Format: (000) 000-0000</div>
  </div>

  <!-- Credit Card: 0000 0000 0000 0000 -->
  <div class="col-12 col-md-6">
    <label class="form-label">Credit Card</label>
    <input type="text" class="form-control" id="card"
      placeholder="0000 0000 0000 0000" maxlength="19" />
    <div class="form-text">Format: 0000 0000 0000 0000</div>
  </div>

  <!-- Date: MM/DD/YYYY -->
  <div class="col-12 col-md-6">
    <label class="form-label">Date</label>
    <input type="text" class="form-control" id="date"
      placeholder="MM/DD/YYYY" maxlength="10" />
    <div class="form-text">Format: MM/DD/YYYY</div>
  </div>

  <!-- ZIP Code -->
  <div class="col-12 col-md-6">
    <label class="form-label">ZIP Code</label>
    <input type="text" class="form-control" id="zip"
      placeholder="00000" maxlength="5" />
    <div class="form-text">US ZIP code (5 digits)</div>
  </div>

  <!-- SSN: 000-00-0000 -->
  <div class="col-12 col-md-6">
    <label class="form-label">SSN</label>
    <input type="text" class="form-control" id="ssn"
      placeholder="000-00-0000" maxlength="11" />
    <div class="form-text">Format: 000-00-0000</div>
  </div>

  <!-- Time: HH:MM -->
  <div class="col-12 col-md-6">
    <label class="form-label">Time (24h)</label>
    <input type="text" class="form-control" id="time"
      placeholder="HH:MM" maxlength="5" />
    <div class="form-text">Format: HH:MM</div>
  </div>

</div>

<script>
// Phone mask: (000) 000-0000
document.getElementById('phone').addEventListener('input', function() {
  let v = this.value.replace(/\\D/g, '').slice(0, 10)
  if (v.length >= 6) v = '(' + v.slice(0,3) + ') ' + v.slice(3,6) + '-' + v.slice(6)
  else if (v.length >= 3) v = '(' + v.slice(0,3) + ') ' + v.slice(3)
  this.value = v
})

// Credit card mask: 0000 0000 0000 0000
document.getElementById('card').addEventListener('input', function() {
  let v = this.value.replace(/\\D/g, '').slice(0, 16)
  this.value = v.replace(/(.{4})/g, '$1 ').trim()
})

// Date mask: MM/DD/YYYY
document.getElementById('date').addEventListener('input', function() {
  let v = this.value.replace(/\\D/g, '').slice(0, 8)
  if (v.length >= 4) v = v.slice(0,2) + '/' + v.slice(2,4) + '/' + v.slice(4)
  else if (v.length >= 2) v = v.slice(0,2) + '/' + v.slice(2)
  this.value = v
})

// ZIP code: digits only
document.getElementById('zip').addEventListener('input', function() {
  this.value = this.value.replace(/\\D/g, '').slice(0, 5)
})

// SSN mask: 000-00-0000
document.getElementById('ssn').addEventListener('input', function() {
  let v = this.value.replace(/\\D/g, '').slice(0, 9)
  if (v.length >= 5) v = v.slice(0,3) + '-' + v.slice(3,5) + '-' + v.slice(5)
  else if (v.length >= 3) v = v.slice(0,3) + '-' + v.slice(3)
  this.value = v
})

// Time mask: HH:MM
document.getElementById('time').addEventListener('input', function() {
  let v = this.value.replace(/\\D/g, '').slice(0, 4)
  if (v.length >= 2) v = v.slice(0,2) + ':' + v.slice(2)
  this.value = v
})
<\/script>`,
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-layout { display: flex; gap: 0; align-items: flex-start; }
.page-main { flex: 1; min-width: 0; padding-right: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); scroll-margin-top: 80px; }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.6; }
.demo-desc :deep(code) { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 300px; font-family: 'Courier New', monospace; }
.toc-sidebar { width: 190px; flex-shrink: 0; position: sticky; top: 80px; align-self: flex-start; }
.toc-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 10px; text-transform: uppercase; }
.toc-nav { display: flex; flex-direction: column; gap: 2px; }
.toc-link { display: block; padding: 5px 10px; font-size: 0.8rem; color: var(--text-secondary); text-decoration: none; border-radius: 6px; border-left: 2px solid transparent; transition: all 0.15s; }
.toc-link:hover { color: var(--accent); background: var(--accent-muted); }
.toc-link.active { color: var(--accent); border-left-color: var(--accent); background: var(--accent-muted); font-weight: 600; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .page-main { padding-right: 0; } }
</style>
