import{B as e,H as t,M as n,P as r,Y as i,b as a,d as o,f as s,h as c,l as ee,m as l,q as u,t as te,v as d,x as f,y as p}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as m,t as h}from"./Footer-Ck9cRuzL.js";var g={class:`page-wrapper`},ne={class:`demo-card`},re={class:`demo-box`},ie={class:`table-responsive`},ae={class:`table table-bordered mb-0`},oe={class:`code-block mt-3`},se={class:`code-bar`},_={class:`code-body`},v={class:`demo-card`},y={class:`demo-box`},b={class:`table-responsive`},x={class:`table table-striped table-hover mb-0`},S={class:`fw-semibold`},C={class:`code-block mt-3`},w={class:`code-bar`},T={class:`code-body`},E={class:`demo-card`},D={class:`demo-box`},O={class:`d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2`},k={class:`text-muted`,style:{"font-size":`0.8rem`}},A={class:`table-responsive`},j={class:`table mb-0`},M=[`onClick`],N={class:`d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2`},P={class:`text-muted`,style:{"font-size":`0.8rem`}},F={class:`pagination pagination-sm mb-0`},ce=[`onClick`],I={class:`code-block mt-3`},L={class:`code-bar`},R={class:`code-body`},z={class:`demo-card`},B={class:`code-block mt-3`},V={class:`code-bar`},H={class:`code-body`},U=5,W=te({__name:`BasicTables`,setup(te){let W=t(``);function G(e,t){navigator.clipboard.writeText(t).catch(()=>{}),W.value=e,setTimeout(()=>{W.value=``},2e3)}let le=[{id:1,first:`Anna`,last:`Hines`,email:`anna@mail.com`,role:`Admin`,status:`Active`},{id:2,first:`Judith`,last:`Fritsche`,email:`judith@mail.com`,role:`Editor`,status:`Active`},{id:3,first:`Peter`,last:`Smith`,email:`peter@mail.com`,role:`Viewer`,status:`Inactive`},{id:4,first:`Emmanuel`,last:`Delcid`,email:`emm@mail.com`,role:`Editor`,status:`Active`},{id:5,first:`William`,last:`Cook`,email:`william@mail.com`,role:`Moderator`,status:`Pending`}],K=[{name:`MacBook Pro`,cat:`Electronics`,price:`1299`,stock:42},{name:`iPhone 15`,cat:`Electronics`,price:`999`,stock:128},{name:`AirPods Pro`,cat:`Audio`,price:`249`,stock:67},{name:`iPad Air`,cat:`Tablets`,price:`599`,stock:31},{name:`Apple Watch`,cat:`Wearables`,price:`399`,stock:55}],ue=Array.from({length:20},(e,t)=>({id:t+1,name:[`Alice Johnson`,`Bob Smith`,`Carol White`,`David Brown`,`Eva Martinez`,`Frank Lee`,`Grace Kim`,`Henry Wilson`,`Iris Chen`,`Jack Davis`][t%10],dept:[`Engineering`,`Marketing`,`Sales`,`HR`,`Finance`][t%5],salary:45e3+t*3500,status:[`Active`,`Active`,`Active`,`Inactive`,`Pending`][t%5]})),q=t(``),J=t(`id`),Y=t(!0),X=t(1),de=[{key:`id`,label:`#`},{key:`name`,label:`Name`},{key:`dept`,label:`Department`},{key:`salary`,label:`Salary`},{key:`status`,label:`Status`}],Z=l(()=>{let e=q.value.toLowerCase();return ue.filter(t=>!e||Object.values(t).some(t=>String(t).toLowerCase().includes(e))).sort((e,t)=>{let n=e[J.value],r=t[J.value];return Y.value?n>r?1:-1:n<r?1:-1})}),Q=l(()=>Math.ceil(Z.value.length/U)),fe=l(()=>Z.value.slice((X.value-1)*U,X.value*U));function pe(e){J.value===e?Y.value=!Y.value:(J.value=e,Y.value=!0),X.value=1}let $={basic:`<table class="table table-bordered">
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
</table>`,striped:`<!-- Striped rows -->
<table class="table table-striped">...</table>

<!-- Hover state -->
<table class="table table-hover">...</table>

<!-- Both combined -->
<table class="table table-striped table-hover">...</table>

<!-- Responsive wrapper -->
<div class="table-responsive">
  <table class="table table-striped table-hover">...</table>
</div>`,sortable:`<!-- Sortable table with Vue 3 -->
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
import CdnSection from '../../components/CdnSection.vue'
const sortKey = ref('name')
const sortAsc = ref(true)
function sort(key) {
  if (sortKey.value === key) sortAsc.value = !sortAsc.value
  else { sortKey.value = key; sortAsc.value = true }
}
<\/script>`,contextual:`<table class="table">
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
</table>`};return(t,l)=>(n(),d(`div`,g,[f(m),l[24]||=c(`div`,{class:`page-header`},[c(`h4`,{class:`page-title`},`Basic Tables`),c(`p`,{class:`page-subtitle`},`Bootstrap 5 table components with sorting, striping, and responsive layouts.`)],-1),c(`div`,ne,[l[10]||=c(`h6`,{class:`demo-title`},`Basic Table`,-1),l[11]||=c(`p`,{class:`demo-desc`},[a(`Use the `),c(`code`,null,`.table`),a(` class for a basic table with horizontal dividers.`)],-1),c(`div`,re,[c(`div`,ie,[c(`table`,ae,[l[7]||=c(`thead`,null,[c(`tr`,null,[c(`th`,null,`#`),c(`th`,null,`First Name`),c(`th`,null,`Last Name`),c(`th`,null,`Email`),c(`th`,null,`Role`),c(`th`,null,`Status`)])],-1),c(`tbody`,null,[(n(),d(s,null,r(le,e=>c(`tr`,{key:e.id},[c(`td`,null,i(e.id),1),c(`td`,null,i(e.first),1),c(`td`,null,i(e.last),1),c(`td`,null,i(e.email),1),c(`td`,null,i(e.role),1),c(`td`,null,[c(`span`,{class:u([`status-badge`,e.status.toLowerCase()])},i(e.status),3)])])),64))])])])]),c(`div`,oe,[c(`div`,se,[l[9]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:l[0]||=e=>G(`basic`,$.basic)},[l[8]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(i(W.value===`basic`?`Copied!`:`Copy`),1)])]),c(`pre`,_,[c(`code`,null,i($.basic),1)])])]),c(`div`,v,[l[15]||=c(`h6`,{class:`demo-title`},`Striped & Hover`,-1),l[16]||=c(`p`,{class:`demo-desc`},[a(`Add `),c(`code`,null,`.table-striped`),a(` for zebra-striping and `),c(`code`,null,`.table-hover`),a(` for hover states.`)],-1),c(`div`,y,[c(`div`,b,[c(`table`,x,[l[12]||=c(`thead`,null,[c(`tr`,null,[c(`th`,null,`Product`),c(`th`,null,`Category`),c(`th`,null,`Price`),c(`th`,null,`Stock`)])],-1),c(`tbody`,null,[(n(),d(s,null,r(K,e=>c(`tr`,{key:e.name},[c(`td`,S,i(e.name),1),c(`td`,null,i(e.cat),1),c(`td`,null,`$`+i(e.price),1),c(`td`,null,i(e.stock),1)])),64))])])])]),c(`div`,C,[c(`div`,w,[l[14]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:l[1]||=e=>G(`striped`,$.striped)},[l[13]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(i(W.value===`striped`?`Copied!`:`Copy`),1)])]),c(`pre`,T,[c(`code`,null,i($.striped),1)])])]),c(`div`,E,[l[19]||=c(`h6`,{class:`demo-title`},`Sortable Table with Pagination`,-1),l[20]||=c(`p`,{class:`demo-desc`},`Client-side sorting and pagination using Vue 3 computed properties.`,-1),c(`div`,D,[c(`div`,O,[e(c(`input`,{"onUpdate:modelValue":l[2]||=e=>q.value=e,type:`text`,class:`form-control form-control-sm`,style:{"max-width":`220px`},placeholder:`Search...`},null,512),[[ee,q.value]]),c(`span`,k,i(Z.value.length)+` results`,1)]),c(`div`,A,[c(`table`,j,[c(`thead`,null,[c(`tr`,null,[(n(),d(s,null,r(de,e=>c(`th`,{key:e.key,class:`sortable-th`,onClick:t=>pe(e.key)},[a(i(e.label)+` `,1),c(`i`,{class:u([`bi ms-1`,J.value===e.key?Y.value?`bi-sort-up`:`bi-sort-down`:`bi-arrow-down-up`]),style:{"font-size":`0.7rem`,opacity:`0.5`}},null,2)],8,M)),64))])]),c(`tbody`,null,[(n(!0),d(s,null,r(fe.value,e=>(n(),d(`tr`,{key:e.id},[c(`td`,null,i(e.id),1),c(`td`,null,i(e.name),1),c(`td`,null,i(e.dept),1),c(`td`,null,`$`+i(e.salary.toLocaleString()),1),c(`td`,null,[c(`span`,{class:u([`status-badge`,e.status.toLowerCase()])},i(e.status),3)])]))),128))])])]),c(`div`,N,[c(`span`,P,`Showing `+i((X.value-1)*U+1)+`–`+i(Math.min(X.value*U,Z.value.length))+` of `+i(Z.value.length),1),c(`nav`,null,[c(`ul`,F,[c(`li`,{class:u([`page-item`,{disabled:X.value===1}])},[c(`a`,{class:`page-link`,href:`#`,onClick:l[3]||=o(e=>X.value--,[`prevent`])},`‹`)],2),(n(!0),d(s,null,r(Q.value,e=>(n(),d(`li`,{class:u([`page-item`,{active:e===X.value}]),key:e},[c(`a`,{class:`page-link`,href:`#`,onClick:o(t=>X.value=e,[`prevent`])},i(e),9,ce)],2))),128)),c(`li`,{class:u([`page-item`,{disabled:X.value===Q.value}])},[c(`a`,{class:`page-link`,href:`#`,onClick:l[4]||=o(e=>X.value++,[`prevent`])},`›`)],2)])])])]),c(`div`,I,[c(`div`,L,[l[18]||=c(`span`,{class:`code-badge`},`HTML + JS`,-1),c(`button`,{class:`copy-btn`,onClick:l[5]||=e=>G(`sortable`,$.sortable)},[l[17]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(i(W.value===`sortable`?`Copied!`:`Copy`),1)])]),c(`pre`,R,[c(`code`,null,i($.sortable),1)])])]),c(`div`,z,[l[23]||=p(`<h6 class="demo-title" data-v-d48d766f>Contextual Colors</h6><p class="demo-desc" data-v-d48d766f>Use <code data-v-d48d766f>.table-{color}</code> classes to color entire rows.</p><div class="demo-box" data-v-d48d766f><div class="table-responsive" data-v-d48d766f><table class="table mb-0" data-v-d48d766f><thead data-v-d48d766f><tr data-v-d48d766f><th data-v-d48d766f>Class</th><th data-v-d48d766f>Description</th><th data-v-d48d766f>Example</th></tr></thead><tbody data-v-d48d766f><tr class="table-primary" data-v-d48d766f><td data-v-d48d766f><code data-v-d48d766f>.table-primary</code></td><td data-v-d48d766f>Blue — primary action</td><td data-v-d48d766f>Primary row</td></tr><tr class="table-success" data-v-d48d766f><td data-v-d48d766f><code data-v-d48d766f>.table-success</code></td><td data-v-d48d766f>Green — successful action</td><td data-v-d48d766f>Success row</td></tr><tr class="table-danger" data-v-d48d766f><td data-v-d48d766f><code data-v-d48d766f>.table-danger</code></td><td data-v-d48d766f>Red — dangerous action</td><td data-v-d48d766f>Danger row</td></tr><tr class="table-warning" data-v-d48d766f><td data-v-d48d766f><code data-v-d48d766f>.table-warning</code></td><td data-v-d48d766f>Yellow — warning</td><td data-v-d48d766f>Warning row</td></tr><tr class="table-info" data-v-d48d766f><td data-v-d48d766f><code data-v-d48d766f>.table-info</code></td><td data-v-d48d766f>Cyan — informational</td><td data-v-d48d766f>Info row</td></tr></tbody></table></div></div>`,3),c(`div`,B,[c(`div`,V,[l[22]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:l[6]||=e=>G(`contextual`,$.contextual)},[l[21]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(i(W.value===`contextual`?`Copied!`:`Copy`),1)])]),c(`pre`,H,[c(`code`,null,i($.contextual),1)])])]),f(h)]))}},[[`__scopeId`,`data-v-d48d766f`]]);export{W as default};