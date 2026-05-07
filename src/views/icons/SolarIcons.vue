<template>
  <div class="page-wrapper">
    <CdnSection />
    <div class="page-header">
      <h4 class="page-title">Solar Icons</h4>
      <p class="page-subtitle">800+ SVG icons from the Solar icon set — rendered via Bootstrap Icons as a stand-in.</p>
    </div>

    <div class="demo-card">
      <div class="d-flex align-items-center gap-3 flex-wrap mb-4">
        <input v-model="search" type="text" class="form-control form-control-sm" style="max-width:260px" placeholder="Search icons..." />
        <div class="d-flex gap-2 flex-wrap">
          <button v-for="cat in categories" :key="cat.key" class="btn btn-sm" :class="activeCategory===cat.key ? 'btn-primary' : 'btn-outline-secondary'" @click="activeCategory=cat.key">{{ cat.label }}</button>
        </div>
        <span class="text-muted ms-auto" style="font-size:0.8rem;">{{ filtered.length }} icons</span>
      </div>

      <div class="icon-grid">
        <div v-for="icon in filtered" :key="icon.cls" class="icon-item" @click="copyIcon(icon.cls)" :title="icon.name">
          <i :class="['bi', icon.cls, 'icon-item__glyph']"></i>
          <span class="icon-item__name">{{ icon.name }}</span>
        </div>
      </div>

      <transition name="fade">
        <div v-if="copied" class="copy-toast">✓ Copied!</div>
      </transition>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import { ref, computed } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const search = ref('')
const activeCategory = ref('all')
const copied = ref(false)

const categories = [
  { key: 'all', label: 'All' },
  { key: 'interface', label: 'Interface' },
  { key: 'media', label: 'Media' },
  { key: 'communication', label: 'Communication' },
  { key: 'finance', label: 'Finance' },
  { key: 'devices', label: 'Devices' },
]

const iconSets = {
  interface: [
    { cls:'bi-house', name:'house' }, { cls:'bi-person', name:'person' }, { cls:'bi-gear', name:'gear' },
    { cls:'bi-bell', name:'bell' }, { cls:'bi-search', name:'search' }, { cls:'bi-heart', name:'heart' },
    { cls:'bi-star', name:'star' }, { cls:'bi-bookmark', name:'bookmark' }, { cls:'bi-flag', name:'flag' },
    { cls:'bi-tag', name:'tag' }, { cls:'bi-shield', name:'shield' }, { cls:'bi-lock', name:'lock' },
    { cls:'bi-unlock', name:'unlock' }, { cls:'bi-eye', name:'eye' }, { cls:'bi-eye-slash', name:'eye-slash' },
    { cls:'bi-check-circle', name:'check-circle' }, { cls:'bi-x-circle', name:'x-circle' }, { cls:'bi-info-circle', name:'info-circle' },
    { cls:'bi-exclamation-circle', name:'exclamation-circle' }, { cls:'bi-question-circle', name:'question-circle' },
    { cls:'bi-plus-circle', name:'plus-circle' }, { cls:'bi-dash-circle', name:'dash-circle' },
    { cls:'bi-arrow-up', name:'arrow-up' }, { cls:'bi-arrow-down', name:'arrow-down' },
    { cls:'bi-arrow-left', name:'arrow-left' }, { cls:'bi-arrow-right', name:'arrow-right' },
    { cls:'bi-chevron-up', name:'chevron-up' }, { cls:'bi-chevron-down', name:'chevron-down' },
    { cls:'bi-list', name:'list' }, { cls:'bi-grid', name:'grid' }, { cls:'bi-grid-3x3', name:'grid-3x3' },
    { cls:'bi-filter', name:'filter' }, { cls:'bi-sort-down', name:'sort-down' }, { cls:'bi-sort-up', name:'sort-up' },
    { cls:'bi-funnel', name:'funnel' }, { cls:'bi-sliders', name:'sliders' }, { cls:'bi-toggles', name:'toggles' },
    { cls:'bi-trash', name:'trash' }, { cls:'bi-pencil', name:'pencil' }, { cls:'bi-clipboard', name:'clipboard' },
    { cls:'bi-scissors', name:'scissors' }, { cls:'bi-files', name:'files' }, { cls:'bi-folder', name:'folder' },
  ],
  media: [
    { cls:'bi-camera', name:'camera' }, { cls:'bi-image', name:'image' }, { cls:'bi-images', name:'images' },
    { cls:'bi-film', name:'film' }, { cls:'bi-play-circle', name:'play-circle' }, { cls:'bi-pause-circle', name:'pause-circle' },
    { cls:'bi-stop-circle', name:'stop-circle' }, { cls:'bi-skip-forward', name:'skip-forward' }, { cls:'bi-skip-backward', name:'skip-backward' },
    { cls:'bi-music-note', name:'music-note' }, { cls:'bi-headphones', name:'headphones' }, { cls:'bi-mic', name:'mic' },
    { cls:'bi-volume-up', name:'volume-up' }, { cls:'bi-volume-mute', name:'volume-mute' }, { cls:'bi-broadcast', name:'broadcast' },
    { cls:'bi-collection-play', name:'collection-play' }, { cls:'bi-youtube', name:'youtube' }, { cls:'bi-spotify', name:'spotify' },
    { cls:'bi-record-circle', name:'record-circle' }, { cls:'bi-camera-video', name:'camera-video' },
  ],
  communication: [
    { cls:'bi-envelope', name:'envelope' }, { cls:'bi-envelope-open', name:'envelope-open' }, { cls:'bi-chat', name:'chat' },
    { cls:'bi-chat-dots', name:'chat-dots' }, { cls:'bi-chat-square', name:'chat-square' }, { cls:'bi-telephone', name:'telephone' },
    { cls:'bi-telephone-forward', name:'telephone-forward' }, { cls:'bi-send', name:'send' }, { cls:'bi-reply', name:'reply' },
    { cls:'bi-share', name:'share' }, { cls:'bi-megaphone', name:'megaphone' }, { cls:'bi-rss', name:'rss' },
    { cls:'bi-at', name:'at' }, { cls:'bi-hash', name:'hash' }, { cls:'bi-link', name:'link' },
    { cls:'bi-globe', name:'globe' }, { cls:'bi-wifi', name:'wifi' }, { cls:'bi-bluetooth', name:'bluetooth' },
  ],
  finance: [
    { cls:'bi-currency-dollar', name:'dollar' }, { cls:'bi-currency-euro', name:'euro' }, { cls:'bi-currency-bitcoin', name:'bitcoin' },
    { cls:'bi-credit-card', name:'credit-card' }, { cls:'bi-wallet', name:'wallet' }, { cls:'bi-wallet2', name:'wallet2' },
    { cls:'bi-cash', name:'cash' }, { cls:'bi-cash-stack', name:'cash-stack' }, { cls:'bi-bank', name:'bank' },
    { cls:'bi-graph-up', name:'graph-up' }, { cls:'bi-graph-down', name:'graph-down' }, { cls:'bi-bar-chart', name:'bar-chart' },
    { cls:'bi-pie-chart', name:'pie-chart' }, { cls:'bi-receipt', name:'receipt' }, { cls:'bi-bag', name:'bag' },
    { cls:'bi-cart', name:'cart' }, { cls:'bi-shop', name:'shop' }, { cls:'bi-box', name:'box' },
    { cls:'bi-gift', name:'gift' }, { cls:'bi-percent', name:'percent' },
  ],
  devices: [
    { cls:'bi-laptop', name:'laptop' }, { cls:'bi-pc-display', name:'pc-display' }, { cls:'bi-phone', name:'phone' },
    { cls:'bi-tablet', name:'tablet' }, { cls:'bi-watch', name:'watch' }, { cls:'bi-printer', name:'printer' },
    { cls:'bi-keyboard', name:'keyboard' }, { cls:'bi-mouse', name:'mouse' }, { cls:'bi-display', name:'display' },
    { cls:'bi-cpu', name:'cpu' }, { cls:'bi-memory', name:'memory' }, { cls:'bi-hdd', name:'hdd' },
    { cls:'bi-usb-drive', name:'usb-drive' }, { cls:'bi-sd-card', name:'sd-card' }, { cls:'bi-battery', name:'battery' },
    { cls:'bi-battery-full', name:'battery-full' }, { cls:'bi-battery-half', name:'battery-half' }, { cls:'bi-plug', name:'plug' },
    { cls:'bi-router', name:'router' }, { cls:'bi-server', name:'server' },
  ],
}

const allIcons = Object.values(iconSets).flat()

const filtered = computed(() => {
  const pool = activeCategory.value === 'all' ? allIcons : (iconSets[activeCategory.value] || allIcons)
  const q = search.value.toLowerCase()
  return q ? pool.filter(i => i.name.includes(q) || i.cls.includes(q)) : pool
})

function copyIcon(cls) {
  navigator.clipboard.writeText(`<i class="bi ${cls}"></i>`).catch(() => {})
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.icon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 10px; }
.icon-item { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 18px 8px 14px; border: 1px solid var(--card-border); border-radius: 10px; cursor: pointer; transition: all 0.15s; }
.icon-item:hover { border-color: var(--accent); background: rgba(253,126,20,0.05); }
.icon-item__glyph { font-size: 2rem; line-height: 1; display: block; color: var(--text-secondary); transition: color 0.15s; }
.icon-item:hover .icon-item__glyph { color: var(--accent); }
.icon-item__name { font-size: 0.68rem; color: var(--text-muted); text-align: center; word-break: break-all; line-height: 1.3; }
.copy-toast { position: fixed; bottom: 24px; right: 24px; background: var(--text-primary); color: var(--text-inverse); padding: 9px 18px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 9999; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .icon-grid { grid-template-columns: repeat(auto-fill, minmax(88px, 1fr)); } }
</style>
