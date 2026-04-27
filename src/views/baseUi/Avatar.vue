<template>
  <div class="page-content">

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
              <pre class="code-pre"><code>&lt;img src="assets/images/users/avatar-2.jpg" alt="image" class="img-fluid avatar-xs rounded-circle" /&gt;
&lt;img src="assets/images/users/avatar-3.jpg" alt="image" class="img-fluid avatar-sm rounded-circle" /&gt;
&lt;img src="assets/images/users/avatar-4.jpg" alt="image" class="img-fluid avatar-md rounded-circle" /&gt;
&lt;img src="assets/images/users/avatar-5.jpg" alt="image" class="img-fluid avatar-lg rounded-circle" /&gt;
&lt;img src="assets/images/users/avatar-6.jpg" alt="image" class="img-fluid avatar-xl rounded-circle" /&gt;</code></pre>
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
              <pre class="code-pre"><code>&lt;img src="assets/images/users/avatar-7.jpg" alt="image" class="img-fluid avatar-md rounded-circle" /&gt;
&lt;img src="assets/images/users/avatar-8.jpg" alt="image" class="img-fluid avatar-lg rounded-circle" /&gt;
&lt;img src="assets/images/users/avatar-9.jpg" alt="image" class="img-fluid avatar-xl rounded-circle" /&gt;</code></pre>
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
              <pre class="code-pre"><code>&lt;img src="assets/images/small/img-2.jpg"    alt="image" class="img-fluid rounded"         width="200" /&gt;
&lt;img src="assets/images/users/avatar-5.jpg" alt="image" class="img-fluid rounded"         width="150" /&gt;
&lt;img src="assets/images/users/avatar-7.jpg" alt="image" class="img-fluid rounded-circle"  width="150" /&gt;
&lt;img src="assets/images/small/img-3.jpg"    alt="image" class="img-fluid img-thumbnail"   width="200" /&gt;
&lt;img src="assets/images/users/avatar-8.jpg" alt="image" class="img-fluid rounded-circle img-thumbnail" width="150" /&gt;</code></pre>
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
  </div>
</template>

<script setup>
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
const copy = (key) => {
  const snippets = {
    basic:   `<img src="assets/images/users/avatar-2.jpg" alt="image" class="img-fluid avatar-xs rounded-circle" />\n<img src="assets/images/users/avatar-3.jpg" alt="image" class="img-fluid avatar-sm rounded-circle" />`,
    rounded: `<img src="assets/images/users/avatar-7.jpg" alt="image" class="img-fluid avatar-md rounded-circle" />`,
    shapes:  `<img src="assets/images/small/img-2.jpg" alt="image" class="img-fluid rounded" width="200" />`,
  }
  navigator.clipboard.writeText(snippets[key] || '').then(() => {
    copied.value = key
    setTimeout(() => (copied.value = null), 2000)
  })
}

// ── Use real Unsplash avatar-style photos as placeholders
const basicAvatars = [
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-2.jpg',  class: 'avatar-xs', label: '.avatar-xs' },
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-3.jpg',  class: 'avatar-sm', label: '.avatar-sm' },
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-4.jpg',  class: 'avatar-md', label: '.avatar-md' },
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-5.jpg',  class: 'avatar-lg', label: '.avatar-lg' },
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-6.jpg',class: 'avatar-xl', label: '.avatar-xl' },
]

const roundedAvatars = [
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-7.jpg', class: 'avatar-md', label: '.avatar-md .rounded-circle' },
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-8.jpg', class: 'avatar-lg', label: '.avatar-lg .rounded-circle' },
  { src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-9.jpg',class: 'avatar-xl', label: '.avatar-xl .rounded-circle' },
]

const shapeAvatars = [
  {
    src: 'https://techzaa.in/larkon/admin/assets/images/small/img-2.jpg',
    class: 'rounded shape-landscape',
    label: '.rounded',
  },
  {
    src: 'https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg',
    class: 'rounded shape-portrait',
    label: '.rounded',
  },
  {
    src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-7.jpg',
    class: 'rounded-circle shape-portrait',
    label: '.rounded-circle',
  },
  {
    src: 'https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg',
    class: 'img-thumbnail shape-landscape',
    label: '.img-thumbnail',
  },
  {
    src: 'https://techzaa.in/larkon/admin/assets/images/users/avatar-8.jpg',
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
</style>