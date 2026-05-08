<template>
  <div class="badge-page">
    <CdnSection />

    <!-- Page Title -->
    <div class="page-header">
      <h1 class="page-title">BADGE</h1>
    </div>

    <!-- Layout -->
    <div class="page-layout">

      <!-- ══ MAIN CONTENT ══ -->
      <div class="page-content">

        <!-- ─────────────────────────────
             1. HEADING
        ───────────────────────────── -->
        <section class="demo-section" id="heading">
          <h2 class="section-title">Heading</h2>
          <p class="section-desc">
            Provide contextual feedback messages for typical user actions with the handful of available and flexible
            alert messages. Alerts are available for any length of text, as well as an optional dismiss button.
          </p>

          <div class="heading-demo">
            <h1 class="hd hd-1">h1.Example heading <span class="badge bg-primary">New</span></h1>
            <h2 class="hd hd-2">h2.Example heading <span class="badge bg-secondary">New</span></h2>
            <h3 class="hd hd-3">h3.Example heading <span class="badge bg-success">New</span></h3>
            <h4 class="hd hd-4">h4.Example heading <span class="badge bg-info">New</span></h4>
            <h5 class="hd hd-5">h5.Example heading <span class="badge bg-warning">New</span></h5>
            <h6 class="hd hd-6">h6.Example heading <span class="badge bg-danger">New</span></h6>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy-btn" @click="copy('heading')">
                {{ copied === 'heading' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-pre"><code><span class="ct">&lt;h1&gt;</span>h1.Example heading <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-primary"</span><span class="ct">&gt;</span>New<span class="ct">&lt;/span&gt;&lt;/h1&gt;</span>
<span class="ct">&lt;h2&gt;</span>h2.Example heading <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-secondary"</span><span class="ct">&gt;</span>New<span class="ct">&lt;/span&gt;&lt;/h2&gt;</span>
<span class="ct">&lt;h3&gt;</span>h3.Example heading <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-success"</span><span class="ct">&gt;</span>New<span class="ct">&lt;/span&gt;&lt;/h3&gt;</span>
<span class="ct">&lt;h4&gt;</span>h4.Example heading <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-info"</span><span class="ct">&gt;</span>New<span class="ct">&lt;/span&gt;&lt;/h4&gt;</span>
<span class="ct">&lt;h5&gt;</span>h5.Example heading <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-warning"</span><span class="ct">&gt;</span>New<span class="ct">&lt;/span&gt;&lt;/h5&gt;</span>
<span class="ct">&lt;h6&gt;</span>h6.Example heading <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-danger"</span><span class="ct">&gt;</span>New<span class="ct">&lt;/span&gt;&lt;/h6&gt;</span></code></pre>
          </div>
        </section>

        <!-- ─────────────────────────────
             2. DEFAULT & PILL BADGES
        ───────────────────────────── -->
        <section class="demo-section" id="default-pill">
          <h2 class="section-title">Default &amp; Pill Badges</h2>
          <p class="section-desc">
            Use our background utility classes to quickly change the appearance of a badge. And use the
            <code class="ic">.rounded-pill</code> class to make badges more rounded.
          </p>

          <!-- Default row -->
          <div class="badge-row">
            <span v-for="b in badgeColors" :key="b.cls" class="badge" :class="`bg-${b.cls}`">{{ b.label }}</span>
          </div>
          <!-- Pill row -->
          <div class="badge-row mt-2">
            <span v-for="b in badgeColors" :key="b.cls" class="badge rounded-pill" :class="`bg-${b.cls}`">{{ b.label }}</span>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy-btn" @click="copy('default')">
                {{ copied === 'default' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-pre"><code v-for="b in badgeColors" :key="b.cls"><span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-{{ b.cls }} rounded-pill me-1"</span><span class="ct">&gt;</span>{{ b.label }}<span class="ct">&lt;/span&gt;</span>
</code></pre>
          </div>
        </section>

        <!-- ─────────────────────────────
             3. OUTLINE & OUTLINE PILL BADGES
        ───────────────────────────── -->
        <section class="demo-section" id="outline">
          <h2 class="section-title">Outline &amp; Outline Pill Badges</h2>
          <p class="section-desc">
            Using the <code class="ic">.badge-outline-*</code> to quickly create a bordered badges.
          </p>

          <div class="badge-row">
            <span v-for="b in badgeColors" :key="b.cls" class="badge badge-outline" :class="`badge-outline-${b.cls}`">{{ b.label }}</span>
          </div>
          <div class="badge-row mt-2">
            <span v-for="b in badgeColors" :key="b.cls" class="badge badge-outline rounded-pill" :class="`badge-outline-${b.cls}`">{{ b.label }}</span>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy-btn" @click="copy('outline')">
                {{ copied === 'outline' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-pre"><code><span class="cc">&lt;!-- Bootstrap 5 text-bg-* subtle variants --&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge text-bg-primary me-1"</span><span class="ct">&gt;</span>Primary<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge text-bg-secondary me-1"</span><span class="ct">&gt;</span>Secondary<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge text-bg-success me-1"</span><span class="ct">&gt;</span>Success<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge text-bg-danger me-1"</span><span class="ct">&gt;</span>Danger<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge text-bg-warning me-1"</span><span class="ct">&gt;</span>Warning<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge text-bg-info me-1"</span><span class="ct">&gt;</span>Info<span class="ct">&lt;/span&gt;</span>
<span class="cc">&lt;!-- Pill variant --&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge rounded-pill text-bg-primary me-1"</span><span class="ct">&gt;</span>Primary<span class="ct">&lt;/span&gt;</span></code></pre>
          </div>
        </section>

        <!-- ─────────────────────────────
             4. SOFT & SOFT PILL BADGES
        ───────────────────────────── -->
        <section class="demo-section" id="soft">
          <h2 class="section-title">Soft &amp; Soft Pill Badges</h2>
          <p class="section-desc">
            Using the <code class="ic">.badge-soft-*</code> modifier class, you can have more soften variation.
          </p>

          <div class="badge-row">
            <span v-for="b in badgeColors" :key="b.cls" class="badge badge-soft" :class="`badge-soft-${b.cls}`">{{ b.label }}</span>
          </div>
          <div class="badge-row mt-2">
            <span v-for="b in badgeColors" :key="b.cls" class="badge badge-soft rounded-pill" :class="`badge-soft-${b.cls}`">{{ b.label }}</span>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy-btn" @click="copy('soft')">
                {{ copied === 'soft' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-pre"><code><span class="cc">&lt;!-- Bootstrap 5 bg-opacity for soft look --&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-primary bg-opacity-10 text-primary me-1"</span><span class="ct">&gt;</span>Primary<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-success bg-opacity-10 text-success me-1"</span><span class="ct">&gt;</span>Success<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-danger bg-opacity-10 text-danger me-1"</span><span class="ct">&gt;</span>Danger<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-warning bg-opacity-10 text-warning me-1"</span><span class="ct">&gt;</span>Warning<span class="ct">&lt;/span&gt;</span>
<span class="cc">&lt;!-- Pill variant --&gt;</span>
<span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge rounded-pill bg-primary bg-opacity-10 text-primary me-1"</span><span class="ct">&gt;</span>Primary<span class="ct">&lt;/span&gt;</span></code></pre>
          </div>
        </section>

        <!-- ─────────────────────────────
             5. BUTTONS & POSITION
        ───────────────────────────── -->
        <section class="demo-section" id="buttons-position">
          <h2 class="section-title">Buttons &amp; Position</h2>
          <p class="section-desc">
            Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
          </p>

          <div class="btn-badge-row">
            <!-- Solid button with danger badge -->
            <button class="bbtn bbtn-primary">
              Notifications <span class="badge bg-danger ms-1">4</span>
            </button>
            <!-- Outline button with soft badge -->
            <button class="bbtn bbtn-outline-primary">
              Notifications <span class="badge badge-soft-primary ms-1">new</span>
            </button>
            <!-- Soft button with number badge -->
            <button class="bbtn bbtn-soft-primary">
              Notifications <span class="badge bg-primary ms-1">11</span>
            </button>
            <!-- Ghost with "99+" pill -->
            <button class="bbtn bbtn-ghost">
              Notifications <span class="badge bg-secondary rounded-pill ms-1">99+</span>
            </button>
          </div>

          <!-- Positioned badges on text buttons -->
          <div class="btn-badge-row mt-3">
            <button class="bbtn bbtn-primary pos-btn">
              Inbox
              <span class="badge bg-danger pos-badge">99+</span>
            </button>
            <button class="bbtn bbtn-secondary pos-btn">
              Profile
              <span class="badge bg-success pos-badge">2</span>
            </button>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-label">HTML</span>
              <button class="code-copy-btn" @click="copy('buttons')">
                {{ copied === 'buttons' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-pre"><code><span class="cc">&lt;!-- Buttons --&gt;</span>
<span class="ct">&lt;button</span> <span class="ca">type</span>=<span class="cv">"button"</span> <span class="ca">class</span>=<span class="cv">"btn btn-primary me-1"</span><span class="ct">&gt;</span>
  Notifications <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-danger ms-1"</span><span class="ct">&gt;</span>4<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;/button&gt;</span>
<span class="ct">&lt;button</span> <span class="ca">type</span>=<span class="cv">"button"</span> <span class="ca">class</span>=<span class="cv">"btn btn-outline-primary me-1"</span><span class="ct">&gt;</span>
  Notifications <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge badge-soft-primary ms-1"</span><span class="ct">&gt;</span>new<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;/button&gt;</span>
<span class="ct">&lt;button</span> <span class="ca">type</span>=<span class="cv">"button"</span> <span class="ca">class</span>=<span class="cv">"btn btn-soft-primary me-1"</span><span class="ct">&gt;</span>
  Notifications <span class="ct">&lt;span</span> <span class="ca">class</span>=<span class="cv">"badge bg-primary ms-1"</span><span class="ct">&gt;</span>11<span class="ct">&lt;/span&gt;</span>
<span class="ct">&lt;/button&gt;</span></code></pre>
          </div>
        </section>

      </div><!-- /page-content -->

      <!-- ══ RIGHT TOC ══ -->
      <aside class="toc-sidebar">
        <nav class="toc-nav">
          <a
            v-for="item in tocItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="toc-link"
            :class="{ active: activeToc === item.id }"
            @click.prevent="scrollTo(item.id)"
          >{{ item.label }}</a>
        </nav>
      </aside>

    </div><!-- /page-layout -->
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// ─── TOC ─────────────────────────────────────────────────────────
const tocItems = [
  { id: 'heading',          label: 'Heading' },
  { id: 'default-pill',     label: 'Default & Pill Badges' },
  { id: 'outline',          label: 'Outline & Outline Pill Badges' },
  { id: 'soft',             label: 'Soft & Soft Pill Badges' },
  { id: 'buttons-position', label: 'Buttons & Position' },
]
const activeToc = ref('heading')

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  activeToc.value = id
}

const onScroll = () => {
  for (const item of [...tocItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 110) {
      activeToc.value = item.id
      break
    }
  }
}

// ─── Badge color palette ──────────────────────────────────────────
const badgeColors = [
  { cls: 'primary',   label: 'Primary'   },
  { cls: 'secondary', label: 'Secondary' },
  { cls: 'success',   label: 'Success'   },
  { cls: 'info',      label: 'Info'      },
  { cls: 'warning',   label: 'Warning'   },
  { cls: 'danger',    label: 'Danger'    },
  { cls: 'dark',      label: 'Dark'      },
  { cls: 'purple',    label: 'Purple'    },
  { cls: 'pink',      label: 'Pink'      },
  { cls: 'orange',    label: 'Orange'    },
]

// ─── Copy ─────────────────────────────────────────────────────────
const copied = ref(null)

// CSS for custom classes not in Bootstrap 5
const BADGE_CSS = `<style>
/* Custom badge variants — paste this in your <head> or stylesheet */
.badge-outline { background-color: transparent !important; }
.badge-outline-primary   { border: 1.5px solid #ff6c2f; color: #ff6c2f !important; }
.badge-outline-secondary { border: 1.5px solid #6c757d; color: #6c757d !important; }
.badge-outline-success   { border: 1.5px solid #22c55e; color: #22c55e !important; }
.badge-outline-warning   { border: 1.5px solid #f9b931; color: #f9b931 !important; }
.badge-outline-info      { border: 1.5px solid #4ecac2; color: #4ecac2 !important; }
.badge-outline-danger    { border: 1.5px solid #ef5f5f; color: #ef5f5f !important; }
.badge-outline-dark      { border: 1.5px solid #323a46; color: #323a46 !important; }
.badge-outline-purple    { border: 1.5px solid #7f56da; color: #7f56da !important; }
.badge-outline-pink      { border: 1.5px solid #ff86c8; color: #ff86c8 !important; }
.badge-soft-primary   { background: rgba(255,108,47,.15)  !important; color: #ff6c2f !important; }
.badge-soft-secondary { background: rgba(108,117,125,.15) !important; color: #6c757d !important; }
.badge-soft-success   { background: rgba(34,197,94,.15)   !important; color: #22c55e !important; }
.badge-soft-warning   { background: rgba(249,185,49,.15)  !important; color: #f9b931 !important; }
.badge-soft-info      { background: rgba(78,202,194,.15)  !important; color: #4ecac2 !important; }
.badge-soft-danger    { background: rgba(239,95,95,.15)   !important; color: #ef5f5f !important; }
.badge-soft-dark      { background: rgba(50,58,70,.12)    !important; color: #323a46 !important; }
.badge-soft-purple    { background: rgba(127,86,218,.15)  !important; color: #7f56da !important; }
.badge-soft-pink      { background: rgba(255,134,200,.15) !important; color: #ff86c8 !important; }
.bg-purple { background-color: #7f56da !important; color: #fff !important; }
.bg-pink   { background-color: #ff86c8 !important; color: #fff !important; }
.bg-orange { background-color: #ff6c2f !important; color: #fff !important; }
/* Custom button soft variants */
.btn-soft-primary   { color: #ff6c2f; background: rgba(255,108,47,.1);  border-color: transparent; }
.btn-soft-primary:hover { color: #fff; background: #ff6c2f; }
</style>

`

const codeTexts = {
  heading:
`<h1>h1.Example heading <span class="badge bg-primary">New</span></h1>
<h2>h2.Example heading <span class="badge bg-secondary">New</span></h2>
<h3>h3.Example heading <span class="badge bg-success">New</span></h3>
<h4>h4.Example heading <span class="badge bg-info">New</span></h4>
<h5>h5.Example heading <span class="badge bg-warning">New</span></h5>
<h6>h6.Example heading <span class="badge bg-danger">New</span></h6>`,

  default:
BADGE_CSS +
`<!-- Default badges -->
<span class="badge bg-primary me-1">Primary</span>
<span class="badge bg-secondary me-1">Secondary</span>
<span class="badge bg-success me-1">Success</span>
<span class="badge bg-info me-1">Info</span>
<span class="badge bg-warning me-1">Warning</span>
<span class="badge bg-danger me-1">Danger</span>
<span class="badge bg-dark me-1">Dark</span>
<span class="badge bg-purple me-1">Purple</span>
<span class="badge bg-pink me-1">Pink</span>
<span class="badge bg-orange me-1">Orange</span>

<!-- Pill badges -->
<span class="badge rounded-pill bg-primary me-1">Primary</span>
<span class="badge rounded-pill bg-secondary me-1">Secondary</span>
<span class="badge rounded-pill bg-success me-1">Success</span>
<span class="badge rounded-pill bg-info me-1">Info</span>
<span class="badge rounded-pill bg-warning me-1">Warning</span>
<span class="badge rounded-pill bg-danger me-1">Danger</span>
<span class="badge rounded-pill bg-dark me-1">Dark</span>
<span class="badge rounded-pill bg-purple me-1">Purple</span>
<span class="badge rounded-pill bg-pink me-1">Pink</span>
<span class="badge rounded-pill bg-orange me-1">Orange</span>`,

  outline:
BADGE_CSS +
`<!-- Outline badges -->
<span class="badge badge-outline badge-outline-primary me-1">Primary</span>
<span class="badge badge-outline badge-outline-secondary me-1">Secondary</span>
<span class="badge badge-outline badge-outline-success me-1">Success</span>
<span class="badge badge-outline badge-outline-info me-1">Info</span>
<span class="badge badge-outline badge-outline-warning me-1">Warning</span>
<span class="badge badge-outline badge-outline-danger me-1">Danger</span>
<span class="badge badge-outline badge-outline-dark me-1">Dark</span>
<span class="badge badge-outline badge-outline-purple me-1">Purple</span>
<span class="badge badge-outline badge-outline-pink me-1">Pink</span>

<!-- Outline pill badges -->
<span class="badge badge-outline rounded-pill badge-outline-primary me-1">Primary</span>
<span class="badge badge-outline rounded-pill badge-outline-success me-1">Success</span>
<span class="badge badge-outline rounded-pill badge-outline-danger me-1">Danger</span>`,

  soft:
BADGE_CSS +
`<!-- Soft badges -->
<span class="badge badge-soft-primary me-1">Primary</span>
<span class="badge badge-soft-secondary me-1">Secondary</span>
<span class="badge badge-soft-success me-1">Success</span>
<span class="badge badge-soft-info me-1">Info</span>
<span class="badge badge-soft-warning me-1">Warning</span>
<span class="badge badge-soft-danger me-1">Danger</span>
<span class="badge badge-soft-dark me-1">Dark</span>
<span class="badge badge-soft-purple me-1">Purple</span>
<span class="badge badge-soft-pink me-1">Pink</span>

<!-- Soft pill badges -->
<span class="badge badge-soft-primary rounded-pill me-1">Primary</span>
<span class="badge badge-soft-secondary rounded-pill me-1">Secondary</span>
<span class="badge badge-soft-success rounded-pill me-1">Success</span>`,

  buttons:
BADGE_CSS +
`<!-- Buttons with inline badges -->
<button type="button" class="btn btn-primary me-1">
  Notifications <span class="badge bg-danger ms-1">4</span>
</button>
<button type="button" class="btn btn-outline-primary me-1">
  Notifications <span class="badge badge-soft-primary ms-1">new</span>
</button>
<button type="button" class="btn btn-soft-primary me-1">
  Notifications <span class="badge bg-primary ms-1">11</span>
</button>
<button type="button" class="btn btn-secondary me-1">
  Notifications <span class="badge bg-secondary rounded-pill ms-1">99+</span>
</button>

<!-- Positioned badge -->
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+<span class="visually-hidden">unread messages</span>
  </span>
</button>`,
}
const copy = (key) => {
  navigator.clipboard.writeText(codeTexts[key] || '').then(() => {
    copied.value = key
    setTimeout(() => { copied.value = null }, 2000)
  })
}

const onKeydown = (e) => { if (e.key === 'Escape') {} }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
/* ══════════════════════════════════════════
   PAGE SHELL
══════════════════════════════════════════ */
.badge-page {
  font-family: 'Nunito', 'Segoe UI', sans-serif;
  background: #f5f6fa;
  min-height: 100vh;
  color: #343a40;
}

.page-header {
  padding: 22px 28px 0;
}
.page-title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: .07em;
  color: #343a40;
  margin: 0 0 20px;
}

/* ─── Two-column layout ─── */
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

/* ─── TOC sidebar ─── */
.toc-sidebar {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
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
  border-left: 2px solid transparent;
  transition: all 0.15s;
  white-space: nowrap;
}
.toc-link:hover { background: #fff7f0; color: #f97316; }
.toc-link.active {
  color: #f97316;
  border-left-color: #f97316;
  background: #fff7f0;
  font-weight: 600;
}

/* ══════════════════════════════════════════
   DEMO SECTIONS
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
  margin: 0 0 18px;
}
.ic {
  background: #f3f4f6;
  color: #e53e3e;
  font-family: 'Fira Code', monospace;
  font-size: 0.8em;
  padding: 1px 5px;
  border-radius: 4px;
}
.mt-2 { margin-top: 8px; }
.mt-3 { margin-top: 16px; }

/* ══════════════════════════════════════════
   HEADING DEMO
══════════════════════════════════════════ */
.heading-demo {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.hd { margin: 0; font-weight: 700; color: #343a40; display: flex; align-items: center; gap: 10px; }
.hd-1 { font-size: 2rem; }
.hd-2 { font-size: 1.65rem; }
.hd-3 { font-size: 1.35rem; }
.hd-4 { font-size: 1.1rem; }
.hd-5 { font-size: 0.9rem; }
.hd-6 { font-size: 0.78rem; }

/* ══════════════════════════════════════════
   BADGE BASE
══════════════════════════════════════════ */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 1.4;
  letter-spacing: 0.01em;
}
.badge.rounded-pill { border-radius: 50px; }
.ms-1 { margin-left: 6px; }

/* ─── Solid backgrounds ─── */
.bg-primary   { background: #f97316; color: #fff; }
.bg-secondary { background: #6c757d; color: #fff; }
.bg-success   { background: #10b981; color: #fff; }
.bg-info      { background: #3b82f6; color: #fff; }
.bg-warning   { background: #f59e0b; color: #fff; }
.bg-danger    { background: #ef4444; color: #fff; }
.bg-dark      { background: #1e293b; color: #fff; }
.bg-purple    { background: #8b5cf6; color: #fff; }
.bg-pink      { background: #ec4899; color: #fff; }
.bg-orange    { background: #f97316; color: #fff; }

/* ─── Outline badges ─── */
.badge-outline { background: transparent !important; }
.badge-outline-primary   { border: 1.5px solid #f97316; color: #f97316; }
.badge-outline-secondary { border: 1.5px solid #6c757d; color: #6c757d; }
.badge-outline-success   { border: 1.5px solid #10b981; color: #10b981; }
.badge-outline-info      { border: 1.5px solid #3b82f6; color: #3b82f6; }
.badge-outline-warning   { border: 1.5px solid #f59e0b; color: #f59e0b; }
.badge-outline-danger    { border: 1.5px solid #ef4444; color: #ef4444; }
.badge-outline-dark      { border: 1.5px solid #1e293b; color: #1e293b; }
.badge-outline-purple    { border: 1.5px solid #8b5cf6; color: #8b5cf6; }
.badge-outline-pink      { border: 1.5px solid #ec4899; color: #ec4899; }
.badge-outline-orange    { border: 1.5px solid #f97316; color: #f97316; }

/* ─── Soft badges ─── */
.badge-soft { background: transparent !important; }
.badge-soft-primary   { background: rgba(249,115,22,0.15)  !important; color: #f97316; }
.badge-soft-secondary { background: rgba(108,117,125,0.15) !important; color: #6c757d; }
.badge-soft-success   { background: rgba(16,185,129,0.15)  !important; color: #10b981; }
.badge-soft-info      { background: rgba(59,130,246,0.15)  !important; color: #3b82f6; }
.badge-soft-warning   { background: rgba(245,158,11,0.15)  !important; color: #f59e0b; }
.badge-soft-danger    { background: rgba(239,68,68,0.15)   !important; color: #ef4444; }
.badge-soft-dark      { background: rgba(30,41,59,0.12)    !important; color: #1e293b; }
.badge-soft-purple    { background: rgba(139,92,246,0.15)  !important; color: #8b5cf6; }
.badge-soft-pink      { background: rgba(236,72,153,0.15)  !important; color: #ec4899; }
.badge-soft-orange    { background: rgba(249,115,22,0.12)  !important; color: #f97316; }

/* ──────────────────────────────────────────
   BADGE ROW
────────────────────────────────────────── */
.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;
}

/* ══════════════════════════════════════════
   BUTTONS
══════════════════════════════════════════ */
.btn-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.bbtn {
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  white-space: nowrap;
  font-family: inherit;
}
.bbtn-primary {
  background: #f97316;
  color: #fff;
  border: none;
}
.bbtn-primary:hover { background: #ea580c; }

.bbtn-outline-primary {
  background: transparent;
  color: #f97316;
  border: 1.5px solid #f97316;
}
.bbtn-outline-primary:hover { background: #fff7f0; }

.bbtn-soft-primary {
  background: rgba(249,115,22,0.12);
  color: #f97316;
  border: none;
}
.bbtn-soft-primary:hover { background: rgba(249,115,22,0.22); }

.bbtn-secondary {
  background: #6c757d;
  color: #fff;
  border: none;
}
.bbtn-secondary:hover { background: #5a6268; }

.bbtn-ghost {
  background: transparent;
  color: #6c757d;
  border: 1.5px solid #dee2e6;
}
.bbtn-ghost:hover { background: #f8f9fa; }

/* Positioned badge button */
.pos-btn { position: relative; padding-right: 24px; }
.pos-badge {
  position: absolute;
  top: -6px;
  right: -8px;
  font-size: 0.62rem;
  padding: 2px 5px;
  border-radius: 50px;
  border: 2px solid #fff;
}

/* ══════════════════════════════════════════
   CODE BLOCK
══════════════════════════════════════════ */
.code-block {
  background: #1e2a3a;
  border-radius: 10px;
  margin-top: 18px;
  overflow: hidden;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.code-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.code-copy-btn {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  color: #94a3b8;
  font-size: 0.72rem;
  padding: 3px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.code-copy-btn:hover { color: #f97316; border-color: #f97316; }
.code-pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-size: 0.78rem;
  line-height: 1.7;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  white-space: pre;
  max-height: 300px;
  color: #cdd9e5;
}

/* Syntax highlight spans — referenced in template -->
/* These classes are used in the raw HTML inside <code> tags */
</style>

<!-- Global syntax highlight — works on non-scoped spans inside pre -->
<style>
.badge-page .ct  { color: #79c0ff; }  /* tag */
.badge-page .ca  { color: #ff7b72; }  /* attribute */
.badge-page .cv  { color: #a5d6a7; }  /* value */
.badge-page .cc  { color: #8b949e; font-style: italic; } /* comment */

/* ── Dark mode overrides for Badges page ── */
[data-theme="dark"] .badge-page {
  background: var(--bg-body) !important;
  color: var(--text-primary) !important;
}
[data-theme="dark"] .badge-page .demo-section {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}
[data-theme="dark"] .badge-page .toc-link { color: var(--text-secondary) !important; }
[data-theme="dark"] .badge-page .toc-link:hover,
[data-theme="dark"] .badge-page .toc-link.active {
  background: var(--accent-muted) !important;
  color: var(--accent) !important;
  border-left-color: var(--accent) !important;
}
[data-theme="dark"] .badge-page .hd { color: var(--text-primary) !important; }
[data-theme="dark"] .badge-page .ic { background: var(--app-bg) !important; }
[data-theme="dark"] .badge-page .bbtn-ghost { border-color: var(--border-color) !important; color: var(--text-secondary) !important; }
[data-theme="dark"] .badge-page .bbtn-ghost:hover { background: var(--app-bg) !important; }
[data-theme="dark"] .badge-page .bbtn-outline-primary:hover { background: var(--accent-muted) !important; }
</style>