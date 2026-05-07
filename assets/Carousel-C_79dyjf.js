import{I as e,M as t,P as n,Y as r,b as i,f as a,h as o,q as s,t as ee,v as c,x as l,y as u}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{t as d}from"./Footer-Ck9cRuzL.js";var te={name:`CarouselPage`,components:{PageFooter:d},data(){return{activeSection:`slides-only`,sections:[{id:`slides-only`,label:`Slide Only`},{id:`with-controls`,label:`With Controls`},{id:`with-indicators`,label:`With Indicators`},{id:`with-captions`,label:`With Captions`},{id:`crossfade`,label:`Crossfade`},{id:`individual-interval`,label:`Individual carousel item interval`},{id:`disable-touch`,label:`Disable touch swiping`},{id:`dark-variant`,label:`Dark Variant`},{id:`dark-started`,label:`Dark Started`}],slides:[{src:`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop`,alt:`Mountain landscape`},{src:`https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop`,alt:`City skyline`},{src:`https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop`,alt:`Forest path`}],captionSlides:[{src:`https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=400&fit=crop`,alt:`Night sky`,title:`First slide label`,caption:`Some representative placeholder content for the first slide.`},{src:`https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=400&fit=crop`,alt:`Open road`,title:`Second slide label`,caption:`Some representative placeholder content for the second slide.`},{src:`https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop`,alt:`Sunlit forest`,title:`Third slide label`,caption:`Some representative placeholder content for the third slide.`}],codeSnippets:{slidesOnly:`<div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
</div>`,withControls:`<div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,withIndicators:`<div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselIndicators"
      data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselIndicators"
      data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselIndicators"
      data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,withCaptions:`<div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCaptions"
      data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselCaptions"
      data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselCaptions"
      data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Night sky"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Open road"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Sunlit forest"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,crossfade:`<div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,interval:`<div id="carouselInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,noTouch:`<div id="carouselNoTouch" class="carousel slide"
  data-bs-touch="false" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselNoTouch" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselNoTouch" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,darkVariant:`<div id="carouselDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselDark"
      data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselDark"
      data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselDark"
      data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style="background:#f5f5f5">
      <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Night sky"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" style="background:#f5f5f5">
      <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Open road"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" style="background:#f5f5f5">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Sunlit forest"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`}}},mounted(){this.initScrollSpy()},methods:{initScrollSpy(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=e.target.id)})},{threshold:.3,rootMargin:`-60px 0px -60px 0px`});this.sections.forEach(({id:t})=>{let n=document.getElementById(t);n&&e.observe(n)})},copyCode(e){let t=this.codeSnippets[e];navigator.clipboard.writeText(t).then(()=>{})}}},ne={class:`carousel-page`},re={class:`content-layout`},f={class:`main-content`},p={id:`slides-only`,class:`demo-section card mb-4`},m={class:`card-body`},h={class:`demo-preview mb-3`},g={id:`carouselSlidesOnly`,class:`carousel slide`,"data-bs-ride":`carousel`},_={class:`carousel-inner`},v=[`src`,`alt`],y={class:`code-block`},b={class:`code-header d-flex justify-content-between align-items-center`},x={class:`mb-0`},S={id:`with-controls`,class:`demo-section card mb-4`},C={class:`card-body`},w={class:`demo-preview mb-3`},T={id:`carouselWithControls`,class:`carousel slide`,"data-bs-ride":`carousel`},E={class:`carousel-inner`},D=[`src`,`alt`],O={class:`code-block`},k={class:`code-header d-flex justify-content-between align-items-center`},A={class:`mb-0`},j={id:`with-indicators`,class:`demo-section card mb-4`},M={class:`card-body`},N={class:`demo-preview mb-3`},P={id:`carouselWithIndicators`,class:`carousel slide`,"data-bs-ride":`carousel`},F={class:`carousel-indicators`},I=[`data-bs-slide-to`,`aria-current`],L={class:`carousel-inner`},R=[`src`,`alt`],z={class:`code-block`},B={class:`code-header d-flex justify-content-between align-items-center`},V={class:`mb-0`},H={id:`with-captions`,class:`demo-section card mb-4`},U={class:`card-body`},W={class:`demo-preview mb-3`},G={id:`carouselWithCaptions`,class:`carousel slide`,"data-bs-ride":`carousel`},K={class:`carousel-indicators`},q=[`data-bs-slide-to`],J={class:`carousel-inner`},Y=[`src`,`alt`],X={class:`carousel-caption d-none d-md-block`},ie={class:`code-block`},ae={class:`code-header d-flex justify-content-between align-items-center`},oe={class:`mb-0`},se={id:`crossfade`,class:`demo-section card mb-4`},ce={class:`card-body`},le={class:`demo-preview mb-3`},ue={id:`carouselFade`,class:`carousel slide carousel-fade`,"data-bs-ride":`carousel`},de={class:`carousel-inner`},fe=[`src`,`alt`],pe={class:`code-block`},me={class:`code-header d-flex justify-content-between align-items-center`},he={class:`mb-0`},ge={id:`individual-interval`,class:`demo-section card mb-4`},_e={class:`card-body`},ve={class:`demo-preview mb-3`},ye={id:`carouselInterval`,class:`carousel slide`,"data-bs-ride":`carousel`},be={class:`carousel-inner`},xe={class:`carousel-item active`,"data-bs-interval":`1000`},Se=[`src`],Ce={class:`carousel-item`,"data-bs-interval":`2000`},we=[`src`],Te={class:`carousel-item`},Ee=[`src`],De={class:`code-block`},Oe={class:`code-header d-flex justify-content-between align-items-center`},ke={class:`mb-0`},Ae={id:`disable-touch`,class:`demo-section card mb-4`},je={class:`card-body`},Me={class:`demo-preview mb-3`},Ne={id:`carouselNoTouch`,class:`carousel slide`,"data-bs-touch":`false`,"data-bs-ride":`carousel`},Pe={class:`carousel-inner`},Fe=[`src`,`alt`],Ie={class:`code-block`},Le={class:`code-header d-flex justify-content-between align-items-center`},Re={class:`mb-0`},ze={id:`dark-variant`,class:`demo-section card mb-4`},Be={class:`card-body`},Ve={class:`demo-preview mb-3`},He={id:`carouselDark`,class:`carousel carousel-dark slide`,"data-bs-ride":`carousel`},Ue={class:`carousel-indicators`},Z=[`data-bs-slide-to`],We={class:`carousel-inner`},Ge=[`src`,`alt`],Ke={class:`carousel-caption d-none d-md-block`},qe={class:`code-block`},Je={class:`code-header d-flex justify-content-between align-items-center`},Ye={class:`mb-0`},Xe={class:`anchor-nav d-none d-xl-block`},Ze={class:`list-unstyled`},Qe=[`href`];function $e(ee,d,te,$e,Q,$){let et=e(`CdnSection`),tt=e(`PageFooter`);return t(),c(`div`,ne,[l(et),d[39]||=u(`<div class="page-header mb-4" data-v-7bd7a00e><nav aria-label="breadcrumb" data-v-7bd7a00e><ol class="breadcrumb" data-v-7bd7a00e><li class="breadcrumb-item" data-v-7bd7a00e><a href="#" data-v-7bd7a00e>Base UI</a></li><li class="breadcrumb-item active" data-v-7bd7a00e>Carousel</li></ol></nav><h4 class="page-title mb-0" data-v-7bd7a00e>Carousel</h4></div>`,1),o(`div`,re,[o(`div`,f,[o(`div`,p,[o(`div`,m,[d[9]||=o(`h5`,{class:`section-title`},`Slides Only`,-1),d[10]||=o(`p`,{class:`text-muted small`},[i(`Here's a carousel with slides only. Note the presence of the `),o(`code`,null,`.d-block`),i(` and `),o(`code`,null,`.img-fluid`),i(` on carousel images to prevent browser default image alignment.`)],-1),o(`div`,h,[o(`div`,g,[o(`div`,_,[(t(!0),c(a,null,n(Q.slides,(e,n)=>(t(),c(`div`,{key:n,class:s([`carousel-item`,{active:n===0}])},[o(`img`,{src:e.src,class:`d-block w-100 carousel-img`,alt:e.alt},null,8,v)],2))),128))])])]),o(`div`,y,[o(`div`,b,[d[8]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[0]||=e=>$.copyCode(`slidesOnly`)},`Copy`)]),o(`pre`,x,[o(`code`,null,r(Q.codeSnippets.slidesOnly),1)])])])]),o(`div`,S,[o(`div`,C,[d[13]||=o(`h5`,{class:`section-title`},`With Controls`,-1),d[14]||=o(`p`,{class:`text-muted small`},`Adding in the previous and next controls.`,-1),o(`div`,w,[o(`div`,T,[o(`div`,E,[(t(!0),c(a,null,n(Q.slides,(e,n)=>(t(),c(`div`,{key:n,class:s([`carousel-item`,{active:n===0}])},[o(`img`,{src:e.src,class:`d-block w-100 carousel-img`,alt:e.alt},null,8,D)],2))),128))]),d[11]||=u(`<button class="carousel-control-prev" type="button" data-bs-target="#carouselWithControls" data-bs-slide="prev" data-v-7bd7a00e><span class="carousel-control-prev-icon" aria-hidden="true" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselWithControls" data-bs-slide="next" data-v-7bd7a00e><span class="carousel-control-next-icon" aria-hidden="true" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Next</span></button>`,2)])]),o(`div`,O,[o(`div`,k,[d[12]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[1]||=e=>$.copyCode(`withControls`)},`Copy`)]),o(`pre`,A,[o(`code`,null,r(Q.codeSnippets.withControls),1)])])])]),o(`div`,j,[o(`div`,M,[d[17]||=o(`h5`,{class:`section-title`},`With Indicators`,-1),d[18]||=o(`p`,{class:`text-muted small`},`You can also add the indicators to the carousel, alongside the controls, too.`,-1),o(`div`,N,[o(`div`,P,[o(`div`,F,[(t(!0),c(a,null,n(Q.slides,(e,n)=>(t(),c(`button`,{key:n,type:`button`,"data-bs-target":`#carouselWithIndicators`,"data-bs-slide-to":n,class:s({active:n===0}),"aria-current":n===0?`true`:void 0},null,10,I))),128))]),o(`div`,L,[(t(!0),c(a,null,n(Q.slides,(e,n)=>(t(),c(`div`,{key:n,class:s([`carousel-item`,{active:n===0}])},[o(`img`,{src:e.src,class:`d-block w-100 carousel-img`,alt:e.alt},null,8,R)],2))),128))]),d[15]||=u(`<button class="carousel-control-prev" type="button" data-bs-target="#carouselWithIndicators" data-bs-slide="prev" data-v-7bd7a00e><span class="carousel-control-prev-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselWithIndicators" data-bs-slide="next" data-v-7bd7a00e><span class="carousel-control-next-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Next</span></button>`,2)])]),o(`div`,z,[o(`div`,B,[d[16]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[2]||=e=>$.copyCode(`withIndicators`)},`Copy`)]),o(`pre`,V,[o(`code`,null,r(Q.codeSnippets.withIndicators),1)])])])]),o(`div`,H,[o(`div`,U,[d[21]||=o(`h5`,{class:`section-title`},`With Captions`,-1),d[22]||=o(`p`,{class:`text-muted small`},[i(`Add captions to your slides with the `),o(`code`,null,`.carousel-caption`),i(` element. They can be easily hidden on smaller viewports, as shown below, with optional display utilities. We hide them initially with `),o(`code`,null,`.d-none`),i(` and bring them back on medium-sized devices with `),o(`code`,null,`.d-md-block`),i(`.`)],-1),o(`div`,W,[o(`div`,G,[o(`div`,K,[(t(!0),c(a,null,n(Q.captionSlides,(e,n)=>(t(),c(`button`,{key:n,type:`button`,"data-bs-target":`#carouselWithCaptions`,"data-bs-slide-to":n,class:s({active:n===0})},null,10,q))),128))]),o(`div`,J,[(t(!0),c(a,null,n(Q.captionSlides,(e,n)=>(t(),c(`div`,{key:n,class:s([`carousel-item`,{active:n===0}])},[o(`img`,{src:e.src,class:`d-block w-100 carousel-img`,alt:e.alt},null,8,Y),o(`div`,X,[o(`h5`,null,r(e.title),1),o(`p`,null,r(e.caption),1)])],2))),128))]),d[19]||=u(`<button class="carousel-control-prev" type="button" data-bs-target="#carouselWithCaptions" data-bs-slide="prev" data-v-7bd7a00e><span class="carousel-control-prev-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselWithCaptions" data-bs-slide="next" data-v-7bd7a00e><span class="carousel-control-next-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Next</span></button>`,2)])]),o(`div`,ie,[o(`div`,ae,[d[20]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[3]||=e=>$.copyCode(`withCaptions`)},`Copy`)]),o(`pre`,oe,[o(`code`,null,r(Q.codeSnippets.withCaptions),1)])])])]),o(`div`,se,[o(`div`,ce,[d[25]||=o(`h5`,{class:`section-title`},`Crossfade`,-1),d[26]||=o(`p`,{class:`text-muted small`},[i(`Add `),o(`code`,null,`.carousel-fade`),i(` to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add `),o(`code`,null,`.bg-body`),i(` to the `),o(`code`,null,`.carousel-item`),i(` elements for proper crossfading.`)],-1),o(`div`,le,[o(`div`,ue,[o(`div`,de,[(t(!0),c(a,null,n(Q.slides,(e,n)=>(t(),c(`div`,{key:n,class:s([`carousel-item`,{active:n===0}])},[o(`img`,{src:e.src,class:`d-block w-100 carousel-img`,alt:e.alt},null,8,fe)],2))),128))]),d[23]||=u(`<button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev" data-v-7bd7a00e><span class="carousel-control-prev-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next" data-v-7bd7a00e><span class="carousel-control-next-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Next</span></button>`,2)])]),o(`div`,pe,[o(`div`,me,[d[24]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[4]||=e=>$.copyCode(`crossfade`)},`Copy`)]),o(`pre`,he,[o(`code`,null,r(Q.codeSnippets.crossfade),1)])])])]),o(`div`,ge,[o(`div`,_e,[d[29]||=o(`h5`,{class:`section-title`},`Individual carousel item interval`,-1),d[30]||=o(`p`,{class:`text-muted small`},[i(`Add `),o(`code`,null,`data-bs-interval=""`),i(` to a `),o(`code`,null,`.carousel-item`),i(` to change the amount of time to delay between automatically cycling to the next item.`)],-1),o(`div`,ve,[o(`div`,ye,[o(`div`,be,[o(`div`,xe,[o(`img`,{src:Q.slides[0].src,class:`d-block w-100 carousel-img`,alt:`Slide 1`},null,8,Se)]),o(`div`,Ce,[o(`img`,{src:Q.slides[1].src,class:`d-block w-100 carousel-img`,alt:`Slide 2`},null,8,we)]),o(`div`,Te,[o(`img`,{src:Q.slides[2].src,class:`d-block w-100 carousel-img`,alt:`Slide 3`},null,8,Ee)])]),d[27]||=u(`<button class="carousel-control-prev" type="button" data-bs-target="#carouselInterval" data-bs-slide="prev" data-v-7bd7a00e><span class="carousel-control-prev-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselInterval" data-bs-slide="next" data-v-7bd7a00e><span class="carousel-control-next-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Next</span></button>`,2)])]),o(`div`,De,[o(`div`,Oe,[d[28]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[5]||=e=>$.copyCode(`interval`)},`Copy`)]),o(`pre`,ke,[o(`code`,null,r(Q.codeSnippets.interval),1)])])])]),o(`div`,Ae,[o(`div`,je,[d[33]||=o(`h5`,{class:`section-title`},[i(`Disable touch swiping `),o(`span`,{class:`badge bg-primary-subtle text-primary ms-1`},`data-bs-touch`),i(` interval`)],-1),d[34]||=o(`p`,{class:`text-muted small`},[i(`Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled by setting the `),o(`code`,null,`data-bs-touch`),i(` attribute to `),o(`code`,null,`false`),i(`.`)],-1),o(`div`,Me,[o(`div`,Ne,[o(`div`,Pe,[(t(!0),c(a,null,n(Q.slides,(e,n)=>(t(),c(`div`,{key:n,class:s([`carousel-item`,{active:n===0}])},[o(`img`,{src:e.src,class:`d-block w-100 carousel-img`,alt:e.alt},null,8,Fe)],2))),128))]),d[31]||=u(`<button class="carousel-control-prev" type="button" data-bs-target="#carouselNoTouch" data-bs-slide="prev" data-v-7bd7a00e><span class="carousel-control-prev-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselNoTouch" data-bs-slide="next" data-v-7bd7a00e><span class="carousel-control-next-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Next</span></button>`,2)])]),o(`div`,Ie,[o(`div`,Le,[d[32]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[6]||=e=>$.copyCode(`noTouch`)},`Copy`)]),o(`pre`,Re,[o(`code`,null,r(Q.codeSnippets.noTouch),1)])])])]),o(`div`,ze,[o(`div`,Be,[d[37]||=o(`h5`,{class:`section-title`},[i(`Dark Variant `),o(`span`,{class:`badge bg-primary-subtle text-primary ms-1`},`carousel-dark`),i(` interval`)],-1),d[38]||=o(`p`,{class:`text-muted small`},[i(`Add `),o(`code`,null,`.carousel-dark`),i(` to the `),o(`code`,null,`.carousel`),i(` for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the `),o(`code`,null,`filter`),i(` CSS property. Captions and controls have additional dark mode variables that optionally override the global values.`)],-1),o(`div`,Ve,[o(`div`,He,[o(`div`,Ue,[(t(!0),c(a,null,n(Q.captionSlides,(e,n)=>(t(),c(`button`,{key:n,type:`button`,"data-bs-target":`#carouselDark`,"data-bs-slide-to":n,class:s({active:n===0})},null,10,Z))),128))]),o(`div`,We,[(t(!0),c(a,null,n(Q.captionSlides,(e,n)=>(t(),c(`div`,{key:n,class:s([`carousel-item`,{active:n===0}]),style:{background:`#f5f5f5`}},[o(`img`,{src:e.src,class:`d-block w-100 carousel-img`,alt:e.alt},null,8,Ge),o(`div`,Ke,[o(`h5`,null,r(e.title),1),o(`p`,null,r(e.caption),1)])],2))),128))]),d[35]||=u(`<button class="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev" data-v-7bd7a00e><span class="carousel-control-prev-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next" data-v-7bd7a00e><span class="carousel-control-next-icon" data-v-7bd7a00e></span><span class="visually-hidden" data-v-7bd7a00e>Next</span></button>`,2)])]),o(`div`,qe,[o(`div`,Je,[d[36]||=o(`span`,{class:`badge bg-secondary`},`HTML`,-1),o(`button`,{class:`btn btn-sm btn-outline-secondary copy-btn`,onClick:d[7]||=e=>$.copyCode(`darkVariant`)},`Copy`)]),o(`pre`,Ye,[o(`code`,null,r(Q.codeSnippets.darkVariant),1)])])])])]),o(`aside`,Xe,[o(`ul`,Ze,[(t(!0),c(a,null,n(Q.sections,e=>(t(),c(`li`,{key:e.id},[o(`a`,{href:`#${e.id}`,class:s({active:Q.activeSection===e.id})},r(e.label),11,Qe)]))),128))])])]),l(tt)])}var Q=ee(te,[[`render`,$e],[`__scopeId`,`data-v-7bd7a00e`]]);export{Q as default};