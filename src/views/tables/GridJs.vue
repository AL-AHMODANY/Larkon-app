<template>
  <div class="page-wrapper">
    <CdnSection />

    <div class="page-layout">
      <div class="page-main">
        <div class="page-header">
          <h4 class="page-title">Grid.js Tables</h4>
          <p class="page-subtitle">Advanced data grid with search, sort, inline edit, and CSV export.</p>
        </div>

        <!-- Advanced Data Grid -->
        <div id="data-grid" class="demo-card">
          <h6 class="demo-title">Advanced Data Grid</h6>
          <p class="demo-desc">Full-featured data grid with multi-column sort, row selection, inline edit, and CSV export.</p>
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
                <button class="btn btn-sm btn-primary" @click="addRow"><i class="bi bi-plus me-1"></i>Add Row</button>
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

      <!-- Right TOC -->
      <aside class="toc-sidebar d-none d-xl-block">
        <div class="toc-title">ON THIS PAGE</div>
        <nav class="toc-nav">
          <a href="#data-grid" class="toc-link" :class="{ active: true }">Advanced Data Grid</a>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
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
const selected = ref([]), allSelected = ref(false), editTarget = ref(null)
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
function addRow() {
  const newId = rows.value.length ? Math.max(...rows.value.map(r=>r.id)) + 1 : 1
  rows.value.unshift({ id:newId, name:'New Employee', email:'new@company.com', dept:'Engineering', salary:50000, status:'Active', color:COLORS[newId%COLORS.length] })
  page.value = 1
}
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
  grid: `<!-- ── Toolbar ─────────────────────────────────────── -->
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:14px;">
  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
    <input type="text" id="gridSearch" class="form-control form-control-sm"
      style="width:220px" placeholder="Search all columns..." />
    <select id="gridPerPage" class="form-select form-select-sm" style="width:90px">
      <option value="5">5</option>
      <option value="10" selected>10</option>
      <option value="25">25</option>
    </select>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <button class="btn btn-sm btn-outline-secondary" id="btnExport">
      <i class="bi bi-download me-1"></i>Export
    </button>
    <button class="btn btn-sm btn-primary" id="btnAddRow">
      <i class="bi bi-plus me-1"></i>Add Row
    </button>
  </div>
</div>

<!-- ── Table ─────────────────────────────────────────── -->
<div class="table-responsive">
  <table class="table mb-0" id="dataGrid">
    <thead>
      <tr>
        <th><input type="checkbox" class="form-check-input" id="selectAll" /></th>
        <th class="sortable-th" data-col="id">#</th>
        <th class="sortable-th" data-col="name">Name</th>
        <th class="sortable-th" data-col="email">Email</th>
        <th class="sortable-th" data-col="dept">Department</th>
        <th class="sortable-th" data-col="salary">Salary</th>
        <th class="sortable-th" data-col="status">Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="gridBody"></tbody>
  </table>
</div>

<!-- ── Footer ────────────────────────────────────────── -->
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:14px;">
  <span class="text-muted" id="gridInfo" style="font-size:0.8rem;"></span>
  <nav><ul class="pagination pagination-sm mb-0" id="gridPagination"></ul></nav>
</div>

<!-- ── Edit Modal ─────────────────────────────────────── -->
<div id="editModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:1050;align-items:center;justify-content:center;padding:16px;">
  <div style="background:#fff;border-radius:12px;width:100%;max-width:480px;box-shadow:0 20px 60px rgba(0,0,0,0.25);">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #eef2f7;">
      <h6 style="margin:0;font-weight:700;">Edit Record</h6>
      <button id="closeModal" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:#8996af;">✕</button>
    </div>
    <div style="padding:20px;">
      <div class="row g-3">
        <div class="col-6"><label class="form-label">Name</label><input id="editName" class="form-control form-control-sm" /></div>
        <div class="col-6"><label class="form-label">Email</label><input id="editEmail" class="form-control form-control-sm" /></div>
        <div class="col-6"><label class="form-label">Department</label><input id="editDept" class="form-control form-control-sm" /></div>
        <div class="col-6"><label class="form-label">Salary</label><input id="editSalary" type="number" class="form-control form-control-sm" /></div>
        <div class="col-12"><label class="form-label">Status</label>
          <select id="editStatus" class="form-select form-select-sm">
            <option>Active</option><option>Inactive</option><option>Pending</option>
          </select>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;padding:14px 20px;border-top:1px solid #eef2f7;">
      <button class="btn btn-sm btn-outline-secondary" id="cancelEdit">Cancel</button>
      <button class="btn btn-sm btn-primary" id="saveEdit">Save</button>
    </div>
  </div>
</div>

<!-- ── Styles ─────────────────────────────────────────── -->
<style>
.sortable-th { cursor:pointer; user-select:none; white-space:nowrap; font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; color:#8996af; }
.sortable-th:hover { color:#fd7e14; }
.grid-avatar { width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; color:#fff; flex-shrink:0; vertical-align:middle; margin-right:8px; }
.status-pill { display:inline-block; padding:2px 10px; border-radius:20px; font-size:0.72rem; font-weight:600; }
.s-active   { background:rgba(46,204,113,0.15); color:#2ecc71; }
.s-inactive { background:rgba(231,76,60,0.15);  color:#e74c3c; }
.s-pending  { background:rgba(241,196,15,0.15); color:#d4ac0d; }
.act-btn { background:#f3f4f9; border:1px solid #eef2f7; border-radius:5px; padding:3px 7px; color:#8996af; cursor:pointer; font-size:0.78rem; transition:all 0.15s; }
.act-btn:hover { border-color:#fd7e14; color:#fd7e14; }
.act-btn.del:hover { border-color:#e74c3c; color:#e74c3c; }
tr.row-selected { background:rgba(253,126,20,0.05) !important; }
</style>

<!-- ── JavaScript ─────────────────────────────────────── -->
<script>
(function () {
  var COLORS = ['#5b73e8','#fd7e14','#2ecc71','#e74c3c','#f1c40f','#9b59b6','#1abc9c','#e67e22']
  var NAMES  = ['Alice Johnson','Bob Smith','Carol White','David Brown','Eva Martinez',
                'Frank Lee','Grace Kim','Henry Wilson','Iris Chen','Jack Davis',
                'Karen Moore','Liam Taylor','Mia Anderson','Noah Thomas','Olivia Jackson']
  var DEPTS  = ['Engineering','Marketing','Sales','HR','Finance','Design','Operations']

  // ── Initial data ──────────────────────────────────────
  var rows = Array.from({ length: 30 }, function(_, i) {
    return {
      id: i + 1,
      name: NAMES[i % NAMES.length],
      email: NAMES[i % NAMES.length].toLowerCase().replace(' ', '.') + '@company.com',
      dept: DEPTS[i % DEPTS.length],
      salary: 40000 + i * 2800,
      status: ['Active','Active','Active','Inactive','Pending'][i % 5],
      color: COLORS[i % COLORS.length],
    }
  })

  var sortKey = 'id', sortAsc = true, page = 1, perPage = 10
  var query = '', selected = [], editId = null

  // ── Helpers ───────────────────────────────────────────
  function filtered() {
    var q = query.toLowerCase()
    return rows
      .filter(function(r) {
        return !q || [r.name, r.email, r.dept, r.status].some(function(v) {
          return v.toLowerCase().includes(q)
        })
      })
      .sort(function(a, b) {
        var av = a[sortKey], bv = b[sortKey]
        return sortAsc ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1)
      })
  }

  function statusClass(s) {
    return s === 'Active' ? 's-active' : s === 'Inactive' ? 's-inactive' : 's-pending'
  }

  // ── Render ────────────────────────────────────────────
  function render() {
    var data = filtered()
    var total = data.length
    var totalPages = Math.max(1, Math.ceil(total / perPage))
    if (page > totalPages) page = totalPages
    var slice = data.slice((page - 1) * perPage, page * perPage)

    // Body
    document.getElementById('gridBody').innerHTML = slice.map(function(r) {
      var isSel = selected.includes(r.id)
      return '<tr class="' + (isSel ? 'row-selected' : '') + '" data-id="' + r.id + '">' +
        '<td><input type="checkbox" class="form-check-input row-check" value="' + r.id + '"' + (isSel ? ' checked' : '') + ' /></td>' +
        '<td>' + r.id + '</td>' +
        '<td><span class="grid-avatar" style="background:' + r.color + '">' + r.name[0] + '</span><strong>' + r.name + '</strong></td>' +
        '<td>' + r.email + '</td>' +
        '<td>' + r.dept + '</td>' +
        '<td>$' + r.salary.toLocaleString() + '</td>' +
        '<td><span class="status-pill ' + statusClass(r.status) + '">' + r.status + '</span></td>' +
        '<td><button class="act-btn edit-btn me-1" data-id="' + r.id + '"><i class="bi bi-pencil"></i></button>' +
            '<button class="act-btn del del-btn" data-id="' + r.id + '"><i class="bi bi-trash"></i></button></td>' +
        '</tr>'
    }).join('')

    // Info
    var selTxt = selected.length ? selected.length + ' selected · ' : ''
    document.getElementById('gridInfo').textContent =
      selTxt + 'Showing ' + Math.min((page-1)*perPage+1, total) + '–' + Math.min(page*perPage, total) + ' of ' + total

    // Pagination
    var pag = ''
    pag += '<li class="page-item' + (page===1?' disabled':'') + '"><a class="page-link" href="#" data-p="' + (page-1) + '">‹</a></li>'
    for (var p = Math.max(1,page-2); p <= Math.min(totalPages,page+2); p++) {
      pag += '<li class="page-item' + (p===page?' active':'') + '"><a class="page-link" href="#" data-p="' + p + '">' + p + '</a></li>'
    }
    pag += '<li class="page-item' + (page===totalPages?' disabled':'') + '"><a class="page-link" href="#" data-p="' + (page+1) + '">›</a></li>'
    document.getElementById('gridPagination').innerHTML = pag
  }

  // ── Sort ──────────────────────────────────────────────
  document.getElementById('dataGrid').addEventListener('click', function(e) {
    var th = e.target.closest('.sortable-th')
    if (th) {
      var col = th.dataset.col
      if (sortKey === col) sortAsc = !sortAsc
      else { sortKey = col; sortAsc = true }
      page = 1; render(); return
    }
    var editBtn = e.target.closest('.edit-btn')
    if (editBtn) { openEdit(parseInt(editBtn.dataset.id)); return }
    var delBtn = e.target.closest('.del-btn')
    if (delBtn) {
      var id = parseInt(delBtn.dataset.id)
      rows = rows.filter(function(r) { return r.id !== id })
      selected = selected.filter(function(s) { return s !== id })
      render(); return
    }
    var chk = e.target.closest('.row-check')
    if (chk) {
      var rid = parseInt(chk.value)
      if (chk.checked) { if (!selected.includes(rid)) selected.push(rid) }
      else selected = selected.filter(function(s) { return s !== rid })
      render()
    }
  })

  // ── Select all ────────────────────────────────────────
  document.getElementById('selectAll').addEventListener('change', function() {
    selected = this.checked ? rows.map(function(r) { return r.id }) : []
    render()
  })

  // ── Search ────────────────────────────────────────────
  document.getElementById('gridSearch').addEventListener('input', function() {
    query = this.value; page = 1; render()
  })

  // ── Per page ──────────────────────────────────────────
  document.getElementById('gridPerPage').addEventListener('change', function() {
    perPage = parseInt(this.value); page = 1; render()
  })

  // ── Pagination ────────────────────────────────────────
  document.getElementById('gridPagination').addEventListener('click', function(e) {
    e.preventDefault()
    var a = e.target.closest('a[data-p]')
    if (!a) return
    var np = parseInt(a.dataset.p)
    var totalPages = Math.max(1, Math.ceil(filtered().length / perPage))
    if (np >= 1 && np <= totalPages) { page = np; render() }
  })

  // ── Export CSV ────────────────────────────────────────
  document.getElementById('btnExport').addEventListener('click', function() {
    var cols = ['id','name','email','dept','salary','status']
    var header = cols.join(',')
    var body = filtered().map(function(r) { return cols.map(function(c) { return r[c] }).join(',') }).join('\\n')
    var blob = new Blob([header + '\\n' + body], { type: 'text/csv' })
    var a = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = 'export.csv'; a.click()
  })

  // ── Add row ───────────────────────────────────────────
  document.getElementById('btnAddRow').addEventListener('click', function() {
    var newId = rows.length ? Math.max.apply(null, rows.map(function(r) { return r.id })) + 1 : 1
    rows.unshift({
      id: newId, name: 'New Employee',
      email: 'new@company.com', dept: 'Engineering',
      salary: 50000, status: 'Active',
      color: COLORS[newId % COLORS.length],
    })
    page = 1; render()
  })

  // ── Edit modal ────────────────────────────────────────
  function openEdit(id) {
    var row = rows.find(function(r) { return r.id === id })
    if (!row) return
    editId = id
    document.getElementById('editName').value   = row.name
    document.getElementById('editEmail').value  = row.email
    document.getElementById('editDept').value   = row.dept
    document.getElementById('editSalary').value = row.salary
    document.getElementById('editStatus').value = row.status
    document.getElementById('editModal').style.display = 'flex'
  }

  function closeModal() {
    document.getElementById('editModal').style.display = 'none'
    editId = null
  }

  document.getElementById('closeModal').addEventListener('click', closeModal)
  document.getElementById('cancelEdit').addEventListener('click', closeModal)
  document.getElementById('editModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal()
  })

  document.getElementById('saveEdit').addEventListener('click', function() {
    var idx = rows.findIndex(function(r) { return r.id === editId })
    if (idx > -1) {
      rows[idx].name   = document.getElementById('editName').value
      rows[idx].email  = document.getElementById('editEmail').value
      rows[idx].dept   = document.getElementById('editDept').value
      rows[idx].salary = parseInt(document.getElementById('editSalary').value) || rows[idx].salary
      rows[idx].status = document.getElementById('editStatus').value
    }
    closeModal(); render()
  })

  render()
})()
<\/script>`,
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
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .page-main { padding-right: 0; } .grid-toolbar { flex-direction: column; align-items: stretch; } }
</style>
