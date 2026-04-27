<template>
  <div class="container py-5">

    <!-- Page Title -->
    <div class="mb-5">
      <h1 class="fw-bold border-bottom pb-2">List Group</h1>
      <p class="text-muted">
        List groups are a flexible and powerful component for displaying a series of content. Modify and
        extend them to support just about any content within.
      </p>
    </div>

    <!-- 1. Basic -->
    <section id="basic" class="mb-5">
      <h4 class="fw-semibold mb-1">Basic example</h4>
      <p class="text-muted small mb-3">The most basic list group is an unordered list with list items and the proper classes.</p>
      <ul class="list-group" style="max-width: 360px">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('basic')">
          {{ shown.basic ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.basic" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.basic }}</code></pre>
      </div>
    </section>

    <!-- 2. Active Items -->
    <section id="active" class="mb-5">
      <h4 class="fw-semibold mb-1">Active items</h4>
      <p class="text-muted small mb-3">Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>
      <ul class="list-group" style="max-width: 360px">
        <li class="list-group-item active" aria-current="true">An active item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('active')">
          {{ shown.active ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.active" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.active }}</code></pre>
      </div>
    </section>

    <!-- 3. Disabled Items -->
    <section id="disabled" class="mb-5">
      <h4 class="fw-semibold mb-1">Disabled items</h4>
      <p class="text-muted small mb-3">Add <code>.disabled</code> to a <code>.list-group-item</code> to make it appear disabled.</p>
      <ul class="list-group" style="max-width: 360px">
        <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('disabled')">
          {{ shown.disabled ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.disabled" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.disabled }}</code></pre>
      </div>
    </section>

    <!-- 4. Links and Buttons -->
    <section id="links" class="mb-5">
      <h4 class="fw-semibold mb-1">Links and buttons</h4>
      <p class="text-muted small mb-3">
        Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create actionable list group items
        with hover, disabled, and active states by adding <code>.list-group-item-action</code>.
      </p>
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <p class="small fw-semibold text-muted mb-2">Anchors</p>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">The current link item</a>
            <a href="#" class="list-group-item list-group-item-action">A second link item</a>
            <a href="#" class="list-group-item list-group-item-action">A third link item</a>
            <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
            <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <p class="small fw-semibold text-muted mb-2">Buttons</p>
          <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">The current button</button>
            <button type="button" class="list-group-item list-group-item-action">A second button item</button>
            <button type="button" class="list-group-item list-group-item-action">A third button item</button>
            <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
            <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('links')">
          {{ shown.links ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.links" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.links }}</code></pre>
      </div>
    </section>

    <!-- 5. Flush -->
    <section id="flush" class="mb-5">
      <h4 class="fw-semibold mb-1">Flush</h4>
      <p class="text-muted small mb-3">
        Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group
        items edge-to-edge in a parent container (e.g., cards).
      </p>
      <ul class="list-group list-group-flush" style="max-width: 360px; border: 1px solid #dee2e6; border-radius: 0.375rem;">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('flush')">
          {{ shown.flush ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.flush" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.flush }}</code></pre>
      </div>
    </section>

    <!-- 6. Numbered -->
    <section id="numbered" class="mb-5">
      <h4 class="fw-semibold mb-1">Numbered</h4>
      <p class="text-muted small mb-3">
        Add <code>.list-group-numbered</code> to opt into numbered list group items. Numbers are generated via CSS.
      </p>
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <p class="small fw-semibold text-muted mb-2">Simple</p>
          <ol class="list-group list-group-numbered" style="max-width: 360px">
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
          </ol>
        </div>
        <div class="col-12 col-md-6">
          <p class="small fw-semibold text-muted mb-2">With badges</p>
          <ol class="list-group list-group-numbered" style="max-width: 360px">
            <li v-for="(item, i) in numberedItems" :key="i"
                class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{ item.title }}</div>
                {{ item.content }}
              </div>
              <span class="badge bg-primary rounded-pill">{{ item.badge }}</span>
            </li>
          </ol>
        </div>
      </div>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('numbered')">
          {{ shown.numbered ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.numbered" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.numbered }}</code></pre>
      </div>
    </section>

    <!-- 7. Horizontal -->
    <section id="horizontal" class="mb-5">
      <h4 class="fw-semibold mb-1">Horizontal</h4>
      <p class="text-muted small mb-3">
        Add <code>.list-group-horizontal</code> to change the layout from vertical to horizontal.
        Use responsive variants like <code>.list-group-horizontal-{sm|md|lg|xl|xxl}</code>.
      </p>
      <ul v-for="variant in horizontalVariants" :key="variant.class"
          class="list-group mb-2" :class="variant.class">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('horizontal')">
          {{ shown.horizontal ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.horizontal" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.horizontal }}</code></pre>
      </div>
    </section>

    <!-- 8. Contextual Classes -->
    <section id="contextual" class="mb-5">
      <h4 class="fw-semibold mb-1">Contextual classes</h4>
      <p class="text-muted small mb-3">Use contextual classes to style list items with a stateful background and color.</p>
      <ul class="list-group" style="max-width: 440px">
        <li class="list-group-item">A simple default list group item</li>
        <li v-for="ctx in contextualItems" :key="ctx"
            class="list-group-item" :class="`list-group-item-${ctx}`">
          A simple {{ ctx }} list group item
        </li>
      </ul>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('contextual')">
          {{ shown.contextual ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.contextual" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.contextual }}</code></pre>
      </div>
    </section>

    <!-- 9. Custom Content -->
    <section id="custom" class="mb-5">
      <h4 class="fw-semibold mb-1">Custom content</h4>
      <p class="text-muted small mb-3">
        Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.
      </p>
      <div class="list-group" style="max-width: 480px">
        <a v-for="(item, i) in customItems" :key="i"
           href="#"
           class="list-group-item list-group-item-action"
           :class="{ active: i === 0 }"
           :aria-current="i === 0 ? 'true' : undefined">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ item.heading }}</h5>
            <small :class="i === 0 ? '' : 'text-body-secondary'">{{ item.time }}</small>
          </div>
          <p class="mb-1">{{ item.body }}</p>
          <small :class="i === 0 ? '' : 'text-body-secondary'">{{ item.footer }}</small>
        </a>
      </div>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('custom')">
          {{ shown.custom ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.custom" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.custom }}</code></pre>
      </div>
    </section>

    <!-- 10. Checkboxes and Radios -->
    <section id="checkboxes" class="mb-5">
      <h4 class="fw-semibold mb-1">Checkboxes and radios</h4>
      <p class="text-muted small mb-3">Place Bootstrap's checkboxes and radios within list group items and customize as needed.</p>
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <p class="small fw-semibold text-muted mb-2">Checkboxes</p>
          <ul class="list-group" style="max-width: 320px">
            <li v-for="(item, i) in checkboxItems" :key="i" class="list-group-item">
              <input
                class="form-check-input me-2"
                type="checkbox"
                :id="`checkbox-${i}`"
                v-model="item.checked"
              />
              <label class="form-check-label stretched-link" :for="`checkbox-${i}`">
                {{ item.label }}
              </label>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <p class="small fw-semibold text-muted mb-2">Radios</p>
          <ul class="list-group" style="max-width: 320px">
            <li v-for="(label, i) in radioLabels" :key="i" class="list-group-item">
              <input
                class="form-check-input me-2"
                type="radio"
                name="listGroupRadio"
                :id="`radio-${i}`"
                :value="i"
                v-model="selectedRadio"
              />
              <label class="form-check-label stretched-link" :for="`radio-${i}`">
                {{ label }}
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" @click="toggle('checkboxes')">
          {{ shown.checkboxes ? 'Hide' : 'Show' }} code
        </button>
        <pre v-if="shown.checkboxes" class="bg-dark text-light p-3 rounded mt-2 small"><code>{{ snippets.checkboxes }}</code></pre>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ── Toggle state ──────────────────────────────────────
const shown = reactive({
  basic: false, active: false, disabled: false, links: false,
  flush: false, numbered: false, horizontal: false,
  contextual: false, custom: false, checkboxes: false,
})
const toggle = (key) => { shown[key] = !shown[key] }

// ── Data ──────────────────────────────────────────────
const numberedItems = ref([
  { title: 'Subheading', content: 'Content for list item', badge: 14 },
  { title: 'Subheading', content: 'Content for list item', badge: 2 },
  { title: 'Subheading', content: 'Content for list item', badge: 1 },
])

const horizontalVariants = [
  { class: 'list-group-horizontal' },
  { class: 'list-group-horizontal-sm' },
  { class: 'list-group-horizontal-md' },
]

const contextualItems = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

const customItems = ref([
  { heading: 'List group item heading', time: '3 days ago', body: 'Some placeholder content in a paragraph.', footer: 'And some small print.' },
  { heading: 'List group item heading', time: '5 days ago', body: 'Some placeholder content in a paragraph.', footer: 'And some muted small print.' },
  { heading: 'List group item heading', time: '1 week ago', body: 'Some placeholder content in a paragraph.', footer: 'And some muted small print.' },
])

const checkboxItems = ref([
  { label: 'First checkbox', checked: true },
  { label: 'Second checkbox', checked: false },
  { label: 'Third checkbox', checked: false },
])

const radioLabels = ['First radio', 'Second radio', 'Third radio']
const selectedRadio = ref(0)

// ── Code snippets ─────────────────────────────────────
const snippets = {
  basic: `<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`,

  active: `<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,

  disabled: `<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,

  links: `<!-- Anchors -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a class="list-group-item list-group-item-action disabled" aria-disabled="true">
    A disabled link item
  </a>
</div>

<!-- Buttons -->
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action" disabled>
    A disabled button item
  </button>
</div>`,

  flush: `<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,

  numbered: `<!-- Simple -->
<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>

<!-- With badges -->
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>`,

  horizontal: `<ul class="list-group list-group-horizontal">...</ul>
<ul class="list-group list-group-horizontal-sm">...</ul>
<ul class="list-group list-group-horizontal-md">...</ul>`,

  contextual: `<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>`,

  custom: `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
</div>`,

  checkboxes: `<!-- Checkboxes -->
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-2" type="checkbox" id="checkbox1" />
    <label class="form-check-label stretched-link" for="checkbox1">First checkbox</label>
  </li>
</ul>

<!-- Radios -->
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-2" type="radio" name="listGroupRadio" id="radio1" />
    <label class="form-check-label stretched-link" for="radio1">First radio</label>
  </li>
</ul>`,
}
</script>

<style scoped>
/* ── Override Bootstrap primary with brand orange #f97316 ── */
:deep(.list-group-item.active),
:deep(.list-group-item-action.active) {
  background-color: #f97316 !important;
  border-color: #f97316 !important;
  color: #fff !important;
}

:deep(.list-group-item-action:hover),
:deep(.list-group-item-action:focus) {
  background-color: #fff3ec;
  color: #c2550a;
}

:deep(.badge.bg-primary) {
  background-color: #f97316 !important;
}

:deep(.btn-outline-secondary) {
  border-color: #f97316;
  color: #f97316;
}

:deep(.btn-outline-secondary:hover) {
  background-color: #f97316;
  border-color: #f97316;
  color: #fff;
}

:deep(.form-check-input:checked) {
  background-color: #f97316;
  border-color: #f97316;
}

:deep(.form-check-input:focus) {
  border-color: #f97316;
  box-shadow: 0 0 0 0.25rem rgba(249, 115, 22, 0.25);
}

pre {
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 0.78rem;
}
code {
  font-family: 'Courier New', Courier, monospace;
}
section {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 2rem;
}
section:last-of-type {
  border-bottom: none;
}
</style>