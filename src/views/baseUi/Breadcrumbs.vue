<template>
  <div class="page-content">

    <!-- Page Title -->
    <div class="page-title-box">
      <h4 class="page-title">Breadcrumb</h4>
    </div>

    <div class="row">
      <!-- ── Main Content ── -->
      <div class="col-main">

        <!-- Default Example -->
        <div class="card" id="default">
          <div class="card-body">
            <h5 class="card-title">Default Example</h5>
            <p class="text-muted">
              Use an ordered or unordered list with linked list items to create a minimally styled
              breadcrumb. Use our utilities to add additional styles as desired.
            </p>

            <!-- Breadcrumb 1: Home only -->
            <nav aria-label="breadcrumb" class="mb-3">
              <ol class="breadcrumb mb-0 py-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
              </ol>
            </nav>

            <!-- Breadcrumb 2: Home > Library -->
            <nav aria-label="breadcrumb" class="mb-3">
              <ol class="breadcrumb mb-0 py-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
              </ol>
            </nav>

            <!-- Breadcrumb 3: Home > Library > Data -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 py-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>

            <!-- Code block -->
            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copy('default')">
                  {{ copied === 'default' ? 'Copied!' : 'Copy' }}
                </button>
              </div>
              <pre class="code-pre"><code><span class="c-tag">&lt;nav</span> <span class="c-attr">aria-label</span>=<span class="c-val">"breadcrumb"</span><span class="c-tag">&gt;</span>
    <span class="c-tag">&lt;ol</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb mb-0 py-0"</span><span class="c-tag">&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Home<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="c-tag">&lt;/ol&gt;</span>
<span class="c-tag">&lt;/nav&gt;</span>

<span class="c-tag">&lt;nav</span> <span class="c-attr">aria-label</span>=<span class="c-val">"breadcrumb"</span><span class="c-tag">&gt;</span>
    <span class="c-tag">&lt;ol</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb mb-0 py-0"</span><span class="c-tag">&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Home<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Library<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="c-tag">&lt;/ol&gt;</span>
<span class="c-tag">&lt;/nav&gt;</span>

<span class="c-tag">&lt;nav</span> <span class="c-attr">aria-label</span>=<span class="c-val">"breadcrumb"</span><span class="c-tag">&gt;</span>
    <span class="c-tag">&lt;ol</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb mb-0 py-0"</span><span class="c-tag">&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Home<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Library<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item active"</span> <span class="c-attr">aria-current</span>=<span class="c-val">"page"</span><span class="c-tag">&gt;</span>Data<span class="c-tag">&lt;/li&gt;</span>
    <span class="c-tag">&lt;/ol&gt;</span>
<span class="c-tag">&lt;/nav&gt;</span></code></pre>
            </div>
          </div>
        </div>

        <!-- Dividers Breadcrumb -->
        <div class="card" id="dividers">
          <div class="card-body">
            <h5 class="card-title">Dividers Breadcrumb</h5>
            <p class="text-muted">
              Optionally you can also specify the icon with your breadcrumb item.
            </p>

            <!-- Divider 1: Home only -->
            <nav aria-label="breadcrumb" class="mb-3" style="--bs-breadcrumb-divider: '>';">
              <ol class="breadcrumb breadcrumb-divider mb-0 py-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
              </ol>
            </nav>

            <!-- Divider 2: Home > Library -->
            <nav aria-label="breadcrumb" class="mb-3" style="--bs-breadcrumb-divider: '>';">
              <ol class="breadcrumb breadcrumb-divider mb-0 py-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
              </ol>
            </nav>

            <!-- Divider 3: Home > Library > Data -->
            <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
              <ol class="breadcrumb breadcrumb-divider mb-0 py-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>

            <!-- Code block -->
            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copy('dividers')">
                  {{ copied === 'dividers' ? 'Copied!' : 'Copy' }}
                </button>
              </div>
              <pre class="code-pre"><code><span class="c-tag">&lt;nav</span> <span class="c-attr">style</span>=<span class="c-val">"--bs-breadcrumb-divider: '&gt;';"</span> <span class="c-attr">aria-label</span>=<span class="c-val">"breadcrumb"</span><span class="c-tag">&gt;</span>
    <span class="c-tag">&lt;ol</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb mb-0 py-0"</span><span class="c-tag">&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Home<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="c-tag">&lt;/ol&gt;</span>
<span class="c-tag">&lt;/nav&gt;</span>

<span class="c-tag">&lt;nav</span> <span class="c-attr">style</span>=<span class="c-val">"--bs-breadcrumb-divider: '&gt;';"</span> <span class="c-attr">aria-label</span>=<span class="c-val">"breadcrumb"</span><span class="c-tag">&gt;</span>
    <span class="c-tag">&lt;ol</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb mb-0 py-0"</span><span class="c-tag">&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Home<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Library<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="c-tag">&lt;/ol&gt;</span>
<span class="c-tag">&lt;/nav&gt;</span>

<span class="c-tag">&lt;nav</span> <span class="c-attr">style</span>=<span class="c-val">"--bs-breadcrumb-divider: '&gt;';"</span> <span class="c-attr">aria-label</span>=<span class="c-val">"breadcrumb"</span><span class="c-tag">&gt;</span>
    <span class="c-tag">&lt;ol</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb mb-0 py-0"</span><span class="c-tag">&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Home<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item"</span><span class="c-tag">&gt;</span><span class="c-tag">&lt;a</span> <span class="c-attr">href</span>=<span class="c-val">"javascript:void(0);"</span><span class="c-tag">&gt;</span>Library<span class="c-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="c-tag">&lt;li</span> <span class="c-attr">class</span>=<span class="c-val">"breadcrumb-item active"</span> <span class="c-attr">aria-current</span>=<span class="c-val">"page"</span><span class="c-tag">&gt;</span>Data<span class="c-tag">&lt;/li&gt;</span>
    <span class="c-tag">&lt;/ol&gt;</span>
<span class="c-tag">&lt;/nav&gt;</span></code></pre>
            </div>
          </div>
        </div>

      </div><!-- /col-main -->

      <!-- ── Right sticky nav ── -->
      <div class="col-nav">
        <div class="page-nav-sticky">
          <nav class="page-nav">
            <a
              v-for="link in pageLinks"
              :key="link.id"
              :href="`#${link.id}`"
              class="page-nav-link"
              :class="{ active: activeSection === link.id }"
              @click.prevent="scrollTo(link.id)"
            >{{ link.label }}</a>
          </nav>
        </div>
      </div>

    </div><!-- /row -->
    <PageFooter />
  </div>
</template>

<script setup>
import PageFooter from '../../components/layout/Footer.vue'
import { ref } from 'vue'

const pageLinks = [
  { id: 'default',  label: 'Default Example' },
  { id: 'dividers', label: 'Dividers Breadcrumb' },
]
const activeSection = ref('default')

const scrollTo = (id) => {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const copied = ref(null)
const copy = (key) => {
  const snippets = {
    default:  `<nav aria-label="breadcrumb">\n  <ol class="breadcrumb mb-0 py-0">\n    <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n    <li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n    <li class="breadcrumb-item active" aria-current="page">Data</li>\n  </ol>\n</nav>`,
    dividers: `<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">\n  <ol class="breadcrumb mb-0 py-0">\n    <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n    <li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n    <li class="breadcrumb-item active" aria-current="page">Data</li>\n  </ol>\n</nav>`,
  }
  navigator.clipboard.writeText(snippets[key] || '').then(() => {
    copied.value = key
    setTimeout(() => (copied.value = null), 2000)
  })
}
</script>

<style scoped>
/* ── Layout ── */
.page-content {
  padding: 24px;
}
.page-title-box { margin-bottom: 24px; }
.page-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  align-items: flex-start;
}
.col-main {
  flex: 1 1 0;
  min-width: 0;
  padding: 0 12px;
}
.col-nav {
  flex: 0 0 220px;
  width: 220px;
  padding: 0 12px;
}
@media (max-width: 992px) {
  .col-nav { display: none; }
}

/* ── Card ── */
.card {
  background: #fff;
  border: 1px solid #e9edf2;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.card-body { padding: 24px; }
.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}
.text-muted {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* ── Breadcrumb ── */
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  font-size: 0.9rem;
}

/* Default separator: › (chevron) */
.breadcrumb-item + .breadcrumb-item::before {
  content: '›';
  padding: 0 8px;
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1;
}

/* Divider variant: > */
.breadcrumb-divider.breadcrumb-item + .breadcrumb-divider.breadcrumb-item::before,
nav[style*="bs-breadcrumb-divider"] .breadcrumb-item + .breadcrumb-item::before {
  content: '>';
  padding: 0 8px;
  color: #374151;
  font-size: 0.85rem;
}

.breadcrumb-item a {
  color: #374151;
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumb-item a:hover {
  color: #f97316;
}
.breadcrumb-item.active {
  color: #374151;
  font-weight: 500;
}

/* ── Code block ── */
.code-block {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.8rem;
  font-weight: 600;
  color: #374151;
}
.btn-copy {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 3px 14px;
  font-size: 0.78rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 60px;
}
.btn-copy:hover {
  background: #fef3e8;
  border-color: #f97316;
  color: #f97316;
}
.code-pre {
  margin: 0;
  padding: 16px;
  background: #fafafa;
  overflow-x: auto;
  font-size: 0.78rem;
  line-height: 1.8;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre;
}

/* Syntax colours matching Larkon screenshot */
.c-tag  { color: #e25a00; }   /* orange  – tags */
.c-attr { color: #22863a; }   /* green   – attributes */
.c-val  { color: #22863a; }   /* green   – values */

/* ── Right nav ── */
.page-nav-sticky {
  position: sticky;
  top: 80px;
}
.page-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.page-nav-link {
  display: block;
  padding: 7px 14px;
  font-size: 0.85rem;
  color: #6b7280;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
}
.page-nav-link:hover,
.page-nav-link.active {
  color: #f97316;
  background: #fef3e8;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .page-content { padding: 16px; }
  .card-body    { padding: 16px; }
}
@media (max-width: 480px) {
  .breadcrumb   { font-size: 0.82rem; }
}

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .card {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .btn-copy {
  background: var(--app-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .btn-copy:hover { color: var(--text-primary) !important; }
:global([data-theme="dark"]) .section-title,
:global([data-theme="dark"]) .page-title { color: var(--text-primary) !important; }
:global([data-theme="dark"]) .breadcrumb-item,
:global([data-theme="dark"]) .breadcrumb-item a { color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .breadcrumb-item.active { color: var(--text-primary) !important; }
</style>