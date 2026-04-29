<template>
  <div class="buttons-page py-4 px-2 px-lg-3">
    <div class="mb-3">
      <h4 class="page-heading mb-1">Buttons</h4>
      <p class="page-subtitle mb-0">
        Bootstrap style button examples with copy-ready HTML snippets.
      </p>
    </div>

    <div class="row g-4 align-items-start">
      <div class="col-12 col-lg-8 col-xl-9">
        <section
          id="default"
          :ref="(el) => setSectionRef('default', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Default Buttons</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('default')">
              {{ labelFor("default") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton
                v-for="variant in variants"
                :key="`d-${variant}`"
                :variant="variant"
                >{{ cap(variant) }}</BaseButton
              >
            </div>
            <pre class="code-box mb-0"><code>{{ codes.default }}</code></pre>
          </div>
        </section>

        <section
          id="rounded"
          :ref="(el) => setSectionRef('rounded', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Rounded Buttons</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('rounded')">
              {{ labelFor("rounded") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton
                v-for="variant in variants"
                :key="`r-${variant}`"
                :variant="variant"
                rounded
                >{{ cap(variant) }}</BaseButton
              >
            </div>
            <pre class="code-box mb-0"><code>{{ codes.rounded }}</code></pre>
          </div>
        </section>

        <section
          id="outline"
          :ref="(el) => setSectionRef('outline', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Outline Buttons</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('outline')">
              {{ labelFor("outline") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton
                v-for="variant in variants"
                :key="`o-${variant}`"
                :variant="variant"
                outline
                >{{ cap(variant) }}</BaseButton
              >
            </div>
            <pre class="code-box mb-0"><code>{{ codes.outline }}</code></pre>
          </div>
        </section>

        <section
          id="outline-rounded"
          :ref="(el) => setSectionRef('outline-rounded', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Outline Rounded Buttons</h6>
            <button
              class="btn btn-copy btn-sm"
              @click="copyCode('outlineRounded')"
            >
              {{ labelFor("outlineRounded") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton
                v-for="variant in variants"
                :key="`or-${variant}`"
                :variant="variant"
                outline
                rounded
                >{{ cap(variant) }}</BaseButton
              >
            </div>
            <pre
              class="code-box mb-0"
            ><code>{{ codes.outlineRounded }}</code></pre>
          </div>
        </section>

        <section
          id="soft"
          :ref="(el) => setSectionRef('soft', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Soft Buttons</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('soft')">
              {{ labelFor("soft") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton
                v-for="variant in variants"
                :key="`s-${variant}`"
                :variant="variant"
                soft
                >{{ cap(variant) }}</BaseButton
              >
            </div>
            <pre class="code-box mb-0"><code>{{ codes.soft }}</code></pre>
          </div>
        </section>

        <section
          id="soft-rounded"
          :ref="(el) => setSectionRef('soft-rounded', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Soft Rounded Buttons</h6>
            <button
              class="btn btn-copy btn-sm"
              @click="copyCode('softRounded')"
            >
              {{ labelFor("softRounded") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton
                v-for="variant in variants"
                :key="`sr-${variant}`"
                :variant="variant"
                soft
                rounded
                >{{ cap(variant) }}</BaseButton
              >
            </div>
            <pre
              class="code-box mb-0"
            ><code>{{ codes.softRounded }}</code></pre>
          </div>
        </section>

        <section
          id="width"
          :ref="(el) => setSectionRef('width', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Buttons Width</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('width')">
              {{ labelFor("width") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton variant="primary" width="xs">Width xs</BaseButton>
              <BaseButton variant="secondary" width="sm">Width sm</BaseButton>
              <BaseButton variant="success" width="md">Width md</BaseButton>
              <BaseButton variant="info" width="lg">Width lg</BaseButton>
              <BaseButton variant="warning" width="xl">Width xl</BaseButton>
            </div>
            <pre class="code-box mb-0"><code>{{ codes.width }}</code></pre>
          </div>
        </section>

        <section
          id="sizes"
          :ref="(el) => setSectionRef('sizes', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Buttons Sizes</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('sizes')">
              {{ labelFor("sizes") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row align-items-center">
              <BaseButton variant="success" size="sm">Small</BaseButton>
              <BaseButton variant="primary" size="md">Medium</BaseButton>
              <BaseButton variant="danger" size="lg">Large</BaseButton>
            </div>
            <pre class="code-box mb-0"><code>{{ codes.sizes }}</code></pre>
          </div>
        </section>

        <section
          id="disabled"
          :ref="(el) => setSectionRef('disabled', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Disabled Buttons</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('disabled')">
              {{ labelFor("disabled") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="btn-row">
              <BaseButton variant="primary" disabled>Primary</BaseButton>
              <BaseButton variant="secondary" disabled>Secondary</BaseButton>
              <BaseButton variant="success" disabled>Success</BaseButton>
              <BaseButton variant="info" disabled>Info</BaseButton>
              <BaseButton variant="warning" disabled>Warning</BaseButton>
            </div>
            <pre class="code-box mb-0"><code>{{ codes.disabled }}</code></pre>
          </div>
        </section>

        <section
          id="icons"
          :ref="(el) => setSectionRef('icons', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Icon Left Buttons</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('icons')">
              {{ labelFor("icons") }}
            </button>
          </header>
          <div class="showcase-body">
            <!-- Icon Buttons using Boxicons -->
            <div class="btn-row d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary">
                <i class="bx bx-heart"></i>
              </button>
              <button type="button" class="btn btn-secondary">
                <i class="bx bx-user-voice"></i>
              </button>
              <button type="button" class="btn btn-success">
                <i class="bx bx-check-double"></i>
              </button>
              <button type="button" class="btn btn-info">
                <i class="bx bx-cloud me-1"></i>Cloud Hosting
              </button>
              <button type="button" class="btn btn-warning">
                <i class="bx bx-info-circle me-1"></i>Warning
              </button>
            </div>
            <pre class="code-box mb-0"><code>{{ codes.icons }}</code></pre>
          </div>
        </section>

        <section
          id="groups"
          :ref="(el) => setSectionRef('groups', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Button Groups</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('groups')">
              {{ labelFor("groups") }}
            </button>
          </header>
          <div class="showcase-body">
            <!-- Horizontal Button Groups -->
            <div class="d-flex flex-wrap gap-2 mb-3">
              <div
                class="btn-group mb-1 me-1"
                role="group"
                aria-label="Horizontal group 1"
              >
                <button type="button" class="btn btn-light">Left</button>
                <button type="button" class="btn btn-light">Middle</button>
                <button type="button" class="btn btn-light">Right</button>
              </div>

              <div
                class="btn-group mb-1 me-1"
                role="group"
                aria-label="Horizontal group 2"
              >
                <button type="button" class="btn btn-light">1</button>
                <button type="button" class="btn btn-light">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-light">4</button>
              </div>

              <div
                class="btn-group mb-1 me-1"
                role="group"
                aria-label="Horizontal group 3"
              >
                <button type="button" class="btn btn-light">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-light">7</button>
                <button
                  id="dropdown"
                  type="button"
                  class="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      >Dropdown link</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      >Dropdown link</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Vertical Button Groups -->
              <div class="d-flex gap-3">
                <div
                  class="btn-group-vertical me-4"
                  role="group"
                  aria-label="Vertical group 1"
                >
                  <button type="button" class="btn btn-light">Top</button>
                  <button type="button" class="btn btn-light">Middle</button>
                  <button type="button" class="btn btn-light">Bottom</button>
                </div>

                <div
                  class="btn-group-vertical"
                  role="group"
                  aria-label="Vertical group 2"
                >
                  <button type="button" class="btn btn-light">Button 1</button>
                  <button type="button" class="btn btn-light">Button 2</button>
                  <button
                    id="verticalDropdown"
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Button 3
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="verticalDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="javascript:void(0);"
                        >Dropdown link</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0);"
                        >Dropdown link</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <pre class="code-box mb-0"><code>{{ codes.groups }}</code></pre>
          </div>
        </section>

        <section
          id="blocks"
          :ref="(el) => setSectionRef('blocks', el)"
          class="showcase-card"
        >
          <header class="showcase-head">
            <h6 class="mb-0">Block Buttons</h6>
            <button class="btn btn-copy btn-sm" @click="copyCode('blocks')">
              {{ labelFor("blocks") }}
            </button>
          </header>
          <div class="showcase-body">
            <div class="d-grid gap-2">
              <BaseButton variant="danger">Block Button</BaseButton>
              <BaseButton variant="secondary">Block Button</BaseButton>
              <BaseButton variant="light">Block Button</BaseButton>
            </div>
            <pre class="code-box mb-0"><code>{{ codes.blocks }}</code></pre>
          </div>
        </section>
      </div>

      <div class="col-12 col-lg-4 col-xl-3">
        <aside class="toc-card toc-fixed position-lg-sticky top-0">
          <ul class="toc-list mb-0">
            <li v-for="item in tocItems" :key="item.id">
              <button
                class="toc-link"
                :class="{ active: activeSection === item.id }"
                @click="scrollToSection(item.id)"
              >
                {{ item.label }}
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import PageFooter from '../../components/layout/Footer.vue'
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import BaseButton from "../../components/BaseButton.vue";

const variants = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "dark",
  "purple",
  "pink",
  "orange",
  "light",
  "link",
];
const copied = ref("");
const activeSection = ref("default");
const sectionEls = {};
let scrollHost = null;

const tocItems = [
  { id: "default", label: "Default Example" },
  { id: "rounded", label: "Rounded Buttons" },
  { id: "outline", label: "Outline Buttons" },
  { id: "outline-rounded", label: "Outline Rounded Buttons" },
  { id: "soft", label: "Soft Buttons" },
  { id: "soft-rounded", label: "Soft Rounded Buttons" },
  { id: "width", label: "Button Width" },
  { id: "sizes", label: "Button Sizes" },
  { id: "disabled", label: "Disabled Button" },
  { id: "icons", label: "Icon Button" },
  { id: "groups", label: "Button Group" },
  { id: "blocks", label: "Block Button" },
];

const codes = reactive({
  default: `
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-purple">Purple</button>
<button type="button" class="btn btn-pink">Pink</button>
<button type="button" class="btn btn-orange">Orange</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-link">Link</button>`,
  rounded: `<button type="button" class="btn btn-primary rounded-pill">Primary</button>
<button type="button" class="btn btn-secondary rounded-pill">Secondary</button>
<button type="button" class="btn btn-success rounded-pill">Success</button>
<button type="button" class="btn btn-info rounded-pill">Info</button>
<button type="button" class="btn btn-warning rounded-pill">Warning</button>
<button type="button" class="btn btn-danger rounded-pill">Danger</button>
<button type="button" class="btn btn-dark rounded-pill">Dark</button>
<button type="button" class="btn btn-purple rounded-pill">Purple</button>
<button type="button" class="btn btn-pink rounded-pill">Pink</button>
<button type="button" class="btn btn-orange rounded-pill">Orange</button>
<button type="button" class="btn btn-light rounded-pill">Light</button>
<button type="button" class="btn btn-link rounded-pill">Link</button>`,
  outline: `<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
<button type="button" class="btn btn-outline-purple">Purple</button>
<button type="button" class="btn btn-outline-pink">Pink</button>
<button type="button" class="btn btn-outline-orange">Orange</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-link">Link</button>`,
  outlineRounded: `<button type="button" class="btn btn-outline-primary rounded-pill">Primary</button>
<button type="button" class="btn btn-outline-secondary rounded-pill">Secondary</button>
<button type="button" class="btn btn-outline-success rounded-pill">Success</button>
<button type="button" class="btn btn-outline-info rounded-pill">Info</button>
<button type="button" class="btn btn-outline-warning rounded-pill">Warning</button>
<button type="button" class="btn btn-outline-danger rounded-pill">Danger</button>
<button type="button" class="btn btn-outline-dark rounded-pill">Dark</button>
<button type="button" class="btn btn-outline-purple rounded-pill">Purple</button>
<button type="button" class="btn btn-outline-pink rounded-pill">Pink</button>
<button type="button" class="btn btn-outline-orange rounded-pill">Orange</button>
<button type="button" class="btn btn-outline-light rounded-pill">Light</button>
<button type="button" class="btn btn-link rounded-pill">Link</button>`,
  soft: `<button type="button" class="btn btn-soft-primary">Primary</button>
<button type="button" class="btn btn-soft-secondary">Secondary</button>
<button type="button" class="btn btn-soft-success">Success</button>
<button type="button" class="btn btn-soft-info">Info</button>
<button type="button" class="btn btn-soft-warning">Warning</button>
<button type="button" class="btn btn-soft-danger">Danger</button>
<button type="button" class="btn btn-soft-dark">Dark</button>
<button type="button" class="btn btn-soft-purple">Purple</button>
<button type="button" class="btn btn-soft-pink">Pink</button>
<button type="button" class="btn btn-soft-orange">Orange</button>
<button type="button" class="btn btn-soft-light">Light</button>
<button type="button" class="btn btn-soft-link">Link</button>`,
  softRounded: `<button type="button" class="btn btn-soft-primary rounded-pill">Primary</button>
<button type="button" class="btn btn-soft-secondary rounded-pill">Secondary</button>
<button type="button" class="btn btn-soft-success rounded-pill">Success</button>
<button type="button" class="btn btn-soft-info rounded-pill">Info</button>
<button type="button" class="btn btn-soft-warning rounded-pill">Warning</button>
<button type="button" class="btn btn-soft-danger rounded-pill">Danger</button>
<button type="button" class="btn btn-soft-dark rounded-pill">Dark</button>
<button type="button" class="btn btn-soft-purple rounded-pill">Purple</button>
<button type="button" class="btn btn-soft-pink rounded-pill">Pink</button>
<button type="button" class="btn btn-soft-orange rounded-pill">Orange</button>
<button type="button" class="btn btn-soft-light rounded-pill">Light</button>
<button type="button" class="btn btn-soft-link rounded-pill">Link</button>`,
  width: `<button type="button" class="btn btn-primary btn-width-xs">Width xs</button>
<button type="button" class="btn btn-secondary btn-width-sm">Width sm</button>
<button type="button" class="btn btn-success btn-width-md">Width md</button>
<button type="button" class="btn btn-info btn-width-lg">Width lg</button>
<button type="button" class="btn btn-warning btn-width-xl">Width xl</button>`,
  sizes: `<button type="button" class="btn btn-success btn-sm">Small</button>
<button type="button" class="btn btn-primary">Medium</button>
<button type="button" class="btn btn-danger btn-lg">Large</button>`,
  disabled: `<button type="button" class="btn btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-success" disabled>Success</button>
<button type="button" class="btn btn-info" disabled>Info</button>
<button type="button" class="btn btn-warning" disabled>Warning</button>`,
  icons: `<!-- Icon Button -->
<button type="button" class="btn btn-primary">
    <i class="bx bx-heart"></i>
</button>
<button type="button" class="btn btn-secondary">
    <i class="bx bx-user-voice"></i>
</button>
<button type="button" class="btn btn-success">
    <i class="bx bx-check-double"></i>
</button>
<button type="button" class="btn btn-info">
    <i class="bx bx-cloud me-1"></i>Cloude Hosting
</button>
<button type="button" class="btn btn-warning">
    <i class="bx bx-info-circle me-1"></i>Warning
</button>`,
  groups: `<!-- btn-group horizontal -->
<div class="btn-group mb-1 me-1">
    <button type="button" class="btn btn-light">Left</button>
    <button type="button" class="btn btn-light">Middle</button>
    <button type="button" class="btn btn-light">Right</button>
</div>
<div class="btn-group mb-1 me-1">
    <button type="button" class="btn btn-light">1</button>
    <button type="button" class="btn btn-light">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-light">4</button>
</div>
<div class="btn-group mb-1 me-1">
    <button type="button" class="btn btn-light">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-light">7</button>
    <button id="dropdown" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown">
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
    </ul>
</div>

<!-- btn-group vertical -->
<div class="btn-group-vertical me-4">
    <button type="button" class="btn btn-light">Top</button>
    <button type="button" class="btn btn-light">Middle</button>
    <button type="button" class="btn btn-light">Bottom</button>
</div>
<div class="btn-group-vertical">
    <button type="button" class="btn btn-light">Button 1</button>
    <button type="button" class="btn btn-light">Button 2</button>
    <button id="verticalDropdown" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Button 3
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="verticalDropdown">
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
    </ul>
</div>`,
  blocks: `<div class="d-grid gap-2">
  <button type="button" class="btn btn-danger">Block Button</button>
  <button type="button" class="btn btn-secondary">Block Button</button>
  <button type="button" class="btn btn-light">Block Button</button>
</div>`,
});

function setSectionRef(id, el) {
  if (el) sectionEls[id] = el;
}

function scrollToSection(id) {
  activeSection.value = id;
  const target = sectionEls[id];
  if (!target) return;

  if (scrollHost && scrollHost !== window) {
    const hostRect = scrollHost.getBoundingClientRect();
    const targetTop =
      target.getBoundingClientRect().top -
      hostRect.top +
      scrollHost.scrollTop -
      96;
    scrollHost.scrollTo({ top: targetTop, behavior: "smooth" });
    return;
  }

  const top = window.scrollY + target.getBoundingClientRect().top - 110;
  window.scrollTo({ top, behavior: "smooth" });
}

function cap(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function labelFor(id) {
  return copied.value === id ? "Copied!" : "Copy code";
}

async function copyCode(id) {
  await navigator.clipboard.writeText(codes[id]);
  copied.value = id;
  window.setTimeout(() => {
    copied.value = "";
  }, 1200);
}

function updateActiveSection() {
  const ids = tocItems.map((item) => item.id);
  if (!ids.length) return;

  let current = ids[0];

  if (scrollHost && scrollHost !== window) {
    const hostRect = scrollHost.getBoundingClientRect();
    const scanLine = 120;

    ids.forEach((id) => {
      const el = sectionEls[id];
      if (!el) return;
      const top = el.getBoundingClientRect().top - hostRect.top;
      if (top <= scanLine) current = id;
    });
  } else {
    const scanLine = 160;
    ids.forEach((id) => {
      const el = sectionEls[id];
      if (!el) return;
      if (el.getBoundingClientRect().top <= scanLine) current = id;
    });
  }

  activeSection.value = current;
}

onMounted(() => {
  scrollHost = document.querySelector(".main-content") || window;

  if (scrollHost && scrollHost !== window) {
    scrollHost.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
  } else {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
  }

  window.addEventListener("resize", updateActiveSection, { passive: true });
  window.setTimeout(updateActiveSection, 80);
});

onBeforeUnmount(() => {
  if (scrollHost && scrollHost !== window) {
    scrollHost.removeEventListener("scroll", updateActiveSection);
  } else {
    window.removeEventListener("scroll", updateActiveSection);
  }
  window.removeEventListener("resize", updateActiveSection);
});
</script>

<style scoped>
.buttons-page {
  max-width: 1320px;
}

.page-heading {
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--text-primary);
}

.page-subtitle {
  font-size: 0.84rem;
  color: var(--text-muted);
}

.showcase-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 18px;
  overflow: hidden;
  scroll-margin-top: 110px;
}

.showcase-head {
  padding: 10px 14px;
  border-bottom: 1px solid var(--border-strong);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.showcase-head h6 {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 600;
}

.showcase-body {
  padding: 14px;
}

.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.62rem;
  margin-bottom: 12px;
}

.btn-copy {
  --bs-btn-color: var(--color-success);
  --bs-btn-border-color: var(--color-success);
  --bs-btn-hover-color: var(--text-inverse);
  --bs-btn-hover-bg: var(--color-success);
  --bs-btn-hover-border-color: var(--color-success);
  font-size: 0.73rem;
  border-radius: 3px;
  padding: 0.24rem 0.5rem;
}

.code-box {
  margin: 0;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--border-strong);
  background: var(--bg-input);
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.5;
  overflow: auto;
}

.toc-card {
  background: var(--bg-hover);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 10px 8px;
  max-height: none;
  overflow: visible;
}

.toc-fixed {
  height: auto;
}

.toc-list {
  list-style: none;
  padding: 0;
}

.toc-link {
  border: 0;
  background: transparent;
  width: 100%;
  text-align: left;
  color: #5f738f;
  font-size: 0.86rem;
  font-weight: 500;
  letter-spacing: 0.1px;
  padding: 7px 10px;
  margin-bottom: 2px;
  border-radius: 6px;
}

.toc-link.active {
  color: #f46a2f;
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 1.5px;
}

:deep(.btn) {
  --bs-btn-padding-y: 0.72rem;
  --bs-btn-padding-x: 1.45rem;
  --bs-btn-font-size: 1.08rem;
  --bs-btn-border-radius: 0.4rem;
  --bs-btn-font-weight: 600;
}

:deep(.btn-sm) {
  --bs-btn-padding-y: 0.45rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 0.9rem;
}

:deep(.btn-lg) {
  --bs-btn-padding-y: 0.82rem;
  --bs-btn-padding-x: 1.65rem;
  --bs-btn-font-size: 1.2rem;
}

:deep(.btn-width-xs) {
  min-width: 78px;
}
:deep(.btn-width-sm) {
  min-width: 106px;
}
:deep(.btn-width-md) {
  min-width: 136px;
}
:deep(.btn-width-lg) {
  min-width: 170px;
}
:deep(.btn-width-xl) {
  min-width: 210px;
}

:deep(.btn-purple) {
  --bs-btn-color: #fff;
  --bs-btn-bg: #7a6fef;
  --bs-btn-border-color: #7a6fef;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #6a5fe8;
  --bs-btn-hover-border-color: #6a5fe8;
}

:deep(.btn-pink) {
  --bs-btn-color: #fff;
  --bs-btn-bg: #f06292;
  --bs-btn-border-color: #f06292;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #ea4f86;
  --bs-btn-hover-border-color: #ea4f86;
}

:deep(.btn-orange) {
  --bs-btn-color: #fff;
  --bs-btn-bg: #f7b84b;
  --bs-btn-border-color: #f7b84b;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #f5ae33;
  --bs-btn-hover-border-color: #f5ae33;
}

:deep(.btn-outline-purple) {
  --bs-btn-color: #7a6fef;
  --bs-btn-border-color: #7a6fef;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #7a6fef;
  --bs-btn-hover-border-color: #7a6fef;
}

:deep(.btn-outline-pink) {
  --bs-btn-color: #f06292;
  --bs-btn-border-color: #f06292;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #f06292;
  --bs-btn-hover-border-color: #f06292;
}

:deep(.btn-outline-orange) {
  --bs-btn-color: #f7b84b;
  --bs-btn-border-color: #f7b84b;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #f7b84b;
  --bs-btn-hover-border-color: #f7b84b;
}

:deep(.btn-soft-primary) {
  color: #556ee6;
  background: rgba(85, 110, 230, 0.16);
  border-color: transparent;
}
:deep(.btn-soft-secondary) {
  color: #74788d;
  background: rgba(116, 120, 141, 0.16);
  border-color: transparent;
}
:deep(.btn-soft-success) {
  color: #34c38f;
  background: rgba(52, 195, 143, 0.16);
  border-color: transparent;
}
:deep(.btn-soft-info) {
  color: #50a5f1;
  background: rgba(80, 165, 241, 0.16);
  border-color: transparent;
}
:deep(.btn-soft-warning) {
  color: #f7b84b;
  background: rgba(247, 184, 75, 0.2);
  border-color: transparent;
}
:deep(.btn-soft-danger) {
  color: #f46a6a;
  background: rgba(244, 106, 106, 0.18);
  border-color: transparent;
}
:deep(.btn-soft-dark) {
  color: #495057;
  background: rgba(73, 80, 87, 0.15);
  border-color: transparent;
}
:deep(.btn-soft-purple) {
  color: #7a6fef;
  background: rgba(122, 111, 239, 0.16);
  border-color: transparent;
}
:deep(.btn-soft-pink) {
  color: #f06292;
  background: rgba(240, 98, 146, 0.18);
  border-color: transparent;
}
:deep(.btn-soft-orange) {
  color: #f39c38;
  background: rgba(243, 156, 56, 0.18);
  border-color: transparent;
}
:deep(.btn-soft-light) {
  color: #6c757d;
  background: #f4f6f9;
  border-color: transparent;
}
:deep(.btn-soft-link) {
  color: #556ee6;
  background: rgba(85, 110, 230, 0.12);
  border-color: transparent;
  text-decoration: underline;
}

:deep(.btn-soft-primary.rounded-pill),
:deep(.btn-soft-secondary.rounded-pill),
:deep(.btn-soft-success.rounded-pill),
:deep(.btn-soft-info.rounded-pill),
:deep(.btn-soft-warning.rounded-pill),
:deep(.btn-soft-danger.rounded-pill),
:deep(.btn-soft-dark.rounded-pill),
:deep(.btn-soft-purple.rounded-pill),
:deep(.btn-soft-pink.rounded-pill),
:deep(.btn-soft-orange.rounded-pill),
:deep(.btn-soft-light.rounded-pill),
:deep(.btn-soft-link.rounded-pill) {
  border-radius: 50rem !important;
}

@media (max-width: 991.98px) {
  .toc-card {
    position: static !important;
    height: auto;
  }

  .toc-link {
    font-size: 0.95rem;
  }
}

@media (min-width: 992px) {
  .toc-fixed {
    position: fixed;
    top: 96px;
    right: 14px;
    width: clamp(220px, 18vw, 270px);
    height: auto;
    max-height: none;
    z-index: 12;
  }
}
</style>
