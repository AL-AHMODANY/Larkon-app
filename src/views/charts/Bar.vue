<template>
  <div class="charts-page">
    <CdnSection />

    <div class="cp-header">
      <h4 class="cp-title">Bar Charts</h4>
      <p class="cp-subtitle">ApexCharts horizontal bar chart examples with copy-ready snippets.</p>
    </div>

    <!-- 1. Basic Bar -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Basic Bar Chart</h6>
      <apexchart v-if="ready" type="bar" height="340" :options="basicOpts" :series="basicSeries" />
      <div v-else class="cp-skeleton" style="height:340px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.basic)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.basic }}</code></pre>
      </div>
    </div>

    <!-- 2. Grouped Bar -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Grouped Bar Chart</h6>
      <apexchart v-if="ready" type="bar" height="340" :options="groupedOpts" :series="groupedSeries" />
      <div v-else class="cp-skeleton" style="height:340px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.grouped)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.grouped }}</code></pre>
      </div>
    </div>

    <!-- 3. Stacked Bar -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Stacked Bar Chart</h6>
      <apexchart v-if="ready" type="bar" height="360" :options="stackedOpts" :series="stackedSeries" />
      <div v-else class="cp-skeleton" style="height:360px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.stacked)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.stacked }}</code></pre>
      </div>
    </div>

    <!-- 4. 100% Stacked Bar -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">100% Stacked Bar Chart</h6>
      <apexchart v-if="ready" type="bar" height="360" :options="stacked100Opts" :series="stackedSeries" />
      <div v-else class="cp-skeleton" style="height:360px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.stacked100)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.stacked100 }}</code></pre>
      </div>
    </div>

    <!-- 5. Negative Values -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Bar with Negative Values</h6>
      <apexchart v-if="ready" type="bar" height="440" :options="negativeOpts" :series="negativeSeries" />
      <div v-else class="cp-skeleton" style="height:440px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.negative)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.negative }}</code></pre>
      </div>
    </div>

    <!-- 6. Reversed Bar -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Reversed Bar Chart</h6>
      <apexchart v-if="ready" type="bar" height="340" :options="reversedOpts" :series="reversedSeries" />
      <div v-else class="cp-skeleton" style="height:340px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.reversed)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.reversed }}</code></pre>
      </div>
    </div>

    <!-- 7. Custom DataLabels -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Custom DataLabels Bar</h6>
      <apexchart v-if="ready" type="bar" height="400" :options="dataLabelsOpts" :series="dataLabelsSeries" />
      <div v-else class="cp-skeleton" style="height:400px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.datalabels)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.datalabels }}</code></pre>
      </div>
    </div>

    <!-- 8. Patterned Bar -->
    <div class="cp-card mb-4">
      <h6 class="cp-card-title">Patterned Bar Chart</h6>
      <apexchart v-if="ready" type="bar" height="360" :options="patternedOpts" :series="patternedSeries" />
      <div v-else class="cp-skeleton" style="height:360px"></div>
      <div class="cp-code-block mt-3">
        <div class="cp-code-bar">
          <span class="cp-badge">HTML</span>
          <button class="cp-copy-btn" @click="copy(snip.patterned)"><i class="bi bi-clipboard me-1"></i>Copy</button>
        </div>
        <pre class="cp-code"><code>{{ snip.patterned }}</code></pre>
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

const base = computed(() => ({
  chart: { background: 'transparent', toolbar: { show: false } },
  theme: { mode: th.value },
  grid: { borderColor: gc.value, strokeDashArray: 4 },
  xaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { labels: { style: { colors: lc.value, fontSize: '11px' } } },
  tooltip: { theme: th.value },
  dataLabels: { enabled: false },
  legend: { show: false, labels: { colors: lc.value } },
  plotOptions: { bar: { borderRadius: 4, horizontal: true } },
}))

// Series
const basicSeries    = [{ name: 'Employees', data: [812,940,670,1100,750,890,1025,610,980,1200,560,870] }]
const groupedSeries  = [{ name: 'Series 1', data: [44,55,41,64,22,43,21] }, { name: 'Series 2', data: [53,32,33,52,13,44,32] }]
const stackedSeries  = [
  { name: 'Marine Sprite', data: [44,55,41,37,22,43,21] },
  { name: 'Striking Calf', data: [53,32,33,52,13,44,32] },
  { name: 'Tank Picture',  data: [12,17,11,9,15,11,20] },
  { name: 'Bucket Slope',  data: [9,7,5,8,6,9,4] },
  { name: 'Reborn Kid',    data: [25,12,19,32,25,24,10] },
]
const negativeSeries = [
  { name: 'Males',   data: [-12.2,-9.3,-7.6,-6.8,-5.5,-4.9,-4.3,-3.8,-3.0,-2.2,-1.5,-0.9,-0.5,-0.2,0.1,0.5,0.9,1.3,2.0,2.8] },
  { name: 'Females', data: [10.1,8.7,7.2,6.1,5.3,4.6,4.0,3.5,2.8,2.1,1.4,0.8,0.4,0.1,-0.2,-0.6,-1.0,-1.5,-2.1,-2.9] },
]
const reversedSeries    = [{ name: 'Net Profit', data: [400,430,448,470,540,580,690,1100] }]
const dataLabelsSeries  = [
  { name: 'South Korea', data: [400] }, { name: 'Canada', data: [430] },
  { name: 'United Kingdom', data: [448] }, { name: 'Netherlands', data: [470] },
  { name: 'Italy', data: [540] }, { name: 'France', data: [580] },
  { name: 'Japan', data: [690] }, { name: 'United States', data: [1100] },
  { name: 'China', data: [1200] }, { name: 'Germany', data: [1380] },
]
const patternedSeries = [
  { name: 'Marine Sprite', data: [44,55,41,37,22,43,21] },
  { name: 'Striking Calf', data: [53,32,33,52,13,44,32] },
  { name: 'Tank Picture',  data: [12,17,11,9,15,11,20] },
  { name: 'Bucket Slope',  data: [9,7,5,8,6,9,4] },
]

const cats7 = ['2015','2016','2017','2018','2019','2020','2021']
const ages  = ['85+','80-84','75-79','70-74','65-69','60-64','55-59','50-54','45-49','40-44','35-39','30-34','25-29','20-24','15-19','10-14','5-9','0-4'].reverse()

const basicOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8'],
  xaxis: { ...base.value.xaxis, categories: ['Abbott','Beaufort','Canberra','Dawson','Edinburgh','Fairhaven','Glasgow','Harwell','Inverness','Jarrow','Kingston','Lancaster'] },
  plotOptions: { bar: { borderRadius: 4, horizontal: true, barHeight: '55%' } },
  dataLabels: { enabled: true, style: { colors: ['#fff'], fontSize: '11px' } },
}))

const groupedOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#2ecc71'],
  xaxis: { ...base.value.xaxis, categories: cats7 },
  plotOptions: { bar: { borderRadius: 3, horizontal: true, barHeight: '70%' } },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
}))

const stackedOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#2ecc71','#fd7e14','#e74c3c','#9b59b6'],
  chart: { ...base.value.chart, stacked: true },
  xaxis: { ...base.value.xaxis, categories: cats7 },
  plotOptions: { bar: { borderRadius: 0, horizontal: true } },
  dataLabels: { enabled: true, style: { colors: ['#fff'], fontSize: '10px' } },
  legend: { show: true, position: 'top', labels: { colors: lc.value } },
}))

const stacked100Opts = computed(() => ({
  ...stackedOpts.value,
  chart: { ...base.value.chart, stacked: true, stackType: '100%' },
  dataLabels: { enabled: true, formatter: (v) => `${v.toFixed(0)}%`, style: { colors: ['#fff'], fontSize: '10px' } },
}))

const negativeOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#2ecc71'],
  xaxis: { ...base.value.xaxis, categories: ages, labels: { formatter: (v) => `${Math.abs(v)}%`, style: { colors: lc.value, fontSize: '10px' } } },
  plotOptions: { bar: { horizontal: true, barHeight: '80%', borderRadius: 0 } },
  legend: { show: true, position: 'bottom', labels: { colors: lc.value } },
  grid: { ...base.value.grid, xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
}))

const reversedOpts = computed(() => ({
  ...base.value,
  colors: ['#f1c40f'],
  xaxis: { ...base.value.xaxis, categories: ['2010','2011','2012','2013','2014','2015','2016','2017'], reversed: true },
  plotOptions: { bar: { borderRadius: 4, horizontal: true } },
  dataLabels: { enabled: true, style: { colors: [isDark.value ? '#e2e8f4' : '#333'], fontSize: '11px' } },
  yaxis: { reversed: true, labels: { style: { colors: lc.value } } },
}))

const dataLabelsOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#e91e63','#00838f','#546e7a','#6d4c41','#2e7d32'],
  xaxis: { ...base.value.xaxis, categories: ['South Korea','Canada','United Kingdom','Netherlands','Italy','France','Japan','United States','China','Germany'] },
  plotOptions: { bar: { borderRadius: 4, horizontal: true, distributed: true, barHeight: '70%', dataLabels: { position: 'bottom' } } },
  dataLabels: {
    enabled: true, textAnchor: 'start',
    style: { colors: ['#fff'], fontSize: '11px', fontWeight: 600 },
    formatter: (v, opt) => opt.w.globals.labels[opt.dataPointIndex] + ':  ' + v,
    offsetX: 0,
  },
  yaxis: { labels: { show: false } },
}))

const patternedOpts = computed(() => ({
  ...base.value,
  colors: ['#5b73e8','#2ecc71','#fd7e14','#e74c3c'],
  chart: { ...base.value.chart, stacked: true },
  fill: { type: 'pattern', pattern: { style: ['verticalLines','squares','horizontalLines','circles'], width: 6, height: 6, strokeWidth: 2 } },
  xaxis: { ...base.value.xaxis, categories: cats7 },
  plotOptions: { bar: { borderRadius: 0, horizontal: true } },
  legend: { show: true, position: 'right', labels: { colors: lc.value } },
}))

const snip = {
  basic: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 340, toolbar: { show: false } },
  series: [{ name: 'Employees', data: [812,940,670,1100,750,890,1025,610,980,1200,560,870] }],
  xaxis: { categories: ['Abbott','Beaufort','Canberra','Dawson','Edinburgh','Fairhaven','Glasgow','Harwell','Inverness','Jarrow','Kingston','Lancaster'] },
  colors: ['#5b73e8'],
  plotOptions: { bar: { borderRadius: 4, horizontal: true, barHeight: '55%' } },
  dataLabels: { enabled: true, style: { colors: ['#fff'], fontSize: '11px' } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  grouped: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 340, toolbar: { show: false } },
  series: [
    { name: 'Series 1', data: [44,55,41,64,22,43,21] },
    { name: 'Series 2', data: [53,32,33,52,13,44,32] }
  ],
  xaxis: { categories: ['2015','2016','2017','2018','2019','2020','2021'] },
  colors: ['#5b73e8','#2ecc71'],
  plotOptions: { bar: { borderRadius: 3, horizontal: true, barHeight: '70%' } },
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
  chart: { type: 'bar', height: 360, stacked: true, toolbar: { show: false } },
  series: [
    { name: 'Marine Sprite', data: [44,55,41,37,22,43,21] },
    { name: 'Striking Calf', data: [53,32,33,52,13,44,32] },
    { name: 'Tank Picture',  data: [12,17,11,9,15,11,20] },
    { name: 'Bucket Slope',  data: [9,7,5,8,6,9,4] },
    { name: 'Reborn Kid',    data: [25,12,19,32,25,24,10] }
  ],
  xaxis: { categories: ['2015','2016','2017','2018','2019','2020','2021'] },
  colors: ['#5b73e8','#2ecc71','#fd7e14','#e74c3c','#9b59b6'],
  plotOptions: { bar: { borderRadius: 0, horizontal: true } },
  dataLabels: { enabled: true, style: { colors: ['#fff'], fontSize: '10px' } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'top' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  stacked100: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 360, stacked: true, stackType: '100%', toolbar: { show: false } },
  series: [
    { name: 'Marine Sprite', data: [44,55,41,37,22,43,21] },
    { name: 'Striking Calf', data: [53,32,33,52,13,44,32] },
    { name: 'Tank Picture',  data: [12,17,11,9,15,11,20] },
    { name: 'Bucket Slope',  data: [9,7,5,8,6,9,4] },
    { name: 'Reborn Kid',    data: [25,12,19,32,25,24,10] }
  ],
  xaxis: { categories: ['2015','2016','2017','2018','2019','2020','2021'] },
  colors: ['#5b73e8','#2ecc71','#fd7e14','#e74c3c','#9b59b6'],
  plotOptions: { bar: { borderRadius: 0, horizontal: true } },
  dataLabels: { enabled: true, formatter: function(v) { return v.toFixed(0) + '%'; }, style: { colors: ['#fff'], fontSize: '10px' } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'top' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  negative: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 440, toolbar: { show: false } },
  series: [
    { name: 'Males',   data: [-12.2,-9.3,-7.6,-6.8,-5.5,-4.9,-4.3,-3.8,-3.0,-2.2,-1.5,-0.9,-0.5,-0.2,0.1,0.5,0.9,1.3,2.0,2.8] },
    { name: 'Females', data: [10.1,8.7,7.2,6.1,5.3,4.6,4.0,3.5,2.8,2.1,1.4,0.8,0.4,0.1,-0.2,-0.6,-1.0,-1.5,-2.1,-2.9] }
  ],
  xaxis: {
    categories: ['85+','80-84','75-79','70-74','65-69','60-64','55-59','50-54','45-49','40-44','35-39','30-34','25-29','20-24','15-19','10-14','5-9','0-4'].reverse(),
    labels: { formatter: function(v) { return Math.abs(v) + '%'; } }
  },
  colors: ['#5b73e8','#2ecc71'],
  plotOptions: { bar: { horizontal: true, barHeight: '80%', borderRadius: 0 } },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4, xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
  legend: { show: true, position: 'bottom' },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  reversed: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 340, toolbar: { show: false } },
  series: [{ name: 'Net Profit', data: [400,430,448,470,540,580,690,1100] }],
  xaxis: { categories: ['2010','2011','2012','2013','2014','2015','2016','2017'], reversed: true },
  yaxis: { reversed: true },
  colors: ['#f1c40f'],
  plotOptions: { bar: { borderRadius: 4, horizontal: true } },
  dataLabels: { enabled: true, style: { fontSize: '11px' } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  datalabels: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 400, toolbar: { show: false } },
  series: [
    { name: 'South Korea', data: [400] }, { name: 'Canada', data: [430] },
    { name: 'United Kingdom', data: [448] }, { name: 'Netherlands', data: [470] },
    { name: 'Italy', data: [540] }, { name: 'France', data: [580] },
    { name: 'Japan', data: [690] }, { name: 'United States', data: [1100] },
    { name: 'China', data: [1200] }, { name: 'Germany', data: [1380] }
  ],
  xaxis: { categories: ['South Korea','Canada','United Kingdom','Netherlands','Italy','France','Japan','United States','China','Germany'] },
  colors: ['#5b73e8','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#e91e63','#00838f','#546e7a','#6d4c41','#2e7d32'],
  plotOptions: { bar: { borderRadius: 4, horizontal: true, distributed: true, barHeight: '70%', dataLabels: { position: 'bottom' } } },
  dataLabels: {
    enabled: true, textAnchor: 'start',
    style: { colors: ['#fff'], fontSize: '11px', fontWeight: 600 },
    formatter: function(v, opt) { return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + v; },
    offsetX: 0
  },
  yaxis: { labels: { show: false } },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: false },
  tooltip: { theme: 'light' }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
<\/script>`,

  patterned: `<!-- Include ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>
<div id="chart"></div>
<script>
var options = {
  chart: { type: 'bar', height: 360, stacked: true, toolbar: { show: false } },
  series: [
    { name: 'Marine Sprite', data: [44,55,41,37,22,43,21] },
    { name: 'Striking Calf', data: [53,32,33,52,13,44,32] },
    { name: 'Tank Picture',  data: [12,17,11,9,15,11,20] },
    { name: 'Bucket Slope',  data: [9,7,5,8,6,9,4] }
  ],
  xaxis: { categories: ['2015','2016','2017','2018','2019','2020','2021'] },
  colors: ['#5b73e8','#2ecc71','#fd7e14','#e74c3c'],
  fill: { type: 'pattern', pattern: { style: ['verticalLines','squares','horizontalLines','circles'], width: 6, height: 6, strokeWidth: 2 } },
  plotOptions: { bar: { borderRadius: 0, horizontal: true } },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
  legend: { show: true, position: 'right' },
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
