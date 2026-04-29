<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Boxicons</h4>
      <p class="page-subtitle">Premium web friendly icons — search and copy any icon class instantly.</p>
    </div>

    <div class="demo-card">
      <div class="d-flex align-items-center gap-3 flex-wrap mb-4">
        <input v-model="search" type="text" class="form-control form-control-sm" style="max-width:260px" placeholder="Search icons..." />
        <div class="d-flex gap-2">
          <button v-for="cat in categories" :key="cat" class="btn btn-sm" :class="activeCategory===cat ? 'btn-primary' : 'btn-outline-secondary'" @click="activeCategory=cat">{{ cat }}</button>
        </div>
        <span class="text-muted ms-auto" style="font-size:0.8rem;">{{ filtered.length }} icons</span>
      </div>

      <div class="icon-grid">
        <div v-for="icon in filtered" :key="icon" class="icon-item" @click="copyIcon(icon)" :title="icon">
          <i :class="[icon, 'icon-item__glyph']"></i>
          <span class="icon-item__name">{{ icon.replace(/^bx[sl]? /,'') }}</span>
        </div>
      </div>

      <transition name="fade">
        <div v-if="copied" class="copy-toast">✓ Copied: {{ copied }}</div>
      </transition>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const search = ref('')
const activeCategory = ref('All')
const copied = ref('')
const categories = ['All', 'Regular', 'Solid', 'Logos']

const icons = {
  Regular: ['bx bx-home','bx bx-user','bx bx-cog','bx bx-bell','bx bx-search','bx bx-heart','bx bx-star','bx bx-envelope','bx bx-phone','bx bx-camera','bx bx-image','bx bx-video','bx bx-music','bx bx-file','bx bx-folder','bx bx-cloud','bx bx-download','bx bx-upload','bx bx-trash','bx bx-edit','bx bx-copy','bx bx-paste','bx bx-cut','bx bx-undo','bx bx-redo','bx bx-zoom-in','bx bx-zoom-out','bx bx-fullscreen','bx bx-exit-fullscreen','bx bx-lock','bx bx-lock-open','bx bx-key','bx bx-shield','bx bx-check','bx bx-x','bx bx-plus','bx bx-minus','bx bx-chevron-up','bx bx-chevron-down','bx bx-chevron-left','bx bx-chevron-right','bx bx-arrow-back','bx bx-arrow-forward','bx bx-menu','bx bx-grid-alt','bx bx-list-ul','bx bx-calendar','bx bx-time','bx bx-map','bx bx-location-plus','bx bx-navigation','bx bx-link','bx bx-share','bx bx-bookmark','bx bx-flag','bx bx-tag','bx bx-purchase-tag','bx bx-cart','bx bx-credit-card','bx bx-dollar','bx bx-euro','bx bx-bitcoin','bx bx-bar-chart','bx bx-line-chart','bx bx-pie-chart','bx bx-trending-up','bx bx-trending-down','bx bx-stats','bx bx-data','bx bx-table','bx bx-spreadsheet','bx bx-code','bx bx-code-block','bx bx-terminal','bx bx-bug','bx bx-git-branch','bx bx-git-commit','bx bx-git-merge','bx bx-git-pull-request','bx bx-package','bx bx-server','bx bx-chip','bx bx-devices','bx bx-desktop','bx bx-laptop','bx bx-mobile','bx bx-tablet','bx bx-printer','bx bx-headphone','bx bx-microphone','bx bx-wifi','bx bx-bluetooth','bx bx-usb','bx bx-battery','bx bx-power-off'],
  Solid: ['bx bxs-home','bx bxs-user','bx bxs-cog','bx bxs-bell','bx bxs-heart','bx bxs-star','bx bxs-envelope','bx bxs-phone','bx bxs-camera','bx bxs-image','bx bxs-video','bx bxs-music','bx bxs-file','bx bxs-folder','bx bxs-cloud','bx bxs-download','bx bxs-trash','bx bxs-edit','bx bxs-lock','bx bxs-key','bx bxs-shield','bx bxs-check-circle','bx bxs-x-circle','bx bxs-plus-circle','bx bxs-minus-circle','bx bxs-bookmark','bx bxs-flag','bx bxs-tag','bx bxs-cart','bx bxs-credit-card','bx bxs-dollar-circle','bx bxs-bar-chart-alt-2','bx bxs-pie-chart-alt','bx bxs-data','bx bxs-server','bx bxs-chip','bx bxs-devices','bx bxs-desktop','bx bxs-laptop','bx bxs-mobile','bx bxs-printer','bx bxs-headphone','bx bxs-microphone','bx bxs-battery','bx bxs-map','bx bxs-navigation','bx bxs-package','bx bxs-bug','bx bxs-terminal'],
  Logos: ['bx bxl-github','bx bxl-gitlab','bx bxl-bitbucket','bx bxl-google','bx bxl-facebook','bx bxl-twitter','bx bxl-instagram','bx bxl-linkedin','bx bxl-youtube','bx bxl-twitch','bx bxl-discord','bx bxl-slack','bx bxl-microsoft','bx bxl-apple','bx bxl-android','bx bxl-react','bx bxl-vuejs','bx bxl-angular','bx bxl-nodejs','bx bxl-python','bx bxl-javascript','bx bxl-typescript','bx bxl-html5','bx bxl-css3','bx bxl-sass','bx bxl-tailwind-css','bx bxl-bootstrap','bx bxl-docker','bx bxl-kubernetes','bx bxl-aws','bx bxl-google-cloud','bx bxl-firebase','bx bxl-mongodb','bx bxl-postgresql','bx bxl-mysql','bx bxl-redis','bx bxl-figma','bx bxl-sketch','bx bxl-adobe','bx bxl-wordpress','bx bxl-shopify','bx bxl-stripe','bx bxl-paypal','bx bxl-zoom','bx bxl-netflix','bx bxl-spotify','bx bxl-amazon','bx bxl-dropbox','bx bxl-trello'],
}

const allIcons = [...icons.Regular, ...icons.Solid, ...icons.Logos]

const filtered = computed(() => {
  const pool = activeCategory.value === 'All' ? allIcons : icons[activeCategory.value] || allIcons
  const q = search.value.toLowerCase()
  return q ? pool.filter(i => i.toLowerCase().includes(q)) : pool
})

function copyIcon(icon) {
  navigator.clipboard.writeText(`<i class="${icon}"></i>`).catch(() => {})
  copied.value = icon
  setTimeout(() => { copied.value = '' }, 2000)
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.icon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 8px; }
.icon-item { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 12px 6px; border: 1px solid var(--card-border); border-radius: 8px; cursor: pointer; transition: all 0.15s; }
.icon-item:hover { border-color: var(--accent); background: rgba(253,126,20,0.05); color: var(--accent); }
.icon-item__glyph { font-size: 1.4rem; line-height: 1; display: block; color: var(--text-secondary); transition: color 0.15s; }
.icon-item:hover .icon-item__glyph { color: var(--accent); }
.icon-item__name { font-size: 0.65rem; color: var(--text-muted); text-align: center; word-break: break-all; line-height: 1.3; }
.copy-toast { position: fixed; bottom: 24px; right: 24px; background: var(--text-primary); color: var(--text-inverse); padding: 9px 18px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 9999; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .icon-grid { grid-template-columns: repeat(auto-fill, minmax(72px, 1fr)); } }
</style>
