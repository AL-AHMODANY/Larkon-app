<template>
  <div class="layout-page">
    <div class="layout-page__header">
      <h4 class="layout-page__title">Hidden Sidenav</h4>
      <nav class="layout-page__breadcrumb">
        <span>Layouts</span><span class="sep">›</span><span class="active">Hidden Sidenav</span>
      </nav>
    </div>

    <div class="layout-info-card">
      <div class="layout-info-card__icon" style="background:linear-gradient(135deg,#e74c3c,#c0392b)">
        <i class="bx bx-hide"></i>
      </div>
      <div class="layout-info-card__body">
        <h5>Hidden Sidebar Layout</h5>
        <p>Completely hides the sidebar for a full-width content experience. Toggle it back anytime using the hamburger menu in the topbar.</p>
        <button class="layout-btn" :class="{ applied }" @click="apply">
          <i :class="applied ? 'bx bx-check' : 'bx bx-palette'"></i>
          {{ applied ? 'Applied!' : 'Apply Hidden Sidenav' }}
        </button>
      </div>
    </div>

    <div class="layout-preview">
      <div class="preview-content preview-content--full">
        <div class="preview-topbar">
          <div class="preview-hamburger"></div>
        </div>
        <div class="preview-body preview-body--wide">
          <div v-for="i in 6" :key="i" class="preview-card"></div>
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
  applyLayoutSettings({ sidebarSize: "hidden" });
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
.layout-info-card__body h5 { font-size: 16px; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.layout-info-card__body p  { font-size: 13.5px; color: var(--text-muted); margin: 0 0 14px; }
.layout-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 20px; background: #e74c3c; color: #fff; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.layout-btn:hover { opacity: 0.88; }
.layout-btn.applied { background: #2ecc71; }
.layout-btn i { font-size: 15px; }
.layout-preview { display: flex; border-radius: 10px; overflow: hidden; border: 1px solid var(--card-border); box-shadow: var(--card-shadow); height: 240px; }
.preview-content--full { flex: 1; display: flex; flex-direction: column; background: var(--bg-body); }
.preview-topbar { height: 38px; background: var(--card-bg); border-bottom: 1px solid var(--card-border); display: flex; align-items: center; padding: 0 14px; }
.preview-hamburger { width: 18px; height: 12px; display: flex; flex-direction: column; justify-content: space-between; }
.preview-hamburger::before,
.preview-hamburger::after { content: ""; display: block; height: 2px; background: var(--text-muted); border-radius: 2px; }
.preview-body--wide { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 12px; }
.preview-card { background: var(--card-bg); border-radius: 6px; border: 1px solid var(--card-border); }
</style>
