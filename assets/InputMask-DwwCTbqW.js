import{H as e,M as t,Y as n,b as r,h as i,t as a,v as o,x as s}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as c,t as l}from"./Footer-Ck9cRuzL.js";var u={class:`page-wrapper`},d={class:`demo-card`},f={class:`demo-box`},p={class:`row g-4`},m={class:`col-12 col-md-6`},h=[`value`],g={class:`col-12 col-md-6`},_=[`value`],v={class:`col-12 col-md-6`},y=[`value`],b={class:`col-12 col-md-6`},x=[`value`],S={class:`col-12 col-md-6`},C=[`value`],w={class:`col-12 col-md-6`},T=[`value`],E={class:`code-block mt-3`},D={class:`code-bar`},O={class:`code-body`},k=a({__name:`InputMask`,setup(a){let k=e(``),A=e(``),j=e(``),M=e(``),N=e(``),P=e(``),F=e(``);function I(e,t){navigator.clipboard.writeText(t).catch(()=>{}),F.value=e,setTimeout(()=>{F.value=``},2e3)}function L(e){let t=e.target.value.replace(/\D/g,``).slice(0,10);t.length>=6?t=`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}`:t.length>=3&&(t=`(${t.slice(0,3)}) ${t.slice(3)}`),k.value=t}function R(e){A.value=e.target.value.replace(/\D/g,``).slice(0,16).replace(/(.{4})/g,`$1 `).trim()}function z(e){let t=e.target.value.replace(/\D/g,``).slice(0,8);t.length>=4?t=`${t.slice(0,2)}/${t.slice(2,4)}/${t.slice(4)}`:t.length>=2&&(t=`${t.slice(0,2)}/${t.slice(2)}`),j.value=t}function B(e){M.value=e.target.value.replace(/\D/g,``).slice(0,5)}function V(e){let t=e.target.value.replace(/\D/g,``).slice(0,9);t.length>=5?t=`${t.slice(0,3)}-${t.slice(3,5)}-${t.slice(5)}`:t.length>=3&&(t=`${t.slice(0,3)}-${t.slice(3)}`),N.value=t}function H(e){let t=e.target.value.replace(/\D/g,``).slice(0,4);t.length>=2&&(t=`${t.slice(0,2)}:${t.slice(2)}`),P.value=t}let U={mask:`<!-- Phone mask: (000) 000-0000 -->
<input type="text" class="form-control" :value="phone" @input="formatPhone" maxlength="14" />

<script setup>
import CdnSection from '../../components/CdnSection.vue'
const phone = ref('')
function formatPhone(e) {
  let v = e.target.value.replace(/\\D/g, '').slice(0, 10)
  if (v.length >= 6) v = \`(\${v.slice(0,3)}) \${v.slice(3,6)}-\${v.slice(6)}\`
  else if (v.length >= 3) v = \`(\${v.slice(0,3)}) \${v.slice(3)}\`
  phone.value = v
}
<\/script>

<!-- Credit card mask: 0000 0000 0000 0000 -->
<input type="text" class="form-control" :value="card" @input="formatCard" maxlength="19" />

function formatCard(e) {
  let v = e.target.value.replace(/\\D/g, '').slice(0, 16)
  card.value = v.replace(/(.{4})/g, '$1 ').trim()
}

<!-- Date mask: MM/DD/YYYY -->
<input type="text" class="form-control" :value="date" @input="formatDate" maxlength="10" />

function formatDate(e) {
  let v = e.target.value.replace(/\\D/g, '').slice(0, 8)
  if (v.length >= 4) v = \`\${v.slice(0,2)}/\${v.slice(2,4)}/\${v.slice(4)}\`
  else if (v.length >= 2) v = \`\${v.slice(0,2)}/\${v.slice(2)}\`
  date.value = v
}`};return(e,a)=>(t(),o(`div`,u,[s(c),a[17]||=i(`div`,{class:`page-header`},[i(`h4`,{class:`page-title`},`Input Mask`),i(`p`,{class:`page-subtitle`},`Formatted input fields with built-in masking patterns using Vue reactive state.`)],-1),i(`div`,d,[a[15]||=i(`h6`,{class:`demo-title`},`Common Input Masks`,-1),a[16]||=i(`p`,{class:`demo-desc`},`Live formatting applied on input — no external library required.`,-1),i(`div`,f,[i(`div`,p,[i(`div`,m,[a[1]||=i(`label`,{class:`form-label`},`Phone Number`,-1),i(`input`,{type:`text`,class:`form-control`,value:k.value,onInput:L,placeholder:`(000) 000-0000`,maxlength:`14`},null,40,h),a[2]||=i(`div`,{class:`form-text`},`Format: (000) 000-0000`,-1)]),i(`div`,g,[a[3]||=i(`label`,{class:`form-label`},`Credit Card`,-1),i(`input`,{type:`text`,class:`form-control`,value:A.value,onInput:R,placeholder:`0000 0000 0000 0000`,maxlength:`19`},null,40,_),a[4]||=i(`div`,{class:`form-text`},`Format: 0000 0000 0000 0000`,-1)]),i(`div`,v,[a[5]||=i(`label`,{class:`form-label`},`Date`,-1),i(`input`,{type:`text`,class:`form-control`,value:j.value,onInput:z,placeholder:`MM/DD/YYYY`,maxlength:`10`},null,40,y),a[6]||=i(`div`,{class:`form-text`},`Format: MM/DD/YYYY`,-1)]),i(`div`,b,[a[7]||=i(`label`,{class:`form-label`},`ZIP Code`,-1),i(`input`,{type:`text`,class:`form-control`,value:M.value,onInput:B,placeholder:`00000`,maxlength:`5`},null,40,x),a[8]||=i(`div`,{class:`form-text`},`US ZIP code (5 digits)`,-1)]),i(`div`,S,[a[9]||=i(`label`,{class:`form-label`},`SSN`,-1),i(`input`,{type:`text`,class:`form-control`,value:N.value,onInput:V,placeholder:`000-00-0000`,maxlength:`11`},null,40,C),a[10]||=i(`div`,{class:`form-text`},`Format: 000-00-0000`,-1)]),i(`div`,w,[a[11]||=i(`label`,{class:`form-label`},`Time (24h)`,-1),i(`input`,{type:`text`,class:`form-control`,value:P.value,onInput:H,placeholder:`HH:MM`,maxlength:`5`},null,40,T),a[12]||=i(`div`,{class:`form-text`},`Format: HH:MM`,-1)])])]),i(`div`,E,[i(`div`,D,[a[14]||=i(`span`,{class:`code-badge`},`HTML + JS`,-1),i(`button`,{class:`copy-btn`,onClick:a[0]||=e=>I(`mask`,U.mask)},[a[13]||=i(`i`,{class:`bi bi-clipboard me-1`},null,-1),r(n(F.value===`mask`?`Copied!`:`Copy`),1)])]),i(`pre`,O,[i(`code`,null,n(U.mask),1)])])]),s(l)]))}},[[`__scopeId`,`data-v-f5bb8cea`]]);export{k as default};