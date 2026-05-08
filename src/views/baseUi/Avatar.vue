<template>
  <div class="page-content">
    <CdnSection />

    <!-- Page Title -->
    <div class="page-title-box">
      <h4 class="page-title">Avatars</h4>
    </div>

    <div class="row">
      <!-- ── Main Content ── -->
      <div class="col-main">

        <!-- Basic Example -->
        <div class="card" id="basic">
          <div class="card-body">
            <h5 class="card-title">Basic Example</h5>
            <p class="text-muted">
              Create and group avatars of different sizes and shapes with the css classes.
              Using Bootstrap's naming convention, you can control size of avatar including
              standard avatar, or scale it up to different sizes.
            </p>

            <div class="avatar-showcase">
              <div class="avatar-item" v-for="item in basicAvatars" :key="item.label">
                <img :src="item.src" alt="avatar" class="img-fluid rounded-circle" :class="item.class" />
                <span class="avatar-label">{{ item.label }}</span>
              </div>
            </div>

            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copy('basic')">
                  {{ copied === 'basic' ? 'Copied!' : 'Copy' }}
                </button>
              </div>
              <pre class="code-pre"><code>&lt;img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&amp;h=32&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-xs rounded-circle" /&gt;
&lt;img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&amp;h=48&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-sm rounded-circle" /&gt;
&lt;img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;h=64&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-md rounded-circle" /&gt;
&lt;img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&amp;h=96&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-lg rounded-circle" /&gt;
&lt;img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&amp;h=128&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-xl rounded-circle" /&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- Rounded Circle -->
        <div class="card" id="rounded">
          <div class="card-body">
            <h5 class="card-title">Rounded Circle</h5>
            <p class="text-muted">
              Using an additional class <code>.rounded-circle</code> in <code>&lt;img&gt;</code> element creates the rounded avatar.
            </p>

            <div class="avatar-showcase">
              <div class="avatar-item" v-for="item in roundedAvatars" :key="item.label">
                <img :src="item.src" alt="avatar" class="img-fluid rounded-circle" :class="item.class" />
                <span class="avatar-label">{{ item.label }}</span>
              </div>
            </div>

            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copy('rounded')">
                  {{ copied === 'rounded' ? 'Copied!' : 'Copy' }}
                </button>
              </div>
              <pre class="code-pre"><code>&lt;img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;h=64&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-md rounded-circle" /&gt;
&lt;img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&amp;h=96&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-lg rounded-circle" /&gt;
&lt;img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&amp;h=128&amp;fit=crop&amp;crop=face" alt="avatar" class="img-fluid avatar-xl rounded-circle" /&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- Images Shapes -->
        <div class="card" id="shapes">
          <div class="card-body">
            <h5 class="card-title">Images Shapes</h5>
            <p class="text-muted">Avatars with different sizes and shapes.</p>

            <div class="avatar-showcase shapes-showcase">
              <div class="avatar-item" v-for="item in shapeAvatars" :key="item.label">
                <img
                  :src="item.src"
                  alt="avatar"
                  :class="['img-fluid', item.class]"
                  :style="item.style || ''"
                />
                <span class="avatar-label">{{ item.label }}</span>
              </div>
            </div>

            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copy('shapes')">
                  {{ copied === 'shapes' ? 'Copied!' : 'Copy' }}
                </button>
              </div>
              <pre class="code-pre"><code>&lt;img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&amp;h=130&amp;fit=crop" alt="landscape" class="img-fluid rounded" width="200" /&gt;
&lt;img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&amp;h=150&amp;fit=crop&amp;crop=face" alt="portrait" class="img-fluid rounded" width="150" /&gt;
&lt;img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&amp;h=150&amp;fit=crop&amp;crop=face" alt="circle" class="img-fluid rounded-circle" width="150" /&gt;
&lt;img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&amp;h=130&amp;fit=crop" alt="thumbnail" class="img-fluid img-thumbnail" width="200" /&gt;
&lt;img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;h=150&amp;fit=crop&amp;crop=face" alt="circle thumbnail" class="img-fluid rounded-circle img-thumbnail" width="150" /&gt;</code></pre>
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
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref } from 'vue'

const pageLinks = [
  { id: 'basic',   label: 'Basic Example' },
  { id: 'rounded', label: 'Rounded Circle' },
  { id: 'shapes',  label: 'Images Shapes' },
]
const activeSection = ref('basic')

const scrollTo = (id) => {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const copied = ref(null)

const AVATAR_CSS = `<style>
/* Avatar size classes — paste in your <head> or stylesheet */
.avatar-xs { width:24px;  height:24px;  object-fit:cover; border-radius:50%; display:inline-block; }
.avatar-sm { width:32px;  height:32px;  object-fit:cover; border-radius:50%; display:inline-block; }
.avatar-md { width:48px;  height:48px;  object-fit:cover; border-radius:50%; display:inline-block; }
.avatar-lg { width:64px;  height:64px;  object-fit:cover; border-radius:50%; display:inline-block; }
.avatar-xl { width:96px;  height:96px;  object-fit:cover; border-radius:50%; display:inline-block; }
</style>

`

const copy = (key) => {
  const snippets = {
    basic: AVATAR_CSS + `<img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face" alt="avatar" class="avatar-xs rounded-circle" />
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face" alt="avatar" class="avatar-sm rounded-circle" />
<img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop&crop=face" alt="avatar" class="avatar-md rounded-circle" />
<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face" alt="avatar" class="avatar-lg rounded-circle" />
<img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" alt="avatar" class="avatar-xl rounded-circle" />`,
    rounded: AVATAR_CSS + `<img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop&crop=face" alt="avatar" class="avatar-md rounded-circle" />
<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face" alt="avatar" class="avatar-lg rounded-circle" />
<img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" alt="avatar" class="avatar-xl rounded-circle" />`,
    shapes: `<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=130&fit=crop" alt="landscape" class="img-fluid rounded" width="200" />
<img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face" alt="portrait" class="img-fluid rounded" width="150" />
<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="circle" class="img-fluid rounded-circle" width="150" />
<img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=130&fit=crop" alt="thumbnail" class="img-fluid img-thumbnail" width="200" />
<img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="circle thumbnail" class="img-fluid rounded-circle img-thumbnail" width="150" />`,
  }
  navigator.clipboard.writeText(snippets[key] || '').then(() => {
    copied.value = key
    setTimeout(() => (copied.value = null), 2000)
  })
}

// Real Unsplash face photos for avatars
const basicAvatars = [
  { src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face',  class: 'avatar-xs', label: '.avatar-xs' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face',  class: 'avatar-sm', label: '.avatar-sm' },
  { src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop&crop=face',  class: 'avatar-md', label: '.avatar-md' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face',  class: 'avatar-lg', label: '.avatar-lg' },
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face', class: 'avatar-xl', label: '.avatar-xl' },
]

const roundedAvatars = [
  { src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop&crop=face',  class: 'avatar-md', label: '.avatar-md .rounded-circle' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face',  class: 'avatar-lg', label: '.avatar-lg .rounded-circle' },
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face', class: 'avatar-xl', label: '.avatar-xl .rounded-circle' },
]

const shapeAvatars = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=260&fit=crop',
    class: 'rounded shape-landscape',
    label: '.rounded',
  },
  {
    src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&crop=face',
    class: 'rounded shape-portrait',
    label: '.rounded',
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    class: 'rounded-circle shape-portrait',
    label: '.rounded-circle',
  },
  {
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=260&fit=crop',
    class: 'img-thumbnail shape-landscape',
    label: '.img-thumbnail',
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    class: 'rounded-circle img-thumbnail shape-portrait',
    label: '.rounded-circle .img-thumbnail',
  },
]
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
  margin-bottom: 0;
}
code {
  background: #fef3e8;
  color: #f97316;
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 0.82rem;
}

/* ── Avatar sizes ── */
.avatar-xs  { width: 32px;  height: 32px;  object-fit: cover; }
.avatar-sm  { width: 48px;  height: 48px;  object-fit: cover; }
.avatar-md  { width: 64px;  height: 64px;  object-fit: cover; }
.avatar-lg  { width: 96px;  height: 96px;  object-fit: cover; }
.avatar-xl  { width: 128px; height: 128px; object-fit: cover; }

/* ── Shape helpers ── */
.rounded         { border-radius: 8px !important; }
.rounded-circle  { border-radius: 50% !important; }
.img-thumbnail   { border: 3px solid #e5e7eb; padding: 4px; background: #fff; border-radius: 8px; }
.shape-landscape { width: 200px; height: 130px; object-fit: cover; }
.shape-portrait  { width: 150px; height: 150px; object-fit: cover; }

/* ── Avatar showcase ── */
.avatar-showcase {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 28px;
  padding: 8px 0 4px;
}
.avatar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.avatar-label {
  font-size: 0.72rem;
  color: #f97316;
  font-family: 'Courier New', monospace;
  white-space: nowrap;
}

.shapes-showcase {
  align-items: flex-end;
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
  padding: 3px 12px;
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
  line-height: 1.7;
  color: #e25a00;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre;
}

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
  .avatar-showcase { gap: 16px; }
  .shape-landscape { width: 150px; height: 100px; }
  .shape-portrait  { width: 110px; height: 110px; }
  .avatar-xl  { width: 96px; height: 96px; }
}
@media (max-width: 480px) {
  .avatar-showcase { gap: 12px; }
  .shape-landscape { width: 120px; height: 80px; }
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
:global([data-theme="dark"]) .img-thumbnail {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .section-title { color: var(--text-primary) !important; }
</style>