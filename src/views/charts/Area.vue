<template>
  <div class="charts-page">
    <CdnSection />

    <!-- Page Header -->
    <div class="cp-header">
      <div>
        <h4 class="cp-title">Area Charts</h4>
        <p class="cp-subtitle">ApexCharts is loaded with powerful features to fulfill your data visualization needs.</p>
      </div>
    </div>

    <!-- Usage card -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Usage</h6>
      <p class="cp-text">
        ApexCharts CSS and JS are bundled in <code>vue3-apexcharts</code> and installed globally.
        See <a href="#" class="cp-link">src/plugins/apexcharts.js</a> for configuration.
      </p>
    </div>

    <!-- 1. Basic Area -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Basic Area Chart</h6>
      <apexchart v-if="ready" type="area" height="280" :options="basicOpts" :series="basicSeries" />
      <div v-else class="cp-skeleton" style="height:280px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.basic)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.basic }}</code></pre>
      </div>
    </div>

    <!-- 2. Spline Area -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Spline Area</h6>
      <apexchart v-if="ready" type="area" height="280" :options="splineOpts" :series="splineSeries" />
      <div v-else class="cp-skeleton" style="height:280px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.spline)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.spline }}</code></pre>
      </div>
    </div>

    <!-- 3. Datetime X axis -->
    <div class="cp-card mb-4">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
        <h6 class="cp-card-title mb-0">Area Chart — Datetime X axis</h6>
        <div class="d-flex gap-1">
          <button v-for="r in ['1M','3M','6M','1Y','ALL']" :key="r"
            class="cp-range-btn" :class="{ active: dateRange === r }"
            @click="dateRange = r">{{ r }}</button>
        </div>
      </div>
      <apexchart v-if="ready" type="area" height="280" :options="datetimeOpts" :series="datetimeSeries" />
      <div v-else class="cp-skeleton" style="height:280px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.datetime)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.datetime }}</code></pre>
      </div>
    </div>

    <!-- 4. Negative Values -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Area with Negative Values</h6>
      <apexchart v-if="ready" type="area" height="280" :options="negativeOpts" :series="negativeSeries" />
      <div v-else class="cp-skeleton" style="height:280px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.negative)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.negative }}</code></pre>
      </div>
    </div>

    <!-- 5. Stacked Area -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Stacked Area</h6>
      <apexchart v-if="ready" type="area" height="300" :options="stackedOpts" :series="stackedSeries" />
      <div v-else class="cp-skeleton" style="height:300px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.stacked)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.stacked }}</code></pre>
      </div>
    </div>

    <!-- 6. Irregular Timeseries -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Irregular Timeseries</h6>
      <apexchart v-if="ready" type="area" height="280" :options="irregularOpts" :series="irregularSeries" />
      <div v-else class="cp-skeleton" style="height:280px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.irregular)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.irregular }}</code></pre>
      </div>
    </div>

    <!-- 7. Null Values -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Area Chart with Null Values</h6>
      <apexchart v-if="ready" type="area" height="280" :options="nullOpts" :series="nullSeries" />
      <div v-else class="cp-skeleton" style="height:280px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.nullVal)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.nullVal }}</code></pre>
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
const ready     = ref(false)
const copied    = ref(false)
const dateRange = ref('6M')
const isDark    = ref(false)

// Track global theme
const syncTheme = () => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
}
onMounted(() => {
  syncTheme()
  ready.value = true
  const obs = new MutationObserver(syncTheme)
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

// Base chart options reactive to theme
const lc = computed(() => isDark.value ? '#7a8fa8' : '#8996af')
const gc = computed(() => isDark.value ? 'rgba(255,255,255,0.07)' : '#eef2f7')
const th = computed(() => isDark.value ? 'dark' : 'light')

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false }, zoom: { enabled: false } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  legend: { show: false },
}))

// Series
const basicSeries    = [{ name: 'STOCK ABC', data: [31,40,28,51,42,109,100,120,80,95,110,130] }]
const splineSeries   = [
  { name: 'Series 1', data: [31,40,28,51,42,109,100,80,95,72,60,88] },
  { name: 'Series 2', data: [11,32,45,32,34,52,41,60,45,50,70,55] },
]
const datetimeSeries = [{ name: 'XYZ MOTORS', data: (() => {
  const d = []; let t = new Date('2023-01-01').getTime()
  for (let i = 0; i < 80; i++) { d.push([t, Math.floor(Math.random()*80)+10]); t += 86400000*4 }
  return d
})() }]
const negativeSeries = [
  { name: 'Cash Flow', data: [1.45,5.42,5.9,-0.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,0.34,3.88,13.07,5,8.15,13.9,7,-0.9,-4.5,-8.4] },
  { name: 'Revenue',   data: [0.5,3.2,3.1,-1.0,-8.0,-12.0,-10.5,-8.0,-5.5,-2.5,2.0,5.0,8.5,2.5,5.0,9.5,4.0,-2.0,-6.0,-10.0] },
]
const stackedSeries  = [
  { name: 'South',   data: [31,40,28,51,42,109,100] },
  { name: 'North',   data: [11,32,45,32,34,52,41] },
  { name: 'Central', data: [20,15,30,25,18,40,35] },
]
const irregularSeries = [
  { name: 'Product A', data: [[1327359600000,30],[1327446000000,40],[1327618800000,35],[1327878000000,50],[1328137200000,45],[1328310000000,55],[1328482800000,60],[1328655600000,65]] },
  { name: 'Product B', data: [[1327359600000,15],[1327446000000,25],[1327618800000,20],[1327878000000,30],[1328137200000,28],[1328310000000,38],[1328482800000,42],[1328655600000,48]] },
]
const nullSeries = [
  { name: 'Sales', data: [12,14,null,18,null,15,20,null,25,18,null,22,28,30,null,26,null,32] },
  { name: 'Leads', data: [null,8,12,null,16,10,null,18,14,null,20,15,null,22,18,null,24,20] },
]

// Chart options
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const basicOpts = computed(() => ({
  ...base.value,
  colors: ['#fd7e14'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.02, stops: [0,90,100] } },
  xaxis: { ...base.value.xaxis, categories: months },
}))

const splineOpts = computed(() => ({
  ...base.value,
  colors: ['#2ecc71','#5b73e8'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.04 } },
  xaxis: { ...base.value.xaxis, categories: months },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
}))

const datetimeOpts = computed(() => ({
  ...base.value,
  colors: ['#fd7e14'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.02 } },
  xaxis: { ...base.value.xaxis, type: 'datetime' },
  stroke: { curve: 'straight', width: 1.5 },
}))

const negativeOpts = computed(() => ({
  ...base.value,
  colors: ['#2ecc71','#f1c40f'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.04 } },
  xaxis: { ...base.value.xaxis, categories: Array.from({length:20},(_,i)=>`W${i+1}`) },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
}))

const stackedOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  fill: { type: 'solid', opacity: 0.65 },
  chart: { ...base.value.chart, stacked: true },
  xaxis: { ...base.value.xaxis, categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'] },
  stroke: { width: 0 },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
}))

const irregularOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#e74c3c'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.04 } },
  xaxis: { ...base.value.xaxis, type: 'datetime' },
  legend: { show: true, position: 'top', labels: { colors: lc.value } },
}))

const nullOpts = computed(() => ({
  ...base.value,
  colors: ['#fd7e14','#f1c40f'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.04 } },
  xaxis: { ...base.value.xaxis, categories: Array.from({length:18},(_,i)=>`P${i+1}`) },
  stroke: { curve: 'smooth', width: 2, dashArray: [0,5] },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
}))

// Code snippets
const snip = {
  basic: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'area', height: 280, toolbar: { show: false }, zoom: { enabled: false } },
  series: [{ name: 'STOCK ABC', data: [31,40,28,51,42,109,100,120,80,95,110,130] }],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#fd7e14'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.02, stops: [0,90,100] } },
  stroke: { curve: 'smooth', width: 2 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  spline: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'area', height: 280, toolbar: { show: false }, zoom: { enabled: false } },
  series: [
    { name: 'Series 1', data: [31,40,28,51,42,109,100,80,95,72,60,88] },
    { name: 'Series 2', data: [11,32,45,32,34,52,41,60,45,50,70,55] }
  ],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
  colors: ['#2ecc71','#5b73e8'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.04 } },
  stroke: { curve: 'smooth', width: 2 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  datetime: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
// Generate datetime series data
var data = [];
var t = new Date('2023-01-01').getTime();
for (var i = 0; i < 80; i++) {
  data.push([t, Math.floor(Math.random() * 80) + 10]);
  t += 86400000 * 4;
}
var options = {
  chart: { type: 'area', height: 280, toolbar: { show: false }, zoom: { enabled: false } },
  series: [{ name: 'XYZ MOTORS', data: data }],
  xaxis: { type: 'datetime' },
  colors: ['#fd7e14'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.02 } },
  stroke: { curve: 'straight', width: 1.5 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light', x: { format: 'dd MMM yyyy' } }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  negative: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'area', height: 280, toolbar: { show: false }, zoom: { enabled: false } },
  series: [
    { name: 'Cash Flow', data: [1.45,5.42,5.9,-0.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,0.34,3.88,13.07,5,8.15,13.9,7,-0.9,-4.5,-8.4] },
    { name: 'Revenue',   data: [0.5,3.2,3.1,-1.0,-8.0,-12.0,-10.5,-8.0,-5.5,-2.5,2.0,5.0,8.5,2.5,5.0,9.5,4.0,-2.0,-6.0,-10.0] }
  ],
  xaxis: { categories: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12','W13','W14','W15','W16','W17','W18','W19','W20'] },
  colors: ['#2ecc71','#f1c40f'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.04 } },
  stroke: { curve: 'smooth', width: 2 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  stacked: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'area', height: 300, stacked: true, toolbar: { show: false }, zoom: { enabled: false } },
  series: [
    { name: 'South',   data: [31,40,28,51,42,109,100] },
    { name: 'North',   data: [11,32,45,32,34,52,41] },
    { name: 'Central', data: [20,15,30,25,18,40,35] }
  ],
  xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'] },
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  fill: { type: 'solid', opacity: 0.65 },
  stroke: { width: 0 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  irregular: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'area', height: 280, toolbar: { show: false }, zoom: { enabled: false } },
  series: [
    { name: 'Product A', data: [[1327359600000,30],[1327446000000,40],[1327618800000,35],[1327878000000,50],[1328137200000,45],[1328310000000,55],[1328482800000,60],[1328655600000,65]] },
    { name: 'Product B', data: [[1327359600000,15],[1327446000000,25],[1327618800000,20],[1327878000000,30],[1328137200000,28],[1328310000000,38],[1328482800000,42],[1328655600000,48]] }
  ],
  xaxis: { type: 'datetime' },
  colors: ['#5b73e8','#e74c3c'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.04 } },
  stroke: { curve: 'smooth', width: 2 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'top' },
  tooltip: { theme: 'light', x: { format: 'dd MMM yyyy' } }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  nullVal: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'area', height: 280, toolbar: { show: false }, zoom: { enabled: false } },
  series: [
    { name: 'Sales', data: [12,14,null,18,null,15,20,null,25,18,null,22,28,30,null,26,null,32] },
    { name: 'Leads', data: [null,8,12,null,16,10,null,18,14,null,20,15,null,22,18,null,24,20] }
  ],
  xaxis: { categories: ['P1','P2','P3','P4','P5','P6','P7','P8','P9','P10','P11','P12','P13','P14','P15','P16','P17','P18'] },
  colors: ['#fd7e14','#f1c40f'],
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.04 } },
  stroke: { curve: 'smooth', width: 2, dashArray: [0, 5] },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
}

function copy(text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.charts-page { padding: 24px; }

/* Header */
.cp-header { margin-bottom: 24px; }
.cp-title  { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.cp-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }

/* Card */
.cp-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 20px 22px;
  box-shadow: var(--card-shadow);
}
.cp-card-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 12px; }
.cp-text  { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.7; margin: 0; }
.cp-text code {
  background: rgba(253,126,20,0.1); color: var(--accent);
  padding: 1px 6px; border-radius: 4px; font-size: 0.78rem;
}
.cp-link  { color: var(--accent); text-decoration: none; font-weight: 500; }
.cp-link:hover { text-decoration: underline; }

/* Skeleton */
.cp-skeleton {
  border-radius: 8px;
  background: linear-gradient(90deg, var(--app-bg) 25%, var(--card-border) 50%, var(--app-bg) 75%);
  background-size: 400% 100%;
  animation: cp-shimmer 1.4s ease infinite;
}
@keyframes cp-shimmer { 0% { background-position: 100% 0 } 100% { background-position: -100% 0 } }

/* Code block */
.cp-code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.cp-code-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px;
  background: var(--app-bg);
  border-bottom: 1px solid var(--card-border);
}
.cp-badge {
  background: var(--accent); color: #fff;
  font-size: 0.67rem; font-weight: 700;
  padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px;
}
.cp-copy-btn {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 5px; font-size: 0.73rem; padding: 3px 10px;
  color: var(--text-muted); cursor: pointer; transition: all 0.15s;
}
.cp-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.cp-code {
  background: var(--app-bg); margin: 0; padding: 12px 16px;
  font-size: 0.73rem; color: var(--text-secondary);
  line-height: 1.7; overflow-x: auto; max-height: 130px;
  font-family: 'Courier New', monospace;
}

/* Range buttons */
.cp-range-btn {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 5px; font-size: 0.72rem; font-weight: 600;
  padding: 3px 9px; color: var(--text-muted); cursor: pointer; transition: all 0.15s;
}
.cp-range-btn:hover, .cp-range-btn.active {
  background: var(--accent); border-color: var(--accent); color: #fff;
}

/* Toast */
.cp-toast {
  position: fixed; bottom: 24px; right: 24px;
  background: var(--text-primary); color: var(--text-inverse);
  padding: 9px 18px; border-radius: 8px;
  font-size: 0.82rem; font-weight: 600;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 9999;
}
.cp-toast-fade-enter-active, .cp-toast-fade-leave-active { transition: opacity 0.25s, transform 0.25s; }
.cp-toast-fade-enter-from, .cp-toast-fade-leave-to { opacity: 0; transform: translateY(6px); }

@media (max-width: 576px) {
  .charts-page { padding: 16px; }
}
</style>
