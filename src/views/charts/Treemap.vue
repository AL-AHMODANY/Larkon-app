<template>
  <div class="charts-page">
    <CdnSection />
    <div class="cp-header">
      <h4 class="cp-title">Treemap Charts</h4>
      <p class="cp-subtitle">ApexCharts treemap chart examples with copy-ready snippets.</p>
    </div>

    <div class="cp-card mb-4" v-for="chart in charts" :key="chart.id">
      <h6 class="cp-card-title">{{ chart.title }}</h6>
      <apexchart v-if="ready" type="treemap" :height="chart.height" :options="chart.opts" :series="chart.series" />
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
const th = computed(() => isDark.value ? 'dark' : 'light')

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false } },
  theme: { mode: th.value },
  tooltip: { theme: th.value },
  dataLabels: { enabled: true, style: { fontSize: '12px', fontWeight: 600 } },
  legend: { show: false },
}))

const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a

const charts = computed(() => [
  {
    id: 'basic', title: 'Basic Treemap', height: 350,
    series: [{ data: [{ x: 'New Delhi', y: 218 }, { x: 'Kolkata', y: 149 }, { x: 'Mumbai', y: 184 }, { x: 'Ahmedabad', y: 55 }, { x: 'Bangaluru', y: 84 }, { x: 'Pune', y: 31 }, { x: 'Chennai', y: 70 }, { x: 'Jaipur', y: 30 }, { x: 'Surat', y: 44 }, { x: 'Hyderabad', y: 68 }, { x: 'Lucknow', y: 28 }, { x: 'Indore', y: 19 }, { x: 'Kanpur', y: 29 }] }],
    opts: { ...base.value, colors: ['#5b73e8'] },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'treemap', height: 350, toolbar: { show: false } },
  series: [{
    data: [
      { x: 'New Delhi',  y: 218 }, { x: 'Kolkata',   y: 149 },
      { x: 'Mumbai',     y: 184 }, { x: 'Ahmedabad', y: 55  },
      { x: 'Bangaluru',  y: 84  }, { x: 'Pune',      y: 31  },
      { x: 'Chennai',    y: 70  }, { x: 'Jaipur',    y: 30  },
      { x: 'Surat',      y: 44  }, { x: 'Hyderabad', y: 68  },
      { x: 'Lucknow',    y: 28  }, { x: 'Indore',    y: 19  },
      { x: 'Kanpur',     y: 29  }
    ]
  }],
  colors: ['#5b73e8'],
  dataLabels: { enabled: true, style: { fontSize: '12px', fontWeight: 600 } },
  legend: { show: false },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'multi-dim', title: 'Multi-dimensional Treemap', height: 350,
    series: [
      { name: 'Desktops', data: [{ x: 'ABC', y: 10 }, { x: 'DEF', y: 60 }, { x: 'XYZ', y: 41 }] },
      { name: 'Mobile',   data: [{ x: 'ABCD', y: 10 }, { x: 'DEFG', y: 20 }, { x: 'WXYZ', y: 51 }, { x: 'PQR', y: 30 }, { x: 'MNO', y: 20 }] },
    ],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14'], legend: { show: true, position: 'bottom', labels: { colors: lc.value } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'treemap', height: 350, toolbar: { show: false } },
  series: [
    { name: 'Desktops', data: [{ x: 'ABC', y: 10 }, { x: 'DEF', y: 60 }, { x: 'XYZ', y: 41 }] },
    { name: 'Mobile',   data: [{ x: 'ABCD', y: 10 }, { x: 'DEFG', y: 20 }, { x: 'WXYZ', y: 51 }, { x: 'PQR', y: 30 }, { x: 'MNO', y: 20 }] }
  ],
  colors: ['#5b73e8','#fd7e14'],
  dataLabels: { enabled: true, style: { fontSize: '12px', fontWeight: 600 } },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'color-range', title: 'Treemap with Color Range', height: 350,
    series: [{ data: Array.from({ length: 12 }, (_, i) => ({ x: `Item ${i + 1}`, y: r(10, 100) })) }],
    opts: {
      ...base.value,
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              { from: -6, to: 0,  color: '#e74c3c' },
              { from: 0.001, to: 6, color: '#2ecc71' },
            ],
          },
        },
      },
    },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'treemap', height: 350, toolbar: { show: false } },
  series: [{
    data: [
      { x: 'Item 1',  y: 4.2  }, { x: 'Item 2',  y: -2.1 },
      { x: 'Item 3',  y: 1.8  }, { x: 'Item 4',  y: -4.5 },
      { x: 'Item 5',  y: 3.1  }, { x: 'Item 6',  y: -1.3 },
      { x: 'Item 7',  y: 5.7  }, { x: 'Item 8',  y: -3.2 },
      { x: 'Item 9',  y: 2.4  }, { x: 'Item 10', y: -0.8 },
      { x: 'Item 11', y: 4.9  }, { x: 'Item 12', y: -2.6 }
    ]
  }],
  plotOptions: {
    treemap: {
      enableShades: true, shadeIntensity: 0.5, reverseNegativeShade: true,
      colorScale: {
        ranges: [
          { from: -6,    to: 0,   color: '#e74c3c' },
          { from: 0.001, to: 6,   color: '#2ecc71' }
        ]
      }
    }
  },
  dataLabels: { enabled: true, style: { fontSize: '12px', fontWeight: 600 } },
  legend: { show: false },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,
  },
  {
    id: 'distributed', title: 'Distributed Treemap', height: 350,
    series: [{ data: [{ x: 'Analysis', y: 430 }, { x: 'Finance', y: 448 }, { x: 'HR', y: 470 }, { x: 'Legal', y: 540 }, { x: 'Marketing', y: 580 }, { x: 'Operations', y: 690 }, { x: 'Product', y: 1100 }, { x: 'R&D', y: 1200 }] }],
    opts: { ...base.value, colors: ['#5b73e8','#fd7e14','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#1abc9c','#e67e22'], plotOptions: { treemap: { distributed: true, enableShades: false } } },
    snip: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'treemap', height: 350, toolbar: { show: false } },
  series: [{
    data: [
      { x: 'Analysis',   y: 430  }, { x: 'Finance',    y: 448  },
      { x: 'HR',         y: 470  }, { x: 'Legal',      y: 540  },
      { x: 'Marketing',  y: 580  }, { x: 'Operations', y: 690  },
      { x: 'Product',    y: 1100 }, { x: 'R&D',        y: 1200 }
    ]
  }],
  colors: ['#5b73e8','#fd7e14','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#1abc9c','#e67e22'],
  plotOptions: { treemap: { distributed: true, enableShades: false } },
  dataLabels: { enabled: true, style: { fontSize: '12px', fontWeight: 600 } },
  legend: { show: false },
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
