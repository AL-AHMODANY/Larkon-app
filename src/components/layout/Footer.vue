<template>
  <footer class="app-footer">
    <span>{{ new Date().getFullYear() }} &copy; Larkon. Crafted by <a href="https://techzaa.in" target="_blank" rel="noopener">Techzaa</a></span>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 16px 24px;
  font-size: 0.8rem;
  color: var(--text-muted);
  border-top: 1px solid var(--card-border);
  background: var(--card-bg);
  text-align: center;
}
.app-footer a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}
.app-footer a:hover { text-decoration: underline; }
</style>
