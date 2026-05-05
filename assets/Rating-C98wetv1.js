import{H as e,M as t,P as n,V as r,Y as i,_ as a,f as o,h as s,q as c,t as l,v as u,x as d,y as f}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as p,t as m}from"./Footer-Ck9cRuzL.js";var h={class:`page-wrapper-adv`,style:{"min-height":`100vh`}},g={class:`container-fluid`},_={class:`row g-4`},v={class:`col-lg-9`},y=[`id`],b={class:`card-body p-4`},x={class:`d-flex align-items-center gap-2 mb-3`},S={class:`fw-semibold mb-0`,style:{"font-size":`0.97rem`,color:`#1a1e2c`}},C={key:0,class:`text-muted`,style:{"font-size":`0.8rem`}},w={class:`mb-3 d-flex align-items-center gap-2`},T={class:`d-flex align-items-center`},E=[`onClick`,`onMouseover`,`onMouseleave`],D=[`onClick`],O={key:1,class:`badge bg-info align-middle ms-1`,style:{"font-size":`0.72rem`}},k={class:`rounded-3 overflow-hidden border`},A={class:`d-flex align-items-center justify-content-between px-3 py-2`,style:{background:`#f8f9fa`,"border-bottom":`1px solid #e9ecef`}},j={class:`d-flex gap-0`},M=[`onClick`],N=[`onClick`],P=[`onClick`],F={style:{background:`#ffffff`,"overflow-x":`auto`,"min-height":`52px`}},I={class:`mb-0 px-3 py-3`,style:{"font-size":`0.78rem`,color:`#c0392b`,"font-family":`'Fira Code', 'Cascadia Code', Consolas, monospace`,"line-height":`1.75`,"white-space":`pre`}},L={class:`col-lg-3 d-none d-lg-block`},R={class:`card border-0 shadow-sm rounded-3`,style:{position:`sticky`,top:`1.5rem`}},z={class:`card-body p-3`},B=[`onClick`],V=l({__name:`Rating`,setup(l){let V=e(`section-basic`),H=e(null),U=r({}),W=r([{id:`section-basic`,title:`Basic Rater Example`,badge:null,rating:3,hoverValue:0,readonly:!1,showReset:!1,showHoverNum:!1,htmlCode:`<div id="basic-rater" dir="ltr"></div>`,jsCode:`raterJs({
  element: document.querySelector("#basic-rater"),
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  }
});`},{id:`section-step`,title:`Rater with Step Example`,badge:null,rating:1,hoverValue:0,readonly:!1,showReset:!1,showHoverNum:!1,htmlCode:`<div id="rater-step" dir="ltr"></div>`,jsCode:`raterJs({
  element: document.querySelector("#rater-step"),
  step: 0.5,
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  }
});`},{id:`section-message`,title:`Custom Messages Example`,badge:null,rating:0,hoverValue:0,readonly:!1,showReset:!1,showHoverNum:!1,htmlCode:`<div id="rater-message" dir="ltr"></div>`,jsCode:`raterJs({
  element: document.querySelector("#rater-message"),
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  },
  starMessages: ["Poor", "Not bad", "Good", "Very good", "Excellent"]
});`},{id:`section-readonly`,title:`ReadOnly Example`,badge:null,rating:3,hoverValue:0,readonly:!0,showReset:!1,showHoverNum:!1,htmlCode:`<div id="rater-unlimitedstar" dir="ltr"></div>`,jsCode:`raterJs({
  element: document.querySelector("#rater-unlimitedstar"),
  readOnly: true,
  rating: 3.5,
  starSize: 25
});`},{id:`section-hover`,title:`On Hover Event Example`,badge:null,rating:1,hoverValue:0,readonly:!1,showReset:!1,showHoverNum:!0,htmlCode:`<div dir="ltr">
    <div id="rater-onhover" class="align-middle"></div>
    <span class="ratingnum badge bg-info align-middle ms-2"></span>
</div>`,jsCode:`raterJs({
  element: document.querySelector("#rater-onhover"),
  onHover: function(currentIndex, currentRating) {
    document.querySelector(".ratingnum").innerHTML = currentIndex;
  },
  onLeave: function(currentIndex, currentRating) {
    document.querySelector(".ratingnum").innerHTML = currentRating;
  }
});`},{id:`section-reset`,title:`Clear/Reset Rater Example`,badge:`""`,rating:2,hoverValue:0,readonly:!1,showReset:!0,showHoverNum:!1,htmlCode:`<div dir="ltr">
    <div id="raterreset" class="align-middle"></div>
    <span class="clear-rating"></span>
    <button id="raterreset-button" class="btn btn-light btn-sm ms-2">Reset</button>
</div>`,jsCode:`var raterReset = raterJs({
  element: document.querySelector("#raterreset"),
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  }
});

document.querySelector("#raterreset-button").addEventListener("click", function() {
  raterReset.setRating(0);
});`}]);W.forEach((e,t)=>{U[t]=`html`});function G(e,t){W[e].rating=t,W[e].hoverValue=0}function K(e,t){W[e].hoverValue=t}function q(e){W[e].hoverValue=0}function J(e){W[e].rating=0,W[e].hoverValue=0}async function Y(e){let t=U[e]===`html`?W[e].htmlCode:W[e].jsCode;try{await navigator.clipboard.writeText(t)}catch{let e=document.createElement(`textarea`);e.value=t,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e)}H.value=e,setTimeout(()=>{H.value=null},2e3)}function X(e){V.value=e,document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})}return(e,r)=>(t(),u(`div`,h,[d(p),s(`div`,g,[r[1]||=s(`div`,{class:`mb-4`},[s(`p`,{class:`text-uppercase fw-bold mb-0`,style:{"letter-spacing":`0.12em`,"font-size":`0.72rem`,color:`#6c757d`}},`Ratings`)],-1),s(`div`,_,[s(`div`,v,[r[0]||=f(`<div class="card border-0 shadow-sm rounded-3 mb-4" data-v-d11e23ae><div class="card-body p-4" data-v-d11e23ae><div class="d-flex align-items-start justify-content-between mb-2" data-v-d11e23ae><div data-v-d11e23ae><h6 class="fw-bold mb-1" style="color:#1a1e2c;" data-v-d11e23ae>Overview</h6><p class="text-muted mb-2" style="font-size:0.84rem;" data-v-d11e23ae> Rater js is the best star rater for the browser. No dependencies. Unlimited number of stars </p><h6 class="fw-bold mb-1" style="color:#1a1e2c;" data-v-d11e23ae>Usage</h6><p class="text-muted mb-0" style="font-size:0.84rem;" data-v-d11e23ae> Rater js&#39;s CSS and Javascript files are bundled in the <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;" data-v-d11e23ae>vendor.min.css</a> and <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;" data-v-d11e23ae>vendor.js</a> and globally included in all pages. </p></div><a href="#" class="btn btn-outline-success btn-sm ms-4 text-nowrap" style="font-size:0.78rem;border-radius:6px;" data-v-d11e23ae>Official Website</a></div></div></div>`,1),(t(!0),u(o,null,n(W,(e,r)=>(t(),u(`div`,{key:e.id,id:e.id,class:`card border-0 shadow-sm rounded-3 mb-4`},[s(`div`,b,[s(`div`,x,[s(`h5`,S,i(e.title),1),e.badge?(t(),u(`span`,C,i(e.badge),1)):a(``,!0)]),s(`div`,w,[s(`div`,T,[(t(),u(o,null,n(5,t=>s(`span`,{key:t,class:c([`star-icon`,t<=e.rating?`filled`:`empty`]),style:{"font-size":`1.5rem`,cursor:`pointer`,transition:`color 0.15s`},onClick:n=>!e.readonly&&G(r,t),onMouseover:n=>!e.readonly&&K(r,t),onMouseleave:t=>!e.readonly&&q(r)},`★`,42,E)),64))]),e.showReset?(t(),u(`button`,{key:0,class:`btn btn-light btn-sm ms-2`,style:{"font-size":`0.78rem`,"border-radius":`6px`},onClick:e=>J(r)},`Reset`,8,D)):a(``,!0),e.showHoverNum?(t(),u(`span`,O,i(e.hoverValue||e.rating),1)):a(``,!0)]),s(`div`,k,[s(`div`,A,[s(`div`,j,[s(`button`,{class:c([`btn btn-sm me-1 fw-semibold tab-btn`,U[r]===`html`?`tab-active-html`:`tab-inactive`]),style:{"font-size":`0.72rem`,"border-radius":`5px`,padding:`0.2rem 0.65rem`},onClick:e=>U[r]=`html`},`HTML`,10,M),s(`button`,{class:c([`btn btn-sm fw-semibold tab-btn`,U[r]===`js`?`tab-active-js`:`tab-inactive`]),style:{"font-size":`0.72rem`,"border-radius":`5px`,padding:`0.2rem 0.65rem`},onClick:e=>U[r]=`js`},`JAVASCRIPT`,10,N)]),s(`button`,{class:c([`btn btn-sm btn-outline-secondary py-1 px-2`,H.value===r?`btn-success border-success text-success`:``]),style:{"font-size":`0.72rem`},onClick:e=>Y(r)},i(H.value===r?`Copied!`:`Copy`),11,P)]),s(`div`,F,[s(`pre`,I,i(U[r]===`html`?e.htmlCode:e.jsCode),1)])])])],8,y))),128))]),s(`div`,L,[s(`div`,R,[s(`div`,z,[(t(!0),u(o,null,n(W,e=>(t(),u(`a`,{key:e.id,href:`javascript:void(0)`,class:c([`d-block text-decoration-none py-1 px-3 mb-1 toc-link`,{"toc-active":V.value===e.id}]),style:{"font-size":`0.82rem`,"border-radius":`6px`},onClick:t=>X(e.id)},i(e.title),11,B))),128))])])])]),r[2]||=s(`div`,{class:`text-center mt-5 pb-3`},[s(`small`,{class:`text-muted`},`2026 © AL-AHMODANY. Crafted with ❤️ by Techzaa`)],-1)]),d(m)]))}},[[`__scopeId`,`data-v-d11e23ae`]]);export{V as default};