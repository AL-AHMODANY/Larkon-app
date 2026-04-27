import{A as e,O as t,c as n,d as r,dt as i,i as a,m as o,p as s,pt as c,t as l}from"./_plugin-vue_export-helper-Ct9996Xc.js";var u={name:`DropdownPage`,data(){return{activeSection:`single-button`,sections:[{id:`single-button`,label:`Single Button Dropdowns`},{id:`single-button-variant`,label:`Single Button Variant Dropdowns`},{id:`split-button`,label:`Split Button Dropdowns`},{id:`dark-dropdown`,label:`Dark Dropdown`},{id:`dropdown-direction`,label:`Dropdown Direction`},{id:`dropdown-menu-items`,label:`Dropdown Menu Items`},{id:`dropdown-options`,label:`Dropdown Options`},{id:`auto-close`,label:`Auto Close Behavior`},{id:`menu-content`,label:`Menu Content`}],buttonVariants:[{class:`primary`,label:`Primary`},{class:`secondary`,label:`Secondary`},{class:`success`,label:`Success`},{class:`info`,label:`Info`}],autoCloseOptions:[{value:`true`,label:`Default dropdown`},{value:`inside`,label:`Clickable outside`},{value:`outside`,label:`Clickable inside`},{value:`false`,label:`Manual close`}],codeSnippets:{singleButton:`<div class="dropdown">
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
</div>`}}},mounted(){this.initScrollSpy()},methods:{initScrollSpy(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=e.target.id)})},{threshold:.2,rootMargin:`-60px 0px -60px 0px`});this.sections.forEach(({id:t})=>{let n=document.getElementById(t);n&&e.observe(n)})},copyCode(e){navigator.clipboard.writeText(this.codeSnippets[e])}}},ee={class:`dropdown-page`},te={class:`content-layout`},d={class:`main-content`},f={id:`single-button`,class:`demo-section card mb-4`},p={class:`card-body`},m={class:`code-block`},h={class:`code-header d-flex justify-content-between align-items-center`},g={id:`single-button-variant`,class:`demo-section card mb-4`},_={class:`card-body`},v={class:`demo-preview mb-3 d-flex flex-wrap gap-2`},y={class:`code-block`},b={class:`code-header d-flex justify-content-between align-items-center`},x={id:`split-button`,class:`demo-section card mb-4`},S={class:`card-body`},C={class:`demo-preview mb-3 d-flex flex-wrap gap-2`},w={class:`code-block`},T={class:`code-header d-flex justify-content-between align-items-center`},E={id:`dark-dropdown`,class:`demo-section card mb-4`},D={class:`card-body`},O={class:`code-block`},k={class:`code-header d-flex justify-content-between align-items-center`},A={id:`dropdown-direction`,class:`demo-section card mb-4`},j={class:`card-body`},M={class:`code-block`},N={class:`code-header d-flex justify-content-between align-items-center`},P={id:`dropdown-menu-items`,class:`demo-section card mb-4`},ne={class:`card-body`},F={class:`code-block`},I={class:`code-header d-flex justify-content-between align-items-center`},L={id:`dropdown-options`,class:`demo-section card mb-4`},R={class:`card-body`},z={class:`code-block`},B={class:`code-header d-flex justify-content-between align-items-center`},V={id:`auto-close`,class:`demo-section card mb-4`},H={class:`card-body`},U={class:`demo-preview mb-3 d-flex flex-wrap gap-2`},W=[`data-bs-auto-close`],G={class:`code-block`},K={class:`code-header d-flex justify-content-between align-items-center`},q={id:`menu-content`,class:`demo-section card mb-4`},J={class:`card-body`},Y={class:`code-block`},X={class:`code-header d-flex justify-content-between align-items-center`},Z={class:`anchor-nav d-none d-xl-block`},re={class:`list-unstyled`},ie=[`href`];function ae(l,u,ae,oe,Q,$){return t(),r(`div`,ee,[u[34]||=s(`<div class="page-header mb-4" data-v-1f18d8f2><nav aria-label="breadcrumb" data-v-1f18d8f2><ol class="breadcrumb" data-v-1f18d8f2><li class="breadcrumb-item" data-v-1f18d8f2><a href="#" data-v-1f18d8f2>Base UI</a></li><li class="breadcrumb-item active" data-v-1f18d8f2>Dropdown</li></ol></nav><h4 class="page-title mb-0" data-v-1f18d8f2>Dropdown</h4></div>`,1),n(`div`,te,[n(`div`,d,[n(`div`,f,[n(`div`,p,[u[10]||=s(`<h5 class="section-title" data-v-1f18d8f2>Single Button Dropdowns</h5><p class="text-muted small" data-v-1f18d8f2>Any single <code data-v-1f18d8f2>.btn</code> can be turned into a dropdown toggle with some markup changes. Here&#39;s how you can put them to work with either <code data-v-1f18d8f2>&lt;button&gt;</code> elements.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-1f18d8f2><div class="dropdown" data-v-1f18d8f2><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Dropdown button</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul></div><div class="dropdown" data-v-1f18d8f2><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Dropdown link</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul></div></div>`,3),n(`div`,m,[n(`div`,h,[u[9]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[0]||=e=>$.copyCode(`singleButton`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.singleButton),1)])])])]),n(`div`,g,[n(`div`,_,[u[13]||=n(`h5`,{class:`section-title`},`Single Button Variant Dropdowns`,-1),u[14]||=n(`p`,{class:`text-muted small`},[o(`Any single `),n(`code`,null,`.btn`),o(` can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either `),n(`code`,null,`<button>`),o(` elements.`)],-1),n(`div`,v,[(t(!0),r(a,null,e(Q.buttonVariants,e=>(t(),r(`div`,{key:e.class,class:`dropdown`},[n(`button`,{class:i(`btn btn-${e.class} dropdown-toggle`),type:`button`,"data-bs-toggle":`dropdown`},c(e.label),3),u[11]||=n(`ul`,{class:`dropdown-menu`},[n(`li`,null,[n(`a`,{class:`dropdown-item`,href:`#`},`Action`)]),n(`li`,null,[n(`a`,{class:`dropdown-item`,href:`#`},`Another action`)]),n(`li`,null,[n(`a`,{class:`dropdown-item`,href:`#`},`Something else here`)])],-1)]))),128))]),n(`div`,y,[n(`div`,b,[u[12]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[1]||=e=>$.copyCode(`variantButton`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.variantButton),1)])])])]),n(`div`,x,[n(`div`,S,[u[18]||=n(`h5`,{class:`section-title`},`Split Button Dropdowns`,-1),u[19]||=n(`p`,{class:`text-muted small`},[o(`Create split button dropdowns with the addition of `),n(`code`,null,`.dropdown-toggle-split`),o(` for proper spacing around the dropdown caret.`)],-1),n(`div`,C,[(t(!0),r(a,null,e(Q.buttonVariants,e=>(t(),r(`div`,{key:e.class,class:`btn-group`},[n(`button`,{class:i(`btn btn-${e.class}`),type:`button`},c(e.label),3),n(`button`,{class:i(`btn btn-${e.class} dropdown-toggle dropdown-toggle-split`),type:`button`,"data-bs-toggle":`dropdown`},[...u[15]||=[n(`span`,{class:`visually-hidden`},`Toggle`,-1)]],2),u[16]||=s(`<ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><hr class="dropdown-divider" data-v-1f18d8f2></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul>`,1)]))),128))]),n(`div`,w,[n(`div`,T,[u[17]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[2]||=e=>$.copyCode(`splitButton`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.splitButton),1)])])])]),n(`div`,E,[n(`div`,D,[u[21]||=s(`<h5 class="section-title" data-v-1f18d8f2>Dark Dropdown</h5><p class="text-muted small" data-v-1f18d8f2>Opt into darker dropdowns by adding <code data-v-1f18d8f2>.dropdown-menu-dark</code> onto an existing <code data-v-1f18d8f2>.dropdown-menu</code>.</p><div class="demo-preview mb-3" data-v-1f18d8f2><div class="dropdown" data-v-1f18d8f2><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Dark dropdown</button><ul class="dropdown-menu dropdown-menu-dark" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li><li data-v-1f18d8f2><hr class="dropdown-divider" data-v-1f18d8f2></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Separated link</a></li></ul></div></div>`,3),n(`div`,O,[n(`div`,k,[u[20]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[3]||=e=>$.copyCode(`darkDropdown`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.darkDropdown),1)])])])]),n(`div`,A,[n(`div`,j,[u[23]||=s(`<h5 class="section-title" data-v-1f18d8f2>Dropdown Direction</h5><p class="text-muted small" data-v-1f18d8f2>Trigger dropdown menus above with <code data-v-1f18d8f2>.dropup</code>, to the right with <code data-v-1f18d8f2>.dropend</code>, or to the left with <code data-v-1f18d8f2>.dropstart</code>.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-1f18d8f2><div class="btn-group dropup" data-v-1f18d8f2><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Drop Up</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul></div><div class="btn-group dropend" data-v-1f18d8f2><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Drop Right</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul></div><div class="btn-group dropstart" data-v-1f18d8f2><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Drop Left</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul></div></div>`,3),n(`div`,M,[n(`div`,N,[u[22]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[4]||=e=>$.copyCode(`direction`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.direction),1)])])])]),n(`div`,P,[n(`div`,ne,[u[25]||=s(`<h5 class="section-title" data-v-1f18d8f2>Dropdown Menu Items</h5><p class="text-muted small" data-v-1f18d8f2>Add <code data-v-1f18d8f2>.active</code> to items to style them as active. Add <code data-v-1f18d8f2>.disabled</code> to style them as disabled.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-4" data-v-1f18d8f2><div data-v-1f18d8f2><p class="small text-muted mb-1" data-v-1f18d8f2>Active item</p><ul class="dropdown-menu position-static d-block w-auto border" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Regular link</a></li><li data-v-1f18d8f2><a class="dropdown-item active" href="#" aria-current="true" data-v-1f18d8f2>Active link</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Regular link</a></li></ul></div><div data-v-1f18d8f2><p class="small text-muted mb-1" data-v-1f18d8f2>Disabled item</p><ul class="dropdown-menu position-static d-block w-auto border" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Regular link</a></li><li data-v-1f18d8f2><a class="dropdown-item disabled" data-v-1f18d8f2>Disabled link</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Regular link</a></li></ul></div></div>`,3),n(`div`,F,[n(`div`,I,[u[24]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[5]||=e=>$.copyCode(`menuItems`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.menuItems),1)])])])]),n(`div`,L,[n(`div`,R,[u[27]||=s(`<h5 class="section-title" data-v-1f18d8f2>Dropdown Options</h5><p class="text-muted small" data-v-1f18d8f2>Add <code data-v-1f18d8f2>data-bs-offset</code> or <code data-v-1f18d8f2>data-bs-reference</code> to change the location of the dropdown.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-1f18d8f2><div class="dropdown" data-v-1f18d8f2><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-offset="10,20" data-v-1f18d8f2>Offset</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul></div><div class="btn-group" data-v-1f18d8f2><button type="button" class="btn btn-secondary" data-v-1f18d8f2>Reference</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" data-bs-reference="parent" data-v-1f18d8f2><span class="visually-hidden" data-v-1f18d8f2>Toggle</span></button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Something else here</a></li></ul></div></div>`,3),n(`div`,z,[n(`div`,B,[u[26]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[6]||=e=>$.copyCode(`options`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.options),1)])])])]),n(`div`,V,[n(`div`,H,[u[30]||=n(`h5`,{class:`section-title`},`Auto Close Behavior`,-1),u[31]||=n(`p`,{class:`text-muted small`},[o(`Use the `),n(`code`,null,`data-bs-auto-close`),o(` attribute to change close behavior of the dropdown.`)],-1),n(`div`,U,[(t(!0),r(a,null,e(Q.autoCloseOptions,e=>(t(),r(`div`,{key:e.value,class:`dropdown`},[n(`button`,{class:`btn btn-secondary dropdown-toggle`,type:`button`,"data-bs-toggle":`dropdown`,"data-bs-auto-close":e.value},c(e.label),9,W),u[28]||=n(`ul`,{class:`dropdown-menu`},[n(`li`,null,[n(`a`,{class:`dropdown-item`,href:`#`},`Menu item`)]),n(`li`,null,[n(`a`,{class:`dropdown-item`,href:`#`},`Menu item`)]),n(`li`,null,[n(`a`,{class:`dropdown-item`,href:`#`},`Menu item`)])],-1)]))),128))]),n(`div`,G,[n(`div`,K,[u[29]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[7]||=e=>$.copyCode(`autoClose`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.autoClose),1)])])])]),n(`div`,q,[n(`div`,J,[u[33]||=s(`<h5 class="section-title" data-v-1f18d8f2>Menu Content</h5><p class="text-muted small" data-v-1f18d8f2>Add a header to label sections, a divider to separate groups, freeform text, or a form within any dropdown menu.</p><div class="demo-preview mb-3 d-flex flex-wrap gap-2" data-v-1f18d8f2><div class="dropdown" data-v-1f18d8f2><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Dropdown Header</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><h6 class="dropdown-header" data-v-1f18d8f2>Dropdown header</h6></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li></ul></div><div class="dropdown" data-v-1f18d8f2><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Dropdown Divider</button><ul class="dropdown-menu" data-v-1f18d8f2><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Action</a></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Another action</a></li><li data-v-1f18d8f2><hr class="dropdown-divider" data-v-1f18d8f2></li><li data-v-1f18d8f2><a class="dropdown-item" href="#" data-v-1f18d8f2>Separated link</a></li></ul></div><div class="dropdown" data-v-1f18d8f2><button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Dropdown Text</button><div class="dropdown-menu p-3" style="max-width:200px;" data-v-1f18d8f2><p class="small mb-0" data-v-1f18d8f2>Some example text that&#39;s free-flowing within the dropdown menu.</p></div></div><div class="dropdown" data-v-1f18d8f2><button class="btn btn-info dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" data-v-1f18d8f2>Dropdown Menu Form</button><div class="dropdown-menu p-3" style="min-width:220px;" data-v-1f18d8f2><div class="mb-2" data-v-1f18d8f2><label class="form-label small mb-1" data-v-1f18d8f2>Email address</label><input type="email" class="form-control form-control-sm" placeholder="email@example.com" data-v-1f18d8f2></div><div class="mb-2" data-v-1f18d8f2><label class="form-label small mb-1" data-v-1f18d8f2>Password</label><input type="password" class="form-control form-control-sm" placeholder="Password" data-v-1f18d8f2></div><button type="button" class="btn btn-primary btn-sm w-100" data-v-1f18d8f2>Sign in</button></div></div></div>`,3),n(`div`,Y,[n(`div`,X,[u[32]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:u[8]||=e=>$.copyCode(`menuContent`)},`Copy`)]),n(`pre`,null,[n(`code`,null,c(Q.codeSnippets.menuContent),1)])])])])]),n(`aside`,Z,[n(`ul`,re,[(t(!0),r(a,null,e(Q.sections,e=>(t(),r(`li`,{key:e.id},[n(`a`,{href:`#${e.id}`,class:i({active:Q.activeSection===e.id})},c(e.label),11,ie)]))),128))])])])])}var oe=l(u,[[`render`,ae],[`__scopeId`,`data-v-1f18d8f2`]]);export{oe as default};