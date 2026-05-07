<template>
  <div class="charts-page">
    <CdnSection />
    <div class="cp-header">
      <h4 class="cp-title">Timeline Charts</h4>
      <p class="cp-subtitle">ApexCharts timeline / range bar chart examples.</p>
    </div>

    <div class="cp-card mb-4" v-for="chart in charts" :key="chart.id">
      <h6 class="cp-card-title">{{ chart.title }}</h6>
      <apexchart v-if="ready" type="rangeBar" :height="chart.height" :options="chart.opts" :series="chart.series" />
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

const d = (y, m, day) => new Date(y, m, day).getTime()

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { type: 'datetime', labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  plotOptions: { bar: { horizontal: true, borderRadius: 4, rangeBarGroupRows: true } },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
}))

const charts = computed(() => [
  {
    id: 'basic', title: 'Basic Timeline', height: 300,
    series: [
      { name: 'Bob',   data: [{ x: 'Design',  y: [d(2019,2,1), d(2019,2,15)] }, { x: 'Code',    y: [d(2019,3,1), d(2019,3,20)] }, { x: 'Test',    y: [d(2019,4,1), d(2019,4,10)] }] },
      { name: 'Joe',   data: [{ x: 'Design',  y: [d(2019,2,16),d(2019,2,28)] }, { x: 'Code',    y: [d(2019,3,21),d(2019,4,5)]  }, { x: 'Test',    y: [d(2019,4,11),d(2019,4,25)] }] },
      { name: 'Alice', data: [{ x: 'Design',  y: [d(2019,3,1), d(2019,3,15)] }, { x: 'Code',    y: [d(2019,4,6), d(2019,4,20)] }, { x: 'Test',    y: [d(2019,4,26),d(2019,5,5)]  }] },
    ],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71'] },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'rangeBar', height: 300, toolbar: { show: false } },
  series: [
    { name: 'Bob', data: [
      { x: 'Design', y: [new Date(2019,2,1).getTime(), new Date(2019,2,15).getTime()] },
      { x: 'Code',   y: [new Date(2019,3,1).getTime(), new Date(2019,3,20).getTime()] },
      { x: 'Test',   y: [new Date(2019,4,1).getTime(), new Date(2019,4,10).getTime()] }
    ]},
    { name: 'Joe', data: [
      { x: 'Design', y: [new Date(2019,2,16).getTime(), new Date(2019,2,28).getTime()] },
      { x: 'Code',   y: [new Date(2019,3,21).getTime(), new Date(2019,4,5).getTime()] },
      { x: 'Test',   y: [new Date(2019,4,11).getTime(), new Date(2019,4,25).getTime()] }
    ]},
    { name: 'Alice', data: [
      { x: 'Design', y: [new Date(2019,3,1).getTime(), new Date(2019,3,15).getTime()] },
      { x: 'Code',   y: [new Date(2019,4,6).getTime(), new Date(2019,4,20).getTime()] },
      { x: 'Test',   y: [new Date(2019,4,26).getTime(), new Date(2019,5,5).getTime()] }
    ]}
  ],
  xaxis: { type: 'datetime' },
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  plotOptions: { bar: { horizontal: true, borderRadius: 4, rangeBarGroupRows: true } },
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
    id: 'multiple', title: 'Multiple Series Timeline', height: 350,
    series: [
      { name: 'Analysis', data: [{ x: 'Team A', y: [d(2019,0,1), d(2019,0,15)] }, { x: 'Team B', y: [d(2019,1,1), d(2019,1,20)] }, { x: 'Team C', y: [d(2019,2,1), d(2019,2,25)] }] },
      { name: 'Design',   data: [{ x: 'Team A', y: [d(2019,0,16),d(2019,1,5)]  }, { x: 'Team B', y: [d(2019,1,21),d(2019,2,10)] }, { x: 'Team C', y: [d(2019,2,26),d(2019,3,15)] }] },
      { name: 'Coding',   data: [{ x: 'Team A', y: [d(2019,1,6), d(2019,2,1)]  }, { x: 'Team B', y: [d(2019,2,11),d(2019,3,1)]  }, { x: 'Team C', y: [d(2019,3,16),d(2019,4,10)] }] },
    ],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71'], plotOptions: { bar: { horizontal: true, borderRadius: 4, rangeBarGroupRows: false } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'rangeBar', height: 350, toolbar: { show: false } },
  series: [
    { name: 'Analysis', data: [
      { x: 'Team A', y: [new Date(2019,0,1).getTime(), new Date(2019,0,15).getTime()] },
      { x: 'Team B', y: [new Date(2019,1,1).getTime(), new Date(2019,1,20).getTime()] },
      { x: 'Team C', y: [new Date(2019,2,1).getTime(), new Date(2019,2,25).getTime()] }
    ]},
    { name: 'Design', data: [
      { x: 'Team A', y: [new Date(2019,0,16).getTime(), new Date(2019,1,5).getTime()] },
      { x: 'Team B', y: [new Date(2019,1,21).getTime(), new Date(2019,2,10).getTime()] },
      { x: 'Team C', y: [new Date(2019,2,26).getTime(), new Date(2019,3,15).getTime()] }
    ]},
    { name: 'Coding', data: [
      { x: 'Team A', y: [new Date(2019,1,6).getTime(), new Date(2019,2,1).getTime()] },
      { x: 'Team B', y: [new Date(2019,2,11).getTime(), new Date(2019,3,1).getTime()] },
      { x: 'Team C', y: [new Date(2019,3,16).getTime(), new Date(2019,4,10).getTime()] }
    ]}
  ],
  xaxis: { type: 'datetime' },
  colors: ['#5b73e8','#fd7e14','#2ecc71'],
  plotOptions: { bar: { horizontal: true, borderRadius: 4, rangeBarGroupRows: false } },
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
    id: 'datalabels', title: 'Timeline with Data Labels', height: 300,
    series: [
      { name: 'Bob',   data: [{ x: 'Design', y: [d(2019,2,1), d(2019,2,15)], fillColor: '#5b73e8' }, { x: 'Code',   y: [d(2019,3,1), d(2019,3,20)], fillColor: '#fd7e14' }] },
      { name: 'Joe',   data: [{ x: 'Design', y: [d(2019,2,16),d(2019,2,28)], fillColor: '#2ecc71' }, { x: 'Code',   y: [d(2019,3,21),d(2019,4,5)],  fillColor: '#e74c3c' }] },
    ],
    opts: { ...base.value, dataLabels: { enabled: true, formatter: (val) => { const a = new Date(val[0]); const b = new Date(val[1]); const diff = Math.round((b - a) / 86400000); return diff + (diff > 1 ? ' days' : ' day') }, style: { colors: ['#fff'], fontSize: '11px' } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'rangeBar', height: 300, toolbar: { show: false } },
  series: [
    { name: 'Bob', data: [
      { x: 'Design', y: [new Date(2019,2,1).getTime(), new Date(2019,2,15).getTime()], fillColor: '#5b73e8' },
      { x: 'Code',   y: [new Date(2019,3,1).getTime(), new Date(2019,3,20).getTime()], fillColor: '#fd7e14' }
    ]},
    { name: 'Joe', data: [
      { x: 'Design', y: [new Date(2019,2,16).getTime(), new Date(2019,2,28).getTime()], fillColor: '#2ecc71' },
      { x: 'Code',   y: [new Date(2019,3,21).getTime(), new Date(2019,4,5).getTime()],  fillColor: '#e74c3c' }
    ]}
  ],
  xaxis: { type: 'datetime' },
  plotOptions: { bar: { horizontal: true, borderRadius: 4, rangeBarGroupRows: true } },
  dataLabels: {
    enabled: true,
    formatter: function(val) {
      var diff = Math.round((val[1] - val[0]) / 86400000);
      return diff + (diff > 1 ? ' days' : ' day');
    },
    style: { colors: ['#fff'], fontSize: '11px' }
  },
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
