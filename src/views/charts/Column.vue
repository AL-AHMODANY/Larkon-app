<template>
  <div class="charts-page">
    <CdnSection />
    <div class="cp-header">
      <h4 class="cp-title">Column Charts</h4>
      <p class="cp-subtitle">ApexCharts vertical column chart examples with copy-ready snippets.</p>
    </div>

    <div class="cp-card mb-4" v-for="chart in charts" :key="chart.id">
      <h6 class="cp-card-title">{{ chart.title }}</h6>
      <apexchart v-if="ready" type="bar" :height="chart.height" :options="chart.opts" :series="chart.series" />
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
  chart: { background: 'transparent', toolbar: { show: false } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  dataLabels: { enabled: false },
  plotOptions: { bar: { columnWidth: '55%', borderRadius: 4 } },
  stroke: { show: true, width: 2, colors: ['transparent'] },
  legend: { show: false, labels: { colors: lc.value } },
}))

const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a
const arr = (n, a, b) => Array.from({ length: n }, () => r(a, b))

const charts = computed(() => [
  {
    id: 'basic', title: 'Basic Column Chart', height: 300,
    series: [{ name: 'Net Profit', data: arr(12, 20, 140) }, { name: 'Revenue', data: arr(12, 10, 100) }, { name: 'Free Cash Flow', data: arr(12, 5, 80) }],
    opts: { ...base.value, colors: ['#fd7e14','#f1c40f','#2ecc71'], xaxis: { ...base.value.xaxis, categories: months }, legend: { show: true, position: 'bottom', labels: { colors: lc.value } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 300, toolbar: { show: false } },
  series: [
    { name: 'Net Profit',     data: [76,85,101,98,87,105,91,114,94,86,115,35] },
    { name: 'Revenue',        data: [44,55,57,56,61,58,63,60,66,56,58,30] },
    { name: 'Free Cash Flow', data: [35,41,36,26,45,48,52,53,41,40,45,20] }
  ],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#fd7e14','#f1c40f','#2ecc71'],
  plotOptions: { bar: { columnWidth: '55%', borderRadius: 4 } },
  stroke: { show: true, width: 2, colors: ['transparent'] },
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
    id: 'datalabels', title: 'Column Chart with Datalabels', height: 320,
    series: [{ name: 'Inflation', data: [2.3,3.1,4.0,10.1,4.0,3.6,3.2,2.3,1.4,0.8,0.5,0.2] }],
    opts: { ...base.value, colors: ['#2ecc71'], xaxis: { ...base.value.xaxis, categories: months }, dataLabels: { enabled: true, formatter: v => v + '%', offsetY: -20, style: { fontSize: '11px', colors: [isDark.value ? '#cdd6e8' : '#304758'] } }, plotOptions: { bar: { columnWidth: '50%', borderRadius: 4, dataLabels: { position: 'top' } } }, legend: { show: false } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 320, toolbar: { show: false } },
  series: [{ name: 'Inflation', data: [2.3,3.1,4.0,10.1,4.0,3.6,3.2,2.3,1.4,0.8,0.5,0.2] }],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#2ecc71'],
  plotOptions: { bar: { columnWidth: '50%', borderRadius: 4, dataLabels: { position: 'top' } } },
  dataLabels: { enabled: true, formatter: function(v) { return v + '%'; }, offsetY: -20, style: { fontSize: '11px', colors: ['#304758'] } },
  stroke: { show: true, width: 2, colors: ['transparent'] },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: false },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'stacked', title: 'Stacked Column Chart', height: 300,
    series: [{ name: 'Product A', data: arr(8, 10, 80) }, { name: 'Product B', data: arr(8, 10, 80) }, { name: 'Product C', data: arr(8, 10, 80) }],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71'], chart: { ...base.value.chart, stacked: true }, xaxis: { ...base.value.xaxis, categories: ['2013 Q1','2013 Q2','2013 Q3','2013 Q4','2014 Q1','2014 Q2','2014 Q3','2014 Q4'] }, dataLabels: { enabled: true, style: { colors: ['#fff'], fontSize: '10px' } }, plotOptions: { bar: { columnWidth: '55%', borderRadius: 0 } }, legend: { show: true, position: 'bottom', labels: { colors: lc.value } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 300, stacked: true, toolbar: { show: false } },
  series: [
    { name: 'Product A', data: [44,55,41,67,22,43,21,49] },
    { name: 'Product B', data: [13,23,20,8,13,27,33,12] },
    { name: 'Product C', data: [11,17,15,15,21,14,15,13] }
  ],
  xaxis: { categories: ['2013 Q1','2013 Q2','2013 Q3','2013 Q4','2014 Q1','2014 Q2','2014 Q3','2014 Q4'] },
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  plotOptions: { bar: { columnWidth: '55%', borderRadius: 0 } },
  stroke: { show: true, width: 2, colors: ['transparent'] },
  dataLabels: { enabled: true, style: { colors: ['#fff'], fontSize: '10px' } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'stacked100', title: '100% Stacked Column Chart', height: 300,
    series: [{ name: 'Product A', data: arr(8, 10, 80) }, { name: 'Product B', data: arr(8, 10, 80) }, { name: 'Product C', data: arr(8, 10, 80) }],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71'], chart: { ...base.value.chart, stacked: true, stackType: '100%' }, xaxis: { ...base.value.xaxis, categories: ['2013 Q1','2013 Q2','2013 Q3','2013 Q4','2014 Q1','2014 Q2','2014 Q3','2014 Q4'] }, dataLabels: { enabled: true, formatter: v => v.toFixed(0) + '%', style: { colors: ['#fff'], fontSize: '10px' } }, plotOptions: { bar: { columnWidth: '55%', borderRadius: 0 } }, legend: { show: true, position: 'bottom', labels: { colors: lc.value } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 300, stacked: true, stackType: '100%', toolbar: { show: false } },
  series: [
    { name: 'Product A', data: [44,55,41,67,22,43,21,49] },
    { name: 'Product B', data: [13,23,20,8,13,27,33,12] },
    { name: 'Product C', data: [11,17,15,15,21,14,15,13] }
  ],
  xaxis: { categories: ['2013 Q1','2013 Q2','2013 Q3','2013 Q4','2014 Q1','2014 Q2','2014 Q3','2014 Q4'] },
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  plotOptions: { bar: { columnWidth: '55%', borderRadius: 0 } },
  dataLabels: { enabled: true, formatter: function(v) { return v.toFixed(0) + '%'; }, style: { colors: ['#fff'], fontSize: '10px' } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'negative', title: 'Column Chart with Negative Values', height: 320,
    series: [{ name: 'Cash Flow', data: [1.45,5.42,5.9,-0.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,0.34,3.88,13.07,5,8.15,13.9,7,-0.9,-4.5,-8.4] }, { name: 'Revenue', data: [0.5,3.2,3.1,-1.0,-8.0,-12.0,-10.5,-8.0,-5.5,-2.5,2.0,5.0,8.5,2.5,5.0,9.5,4.0,-2.0,-6.0,-10.0] }],
    opts: { ...base.value, colors: ['#5b73e8','#e74c3c'], xaxis: { ...base.value.xaxis, categories: Array.from({length:20},(_,i)=>`W${i+1}`) }, legend: { show: true, position: 'bottom', labels: { colors: lc.value } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 320, toolbar: { show: false } },
  series: [
    { name: 'Cash Flow', data: [1.45,5.42,5.9,-0.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,0.34,3.88,13.07,5,8.15,13.9,7,-0.9,-4.5,-8.4] },
    { name: 'Revenue',   data: [0.5,3.2,3.1,-1.0,-8.0,-12.0,-10.5,-8.0,-5.5,-2.5,2.0,5.0,8.5,2.5,5.0,9.5,4.0,-2.0,-6.0,-10.0] }
  ],
  xaxis: { categories: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12','W13','W14','W15','W16','W17','W18','W19','W20'] },
  colors: ['#5b73e8','#e74c3c'],
  plotOptions: { bar: { columnWidth: '55%', borderRadius: 4 } },
  stroke: { show: true, width: 2, colors: ['transparent'] },
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
    id: 'distributed', title: 'Distributed Column Chart', height: 300,
    series: [{ name: 'Cities', data: [21,22,10,28,16,21,13,30] }],
    opts: { ...base.value, colors: ['#5b73e8','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#e91e63','#00838f','#546e7a'], xaxis: { ...base.value.xaxis, categories: ['Athens','London','Amsterdam','Auckland','Beirut','Buenos Aires','Cairo','Dublin'] }, plotOptions: { bar: { columnWidth: '55%', borderRadius: 4, distributed: true } }, legend: { show: true, position: 'bottom', labels: { colors: lc.value } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 300, toolbar: { show: false } },
  series: [{ name: 'Cities', data: [21,22,10,28,16,21,13,30] }],
  xaxis: { categories: ['Athens','London','Amsterdam','Auckland','Beirut','Buenos Aires','Cairo','Dublin'] },
  colors: ['#5b73e8','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#e91e63','#00838f','#546e7a'],
  plotOptions: { bar: { columnWidth: '55%', borderRadius: 4, distributed: true } },
  stroke: { show: true, width: 2, colors: ['transparent'] },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
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
