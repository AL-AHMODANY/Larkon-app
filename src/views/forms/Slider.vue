<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Slider</h4>
      <p class="page-subtitle">Range slider components with custom styling and reactive values.</p>
    </div>

    <!-- Basic Sliders -->
    <div class="demo-card">
      <h6 class="demo-title">Basic Sliders</h6>
      <p class="demo-desc">Use <code>input[type="range"]</code> with the <code>.form-range</code> class.</p>
      <div class="demo-box">
        <div class="d-flex flex-column gap-4">
          <div v-for="s in sliders" :key="s.label">
            <div class="d-flex justify-content-between mb-1">
              <label class="form-label mb-0">{{ s.label }}</label>
              <span class="slider-val">{{ s.value }}{{ s.suffix || '' }}</span>
            </div>
            <input type="range" class="form-range" v-model="s.value" :min="s.min" :max="s.max" :step="s.step" />
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('basic', codes.basic)"><i class="bi bi-clipboard me-1"></i>{{ copied==='basic'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.basic }}</code></pre>
      </div>
    </div>

    <!-- Colored Sliders -->
    <div class="demo-card">
      <h6 class="demo-title">Colored Sliders</h6>
      <p class="demo-desc">Use CSS <code>accent-color</code> to change the slider thumb and track color.</p>
      <div class="demo-box">
        <div class="d-flex flex-column gap-4">
          <div v-for="c in colored" :key="c.label">
            <div class="d-flex justify-content-between mb-1">
              <label class="form-label mb-0">{{ c.label }}</label>
              <span class="slider-val" :style="`color:${c.color}`">{{ c.value }}</span>
            </div>
            <input type="range" class="form-range" v-model="c.value" min="0" max="100"
              :style="`accent-color: ${c.color}`" />
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('colored', codes.colored)"><i class="bi bi-clipboard me-1"></i>{{ copied==='colored'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.colored }}</code></pre>
      </div>
    </div>

    <!-- Price Range -->
    <div class="demo-card">
      <h6 class="demo-title">Price Range</h6>
      <p class="demo-desc">Two range inputs overlaid to create a min/max price range selector.</p>
      <div class="demo-box">
        <div class="d-flex justify-content-between mb-2">
          <label class="form-label mb-0">Price Range</label>
          <span class="slider-val">${{ priceMin }} — ${{ priceMax }}</span>
        </div>
        <div class="position-relative">
          <input type="range" class="form-range" v-model.number="priceMin" :min="0" :max="priceMax - 10" step="10" />
          <input type="range" class="form-range" v-model.number="priceMax" :min="priceMin + 10" :max="1000" step="10" />
        </div>
        <div class="d-flex justify-content-between mt-1">
          <span class="text-muted" style="font-size:0.78rem">$0</span>
          <span class="text-muted" style="font-size:0.78rem">$1000</span>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML + JS</span>
          <button class="copy-btn" @click="copy('range', codes.range)"><i class="bi bi-clipboard me-1"></i>{{ copied==='range'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.range }}</code></pre>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const priceMin = ref(100)
const priceMax = ref(600)
const copied = ref('')

function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

const sliders = reactive([
  { label: 'Volume',      value: 60, min: 0,  max: 100, step: 1,   suffix: '%' },
  { label: 'Brightness',  value: 75, min: 0,  max: 100, step: 5,   suffix: '%' },
  { label: 'Temperature', value: 22, min: 16, max: 30,  step: 0.5, suffix: '°C' },
  { label: 'Quantity',    value: 3,  min: 1,  max: 10,  step: 1 },
])

const colored = reactive([
  { label: 'Success', value: 65, color: '#2ecc71' },
  { label: 'Warning', value: 40, color: '#f1c40f' },
  { label: 'Danger',  value: 80, color: '#e74c3c' },
  { label: 'Info',    value: 55, color: '#5b73e8' },
])

const codes = {
  basic: `<!-- Default range -->
<input type="range" class="form-range" min="0" max="100" />

<!-- With step -->
<input type="range" class="form-range" min="0" max="100" step="10" />

<!-- Vue reactive -->
<input type="range" class="form-range" v-model="value" min="0" max="100" />
<span>{{ value }}</span>`,

  colored: `<!-- Custom accent color via inline style -->
<input type="range" class="form-range" style="accent-color: #2ecc71" />
<input type="range" class="form-range" style="accent-color: #e74c3c" />
<input type="range" class="form-range" style="accent-color: #5b73e8" />

<!-- Or via CSS -->
<style>
.range-success { accent-color: #2ecc71; }
.range-danger  { accent-color: #e74c3c; }
</style>`,

  range: `<!-- Price range with two inputs -->
<input type="range" class="form-range" v-model.number="priceMin"
  :min="0" :max="priceMax - 10" step="10" />
<input type="range" class="form-range" v-model.number="priceMax"
  :min="priceMin + 10" :max="1000" step="10" />
<span>\${{ priceMin }} — \${{ priceMax }}</span>

<script setup>
const priceMin = ref(100)
const priceMax = ref(600)
<\/script>`,
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
.demo-desc code { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.slider-val { font-size: 0.82rem; font-weight: 600; color: var(--accent); }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 200px; font-family: 'Courier New', monospace; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
