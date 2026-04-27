<template>
  <div class="dropdown-page">

    <div class="page-header mb-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Base UI</a></li>
          <li class="breadcrumb-item active">Dropdown</li>
        </ol>
      </nav>
      <h4 class="page-title mb-0">Dropdown</h4>
    </div>

    <div class="content-layout">
      <div class="main-content">

        <!-- 1. Single Button Dropdowns -->
        <div id="single-button" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Single Button Dropdowns</h5>
            <p class="text-muted small">Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either <code>&lt;button&gt;</code> elements.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-2">
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown button</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown link</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('singleButton')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.singleButton }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 2. Single Button Variant Dropdowns -->
        <div id="single-button-variant" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Single Button Variant Dropdowns</h5>
            <p class="text-muted small">Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either <code>&lt;button&gt;</code> elements.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-2">
              <div v-for="v in buttonVariants" :key="v.class" class="dropdown">
                <button :class="`btn btn-${v.class} dropdown-toggle`" type="button" data-bs-toggle="dropdown">{{ v.label }}</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('variantButton')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.variantButton }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 3. Split Button Dropdowns -->
        <div id="split-button" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Split Button Dropdowns</h5>
            <p class="text-muted small">Create split button dropdowns with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-2">
              <div v-for="v in buttonVariants" :key="v.class" class="btn-group">
                <button :class="`btn btn-${v.class}`" type="button">{{ v.label }}</button>
                <button :class="`btn btn-${v.class} dropdown-toggle dropdown-toggle-split`" type="button" data-bs-toggle="dropdown">
                  <span class="visually-hidden">Toggle</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('splitButton')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.splitButton }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 4. Dark Dropdown -->
        <div id="dark-dropdown" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Dark Dropdown</h5>
            <p class="text-muted small">Opt into darker dropdowns by adding <code>.dropdown-menu-dark</code> onto an existing <code>.dropdown-menu</code>.</p>
            <div class="demo-preview mb-3">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dark dropdown</button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('darkDropdown')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.darkDropdown }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 5. Dropdown Direction -->
        <div id="dropdown-direction" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Dropdown Direction</h5>
            <p class="text-muted small">Trigger dropdown menus above with <code>.dropup</code>, to the right with <code>.dropend</code>, or to the left with <code>.dropstart</code>.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-2">
              <div class="btn-group dropup">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Drop Up</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="btn-group dropend">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Drop Right</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="btn-group dropstart">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Drop Left</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('direction')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.direction }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 6. Dropdown Menu Items -->
        <div id="dropdown-menu-items" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Dropdown Menu Items</h5>
            <p class="text-muted small">Add <code>.active</code> to items to style them as active. Add <code>.disabled</code> to style them as disabled.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-4">
              <div>
                <p class="small text-muted mb-1">Active item</p>
                <ul class="dropdown-menu position-static d-block w-auto border">
                  <li><a class="dropdown-item" href="#">Regular link</a></li>
                  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
                  <li><a class="dropdown-item" href="#">Regular link</a></li>
                </ul>
              </div>
              <div>
                <p class="small text-muted mb-1">Disabled item</p>
                <ul class="dropdown-menu position-static d-block w-auto border">
                  <li><a class="dropdown-item" href="#">Regular link</a></li>
                  <li><a class="dropdown-item disabled">Disabled link</a></li>
                  <li><a class="dropdown-item" href="#">Regular link</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('menuItems')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.menuItems }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 7. Dropdown Options -->
        <div id="dropdown-options" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Dropdown Options</h5>
            <p class="text-muted small">Add <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the location of the dropdown.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-2">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-offset="10,20">Offset</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">Reference</button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" data-bs-reference="parent">
                  <span class="visually-hidden">Toggle</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('options')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.options }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 8. Auto Close Behavior -->
        <div id="auto-close" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Auto Close Behavior</h5>
            <p class="text-muted small">Use the <code>data-bs-auto-close</code> attribute to change close behavior of the dropdown.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-2">
              <div v-for="ac in autoCloseOptions" :key="ac.value" class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" :data-bs-auto-close="ac.value">
                  {{ ac.label }}
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Menu item</a></li>
                  <li><a class="dropdown-item" href="#">Menu item</a></li>
                  <li><a class="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('autoClose')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.autoClose }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 9. Menu Content -->
        <div id="menu-content" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Menu Content</h5>
            <p class="text-muted small">Add a header to label sections, a divider to separate groups, freeform text, or a form within any dropdown menu.</p>
            <div class="demo-preview mb-3 d-flex flex-wrap gap-2">
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown Header</button>
                <ul class="dropdown-menu">
                  <li><h6 class="dropdown-header">Dropdown header</h6></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown Divider</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown Text</button>
                <div class="dropdown-menu p-3" style="max-width:200px">
                  <p class="small mb-0">Some example text that's free-flowing within the dropdown menu.</p>
                </div>
              </div>
              <div class="dropdown">
                <button class="btn btn-info dropdown-toggle text-white" type="button" data-bs-toggle="dropdown">Dropdown Menu Form</button>
                <div class="dropdown-menu p-3" style="min-width:220px">
                  <div class="mb-2">
                    <label class="form-label small mb-1">Email address</label>
                    <input type="email" class="form-control form-control-sm" placeholder="email@example.com" />
                  </div>
                  <div class="mb-2">
                    <label class="form-label small mb-1">Password</label>
                    <input type="password" class="form-control form-control-sm" placeholder="Password" />
                  </div>
                  <button type="button" class="btn btn-primary btn-sm w-100">Sign in</button>
                </div>
              </div>
            </div>
            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('menuContent')">Copy</button>
              </div>
              <pre><code>{{ codeSnippets.menuContent }}</code></pre>
            </div>
          </div>
        </div>

      </div><!-- /main-content -->

      <!-- Right Anchor Nav -->
      <aside class="anchor-nav d-none d-xl-block">
        <ul class="list-unstyled">
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`" :class="{ active: activeSection === section.id }">
              {{ section.label }}
            </a>
          </li>
        </ul>
      </aside>

    </div><!-- /content-layout -->
  </div>
</template>

<script>
export default {
  name: 'DropdownPage',
  data() {
    return {
      activeSection: 'single-button',
      sections: [
        { id: 'single-button', label: 'Single Button Dropdowns' },
        { id: 'single-button-variant', label: 'Single Button Variant Dropdowns' },
        { id: 'split-button', label: 'Split Button Dropdowns' },
        { id: 'dark-dropdown', label: 'Dark Dropdown' },
        { id: 'dropdown-direction', label: 'Dropdown Direction' },
        { id: 'dropdown-menu-items', label: 'Dropdown Menu Items' },
        { id: 'dropdown-options', label: 'Dropdown Options' },
        { id: 'auto-close', label: 'Auto Close Behavior' },
        { id: 'menu-content', label: 'Menu Content' },
      ],
      buttonVariants: [
        { class: 'primary', label: 'Primary' },
        { class: 'secondary', label: 'Secondary' },
        { class: 'success', label: 'Success' },
        { class: 'info', label: 'Info' },
      ],
      autoCloseOptions: [
        { value: 'true', label: 'Default dropdown' },
        { value: 'inside', label: 'Clickable outside' },
        { value: 'outside', label: 'Clickable inside' },
        { value: 'false', label: 'Manual close' },
      ],
      codeSnippets: {
        singleButton: `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`,
        variantButton: `<!-- Repeat for each variant: primary, secondary, success, info... -->
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">
    Primary
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`,
        splitButton: `<div class="btn-group">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button"
    class="btn btn-primary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`,
        darkDropdown: `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">
    Dark dropdown
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>`,
        direction: `<!-- Dropup -->
<div class="btn-group dropup">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">Drop Up</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Dropend (right) -->
<div class="btn-group dropend">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">Drop Right</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Dropstart (left) -->
<div class="btn-group dropstart">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">Drop Left</button>
  <ul class="dropdown-menu">...</ul>
</div>`,
        menuItems: `<!-- Active item -->
<ul class="dropdown-menu d-block">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#"
    aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Regular link</a></li>
</ul>

<!-- Disabled item -->
<ul class="dropdown-menu d-block">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Regular link</a></li>
</ul>`,
        options: `<!-- Offset -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown"
    data-bs-offset="10,20">Offset</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Reference -->
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Reference</button>
  <button type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    data-bs-reference="parent"></button>
  <ul class="dropdown-menu">...</ul>
</div>`,
        autoClose: `<!-- Default: closes on inside or outside click -->
<button data-bs-auto-close="true"
  data-bs-toggle="dropdown" ...>Default dropdown</button>

<!-- Only close on inside click -->
<button data-bs-auto-close="inside"
  data-bs-toggle="dropdown" ...>Clickable outside</button>

<!-- Only close on outside click -->
<button data-bs-auto-close="outside"
  data-bs-toggle="dropdown" ...>Clickable inside</button>

<!-- Manual close only -->
<button data-bs-auto-close="false"
  data-bs-toggle="dropdown" ...>Manual close</button>`,
        menuContent: `<!-- Header + Divider -->
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>

<!-- Form inside dropdown -->
<div class="dropdown-menu p-3" style="min-width: 220px;">
  <div class="mb-2">
    <label class="form-label small">Email</label>
    <input type="email" class="form-control form-control-sm">
  </div>
  <div class="mb-2">
    <label class="form-label small">Password</label>
    <input type="password" class="form-control form-control-sm">
  </div>
  <button class="btn btn-primary btn-sm w-100">Sign in</button>
</div>`,
      },
    }
  },
  mounted() {
    this.initScrollSpy()
  },
  methods: {
    initScrollSpy() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => { if (e.isIntersecting) this.activeSection = e.target.id })
        },
        { threshold: 0.2, rootMargin: '-60px 0px -60px 0px' }
      )
      this.sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    },
    copyCode(key) {
      navigator.clipboard.writeText(this.codeSnippets[key])
    },
  },
}
</script>

<style scoped>
.dropdown-page { padding: 1.5rem 1rem 3rem; }
.breadcrumb { font-size: 0.8rem; }

.content-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}
.main-content {
  flex: 1;
  min-width: 0;
  max-width: 680px;
}
.anchor-nav {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  align-self: flex-start;
}
.anchor-nav ul { border-left: 2px solid #e9ecef; padding-left: 0.75rem; }
.anchor-nav li { margin-bottom: 0.4rem; }
.anchor-nav a { font-size: 0.8rem; color: #6c757d; text-decoration: none; transition: color 0.2s; display: block; }
.anchor-nav a:hover, .anchor-nav a.active { color: #0d6efd; font-weight: 500; }

.demo-section { border: 1px solid #e9ecef; border-radius: 0.5rem; box-shadow: none; }
.section-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }

.code-block { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 0.375rem; overflow: hidden; }
.code-header { padding: 0.5rem 0.75rem; background: #f1f3f5; border-bottom: 1px solid #e9ecef; }
.code-block pre { margin: 0; padding: 0.75rem 1rem; font-size: 0.78rem; overflow-x: auto; white-space: pre; color: #343a40; max-height: 260px; }
.copy-btn { font-size: 0.75rem; padding: 2px 10px; }

.btn-primary { background-color: #f05a28 !important; border-color: #f05a28 !important; color: #fff !important; }
.btn-primary:hover { background-color: #d44d20 !important; border-color: #d44d20 !important; }

@media (max-width: 991px) {
  .content-layout { flex-direction: column; }
  .main-content { max-width: 100%; }
}
</style>