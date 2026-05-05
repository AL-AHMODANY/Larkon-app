import{H as e,M as t,P as n,Y as r,_ as i,b as a,d as o,f as s,h as c,q as l,t as u,v as d,x as f,y as p}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as m,t as h}from"./Footer-Ck9cRuzL.js";var g={class:`page-wrapper`},_={class:`demo-card`},v={class:`code-block mt-3`},y={class:`code-bar`},b={class:`code-body`},x={class:`demo-card`},S={class:`demo-box`},C={class:`drop-zone__text`},w={class:`drop-zone__browse`},T={key:0,class:`file-list mt-3`},E={class:`file-item__info`},D={class:`file-item__name`},O={class:`file-item__size`},k=[`onClick`],A={class:`code-block mt-3`},j={class:`code-bar`},M={class:`code-body`},N={class:`demo-card`},P={class:`demo-box`},F={class:`row g-3 align-items-start`},I={class:`col-12 col-md-6`},L={key:0,class:`col-12 col-md-6`},R={class:`img-preview`},z=[`src`],B={class:`code-block mt-3`},V={class:`code-bar`},H={class:`code-body`},U=u({__name:`FileUpload`,setup(u){let U=e(!1),W=e([]),G=e(null),K=e(``);function q(e,t){navigator.clipboard.writeText(t).catch(()=>{}),K.value=e,setTimeout(()=>{K.value=``},2e3)}function J(e){W.value=[...W.value,...Array.from(e.target.files)]}function Y(e){U.value=!1,W.value=[...W.value,...Array.from(e.dataTransfer.files)]}function X(e){let t=e.target.files[0];t&&(G.value=URL.createObjectURL(t))}function Z(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}function Q(e){let t=e.split(`.`).pop().toLowerCase();return[`jpg`,`jpeg`,`png`,`gif`,`webp`].includes(t)?`bi bi-file-image text-success`:t===`pdf`?`bi bi-file-pdf text-danger`:[`doc`,`docx`].includes(t)?`bi bi-file-word text-primary`:`bi bi-file-earmark text-secondary`}let $={basic:`<!-- Single file -->
<input class="form-control" type="file" />

<!-- Multiple files -->
<input class="form-control" type="file" multiple />

<!-- Images only -->
<input class="form-control" type="file" accept="image/*" />

<!-- PDF only -->
<input class="form-control" type="file" accept=".pdf" />`,drop:`<div class="drop-zone"
  @dragover.prevent="isDragging = true"
  @dragleave.prevent="isDragging = false"
  @drop.prevent="onDrop">
  <p>Drag & drop files here, or <label>browse<input type="file" hidden /></label></p>
</div>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
const isDragging = ref(false)
function onDrop(e) {
  isDragging.value = false
  const files = Array.from(e.dataTransfer.files)
  // handle files...
}
<\/script>`,preview:`<input class="form-control" type="file" accept="image/*" @change="onImageSelect" />
<img v-if="previewUrl" :src="previewUrl" alt="Preview" />

<script setup>
import CdnSection from '../../components/CdnSection.vue'
const previewUrl = ref(null)
function onImageSelect(e) {
  const file = e.target.files[0]
  if (file) previewUrl.value = URL.createObjectURL(file)
}
<\/script>`};return(e,u)=>(t(),d(`div`,g,[f(m),u[23]||=c(`div`,{class:`page-header`},[c(`h4`,{class:`page-title`},`File Upload`),c(`p`,{class:`page-subtitle`},`File upload components with drag-and-drop and preview support.`)],-1),c(`div`,_,[u[7]||=p(`<h6 class="demo-title" data-v-5b5108e1>Basic File Input</h6><p class="demo-desc" data-v-5b5108e1>Use <code data-v-5b5108e1>.form-control</code> on <code data-v-5b5108e1>input[type=&quot;file&quot;]</code> for consistent styling.</p><div class="demo-box" data-v-5b5108e1><div class="row g-3" data-v-5b5108e1><div class="col-12 col-md-6" data-v-5b5108e1><label class="form-label" data-v-5b5108e1>Single File</label><input class="form-control" type="file" data-v-5b5108e1></div><div class="col-12 col-md-6" data-v-5b5108e1><label class="form-label" data-v-5b5108e1>Multiple Files</label><input class="form-control" type="file" multiple data-v-5b5108e1></div><div class="col-12 col-md-6" data-v-5b5108e1><label class="form-label" data-v-5b5108e1>Images Only</label><input class="form-control" type="file" accept="image/*" data-v-5b5108e1></div><div class="col-12 col-md-6" data-v-5b5108e1><label class="form-label" data-v-5b5108e1>PDF Only</label><input class="form-control" type="file" accept=".pdf" data-v-5b5108e1></div></div></div>`,3),c(`div`,v,[c(`div`,y,[u[6]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:u[0]||=e=>q(`basic`,$.basic)},[u[5]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(r(K.value===`basic`?`Copied!`:`Copy`),1)])]),c(`pre`,b,[c(`code`,null,r($.basic),1)])])]),c(`div`,x,[u[15]||=c(`h6`,{class:`demo-title`},`Drag & Drop Upload`,-1),u[16]||=c(`p`,{class:`demo-desc`},`Custom drag-and-drop zone with file list preview.`,-1),c(`div`,S,[c(`div`,{class:l([`drop-zone`,{"drop-zone--active":U.value}]),onDragover:u[1]||=o(e=>U.value=!0,[`prevent`]),onDragleave:u[2]||=o(e=>U.value=!1,[`prevent`]),onDrop:o(Y,[`prevent`])},[u[10]||=c(`div`,{class:`drop-zone__icon`},[c(`i`,{class:`bi bi-cloud-upload`})],-1),c(`p`,C,[u[9]||=a(`Drag & drop files here, or `,-1),c(`label`,w,[u[8]||=a(`browse`,-1),c(`input`,{type:`file`,multiple:``,hidden:``,onChange:J},null,32)])]),u[11]||=c(`p`,{class:`drop-zone__hint`},`Supports: JPG, PNG, PDF, DOCX (max 10MB)`,-1)],34),W.value.length?(t(),d(`div`,T,[(t(!0),d(s,null,n(W.value,(e,n)=>(t(),d(`div`,{key:n,class:`file-item`},[c(`i`,{class:l([Q(e.name),`file-item__icon`])},null,2),c(`div`,E,[c(`span`,D,r(e.name),1),c(`span`,O,r(Z(e.size)),1)]),c(`button`,{class:`file-item__remove`,onClick:e=>W.value.splice(n,1)},[...u[12]||=[c(`i`,{class:`bi bi-x`},null,-1)]],8,k)]))),128))])):i(``,!0)]),c(`div`,A,[c(`div`,j,[u[14]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:u[3]||=e=>q(`drop`,$.drop)},[u[13]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(r(K.value===`drop`?`Copied!`:`Copy`),1)])]),c(`pre`,M,[c(`code`,null,r($.drop),1)])])]),c(`div`,N,[u[21]||=c(`h6`,{class:`demo-title`},`Image Preview`,-1),u[22]||=c(`p`,{class:`demo-desc`},`Show a live preview of the selected image before uploading.`,-1),c(`div`,P,[c(`div`,F,[c(`div`,I,[u[17]||=c(`label`,{class:`form-label`},`Select Image`,-1),c(`input`,{class:`form-control`,type:`file`,accept:`image/*`,onChange:X},null,32)]),G.value?(t(),d(`div`,L,[u[18]||=c(`label`,{class:`form-label`},`Preview`,-1),c(`div`,R,[c(`img`,{src:G.value,alt:`Preview`},null,8,z)])])):i(``,!0)])]),c(`div`,B,[c(`div`,V,[u[20]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:u[4]||=e=>q(`preview`,$.preview)},[u[19]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(r(K.value===`preview`?`Copied!`:`Copy`),1)])]),c(`pre`,H,[c(`code`,null,r($.preview),1)])])]),f(h)]))}},[[`__scopeId`,`data-v-5b5108e1`]]);export{U as default};