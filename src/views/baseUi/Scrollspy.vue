<template>
  <div class="scrollspy-page">
    <CdnSection />
    <div class="right-nav d-none d-xl-block">
      <div class="right-nav-title">ON THIS PAGE</div>
      <a href="#example" :class="{ active: activeSection === 'example' }">Example in navbar</a>
      <a href="#nested" :class="{ active: activeSection === 'nested' }">Nested nav</a>
      <a href="#list-group" :class="{ active: activeSection === 'list-group' }">List group</a>
    </div>

    <div class="main-content">
      <div class="page-title mb-4">SCROLLSPY</div>

      <div class="doc-section" id="example">
        <h5>Example in Navbar</h5>
        <p class="desc">Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.</p>
        <div class="demo-box">
          <div class="scrollspy-demo">
            <nav id="navbar-example" class="navbar navbar-light bg-light px-3 mb-3">
              <a class="navbar-brand" href="#">Navbar</a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#fat">@fat</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#mdo">@mdo</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#one">one</a></li>
                    <li><a class="dropdown-item" href="#two">two</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#three">three</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" tabindex="0" class="scrollspy-example">
              <h4 id="fat">@fat</h4>
              <p>Placeholder content for the @fat link. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
              <h4 id="mdo">@mdo</h4>
              <p>Placeholder content for the @mdo link. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
              <h4 id="one">one</h4>
              <p>Placeholder content for the first dropdown item. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
              <h4 id="two">two</h4>
              <p>Placeholder content for the second dropdown item. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
              <h4 id="three">three</h4>
              <p>Placeholder content for the third dropdown item. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap.example }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="nested">
        <h5>Nested Nav</h5>
        <p class="desc">Scrollspy works with nested navs. If a nested nav is active, its parent will also be active.</p>
        <div class="demo-box">
          <div class="row">
            <div class="col-4">
              <nav id="navbar-example3" class="navbar navbar-light flex-column bg-light p-3">
                <a class="navbar-brand" href="#">Navbar</a>
                <nav class="nav nav-pills flex-column">
                  <a class="nav-link" href="#item-1">Item 1</a>
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                    <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                  </nav>
                  <a class="nav-link" href="#item-2">Item 2</a>
                  <a class="nav-link" href="#item-3">Item 3</a>
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                    <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                  </nav>
                </nav>
              </nav>
            </div>
            <div class="col-8">
              <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0" class="scrollspy-example-2">
                <h4 id="item-1">Item 1</h4>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h5 id="item-1-1">Item 1-1</h5>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h5 id="item-1-2">Item 1-2</h5>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h4 id="item-2">Item 2</h4>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h4 id="item-3">Item 3</h4>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h5 id="item-3-1">Item 3-1</h5>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h5 id="item-3-2">Item 3-2</h5>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap.nested }}</code></pre>
        </div>
      </div>

      <div class="doc-section" id="list-group">
        <h5>List group</h5>
        <p class="desc">Scrollspy also works with list groups. Click on a list item to see it become active.</p>
        <div class="demo-box">
          <div class="row">
            <div class="col-4">
              <div id="list-example" class="list-group">
                <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
              </div>
            </div>
            <div class="col-8">
              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0" class="scrollspy-example-2">
                <h4 id="list-item-1">Item 1</h4>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h4 id="list-item-2">Item 2</h4>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h4 id="list-item-3">Item 3</h4>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
                <h4 id="list-item-4">Item 4</h4>
                <p>Placeholder content for the scrollspy list group. This is some placeholder content for the scrollspy. It is intended to demonstrate what a page would look like with Bootstrap's Scrollspy plugin working.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="code-header">
            <span class="code-lang">HTML</span>
            <button class="copy-btn" @click="copyCode($event)">Copy</button>
          </div>
          <pre class="code-pre"><code>{{ codeMap['list-group'] }}</code></pre>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import PageFooter from '../../components/layout/Footer.vue'
import { ref, onMounted } from 'vue'

const activeSection = ref('example')

onMounted(() => {
  const scrollSpyElements = document.querySelectorAll('[data-bs-spy="scroll"]')
  scrollSpyElements.forEach(element => {
    element.setAttribute('data-bs-offset', '50')
  })
})

const codeMap = {
  example: `<nav id="navbar-example" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item"><a class="nav-link" href="#fat">@fat</a></li>
    <li class="nav-item"><a class="nav-link" href="#mdo">@mdo</a></li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#one">one</a></li>
        <li><a class="dropdown-item" href="#two">two</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#three">three</a></li>
      </ul>
    </li>
  </ul>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" tabindex="0">
  <h4 id="fat">@fat</h4>
  <p>Placeholder content for the @fat link...</p>
  <h4 id="mdo">@mdo</h4>
  <p>Placeholder content for the @mdo link...</p>
  <h4 id="one">one</h4>
  <p>Placeholder content for the first dropdown item...</p>
  <h4 id="two">two</h4>
  <p>Placeholder content for the second dropdown item...</p>
  <h4 id="three">three</h4>
  <p>Placeholder content for the third dropdown item...</p>
</div>`,
  nested: `<nav id="navbar-example3" class="navbar navbar-light flex-column bg-light p-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <nav class="nav nav-pills flex-column">
    <a class="nav-link" href="#item-1">Item 1</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
      <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a class="nav-link" href="#item-2">Item 2</a>
    <a class="nav-link" href="#item-3">Item 3</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
      <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
  <h4 id="item-1">Item 1</h4><p>...</p>
  <h5 id="item-1-1">Item 1-1</h5><p>...</p>
  <h5 id="item-1-2">Item 1-2</h5><p>...</p>
  <h4 id="item-2">Item 2</h4><p>...</p>
  <h4 id="item-3">Item 3</h4><p>...</p>
  <h5 id="item-3-1">Item 3-1</h5><p>...</p>
  <h5 id="item-3-2">Item 3-2</h5><p>...</p>
</div>`,
  'list-group': `<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
</div>

<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0">
  <h4 id="list-item-1">Item 1</h4><p>Placeholder content...</p>
  <h4 id="list-item-2">Item 2</h4><p>Placeholder content...</p>
  <h4 id="list-item-3">Item 3</h4><p>Placeholder content...</p>
  <h4 id="list-item-4">Item 4</h4><p>Placeholder content...</p>
</div>`,
}

function copyCode(event) {
  const sectionId = event.target.closest('.doc-section')?.id
  navigator.clipboard.writeText(codeMap[sectionId] || '').then(() => {
    event.target.textContent = 'Copied!'
    setTimeout(() => (event.target.textContent = 'Copy'), 1800)
  })
}
</script>

<style scoped>
.scrollspy-page {
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  color: var(--text-primary);
  position: relative;
}

.right-nav {
  position: fixed;
  top: 80px;
  right: 24px;
  width: 170px;
  font-size: 12px;
}
.right-nav-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}
.right-nav a {
  display: block;
  padding: 3px 0;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.15s;
}
.right-nav a:hover { color: var(--accent); }
.right-nav a.active { color: var(--accent); font-weight: 600; }

.main-content {
  padding: 28px 32px 60px 32px;
  margin-right: 200px;
}
.page-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.doc-section { margin-bottom: 44px; }
.doc-section h5 { font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
.doc-section p.desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.6; }

.demo-box {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2px;
}

.code-box {
  border: 1px solid var(--card-border);
  border-radius: 8px;
  overflow: hidden;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: var(--app-bg);
  border-bottom: 1px solid var(--card-border);
}
.code-lang {
  background: var(--accent); color: #fff;
  font-size: 0.67rem; font-weight: 700;
  padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px;
}
.copy-btn {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 5px;
  font-size: 0.73rem;
  padding: 3px 10px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
pre, pre.code-pre {
  margin: 0;
  padding: 12px 16px;
  overflow-x: auto;
  font-size: 0.73rem;
  line-height: 1.7;
  color: var(--text-secondary);
  background: var(--app-bg);
  max-height: 200px;
  font-family: 'Courier New', monospace;
}
pre.code-pre code {
  display: block;
  white-space: pre;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  padding: 0;
}
pre :deep(.tag)  { color: #e06c75; }
pre :deep(.attr) { color: #d19a66; }
pre :deep(.val)  { color: #98c379; }

.scrollspy-demo {
  border: 1px solid var(--card-border);
  border-radius: 6px;
  overflow: hidden;
}

.scrollspy-example,
.scrollspy-example-2 {
  height: 200px;
  overflow: auto;
  padding: 1rem;
  font-size: 13px;
  background: var(--card-bg);
  color: var(--text-primary);
}

.scrollspy-example h4,
.scrollspy-example-2 h4,
.scrollspy-example h5,
.scrollspy-example-2 h5 {
  color: var(--text-primary);
  margin-top: 1rem;
}

.scrollspy-example p,
.scrollspy-example-2 p {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.navbar {
  border-radius: 6px;
}

.list-group-item-action {
  color: var(--text-primary);
  background: var(--card-bg);
}

.list-group-item-action:hover,
.list-group-item-action:focus {
  background: var(--bg-hover);
  color: var(--accent);
}

[data-theme="dark"] .navbar.bg-light {
  background: var(--card-bg) !important;
}

[data-theme="dark"] .nav-pills .nav-link.active {
  background: var(--accent);
  color: white;
}

[data-theme="dark"] .nav-pills .nav-link {
  color: var(--text-primary);
}

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--accent); text-decoration: none; }
</style>
