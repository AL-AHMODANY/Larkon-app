<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Input Mask</h4>
      <p class="page-subtitle">Formatted input fields with built-in masking patterns using Vue reactive state.</p>
    </div>

    <div class="demo-card">
      <h6 class="demo-title">Common Input Masks</h6>
      <p class="demo-desc">Live formatting applied on input — no external library required.</p>
      <div class="demo-box">
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <label class="form-label">Phone Number</label>
            <input type="text" class="form-control" :value="phone" @input="formatPhone" placeholder="(000) 000-0000" maxlength="14" />
            <div class="form-text">Format: (000) 000-0000</div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Credit Card</label>
            <input type="text" class="form-control" :value="card" @input="formatCard" placeholder="0000 0000 0000 0000" maxlength="19" />
            <div class="form-text">Format: 0000 0000 0000 0000</div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Date</label>
            <input type="text" class="form-control" :value="date" @input="formatDate" placeholder="MM/DD/YYYY" maxlength="10" />
            <div class="form-text">Format: MM/DD/YYYY</div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">ZIP Code</label>
            <input type="text" class="form-control" :value="zip" @input="formatZip" placeholder="00000" maxlength="5" />
            <div class="form-text">US ZIP code (5 digits)</div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">SSN</label>
            <input type="text" class="form-control" :value="ssn" @input="formatSSN" placeholder="000-00-0000" maxlength="11" />
            <div class="form-text">Format: 000-00-0000</div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Time (24h)</label>
            <input type="text" class="form-control" :value="time" @input="formatTime" placeholder="HH:MM" maxlength="5" />
            <div class="form-text">Format: HH:MM</div>
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML + JS</span>
          <button class="copy-btn" @click="copy('mask', codes.mask)"><i class="bi bi-clipboard me-1"></i>{{ copied==='mask'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.mask }}</code></pre>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const phone = ref(''), card = ref(''), date = ref('')
const zip = ref(''), ssn = ref(''), time = ref('')
const copied = ref('')

function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

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
  mask: `<!-- Phone mask: (000) 000-0000 -->
<input type="text" class="form-control" :value="phone" @input="formatPhone" maxlength="14" />

<script setup>
const phone = ref('')
function formatPhone(e) {
  let v = e.target.value.replace(/\\D/g, '').slice(0, 10)
  if (v.length >= 6) v = \`(\${v.slice(0,3)}) \${v.slice(3,6)}-\${v.slice(6)}\`
  else if (v.length >= 3) v = \`(\${v.slice(0,3)}) \${v.slice(3)}\`
  phone.value = v
}
<\/script>

<!-- Credit card mask: 0000 0000 0000 0000 -->
<input type="text" class="form-control" :value="card" @input="formatCard" maxlength="19" />

function formatCard(e) {
  let v = e.target.value.replace(/\\D/g, '').slice(0, 16)
  card.value = v.replace(/(.{4})/g, '$1 ').trim()
}

<!-- Date mask: MM/DD/YYYY -->
<input type="text" class="form-control" :value="date" @input="formatDate" maxlength="10" />

function formatDate(e) {
  let v = e.target.value.replace(/\\D/g, '').slice(0, 8)
  if (v.length >= 4) v = \`\${v.slice(0,2)}/\${v.slice(2,4)}/\${v.slice(4)}\`
  else if (v.length >= 2) v = \`\${v.slice(0,2)}/\${v.slice(2)}\`
  date.value = v
}`,
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 260px; font-family: 'Courier New', monospace; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
