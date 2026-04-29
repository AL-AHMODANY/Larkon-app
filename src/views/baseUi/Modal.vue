<template>
  <div class="modal-page">

    <!-- Page Header -->
    <div class="page-header">
      <h1 class="page-title">MODAL</h1>
    </div>

    <!-- Layout: content + right TOC -->
    <div class="page-layout">
      <div class="page-content">

        <!-- ══════════════════════════════════
             1. DEFAULT MODELS
        ══════════════════════════════════ -->
        <section class="demo-section" id="default-example">
          <h2 class="section-title">Default Models</h2>
          <p class="section-desc">
            Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
          </p>
          <button class="btn btn-primary" @click="openModal('default')">Launch demo modal</button>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('default')">{{ copied === 'default' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.default }}</code></pre>
          </div>
        </section>

        <!-- ══════════════════════════════════
             2. STATIC BACKDROP
        ══════════════════════════════════ -->
        <section class="demo-section" id="static-backdrop">
          <h2 class="section-title">Static Backdrop</h2>
          <p class="section-desc">
            When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.
          </p>
          <button class="btn btn-primary" @click="openModal('static')">Launch static backdrop modal</button>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('static')">{{ copied === 'static' ? 'Copied!' : 'Free' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.static }}</code></pre>
          </div>
        </section>

        <!-- ══════════════════════════════════
             3. SCROLLING LONG CONTENT
        ══════════════════════════════════ -->
        <section class="demo-section" id="scrolling-long-content">
          <h2 class="section-title">Scrolling Long Content</h2>
          <p class="section-desc">
            When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
          </p>
          <button class="btn btn-primary" @click="openModal('scrolling')">Launch demo modal</button>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('scrolling')">{{ copied === 'scrolling' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.scrolling }}</code></pre>
          </div>

          <p class="section-desc mt-3">
            You can also create a scrollable modal that allows scroll the modal body by adding
            <code class="inline-code">modal-dialog-scrollable</code> to <code class="inline-code">.modal-dialog</code>.
          </p>
          <button class="btn btn-primary" @click="openModal('scrollable')">Launch demo modal</button>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('scrollable')">{{ copied === 'scrollable' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.scrollable }}</code></pre>
          </div>
        </section>

        <!-- ══════════════════════════════════
             4. MODAL POSITION
        ══════════════════════════════════ -->
        <section class="demo-section" id="toggle-modals">
          <h2 class="section-title">Modal Position</h2>
          <p class="section-desc">
            Add <code class="inline-code">.modal-dialog-centered</code> to <code class="inline-code">.modal-dialog</code> to vertically center the modal.
          </p>
          <div class="btn-row">
            <button class="btn btn-primary" @click="openModal('centered')">Vertically centered modal</button>
            <button class="btn btn-secondary" @click="openModal('centeredScrollable')">Vertically centered scrollable modal</button>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('centered')">{{ copied === 'centered' ? 'Copied!' : 'Free' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.centered }}</code></pre>
          </div>

          <p class="section-desc mt-3">
            Specify the position for the modal. You can display modal at top /bottom of page by specifying classes
            <code class="inline-code">modal-top</code> and <code class="inline-code">modal-bottom</code> respectively.
          </p>
          <div class="btn-row">
            <button class="btn btn-success" @click="openModal('top')">Top Modal</button>
            <button class="btn btn-danger" @click="openModal('bottom')">Bottom Modal</button>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('topbottom')">{{ copied === 'topbottom' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.topbottom }}</code></pre>
          </div>
        </section>

        <!-- ══════════════════════════════════
             5. TOGGLE BETWEEN MODALS
        ══════════════════════════════════ -->
        <section class="demo-section" id="optional-sizes">
          <h2 class="section-title">Toggle Between Modals</h2>
          <p class="section-desc">
            Toggle between multiple modals with some clever placement of the <code class="inline-code">data-bs-target</code> and <code class="inline-code">data-bs-toggle</code> attributes. For example, you could toggle a password reset modal form within an already open sign in modal. <strong>Please note multiple modals cannot be open at the same time</strong> — this method simply toggles between two separate modals.
          </p>
          <button class="btn btn-primary" @click="openModal('toggle1')">Open first modal</button>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('toggle')">{{ copied === 'toggle' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.toggle }}</code></pre>
          </div>
        </section>

        <!-- ══════════════════════════════════
             6. OPTIONAL SIZES
        ══════════════════════════════════ -->
        <section class="demo-section" id="fullscreen-modal">
          <h2 class="section-title">Optional Sizes</h2>
          <p class="section-desc">
            Modals have three optional sizes, available via modifier classes to be placed on a
            <code class="inline-code">.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
          </p>
          <div class="btn-row flex-wrap">
            <button class="btn btn-primary" @click="openModal('xlarge')">Extra large modal</button>
            <button class="btn btn-primary" @click="openModal('large')">Large modal</button>
            <button class="btn btn-primary" @click="openModal('small')">Small modal</button>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('sizes')">{{ copied === 'sizes' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.sizes }}</code></pre>
          </div>
        </section>

        <!-- ══════════════════════════════════
             7. FULLSCREEN MODAL
        ══════════════════════════════════ -->
        <section class="demo-section" id="modal-based-alerts">
          <h2 class="section-title">Fullscreen Modal</h2>
          <p class="section-desc">
            Another override is the option to pop up a modal that covers the user viewport, available via modifier classes to be placed on a
            <code class="inline-code">.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
          </p>
          <div class="btn-row flex-wrap">
            <button class="btn btn-primary" @click="openModal('fullscreen')">Full screen</button>
            <button class="btn btn-primary" @click="openModal('fullscreenSm')">Full screen below sm</button>
            <button class="btn btn-primary" @click="openModal('fullscreenMd')">Full screen below md</button>
            <button class="btn btn-primary" @click="openModal('fullscreenLg')">Full screen below lg</button>
            <button class="btn btn-primary" @click="openModal('fullscreenXl')">Full screen below xl</button>
            <button class="btn btn-primary" @click="openModal('fullscreenXxl')">Full screen below xxl</button>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('fullscreen')">{{ copied === 'fullscreen' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.fullscreen }}</code></pre>
          </div>
        </section>

        <!-- ══════════════════════════════════
             8. MODAL BASED ALERTS
        ══════════════════════════════════ -->
        <section class="demo-section" id="custom-alerts">
          <h2 class="section-title">Modal Based Alerts</h2>
          <p class="section-desc">
            Modal alerts are customized alert modals available via modifier classes to be placed on a
            <code class="inline-code">.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
          </p>
          <div class="btn-row flex-wrap">
            <button class="btn btn-primary"   @click="openModal('alertPrimary')">Primary Alert</button>
            <button class="btn btn-secondary" @click="openModal('alertSecondary')">Secondary Alert</button>
            <button class="btn btn-success"   @click="openModal('alertSuccess')">Success Alert</button>
            <button class="btn btn-danger"    @click="openModal('alertDanger')">Info Alert</button>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy" @click="copyCode('alerts')">{{ copied === 'alerts' ? 'Copied!' : 'Copy' }}</button>
            </div>
            <pre class="code-pre"><code>{{ codeSnippets.alerts }}</code></pre>
          </div>
        </section>

      </div>

      <!-- Right TOC sidebar -->
      <aside class="toc-sidebar">
        <nav class="toc-nav">
          <a
            v-for="item in tocItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="toc-link"
            :class="{ active: activeToc === item.id }"
            @click.prevent="scrollToSection(item.id)"
          >{{ item.label }}</a>
        </nav>
      </aside>
    </div>

    <!-- ══════════════════════════════════════════════════════════
         MODAL BACKDROP
    ══════════════════════════════════════════════════════════ -->
    <transition name="backdrop-fade">
      <div
        v-if="activeModal"
        class="modal-backdrop"
        @click="handleBackdropClick"
      ></div>
    </transition>

    <!-- ══════════════════════════════════════════════════════════
         MODAL SHELL — all modals render here, class drives behavior
    ══════════════════════════════════════════════════════════ -->
    <transition name="modal-anim">
      <div
        v-if="activeModal"
        class="modal-shell"
        :class="modalShellClass"
        @click.self="handleBackdropClick"
      >
        <div class="modal-dialog" :class="modalDialogClass">
          <div class="modal-content">

            <!-- Header -->
            <div class="modal-header" :class="modalHeaderClass">
              <h5 class="modal-title">{{ currentConfig.title }}</h5>
              <button class="modal-x" @click="closeModal" aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="modal-body" :class="{ 'modal-body-scroll': currentConfig.scrollableBody }">
              <div v-if="currentConfig.alertType" class="alert-modal-body">
                <div class="alert-icon" :class="`alert-icon--${currentConfig.alertType}`">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4m0 4h.01"/>
                  </svg>
                </div>
                <h4 class="alert-modal-title">{{ currentConfig.alertTitle }}</h4>
                <p class="alert-modal-msg">{{ currentConfig.body }}</p>
              </div>
              <div v-else>
                <p v-for="(para, i) in currentConfig.bodyParagraphs" :key="i">{{ para }}</p>
              </div>
            </div>

            <!-- Footer -->
            <div class="modal-footer" v-if="!currentConfig.hideFooter">
              <!-- Toggle between modals -->
              <template v-if="currentConfig.nextModal">
                <button class="btn btn-link" @click="openModal(currentConfig.nextModal)">
                  {{ currentConfig.nextLabel || 'Open another modal' }}
                </button>
              </template>
              <button class="btn btn-light" @click="closeModal">Close</button>
              <button class="btn btn-primary" @click="closeModal">Save changes</button>
            </div>
            <div class="modal-footer" v-else-if="currentConfig.alertType">
              <button class="btn btn-light" @click="closeModal">Cancel</button>
              <button class="btn" :class="`btn-${currentConfig.alertType}`" @click="closeModal">Confirm</button>
            </div>

          </div>
        </div>
      </div>
    </transition>
    <PageFooter />

  </div>
</template>

<script setup>
import PageFooter from '../../components/layout/Footer.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ─── State ───────────────────────────────────────────────────────
const activeModal = ref(null)
const copied      = ref(null)
const activeToc   = ref('default-example')

// ─── TOC items ───────────────────────────────────────────────────
const tocItems = [
  { id: 'default-example',       label: 'Default Example' },
  { id: 'static-backdrop',       label: 'Static Backdrop' },
  { id: 'scrolling-long-content',label: 'Scrolling Long Content' },
  { id: 'toggle-modals',         label: 'Toggle between Modals' },
  { id: 'optional-sizes',        label: 'Optional Sizes' },
  { id: 'fullscreen-modal',      label: 'Fullscreen Modal' },
  { id: 'modal-based-alerts',    label: 'Modal Based Alerts' },
  { id: 'custom-alerts',         label: 'Custom Modal Alerts' },
]

// ─── Lorem text helpers ───────────────────────────────────────────
const shortBody = [
  'Woohoo, you\'re reading this text in a modal! This is just a demo of how modals work. Click the close button to dismiss this modal.',
]
const longBody = Array(12).fill(
  'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
)

// ─── Modal configs ────────────────────────────────────────────────
const modalConfigs = {
  default:             { title: 'Modal title',              bodyParagraphs: shortBody },
  static:              { title: 'Modal title',              bodyParagraphs: shortBody, staticBackdrop: true },
  scrolling:           { title: 'Modal title',              bodyParagraphs: longBody,  scrollPage: true },
  scrollable:          { title: 'Modal title',              bodyParagraphs: longBody,  scrollableBody: true },
  centered:            { title: 'Modal title',              bodyParagraphs: shortBody, centered: true },
  centeredScrollable:  { title: 'Modal title',              bodyParagraphs: longBody,  centered: true, scrollableBody: true },
  top:                 { title: 'Top Modal',                bodyParagraphs: shortBody, position: 'top' },
  bottom:              { title: 'Bottom Modal',             bodyParagraphs: shortBody, position: 'bottom' },
  toggle1:             { title: 'First Modal',              bodyParagraphs: ['Open the second modal using the button below.'], nextModal: 'toggle2', nextLabel: 'Open second modal' },
  toggle2:             { title: 'Second Modal',             bodyParagraphs: ['Hide this modal and show the first with the button below.'], nextModal: 'toggle1', nextLabel: 'Back to first' },
  xlarge:              { title: 'Extra large modal',        bodyParagraphs: shortBody, size: 'xl' },
  large:               { title: 'Large modal',              bodyParagraphs: shortBody, size: 'lg' },
  small:               { title: 'Small modal',              bodyParagraphs: shortBody, size: 'sm' },
  fullscreen:          { title: 'Full screen modal',        bodyParagraphs: longBody,  fullscreen: true },
  fullscreenSm:        { title: 'Full screen below sm',     bodyParagraphs: shortBody, fullscreen: 'sm' },
  fullscreenMd:        { title: 'Full screen below md',     bodyParagraphs: shortBody, fullscreen: 'md' },
  fullscreenLg:        { title: 'Full screen below lg',     bodyParagraphs: shortBody, fullscreen: 'lg' },
  fullscreenXl:        { title: 'Full screen below xl',     bodyParagraphs: shortBody, fullscreen: 'xl' },
  fullscreenXxl:       { title: 'Full screen below xxl',    bodyParagraphs: shortBody, fullscreen: 'xxl' },
  alertPrimary:        { title: 'Primary Alert',            alertType: 'primary',   alertTitle: 'Are you sure?', body: 'This action cannot be undone. Please confirm to proceed.', hideFooter: true },
  alertSecondary:      { title: 'Secondary Alert',          alertType: 'secondary', alertTitle: 'Please note',   body: 'This is a secondary alert message with important information.', hideFooter: true },
  alertSuccess:        { title: 'Success Alert',            alertType: 'success',   alertTitle: 'Great job!',    body: 'Your action was completed successfully. Everything is in order.', hideFooter: true },
  alertDanger:         { title: 'Info Alert',               alertType: 'danger',    alertTitle: 'Heads up!',     body: 'Something requires your attention. Please review before continuing.', hideFooter: true },
}

const currentConfig = computed(() => modalConfigs[activeModal.value] || {})

// ─── Modal class computation ──────────────────────────────────────
const modalShellClass = computed(() => {
  const cfg = currentConfig.value
  const classes = []
  if (cfg.position === 'top')    classes.push('modal-pos-top')
  if (cfg.position === 'bottom') classes.push('modal-pos-bottom')
  return classes
})

const modalDialogClass = computed(() => {
  const cfg = currentConfig.value
  const classes = []
  if (cfg.centered)                classes.push('modal-centered')
  if (cfg.scrollableBody)          classes.push('modal-dialog-scrollable')
  if (cfg.size === 'xl')           classes.push('modal-xl')
  if (cfg.size === 'lg')           classes.push('modal-lg')
  if (cfg.size === 'sm')           classes.push('modal-sm')
  if (cfg.fullscreen === true)     classes.push('modal-fullscreen')
  if (cfg.fullscreen === 'sm')     classes.push('modal-fullscreen-sm')
  if (cfg.fullscreen === 'md')     classes.push('modal-fullscreen-md')
  if (cfg.fullscreen === 'lg')     classes.push('modal-fullscreen-lg')
  if (cfg.fullscreen === 'xl')     classes.push('modal-fullscreen-xl')
  if (cfg.fullscreen === 'xxl')    classes.push('modal-fullscreen-xxl')
  return classes
})

const modalHeaderClass = computed(() => {
  const t = currentConfig.value.alertType
  if (!t) return ''
  return `modal-header--${t}`
})

// ─── Open / Close ─────────────────────────────────────────────────
const openModal = (name) => { activeModal.value = name }
const closeModal = () => { activeModal.value = null }
const handleBackdropClick = () => {
  if (currentConfig.value.staticBackdrop) {
    // shake animation
    const el = document.querySelector('.modal-dialog')
    if (el) { el.classList.add('modal-shake'); setTimeout(() => el.classList.remove('modal-shake'), 400) }
    return
  }
  closeModal()
}

// ─── Copy code ────────────────────────────────────────────────────
const copyCode = (key) => {
  navigator.clipboard.writeText(codeSnippets[key] || '').then(() => {
    copied.value = key
    setTimeout(() => { copied.value = null }, 2000)
  })
}

// ─── TOC scroll spy ──────────────────────────────────────────────
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  activeToc.value = id
}

const onScroll = () => {
  for (const item of [...tocItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 120) {
      activeToc.value = item.id
      break
    }
  }
}

// ─── ESC to close ─────────────────────────────────────────────────
const onKeydown = (e) => { if (e.key === 'Escape') closeModal() }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})

// ─── Code Snippets ────────────────────────────────────────────────
const codeSnippets = {
  default: `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,

  static: `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>`,

  scrolling: `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>`,

  scrollable: `<!-- Modal with scrollable body -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">...</div>
  </div>
</div>`,

  centered: `<!-- Vertically centered modal -->
<div class="modal fade" id="exampleModalCentered" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">...</div>
  </div>
</div>

<!-- Vertically centered scrollable modal -->
<div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">...</div>
  </div>
</div>`,

  topbottom: `<!-- Top Modal -->
<div class="modal fade modal-top" id="topModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>

<!-- Bottom Modal -->
<div class="modal fade modal-bottom" id="bottomModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>`,

  toggle: `<!-- First Modal trigger -->
<a class="btn btn-primary" data-bs-toggle="modal" href="#firstModal">Open first modal</a>

<!-- First Modal -->
<div class="modal fade" id="firstModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">First Modal</h5>
      </div>
      <div class="modal-body">
        <div id="exampleModalToggle" aria-hidden="true" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,

  sizes: `<!-- Extra large modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">Extra large modal</button>
<!-- Large modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">Large modal</button>
<!-- Small modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#smallModal">Small modal</button>

<div class="modal-dialog modal-xl">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-sm">...</div>`,

  fullscreen: `<!-- Always fullscreen -->
<div class="modal-dialog modal-fullscreen">...</div>
<!-- Fullscreen below sm -->
<div class="modal-dialog modal-fullscreen-sm-down">...</div>
<!-- Fullscreen below md -->
<div class="modal-dialog modal-fullscreen-md-down">...</div>
<!-- Fullscreen below lg -->
<div class="modal-dialog modal-fullscreen-lg-down">...</div>
<!-- Fullscreen below xl -->
<div class="modal-dialog modal-fullscreen-xl-down">...</div>
<!-- Fullscreen below xxl -->
<div class="modal-dialog modal-fullscreen-xxl-down">...</div>`,

  alerts: `<!-- Primary Alert Modal -->
<div class="modal fade" id="primaryAlertModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header modal-colored-header bg-primary">
        <h5 class="modal-title text-white">Primary Alert Modal Header</h5>
      </div>
      <div class="modal-body text-center p-4">...</div>
    </div>
  </div>
</div>`,
}
</script>

<style scoped>
/* ══════════════════════════════════════════
   PAGE SHELL
══════════════════════════════════════════ */
.modal-page {
  font-family: 'Nunito', 'Segoe UI', sans-serif;
  background: #f5f6fa;
  min-height: 100vh;
  color: #343a40;
}

.page-header {
  padding: 22px 28px 0;
}
.page-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #343a40;
  letter-spacing: 0.06em;
  margin: 0 0 20px;
  text-transform: uppercase;
}

/* ── Two-column layout ── */
.page-layout {
  display: flex;
  gap: 0;
  align-items: flex-start;
  padding: 0 28px 60px;
}

.page-content {
  flex: 1;
  min-width: 0;
  padding-right: 24px;
}

/* ── Right TOC ── */
.toc-sidebar {
  width: 210px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  padding-top: 4px;
}
.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.toc-link {
  display: block;
  padding: 6px 12px;
  font-size: 0.8rem;
  color: #6c757d;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.15s, color 0.15s;
  border-left: 2px solid transparent;
}
.toc-link:hover { background: #ede9fe; color: #f97316; }
.toc-link.active { color: #f97316; border-left-color: #f97316; background: #fff7f0; font-weight: 600; }

/* ══════════════════════════════════════════
   SECTIONS
══════════════════════════════════════════ */
.demo-section {
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #343a40;
  margin: 0 0 8px;
}
.section-desc {
  font-size: 0.875rem;
  color: #6c757d;
  line-height: 1.65;
  margin: 0 0 16px;
}
.section-desc.mt-3 { margin-top: 20px; }

.inline-code {
  background: #f3f4f6;
  color: #e53e3e;
  font-family: 'Fira Code', monospace;
  font-size: 0.8em;
  padding: 1px 5px;
  border-radius: 4px;
}

/* ── Code block ── */
.code-block {
  background: #1e2a3a;
  border-radius: 10px;
  margin-top: 16px;
  overflow: hidden;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #2d3a4a;
}
.code-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.code-copy {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  color: #94a3b8;
  font-size: 0.72rem;
  padding: 3px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.code-copy:hover { color: #f97316; border-color: #f97316; }
.code-pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-size: 0.78rem;
  line-height: 1.6;
  color: #a5d6ff;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  white-space: pre;
  max-height: 280px;
}

/* ── Button row ── */
.btn-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 0;
}

/* ══════════════════════════════════════════
   BUTTONS
══════════════════════════════════════════ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  white-space: nowrap;
  text-decoration: none;
}
.btn-primary   { background: #f97316; color: #fff; }
.btn-primary:hover   { background: #ea580c; box-shadow: 0 4px 14px rgba(249,115,22,0.35); }
.btn-secondary { background: #6c757d; color: #fff; }
.btn-secondary:hover { background: #5a6268; }
.btn-success   { background: #10b981; color: #fff; }
.btn-success:hover   { background: #059669; }
.btn-danger    { background: #ef4444; color: #fff; }
.btn-danger:hover    { background: #dc2626; }
.btn-light     { background: #f3f4f6; color: #374151; border: 1px solid #d1d5db; }
.btn-light:hover     { background: #e5e7eb; }
.btn-link      { background: transparent; color: #f97316; text-decoration: underline; padding: 8px 4px; }

/* ══════════════════════════════════════════
   BACKDROP
══════════════════════════════════════════ */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

/* ══════════════════════════════════════════
   MODAL SHELL
══════════════════════════════════════════ */
.modal-shell {
  position: fixed;
  inset: 0;
  z-index: 1050;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  padding: 28px 12px;
}

/* Position variants */
.modal-pos-top    { align-items: flex-start; padding-top: 0; }
.modal-pos-bottom { align-items: flex-end; padding-bottom: 0; }

/* ── Dialog ── */
.modal-dialog {
  background: transparent;
  width: 100%;
  max-width: 500px;
  position: relative;
}
.modal-dialog.modal-centered { margin: auto; align-self: center; }
.modal-dialog.modal-xl  { max-width: 1140px; }
.modal-dialog.modal-lg  { max-width: 800px; }
.modal-dialog.modal-sm  { max-width: 300px; }

/* Fullscreen */
.modal-dialog.modal-fullscreen {
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 0;
}
.modal-dialog.modal-fullscreen .modal-content {
  height: 100%;
  border-radius: 0;
}

@media (max-width: 576px) {
  .modal-dialog.modal-fullscreen-sm  { max-width: 100%; width: 100%; margin: 0; }
  .modal-dialog.modal-fullscreen-sm .modal-content { border-radius: 0; }
}
@media (max-width: 768px) {
  .modal-dialog.modal-fullscreen-md  { max-width: 100%; width: 100%; margin: 0; }
  .modal-dialog.modal-fullscreen-md .modal-content { border-radius: 0; }
}
@media (max-width: 992px) {
  .modal-dialog.modal-fullscreen-lg  { max-width: 100%; width: 100%; margin: 0; }
  .modal-dialog.modal-fullscreen-lg .modal-content { border-radius: 0; }
}
@media (max-width: 1200px) {
  .modal-dialog.modal-fullscreen-xl  { max-width: 100%; width: 100%; margin: 0; }
  .modal-dialog.modal-fullscreen-xl .modal-content { border-radius: 0; }
}
@media (max-width: 1400px) {
  .modal-dialog.modal-fullscreen-xxl { max-width: 100%; width: 100%; margin: 0; }
  .modal-dialog.modal-fullscreen-xxl .modal-content { border-radius: 0; }
}

/* Scrollable body dialog */
.modal-dialog.modal-dialog-scrollable {
  max-height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
}
.modal-dialog.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.modal-dialog.modal-dialog-scrollable .modal-body.modal-body-scroll {
  overflow-y: auto;
  flex: 1;
}

/* ── Content ── */
.modal-content {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Header ── */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
}
.modal-header--primary   { background: #f97316; }
.modal-header--secondary { background: #6c757d; }
.modal-header--success   { background: #10b981; }
.modal-header--danger    { background: #ef4444; }
.modal-header--primary .modal-title,
.modal-header--secondary .modal-title,
.modal-header--success .modal-title,
.modal-header--danger .modal-title    { color: #fff; }
.modal-header--primary .modal-x,
.modal-header--secondary .modal-x,
.modal-header--success .modal-x,
.modal-header--danger .modal-x        { color: rgba(255,255,255,0.7); }
.modal-header--primary .modal-x:hover,
.modal-header--secondary .modal-x:hover,
.modal-header--success .modal-x:hover,
.modal-header--danger .modal-x:hover  { color: #fff; background: rgba(255,255,255,0.15); }

.modal-title { font-size: 1rem; font-weight: 700; color: #343a40; margin: 0; }
.modal-x {
  background: none;
  border: none;
  cursor: pointer;
  color: #6c757d;
  border-radius: 6px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.modal-x:hover { background: #f3f4f6; color: #343a40; }

/* ── Body ── */
.modal-body {
  padding: 20px;
  color: #495057;
  font-size: 0.9rem;
  line-height: 1.6;
}
.modal-body p { margin: 0 0 10px; }
.modal-body p:last-child { margin-bottom: 0; }
.modal-body-scroll {
  max-height: 300px;
  overflow-y: auto;
}

/* Alert modal body */
.alert-modal-body { text-align: center; padding: 10px 0; }
.alert-icon {
  width: 64px; height: 64px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px;
}
.alert-icon--primary   { background: #fff7f0; color: #f97316; }
.alert-icon--secondary { background: #f8f9fa; color: #6c757d; }
.alert-icon--success   { background: #ecfdf5; color: #10b981; }
.alert-icon--danger    { background: #fef2f2; color: #ef4444; }
.alert-modal-title { font-size: 1.1rem; font-weight: 700; color: #343a40; margin: 0 0 8px; }
.alert-modal-msg   { font-size: 0.875rem; color: #6c757d; margin: 0 0 20px; }

/* ── Footer ── */
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 20px;
  border-top: 1px solid #e9ecef;
}

/* ── Shake animation (static backdrop) ── */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-8px); }
  40%       { transform: translateX(8px); }
  60%       { transform: translateX(-6px); }
  80%       { transform: translateX(6px); }
}
.modal-shake { animation: shake 0.4s ease; }

/* ══════════════════════════════════════════
   TRANSITIONS
══════════════════════════════════════════ */
.backdrop-fade-enter-active,
.backdrop-fade-leave-active { transition: opacity 0.2s ease; }
.backdrop-fade-enter-from,
.backdrop-fade-leave-to     { opacity: 0; }

.modal-anim-enter-active,
.modal-anim-leave-active { transition: opacity 0.2s ease; }
.modal-anim-enter-from,
.modal-anim-leave-to     { opacity: 0; }
.modal-anim-enter-active .modal-dialog,
.modal-anim-leave-active .modal-dialog { transition: transform 0.25s ease; }
.modal-anim-enter-from .modal-dialog   { transform: translateY(-24px) scale(0.97); }
.modal-anim-leave-to .modal-dialog     { transform: translateY(12px) scale(0.97); }

/* ══════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════ */
@media (max-width: 1024px) {
  .toc-sidebar { display: none; }
  .page-content { padding-right: 0; }
}

@media (max-width: 768px) {
  .page-layout  { padding: 0 16px 40px; }
  .page-header  { padding: 16px 16px 0; }
  .demo-section { padding: 20px; }
}

@media (max-width: 480px) {
  .page-layout  { padding: 0 10px 40px; }
  .demo-section { padding: 16px; border-radius: 8px; }
  .btn { padding: 7px 14px; font-size: 0.8rem; }
  .modal-shell  { padding: 16px 8px; }
  .code-pre { font-size: 0.7rem; }
}

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .modal-page {
  background: var(--bg-body) !important;
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .demo-section {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .toc-link { color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .toc-link:hover,
:global([data-theme="dark"]) .toc-link.active {
  background: var(--accent-muted) !important;
  color: var(--accent) !important;
  border-left-color: var(--accent) !important;
}
:global([data-theme="dark"]) .modal-content {
  background: var(--card-bg) !important;
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .modal-title { color: var(--text-primary) !important; }
:global([data-theme="dark"]) .modal-x:hover { background: var(--app-bg) !important; color: var(--text-primary) !important; }
:global([data-theme="dark"]) .modal-body   { color: var(--text-primary) !important; }
:global([data-theme="dark"]) .alert-modal-title { color: var(--text-primary) !important; }
:global([data-theme="dark"]) .alert-modal-msg   { color: var(--text-secondary) !important; }
:global([data-theme="dark"]) .btn-light { background: var(--app-bg) !important; border-color: var(--border-color) !important; color: var(--text-primary) !important; }
</style>