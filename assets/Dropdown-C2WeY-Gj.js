import{I as e,M as t,P as n,Y as r,b as i,f as a,h as o,q as s,t as ee,v as c,x as l,y as u}from"./_plugin-vue_export-helper-CLHCuJKU.js";import"./Footer-Ck9cRuzL.js";var d={name:`DropdownPage`,data(){return{activeSection:`single-button`,sections:[{id:`single-button`,label:`Single Button Dropdowns`},{id:`single-button-variant`,label:`Single Button Variant Dropdowns`},{id:`split-button`,label:`Split Button Dropdowns`},{id:`dark-dropdown`,label:`Dark Dropdown`},{id:`dropdown-direction`,label:`Dropdown Direction`},{id:`dropdown-menu-items`,label:`Dropdown Menu Items`},{id:`dropdown-options`,label:`Dropdown Options`},{id:`auto-close`,label:`Auto Close Behavior`},{id:`menu-content`,label:`Menu Content`}],buttonVariants:[{class:`primary`,label:`Primary`},{class:`secondary`,label:`Secondary`},{class:`success`,label:`Success`},{class:`info`,label:`Info`}],autoCloseOptions:[{value:`true`,label:`Default dropdown`},{value:`inside`,label:`Clickable outside`},{value:`outside`,label:`Clickable inside`},{value:`false`,label:`Manual close`}],codeSnippets:{singleButton:`<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`,variantButton:`<!-- Repeat for each variant: primary, secondary, success, info... -->
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">
    Primary
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`,splitButton:`<div class="btn-group">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button"
    class="btn btn-primary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`,darkDropdown:`<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">
    Dark dropdown
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>`,direction:`<!-- Dropup -->
<div class="btn-group dropup">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">Drop Up</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Dropend (right) -->
<div class="btn-group dropend">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">Drop Right</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Dropstart (left) -->
<div class="btn-group dropstart">
  <button class="btn btn-primary dropdown-toggle"
    type="button" data-bs-toggle="dropdown">Drop Left</button>
  <ul class="dropdown-menu">...</ul>
</div>`,menuItems:`<!-- Active item -->
<ul class="dropdown-menu d-block">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#"
    aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Regular link</a></li>
</ul>

<!-- Disabled item -->
<ul class="dropdown-menu d-block">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Regular link</a></li>
</ul>`,options:`<!-- Offset -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown"
    data-bs-offset="10,20">Offset</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Reference -->
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Reference</button>
  <button type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    data-bs-reference="parent"></button>
  <ul class="dropdown-menu">...</ul>
</div>`,autoClose:`<!-- Default: closes on inside or outside click -->
<button data-bs-auto-close="true"
  data-bs-toggle="dropdown" ...>Default dropdown</button>

<!-- Only close on inside click -->
<button data-bs-auto-close="inside"
  data-bs-toggle="dropdown" ...>Clickable outside</button>

<!-- Only close on outside click -->
<button data-bs-auto-close="outside"
  data-bs-toggle="dropdown" ...>Clickable inside</button>

<!-- Manual close only -->
<button data-bs-auto-close="false"
  data-bs-toggle="dropdown" ...>Manual close</button>`,menuContent:`<!-- Header + Divider -->
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>

<!-- Form inside dropdown -->
<div class="dropdown-menu p-3" style="min-width: 220px;">
  <div class="mb-2">
    <label class="form-label small">Email</label>
    <input type="email" class="form-control form-control-sm">
  </div>
  <div class="mb-2">
    <label class="form-label small">Password</label>
    <input type="password" class="form-control form-control-sm">
  </div>
  <button class="btn btn-primary btn-sm w-100">Sign in</button>
</div>`}}},mounted(){this.initScrollSpy()},methods:{initScrollSpy(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=e.target.id)})},{threshold:.2,rootMargin:`-60px 0px -60px 0px`});this.sections.forEach(({id:t})=>{let n=document.getElementById(t);n&&e.observe(n)})},copyCode(e){navigator.clipboard.writeText(this.codeSnippets[e])}}},te={class:`dropdown-page`},ne={class:`content-layout`},f={class:`main-content`},p={id:`single-button`,class:`demo-section card mb-4`},m={class:`card-body`},h={class:`code-block`},g={class:`code-header d-flex justify-content-between align-items-center`},_={id:`single-button-variant`,class:`demo-section card mb-4`},v={class:`card-body`},y={class:`demo-preview mb-3 d-flex flex-wrap gap-2`},b={class:`code-block`},x={class:`code-header d-flex justify-content-between align-items-center`},S={id:`split-button`,class:`demo-section card mb-4`},C={class:`card-body`},w={class:`demo-preview mb-3 d-flex flex-wrap gap-2`},T={class:`code-block`},E={class:`code-header d-flex justify-content-between align-items-center`},D={id:`dark-dropdown`,class:`demo-section card mb-4`},O={class:`card-body`},k={class:`code-block`},A={class:`code-header d-flex justify-content-between align-items-center`},j={id:`dropdown-direction`,class:`demo-section card mb-4`},M={class:`card-body`},N={class:`code-block`},P={class:`code-header d-flex justify-content-between align-items-center`},F={id:`dropdown-menu-items`,class:`demo-section card mb-4`},re={class:`card-body`},I={class:`code-block`},L={class:`code-header d-flex justify-content-between align-items-center`},R={id:`dropdown-options`,class:`demo-section card mb-4`},z={class:`card-body`},B={class:`code-block`},V={class:`code-header d-flex justify-content-between align-items-center`},H={id:`auto-close`,class:`demo-section card mb-4`},U={class:`card-body`},W={class:`demo-preview mb-3 d-flex flex-wrap gap-2`},G=[`data-bs-auto-close`],K={class:`code-block`},q={class:`code-header d-flex justify-content-between align-items-center`},J={id:`menu-content`,class:`demo-section card mb-4`},Y={class:`card-body`},X={class:`code-block`},ie={class:`code-header d-flex justify-content-between align-items-center`},ae={class:`anchor-nav d-none d-xl-block`},oe={class:`list-unstyled`},se=[`href`];function ce(ee,d,ce,Z,Q,$){let le=e(`CdnSection`),ue=e(`PageFooter`);return t(),c(`div`,te,[l(le),d[34]||=u(`<div class="page-header mb-4" data-v-29b94692><nav aria-label="breadcrumb" data-v-29b94692><ol class="breadcrumb" data-v-29b94692><li class="breadcrumb-item" data-v-29b94692><a href="#" data-v-29b94692>Base UI</a></li><li class="breadcrumb-item active" data-v-29b94692>Dropdown</li></ol></nav><h4 class="page-title mb-0" data-v-29b94692>Dropdown</h4></div>`,1),o(`div`,ne,[o(`div`,f,[o(`div`,p,[o(`div`,m,[d[10]||=u(`<h5 class="section-title" data-v-29b94692>Single Button Dropdowns</h5><p class="text-muted small" data-v-29b94692>Any single <code data-v-29b94692>.btn</code> can be turned into a dropdown toggle with some markup changes. Here&#39;s how you can put them to work with either <code data-v-29b94692>&lt;button&gt;</code> elements.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-29b94692><div class="dropdown" data-v-29b94692><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Dropdown button</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul></div><div class="dropdown" data-v-29b94692><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Dropdown link</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul></div></div>`,3),o(`div`,h,[o(`div`,g,[d[9]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[0]||=e=>$.copyCode(`singleButton`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.singleButton),1)])])])]),o(`div`,_,[o(`div`,v,[d[13]||=o(`h5`,{class:`section-title`},`Single Button Variant Dropdowns`,-1),d[14]||=o(`p`,{class:`text-muted small`},[i(`Any single `),o(`code`,null,`.btn`),i(` can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either `),o(`code`,null,`<button>`),i(` elements.`)],-1),o(`div`,y,[(t(!0),c(a,null,n(Q.buttonVariants,e=>(t(),c(`div`,{key:e.class,class:`dropdown`},[o(`button`,{class:s(`btn btn-${e.class} dropdown-toggle`),type:`button`,"data-bs-toggle":`dropdown`},r(e.label),3),d[11]||=o(`ul`,{class:`dropdown-menu`},[o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`#`},`Action`)]),o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`#`},`Another action`)]),o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`#`},`Something else here`)])],-1)]))),128))]),o(`div`,b,[o(`div`,x,[d[12]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[1]||=e=>$.copyCode(`variantButton`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.variantButton),1)])])])]),o(`div`,S,[o(`div`,C,[d[18]||=o(`h5`,{class:`section-title`},`Split Button Dropdowns`,-1),d[19]||=o(`p`,{class:`text-muted small`},[i(`Create split button dropdowns with the addition of `),o(`code`,null,`.dropdown-toggle-split`),i(` for proper spacing around the dropdown caret.`)],-1),o(`div`,w,[(t(!0),c(a,null,n(Q.buttonVariants,e=>(t(),c(`div`,{key:e.class,class:`btn-group`},[o(`button`,{class:s(`btn btn-${e.class}`),type:`button`},r(e.label),3),o(`button`,{class:s(`btn btn-${e.class} dropdown-toggle dropdown-toggle-split`),type:`button`,"data-bs-toggle":`dropdown`},[...d[15]||=[o(`span`,{class:`visually-hidden`},`Toggle`,-1)]],2),d[16]||=u(`<ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><hr class="dropdown-divider" data-v-29b94692></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul>`,1)]))),128))]),o(`div`,T,[o(`div`,E,[d[17]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[2]||=e=>$.copyCode(`splitButton`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.splitButton),1)])])])]),o(`div`,D,[o(`div`,O,[d[21]||=u(`<h5 class="section-title" data-v-29b94692>Dark Dropdown</h5><p class="text-muted small" data-v-29b94692>Opt into darker dropdowns by adding <code data-v-29b94692>.dropdown-menu-dark</code> onto an existing <code data-v-29b94692>.dropdown-menu</code>.</p><div class="demo-preview mb-3" data-v-29b94692><div class="dropdown" data-v-29b94692><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Dark dropdown</button><ul class="dropdown-menu dropdown-menu-dark" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li><li data-v-29b94692><hr class="dropdown-divider" data-v-29b94692></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Separated link</a></li></ul></div></div>`,3),o(`div`,k,[o(`div`,A,[d[20]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[3]||=e=>$.copyCode(`darkDropdown`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.darkDropdown),1)])])])]),o(`div`,j,[o(`div`,M,[d[23]||=u(`<h5 class="section-title" data-v-29b94692>Dropdown Direction</h5><p class="text-muted small" data-v-29b94692>Trigger dropdown menus above with <code data-v-29b94692>.dropup</code>, to the right with <code data-v-29b94692>.dropend</code>, or to the left with <code data-v-29b94692>.dropstart</code>.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-29b94692><div class="btn-group dropup" data-v-29b94692><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Drop Up</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul></div><div class="btn-group dropend" data-v-29b94692><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Drop Right</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul></div><div class="btn-group dropstart" data-v-29b94692><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Drop Left</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul></div></div>`,3),o(`div`,N,[o(`div`,P,[d[22]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[4]||=e=>$.copyCode(`direction`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.direction),1)])])])]),o(`div`,F,[o(`div`,re,[d[25]||=u(`<h5 class="section-title" data-v-29b94692>Dropdown Menu Items</h5><p class="text-muted small" data-v-29b94692>Add <code data-v-29b94692>.active</code> to items to style them as active. Add <code data-v-29b94692>.disabled</code> to style them as disabled.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-4" data-v-29b94692><div data-v-29b94692><p class="small text-muted mb-1" data-v-29b94692>Active item</p><ul class="dropdown-menu position-static d-block w-auto border" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Regular link</a></li><li data-v-29b94692><a class="dropdown-item active" href="#" aria-current="true" data-v-29b94692>Active link</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Regular link</a></li></ul></div><div data-v-29b94692><p class="small text-muted mb-1" data-v-29b94692>Disabled item</p><ul class="dropdown-menu position-static d-block w-auto border" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Regular link</a></li><li data-v-29b94692><a class="dropdown-item disabled" data-v-29b94692>Disabled link</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Regular link</a></li></ul></div></div>`,3),o(`div`,I,[o(`div`,L,[d[24]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[5]||=e=>$.copyCode(`menuItems`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.menuItems),1)])])])]),o(`div`,R,[o(`div`,z,[d[27]||=u(`<h5 class="section-title" data-v-29b94692>Dropdown Options</h5><p class="text-muted small" data-v-29b94692>Add <code data-v-29b94692>data-bs-offset</code> or <code data-v-29b94692>data-bs-reference</code> to change the location of the dropdown.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-29b94692><div class="dropdown" data-v-29b94692><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-offset="10,20" data-v-29b94692>Offset</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul></div><div class="btn-group" data-v-29b94692><button type="button" class="btn btn-secondary" data-v-29b94692>Reference</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" data-bs-reference="parent" data-v-29b94692><span class="visually-hidden" data-v-29b94692>Toggle</span></button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Something else here</a></li></ul></div></div>`,3),o(`div`,B,[o(`div`,V,[d[26]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[6]||=e=>$.copyCode(`options`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.options),1)])])])]),o(`div`,H,[o(`div`,U,[d[30]||=o(`h5`,{class:`section-title`},`Auto Close Behavior`,-1),d[31]||=o(`p`,{class:`text-muted small`},[i(`Use the `),o(`code`,null,`data-bs-auto-close`),i(` attribute to change close behavior of the dropdown.`)],-1),o(`div`,W,[(t(!0),c(a,null,n(Q.autoCloseOptions,e=>(t(),c(`div`,{key:e.value,class:`dropdown`},[o(`button`,{class:`btn btn-secondary dropdown-toggle`,type:`button`,"data-bs-toggle":`dropdown`,"data-bs-auto-close":e.value},r(e.label),9,G),d[28]||=o(`ul`,{class:`dropdown-menu`},[o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`#`},`Menu item`)]),o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`#`},`Menu item`)]),o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`#`},`Menu item`)])],-1)]))),128))]),o(`div`,K,[o(`div`,q,[d[29]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[7]||=e=>$.copyCode(`autoClose`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.autoClose),1)])])])]),o(`div`,J,[o(`div`,Y,[d[33]||=u(`<h5 class="section-title" data-v-29b94692>Menu Content</h5><p class="text-muted small" data-v-29b94692>Add a header to label sections, a divider to separate groups, freeform text, or a form within any dropdown menu.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-29b94692><div class="dropdown" data-v-29b94692><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Dropdown Header</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><h6 class="dropdown-header" data-v-29b94692>Dropdown header</h6></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li></ul></div><div class="dropdown" data-v-29b94692><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Dropdown Divider</button><ul class="dropdown-menu" data-v-29b94692><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Action</a></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Another action</a></li><li data-v-29b94692><hr class="dropdown-divider" data-v-29b94692></li><li data-v-29b94692><a class="dropdown-item" href="#" data-v-29b94692>Separated link</a></li></ul></div><div class="dropdown" data-v-29b94692><button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-29b94692>Dropdown Text</button><div class="dropdown-menu p-3" style="max-width:200px;" data-v-29b94692><p class="small mb-0" data-v-29b94692>Some example text that&#39;s free-flowing within the dropdown menu.</p></div></div><div class="dropdown" data-v-29b94692><button class="btn btn-info dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" data-v-29b94692>Dropdown Menu Form</button><div class="dropdown-menu p-3" style="min-width:220px;" data-v-29b94692><div class="mb-2" data-v-29b94692><label class="form-label small mb-1" data-v-29b94692>Email address</label><input type="email" class="form-control form-control-sm" placeholder="email@example.com" data-v-29b94692></div><div class="mb-2" data-v-29b94692><label class="form-label small mb-1" data-v-29b94692>Password</label><input type="password" class="form-control form-control-sm" placeholder="Password" data-v-29b94692></div><button type="button" class="btn btn-primary btn-sm w-100" data-v-29b94692>Sign in</button></div></div></div>`,3),o(`div`,X,[o(`div`,ie,[d[32]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[8]||=e=>$.copyCode(`menuContent`)},`Copy`)]),o(`pre`,null,[o(`code`,null,r(Q.codeSnippets.menuContent),1)])])])])]),o(`aside`,ae,[o(`ul`,oe,[(t(!0),c(a,null,n(Q.sections,e=>(t(),c(`li`,{key:e.id},[o(`a`,{href:`#${e.id}`,class:s({active:Q.activeSection===e.id})},r(e.label),11,se)]))),128))])])]),l(ue)])}var Z=ee(d,[[`render`,ce],[`__scopeId`,`data-v-29b94692`]]);export{Z as default};