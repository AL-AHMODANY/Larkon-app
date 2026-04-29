<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Disable Item</h4>
      <p class="page-subtitle">Example of a disabled menu item page.</p>
    </div>
    <div class="demo-card">
      <div class="empty-state">
        <div class="empty-state__icon"><i class="bi bi-slash-circle"></i></div>
        <h5 class="empty-state__title">Disabled Item</h5>
        <p class="empty-state__text">This page represents a disabled navigation item. In a real application, disabled items would be inaccessible from the sidebar.</p>
        <router-link to="/dashboard" class="btn btn-primary btn-sm">Back to Dashboard</router-link>
      </div>
    </div>
    <PageFooter />
  </div>
</template>
<script setup>
import PageFooter from '../../components/layout/Footer.vue'
</script>
<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 40px 22px; box-shadow: var(--card-shadow); }
.empty-state { text-align: center; max-width: 400px; margin: 0 auto; }
.empty-state__icon { font-size: 3rem; color: var(--text-muted); margin-bottom: 16px; }
.empty-state__title { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
.empty-state__text { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
