<template>
  <div class="charts-page">
    <CdnSection />
    <div class="cp-header">
      <h4 class="cp-title">RadialBar Charts</h4>
      <p class="cp-subtitle">ApexCharts radial bar and circular gauge chart examples.</p>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-6" v-for="chart in charts" :key="chart.id">
        <div class="cp-card h-100">
          <h6 class="cp-card-title">{{ chart.title }}</h6>
          <apexchart v-if="ready" type="radialBar" :height="chart.height" :options="chart.opts" :series="chart.series" />
          <div v-else class="cp-skeleton" :style="`height:${chart.height}px`"></div>
          <div class="cp-code-block mt-3">
            <div class="cp-code-bar">
              <span class="cp-badge">HTML</span>
              <button class="cp-copy-btn" @click="copy(chart.snip)"><i class="bi bi-clipboard me-1"></i>Copy</button>
            </div>
            <pre class="cp-code"><code>{{ chart.snip }}</code></pre>
          </div>
        </div>
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
const th = computed(() => isDark.value ? 'dark' : 'light')

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false } },
  theme: { mode: th.value },
  tooltip: { theme: th.value },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
  plotOptions: { radialBar: { hollow: { size: '50%' }, dataLabels: { name: { color: lc.value }, value: { color: lc.value, fontSize: '16px', fontWeight: 700 } } } },
}))

const charts = computed(() => [
  {
    id: 'basic', title: 'Basic RadialBar', height: 350,
    series: [70],
    opts: { ...base.value, colors: ['#fd7e14'], labels: ['Cricket'], plotOptions: { radialBar: { ...base.value.plotOptions.radialBar, hollow: { size: '60%' } } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'radialBar', height: 350, toolbar: { show: false } },
  series: [70],
  labels: ['Cricket'],
  colors: ['#fd7e14'],
  plotOptions: { radialBar: { hollow: { size: '60%' }, dataLabels: { name: { fontSize: '16px' }, value: { fontSize: '16px', fontWeight: 700 } } } },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'multiple', title: 'Multiple RadialBars', height: 350,
    series: [44, 55, 67, 83],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71','#e74c3c'], labels: ['Apples','Mangoes','Oranges','Grapes'], plotOptions: { radialBar: { ...base.value.plotOptions.radialBar, hollow: { size: '30%' } } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'radialBar', height: 350, toolbar: { show: false } },
  series: [44, 55, 67, 83],
  labels: ['Apples','Mangoes','Oranges','Grapes'],
  colors: ['#5b73e8','#fd7e14','#2ecc71','#e74c3c'],
  plotOptions: { radialBar: { hollow: { size: '30%' }, dataLabels: { name: { fontSize: '13px' }, value: { fontSize: '14px', fontWeight: 700 } } } },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'custom-angle', title: 'Custom Angle Circle', height: 350,
    series: [76, 67, 61, 90],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71','#e74c3c'], labels: ['Vimeo','Messenger','Facebook','LinkedIn'], plotOptions: { radialBar: { offsetY: 0, startAngle: 0, endAngle: 270, hollow: { margin: 5, size: '30%', background: 'transparent' }, dataLabels: { name: { show: false }, value: { show: false }, total: { show: true, label: 'Total', color: lc.value, formatter: () => '249' } } } }, legend: { show: true, floating: true, fontSize: '13px', position: 'left', offsetX: 10, offsetY: 10, labels: { useSeriesColors: true }, markers: { size: 0 }, formatter: (seriesName, opts) => seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex], itemMargin: { vertical: 3 } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'radialBar', height: 350, toolbar: { show: false } },
  series: [76, 67, 61, 90],
  labels: ['Vimeo','Messenger','Facebook','LinkedIn'],
  colors: ['#5b73e8','#fd7e14','#2ecc71','#e74c3c'],
  plotOptions: {
    radialBar: {
      offsetY: 0, startAngle: 0, endAngle: 270,
      hollow: { margin: 5, size: '30%', background: 'transparent' },
      dataLabels: {
        name: { show: false }, value: { show: false },
        total: { show: true, label: 'Total', formatter: function() { return '249'; } }
      }
    }
  },
  legend: {
    show: true, floating: true, fontSize: '13px', position: 'left',
    offsetX: 10, offsetY: 10, labels: { useSeriesColors: true },
    markers: { size: 0 },
    formatter: function(seriesName, opts) { return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]; },
    itemMargin: { vertical: 3 }
  },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'semi-circle', title: 'Semi Circle Gauge', height: 300,
    series: [76],
    opts: { ...base.value, colors: ['#fd7e14'], labels: ['Average Results'], plotOptions: { radialBar: { startAngle: -90, endAngle: 90, track: { background: isDark.value ? 'rgba(255,255,255,0.08)' : '#eef2f7', strokeWidth: '97%', margin: 5 }, dataLabels: { name: { show: false }, value: { offsetY: -2, fontSize: '22px', fontWeight: 700, color: lc.value } } } }, fill: { type: 'gradient', gradient: { shade: 'light', shadeIntensity: 0.4, inverseColors: false, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 53, 91] } }, legend: { show: false }, grid: { padding: { bottom: -10 } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'radialBar', height: 300, toolbar: { show: false } },
  series: [76],
  labels: ['Average Results'],
  colors: ['#fd7e14'],
  plotOptions: {
    radialBar: {
      startAngle: -90, endAngle: 90,
      track: { background: '#eef2f7', strokeWidth: '97%', margin: 5 },
      dataLabels: { name: { show: false }, value: { offsetY: -2, fontSize: '22px', fontWeight: 700 } }
    }
  },
  fill: { type: 'gradient', gradient: { shade: 'light', shadeIntensity: 0.4, inverseColors: false, opacityFrom: 1, opacityTo: 1, stops: [0,50,53,91] } },
  grid: { padding: { bottom: -10 } },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'gradient', title: 'Gradient RadialBar', height: 350,
    series: [67],
    opts: { ...base.value, colors: ['#fd7e14'], labels: ['Percent'], fill: { type: 'gradient', gradient: { shade: 'dark', type: 'horizontal', shadeIntensity: 0.5, gradientToColors: ['#5b73e8'], inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 100] } }, stroke: { lineCap: 'round' }, plotOptions: { radialBar: { ...base.value.plotOptions.radialBar, hollow: { size: '60%' } } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'radialBar', height: 350, toolbar: { show: false } },
  series: [67],
  labels: ['Percent'],
  colors: ['#fd7e14'],
  fill: { type: 'gradient', gradient: { shade: 'dark', type: 'horizontal', shadeIntensity: 0.5, gradientToColors: ['#5b73e8'], inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0,100] } },
  stroke: { lineCap: 'round' },
  plotOptions: { radialBar: { hollow: { size: '60%' }, dataLabels: { name: { fontSize: '16px' }, value: { fontSize: '16px', fontWeight: 700 } } } },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'stroked', title: 'Stroked Circular Gauge', height: 350,
    series: [67],
    opts: { ...base.value, colors: ['#2ecc71'], labels: ['Percent'], fill: { type: 'solid' }, stroke: { lineCap: 'round' }, plotOptions: { radialBar: { hollow: { size: '60%' }, track: { strokeWidth: '67%', margin: 0 }, dataLabels: { show: true, name: { offsetY: -10, show: true, color: lc.value, fontSize: '13px' }, value: { formatter: v => v + '%', color: lc.value, fontSize: '30px', fontWeight: 700, show: true } } } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'radialBar', height: 350, toolbar: { show: false } },
  series: [67],
  labels: ['Percent'],
  colors: ['#2ecc71'],
  fill: { type: 'solid' },
  stroke: { lineCap: 'round' },
  plotOptions: {
    radialBar: {
      hollow: { size: '60%' },
      track: { strokeWidth: '67%', margin: 0 },
      dataLabels: {
        show: true,
        name: { offsetY: -10, show: true, fontSize: '13px' },
        value: { formatter: function(v) { return v + '%'; }, fontSize: '30px', fontWeight: 700, show: true }
      }
    }
  },
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
