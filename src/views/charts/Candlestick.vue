<template>
  <div class="charts-page">
    <CdnSection />

    <div class="cp-header">
      <h4 class="cp-title">Candlestick Charts</h4>
      <p class="cp-subtitle">ApexCharts candlestick chart examples for financial data visualization.</p>
    </div>

    <!-- Overview -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Overview</h6>
      <p class="cp-text mb-0">
        Find the JS file for the following chart at:
        <a href="#" class="cp-link">src/assets/js/components/apexchart-candlestick.js</a>
      </p>
    </div>

    <!-- 1. Basic Candlestick -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Basic Candlestick Chart</h6>
      <apexchart v-if="ready" type="candlestick" height="350" :options="basicOpts" :series="basicSeries" />
      <div v-else class="cp-skeleton" style="height:350px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.basic)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.basic }}</code></pre>
      </div>
    </div>

    <!-- 2. Candlestick + Line (Combo) -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Candlestick with Line (Combo)</h6>
      <apexchart v-if="ready" type="candlestick" height="350" :options="comboOpts" :series="comboSeries" />
      <div v-else class="cp-skeleton" style="height:350px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.combo)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.combo }}</code></pre>
      </div>
    </div>

    <!-- 3. Candlestick with Brush -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Candlestick — Synced with Brush Chart</h6>
      <apexchart v-if="ready" type="candlestick" height="290" :options="brushMainOpts" :series="basicSeries" id="cs-main" />
      <apexchart v-if="ready" type="bar" height="130" :options="brushBarOpts" :series="brushBarSeries" id="cs-brush" />
      <div v-else class="cp-skeleton" style="height:420px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.brush)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.brush }}</code></pre>
      </div>
    </div>

    <!-- 4. Category X-axis -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Candlestick — Category X-axis</h6>
      <apexchart v-if="ready" type="candlestick" height="350" :options="categoryOpts" :series="categorySeries" />
      <div v-else class="cp-skeleton" style="height:350px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.category)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.category }}</code></pre>
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

// Generate OHLC candlestick data
function genOHLC(count, startDate, startPrice) {
  const data = []
  let price = startPrice
  let date  = new Date(startDate).getTime()
  for (let i = 0; i < count; i++) {
    const open  = price + (Math.random() - 0.5) * 8
    const close = open  + (Math.random() - 0.5) * 12
    const high  = Math.max(open, close) + Math.random() * 6
    const low   = Math.min(open, close) - Math.random() * 6
    data.push({ x: new Date(date), y: [+open.toFixed(2), +high.toFixed(2), +low.toFixed(2), +close.toFixed(2)] })
    price = close
    date += 86400000
  }
  return data
}

const ohlcData = genOHLC(60, '2023-01-01', 150)

const basicSeries = [{ data: ohlcData }]

const comboSeries = computed(() => [
  { name: 'candle', type: 'candlestick', data: ohlcData },
  { name: 'MA(7)',  type: 'line',        data: ohlcData.map((d, i, arr) => {
    const slice = arr.slice(Math.max(0, i - 6), i + 1)
    const avg   = slice.reduce((s, c) => s + c.y[3], 0) / slice.length
    return { x: d.x, y: +avg.toFixed(2) }
  }) },
])

const brushBarSeries = [{ name: 'Volume', data: ohlcData.map(d => ({ x: d.x, y: Math.floor(Math.random() * 5000000) + 500000 })) }]

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const categorySeries = [{ data: Array.from({length:12}, (_, i) => ({
  x: months[i],
  y: (() => {
    const o = 100 + i * 5 + Math.random() * 20
    const c = o + (Math.random() - 0.5) * 15
    return [+o.toFixed(2), +(Math.max(o,c)+Math.random()*8).toFixed(2), +(Math.min(o,c)-Math.random()*8).toFixed(2), +c.toFixed(2)]
  })()
})) }]

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { type: 'datetime', labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { tooltip: { enabled: true }, labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  plotOptions: {
    candlestick: {
      colors: { upward: '#2ecc71', downward: '#e74c3c' },
      wick: { useFillColor: true },
    },
  },
}))

const basicOpts = computed(() => ({ ...base.value }))

const comboOpts = computed(() => ({
  ...base.value,
  chart: { ...base.value.chart, type: 'candlestick' },
  stroke: { width: [1, 2] },
  colors: ['transparent', '#fd7e14'],
  legend: { show: true, position: 'top', labels: { colors: lc.value } },
}))

const brushMainOpts = computed(() => ({
  ...base.value,
  chart: { ...base.value.chart, id: 'cs-main', brush: { enabled: false } },
  xaxis: { ...base.value.xaxis, type: 'datetime' },
}))

const brushBarOpts = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false }, id: 'cs-brush', brush: { target: 'cs-main', enabled: true }, selection: { enabled: true, xaxis: { min: ohlcData[0].x.getTime(), max: ohlcData[29].x.getTime() } } },
  theme: { mode: th.value },
  colors: ['#5b73e8'],
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { type: 'datetime', labels: { style: { colors: lc.value, fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { show: false } },
  dataLabels: { enabled: false },
  fill: { opacity: 0.7 },
  tooltip: { theme: th.value },
}))

const categoryOpts = computed(() => ({
  ...base.value,
  xaxis: { ...base.value.xaxis, type: 'category', labels: { style: { colors: lc.value, fontSize: '11px' } } },
}))

const snip = {
  basic: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
// Generate OHLC data
function genOHLC(count, startDate, startPrice) {
  var data = []; var price = startPrice;
  var date = new Date(startDate).getTime();
  for (var i = 0; i < count; i++) {
    var open  = price + (Math.random() - 0.5) * 8;
    var close = open  + (Math.random() - 0.5) * 12;
    var high  = Math.max(open, close) + Math.random() * 6;
    var low   = Math.min(open, close) - Math.random() * 6;
    data.push({ x: new Date(date), y: [+open.toFixed(2), +high.toFixed(2), +low.toFixed(2), +close.toFixed(2)] });
    price = close; date += 86400000;
  }
  return data;
}
var options = {
  chart: { type: 'candlestick', height: 350, toolbar: { show: false } },
  series: [{ data: genOHLC(60, '2023-01-01', 150) }],
  xaxis: { type: 'datetime' },
  plotOptions: { candlestick: { colors: { upward: '#2ecc71', downward: '#e74c3c' }, wick: { useFillColor: true } } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  combo: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
function genOHLC(count, startDate, startPrice) {
  var data = []; var price = startPrice;
  var date = new Date(startDate).getTime();
  for (var i = 0; i < count; i++) {
    var open  = price + (Math.random() - 0.5) * 8;
    var close = open  + (Math.random() - 0.5) * 12;
    var high  = Math.max(open, close) + Math.random() * 6;
    var low   = Math.min(open, close) - Math.random() * 6;
    data.push({ x: new Date(date), y: [+open.toFixed(2), +high.toFixed(2), +low.toFixed(2), +close.toFixed(2)] });
    price = close; date += 86400000;
  }
  return data;
}
var ohlcData = genOHLC(60, '2023-01-01', 150);
// Calculate 7-day moving average
var maData = ohlcData.map(function(d, i, arr) {
  var slice = arr.slice(Math.max(0, i - 6), i + 1);
  var avg = slice.reduce(function(s, c) { return s + c.y[3]; }, 0) / slice.length;
  return { x: d.x, y: +avg.toFixed(2) };
});
var options = {
  chart: { type: 'candlestick', height: 350, toolbar: { show: false } },
  series: [
    { name: 'candle', type: 'candlestick', data: ohlcData },
    { name: 'MA(7)',  type: 'line',        data: maData }
  ],
  xaxis: { type: 'datetime' },
  colors: ['transparent','#fd7e14'],
  stroke: { width: [1, 2] },
  plotOptions: { candlestick: { colors: { upward: '#2ecc71', downward: '#e74c3c' }, wick: { useFillColor: true } } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'top' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  brush: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart-main"></div>
<div id="chart-brush"></div>
<script>
function genOHLC(count, startDate, startPrice) {
  var data = []; var price = startPrice;
  var date = new Date(startDate).getTime();
  for (var i = 0; i < count; i++) {
    var open  = price + (Math.random() - 0.5) * 8;
    var close = open  + (Math.random() - 0.5) * 12;
    var high  = Math.max(open, close) + Math.random() * 6;
    var low   = Math.min(open, close) - Math.random() * 6;
    data.push({ x: new Date(date), y: [+open.toFixed(2), +high.toFixed(2), +low.toFixed(2), +close.toFixed(2)] });
    price = close; date += 86400000;
  }
  return data;
}
var ohlcData = genOHLC(60, '2023-01-01', 150);
var volumeData = ohlcData.map(function(d) { return { x: d.x, y: Math.floor(Math.random() * 5000000) + 500000 }; });
var mainOpts = {
  chart: { id: 'cs-main', type: 'candlestick', height: 290, toolbar: { show: false } },
  series: [{ data: ohlcData }],
  xaxis: { type: 'datetime' },
  plotOptions: { candlestick: { colors: { upward: '#2ecc71', downward: '#e74c3c' } } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 }, tooltip: { theme: 'light' }
};
var brushOpts = {
  chart: { id: 'cs-brush', type: 'bar', height: 130, brush: { target: 'cs-main', enabled: true }, selection: { enabled: true, xaxis: { min: ohlcData[0].x.getTime(), max: ohlcData[29].x.getTime() } } },
  series: [{ name: 'Volume', data: volumeData }],
  xaxis: { type: 'datetime' }, colors: ['#5b73e8'],
  fill: { opacity: 0.7 }, dataLabels: { enabled: false }, yaxis: { labels: { show: false } }
};
new ApexCharts(document.querySelector("#chart-main"), mainOpts).render();
new ApexCharts(document.querySelector("#chart-brush"), brushOpts).render();
<\/script>`,

  category: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var data = months.map(function(m, i) {
  var o = 100 + i * 5 + Math.random() * 20;
  var c = o + (Math.random() - 0.5) * 15;
  return { x: m, y: [+o.toFixed(2), +(Math.max(o,c)+Math.random()*8).toFixed(2), +(Math.min(o,c)-Math.random()*8).toFixed(2), +c.toFixed(2)] };
});
var options = {
  chart: { type: 'candlestick', height: 350, toolbar: { show: false } },
  series: [{ data: data }],
  xaxis: { type: 'category' },
  plotOptions: { candlestick: { colors: { upward: '#2ecc71', downward: '#e74c3c' }, wick: { useFillColor: true } } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
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
