<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">Grid.js Tables</h4>
      <p class="page-subtitle">Advanced data grid with search, sort, inline edit, and CSV export — built with Vue 3.</p>
    </div>

    <!-- Advanced Data Grid -->
    <div class="demo-card">
      <h6 class="demo-title">Advanced Data Grid</h6>
      <p class="demo-desc">Full-featured data grid with multi-column sort, row selection, inline edit, and export.</p>
      <div class="demo-box">
        <div class="grid-toolbar">
          <div class="d-flex align-items-center gap-2 flex-wrap">
            <input v-model="search" type="text" class="form-control form-control-sm" style="width:220px" placeholder="Search all columns..." />
            <select v-model="perPage" class="form-select form-select-sm" style="width:90px">
              <option :value="5">5</option><option :value="10">10</option><option :value="25">25</option>
            </select>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-sm btn-outline-secondary" @click="exportCsv"><i class="bi bi-download me-1"></i>Export</button>
            <button class="btn btn-sm btn-primary" @click="showAdd=true"><i class="bi bi-plus me-1"></i>Add Row</button>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th><input type="checkbox" class="form-check-input" v-model="allSelected" @change="toggleAll" /></th>
                <th v-for="col in cols" :key="col.key" class="sortable-th" @click="sort(col.key)">
                  {{ col.label }}
                  <i class="bi ms-1" :class="sortKey===col.key?(sortAsc?'bi-sort-up':'bi-sort-down'):'bi-arrow-down-up'" style="font-size:0.68rem;opacity:0.45"></i>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in paginated" :key="row.id" :class="{selected: selected.includes(row.id)}">
                <td><input type="checkbox" class="form-check-input" :value="row.id" v-model="selected" /></td>
                <td>{{ row.id }}</td>
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <div class="avatar-sm" :style="`background:${row.color}`">{{ row.name[0] }}</div>
                    <span class="fw-semibold">{{ row.name }}</span>
                  </div>
                </td>
                <td>{{ row.email }}</td>
                <td>{{ row.dept }}</td>
                <td>${{ row.salary.toLocaleString() }}</td>
                <td><span class="status-badge" :class="row.status.toLowerCase()">{{ row.status }}</span></td>
                <td>
                  <div class="d-flex gap-1">
                    <button class="action-btn" @click="editRow(row)"><i class="bi bi-pencil"></i></button>
                    <button class="action-btn action-btn--danger" @click="deleteRow(row.id)"><i class="bi bi-trash"></i></button>
                  </div>
                </td>
              </tr>
              <tr v-if="!paginated.length">
                <td :colspan="cols.length+2" class="text-center text-muted py-4">No records found</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid-footer">
          <span class="text-muted" style="font-size:0.8rem">
            {{ selected.length ? `${selected.length} selected · ` : '' }}Showing {{ Math.min((page-1)*perPage+1, filtered.length) }}–{{ Math.min(page*perPage, filtered.length) }} of {{ filtered.length }}
          </span>
          <nav><ul class="pagination pagination-sm mb-0">
            <li class="page-item" :class="{disabled:page===1}"><a class="page-link" href="#" @click.prevent="page--">‹</a></li>
            <li class="page-item" v-for="p in visiblePages" :key="p" :class="{active:p===page}">
              <a class="page-link" href="#" @click.prevent="page=p">{{ p }}</a>
            </li>
            <li class="page-item" :class="{disabled:page===totalPages}"><a class="page-link" href="#" @click.prevent="page++">›</a></li>
          </ul></nav>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML + JS</span>
          <button class="copy-btn" @click="copy('grid', codes.grid)"><i class="bi bi-clipboard me-1"></i>{{ copied==='grid'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.grid }}</code></pre>
      </div>
    </div>

    <!-- Edit Modal -->
    <div v-if="editTarget" class="modal-backdrop-custom" @click.self="editTarget=null">
      <div class="modal-box">
        <div class="modal-box__header">
          <h6 class="mb-0">Edit Record</h6>
          <button class="btn-close-custom" @click="editTarget=null"><i class="bi bi-x"></i></button>
        </div>
        <div class="modal-box__body">
          <div class="row g-3">
            <div class="col-6"><label class="form-label">Name</label><input v-model="editTarget.name" class="form-control form-control-sm" /></div>
            <div class="col-6"><label class="form-label">Email</label><input v-model="editTarget.email" class="form-control form-control-sm" /></div>
            <div class="col-6"><label class="form-label">Department</label><input v-model="editTarget.dept" class="form-control form-control-sm" /></div>
            <div class="col-6"><label class="form-label">Salary</label><input v-model.number="editTarget.salary" type="number" class="form-control form-control-sm" /></div>
            <div class="col-12"><label class="form-label">Status</label>
              <select v-model="editTarget.status" class="form-select form-select-sm">
                <option>Active</option><option>Inactive</option><option>Pending</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-box__footer">
          <button class="btn btn-sm btn-outline-secondary" @click="editTarget=null">Cancel</button>
          <button class="btn btn-sm btn-primary" @click="saveEdit">Save</button>
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const COLORS = ['#5b73e8','#fd7e14','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#1abc9c','#e67e22']
const NAMES  = ['Alice Johnson','Bob Smith','Carol White','David Brown','Eva Martinez','Frank Lee','Grace Kim','Henry Wilson','Iris Chen','Jack Davis','Karen Moore','Liam Taylor','Mia Anderson','Noah Thomas','Olivia Jackson']
const DEPTS  = ['Engineering','Marketing','Sales','HR','Finance','Design','Operations']

const rows = ref(Array.from({length:30}, (_,i) => ({
  id: i+1, name: NAMES[i%NAMES.length],
  email: NAMES[i%NAMES.length].toLowerCase().replace(' ','.')+`@company.com`,
  dept: DEPTS[i%DEPTS.length], salary: 40000+(i*2800),
  status: ['Active','Active','Active','Inactive','Pending'][i%5],
  color: COLORS[i%COLORS.length],
})))

const search = ref(''), sortKey = ref('id'), sortAsc = ref(true)
const page = ref(1), perPage = ref(10)
const selected = ref([]), allSelected = ref(false), editTarget = ref(null), showAdd = ref(false)
const copied = ref('')

const cols = [
  {key:'id',label:'#'},{key:'name',label:'Name'},{key:'email',label:'Email'},
  {key:'dept',label:'Department'},{key:'salary',label:'Salary'},{key:'status',label:'Status'},
]

const filtered = computed(() => {
  const q = search.value.toLowerCase()
  return rows.value
    .filter(r => !q || [r.name,r.email,r.dept,r.status].some(v => v.toLowerCase().includes(q)))
    .sort((a,b) => { const av=a[sortKey.value],bv=b[sortKey.value]; return sortAsc.value?(av>bv?1:-1):(av<bv?1:-1) })
})
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage.value)))
const paginated = computed(() => filtered.value.slice((page.value-1)*perPage.value, page.value*perPage.value))
const visiblePages = computed(() => {
  const total = totalPages.value, cur = page.value, pages = []
  for (let p = Math.max(1,cur-2); p <= Math.min(total,cur+2); p++) pages.push(p)
  return pages
})

function sort(key) { if(sortKey.value===key) sortAsc.value=!sortAsc.value; else{sortKey.value=key;sortAsc.value=true}; page.value=1 }
function toggleAll() { selected.value = allSelected.value ? rows.value.map(r=>r.id) : [] }
function editRow(row) { editTarget.value = {...row} }
function saveEdit() { const i=rows.value.findIndex(r=>r.id===editTarget.value.id); if(i>-1) rows.value[i]={...editTarget.value}; editTarget.value=null }
function deleteRow(id) { rows.value=rows.value.filter(r=>r.id!==id); selected.value=selected.value.filter(s=>s!==id) }
function exportCsv() {
  const header = cols.map(c=>c.label).join(',')
  const body = filtered.value.map(r => cols.map(c=>r[c.key]).join(',')).join('\n')
  const blob = new Blob([header+'\n'+body], {type:'text/csv'})
  const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='export.csv'; a.click()
}
function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}

const codes = {
  grid: `<!-- Advanced data grid with Vue 3 -->
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th><input type="checkbox" v-model="allSelected" @change="toggleAll" /></th>
        <th @click="sort('name')" style="cursor:pointer">Name</th>
        <th @click="sort('email')" style="cursor:pointer">Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in paginated" :key="row.id">
        <td><input type="checkbox" :value="row.id" v-model="selected" /></td>
        <td>{{ row.name }}</td>
        <td>{{ row.email }}</td>
        <td>
          <button @click="editRow(row)">Edit</button>
          <button @click="deleteRow(row.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Pagination -->
<ul class="pagination pagination-sm">
  <li class="page-item" :class="{disabled: page===1}">
    <a class="page-link" @click.prevent="page--">‹</a>
  </li>
  <li class="page-item" v-for="p in totalPages" :key="p" :class="{active: p===page}">
    <a class="page-link" @click.prevent="page=p">{{ p }}</a>
  </li>
  <li class="page-item" :class="{disabled: page===totalPages}">
    <a class="page-link" @click.prevent="page++">›</a>
  </li>
</ul>`,
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
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.grid-toolbar { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; }
.sortable-th { cursor: pointer; user-select: none; white-space: nowrap; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); }
.sortable-th:hover { color: var(--accent); }
.selected { background: rgba(253,126,20,0.05) !important; }
.avatar-sm { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: #fff; flex-shrink: 0; }
.status-badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 600; }
.status-badge.active   { background: rgba(46,204,113,0.15); color: #2ecc71; }
.status-badge.inactive { background: rgba(231,76,60,0.15);  color: #e74c3c; }
.status-badge.pending  { background: rgba(241,196,15,0.15); color: #d4ac0d; }
.action-btn { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 5px; padding: 3px 7px; color: var(--text-muted); cursor: pointer; font-size: 0.78rem; transition: all 0.15s; }
.action-btn:hover { border-color: var(--accent); color: var(--accent); }
.action-btn--danger:hover { border-color: var(--danger); color: var(--danger); }
.grid-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.modal-backdrop-custom { position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 1050; display: flex; align-items: center; justify-content: center; padding: 16px; }
.modal-box { background: var(--card-bg); border-radius: 12px; width: 100%; max-width: 480px; box-shadow: 0 20px 60px rgba(0,0,0,0.25); }
.modal-box__header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--card-border); color: var(--text-primary); }
.modal-box__body { padding: 20px; }
.modal-box__footer { display: flex; justify-content: flex-end; gap: 8px; padding: 14px 20px; border-top: 1px solid var(--card-border); }
.btn-close-custom { background: none; border: none; color: var(--text-muted); font-size: 1.1rem; cursor: pointer; padding: 0; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 260px; font-family: 'Courier New', monospace; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .grid-toolbar { flex-direction: column; align-items: stretch; } }
</style>
