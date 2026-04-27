<template>
  <div class="scrollspy-page">
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
          <pre v-pre><span class="tag">&lt;nav</span> <span class="attr">id</span>=<span class="val">"navbar-example"</span> <span class="attr">class</span>=<span class="val">"navbar navbar-light bg-light"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"navbar-brand"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>Navbar<span class="tag">&lt;/a&gt;</span>
  <span class="tag">&lt;ul</span> <span class="attr">class</span>=<span class="val">"nav nav-pills"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;li</span> <span class="attr">class</span>=<span class="val">"nav-item"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"nav-link"</span> <span class="attr">href</span>=<span class="val">"#fat"</span><span class="tag">&gt;</span>@fat<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;/nav&gt;</span>

<span class="tag">&lt;div</span> <span class="attr">data-bs-spy</span>=<span class="val">"scroll"</span> <span class="attr">data-bs-target</span>=<span class="val">"#navbar-example"</span> <span class="attr">data-bs-offset</span>=<span class="val">"0"</span> <span class="attr">tabindex</span>=<span class="val">"0"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;h4</span> <span class="attr">id</span>=<span class="val">"fat"</span><span class="tag">&gt;</span>@fat<span class="tag">&lt;/h4&gt;</span>
  <span class="tag">&lt;p&gt;</span>...<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
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
          <pre v-pre><span class="tag">&lt;nav</span> <span class="attr">id</span>=<span class="val">"navbar-example"</span> <span class="attr">class</span>=<span class="val">"navbar navbar-light flex-column"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"navbar-brand"</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span>Navbar<span class="tag">&lt;/a&gt;</span>
  <span class="tag">&lt;nav</span> <span class="attr">class</span>=<span class="val">"nav nav-pills flex-column"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"nav-link"</span> <span class="attr">href</span>=<span class="val">"#item-1"</span><span class="tag">&gt;</span>Item 1<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;nav</span> <span class="attr">class</span>=<span class="val">"nav nav-pills flex-column"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"nav-link ms-3"</span> <span class="attr">href</span>=<span class="val">"#item-1-1"</span><span class="tag">&gt;</span>Item 1-1<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;/nav&gt;</span>
  <span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;/nav&gt;</span></pre>
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
          <pre v-pre><span class="tag">&lt;div</span> <span class="attr">id</span>=<span class="val">"list-example"</span> <span class="attr">class</span>=<span class="val">"list-group"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"list-group-item list-group-item-action"</span> <span class="attr">href</span>=<span class="val">"#list-item-1"</span><span class="tag">&gt;</span>Item 1<span class="tag">&lt;/a&gt;</span>
  <span class="tag">&lt;a</span> <span class="attr">class</span>=<span class="val">"list-group-item list-group-item-action"</span> <span class="attr">href</span>=<span class="val">"#list-item-2"</span><span class="tag">&gt;</span>Item 2<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="tag">&lt;div</span> <span class="attr">data-bs-spy</span>=<span class="val">"scroll"</span> <span class="attr">data-bs-target</span>=<span class="val">"#list-example"</span> <span class="attr">data-bs-offset</span>=<span class="val">"0"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;h4</span> <span class="attr">id</span>=<span class="val">"list-item-1"</span><span class="tag">&gt;</span>Item 1<span class="tag">&lt;/h4&gt;</span>
  <span class="tag">&lt;p&gt;</span>...<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/div&gt;</span></pre>
        </div>
      </div>

      <div class="page-footer">2024 &copy; Larkon. Crafted by <a href="#">Techzaa</a></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeSection = ref('example')

onMounted(() => {
  const scrollSpyElements = document.querySelectorAll('[data-bs-spy="scroll"]')
  scrollSpyElements.forEach(element => {
    element.setAttribute('data-bs-offset', '50')
  })
})

function copyCode(event) {
  const pre = event.target.closest('.code-box').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
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
.right-nav a:hover { color: var(--brand-primary); }
.right-nav a.active { color: var(--brand-primary); font-weight: 600; }

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
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2px;
}

.code-box {
  background: #1e2139;
  border-radius: 0 0 8px 8px;
  border: 1px solid #2d3254;
  border-top: none;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid #2d3254;
}
.code-lang { color: #a5b4fc; font-size: 11px; font-weight: 600; }
.copy-btn {
  background: transparent;
  border: 1px solid #3a3f5c;
  color: #a5b4fc;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}
.copy-btn:hover { background: #2d3254; }
pre {
  margin: 0;
  padding: 14px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.65;
  color: #c5cae9;
}
pre :deep(.tag)  { color: #f472b6; }
pre :deep(.attr) { color: #fbbf24; }
pre :deep(.val)  { color: #86efac; }

.scrollspy-demo {
  border: 1px solid var(--border-color);
  border-radius: 6px;
  overflow: hidden;
}

.scrollspy-example,
.scrollspy-example-2 {
  height: 200px;
  overflow: auto;
  padding: 1rem;
  font-size: 13px;
  background: var(--bg-card);
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
  background: var(--bg-card);
}

.list-group-item-action:hover,
.list-group-item-action:focus {
  background: var(--bg-hover);
  color: var(--brand-primary);
}

[data-theme="dark"] .navbar.bg-light {
  background: var(--bg-card) !important;
}

[data-theme="dark"] .nav-pills .nav-link.active {
  background: var(--brand-primary);
  color: white;
}

[data-theme="dark"] .nav-pills .nav-link {
  color: var(--text-primary);
}

.page-footer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 40px; }
.page-footer a { color: var(--brand-primary); text-decoration: none; }
</style>
