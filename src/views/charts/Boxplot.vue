<template>
  <div class="charts-page">
    <div class="cp-header">
      <h4 class="cp-title">Boxplot Charts</h4>
      <p class="cp-subtitle">ApexCharts boxplot chart examples with copy-ready snippets.</p>
    </div>

    <div class="cp-card mb-4" v-for="chart in charts" :key="chart.id">
      <h6 class="cp-card-title">{{ chart.title }}</h6>
      <apexchart v-if="ready" type="boxPlot" :height="chart.height" :options="chart.opts" :series="chart.series" />
      <div v-else class="cp-skeleton" :style="`height:${chart.height}px`"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(chart.snip)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ chart.snip }}</code></pre>
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
const ready = ref(false)
const copied = ref(false)
const isDark = ref(false)

const syncTheme = () => { isDark.value = document.documentElement.getAttribute('data-theme') === 'dark' }
onMounted(() => {
  syncTheme(); ready.value = true
  new MutationObserver(syncTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

const lc = computed(() => isDark.value ? '#7a8fa8' : '#8996af')
const gc = computed(() => isDark.value ? 'rgba(255,255,255,0.07)' : '#eef2f7')
const th = computed(() => isDark.value ? 'dark' : 'light')

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  plotOptions: { boxPlot: { colors: { upper: '#5b73e8', lower: '#fd7e14' } } },
}))

// Generate a boxplot data point [min, q1, median, q3, max]
const box = (x, base) => ({ x, y: [base - 20, base - 5, base + 5, base + 15, base + 30].map(v => v + Math.floor(Math.random() * 10)) })

const charts = computed(() => [
  {
    id: 'basic', title: 'Basic Boxplot', height: 350,
    series: [{ type: 'boxPlot', data: ['Jan','Feb','Mar','Apr','May','Jun','Jul'].map((m, i) => box(m, 30 + i * 8)) }],
    opts: { ...base.value },
    snip: `<apexchart type="boxPlot" height="350" :options="chartOptions" :series="series" />`,
  },
  {
    id: 'horizontal', title: 'Horizontal Boxplot', height: 350,
    series: [{ type: 'boxPlot', data: ['Jan','Feb','Mar','Apr','May','Jun','Jul'].map((m, i) => box(m, 30 + i * 8)) }],
    opts: { ...base.value, plotOptions: { bar: { horizontal: true }, boxPlot: { colors: { upper: '#5b73e8', lower: '#fd7e14' } } } },
    snip: `<apexchart type="boxPlot" height="350" :options="horizontalOptions" :series="series" />`,
  },
  {
    id: 'scatter-box', title: 'Boxplot with Scatter', height: 350,
    series: [
      { type: 'boxPlot', data: ['Jan','Feb','Mar','Apr','May','Jun'].map((m, i) => box(m, 30 + i * 8)) },
      { type: 'scatter', name: 'Outliers', data: [{ x: 'Jan', y: 32 }, { x: 'Mar', y: 65 }, { x: 'May', y: 18 }, { x: 'Jun', y: 72 }] },
    ],
    opts: { ...base.value, colors: ['transparent','#e74c3c'], markers: { size: [0, 6] }, legend: { show: true, position: 'bottom', labels: { colors: lc.value } } },
    snip: `<apexchart type="boxPlot" height="350" :options="scatterBoxOptions" :series="series" />`,
  },
])

function copy(text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.charts-page { padding: 24px; }
.cp-header { margin-bottom: 24px; }
.cp-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.cp-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.cp-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; box-shadow: var(--card-shadow); }
.cp-card-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 12px; }
.cp-skeleton { border-radius: 8px; background: linear-gradient(90deg, var(--app-bg) 25%, var(--card-border) 50%, var(--app-bg) 75%); background-size: 400% 100%; animation: cp-shimmer 1.4s ease infinite; }
@keyframes cp-shimmer { 0% { background-position: 100% 0 } 100% { background-position: -100% 0 } }
.cp-code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.cp-code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.cp-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.cp-copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.cp-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.cp-code { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 130px; font-family: 'Courier New', monospace; }
.cp-toast { position: fixed; bottom: 24px; right: 24px; background: var(--text-primary); color: var(--text-inverse); padding: 9px 18px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 9999; }
.cp-toast-fade-enter-active, .cp-toast-fade-leave-active { transition: opacity 0.25s, transform 0.25s; }
.cp-toast-fade-enter-from, .cp-toast-fade-leave-to { opacity: 0; transform: translateY(6px); }
@media (max-width: 576px) { .charts-page { padding: 16px; } }
</style>
