<template>
  <div class="layout-page">
    <div class="layout-page__header">
      <h4 class="layout-page__title">Light Mode</h4>
      <nav class="layout-page__breadcrumb">
        <span>Layouts</span><span class="sep">›</span><span class="active">Light Mode</span>
      </nav>
    </div>

    <div class="layout-info-card">
      <div class="layout-info-card__icon" style="background:linear-gradient(135deg,#f1c40f,#f39c12)">
        <i class="bx bx-sun"></i>
      </div>
      <div class="layout-info-card__body">
        <h5>Light Mode Layout <span class="hot-badge">Hot</span></h5>
        <p>Full light theme — white sidebar, light topbar, and bright content area. Perfect for daytime use and a clean professional look.</p>
        <button class="layout-btn" :class="{ applied }" @click="apply">
          <i :class="applied ? 'bx bx-check' : 'bx bx-sun'"></i>
          {{ applied ? 'Applied!' : 'Apply Light Mode' }}
        </button>
      </div>
    </div>

    <div class="layout-preview">
      <div class="preview-sidebar preview-sidebar--light">
        <div class="preview-logo"></div>
        <div v-for="i in 7" :key="i" class="preview-nav-item" :class="{ active: i === 1 }"></div>
      </div>
      <div class="preview-content preview-content--light">
        <div class="preview-topbar preview-topbar--light"></div>
        <div class="preview-body preview-body--light">
          <div v-for="i in 4" :key="i" class="preview-card preview-card--light"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { applyLayoutSettings } from "../../composables/useLayoutSwitch.js";
const applied = ref(false);
function apply() {
  applyLayoutSettings({ colorScheme: "light", menuColor: "light", topbarColor: "light" });
  applied.value = true;
  setTimeout(() => { applied.value = false; }, 2000);
}
</script>

<style scoped>
.layout-page { display: flex; flex-direction: column; gap: 20px; }
.layout-page__header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
.layout-page__title  { font-size: 18px; font-weight: 700; color: var(--text-primary); margin: 0; }
.layout-page__breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-muted); }
.layout-page__breadcrumb .sep { opacity: 0.5; }
.layout-page__breadcrumb .active { color: var(--accent); font-weight: 500; }
.layout-info-card { display: flex; align-items: flex-start; gap: 16px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 24px; box-shadow: var(--card-shadow); }
.layout-info-card__icon { width: 52px; height: 52px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #fff; flex-shrink: 0; }
.layout-info-card__body h5 { font-size: 16px; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; display: flex; align-items: center; gap: 8px; }
.hot-badge { display: inline-block; padding: 2px 8px; background: #e74c3c; color: #fff; font-size: 10px; font-weight: 700; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
.layout-info-card__body p  { font-size: 13.5px; color: var(--text-muted); margin: 0 0 14px; }
.layout-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 20px; background: #f1c40f; color: #fff; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.layout-btn:hover { opacity: 0.88; }
.layout-btn.applied { background: #2ecc71; }
.layout-btn i { font-size: 15px; }
.layout-preview { display: flex; border-radius: 10px; overflow: hidden; border: 1px solid var(--card-border); box-shadow: var(--card-shadow); height: 240px; }
.preview-sidebar { width: 64px; display: flex; flex-direction: column; gap: 7px; padding: 14px 10px; flex-shrink: 0; }
.preview-sidebar--light { background: #ffffff; border-right: 1px solid #e8ecf1; }
.preview-logo { height: 22px; background: rgba(49,58,70,0.08); border-radius: 4px; margin-bottom: 10px; }
.preview-nav-item { height: 9px; background: rgba(49,58,70,0.06); border-radius: 3px; }
.preview-nav-item.active { background: #fd7e14; }
.preview-content--light { flex: 1; display: flex; flex-direction: column; background: #f4f6fb; }
.preview-topbar--light { height: 38px; background: #ffffff; border-bottom: 1px solid #eef2f7; }
.preview-body--light { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 12px; }
.preview-card--light { background: #ffffff; border-radius: 6px; border: 1px solid #eef2f7; }
</style>
