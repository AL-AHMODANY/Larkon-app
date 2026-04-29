<template>
  <div class="charts-page">
    <div class="cp-header">
      <h4 class="cp-title">Line Charts</h4>
      <p class="cp-subtitle">ApexCharts line chart examples with copy-ready snippets.</p>
    </div>

    <div class="cp-card mb-4" v-for="chart in charts" :key="chart.id">
      <h6 class="cp-card-title">{{ chart.title }}</h6>
      <apexchart v-if="ready" type="line" :height="chart.height" :options="chart.opts" :series="chart.series" />
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
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false }, zoom: { enabled: false } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2.5 },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
  markers: { size: 0 },
}))

const charts = computed(() => [
  {
    id: 'basic', title: 'Basic Line Chart', height: 300,
    series: [{ name: 'Desktops', data: [10,41,35,51,49,62,69,91,148,120,100,130] }],
    opts: { ...base.value, colors: ['#fd7e14'], xaxis: { ...base.value.xaxis, categories: months }, legend: { show: false } },
    snip: `<apexchart type="line" height="300" :options="chartOptions" :series="series" />`,
  },
  {
    id: 'zoomable', title: 'Zoomable Timeseries', height: 300,
    series: [{ name: 'Sales', data: (() => { const d = []; let t = new Date('2023-01-01').getTime(); for(let i=0;i<60;i++){d.push([t,Math.floor(Math.random()*80)+20]);t+=86400000*6} return d })() }],
    opts: { ...base.value, colors: ['#5b73e8'], chart: { ...base.value.chart, zoom: { enabled: true } }, xaxis: { ...base.value.xaxis, type: 'datetime' }, stroke: { curve: 'straight', width: 2 }, legend: { show: false } },
    snip: `<apexchart type="line" height="300" :options="zoomableOptions" :series="series" />`,
  },
  {
    id: 'annotations', title: 'Line with Annotations', height: 300,
    series: [{ name: 'Revenue', data: [30,40,35,50,49,60,70,91,125,110,95,120] }],
    opts: { ...base.value, colors: ['#2ecc71'], xaxis: { ...base.value.xaxis, categories: months }, annotations: { yaxis: [{ y: 80, borderColor: '#e74c3c', borderWidth: 2, label: { borderColor: '#e74c3c', style: { color: '#fff', background: '#e74c3c', fontSize: '11px' }, text: 'Target: 80' } }] }, legend: { show: false } },
    snip: `<apexchart type="line" height="300" :options="annotationsOptions" :series="series" />`,
  },
  {
    id: 'synced', title: 'Synchronized Charts', height: 200,
    series: [{ name: 'Series A', data: [31,40,28,51,42,109,100,80,95,72,60,88] }],
    opts: { ...base.value, colors: ['#fd7e14'], xaxis: { ...base.value.xaxis, categories: months }, chart: { ...base.value.chart, id: 'line-sync-1', group: 'social' }, legend: { show: false } },
    snip: `<apexchart type="line" height="200" :options="syncedOptions" :series="series" />`,
  },
  {
    id: 'gradient', title: 'Gradient Line Chart', height: 300,
    series: [{ name: 'Series 1', data: [4,3,10,9,29,19,22,9,12,7,19,5] }, { name: 'Series 2', data: [2,3,8,7,22,15,18,7,10,5,15,3] }],
    opts: { ...base.value, colors: ['#fd7e14','#5b73e8'], fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.2, stops: [0,90,100] } }, xaxis: { ...base.value.xaxis, categories: months }, stroke: { curve: 'smooth', width: 2 } },
    snip: `<apexchart type="line" height="300" :options="gradientOptions" :series="series" />`,
  },
  {
    id: 'datalabels', title: 'Line with Data Labels', height: 300,
    series: [{ name: 'High', data: [28,29,33,36,32,32,33] }, { name: 'Low', data: [12,11,14,18,17,13,13] }],
    opts: { ...base.value, colors: ['#fd7e14','#5b73e8'], xaxis: { ...base.value.xaxis, categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'] }, dataLabels: { enabled: true, style: { fontSize: '11px' } }, stroke: { curve: 'straight', width: 2 }, markers: { size: 5 } },
    snip: `<apexchart type="line" height="300" :options="dataLabelsOptions" :series="series" />`,
  },
  {
    id: 'stepline', title: 'Stepline Chart', height: 300,
    series: [{ name: 'Steps', data: [34,44,54,21,12,43,33,23,66,66,58] }],
    opts: { ...base.value, colors: ['#2ecc71'], xaxis: { ...base.value.xaxis, categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'] }, stroke: { curve: 'stepline', width: 2.5 }, legend: { show: false } },
    snip: `<apexchart type="line" height="300" :options="steplineOptions" :series="series" />`,
  },
  {
    id: 'brush', title: 'Brush Chart', height: 200,
    series: [{ name: 'Series 1', data: (() => { const d = []; let t = new Date('2023-01-01').getTime(); for(let i=0;i<50;i++){d.push([t,Math.floor(Math.random()*80)+20]);t+=86400000*7} return d })() }],
    opts: { ...base.value, colors: ['#5b73e8'], chart: { ...base.value.chart, id: 'line-brush-main', brush: { enabled: false } }, xaxis: { ...base.value.xaxis, type: 'datetime' }, legend: { show: false } },
    snip: `<apexchart type="line" height="200" :options="brushOptions" :series="series" />`,
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
