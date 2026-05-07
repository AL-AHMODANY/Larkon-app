<template>
  <div class="charts-page">
    <CdnSection />
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
import CdnSection from '../../components/CdnSection.vue'
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
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'line', height: 300, toolbar: { show: false }, zoom: { enabled: false } },
  series: [{ name: 'Desktops', data: [10,41,35,51,49,62,69,91,148,120,100,130] }],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#fd7e14'],
  stroke: { curve: 'smooth', width: 2.5 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'zoomable', title: 'Zoomable Timeseries', height: 300,
    series: [{ name: 'Sales', data: (() => { const d = []; let t = new Date('2023-01-01').getTime(); for(let i=0;i<60;i++){d.push([t,Math.floor(Math.random()*80)+20]);t+=86400000*6} return d })() }],
    opts: { ...base.value, colors: ['#5b73e8'], chart: { ...base.value.chart, zoom: { enabled: true } }, xaxis: { ...base.value.xaxis, type: 'datetime' }, stroke: { curve: 'straight', width: 2 }, legend: { show: false } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
// Generate datetime series
var data = [];
var t = new Date('2023-01-01').getTime();
for (var i = 0; i < 60; i++) {
  data.push([t, Math.floor(Math.random() * 80) + 20]);
  t += 86400000 * 6;
}
var options = {
  chart: { type: 'line', height: 300, toolbar: { show: true }, zoom: { enabled: true } },
  series: [{ name: 'Sales', data: data }],
  xaxis: { type: 'datetime' },
  colors: ['#5b73e8'],
  stroke: { curve: 'straight', width: 2 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light', x: { format: 'dd MMM yyyy' } }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'annotations', title: 'Line with Annotations', height: 300,
    series: [{ name: 'Revenue', data: [30,40,35,50,49,60,70,91,125,110,95,120] }],
    opts: { ...base.value, colors: ['#2ecc71'], xaxis: { ...base.value.xaxis, categories: months }, annotations: { yaxis: [{ y: 80, borderColor: '#e74c3c', borderWidth: 2, label: { borderColor: '#e74c3c', style: { color: '#fff', background: '#e74c3c', fontSize: '11px' }, text: 'Target: 80' } }] }, legend: { show: false } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'line', height: 300, toolbar: { show: false }, zoom: { enabled: false } },
  series: [{ name: 'Revenue', data: [30,40,35,50,49,60,70,91,125,110,95,120] }],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  annotations: {
    yaxis: [{
      y: 80, borderColor: '#e74c3c', borderWidth: 2,
      label: { borderColor: '#e74c3c', style: { color: '#fff', background: '#e74c3c', fontSize: '11px' }, text: 'Target: 80' }
    }]
  },
  colors: ['#2ecc71'],
  stroke: { curve: 'smooth', width: 2.5 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'synced', title: 'Synchronized Charts', height: 200,
    series: [{ name: 'Series A', data: [31,40,28,51,42,109,100,80,95,72,60,88] }],
    opts: { ...base.value, colors: ['#fd7e14'], xaxis: { ...base.value.xaxis, categories: months }, chart: { ...base.value.chart, id: 'line-sync-1', group: 'social' }, legend: { show: false } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart1"></div>
<div id="chart2"></div>
<script>
var opts1 = {
  chart: { id: 'chart1', group: 'social', type: 'line', height: 200, toolbar: { show: false }, zoom: { enabled: false } },
  series: [{ name: 'Series A', data: [31,40,28,51,42,109,100,80,95,72,60,88] }],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#fd7e14'], stroke: { curve: 'smooth', width: 2 }, dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 }, tooltip: { theme: 'light' }
};
var opts2 = {
  chart: { id: 'chart2', group: 'social', type: 'line', height: 200, toolbar: { show: false }, zoom: { enabled: false } },
  series: [{ name: 'Series B', data: [11,32,45,32,34,52,41,60,45,50,70,55] }],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#5b73e8'], stroke: { curve: 'smooth', width: 2 }, dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 }, tooltip: { theme: 'light' }
};
new ApexCharts(document.querySelector("#chart1"), opts1).render();
new ApexCharts(document.querySelector("#chart2"), opts2).render();
<\/script>`,
  },
  {
    id: 'gradient', title: 'Gradient Line Chart', height: 300,
    series: [{ name: 'Series 1', data: [4,3,10,9,29,19,22,9,12,7,19,5] }, { name: 'Series 2', data: [2,3,8,7,22,15,18,7,10,5,15,3] }],
    opts: { ...base.value, colors: ['#fd7e14','#5b73e8'], fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.2, stops: [0,90,100] } }, xaxis: { ...base.value.xaxis, categories: months }, stroke: { curve: 'smooth', width: 2 } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'line', height: 300, toolbar: { show: false }, zoom: { enabled: false } },
  series: [
    { name: 'Series 1', data: [4,3,10,9,29,19,22,9,12,7,19,5] },
    { name: 'Series 2', data: [2,3,8,7,22,15,18,7,10,5,15,3] }
  ],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#fd7e14','#5b73e8'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.2, stops: [0,90,100] } },
  stroke: { curve: 'smooth', width: 2 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'datalabels', title: 'Line with Data Labels', height: 300,
    series: [{ name: 'High', data: [28,29,33,36,32,32,33] }, { name: 'Low', data: [12,11,14,18,17,13,13] }],
    opts: { ...base.value, colors: ['#fd7e14','#5b73e8'], xaxis: { ...base.value.xaxis, categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'] }, dataLabels: { enabled: true, style: { fontSize: '11px' } }, stroke: { curve: 'straight', width: 2 }, markers: { size: 5 } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'line', height: 300, toolbar: { show: false }, zoom: { enabled: false } },
  series: [
    { name: 'High', data: [28,29,33,36,32,32,33] },
    { name: 'Low',  data: [12,11,14,18,17,13,13] }
  ],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'] },
  colors: ['#fd7e14','#5b73e8'],
  stroke: { curve: 'straight', width: 2 },
  dataLabels: { enabled: true, style: { fontSize: '11px' } },
  markers: { size: 5 },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'stepline', title: 'Stepline Chart', height: 300,
    series: [{ name: 'Steps', data: [34,44,54,21,12,43,33,23,66,66,58] }],
    opts: { ...base.value, colors: ['#2ecc71'], xaxis: { ...base.value.xaxis, categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'] }, stroke: { curve: 'stepline', width: 2.5 }, legend: { show: false } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'line', height: 300, toolbar: { show: false }, zoom: { enabled: false } },
  series: [{ name: 'Steps', data: [34,44,54,21,12,43,33,23,66,66,58] }],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'] },
  colors: ['#2ecc71'],
  stroke: { curve: 'stepline', width: 2.5 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'brush', title: 'Brush Chart', height: 200,
    series: [{ name: 'Series 1', data: (() => { const d = []; let t = new Date('2023-01-01').getTime(); for(let i=0;i<50;i++){d.push([t,Math.floor(Math.random()*80)+20]);t+=86400000*7} return d })() }],
    opts: { ...base.value, colors: ['#5b73e8'], chart: { ...base.value.chart, id: 'line-brush-main', brush: { enabled: false } }, xaxis: { ...base.value.xaxis, type: 'datetime' }, legend: { show: false } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart-main"></div>
<div id="chart-brush"></div>
<script>
// Generate datetime data
var data = [];
var t = new Date('2023-01-01').getTime();
for (var i = 0; i < 50; i++) {
  data.push([t, Math.floor(Math.random() * 80) + 20]);
  t += 86400000 * 7;
}
var mainOpts = {
  chart: { id: 'chart-main', type: 'line', height: 200, toolbar: { autoSelected: 'pan', show: false } },
  series: [{ name: 'Series 1', data: data }],
  xaxis: { type: 'datetime' },
  colors: ['#5b73e8'], stroke: { curve: 'smooth', width: 2 }, dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 }, tooltip: { theme: 'light' }
};
var brushOpts = {
  chart: { id: 'chart-brush', type: 'area', height: 130, brush: { target: 'chart-main', enabled: true }, selection: { enabled: true } },
  series: [{ name: 'Series 1', data: data }],
  xaxis: { type: 'datetime' },
  colors: ['#5b73e8'], fill: { type: 'gradient', gradient: { opacityFrom: 0.91, opacityTo: 0.1 } },
  stroke: { width: 1 }, dataLabels: { enabled: false }, yaxis: { tickAmount: 2 }
};
new ApexCharts(document.querySelector("#chart-main"), mainOpts).render();
new ApexCharts(document.querySelector("#chart-brush"), brushOpts).render();
<\/script>`,
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
