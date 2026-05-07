<template>
  <div class="page-wrapper">
    <CdnSection />

    <div class="page-layout">
      <div class="page-main">
        <div class="page-header">
          <h4 class="page-title">Basic Tables</h4>
          <p class="page-subtitle">Bootstrap 5 table components with sorting, striping, and responsive layouts.</p>
        </div>

        <!-- Basic Table -->
        <div id="basic" class="demo-card">
          <h6 class="demo-title">Basic Table</h6>
          <p class="demo-desc">Use the <code>.table</code> class for a basic table with horizontal dividers.</p>
          <div class="demo-box">
            <div class="table-responsive">
              <table class="table table-bordered mb-0">
                <thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
                <tbody>
                  <tr v-for="u in users" :key="u.id">
                    <td>{{ u.id }}</td><td>{{ u.first }}</td><td>{{ u.last }}</td>
                    <td>{{ u.email }}</td><td>{{ u.role }}</td>
                    <td><span class="status-badge" :class="u.status.toLowerCase()">{{ u.status }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar"><span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('basic', codes.basic)"><i class="bi bi-clipboard me-1"></i>{{ copied==='basic'?'Copied!':'Copy' }}</button>
            </div>
            <pre class="code-body"><code>{{ codes.basic }}</code></pre>
          </div>
        </div>

        <!-- Striped & Hover -->
        <div id="striped" class="demo-card">
          <h6 class="demo-title">Striped &amp; Hover</h6>
          <p class="demo-desc">Add <code>.table-striped</code> for zebra-striping and <code>.table-hover</code> for hover states.</p>
          <div class="demo-box">
            <div class="table-responsive">
              <table class="table table-striped table-hover mb-0">
                <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead>
                <tbody>
                  <tr v-for="p in products" :key="p.name">
                    <td class="fw-semibold">{{ p.name }}</td><td>{{ p.cat }}</td>
                    <td>${{ p.price }}</td><td>{{ p.stock }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar"><span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('striped', codes.striped)"><i class="bi bi-clipboard me-1"></i>{{ copied==='striped'?'Copied!':'Copy' }}</button>
            </div>
            <pre class="code-body"><code>{{ codes.striped }}</code></pre>
          </div>
        </div>

        <!-- Sortable Table -->
        <div id="sortable" class="demo-card">
          <h6 class="demo-title">Sortable Table with Pagination</h6>
          <p class="demo-desc">Client-side sorting and pagination — click any column header to sort.</p>
          <div class="demo-box">
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <input v-model="search" type="text" class="form-control form-control-sm" style="max-width:220px" placeholder="Search..." />
              <span class="text-muted" style="font-size:0.8rem">{{ filtered.length }} results</span>
            </div>
            <div class="table-responsive">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th v-for="col in cols" :key="col.key" class="sortable-th" @click="sort(col.key)">
                      {{ col.label }}
                      <i class="bi ms-1" :class="sortKey===col.key?(sortAsc?'bi-sort-up':'bi-sort-down'):'bi-arrow-down-up'" style="font-size:0.7rem;opacity:0.5"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in paginated" :key="row.id">
                    <td>{{ row.id }}</td><td>{{ row.name }}</td><td>{{ row.dept }}</td>
                    <td>${{ row.salary.toLocaleString() }}</td>
                    <td><span class="status-badge" :class="row.status.toLowerCase()">{{ row.status }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
              <span class="text-muted" style="font-size:0.8rem">Showing {{ (page-1)*perPage+1 }}–{{ Math.min(page*perPage, filtered.length) }} of {{ filtered.length }}</span>
              <nav><ul class="pagination pagination-sm mb-0">
                <li class="page-item" :class="{disabled:page===1}"><a class="page-link" href="#" @click.prevent="page--">‹</a></li>
                <li class="page-item" v-for="p in totalPages" :key="p" :class="{active:p===page}"><a class="page-link" href="#" @click.prevent="page=p">{{ p }}</a></li>
                <li class="page-item" :class="{disabled:page===totalPages}"><a class="page-link" href="#" @click.prevent="page++">›</a></li>
              </ul></nav>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar"><span class="code-badge">HTML + JS</span>
              <button class="copy-btn" @click="copy('sortable', codes.sortable)"><i class="bi bi-clipboard me-1"></i>{{ copied==='sortable'?'Copied!':'Copy' }}</button>
            </div>
            <pre class="code-body"><code>{{ codes.sortable }}</code></pre>
          </div>
        </div>

        <!-- Contextual Colors -->
        <div id="contextual" class="demo-card">
          <h6 class="demo-title">Contextual Colors</h6>
          <p class="demo-desc">Use <code>.table-{color}</code> classes to color entire rows.</p>
          <div class="demo-box">
            <div class="table-responsive">
              <table class="table mb-0">
                <thead><tr><th>Class</th><th>Description</th><th>Example</th></tr></thead>
                <tbody>
                  <tr class="table-primary"><td><code>.table-primary</code></td><td>Blue — primary action</td><td>Primary row</td></tr>
                  <tr class="table-success"><td><code>.table-success</code></td><td>Green — successful action</td><td>Success row</td></tr>
                  <tr class="table-danger"><td><code>.table-danger</code></td><td>Red — dangerous action</td><td>Danger row</td></tr>
                  <tr class="table-warning"><td><code>.table-warning</code></td><td>Yellow — warning</td><td>Warning row</td></tr>
                  <tr class="table-info"><td><code>.table-info</code></td><td>Cyan — informational</td><td>Info row</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar"><span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('contextual', codes.contextual)"><i class="bi bi-clipboard me-1"></i>{{ copied==='contextual'?'Copied!':'Copy' }}</button>
            </div>
            <pre class="code-body"><code>{{ codes.contextual }}</code></pre>
          </div>
        </div>

        <PageFooter />
      </div>

      <!-- Right TOC -->
      <aside class="toc-sidebar d-none d-xl-block">
        <div class="toc-title">ON THIS PAGE</div>
        <nav class="toc-nav">
          <a v-for="item in tocItems" :key="item.id"
            :href="`#${item.id}`" class="toc-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const copied = ref('')
const activeSection = ref('basic')

const tocItems = [
  { id: 'basic',       label: 'Basic Table' },
  { id: 'striped',     label: 'Striped & Hover' },
  { id: 'sortable',    label: 'Sortable + Pagination' },
  { id: 'contextual',  label: 'Contextual Colors' },
]

function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}
function scrollTo(id) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function onScroll() {
  for (const item of [...tocItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 120) { activeSection.value = item.id; break }
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const users = [
  { id:1, first:'Anna',    last:'Hines',    email:'anna@mail.com',    role:'Admin',     status:'Active'   },
  { id:2, first:'Judith',  last:'Fritsche', email:'judith@mail.com',  role:'Editor',    status:'Active'   },
  { id:3, first:'Peter',   last:'Smith',    email:'peter@mail.com',   role:'Viewer',    status:'Inactive' },
  { id:4, first:'Emmanuel',last:'Delcid',   email:'emm@mail.com',     role:'Editor',    status:'Active'   },
  { id:5, first:'William', last:'Cook',     email:'william@mail.com', role:'Moderator', status:'Pending'  },
]
const products = [
  { name:'MacBook Pro', cat:'Electronics', price:'1299', stock:42  },
  { name:'iPhone 15',   cat:'Electronics', price:'999',  stock:128 },
  { name:'AirPods Pro', cat:'Audio',       price:'249',  stock:67  },
  { name:'iPad Air',    cat:'Tablets',     price:'599',  stock:31  },
  { name:'Apple Watch', cat:'Wearables',   price:'399',  stock:55  },
]

const employees = Array.from({length:20}, (_,i) => ({
  id: i+1,
  name: ['Alice Johnson','Bob Smith','Carol White','David Brown','Eva Martinez','Frank Lee','Grace Kim','Henry Wilson','Iris Chen','Jack Davis'][i%10],
  dept: ['Engineering','Marketing','Sales','HR','Finance'][i%5],
  salary: 45000 + (i * 3500),
  status: ['Active','Active','Active','Inactive','Pending'][i%5],
}))

const search = ref(''), sortKey = ref('id'), sortAsc = ref(true), page = ref(1)
const perPage = 5
const cols = [{key:'id',label:'#'},{key:'name',label:'Name'},{key:'dept',label:'Department'},{key:'salary',label:'Salary'},{key:'status',label:'Status'}]

const filtered = computed(() => {
  const q = search.value.toLowerCase()
  return employees
    .filter(r => !q || Object.values(r).some(v => String(v).toLowerCase().includes(q)))
    .sort((a,b) => { const av=a[sortKey.value],bv=b[sortKey.value]; return sortAsc.value?(av>bv?1:-1):(av<bv?1:-1) })
})
const totalPages = computed(() => Math.ceil(filtered.value.length / perPage))
const paginated = computed(() => filtered.value.slice((page.value-1)*perPage, page.value*perPage))
function sort(key) { if(sortKey.value===key) sortAsc.value=!sortAsc.value; else{sortKey.value=key;sortAsc.value=true}; page.value=1 }

const codes = {
  basic: `<div class="table-responsive">
  <table class="table table-bordered mb-0">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td><td>Anna</td><td>Hines</td>
        <td>anna@mail.com</td><td>Admin</td>
        <td><span class="badge-soft-success" style="padding:2px 10px;border-radius:20px;font-size:0.72rem;font-weight:600;background:rgba(46,204,113,0.15);color:#2ecc71;">Active</span></td>
      </tr>
      <tr>
        <td>2</td><td>Judith</td><td>Fritsche</td>
        <td>judith@mail.com</td><td>Editor</td>
        <td><span class="badge-soft-success" style="padding:2px 10px;border-radius:20px;font-size:0.72rem;font-weight:600;background:rgba(46,204,113,0.15);color:#2ecc71;">Active</span></td>
      </tr>
      <tr>
        <td>3</td><td>Peter</td><td>Smith</td>
        <td>peter@mail.com</td><td>Viewer</td>
        <td><span style="padding:2px 10px;border-radius:20px;font-size:0.72rem;font-weight:600;background:rgba(231,76,60,0.15);color:#e74c3c;">Inactive</span></td>
      </tr>
      <tr>
        <td>4</td><td>Emmanuel</td><td>Delcid</td>
        <td>emm@mail.com</td><td>Editor</td>
        <td><span style="padding:2px 10px;border-radius:20px;font-size:0.72rem;font-weight:600;background:rgba(46,204,113,0.15);color:#2ecc71;">Active</span></td>
      </tr>
      <tr>
        <td>5</td><td>William</td><td>Cook</td>
        <td>william@mail.com</td><td>Moderator</td>
        <td><span style="padding:2px 10px;border-radius:20px;font-size:0.72rem;font-weight:600;background:rgba(241,196,15,0.15);color:#d4ac0d;">Pending</span></td>
      </tr>
    </tbody>
  </table>
</div>`,

  striped: `<div class="table-responsive">
  <table class="table table-striped table-hover mb-0">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="fw-semibold">MacBook Pro</td>
        <td>Electronics</td><td>$1299</td><td>42</td>
      </tr>
      <tr>
        <td class="fw-semibold">iPhone 15</td>
        <td>Electronics</td><td>$999</td><td>128</td>
      </tr>
      <tr>
        <td class="fw-semibold">AirPods Pro</td>
        <td>Audio</td><td>$249</td><td>67</td>
      </tr>
      <tr>
        <td class="fw-semibold">iPad Air</td>
        <td>Tablets</td><td>$599</td><td>31</td>
      </tr>
      <tr>
        <td class="fw-semibold">Apple Watch</td>
        <td>Wearables</td><td>$399</td><td>55</td>
      </tr>
    </tbody>
  </table>
</div>`,

  sortable: `<!-- Search + result count -->
<div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
  <input type="text" id="tableSearch" class="form-control form-control-sm"
    style="max-width:220px" placeholder="Search..." />
  <span class="text-muted" id="resultCount" style="font-size:0.8rem">20 results</span>
</div>

<!-- Sortable table -->
<div class="table-responsive">
  <table class="table mb-0" id="sortableTable">
    <thead>
      <tr>
        <th class="sortable-th" data-col="id">#</th>
        <th class="sortable-th" data-col="name">Name</th>
        <th class="sortable-th" data-col="dept">Department</th>
        <th class="sortable-th" data-col="salary">Salary</th>
        <th class="sortable-th" data-col="status">Status</th>
      </tr>
    </thead>
    <tbody id="tableBody"></tbody>
  </table>
</div>

<!-- Pagination -->
<div class="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
  <span class="text-muted" id="pageInfo" style="font-size:0.8rem"></span>
  <nav><ul class="pagination pagination-sm mb-0" id="pagination"></ul></nav>
</div>

<style>
.sortable-th { cursor: pointer; user-select: none; white-space: nowrap; }
.sortable-th:hover { color: #fd7e14; }
.status-pill { display:inline-block; padding:2px 10px; border-radius:20px; font-size:0.72rem; font-weight:600; }
.status-active   { background:rgba(46,204,113,0.15); color:#2ecc71; }
.status-inactive { background:rgba(231,76,60,0.15);  color:#e74c3c; }
.status-pending  { background:rgba(241,196,15,0.15); color:#d4ac0d; }
</style>

<script>
(function () {
  var PER_PAGE = 5
  var data = [
    { id:1,  name:'Alice Johnson',  dept:'Engineering', salary:45000,  status:'Active'   },
    { id:2,  name:'Bob Smith',      dept:'Marketing',   salary:48500,  status:'Active'   },
    { id:3,  name:'Carol White',    dept:'Sales',       salary:52000,  status:'Active'   },
    { id:4,  name:'David Brown',    dept:'HR',          salary:55500,  status:'Inactive' },
    { id:5,  name:'Eva Martinez',   dept:'Finance',     salary:59000,  status:'Pending'  },
    { id:6,  name:'Frank Lee',      dept:'Engineering', salary:62500,  status:'Active'   },
    { id:7,  name:'Grace Kim',      dept:'Marketing',   salary:66000,  status:'Active'   },
    { id:8,  name:'Henry Wilson',   dept:'Sales',       salary:69500,  status:'Active'   },
    { id:9,  name:'Iris Chen',      dept:'HR',          salary:73000,  status:'Inactive' },
    { id:10, name:'Jack Davis',     dept:'Finance',     salary:76500,  status:'Pending'  },
    { id:11, name:'Alice Johnson',  dept:'Engineering', salary:80000,  status:'Active'   },
    { id:12, name:'Bob Smith',      dept:'Marketing',   salary:83500,  status:'Active'   },
    { id:13, name:'Carol White',    dept:'Sales',       salary:87000,  status:'Active'   },
    { id:14, name:'David Brown',    dept:'HR',          salary:90500,  status:'Inactive' },
    { id:15, name:'Eva Martinez',   dept:'Finance',     salary:94000,  status:'Pending'  },
    { id:16, name:'Frank Lee',      dept:'Engineering', salary:97500,  status:'Active'   },
    { id:17, name:'Grace Kim',      dept:'Marketing',   salary:101000, status:'Active'   },
    { id:18, name:'Henry Wilson',   dept:'Sales',       salary:104500, status:'Active'   },
    { id:19, name:'Iris Chen',      dept:'HR',          salary:108000, status:'Inactive' },
    { id:20, name:'Jack Davis',     dept:'Finance',     salary:111500, status:'Pending'  },
  ]

  var sortKey = 'id', sortAsc = true, page = 1, query = ''

  function filtered() {
    var q = query.toLowerCase()
    return data
      .filter(function(r) {
        return !q || [r.name, r.dept, r.status].some(function(v) {
          return v.toLowerCase().includes(q)
        })
      })
      .sort(function(a, b) {
        var av = a[sortKey], bv = b[sortKey]
        return sortAsc ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1)
      })
  }

  function render() {
    var rows = filtered()
    var total = rows.length
    var totalPages = Math.max(1, Math.ceil(total / PER_PAGE))
    if (page > totalPages) page = totalPages
    var slice = rows.slice((page - 1) * PER_PAGE, page * PER_PAGE)

    // Body
    document.getElementById('tableBody').innerHTML = slice.map(function(r) {
      var cls = r.status === 'Active' ? 'status-active' : r.status === 'Inactive' ? 'status-inactive' : 'status-pending'
      return '<tr>' +
        '<td>' + r.id + '</td>' +
        '<td>' + r.name + '</td>' +
        '<td>' + r.dept + '</td>' +
        '<td>$' + r.salary.toLocaleString() + '</td>' +
        '<td><span class="status-pill ' + cls + '">' + r.status + '</span></td>' +
        '</tr>'
    }).join('')

    // Page info
    document.getElementById('resultCount').textContent = total + ' results'
    document.getElementById('pageInfo').textContent =
      'Showing ' + ((page-1)*PER_PAGE+1) + '–' + Math.min(page*PER_PAGE, total) + ' of ' + total

    // Pagination
    var pag = ''
    pag += '<li class="page-item' + (page===1?' disabled':'') + '"><a class="page-link" href="#" data-p="' + (page-1) + '">‹</a></li>'
    for (var p = Math.max(1,page-2); p <= Math.min(totalPages,page+2); p++) {
      pag += '<li class="page-item' + (p===page?' active':'') + '"><a class="page-link" href="#" data-p="' + p + '">' + p + '</a></li>'
    }
    pag += '<li class="page-item' + (page===totalPages?' disabled':'') + '"><a class="page-link" href="#" data-p="' + (page+1) + '">›</a></li>'
    document.getElementById('pagination').innerHTML = pag
  }

  // Sort on header click
  document.getElementById('sortableTable').addEventListener('click', function(e) {
    var th = e.target.closest('.sortable-th')
    if (!th) return
    var col = th.dataset.col
    if (sortKey === col) sortAsc = !sortAsc
    else { sortKey = col; sortAsc = true }
    page = 1
    render()
  })

  // Pagination click
  document.getElementById('pagination').addEventListener('click', function(e) {
    e.preventDefault()
    var a = e.target.closest('a[data-p]')
    if (!a) return
    var p = parseInt(a.dataset.p)
    var totalPages = Math.max(1, Math.ceil(filtered().length / PER_PAGE))
    if (p >= 1 && p <= totalPages) { page = p; render() }
  })

  // Search
  document.getElementById('tableSearch').addEventListener('input', function() {
    query = this.value; page = 1; render()
  })

  render()
})()
<\/script>`,

  contextual: `<div class="table-responsive">
  <table class="table mb-0">
    <thead>
      <tr>
        <th>Class</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-primary">
        <td><code>.table-primary</code></td>
        <td>Blue — primary action</td>
        <td>Primary row</td>
      </tr>
      <tr class="table-success">
        <td><code>.table-success</code></td>
        <td>Green — successful action</td>
        <td>Success row</td>
      </tr>
      <tr class="table-danger">
        <td><code>.table-danger</code></td>
        <td>Red — dangerous action</td>
        <td>Danger row</td>
      </tr>
      <tr class="table-warning">
        <td><code>.table-warning</code></td>
        <td>Yellow — warning</td>
        <td>Warning row</td>
      </tr>
      <tr class="table-info">
        <td><code>.table-info</code></td>
        <td>Cyan — informational</td>
        <td>Info row</td>
      </tr>
    </tbody>
  </table>
</div>`,
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-layout { display: flex; gap: 0; align-items: flex-start; }
.page-main { flex: 1; min-width: 0; padding-right: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); scroll-margin-top: 80px; }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.6; }
.demo-desc :deep(code) { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.status-badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 600; }
.status-badge.active   { background: rgba(46,204,113,0.15); color: #2ecc71; }
.status-badge.inactive { background: rgba(231,76,60,0.15);  color: #e74c3c; }
.status-badge.pending  { background: rgba(241,196,15,0.15); color: #d4ac0d; }
.sortable-th { cursor: pointer; user-select: none; white-space: nowrap; }
.sortable-th:hover { color: var(--accent); }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 300px; font-family: 'Courier New', monospace; }
.toc-sidebar { width: 190px; flex-shrink: 0; position: sticky; top: 80px; align-self: flex-start; }
.toc-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 10px; text-transform: uppercase; }
.toc-nav { display: flex; flex-direction: column; gap: 2px; }
.toc-link { display: block; padding: 5px 10px; font-size: 0.8rem; color: var(--text-secondary); text-decoration: none; border-radius: 6px; border-left: 2px solid transparent; transition: all 0.15s; }
.toc-link:hover { color: var(--accent); background: var(--accent-muted); }
.toc-link.active { color: var(--accent); border-left-color: var(--accent); background: var(--accent-muted); font-weight: 600; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .page-main { padding-right: 0; } }
</style>
