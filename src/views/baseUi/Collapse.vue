<template>
  <div class="collapse-page">

    <!-- Page Header -->
    <div class="page-header mb-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Base UI</a></li>
          <li class="breadcrumb-item active">Collapse</li>
        </ol>
      </nav>
      <h4 class="page-title mb-0">Collapse</h4>
    </div>

    <div class="content-layout">
      <!-- Main Content -->
      <div class="main-content">

        <!-- 1. Default Example -->
        <div id="default-example" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Default Example</h5>
            <p class="text-muted small">Click the buttons below to show and hide another element via class changes:</p>
            <ul class="small text-muted mb-3">
              <li><code>.collapse</code> hides content</li>
              <li><code>.collapsing</code> is applied during transitions</li>
              <li><code>.collapse.show</code> shows content</li>
            </ul>
            <p class="small text-muted mb-3">
              Generally, we recommend using a button with the <code class="text-warning">data-bs-target</code> attribute. While not recommended from a semantic point of view, you can also use a link with the <code class="text-warning">href</code> attribute (and a <code class="text-warning">role="button"</code>). In both cases, the <code class="text-warning">data-bs-toggle="collapse"</code> is required.
            </p>

            <div class="demo-preview mb-3">
              <div class="d-flex flex-wrap gap-2 mb-3">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLink" role="button" aria-expanded="false" aria-controls="collapseLink">
                  Link with href
                </a>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBtn" aria-expanded="false" aria-controls="collapseBtn">
                  Button with data-bs-target
                </button>
              </div>
              <div class="collapse" id="collapseLink">
                <div class="card card-body mb-2">
                  Some placeholder content for the collapse component. This panel is hidden by default — activated via the link trigger.
                </div>
              </div>
              <div class="collapse" id="collapseBtn">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default — activated via the button trigger.
                </div>
              </div>
            </div>

            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('defaultExample')">Copy</button>
              </div>
              <pre class="mb-0"><code>{{ codeSnippets.defaultExample }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 2. Horizontal -->
        <div id="horizontal" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Horizontal</h5>
            <p class="text-muted small">
              The collapse plugin also supports horizontal collapsing. Add the <code class="text-warning">.collapse-horizontal</code> modifier class to transition the <code class="text-warning">width</code> instead of <code class="text-warning">height</code> and set a <code class="text-warning">width</code> on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities.
            </p>

            <div class="demo-preview mb-3">
              <button class="btn btn-primary mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                Toggle width collapse
              </button>
              <div style="min-height: 120px;">
                <div class="collapse collapse-horizontal" id="collapseWidthExample">
                  <div class="card card-body" style="width: 300px;">
                    This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                  </div>
                </div>
              </div>
            </div>

            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('horizontal')">Copy</button>
              </div>
              <pre class="mb-0"><code>{{ codeSnippets.horizontal }}</code></pre>
            </div>
          </div>
        </div>

        <!-- 3. Multiple Targets -->
        <div id="multiple-targets" class="demo-section card mb-4">
          <div class="card-body">
            <h5 class="section-title">Multiple Targets</h5>
            <p class="text-muted small">
              A <code class="text-warning">&lt;button&gt;</code> or <code class="text-warning">&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code class="text-warning">href</code> or <code class="text-warning">data-bs-target</code> attribute. Multiple <code class="text-warning">&lt;button&gt;</code> or <code class="text-warning">&lt;a&gt;</code> can show and hide an element if they each reference it with their <code class="text-warning">href</code> or <code class="text-warning">data-bs-target</code> attribute.
            </p>

            <div class="demo-preview mb-3">
              <div class="d-flex flex-wrap gap-2 mb-3">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">
                  Toggle first element
                </button>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                  Toggle second element
                </button>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                  Toggle both elements
                </button>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                      Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but shown when triggered.
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="collapse multi-collapse" id="multiCollapseExample2">
                    <div class="card card-body">
                      Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but shown when triggered.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="code-block">
              <div class="code-header d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">HTML</span>
                <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('multipleTargets')">Copy</button>
              </div>
              <pre class="mb-0"><code>{{ codeSnippets.multipleTargets }}</code></pre>
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
  name: 'CollapsePage',
  data() {
    return {
      activeSection: 'default-example',
      sections: [
        { id: 'default-example', label: 'Default Example' },
        { id: 'horizontal', label: 'Horizontal Collapse' },
        { id: 'multiple-targets', label: 'Multiple Targets' },
      ],
      codeSnippets: {
        defaultExample: `<a class="btn btn-primary" data-bs-toggle="collapse"
  href="#collapseExample" role="button">
  Link with href
</a>
<button class="btn btn-primary" type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseExample">
  Button with data-bs-target
</button>

<div class="collapse" id="collapseExample">
  <div class="card card-body mb-0">
    Some placeholder content for the collapse component.
    This panel is hidden by default, shown when the user
    activates the relevant trigger.
  </div>
</div>`,
        horizontal: `<button class="btn btn-primary" type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseWidthExample">
  Toggle width collapse
</button>

<div style="min-height: 135px;">
  <div class="collapse collapse-horizontal"
    id="collapseWidthExample">
    <div class="card card-body mb-0"
      style="width: 300px;">
      This is some placeholder content for a
      horizontal collapse. It's hidden by default
      and shown when triggered.
    </div>
  </div>
</div>`,
        multipleTargets: `<div class="hstack gap-2 mb-3">
  <a class="btn btn-primary" data-bs-toggle="collapse"
    href="#multiCollapseExample1">
    Toggle first element
  </a>
  <button class="btn btn-primary" type="button"
    data-bs-toggle="collapse"
    data-bs-target="#multiCollapseExample2">
    Toggle second element
  </button>
  <button class="btn btn-primary" type="button"
    data-bs-toggle="collapse"
    data-bs-target=".multi-collapse">
    Toggle both elements
  </button>
</div>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse"
      id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first
        collapse component of this multi-collapse
        example.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse"
      id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second
        collapse component of this multi-collapse
        example.
      </div>
    </div>
  </div>
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
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id
            }
          })
        },
        { threshold: 0.3, rootMargin: '-60px 0px -60px 0px' }
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
.collapse-page {
  padding: 1.5rem 1rem 3rem;
}

/* Breadcrumb */
.breadcrumb {
  font-size: 0.8rem;
}

/* Layout */
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

/* Anchor nav */
.anchor-nav {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  align-self: flex-start;
}
.anchor-nav ul {
  border-left: 2px solid #e9ecef;
  padding-left: 0.75rem;
}
.anchor-nav li {
  margin-bottom: 0.4rem;
}
.anchor-nav a {
  font-size: 0.8rem;
  color: #6c757d;
  text-decoration: none;
  transition: color 0.2s;
}
.anchor-nav a:hover,
.anchor-nav a.active {
  color: #0d6efd;
  font-weight: 500;
}

/* Section card */
.demo-section {
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  box-shadow: none;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Buttons — match Larkon orange primary */
:deep(.btn-primary),
.btn-primary {
  background-color: #f05a28;
  border-color: #f05a28;
  color: #fff;
}
:deep(.btn-primary:hover),
.btn-primary:hover {
  background-color: #d44d20;
  border-color: #d44d20;
}

/* Code block */
.code-block {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 0.375rem;
  overflow: hidden;
}
.code-header {
  padding: 0.5rem 0.75rem;
  background: #f1f3f5;
  border-bottom: 1px solid #e9ecef;
}
.code-block pre {
  margin: 0;
  padding: 0.75rem 1rem;
  font-size: 0.78rem;
  overflow-x: auto;
  white-space: pre;
  color: #343a40;
  max-height: 260px;
}
.copy-btn {
  font-size: 0.75rem;
  padding: 2px 10px;
}

/* Responsive */
@media (max-width: 991px) {
  .content-layout {
    flex-direction: column;
  }
  .main-content {
    max-width: 100%;
  }
}
</style>