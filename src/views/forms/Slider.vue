<template>
  <div class="page-wrapper">
    <CdnSection />

    <div class="page-layout">
      <div class="page-main">
        <div class="page-header">
          <h4 class="page-title">Slider</h4>
          <p class="page-subtitle">Range slider components with custom styling and reactive values.</p>
        </div>

        <!-- Basic Sliders -->
        <div id="basic-sliders" class="demo-card">
          <h6 class="demo-title">Basic Sliders</h6>
          <p class="demo-desc">Use <code>input[type="range"]</code> with the <code>.form-range</code> class.</p>
          <div class="demo-box">
            <div class="d-flex flex-column gap-4">
              <div v-for="s in sliders" :key="s.label">
                <div class="d-flex justify-content-between mb-1">
                  <label class="form-label mb-0">{{ s.label }}</label>
                  <span class="slider-val">{{ s.value }}{{ s.suffix || '' }}</span>
                </div>
                <input type="range" class="form-range" v-model="s.value"
                  :min="s.min" :max="s.max" :step="s.step" />
              </div>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('basic', codes.basic)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'basic' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ codes.basic }}</code></pre>
          </div>
        </div>

        <!-- Colored Sliders -->
        <div id="colored-sliders" class="demo-card">
          <h6 class="demo-title">Colored Sliders</h6>
          <p class="demo-desc">Use CSS <code>accent-color</code> to change the slider thumb and track color.</p>
          <div class="demo-box">
            <div class="d-flex flex-column gap-4">
              <div v-for="c in colored" :key="c.label">
                <div class="d-flex justify-content-between mb-1">
                  <label class="form-label mb-0">{{ c.label }}</label>
                  <span class="slider-val" :style="`color:${c.color}`">{{ c.value }}</span>
                </div>
                <input type="range" class="form-range" v-model="c.value"
                  min="0" max="100" :style="`accent-color: ${c.color}`" />
              </div>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('colored', codes.colored)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'colored' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ codes.colored }}</code></pre>
          </div>
        </div>

        <!-- Price Range -->
        <div id="price-range" class="demo-card">
          <h6 class="demo-title">Price Range</h6>
          <p class="demo-desc">Two range inputs stacked to create a min/max price range selector.</p>
          <div class="demo-box">
            <div class="d-flex justify-content-between mb-2">
              <label class="form-label mb-0">Price Range</label>
              <span class="slider-val">${{ priceMin }} — ${{ priceMax }}</span>
            </div>
            <div class="position-relative">
              <input type="range" class="form-range" v-model.number="priceMin"
                :min="0" :max="priceMax - 10" step="10" />
              <input type="range" class="form-range" v-model.number="priceMax"
                :min="priceMin + 10" :max="1000" step="10" />
            </div>
            <div class="d-flex justify-content-between mt-1">
              <span class="text-muted" style="font-size:0.78rem">$0</span>
              <span class="text-muted" style="font-size:0.78rem">$1000</span>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML + JS</span>
              <button class="copy-btn" @click="copy('range', codes.range)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'range' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ codes.range }}</code></pre>
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
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const priceMin = ref(100)
const priceMax = ref(600)
const copied = ref('')
const activeSection = ref('basic-sliders')

const tocItems = [
  { id: 'basic-sliders',   label: 'Basic Sliders' },
  { id: 'colored-sliders', label: 'Colored Sliders' },
  { id: 'price-range',     label: 'Price Range' },
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
  basic: `<div class="d-flex flex-column gap-4">

  <!-- Volume -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Volume</label>
      <span id="volumeVal">60%</span>
    </div>
    <input type="range" class="form-range" id="volume"
      min="0" max="100" step="1" value="60"
      oninput="document.getElementById('volumeVal').textContent = this.value + '%'" />
  </div>

  <!-- Brightness -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Brightness</label>
      <span id="brightnessVal">75%</span>
    </div>
    <input type="range" class="form-range" id="brightness"
      min="0" max="100" step="5" value="75"
      oninput="document.getElementById('brightnessVal').textContent = this.value + '%'" />
  </div>

  <!-- Temperature -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Temperature</label>
      <span id="tempVal">22°C</span>
    </div>
    <input type="range" class="form-range" id="temp"
      min="16" max="30" step="0.5" value="22"
      oninput="document.getElementById('tempVal').textContent = this.value + '°C'" />
  </div>

  <!-- Quantity -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Quantity</label>
      <span id="qtyVal">3</span>
    </div>
    <input type="range" class="form-range" id="qty"
      min="1" max="10" step="1" value="3"
      oninput="document.getElementById('qtyVal').textContent = this.value" />
  </div>

</div>`,

  colored: `<div class="d-flex flex-column gap-4">

  <!-- Success -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Success</label>
      <span style="color:#2ecc71" id="successVal">65</span>
    </div>
    <input type="range" class="form-range" value="65"
      style="accent-color: #2ecc71"
      oninput="document.getElementById('successVal').textContent = this.value" />
  </div>

  <!-- Warning -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Warning</label>
      <span style="color:#f1c40f" id="warningVal">40</span>
    </div>
    <input type="range" class="form-range" value="40"
      style="accent-color: #f1c40f"
      oninput="document.getElementById('warningVal').textContent = this.value" />
  </div>

  <!-- Danger -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Danger</label>
      <span style="color:#e74c3c" id="dangerVal">80</span>
    </div>
    <input type="range" class="form-range" value="80"
      style="accent-color: #e74c3c"
      oninput="document.getElementById('dangerVal').textContent = this.value" />
  </div>

  <!-- Info -->
  <div>
    <div class="d-flex justify-content-between mb-1">
      <label class="form-label mb-0">Info</label>
      <span style="color:#5b73e8" id="infoVal">55</span>
    </div>
    <input type="range" class="form-range" value="55"
      style="accent-color: #5b73e8"
      oninput="document.getElementById('infoVal').textContent = this.value" />
  </div>

</div>`,

  range: `<div>
  <div class="d-flex justify-content-between mb-2">
    <label class="form-label mb-0">Price Range</label>
    <span id="priceDisplay">$100 — $600</span>
  </div>

  <input type="range" class="form-range" id="priceMin"
    min="0" max="590" step="10" value="100" />
  <input type="range" class="form-range" id="priceMax"
    min="110" max="1000" step="10" value="600" />

  <div class="d-flex justify-content-between mt-1">
    <span class="text-muted" style="font-size:0.78rem">$0</span>
    <span class="text-muted" style="font-size:0.78rem">$1000</span>
  </div>
</div>

<script>
const minEl = document.getElementById('priceMin')
const maxEl = document.getElementById('priceMax')
const display = document.getElementById('priceDisplay')

function updateDisplay() {
  display.textContent = '$' + minEl.value + ' — $' + maxEl.value
}

minEl.addEventListener('input', function() {
  if (+this.value >= +maxEl.value - 10) this.value = +maxEl.value - 10
  updateDisplay()
})
maxEl.addEventListener('input', function() {
  if (+this.value <= +minEl.value + 10) this.value = +minEl.value + 10
  updateDisplay()
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
.slider-val { font-size: 0.82rem; font-weight: 600; color: var(--accent); }
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
