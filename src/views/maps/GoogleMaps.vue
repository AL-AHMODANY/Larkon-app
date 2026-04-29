<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Google Maps</h4>
      <p class="page-subtitle">Embedded Google Maps with various display modes and configurations.</p>
    </div>

    <div class="alert-info-box mb-4">
      <i class="bi bi-info-circle-fill me-2"></i>
      Replace <code>YOUR_API_KEY</code> in the embed URLs with a valid Google Maps API key for production use.
    </div>

    <div v-for="map in maps" :key="map.id" class="demo-card">
      <h6 class="demo-title">{{ map.title }}</h6>
      <p class="demo-desc">{{ map.desc }}</p>
      <div class="demo-box p-0">
        <div class="map-container">
          <iframe :src="map.src" width="100%" height="380" style="border:0;display:block"
            allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" :title="map.title" />
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy(map.id, map.code)"><i class="bi bi-clipboard me-1"></i>{{ copied===map.id?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ map.code }}</code></pre>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const copied = ref('')
function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

const maps = [
  {
    id: 'basic',
    title: 'Basic Map — New York City',
    desc: 'A standard embedded Google Map centered on New York City.',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s',
    code: `<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
  width="100%"
  height="380"
  style="border:0"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`,
  },
  {
    id: 'satellite',
    title: 'Satellite View — London',
    desc: 'Google Maps in satellite view mode showing London from above.',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83989591!2d-0.24168120642536!3d51.52877184100512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e1!3m2!1sen!2s!4v1699000000001!5m2!1sen!2s',
    code: `<!-- Satellite view: add &maptype=satellite or use 5e1 in the embed URL -->
<iframe
  src="https://www.google.com/maps/embed?pb=...!5e1!..."
  width="100%"
  height="380"
  style="border:0"
  allowfullscreen
  loading="lazy">
</iframe>`,
  },
  {
    id: 'paris',
    title: 'Map with Marker — Paris',
    desc: 'Embedded map centered on the Eiffel Tower with a location marker.',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156740873!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2s!4v1699000000002!5m2!1sen!2s',
    code: `<!-- Search for a specific place — Google Maps generates the embed URL -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!...!2sEiffel%20Tower!..."
  width="100%"
  height="380"
  style="border:0"
  allowfullscreen
  loading="lazy">
</iframe>

<!-- Vue component wrapper -->
<template>
  <div class="map-wrapper">
    <iframe
      :src="mapSrc"
      width="100%"
      height="380"
      style="border:0"
      allowfullscreen
      loading="lazy"
    />
  </div>
</template>

<script setup>
const mapSrc = 'https://www.google.com/maps/embed?pb=...'
<\/script>`,
  },
]
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.alert-info-box {
  background: rgba(91,115,232,0.1); border: 1px solid rgba(91,115,232,0.25);
  border-radius: 8px; padding: 12px 16px; font-size: 0.83rem; color: var(--text-primary);
  display: flex; align-items: center;
}
.alert-info-box code { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.map-container { border-radius: 8px; overflow: hidden; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 220px; font-family: 'Courier New', monospace; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
