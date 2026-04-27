import{A as e,O as t,c as n,d as r,dt as i,i as a,p as o,pt as s,t as c}from"./_plugin-vue_export-helper-Ct9996Xc.js";var l={name:`CollapsePage`,data(){return{activeSection:`default-example`,sections:[{id:`default-example`,label:`Default Example`},{id:`horizontal`,label:`Horizontal Collapse`},{id:`multiple-targets`,label:`Multiple Targets`}],codeSnippets:{defaultExample:`<a class="btn btn-primary" data-bs-toggle="collapse"
  href="#collapseExample" role="button">
  Link with href
</a>
<button class="btn btn-primary" type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseExample">
  Button with data-bs-target
</button>

<div class="collapse" id="collapseExample">
  <div class="card card-body mb-0">
    Some placeholder content for the collapse component.
    This panel is hidden by default, shown when the user
    activates the relevant trigger.
  </div>
</div>`,horizontal:`<button class="btn btn-primary" type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseWidthExample">
  Toggle width collapse
</button>

<div style="min-height: 135px;">
  <div class="collapse collapse-horizontal"
    id="collapseWidthExample">
    <div class="card card-body mb-0"
      style="width: 300px;">
      This is some placeholder content for a
      horizontal collapse. It's hidden by default
      and shown when triggered.
    </div>
  </div>
</div>`,multipleTargets:`<div class="hstack gap-2 mb-3">
  <a class="btn btn-primary" data-bs-toggle="collapse"
    href="#multiCollapseExample1">
    Toggle first element
  </a>
  <button class="btn btn-primary" type="button"
    data-bs-toggle="collapse"
    data-bs-target="#multiCollapseExample2">
    Toggle second element
  </button>
  <button class="btn btn-primary" type="button"
    data-bs-toggle="collapse"
    data-bs-target=".multi-collapse">
    Toggle both elements
  </button>
</div>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse"
      id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first
        collapse component of this multi-collapse
        example.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse"
      id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second
        collapse component of this multi-collapse
        example.
      </div>
    </div>
  </div>
</div>`}}},mounted(){this.initScrollSpy()},methods:{initScrollSpy(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=e.target.id)})},{threshold:.3,rootMargin:`-60px 0px -60px 0px`});this.sections.forEach(({id:t})=>{let n=document.getElementById(t);n&&e.observe(n)})},copyCode(e){navigator.clipboard.writeText(this.codeSnippets[e])}}},u={class:`collapse-page`},d={class:`content-layout`},f={class:`main-content`},p={id:`default-example`,class:`demo-section card mb-4`},m={class:`card-body`},h={class:`code-block`},g={class:`code-header d-flex justify-content-between align-items-center`},_={class:`mb-0`},v={id:`horizontal`,class:`demo-section card mb-4`},y={class:`card-body`},b={class:`code-block`},x={class:`code-header d-flex justify-content-between align-items-center`},S={class:`mb-0`},C={id:`multiple-targets`,class:`demo-section card mb-4`},w={class:`card-body`},T={class:`code-block`},E={class:`code-header d-flex justify-content-between align-items-center`},D={class:`mb-0`},O={class:`anchor-nav d-none d-xl-block`},k={class:`list-unstyled`},A=[`href`];function j(c,l,j,M,N,P){return t(),r(`div`,u,[l[10]||=o(`<div class="page-header mb-4" data-v-df3cdc7d><nav aria-label="breadcrumb" data-v-df3cdc7d><ol class="breadcrumb" data-v-df3cdc7d><li class="breadcrumb-item" data-v-df3cdc7d><a href="#" data-v-df3cdc7d>Base UI</a></li><li class="breadcrumb-item active" data-v-df3cdc7d>Collapse</li></ol></nav><h4 class="page-title mb-0" data-v-df3cdc7d>Collapse</h4></div>`,1),n(`div`,d,[n(`div`,f,[n(`div`,p,[n(`div`,m,[l[4]||=o(`<h5 class="section-title" data-v-df3cdc7d>Default Example</h5><p class="text-muted small" data-v-df3cdc7d>Click the buttons below to show and hide another element via class changes:</p><ul class="small text-muted mb-3" data-v-df3cdc7d><li data-v-df3cdc7d><code data-v-df3cdc7d>.collapse</code> hides content</li><li data-v-df3cdc7d><code data-v-df3cdc7d>.collapsing</code> is applied during transitions</li><li data-v-df3cdc7d><code data-v-df3cdc7d>.collapse.show</code> shows content</li></ul><p class="small text-muted mb-3" data-v-df3cdc7d> Generally, we recommend using a button with the <code class="text-warning" data-v-df3cdc7d>data-bs-target</code> attribute. While not recommended from a semantic point of view, you can also use a link with the <code class="text-warning" data-v-df3cdc7d>href</code> attribute (and a <code class="text-warning" data-v-df3cdc7d>role=&quot;button&quot;</code>). In both cases, the <code class="text-warning" data-v-df3cdc7d>data-bs-toggle=&quot;collapse&quot;</code> is required. </p>`,4),l[5]||=n(`div`,{class:`demo-preview mb-3`},[n(`div`,{class:`d-flex flex-wrap gap-2 mb-3`},[n(`a`,{class:`btn btn-primary`,"data-bs-toggle":`collapse`,href:`#collapseLink`,role:`button`,"aria-expanded":`false`,"aria-controls":`collapseLink`},` Link with href `),n(`button`,{class:`btn btn-primary`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseBtn`,"aria-expanded":`false`,"aria-controls":`collapseBtn`},` Button with data-bs-target `)]),n(`div`,{class:`collapse`,id:`collapseLink`},[n(`div`,{class:`card card-body mb-2`},` Some placeholder content for the collapse component. This panel is hidden by default — activated via the link trigger. `)]),n(`div`,{class:`collapse`,id:`collapseBtn`},[n(`div`,{class:`card card-body`},` Some placeholder content for the collapse component. This panel is hidden by default — activated via the button trigger. `)])],-1),n(`div`,h,[n(`div`,g,[l[3]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:l[0]||=e=>P.copyCode(`defaultExample`)},`Copy`)]),n(`pre`,_,[n(`code`,null,s(N.codeSnippets.defaultExample),1)])])])]),n(`div`,v,[n(`div`,y,[l[7]||=o(`<h5 class="section-title" data-v-df3cdc7d>Horizontal</h5><p class="text-muted small" data-v-df3cdc7d> The collapse plugin also supports horizontal collapsing. Add the <code class="text-warning" data-v-df3cdc7d>.collapse-horizontal</code> modifier class to transition the <code class="text-warning" data-v-df3cdc7d>width</code> instead of <code class="text-warning" data-v-df3cdc7d>height</code> and set a <code class="text-warning" data-v-df3cdc7d>width</code> on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities. </p><div class="demo-preview mb-3" data-v-df3cdc7d><button class="btn btn-primary mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" data-v-df3cdc7d> Toggle width collapse </button><div style="min-height:120px;" data-v-df3cdc7d><div class="collapse collapse-horizontal" id="collapseWidthExample" data-v-df3cdc7d><div class="card card-body" style="width:300px;" data-v-df3cdc7d> This is some placeholder content for a horizontal collapse. It&#39;s hidden by default and shown when triggered. </div></div></div></div>`,3),n(`div`,b,[n(`div`,x,[l[6]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:l[1]||=e=>P.copyCode(`horizontal`)},`Copy`)]),n(`pre`,S,[n(`code`,null,s(N.codeSnippets.horizontal),1)])])])]),n(`div`,C,[n(`div`,w,[l[9]||=o(`<h5 class="section-title" data-v-df3cdc7d>Multiple Targets</h5><p class="text-muted small" data-v-df3cdc7d> A <code class="text-warning" data-v-df3cdc7d>&lt;button&gt;</code> or <code class="text-warning" data-v-df3cdc7d>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code class="text-warning" data-v-df3cdc7d>href</code> or <code class="text-warning" data-v-df3cdc7d>data-bs-target</code> attribute. Multiple <code class="text-warning" data-v-df3cdc7d>&lt;button&gt;</code> or <code class="text-warning" data-v-df3cdc7d>&lt;a&gt;</code> can show and hide an element if they each reference it with their <code class="text-warning" data-v-df3cdc7d>href</code> or <code class="text-warning" data-v-df3cdc7d>data-bs-target</code> attribute. </p><div class="demo-preview mb-3" data-v-df3cdc7d><div class="d-flex flex-wrap gap-2 mb-3" data-v-df3cdc7d><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1" data-v-df3cdc7d> Toggle first element </button><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" data-v-df3cdc7d> Toggle second element </button><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2" data-v-df3cdc7d> Toggle both elements </button></div><div class="row" data-v-df3cdc7d><div class="col-12 col-md-6" data-v-df3cdc7d><div class="collapse multi-collapse" id="multiCollapseExample1" data-v-df3cdc7d><div class="card card-body" data-v-df3cdc7d> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but shown when triggered. </div></div></div><div class="col-12 col-md-6" data-v-df3cdc7d><div class="collapse multi-collapse" id="multiCollapseExample2" data-v-df3cdc7d><div class="card card-body" data-v-df3cdc7d> Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but shown when triggered. </div></div></div></div></div>`,3),n(`div`,T,[n(`div`,E,[l[8]||=n(`span`,{class:`badge bg-secondary`},`HTML`,-1),n(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:l[2]||=e=>P.copyCode(`multipleTargets`)},`Copy`)]),n(`pre`,D,[n(`code`,null,s(N.codeSnippets.multipleTargets),1)])])])])]),n(`aside`,O,[n(`ul`,k,[(t(!0),r(a,null,e(N.sections,e=>(t(),r(`li`,{key:e.id},[n(`a`,{href:`#${e.id}`,class:i({active:N.activeSection===e.id})},s(e.label),11,A)]))),128))])])])])}var M=c(l,[[`render`,j],[`__scopeId`,`data-v-df3cdc7d`]]);export{M as default};