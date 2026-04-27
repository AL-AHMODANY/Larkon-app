import{A as e,B as t,O as n,V as r,c as i,d as a,dt as o,i as s,p as c,pt as l,t as u,u as d}from"./_plugin-vue_export-helper-Ct9996Xc.js";var f={class:`py-4 px-3 px-md-4 bg-light`,style:{"min-height":`100vh`}},p={class:`container-fluid`},m={class:`row g-4`},h={class:`col-lg-9`},g=[`id`],_={class:`card-body p-4`},v={class:`d-flex align-items-center gap-2 mb-3`},y={class:`fw-semibold mb-0`,style:{"font-size":`0.97rem`,color:`#1a1e2c`}},b={key:0,class:`text-muted`,style:{"font-size":`0.8rem`}},x={class:`mb-3 d-flex align-items-center gap-2`},S={class:`d-flex align-items-center`},C=[`onClick`,`onMouseover`,`onMouseleave`],w=[`onClick`],T={key:1,class:`badge bg-info align-middle ms-1`,style:{"font-size":`0.72rem`}},E={class:`rounded-3 overflow-hidden border`},D={class:`d-flex align-items-center justify-content-between px-3 py-2`,style:{background:`#f8f9fa`,"border-bottom":`1px solid #e9ecef`}},O={class:`d-flex gap-0`},k=[`onClick`],A=[`onClick`],j=[`onClick`],M={style:{background:`#ffffff`,"overflow-x":`auto`,"min-height":`52px`}},N={class:`mb-0 px-3 py-3`,style:{"font-size":`0.78rem`,color:`#c0392b`,"font-family":`'Fira Code', 'Cascadia Code', Consolas, monospace`,"line-height":`1.75`,"white-space":`pre`}},P={class:`col-lg-3 d-none d-lg-block`},F={class:`card border-0 shadow-sm rounded-3`,style:{position:`sticky`,top:`1.5rem`}},I={class:`card-body p-3`},L=[`onClick`],R=u({__name:`Rating`,setup(u){let R=r(`section-basic`),z=r(null),B=t({}),V=t([{id:`section-basic`,title:`Basic Rater Example`,badge:null,rating:3,hoverValue:0,readonly:!1,showReset:!1,showHoverNum:!1,htmlCode:`<div id="basic-rater" dir="ltr"></div>`,jsCode:`raterJs({
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
});`}]);V.forEach((e,t)=>{B[t]=`html`});function H(e,t){V[e].rating=t,V[e].hoverValue=0}function U(e,t){V[e].hoverValue=t}function W(e){V[e].hoverValue=0}function G(e){V[e].rating=0,V[e].hoverValue=0}async function K(e){let t=B[e]===`html`?V[e].htmlCode:V[e].jsCode;try{await navigator.clipboard.writeText(t)}catch{let e=document.createElement(`textarea`);e.value=t,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e)}z.value=e,setTimeout(()=>{z.value=null},2e3)}function q(e){R.value=e,document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})}return(t,r)=>(n(),a(`div`,f,[i(`div`,p,[r[1]||=i(`div`,{class:`mb-4`},[i(`p`,{class:`text-uppercase fw-bold mb-0`,style:{"letter-spacing":`0.12em`,"font-size":`0.72rem`,color:`#6c757d`}},`Ratings`)],-1),i(`div`,m,[i(`div`,h,[r[0]||=c(`<div class="card border-0 shadow-sm rounded-3 mb-4" data-v-11b9aaee><div class="card-body p-4" data-v-11b9aaee><div class="d-flex align-items-start justify-content-between mb-2" data-v-11b9aaee><div data-v-11b9aaee><h6 class="fw-bold mb-1" style="color:#1a1e2c;" data-v-11b9aaee>Overview</h6><p class="text-muted mb-2" style="font-size:0.84rem;" data-v-11b9aaee> Rater js is the best star rater for the browser. No dependencies. Unlimited number of stars </p><h6 class="fw-bold mb-1" style="color:#1a1e2c;" data-v-11b9aaee>Usage</h6><p class="text-muted mb-0" style="font-size:0.84rem;" data-v-11b9aaee> Rater js&#39;s CSS and Javascript files are bundled in the <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;" data-v-11b9aaee>vendor.min.css</a> and <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;" data-v-11b9aaee>vendor.js</a> and globally included in all pages. </p></div><a href="#" class="btn btn-outline-success btn-sm ms-4 text-nowrap" style="font-size:0.78rem;border-radius:6px;" data-v-11b9aaee>Official Website</a></div></div></div>`,1),(n(!0),a(s,null,e(V,(t,r)=>(n(),a(`div`,{key:t.id,id:t.id,class:`card border-0 shadow-sm rounded-3 mb-4`},[i(`div`,_,[i(`div`,v,[i(`h5`,y,l(t.title),1),t.badge?(n(),a(`span`,b,l(t.badge),1)):d(``,!0)]),i(`div`,x,[i(`div`,S,[(n(),a(s,null,e(5,e=>i(`span`,{key:e,class:o([`star-icon`,e<=t.rating?`filled`:`empty`]),style:{"font-size":`1.5rem`,cursor:`pointer`,transition:`color 0.15s`},onClick:n=>!t.readonly&&H(r,e),onMouseover:n=>!t.readonly&&U(r,e),onMouseleave:e=>!t.readonly&&W(r)},`★`,42,C)),64))]),t.showReset?(n(),a(`button`,{key:0,class:`btn btn-light btn-sm ms-2`,style:{"font-size":`0.78rem`,"border-radius":`6px`},onClick:e=>G(r)},`Reset`,8,w)):d(``,!0),t.showHoverNum?(n(),a(`span`,T,l(t.hoverValue||t.rating),1)):d(``,!0)]),i(`div`,E,[i(`div`,D,[i(`div`,O,[i(`button`,{class:o([`btn btn-sm me-1 fw-semibold tab-btn`,B[r]===`html`?`tab-active-html`:`tab-inactive`]),style:{"font-size":`0.72rem`,"border-radius":`5px`,padding:`0.2rem 0.65rem`},onClick:e=>B[r]=`html`},`HTML`,10,k),i(`button`,{class:o([`btn btn-sm fw-semibold tab-btn`,B[r]===`js`?`tab-active-js`:`tab-inactive`]),style:{"font-size":`0.72rem`,"border-radius":`5px`,padding:`0.2rem 0.65rem`},onClick:e=>B[r]=`js`},`JAVASCRIPT`,10,A)]),i(`button`,{class:o([`btn btn-sm btn-outline-secondary py-1 px-2`,z.value===r?`btn-success border-success text-success`:``]),style:{"font-size":`0.72rem`},onClick:e=>K(r)},l(z.value===r?`Copied!`:`Copy`),11,j)]),i(`div`,M,[i(`pre`,N,l(B[r]===`html`?t.htmlCode:t.jsCode),1)])])])],8,g))),128))]),i(`div`,P,[i(`div`,F,[i(`div`,I,[(n(!0),a(s,null,e(V,e=>(n(),a(`a`,{key:e.id,href:`javascript:void(0)`,class:o([`d-block text-decoration-none py-1 px-3 mb-1 toc-link`,{"toc-active":R.value===e.id}]),style:{"font-size":`0.82rem`,"border-radius":`6px`},onClick:t=>q(e.id)},l(e.title),11,L))),128))])])])]),r[2]||=i(`div`,{class:`text-center mt-5 pb-3`},[i(`small`,{class:`text-muted`},`2026 © Larkon. Crafted with ❤️ by Techzaa`)],-1)])]))}},[[`__scopeId`,`data-v-11b9aaee`]]);export{R as default};