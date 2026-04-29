<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Basic Tables</h4>
      <p class="page-subtitle">Bootstrap 5 table components with sorting, striping, and responsive layouts.</p>
    </div>

    <!-- Basic Table -->
    <div class="demo-card">
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
    <div class="demo-card">
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
    <div class="demo-card">
      <h6 class="demo-title">Sortable Table with Pagination</h6>
      <p class="demo-desc">Client-side sorting and pagination using Vue 3 computed properties.</p>
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
    <div class="demo-card">
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
</template>

<script setup>
import { ref, computed } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const copied = ref('')
function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

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
  basic: `<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Anna</td>
      <td>Hines</td>
      <td>anna@mail.com</td>
    </tr>
  </tbody>
</table>`,

  striped: `<!-- Striped rows -->
<table class="table table-striped">...</table>

<!-- Hover state -->
<table class="table table-hover">...</table>

<!-- Both combined -->
<table class="table table-striped table-hover">...</table>

<!-- Responsive wrapper -->
<div class="table-responsive">
  <table class="table table-striped table-hover">...</table>
</div>`,

  sortable: `<!-- Sortable table with Vue 3 -->
<table class="table">
  <thead>
    <tr>
      <th @click="sort('name')" style="cursor:pointer">
        Name
        <i :class="sortKey==='name' ? (sortAsc?'bi-sort-up':'bi-sort-down') : 'bi-arrow-down-up'"></i>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in paginated" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </tbody>
</table>

<script setup>
const sortKey = ref('name')
const sortAsc = ref(true)
function sort(key) {
  if (sortKey.value === key) sortAsc.value = !sortAsc.value
  else { sortKey.value = key; sortAsc.value = true }
}
<\/script>`,

  contextual: `<table class="table">
  <tbody>
    <tr class="table-primary"><td>Primary row</td></tr>
    <tr class="table-secondary"><td>Secondary row</td></tr>
    <tr class="table-success"><td>Success row</td></tr>
    <tr class="table-danger"><td>Danger row</td></tr>
    <tr class="table-warning"><td>Warning row</td></tr>
    <tr class="table-info"><td>Info row</td></tr>
    <tr class="table-light"><td>Light row</td></tr>
    <tr class="table-dark"><td>Dark row</td></tr>
  </tbody>
</table>`,
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; }
.demo-desc code { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.status-badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 600; }
.status-badge.active   { background: rgba(46,204,113,0.15); color: #2ecc71; }
.status-badge.inactive { background: rgba(231,76,60,0.15);  color: #e74c3c; }
.status-badge.pending  { background: rgba(241,196,15,0.15); color: #d4ac0d; }
.sortable-th { cursor: pointer; user-select: none; white-space: nowrap; }
.sortable-th:hover { color: var(--accent); }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 200px; font-family: 'Courier New', monospace; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
