import{B as e,H as t,M as n,P as r,Y as i,a,b as o,f as s,h as c,s as l,t as u,v as d,x as f,y as p}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as m,t as h}from"./Footer-Ck9cRuzL.js";var g={class:`page-wrapper`},_={class:`demo-title`},ee=[`innerHTML`],v=[`innerHTML`],y={class:`code-block mt-3`},b={class:`code-bar`},x=[`onClick`],S={class:`code-body`},C={class:`demo-card`},w={class:`code-block mt-3`},T={class:`code-bar`},E={class:`demo-card`},D={class:`demo-box`},O={class:`row g-3`},k={class:`col-12 col-md-6`},A={class:`list-group list-group-numbered`},j={class:`ms-2 me-auto`},M={class:`fw-bold`},N={class:`badge bg-primary rounded-pill`},P={class:`code-block mt-3`},F={class:`code-bar`},I={class:`demo-card`},L={class:`demo-box`},te={class:`row g-3`},R={class:`col-12 col-md-6`},z={class:`list-group`},B=[`id`,`onUpdate:modelValue`],V=[`for`],H={class:`col-12 col-md-6`},U={class:`list-group`},W=[`id`,`value`],G=[`for`],K={class:`code-block mt-3`},q={class:`code-bar`},J=`<!-- Anchors -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a class="list-group-item list-group-item-action disabled" aria-disabled="true">
    A disabled link item
  </a>
</div>

<!-- Buttons -->
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action" disabled>
    A disabled button item
  </button>
</div>`,Y=`<!-- Simple -->
<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>

<!-- With badges -->
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>`,X=`<!-- Checkboxes -->
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-2" type="checkbox" id="checkbox1" />
    <label class="form-check-label stretched-link" for="checkbox1">First checkbox</label>
  </li>
</ul>

<!-- Radios -->
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-2" type="radio" name="listGroupRadio" id="radio1" />
    <label class="form-check-label stretched-link" for="radio1">First radio</label>
  </li>
</ul>`,Z=u({__name:`Listgroup`,setup(u){let Z=t(``);function Q(e,t){navigator.clipboard.writeText(t).catch(()=>{}),Z.value=e,setTimeout(()=>{Z.value=``},2e3)}let ne=t([{title:`Subheading`,content:`Content for list item`,badge:14},{title:`Subheading`,content:`Content for list item`,badge:2},{title:`Subheading`,content:`Content for list item`,badge:1}]),re=t([{label:`First checkbox`,checked:!0},{label:`Second checkbox`,checked:!1},{label:`Third checkbox`,checked:!1}]),ie=[`First radio`,`Second radio`,`Third radio`],$=t(0),ae=[{id:`basic`,title:`Basic Example`,desc:`The most basic list group is an unordered list with list items and the proper classes.`,preview:`<ul class="list-group" style="max-width:360px"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>`,code:`<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`},{id:`active`,title:`Active Items`,desc:`Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.`,preview:`<ul class="list-group" style="max-width:360px"><li class="list-group-item active" aria-current="true">An active item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,code:`<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`},{id:`disabled`,title:`Disabled Items`,desc:`Add <code>.disabled</code> to a <code>.list-group-item</code> to make it appear disabled.`,preview:`<ul class="list-group" style="max-width:360px"><li class="list-group-item disabled" aria-disabled="true">A disabled item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,code:`<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`},{id:`flush`,title:`Flush`,desc:`Add <code>.list-group-flush</code> to remove borders and rounded corners.`,preview:`<ul class="list-group list-group-flush" style="max-width:360px;border:1px solid #dee2e6;border-radius:.375rem"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,code:`<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`},{id:`horizontal`,title:`Horizontal`,desc:`Add <code>.list-group-horizontal</code> to change the layout from vertical to horizontal.`,preview:`<ul class="list-group list-group-horizontal mb-2"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,code:`<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`},{id:`contextual`,title:`Contextual Classes`,desc:`Use contextual classes to style list items with a stateful background and color.`,preview:`<ul class="list-group" style="max-width:440px"><li class="list-group-item">Default</li><li class="list-group-item list-group-item-primary">Primary</li><li class="list-group-item list-group-item-success">Success</li><li class="list-group-item list-group-item-danger">Danger</li><li class="list-group-item list-group-item-warning">Warning</li><li class="list-group-item list-group-item-info">Info</li></ul>`,code:`<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
</ul>`}];return(t,u)=>(n(),d(`div`,g,[f(m),u[20]||=c(`div`,{class:`page-header`},[c(`h4`,{class:`page-title`},`List Group`),c(`p`,{class:`page-subtitle`},`List groups are a flexible component for displaying a series of content.`)],-1),(n(),d(s,null,r(ae,e=>c(`div`,{key:e.id,class:`demo-card`},[c(`h6`,_,i(e.title),1),c(`p`,{class:`demo-desc`,innerHTML:e.desc},null,8,ee),c(`div`,{class:`demo-box`,innerHTML:e.preview},null,8,v),c(`div`,y,[c(`div`,b,[u[5]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:t=>Q(e.id,e.code)},[u[4]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),o(i(Z.value===e.id?`Copied!`:`Copy`),1)],8,x)]),c(`pre`,S,[c(`code`,null,i(e.code),1)])])])),64)),c(`div`,C,[u[8]||=p(`<h6 class="demo-title" data-v-b3315f6f>Links and Buttons</h6><p class="demo-desc" data-v-b3315f6f>Use <code data-v-b3315f6f>.list-group-item-action</code> for actionable items with hover, disabled, and active states.</p><div class="demo-box" data-v-b3315f6f><div class="row g-3" data-v-b3315f6f><div class="col-12 col-md-6" data-v-b3315f6f><p class="small fw-semibold text-muted mb-2" data-v-b3315f6f>Anchors</p><div class="list-group" data-v-b3315f6f><a href="#" class="list-group-item list-group-item-action active" aria-current="true" data-v-b3315f6f>The current link item</a><a href="#" class="list-group-item list-group-item-action" data-v-b3315f6f>A second link item</a><a href="#" class="list-group-item list-group-item-action" data-v-b3315f6f>A third link item</a><a class="list-group-item list-group-item-action disabled" aria-disabled="true" data-v-b3315f6f>A disabled link item</a></div></div><div class="col-12 col-md-6" data-v-b3315f6f><p class="small fw-semibold text-muted mb-2" data-v-b3315f6f>Buttons</p><div class="list-group" data-v-b3315f6f><button type="button" class="list-group-item list-group-item-action active" data-v-b3315f6f>The current button</button><button type="button" class="list-group-item list-group-item-action" data-v-b3315f6f>A second button item</button><button type="button" class="list-group-item list-group-item-action" data-v-b3315f6f>A third button item</button><button type="button" class="list-group-item list-group-item-action" disabled data-v-b3315f6f>A disabled button item</button></div></div></div></div>`,3),c(`div`,w,[c(`div`,T,[u[7]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:u[0]||=e=>Q(`links`,J)},[u[6]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),o(i(Z.value===`links`?`Copied!`:`Copy`),1)])]),c(`pre`,{class:`code-body`},[c(`code`,null,i(J))])])]),c(`div`,E,[u[12]||=c(`h6`,{class:`demo-title`},`Numbered`,-1),u[13]||=c(`p`,{class:`demo-desc`},[o(`Add `),c(`code`,null,`.list-group-numbered`),o(` to opt into numbered list group items.`)],-1),c(`div`,D,[c(`div`,O,[u[9]||=p(`<div class="col-12 col-md-6" data-v-b3315f6f><ol class="list-group list-group-numbered" data-v-b3315f6f><li class="list-group-item" data-v-b3315f6f>A list item</li><li class="list-group-item" data-v-b3315f6f>A list item</li><li class="list-group-item" data-v-b3315f6f>A list item</li></ol></div>`,1),c(`div`,k,[c(`ol`,A,[(n(!0),d(s,null,r(ne.value,(e,t)=>(n(),d(`li`,{key:t,class:`list-group-item d-flex justify-content-between align-items-start`},[c(`div`,j,[c(`div`,M,i(e.title),1),o(i(e.content),1)]),c(`span`,N,i(e.badge),1)]))),128))])])])]),c(`div`,P,[c(`div`,F,[u[11]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:u[1]||=e=>Q(`numbered`,Y)},[u[10]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),o(i(Z.value===`numbered`?`Copied!`:`Copy`),1)])]),c(`pre`,{class:`code-body`},[c(`code`,null,i(Y))])])]),c(`div`,I,[u[18]||=c(`h6`,{class:`demo-title`},`Checkboxes and Radios`,-1),u[19]||=c(`p`,{class:`demo-desc`},`Place Bootstrap's checkboxes and radios within list group items.`,-1),c(`div`,L,[c(`div`,te,[c(`div`,R,[u[14]||=c(`p`,{class:`small fw-semibold text-muted mb-2`},`Checkboxes`,-1),c(`ul`,z,[(n(!0),d(s,null,r(re.value,(t,r)=>(n(),d(`li`,{key:r,class:`list-group-item`},[e(c(`input`,{class:`form-check-input me-2`,type:`checkbox`,id:`chk-${r}`,"onUpdate:modelValue":e=>t.checked=e},null,8,B),[[a,t.checked]]),c(`label`,{class:`form-check-label stretched-link`,for:`chk-${r}`},i(t.label),9,V)]))),128))])]),c(`div`,H,[u[15]||=c(`p`,{class:`small fw-semibold text-muted mb-2`},`Radios`,-1),c(`ul`,U,[(n(),d(s,null,r(ie,(t,n)=>c(`li`,{key:n,class:`list-group-item`},[e(c(`input`,{class:`form-check-input me-2`,type:`radio`,name:`lgRadio`,id:`rad-${n}`,value:n,"onUpdate:modelValue":u[2]||=e=>$.value=e},null,8,W),[[l,$.value]]),c(`label`,{class:`form-check-label stretched-link`,for:`rad-${n}`},i(t),9,G)])),64))])])])]),c(`div`,K,[c(`div`,q,[u[17]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:u[3]||=e=>Q(`checks`,X)},[u[16]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),o(i(Z.value===`checks`?`Copied!`:`Copy`),1)])]),c(`pre`,{class:`code-body`},[c(`code`,null,i(X))])])]),f(h)]))}},[[`__scopeId`,`data-v-b3315f6f`]]);export{Z as default};