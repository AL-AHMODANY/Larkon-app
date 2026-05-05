import{I as e,M as t,P as n,Y as r,f as i,h as a,q as o,t as s,v as c,x as l,y as u}from"./_plugin-vue_export-helper-CLHCuJKU.js";import"./Footer-Ck9cRuzL.js";var d={name:`CollapsePage`,data(){return{activeSection:`default-example`,sections:[{id:`default-example`,label:`Default Example`},{id:`horizontal`,label:`Horizontal Collapse`},{id:`multiple-targets`,label:`Multiple Targets`}],codeSnippets:{defaultExample:`<a class="btn btn-primary" data-bs-toggle="collapse"
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
</div>`}}},mounted(){this.initScrollSpy()},methods:{initScrollSpy(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=e.target.id)})},{threshold:.3,rootMargin:`-60px 0px -60px 0px`});this.sections.forEach(({id:t})=>{let n=document.getElementById(t);n&&e.observe(n)})},copyCode(e){navigator.clipboard.writeText(this.codeSnippets[e])}}},f={class:`collapse-page`},p={class:`content-layout`},m={class:`main-content`},h={id:`default-example`,class:`demo-section card mb-4`},g={class:`card-body`},_={class:`code-block`},v={class:`code-header d-flex justify-content-between align-items-center`},y={class:`mb-0`},b={id:`horizontal`,class:`demo-section card mb-4`},x={class:`card-body`},S={class:`code-block`},C={class:`code-header d-flex justify-content-between align-items-center`},w={class:`mb-0`},T={id:`multiple-targets`,class:`demo-section card mb-4`},E={class:`card-body`},D={class:`code-block`},O={class:`code-header d-flex justify-content-between align-items-center`},k={class:`mb-0`},A={class:`anchor-nav d-none d-xl-block`},j={class:`list-unstyled`},M=[`href`];function N(s,d,N,P,F,I){let L=e(`CdnSection`),R=e(`PageFooter`);return t(),c(`div`,f,[l(L),d[10]||=u(`<div class="page-header mb-4" data-v-20397eeb><nav aria-label="breadcrumb" data-v-20397eeb><ol class="breadcrumb" data-v-20397eeb><li class="breadcrumb-item" data-v-20397eeb><a href="#" data-v-20397eeb>Base UI</a></li><li class="breadcrumb-item active" data-v-20397eeb>Collapse</li></ol></nav><h4 class="page-title mb-0" data-v-20397eeb>Collapse</h4></div>`,1),a(`div`,p,[a(`div`,m,[a(`div`,h,[a(`div`,g,[d[4]||=u(`<h5 class="section-title" data-v-20397eeb>Default Example</h5><p class="text-muted small" data-v-20397eeb>Click the buttons below to show and hide another element via class changes:</p><ul class="small text-muted mb-3" data-v-20397eeb><li data-v-20397eeb><code data-v-20397eeb>.collapse</code> hides content</li><li data-v-20397eeb><code data-v-20397eeb>.collapsing</code> is applied during transitions</li><li data-v-20397eeb><code data-v-20397eeb>.collapse.show</code> shows content</li></ul><p class="small text-muted mb-3" data-v-20397eeb> Generally, we recommend using a button with the <code class="text-warning" data-v-20397eeb>data-bs-target</code> attribute. While not recommended from a semantic point of view, you can also use a link with the <code class="text-warning" data-v-20397eeb>href</code> attribute (and a <code class="text-warning" data-v-20397eeb>role=&quot;button&quot;</code>). In both cases, the <code class="text-warning" data-v-20397eeb>data-bs-toggle=&quot;collapse&quot;</code> is required. </p>`,4),d[5]||=a(`div`,{class:`demo-preview mb-3`},[a(`div`,{class:`d-flex flex-wrap gap-2 mb-3`},[a(`a`,{class:`btn btn-primary`,"data-bs-toggle":`collapse`,href:`#collapseLink`,role:`button`,"aria-expanded":`false`,"aria-controls":`collapseLink`},` Link with href `),a(`button`,{class:`btn btn-primary`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseBtn`,"aria-expanded":`false`,"aria-controls":`collapseBtn`},` Button with data-bs-target `)]),a(`div`,{class:`collapse`,id:`collapseLink`},[a(`div`,{class:`card card-body mb-2`},` Some placeholder content for the collapse component. This panel is hidden by default — activated via the link trigger. `)]),a(`div`,{class:`collapse`,id:`collapseBtn`},[a(`div`,{class:`card card-body`},` Some placeholder content for the collapse component. This panel is hidden by default — activated via the button trigger. `)])],-1),a(`div`,_,[a(`div`,v,[d[3]||=a(`span`,{class:`badge bg-secondary`},`HTML`,-1),a(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[0]||=e=>I.copyCode(`defaultExample`)},`Copy`)]),a(`pre`,y,[a(`code`,null,r(F.codeSnippets.defaultExample),1)])])])]),a(`div`,b,[a(`div`,x,[d[7]||=u(`<h5 class="section-title" data-v-20397eeb>Horizontal</h5><p class="text-muted small" data-v-20397eeb> The collapse plugin also supports horizontal collapsing. Add the <code class="text-warning" data-v-20397eeb>.collapse-horizontal</code> modifier class to transition the <code class="text-warning" data-v-20397eeb>width</code> instead of <code class="text-warning" data-v-20397eeb>height</code> and set a <code class="text-warning" data-v-20397eeb>width</code> on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities. </p><div class="demo-preview mb-3" data-v-20397eeb><button class="btn btn-primary mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" data-v-20397eeb> Toggle width collapse </button><div style="min-height:120px;" data-v-20397eeb><div class="collapse collapse-horizontal" id="collapseWidthExample" data-v-20397eeb><div class="card card-body" style="width:300px;" data-v-20397eeb> This is some placeholder content for a horizontal collapse. It&#39;s hidden by default and shown when triggered. </div></div></div></div>`,3),a(`div`,S,[a(`div`,C,[d[6]||=a(`span`,{class:`badge bg-secondary`},`HTML`,-1),a(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[1]||=e=>I.copyCode(`horizontal`)},`Copy`)]),a(`pre`,w,[a(`code`,null,r(F.codeSnippets.horizontal),1)])])])]),a(`div`,T,[a(`div`,E,[d[9]||=u(`<h5 class="section-title" data-v-20397eeb>Multiple Targets</h5><p class="text-muted small" data-v-20397eeb> A <code class="text-warning" data-v-20397eeb>&lt;button&gt;</code> or <code class="text-warning" data-v-20397eeb>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code class="text-warning" data-v-20397eeb>href</code> or <code class="text-warning" data-v-20397eeb>data-bs-target</code> attribute. Multiple <code class="text-warning" data-v-20397eeb>&lt;button&gt;</code> or <code class="text-warning" data-v-20397eeb>&lt;a&gt;</code> can show and hide an element if they each reference it with their <code class="text-warning" data-v-20397eeb>href</code> or <code class="text-warning" data-v-20397eeb>data-bs-target</code> attribute. </p><div class="demo-preview mb-3" data-v-20397eeb><div class="d-flex flex-wrap gap-2 mb-3" data-v-20397eeb><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1" data-v-20397eeb> Toggle first element </button><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" data-v-20397eeb> Toggle second element </button><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2" data-v-20397eeb> Toggle both elements </button></div><div class="row" data-v-20397eeb><div class="col-12 col-md-6" data-v-20397eeb><div class="collapse multi-collapse" id="multiCollapseExample1" data-v-20397eeb><div class="card card-body" data-v-20397eeb> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but shown when triggered. </div></div></div><div class="col-12 col-md-6" data-v-20397eeb><div class="collapse multi-collapse" id="multiCollapseExample2" data-v-20397eeb><div class="card card-body" data-v-20397eeb> Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but shown when triggered. </div></div></div></div></div>`,3),a(`div`,D,[a(`div`,O,[d[8]||=a(`span`,{class:`badge bg-secondary`},`HTML`,-1),a(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[2]||=e=>I.copyCode(`multipleTargets`)},`Copy`)]),a(`pre`,k,[a(`code`,null,r(F.codeSnippets.multipleTargets),1)])])])])]),a(`aside`,A,[a(`ul`,j,[(t(!0),c(i,null,n(F.sections,e=>(t(),c(`li`,{key:e.id},[a(`a`,{href:`#${e.id}`,class:o({active:F.activeSection===e.id})},r(e.label),11,M)]))),128))])])]),l(R)])}var P=s(d,[[`render`,N],[`__scopeId`,`data-v-20397eeb`]]);export{P as default};