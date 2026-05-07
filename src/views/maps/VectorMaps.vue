<template>
  <div class="page-wrapper">
    <CdnSection />
    <div class="page-header">
      <h4 class="page-title">Vector Maps</h4>
      <p class="page-subtitle">Interactive SVG vector maps with hover states and data overlays.</p>
    </div>

    <!-- World Map -->
    <div class="demo-card">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <h6 class="demo-card__title mb-0">World Map — Sessions by Country</h6>
        <div class="d-flex gap-2 align-items-center">
          <span class="legend-item"><span class="legend-dot" style="background:#e8f0fe"></span>Low</span>
          <span class="legend-item"><span class="legend-dot" style="background:#5b73e8"></span>High</span>
        </div>
      </div>
      <div class="world-map-wrap">
        <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" class="world-svg">
          <rect width="1000" height="500" fill="var(--app-bg)" rx="10"/>
          <!-- Simplified continent blobs -->
          <g v-for="region in regions" :key="region.id"
            @mouseenter="hovered = region" @mouseleave="hovered = null"
            style="cursor:pointer">
            <ellipse :cx="region.cx" :cy="region.cy" :rx="region.rx" :ry="region.ry"
              :fill="region.color" :opacity="hovered?.id === region.id ? 1 : 0.85"
              stroke="var(--card-bg)" stroke-width="2"
              style="transition: opacity 0.15s"/>
            <text :x="region.cx" :y="region.cy + 4" text-anchor="middle"
              font-size="11" fill="var(--text-primary)" font-weight="600">{{ region.label }}</text>
          </g>
        </svg>
        <!-- Tooltip -->
        <div v-if="hovered" class="map-tooltip">
          <strong>{{ hovered.label }}</strong>
          <div>Sessions: <span style="color:var(--accent)">{{ hovered.sessions.toLocaleString() }}</span></div>
          <div>Users: <span style="color:var(--accent)">{{ hovered.users.toLocaleString() }}</span></div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar">
          <span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('world')">
            <i class="bi bi-clipboard me-1"></i>{{ copied === 'world' ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="code-body"><code>{{ codeSnippets.world }}</code></pre>
      </div>
    </div>

    <!-- Stats Table -->
    <div class="demo-card">
      <h6 class="demo-card__title">Sessions by Region</h6>
      <div class="table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th>Region</th>
              <th>Sessions</th>
              <th>Users</th>
              <th>Bounce Rate</th>
              <th>Share</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in regions" :key="r.id">
              <td>
                <div class="d-flex align-items-center gap-2">
                  <span class="region-dot" :style="`background:${r.color}`"></span>
                  {{ r.label }}
                </div>
              </td>
              <td>{{ r.sessions.toLocaleString() }}</td>
              <td>{{ r.users.toLocaleString() }}</td>
              <td>{{ r.bounce }}%</td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="mini-bar">
                    <div class="mini-bar__fill" :style="`width:${r.share}%; background:${r.color}`"></div>
                  </div>
                  <span style="font-size:0.78rem;color:var(--text-muted)">{{ r.share }}%</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- US Map Placeholder -->
    <div class="demo-card">
      <h6 class="demo-card__title">US Map — Revenue by State</h6>
      <div class="us-map-wrap">
        <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" class="w-100">
          <rect width="600" height="380" fill="var(--app-bg)" rx="8"/>
          <g v-for="state in usStates" :key="state.id"
            @mouseenter="hoveredState = state" @mouseleave="hoveredState = null"
            style="cursor:pointer">
            <rect :x="state.x" :y="state.y" :width="state.w" :height="state.h"
              :fill="state.color" :opacity="hoveredState?.id === state.id ? 1 : 0.8"
              rx="3" stroke="var(--card-bg)" stroke-width="1.5"
              style="transition: opacity 0.15s"/>
            <text :x="state.x + state.w/2" :y="state.y + state.h/2 + 4"
              text-anchor="middle" font-size="9" fill="var(--text-primary)" font-weight="600">{{ state.abbr }}</text>
          </g>
          <text x="300" y="360" text-anchor="middle" font-size="11" fill="var(--text-muted)">Hover over a state to see details</text>
        </svg>
        <div v-if="hoveredState" class="map-tooltip">
          <strong>{{ hoveredState.name }}</strong>
          <div>Revenue: <span style="color:var(--accent)">${{ hoveredState.revenue }}K</span></div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar">
          <span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('us')">
            <i class="bi bi-clipboard me-1"></i>{{ copied === 'us' ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="code-body"><code>{{ codeSnippets.us }}</code></pre>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import { ref } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const hovered = ref(null)
const hoveredState = ref(null)
const copied = ref('')

function copy(key) {
  navigator.clipboard.writeText(codeSnippets[key]).catch(() => {})
  copied.value = key
  setTimeout(() => { copied.value = '' }, 2000)
}

const codeSnippets = {
  world: `<!-- World Map using SVG or a library like jsvectormap -->
<div id="world-map" style="height: 400px;"></div>

<script>
// Using jsvectormap
var map = new jsVectorMap({
  selector: '#world-map',
  map: 'world',
  zoomButtons: true,
  regionStyle: {
    initial: { fill: '#e8f0fe' },
    hover:   { fill: '#5b73e8' }
  },
  onRegionTooltipShow: function(event, tooltip, code) {
    tooltip.text(
      '<b>' + tooltip.text() + '</b><br>' +
      'Sessions: ' + (data[code] || 0)
    );
  }
});
<\/script>`,
  us: `<!-- US Map using SVG or jsvectormap -->
<div id="us-map" style="height: 380px;"></div>

<script>
var usMap = new jsVectorMap({
  selector: '#us-map',
  map: 'us_aea_en',
  zoomButtons: true,
  regionStyle: {
    initial: { fill: '#e8f0fe' },
    hover:   { fill: '#fd7e14' }
  },
  series: {
    regions: [{
      values: revenueByState,
      scale: ['#e8f0fe', '#5b73e8'],
      normalizeFunction: 'polynomial'
    }]
  }
});
<\/script>`,
}

const regions = [
  { id:'na',  label:'North America', cx:180, cy:160, rx:130, ry:90,  color:'#5b73e8', sessions:42500, users:31200, bounce:38, share:32 },
  { id:'eu',  label:'Europe',        cx:480, cy:140, rx:110, ry:75,  color:'#fd7e14', sessions:38200, users:28900, bounce:42, share:28 },
  { id:'as',  label:'Asia',          cx:700, cy:160, rx:140, ry:95,  color:'#2ecc71', sessions:51000, users:39400, bounce:35, share:38 },
  { id:'sa',  label:'South America', cx:250, cy:310, rx:80,  ry:90,  color:'#f1c40f', sessions:12400, users:9800,  bounce:51, share:9  },
  { id:'af',  label:'Africa',        cx:490, cy:290, rx:90,  ry:95,  color:'#e74c3c', sessions:8600,  users:6700,  bounce:55, share:6  },
  { id:'oc',  label:'Oceania',       cx:780, cy:330, rx:65,  ry:55,  color:'#9b59b6', sessions:5200,  users:4100,  bounce:44, share:4  },
]

const COLORS = ['#5b73e8','#fd7e14','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#1abc9c','#e67e22','#3498db','#e91e63']
const stateData = [
  {id:'CA',abbr:'CA',name:'California',x:30,y:160,w:60,h:80,revenue:892},
  {id:'TX',abbr:'TX',name:'Texas',x:160,y:220,w:70,h:70,revenue:654},
  {id:'NY',abbr:'NY',name:'New York',x:380,y:100,w:55,h:55,revenue:721},
  {id:'FL',abbr:'FL',name:'Florida',x:310,y:260,w:55,h:60,revenue:498},
  {id:'IL',abbr:'IL',name:'Illinois',x:270,y:150,w:45,h:55,revenue:387},
  {id:'PA',abbr:'PA',name:'Pennsylvania',x:340,y:120,w:50,h:45,revenue:342},
  {id:'OH',abbr:'OH',name:'Ohio',x:300,y:140,w:45,h:45,revenue:298},
  {id:'GA',abbr:'GA',name:'Georgia',x:310,y:210,w:45,h:50,revenue:276},
  {id:'NC',abbr:'NC',name:'North Carolina',x:340,y:190,w:55,h:40,revenue:254},
  {id:'MI',abbr:'MI',name:'Michigan',x:270,y:110,w:50,h:50,revenue:231},
  {id:'WA',abbr:'WA',name:'Washington',x:60,y:80,w:55,h:50,revenue:412},
  {id:'AZ',abbr:'AZ',name:'Arizona',x:90,y:200,w:55,h:60,revenue:198},
  {id:'CO',abbr:'CO',name:'Colorado',x:155,y:170,w:50,h:50,revenue:187},
  {id:'TN',abbr:'TN',name:'Tennessee',x:280,y:195,w:55,h:35,revenue:176},
  {id:'IN',abbr:'IN',name:'Indiana',x:270,y:155,w:40,h:45,revenue:165},
]
const usStates = stateData.map((s,i) => ({ ...s, color: COLORS[i % COLORS.length] }))
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.demo-card__title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 14px; }
.world-map-wrap, .us-map-wrap { position: relative; }
.world-svg { display: block; width: 100%; height: auto; }
.map-tooltip { position: absolute; top: 12px; left: 12px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 10px 14px; font-size: 0.8rem; color: var(--text-primary); box-shadow: var(--card-shadow); pointer-events: none; min-width: 140px; }
.legend-item { display: flex; align-items: center; gap: 5px; font-size: 0.78rem; color: var(--text-muted); }
.legend-dot { width: 12px; height: 12px; border-radius: 3px; display: inline-block; }
.region-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; flex-shrink: 0; }
.mini-bar { height: 6px; background: var(--app-bg); border-radius: 99px; width: 80px; }
.mini-bar__fill { height: 100%; border-radius: 99px; }

/* AL-AHMODANY code block */
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 220px; font-family: 'Courier New', monospace; }

@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
