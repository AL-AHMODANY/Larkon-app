<template>
  <div class="charts-page">

    <div class="cp-header">
      <h4 class="cp-title">Bubble Charts</h4>
      <p class="cp-subtitle">ApexCharts bubble chart components with interactive data visualization.</p>
    </div>

    <!-- Overview -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Overview</h6>
      <p class="cp-text mb-0">
        Find the JS file for the following chart at:
        <a href="#" class="cp-link">src/assets/js/components/apexchart-bubble.js</a>
      </p>
    </div>

    <!-- 1. Simple Bubble -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Simple Bubble Chart</h6>
      <apexchart v-if="ready" type="bubble" height="380" :options="simpleOpts" :series="simpleSeries" />
      <div v-else class="cp-skeleton" style="height:380px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.simple)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.simple }}</code></pre>
      </div>
    </div>

    <!-- 2. 3D Bubble -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">3D Bubble Chart</h6>
      <apexchart v-if="ready" type="bubble" height="420" :options="bubble3dOpts" :series="bubble3dSeries" />
      <div v-else class="cp-skeleton" style="height:420px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.bubble3d)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.bubble3d }}</code></pre>
      </div>
    </div>
    <PageFooter />

    <transition name="cp-toast-fade">
      <div v-if="copied" class="cp-toast">✓ Copied!</div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import PageFooter from '../../components/layout/Footer.vue'

const apexchart = VueApexCharts
const ready  = ref(false)
const copied = ref(false)
const isDark = ref(false)

const syncTheme = () => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
}
onMounted(() => {
  syncTheme()
  ready.value = true
  const obs = new MutationObserver(syncTheme)
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

const lc = computed(() => isDark.value ? '#7a8fa8' : '#8996af')
const gc = computed(() => isDark.value ? 'rgba(255,255,255,0.07)' : '#eef2f7')
const th = computed(() => isDark.value ? 'dark' : 'light')

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false }, zoom: { enabled: false }, animations: { enabled: true, speed: 600 } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { tickAmount: 12, labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { min: 0, max: 70, labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  dataLabels: { enabled: false },
  legend: { show: true, position: 'bottom', horizontalAlign: 'center', labels: { colors: lc.value }, markers: { width: 10, height: 10, radius: 50 }, itemMargin: { horizontal: 12 } },
}))

const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a
const genBubble = (count, xMin, xMax, yMin, yMax, zMin, zMax) =>
  Array.from({ length: count }, () => ({ x: rand(xMin, xMax), y: rand(yMin, yMax), z: rand(zMin, zMax) }))

const simpleSeries = [
  { name: 'Bubble 1', data: genBubble(20, 47, 738, 10, 65, 8, 50) },
  { name: 'Bubble 2', data: genBubble(18, 60, 720, 8, 62, 5, 45) },
  { name: 'Bubble 3', data: genBubble(15, 80, 700, 5, 60, 4, 40) },
]

const simpleOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  fill: { opacity: 0.85 },
  xaxis: { ...base.value.xaxis, min: 40, max: 750, tickAmount: 10 },
  plotOptions: { bubble: { minBubbleRadius: 6, maxBubbleRadius: 38 } },
}))

const baseDate = new Date('2023-10-23').getTime()
const day = 86400000
const bubble3dSeries = [
  { name: 'Product 1', data: Array.from({length:18}, () => ({ x: baseDate + rand(0,18)*day, y: rand(8,68), z: rand(10,55) })) },
  { name: 'Product 2', data: Array.from({length:16}, () => ({ x: baseDate + rand(0,18)*day, y: rand(8,68), z: rand(10,55) })) },
  { name: 'Product 3', data: Array.from({length:16}, () => ({ x: baseDate + rand(0,18)*day, y: rand(8,68), z: rand(10,55) })) },
  { name: 'Product 4', data: Array.from({length:16}, () => ({ x: baseDate + rand(0,18)*day, y: rand(8,68), z: rand(10,55) })) },
]

const bubble3dOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#fd7e14','#e74c3c','#2ecc71'],
  fill: { type: 'gradient', gradient: { shade: 'light', type: 'vertical', shadeIntensity: 0.4, opacityFrom: 0.95, opacityTo: 0.6, stops: [0,100] } },
  xaxis: { ...base.value.xaxis, type: 'datetime', min: baseDate, max: baseDate + 18*day, tickAmount: 9, labels: { datetimeFormatter: { day: 'dd MMM' }, style: { colors: lc.value, fontSize: '11px' } } },
  plotOptions: { bubble: { minBubbleRadius: 8, maxBubbleRadius: 42 } },
}))

const snip = {
  simple:   `<apexchart type="bubble" height="380" :options="chartOptions" :series="series" />`,
  bubble3d: `<apexchart type="bubble" height="420" :options="bubble3dOptions" :series="series" />`,
}

function copy(text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.charts-page { padding: 24px; }
.cp-header { margin-bottom: 24px; }
.cp-title  { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.cp-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.cp-card {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 10px; padding: 20px 22px; box-shadow: var(--card-shadow);
}
.cp-card-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 12px; }
.cp-text { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.7; margin: 0; }
.cp-link { color: var(--accent); text-decoration: none; font-weight: 500; }
.cp-link:hover { text-decoration: underline; }
.cp-skeleton {
  border-radius: 8px;
  background: linear-gradient(90deg, var(--app-bg) 25%, var(--card-border) 50%, var(--app-bg) 75%);
  background-size: 400% 100%; animation: cp-shimmer 1.4s ease infinite;
}
@keyframes cp-shimmer { 0% { background-position: 100% 0 } 100% { background-position: -100% 0 } }
.cp-code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.cp-code-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border);
}
.cp-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.cp-copy-btn {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 5px; font-size: 0.73rem; padding: 3px 10px;
  color: var(--text-muted); cursor: pointer; transition: all 0.15s;
}
.cp-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.cp-code {
  background: var(--app-bg); margin: 0; padding: 12px 16px;
  font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7;
  overflow-x: auto; max-height: 130px; font-family: 'Courier New', monospace;
}
.cp-toast {
  position: fixed; bottom: 24px; right: 24px;
  background: var(--text-primary); color: var(--text-inverse);
  padding: 9px 18px; border-radius: 8px; font-size: 0.82rem; font-weight: 600;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 9999;
}
.cp-toast-fade-enter-active, .cp-toast-fade-leave-active { transition: opacity 0.25s, transform 0.25s; }
.cp-toast-fade-enter-from, .cp-toast-fade-leave-to { opacity: 0; transform: translateY(6px); }
@media (max-width: 576px) { .charts-page { padding: 16px; } }
</style>
