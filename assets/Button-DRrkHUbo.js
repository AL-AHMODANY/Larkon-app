import{A as e,B as t,C as n,O as r,R as i,V as a,c as o,d as s,dt as c,h as l,i as u,j as d,m as f,p as ee,pt as p,s as m,t as h,u as g,w as te}from"./_plugin-vue_export-helper-Ct9996Xc.js";var _=[`disabled`,`type`],v={key:0,class:`btn-icon me-2`},y={class:`btn-label`},b={key:1,class:`btn-icon ms-2`},x=h({__name:`BaseButton`,props:{variant:{type:String,default:`primary`,validator:e=>[`primary`,`secondary`,`success`,`info`,`warning`,`danger`,`dark`,`light`,`link`,`purple`,`pink`,`orange`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},outline:{type:Boolean,default:!1},soft:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},width:{type:String,default:null,validator:e=>[null,`xs`,`sm`,`md`,`lg`,`xl`].includes(e)},disabled:{type:Boolean,default:!1},type:{type:String,default:`button`}},setup(e){let t=e,n=m(()=>{let e=[`btn`];return t.size===`sm`&&e.push(`btn-sm`),t.size===`lg`&&e.push(`btn-lg`),t.outline?e.push(`btn-outline-${t.variant}`):t.soft?e.push(`btn-soft-${t.variant}`):e.push(`btn-${t.variant}`),t.rounded&&e.push(`rounded-pill`),t.width&&e.push(`btn-width-${t.width}`),e});return(t,i)=>(r(),s(`button`,{class:c(n.value),disabled:e.disabled,type:e.type},[t.$slots[`icon-left`]?(r(),s(`span`,v,[d(t.$slots,`icon-left`,{},void 0,!0)])):g(``,!0),o(`span`,y,[d(t.$slots,`default`,{},void 0,!0)]),t.$slots[`icon-right`]?(r(),s(`span`,b,[d(t.$slots,`icon-right`,{},void 0,!0)])):g(``,!0)],10,_))}},[[`__scopeId`,`data-v-dd070740`]]),ne={class:`buttons-page py-4 px-2 px-lg-3`},re={class:`row g-4 align-items-start`},ie={class:`col-12 col-lg-8 col-xl-9`},ae={class:`showcase-head`},S={class:`showcase-body`},C={class:`btn-row`},w={class:`code-box mb-0`},T={class:`showcase-head`},E={class:`showcase-body`},D={class:`btn-row`},O={class:`code-box mb-0`},k={class:`showcase-head`},A={class:`showcase-body`},j={class:`btn-row`},M={class:`code-box mb-0`},N={class:`showcase-head`},P={class:`showcase-body`},F={class:`btn-row`},I={class:`code-box mb-0`},L={class:`showcase-head`},R={class:`showcase-body`},z={class:`btn-row`},B={class:`code-box mb-0`},V={class:`showcase-head`},H={class:`showcase-body`},U={class:`btn-row`},W={class:`code-box mb-0`},G={class:`showcase-head`},oe={class:`showcase-body`},K={class:`btn-row`},q={class:`code-box mb-0`},se={class:`showcase-head`},ce={class:`showcase-body`},le={class:`btn-row align-items-center`},ue={class:`code-box mb-0`},de={class:`showcase-head`},fe={class:`showcase-body`},pe={class:`btn-row`},me={class:`code-box mb-0`},he={class:`showcase-head`},ge={class:`showcase-body`},_e={class:`code-box mb-0`},ve={class:`showcase-head`},ye={class:`showcase-body`},be={class:`code-box mb-0`},xe={class:`showcase-head`},Se={class:`showcase-body`},Ce={class:`d-grid gap-2`},we={class:`code-box mb-0`},Te={class:`col-12 col-lg-4 col-xl-3`},J={class:`toc-card toc-fixed position-lg-sticky top-0`},Ee={class:`toc-list mb-0`},De=[`onClick`],Y=h({__name:`Button`,setup(d){let m=[`primary`,`secondary`,`success`,`info`,`warning`,`danger`,`dark`,`purple`,`pink`,`orange`,`light`,`link`],h=a(``),g=a(`default`),_={},v=null,y=[{id:`default`,label:`Default Example`},{id:`rounded`,label:`Rounded Buttons`},{id:`outline`,label:`Outline Buttons`},{id:`outline-rounded`,label:`Outline Rounded Buttons`},{id:`soft`,label:`Soft Buttons`},{id:`soft-rounded`,label:`Soft Rounded Buttons`},{id:`width`,label:`Button Width`},{id:`sizes`,label:`Button Sizes`},{id:`disabled`,label:`Disabled Button`},{id:`icons`,label:`Icon Button`},{id:`groups`,label:`Button Group`},{id:`blocks`,label:`Block Button`}],b=t({default:`
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-purple">Purple</button>
<button type="button" class="btn btn-pink">Pink</button>
<button type="button" class="btn btn-orange">Orange</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-link">Link</button>`,rounded:`<button type="button" class="btn btn-primary rounded-pill">Primary</button>
<button type="button" class="btn btn-secondary rounded-pill">Secondary</button>
<button type="button" class="btn btn-success rounded-pill">Success</button>
<button type="button" class="btn btn-info rounded-pill">Info</button>
<button type="button" class="btn btn-warning rounded-pill">Warning</button>
<button type="button" class="btn btn-danger rounded-pill">Danger</button>
<button type="button" class="btn btn-dark rounded-pill">Dark</button>
<button type="button" class="btn btn-purple rounded-pill">Purple</button>
<button type="button" class="btn btn-pink rounded-pill">Pink</button>
<button type="button" class="btn btn-orange rounded-pill">Orange</button>
<button type="button" class="btn btn-light rounded-pill">Light</button>
<button type="button" class="btn btn-link rounded-pill">Link</button>`,outline:`<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
<button type="button" class="btn btn-outline-purple">Purple</button>
<button type="button" class="btn btn-outline-pink">Pink</button>
<button type="button" class="btn btn-outline-orange">Orange</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-link">Link</button>`,outlineRounded:`<button type="button" class="btn btn-outline-primary rounded-pill">Primary</button>
<button type="button" class="btn btn-outline-secondary rounded-pill">Secondary</button>
<button type="button" class="btn btn-outline-success rounded-pill">Success</button>
<button type="button" class="btn btn-outline-info rounded-pill">Info</button>
<button type="button" class="btn btn-outline-warning rounded-pill">Warning</button>
<button type="button" class="btn btn-outline-danger rounded-pill">Danger</button>
<button type="button" class="btn btn-outline-dark rounded-pill">Dark</button>
<button type="button" class="btn btn-outline-purple rounded-pill">Purple</button>
<button type="button" class="btn btn-outline-pink rounded-pill">Pink</button>
<button type="button" class="btn btn-outline-orange rounded-pill">Orange</button>
<button type="button" class="btn btn-outline-light rounded-pill">Light</button>
<button type="button" class="btn btn-link rounded-pill">Link</button>`,soft:`<button type="button" class="btn btn-soft-primary">Primary</button>
<button type="button" class="btn btn-soft-secondary">Secondary</button>
<button type="button" class="btn btn-soft-success">Success</button>
<button type="button" class="btn btn-soft-info">Info</button>
<button type="button" class="btn btn-soft-warning">Warning</button>
<button type="button" class="btn btn-soft-danger">Danger</button>
<button type="button" class="btn btn-soft-dark">Dark</button>
<button type="button" class="btn btn-soft-purple">Purple</button>
<button type="button" class="btn btn-soft-pink">Pink</button>
<button type="button" class="btn btn-soft-orange">Orange</button>
<button type="button" class="btn btn-soft-light">Light</button>
<button type="button" class="btn btn-soft-link">Link</button>`,softRounded:`<button type="button" class="btn btn-soft-primary rounded-pill">Primary</button>
<button type="button" class="btn btn-soft-secondary rounded-pill">Secondary</button>
<button type="button" class="btn btn-soft-success rounded-pill">Success</button>
<button type="button" class="btn btn-soft-info rounded-pill">Info</button>
<button type="button" class="btn btn-soft-warning rounded-pill">Warning</button>
<button type="button" class="btn btn-soft-danger rounded-pill">Danger</button>
<button type="button" class="btn btn-soft-dark rounded-pill">Dark</button>
<button type="button" class="btn btn-soft-purple rounded-pill">Purple</button>
<button type="button" class="btn btn-soft-pink rounded-pill">Pink</button>
<button type="button" class="btn btn-soft-orange rounded-pill">Orange</button>
<button type="button" class="btn btn-soft-light rounded-pill">Light</button>
<button type="button" class="btn btn-soft-link rounded-pill">Link</button>`,width:`<button type="button" class="btn btn-primary btn-width-xs">Width xs</button>
<button type="button" class="btn btn-secondary btn-width-sm">Width sm</button>
<button type="button" class="btn btn-success btn-width-md">Width md</button>
<button type="button" class="btn btn-info btn-width-lg">Width lg</button>
<button type="button" class="btn btn-warning btn-width-xl">Width xl</button>`,sizes:`<button type="button" class="btn btn-success btn-sm">Small</button>
<button type="button" class="btn btn-primary">Medium</button>
<button type="button" class="btn btn-danger btn-lg">Large</button>`,disabled:`<button type="button" class="btn btn-primary" disabled>Primary</button>
<button type="button" class="btn btn-secondary" disabled>Secondary</button>
<button type="button" class="btn btn-success" disabled>Success</button>
<button type="button" class="btn btn-info" disabled>Info</button>
<button type="button" class="btn btn-warning" disabled>Warning</button>`,icons:`<!-- Icon Button -->
<button type="button" class="btn btn-primary">
    <i class="bx bx-heart"></i>
</button>
<button type="button" class="btn btn-secondary">
    <i class="bx bx-user-voice"></i>
</button>
<button type="button" class="btn btn-success">
    <i class="bx bx-check-double"></i>
</button>
<button type="button" class="btn btn-info">
    <i class="bx bx-cloud me-1"></i>Cloude Hosting
</button>
<button type="button" class="btn btn-warning">
    <i class="bx bx-info-circle me-1"></i>Warning
</button>`,groups:`<!-- btn-group horizontal -->
<div class="btn-group mb-1 me-1">
    <button type="button" class="btn btn-light">Left</button>
    <button type="button" class="btn btn-light">Middle</button>
    <button type="button" class="btn btn-light">Right</button>
</div>
<div class="btn-group mb-1 me-1">
    <button type="button" class="btn btn-light">1</button>
    <button type="button" class="btn btn-light">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-light">4</button>
</div>
<div class="btn-group mb-1 me-1">
    <button type="button" class="btn btn-light">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-light">7</button>
    <button id="dropdown" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown">
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
    </ul>
</div>

<!-- btn-group vertical -->
<div class="btn-group-vertical me-4">
    <button type="button" class="btn btn-light">Top</button>
    <button type="button" class="btn btn-light">Middle</button>
    <button type="button" class="btn btn-light">Bottom</button>
</div>
<div class="btn-group-vertical">
    <button type="button" class="btn btn-light">Button 1</button>
    <button type="button" class="btn btn-light">Button 2</button>
    <button id="verticalDropdown" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Button 3
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="verticalDropdown">
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
        <li><a class="dropdown-item" href="javascript:void(0);">Dropdown link</a></li>
    </ul>
</div>`,blocks:`<div class="d-grid gap-2">
  <button type="button" class="btn btn-danger">Block Button</button>
  <button type="button" class="btn btn-secondary">Block Button</button>
  <button type="button" class="btn btn-light">Block Button</button>
</div>`});function Y(e,t){t&&(_[e]=t)}function Oe(e){g.value=e;let t=_[e];if(!t)return;if(v&&v!==window){let e=v.getBoundingClientRect(),n=t.getBoundingClientRect().top-e.top+v.scrollTop-96;v.scrollTo({top:n,behavior:`smooth`});return}let n=window.scrollY+t.getBoundingClientRect().top-110;window.scrollTo({top:n,behavior:`smooth`})}function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Z(e){return h.value===e?`Copied!`:`Copy code`}async function Q(e){await navigator.clipboard.writeText(b[e]),h.value=e,window.setTimeout(()=>{h.value=``},1200)}function $(){let e=y.map(e=>e.id);if(!e.length)return;let t=e[0];if(v&&v!==window){let n=v.getBoundingClientRect();e.forEach(e=>{let r=_[e];r&&r.getBoundingClientRect().top-n.top<=120&&(t=e)})}else e.forEach(e=>{let n=_[e];n&&n.getBoundingClientRect().top<=160&&(t=e)});g.value=t}return te(()=>{v=document.querySelector(`.main-content`)||window,v&&v!==window?v.addEventListener(`scroll`,$,{passive:!0}):window.addEventListener(`scroll`,$,{passive:!0}),window.addEventListener(`resize`,$,{passive:!0}),window.setTimeout($,80)}),n(()=>{v&&v!==window?v.removeEventListener(`scroll`,$):window.removeEventListener(`scroll`,$),window.removeEventListener(`resize`,$)}),(t,n)=>(r(),s(`div`,ne,[n[42]||=o(`div`,{class:`mb-3`},[o(`h4`,{class:`page-heading mb-1`},`Buttons`),o(`p`,{class:`page-subtitle mb-0`},` Bootstrap style button examples with copy-ready HTML snippets. `)],-1),o(`div`,re,[o(`div`,ie,[o(`section`,{id:`default`,ref:e=>Y(`default`,e),class:`showcase-card`},[o(`header`,ae,[n[12]||=o(`h6`,{class:`mb-0`},`Default Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[0]||=e=>Q(`default`)},p(Z(`default`)),1)]),o(`div`,S,[o(`div`,C,[(r(),s(u,null,e(m,e=>l(x,{key:`d-${e}`,variant:e},{default:i(()=>[f(p(X(e)),1)]),_:2},1032,[`variant`])),64))]),o(`pre`,w,[o(`code`,null,p(b.default),1)])])],512),o(`section`,{id:`rounded`,ref:e=>Y(`rounded`,e),class:`showcase-card`},[o(`header`,T,[n[13]||=o(`h6`,{class:`mb-0`},`Rounded Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[1]||=e=>Q(`rounded`)},p(Z(`rounded`)),1)]),o(`div`,E,[o(`div`,D,[(r(),s(u,null,e(m,e=>l(x,{key:`r-${e}`,variant:e,rounded:``},{default:i(()=>[f(p(X(e)),1)]),_:2},1032,[`variant`])),64))]),o(`pre`,O,[o(`code`,null,p(b.rounded),1)])])],512),o(`section`,{id:`outline`,ref:e=>Y(`outline`,e),class:`showcase-card`},[o(`header`,k,[n[14]||=o(`h6`,{class:`mb-0`},`Outline Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[2]||=e=>Q(`outline`)},p(Z(`outline`)),1)]),o(`div`,A,[o(`div`,j,[(r(),s(u,null,e(m,e=>l(x,{key:`o-${e}`,variant:e,outline:``},{default:i(()=>[f(p(X(e)),1)]),_:2},1032,[`variant`])),64))]),o(`pre`,M,[o(`code`,null,p(b.outline),1)])])],512),o(`section`,{id:`outline-rounded`,ref:e=>Y(`outline-rounded`,e),class:`showcase-card`},[o(`header`,N,[n[15]||=o(`h6`,{class:`mb-0`},`Outline Rounded Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[3]||=e=>Q(`outlineRounded`)},p(Z(`outlineRounded`)),1)]),o(`div`,P,[o(`div`,F,[(r(),s(u,null,e(m,e=>l(x,{key:`or-${e}`,variant:e,outline:``,rounded:``},{default:i(()=>[f(p(X(e)),1)]),_:2},1032,[`variant`])),64))]),o(`pre`,I,[o(`code`,null,p(b.outlineRounded),1)])])],512),o(`section`,{id:`soft`,ref:e=>Y(`soft`,e),class:`showcase-card`},[o(`header`,L,[n[16]||=o(`h6`,{class:`mb-0`},`Soft Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[4]||=e=>Q(`soft`)},p(Z(`soft`)),1)]),o(`div`,R,[o(`div`,z,[(r(),s(u,null,e(m,e=>l(x,{key:`s-${e}`,variant:e,soft:``},{default:i(()=>[f(p(X(e)),1)]),_:2},1032,[`variant`])),64))]),o(`pre`,B,[o(`code`,null,p(b.soft),1)])])],512),o(`section`,{id:`soft-rounded`,ref:e=>Y(`soft-rounded`,e),class:`showcase-card`},[o(`header`,V,[n[17]||=o(`h6`,{class:`mb-0`},`Soft Rounded Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[5]||=e=>Q(`softRounded`)},p(Z(`softRounded`)),1)]),o(`div`,H,[o(`div`,U,[(r(),s(u,null,e(m,e=>l(x,{key:`sr-${e}`,variant:e,soft:``,rounded:``},{default:i(()=>[f(p(X(e)),1)]),_:2},1032,[`variant`])),64))]),o(`pre`,W,[o(`code`,null,p(b.softRounded),1)])])],512),o(`section`,{id:`width`,ref:e=>Y(`width`,e),class:`showcase-card`},[o(`header`,G,[n[18]||=o(`h6`,{class:`mb-0`},`Buttons Width`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[6]||=e=>Q(`width`)},p(Z(`width`)),1)]),o(`div`,oe,[o(`div`,K,[l(x,{variant:`primary`,width:`xs`},{default:i(()=>[...n[19]||=[f(`Width xs`,-1)]]),_:1}),l(x,{variant:`secondary`,width:`sm`},{default:i(()=>[...n[20]||=[f(`Width sm`,-1)]]),_:1}),l(x,{variant:`success`,width:`md`},{default:i(()=>[...n[21]||=[f(`Width md`,-1)]]),_:1}),l(x,{variant:`info`,width:`lg`},{default:i(()=>[...n[22]||=[f(`Width lg`,-1)]]),_:1}),l(x,{variant:`warning`,width:`xl`},{default:i(()=>[...n[23]||=[f(`Width xl`,-1)]]),_:1})]),o(`pre`,q,[o(`code`,null,p(b.width),1)])])],512),o(`section`,{id:`sizes`,ref:e=>Y(`sizes`,e),class:`showcase-card`},[o(`header`,se,[n[24]||=o(`h6`,{class:`mb-0`},`Buttons Sizes`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[7]||=e=>Q(`sizes`)},p(Z(`sizes`)),1)]),o(`div`,ce,[o(`div`,le,[l(x,{variant:`success`,size:`sm`},{default:i(()=>[...n[25]||=[f(`Small`,-1)]]),_:1}),l(x,{variant:`primary`,size:`md`},{default:i(()=>[...n[26]||=[f(`Medium`,-1)]]),_:1}),l(x,{variant:`danger`,size:`lg`},{default:i(()=>[...n[27]||=[f(`Large`,-1)]]),_:1})]),o(`pre`,ue,[o(`code`,null,p(b.sizes),1)])])],512),o(`section`,{id:`disabled`,ref:e=>Y(`disabled`,e),class:`showcase-card`},[o(`header`,de,[n[28]||=o(`h6`,{class:`mb-0`},`Disabled Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[8]||=e=>Q(`disabled`)},p(Z(`disabled`)),1)]),o(`div`,fe,[o(`div`,pe,[l(x,{variant:`primary`,disabled:``},{default:i(()=>[...n[29]||=[f(`Primary`,-1)]]),_:1}),l(x,{variant:`secondary`,disabled:``},{default:i(()=>[...n[30]||=[f(`Secondary`,-1)]]),_:1}),l(x,{variant:`success`,disabled:``},{default:i(()=>[...n[31]||=[f(`Success`,-1)]]),_:1}),l(x,{variant:`info`,disabled:``},{default:i(()=>[...n[32]||=[f(`Info`,-1)]]),_:1}),l(x,{variant:`warning`,disabled:``},{default:i(()=>[...n[33]||=[f(`Warning`,-1)]]),_:1})]),o(`pre`,me,[o(`code`,null,p(b.disabled),1)])])],512),o(`section`,{id:`icons`,ref:e=>Y(`icons`,e),class:`showcase-card`},[o(`header`,he,[n[34]||=o(`h6`,{class:`mb-0`},`Icon Left Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[9]||=e=>Q(`icons`)},p(Z(`icons`)),1)]),o(`div`,ge,[n[35]||=ee(`<div class="btn-row d-flex flex-wrap gap-2" data-v-018f68f4><button type="button" class="btn btn-primary" data-v-018f68f4><i class="bx bx-heart" data-v-018f68f4></i></button><button type="button" class="btn btn-secondary" data-v-018f68f4><i class="bx bx-user-voice" data-v-018f68f4></i></button><button type="button" class="btn btn-success" data-v-018f68f4><i class="bx bx-check-double" data-v-018f68f4></i></button><button type="button" class="btn btn-info" data-v-018f68f4><i class="bx bx-cloud me-1" data-v-018f68f4></i>Cloud Hosting </button><button type="button" class="btn btn-warning" data-v-018f68f4><i class="bx bx-info-circle me-1" data-v-018f68f4></i>Warning </button></div>`,1),o(`pre`,_e,[o(`code`,null,p(b.icons),1)])])],512),o(`section`,{id:`groups`,ref:e=>Y(`groups`,e),class:`showcase-card`},[o(`header`,ve,[n[36]||=o(`h6`,{class:`mb-0`},`Button Groups`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[10]||=e=>Q(`groups`)},p(Z(`groups`)),1)]),o(`div`,ye,[n[37]||=o(`div`,{class:`d-flex flex-wrap gap-2 mb-3`},[o(`div`,{class:`btn-group mb-1 me-1`,role:`group`,"aria-label":`Horizontal group 1`},[o(`button`,{type:`button`,class:`btn btn-light`},`Left`),o(`button`,{type:`button`,class:`btn btn-light`},`Middle`),o(`button`,{type:`button`,class:`btn btn-light`},`Right`)]),o(`div`,{class:`btn-group mb-1 me-1`,role:`group`,"aria-label":`Horizontal group 2`},[o(`button`,{type:`button`,class:`btn btn-light`},`1`),o(`button`,{type:`button`,class:`btn btn-light`},`2`),o(`button`,{type:`button`,class:`btn btn-secondary`},`3`),o(`button`,{type:`button`,class:`btn btn-light`},`4`)]),o(`div`,{class:`btn-group mb-1 me-1`,role:`group`,"aria-label":`Horizontal group 3`},[o(`button`,{type:`button`,class:`btn btn-light`},`5`),o(`button`,{type:`button`,class:`btn btn-secondary`},`6`),o(`button`,{type:`button`,class:`btn btn-light`},`7`),o(`button`,{id:`dropdown`,type:`button`,class:`btn btn-light dropdown-toggle`,"data-bs-toggle":`dropdown`,"aria-expanded":`false`},` Dropdown `),o(`ul`,{class:`dropdown-menu dropdown-menu-end`,"aria-labelledby":`dropdown`},[o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)]),o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)])])]),o(`div`,{class:`d-flex gap-3`},[o(`div`,{class:`btn-group-vertical me-4`,role:`group`,"aria-label":`Vertical group 1`},[o(`button`,{type:`button`,class:`btn btn-light`},`Top`),o(`button`,{type:`button`,class:`btn btn-light`},`Middle`),o(`button`,{type:`button`,class:`btn btn-light`},`Bottom`)]),o(`div`,{class:`btn-group-vertical`,role:`group`,"aria-label":`Vertical group 2`},[o(`button`,{type:`button`,class:`btn btn-light`},`Button 1`),o(`button`,{type:`button`,class:`btn btn-light`},`Button 2`),o(`button`,{id:`verticalDropdown`,type:`button`,class:`btn btn-light dropdown-toggle`,"data-bs-toggle":`dropdown`,"aria-expanded":`false`},` Button 3 `),o(`ul`,{class:`dropdown-menu dropdown-menu-end`,"aria-labelledby":`verticalDropdown`},[o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)]),o(`li`,null,[o(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)])])])])],-1),o(`pre`,be,[o(`code`,null,p(b.groups),1)])])],512),o(`section`,{id:`blocks`,ref:e=>Y(`blocks`,e),class:`showcase-card`},[o(`header`,xe,[n[38]||=o(`h6`,{class:`mb-0`},`Block Buttons`,-1),o(`button`,{class:`btn btn-copy btn-sm`,onClick:n[11]||=e=>Q(`blocks`)},p(Z(`blocks`)),1)]),o(`div`,Se,[o(`div`,Ce,[l(x,{variant:`danger`},{default:i(()=>[...n[39]||=[f(`Block Button`,-1)]]),_:1}),l(x,{variant:`secondary`},{default:i(()=>[...n[40]||=[f(`Block Button`,-1)]]),_:1}),l(x,{variant:`light`},{default:i(()=>[...n[41]||=[f(`Block Button`,-1)]]),_:1})]),o(`pre`,we,[o(`code`,null,p(b.blocks),1)])])],512)]),o(`div`,Te,[o(`aside`,J,[o(`ul`,Ee,[(r(),s(u,null,e(y,e=>o(`li`,{key:e.id},[o(`button`,{class:c([`toc-link`,{active:g.value===e.id}]),onClick:t=>Oe(e.id)},p(e.label),11,De)])),64))])])])])]))}},[[`__scopeId`,`data-v-018f68f4`]]);export{Y as default};