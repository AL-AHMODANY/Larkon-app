<template>
  <div class="page-content">
    <CdnSection />
    <!-- Page Title -->
    <div class="page-title-box">
      <h4 class="page-title">Accordion</h4>
    </div>

    <div class="row">
      <!-- Main content col -->
      <div class="col-lg-9">

        <!-- ── Basic Example ─────────────────────────── -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-1">Basic Example</h5>
            <p class="text-muted mb-4">
              Using the card component, you can extend the default collapse behavior to create an accordion.
              To properly achieve the accordion style, be sure to use
              <code>.accordion</code> as a wrapper.
            </p>

            <div class="accordion" id="accordionBasic">
              <div v-for="(item, i) in basicItems" :key="i" class="accordion-item">
                <h2 class="accordion-header" :id="`basicHeading${i}`">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: item.open === false }"
                    type="button"
                    @click="toggleBasic(i)"
                    :aria-expanded="item.open"
                  >
                    {{ item.title }}
                  </button>
                </h2>
                <div
                  class="accordion-collapse"
                  :class="{ show: item.open }"
                  :style="item.open ? 'height: auto;' : 'height: 0; overflow: hidden;'"
                >
                  <div class="accordion-body" v-html="item.body" />
                </div>
              </div>
            </div>

            <!-- Code block -->
            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copyCode('basic')">
                  <span v-if="copied === 'basic'">Copied!</span>
                  <span v-else>Copy</span>
                </button>
              </div>
              <pre class="code-pre"><code ref="basicCode">&lt;div class="accordion" id="accordionExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header" id="headingOne"&gt;
      &lt;button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"&gt;
        Accordion Item #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;
        &lt;strong&gt;This is the first item's accordion body.&lt;/strong&gt; It is shown by default...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- ── Flush Accordion ────────────────────────── -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-1">Flush Accordion</h5>
            <p class="text-muted mb-4">
              Add <code>.accordion-flush</code> to remove the default
              <code>background-color</code>, some borders, and some rounded corners
              to render accordions edge-to-edge with their parent container.
            </p>

            <div class="accordion accordion-flush" id="accordionFlush">
              <div v-for="(item, i) in flushItems" :key="i" class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: !item.open }"
                    type="button"
                    @click="toggleFlush(i)"
                    :aria-expanded="item.open"
                  >
                    {{ item.title }}
                  </button>
                </h2>
                <div
                  class="accordion-collapse"
                  :class="{ show: item.open }"
                  :style="item.open ? 'height: auto;' : 'height: 0; overflow: hidden;'"
                >
                  <div class="accordion-body">{{ item.body }}</div>
                </div>
              </div>
            </div>

            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copyCode('flush')">
                  <span v-if="copied === 'flush'">Copied!</span>
                  <span v-else>Copy</span>
                </button>
              </div>
              <pre class="code-pre"><code>&lt;div class="accordion accordion-flush" id="accordionFlushExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header" id="flush-headingOne"&gt;
      &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"&gt;
        Accordion Item #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="flush-collapseOne" class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"&gt;
      &lt;div class="accordion-body"&gt;Placeholder content for this accordion...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- ── Always Open Accordion ──────────────────── -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-1">Always Open Accordion</h5>
            <p class="text-muted mb-4">
              Omit the <code>data-bs-parent</code> attribute on each
              <code>.accordion-collapse</code> to make accordion items stay open when
              another item is opened.
            </p>

            <div class="accordion" id="accordionAlwaysOpen">
              <div v-for="(item, i) in alwaysOpenItems" :key="i" class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: !item.open }"
                    type="button"
                    @click="item.open = !item.open"
                    :aria-expanded="item.open"
                  >
                    {{ item.title }}
                  </button>
                </h2>
                <div
                  class="accordion-collapse"
                  :class="{ show: item.open }"
                  :style="item.open ? 'height: auto;' : 'height: 0; overflow: hidden;'"
                >
                  <div class="accordion-body" v-html="item.body" />
                </div>
              </div>
            </div>

            <div class="code-block mt-4">
              <div class="code-header">
                <span>HTML</span>
                <button class="btn-copy" @click="copyCode('always')">
                  <span v-if="copied === 'always'">Copied!</span>
                  <span v-else>Copy</span>
                </button>
              </div>
              <pre class="code-pre"><code>&lt;div class="accordion" id="accordionPanelsStayOpenExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header" id="panelsStayOpen-headingOne"&gt;
      &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"&gt;
        Accordion Item #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"&gt;
      &lt;div class="accordion-body"&gt;
        &lt;strong&gt;This is the first item's accordion body.&lt;/strong&gt;...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>

      </div><!-- /col-lg-9 -->

      <!-- ── Right sticky nav ───────────────────────── -->
      <div class="col-lg-3 d-none d-lg-block">
        <div class="page-nav-sticky">
          <nav class="page-nav">
            <a
              v-for="link in pageLinks"
              :key="link.id"
              :href="`#${link.id}`"
              class="page-nav-link"
              :class="{ active: activeSection === link.id }"
              @click.prevent="scrollTo(link.id)"
            >
              {{ link.label }}
            </a>
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
import { ref, onMounted, onUnmounted } from 'vue'

// ── Page right-nav links
const pageLinks = [
  { id: 'basic',       label: 'Default Example' },
  { id: 'flush',       label: 'Flush Accordion' },
  { id: 'alwaysopen',  label: 'Always Open' },
]
const activeSection = ref('basic')

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ── Copy code
const copied = ref(null)
const copyCode = (key) => {
  const map = {
    basic: document.querySelector('#accordionBasic')?.closest('.card')?.querySelector('code')?.innerText,
    flush: document.querySelector('#accordionFlush')?.closest('.card')?.querySelector('code')?.innerText,
    always: document.querySelector('#accordionAlwaysOpen')?.closest('.card')?.querySelector('code')?.innerText,
  }
  navigator.clipboard.writeText(map[key] || '').then(() => {
    copied.value = key
    setTimeout(() => (copied.value = null), 2000)
  })
}

// ── Basic accordion (one open at a time)
const basicItems = ref([
  {
    title: 'Accordion Item #1',
    open: true,
    body: `<strong>This is the first item's accordion body.</strong> It is shown by default,
      until the collapse plugin adds the appropriate classes that we use to style each element.
      These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      You can modify any of this with custom CSS or overriding our default variables. It's also worth
      noting that just about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow.`,
  },
  { title: 'Accordion Item #2', open: false, body: 'Placeholder content for accordion item #2.' },
  { title: 'Accordion Item #3', open: false, body: 'Placeholder content for accordion item #3.' },
])

const toggleBasic = (index) => {
  basicItems.value.forEach((item, i) => {
    item.open = i === index ? !item.open : false
  })
}

// ── Flush accordion (one open at a time)
const flushItems = ref([
  { title: 'Accordion Item #1', open: false, body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class.' },
  { title: 'Accordion Item #2', open: false, body: 'Placeholder content for accordion item #2.' },
  { title: 'Accordion Item #3', open: false, body: 'Placeholder content for accordion item #3.' },
])

const toggleFlush = (index) => {
  flushItems.value.forEach((item, i) => {
    item.open = i === index ? !item.open : false
  })
}

// ── Always open accordion (independent)
const alwaysOpenItems = ref([
  {
    title: 'Accordion Item #1',
    open: true,
    body: `<strong>This is the first item's accordion body.</strong> It is shown by default,
      until the collapse plugin adds the appropriate classes that we use to style each element.
      These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      You can modify any of this with custom CSS or overriding our default variables.`,
  },
  { title: 'Accordion Item #2', open: false, body: 'Placeholder content for accordion item #2.' },
  { title: 'Accordion Item #3', open: false, body: 'Placeholder content for accordion item #3.' },
])
</script>

<style scoped>
/* ── Page layout ── */
.page-content {
  padding: 24px;
  max-width: 1200px;
}

.page-title-box {
  margin-bottom: 24px;
}
.page-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

/* ── Card ── */
.card {
  background: #fff;
  border: 1px solid #e9edf2;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.card-body {
  padding: 24px;
}
.card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}
.text-muted {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}
code {
  background: #fef3e8;
  color: #f97316;
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 0.82rem;
}

/* ── Accordion ── */
.accordion {
  border-radius: 8px;
  overflow: hidden;
}
.accordion-item {
  border: 1px solid #e5e7eb;
  border-bottom: none;
  background: #fff;
}
.accordion-item:first-child {
  border-radius: 8px 8px 0 0;
}
.accordion-item:last-child {
  border-bottom: 1px solid #e5e7eb;
  border-radius: 0 0 8px 8px;
}

.accordion-button {
  width: 100%;
  background: #fff;
  border: none;
  padding: 16px 20px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
  color: #f97316;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.2s;
  position: relative;
}
.accordion-button::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23f97316'%3E%3Cpath fill-rule='evenodd' d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}
.accordion-button.collapsed {
  color: #374151;
}
.accordion-button.collapsed::after {
  transform: rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath fill-rule='evenodd' d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z' clip-rule='evenodd'/%3E%3C/svg%3E");
}
.accordion-button:hover {
  background: #fef9f5;
}

.accordion-collapse {
  transition: height 0.3s ease;
  overflow: hidden;
}
.accordion-body {
  padding: 16px 20px;
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.7;
  border-top: 1px solid #f3f4f6;
}

/* Flush variant */
.accordion-flush .accordion-item {
  border-left: none;
  border-right: none;
  border-radius: 0 !important;
}
.accordion-flush .accordion-item:first-child {
  border-top: none;
}
.accordion-flush .accordion-button {
  background: transparent;
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
  font-size: 0.8rem;
  line-height: 1.6;
  color: #e25a00;
  font-family: 'Courier New', Courier, monospace;
}

/* ── Right nav ── */
.page-nav-sticky {
  position: sticky;
  top: 80px;
}
.page-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.page-nav-link {
  display: block;
  padding: 6px 12px;
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

/* ── Grid helpers ── */
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin: 0 -12px;
}
.col-lg-9 {
  flex: 0 0 75%;
  max-width: 75%;
  padding: 0 12px;
}
.col-lg-3 {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 12px;
}
@media (max-width: 992px) {
  .col-lg-9, .col-lg-3 { flex: 0 0 100%; max-width: 100%; }
  .d-none.d-lg-block { display: none !important; }
}

/* -- Dark mode -- */
:global([data-theme="dark"]) .page-content { background: var(--bg-body) !important; }
:global([data-theme="dark"]) .page-title   { color: var(--text-primary) !important; }
:global([data-theme="dark"]) .card         { background: var(--card-bg) !important; border-color: var(--card-border) !important; }
:global([data-theme="dark"]) .card-body    { background: var(--card-bg) !important; color: var(--text-primary) !important; }
:global([data-theme="dark"]) .card-title   { color: var(--text-primary) !important; }
:global([data-theme="dark"]) .text-muted   { color: var(--text-muted) !important; }
:global([data-theme="dark"]) code          { background: var(--accent-muted) !important; color: var(--accent) !important; }
:global([data-theme="dark"]) .code-block   { border-color: var(--border-color) !important; }
:global([data-theme="dark"]) .code-header  { background: var(--app-bg) !important; border-bottom-color: var(--border-color) !important; color: var(--text-primary) !important; }
:global([data-theme="dark"]) .btn-copy     { background: var(--card-bg) !important; border-color: var(--border-color) !important; color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .btn-copy:hover { background: var(--accent-muted) !important; border-color: var(--accent) !important; color: var(--accent) !important; }
:global([data-theme="dark"]) .code-pre     { background: var(--app-bg) !important; color: #c9d1d9 !important; }
:global([data-theme="dark"]) .page-nav-link { color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .page-nav-link:hover,
:global([data-theme="dark"]) .page-nav-link.active { color: var(--accent) !important; background: var(--accent-muted) !important; }
</style>