<template>
  <div class="charts-page">
    <CdnSection />
    <div class="cp-header">
      <h4 class="cp-title">Scatter Charts</h4>
      <p class="cp-subtitle">ApexCharts scatter plot chart examples with copy-ready snippets.</p>
    </div>

    <div class="cp-card mb-4" v-for="chart in charts" :key="chart.id">
      <h6 class="cp-card-title">{{ chart.title }}</h6>
      <apexchart v-if="ready" type="scatter" :height="chart.height" :options="chart.opts" :series="chart.series" />
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

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false }, zoom: { enabled: true, type: 'xy' } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
  markers: { size: 6 },
}))

const r = (a, b) => +(Math.random() * (b - a) + a).toFixed(1)
const pts = (n, xMin, xMax, yMin, yMax) => Array.from({ length: n }, () => [r(xMin, xMax), r(yMin, yMax)])

const charts = computed(() => [
  {
    id: 'basic', title: 'Basic Scatter Chart', height: 350,
    series: [
      { name: 'Sample A', data: pts(20, 1, 10, 10, 60) },
      { name: 'Sample B', data: pts(20, 1, 10, 10, 60) },
      { name: 'Sample C', data: pts(20, 1, 10, 10, 60) },
    ],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71'] },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'scatter', height: 350, toolbar: { show: false }, zoom: { enabled: true, type: 'xy' } },
  series: [
    { name: 'Sample A', data: [[1.2,34],[2.5,45],[3.1,28],[4.8,52],[5.2,38],[6.7,61],[7.1,44],[8.3,55],[9.0,42],[1.8,29],[3.5,48],[5.9,37],[7.8,53],[2.1,41],[4.3,36],[6.2,58],[8.7,47],[9.5,33],[1.5,50],[3.8,39]] },
    { name: 'Sample B', data: [[1.1,22],[2.3,31],[3.7,18],[4.5,42],[5.8,28],[6.1,51],[7.4,34],[8.0,45],[9.2,32],[1.9,39],[3.2,58],[5.5,27],[7.2,43],[2.7,36],[4.1,26],[6.8,48],[8.4,37],[9.8,23],[1.7,40],[3.9,29]] },
    { name: 'Sample C', data: [[1.3,44],[2.8,55],[3.4,38],[4.9,62],[5.1,48],[6.5,71],[7.3,54],[8.6,65],[9.1,52],[1.6,39],[3.3,58],[5.7,47],[7.6,63],[2.4,51],[4.6,46],[6.3,68],[8.2,57],[9.7,43],[1.4,60],[3.6,49]] }
  ],
  xaxis: { tickAmount: 10 },
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  markers: { size: 6 },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'datetime', title: 'Scatter — Datetime X-axis', height: 350,
    series: [
      { name: 'Series A', data: (() => { const d=[]; let t=new Date('2023-01-01').getTime(); for(let i=0;i<20;i++){d.push([t+Math.floor(Math.random()*30)*86400000, r(10,60)])} return d })() },
      { name: 'Series B', data: (() => { const d=[]; let t=new Date('2023-01-01').getTime(); for(let i=0;i<20;i++){d.push([t+Math.floor(Math.random()*30)*86400000, r(10,60)])} return d })() },
    ],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14'], xaxis: { ...base.value.xaxis, type: 'datetime' } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
// Generate datetime scatter data
function genDateData(count) {
  var data = [];
  var base = new Date('2023-01-01').getTime();
  for (var i = 0; i < count; i++) {
    data.push([base + Math.floor(Math.random() * 30) * 86400000, Math.floor(Math.random() * 50) + 10]);
  }
  return data;
}
var options = {
  chart: { type: 'scatter', height: 350, toolbar: { show: false }, zoom: { enabled: true, type: 'xy' } },
  series: [
    { name: 'Series A', data: genDateData(20) },
    { name: 'Series B', data: genDateData(20) }
  ],
  xaxis: { type: 'datetime' },
  colors: ['#5b73e8','#fd7e14'],
  markers: { size: 6 },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light', x: { format: 'dd MMM yyyy' } }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'images', title: 'Scatter with Images', height: 350,
    series: [
      { name: 'Series A', data: pts(15, 1, 10, 10, 60) },
      { name: 'Series B', data: pts(15, 1, 10, 10, 60) },
    ],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14'], markers: { size: 8, shape: 'circle', strokeWidth: 2, strokeColors: ['#5b73e8','#fd7e14'], fillOpacity: 0.8 } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'scatter', height: 350, toolbar: { show: false }, zoom: { enabled: true, type: 'xy' } },
  series: [
    { name: 'Series A', data: [[1.2,34],[2.5,45],[3.1,28],[4.8,52],[5.2,38],[6.7,61],[7.1,44],[8.3,55],[9.0,42],[1.8,29],[3.5,48],[5.9,37],[7.8,53],[2.1,41],[4.3,36]] },
    { name: 'Series B', data: [[1.1,22],[2.3,31],[3.7,18],[4.5,42],[5.8,28],[6.1,51],[7.4,34],[8.0,45],[9.2,32],[1.9,39],[3.2,58],[5.5,27],[7.2,43],[2.7,36],[4.1,26]] }
  ],
  xaxis: { tickAmount: 10 },
  colors: ['#5b73e8','#fd7e14'],
  markers: { size: 8, shape: 'circle', strokeWidth: 2, strokeColors: ['#5b73e8','#fd7e14'], fillOpacity: 0.8 },
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
