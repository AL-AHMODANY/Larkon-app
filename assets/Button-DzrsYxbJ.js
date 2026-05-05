import{F as e,H as t,M as n,O as r,P as i,V as ee,Y as a,_ as o,b as s,f as c,h as l,k as te,m as u,q as d,t as f,v as p,x as m,y as ne,z as h}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as re,t as ie}from"./Footer-Ck9cRuzL.js";var g=[`disabled`,`type`],_={key:0,class:`btn-icon me-2`},v={class:`btn-label`},y={key:1,class:`btn-icon ms-2`},b=f({__name:`BaseButton`,props:{variant:{type:String,default:`primary`,validator:e=>[`primary`,`secondary`,`success`,`info`,`warning`,`danger`,`dark`,`light`,`link`,`purple`,`pink`,`orange`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},outline:{type:Boolean,default:!1},soft:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},width:{type:String,default:null,validator:e=>[null,`xs`,`sm`,`md`,`lg`,`xl`].includes(e)},disabled:{type:Boolean,default:!1},type:{type:String,default:`button`}},setup(t){let r=t,i=u(()=>{let e=[`btn`];return r.size===`sm`&&e.push(`btn-sm`),r.size===`lg`&&e.push(`btn-lg`),r.outline?e.push(`btn-outline-${r.variant}`):r.soft?e.push(`btn-soft-${r.variant}`):e.push(`btn-${r.variant}`),r.rounded&&e.push(`rounded-pill`),r.width&&e.push(`btn-width-${r.width}`),e});return(r,ee)=>(n(),p(`button`,{class:d(i.value),disabled:t.disabled,type:t.type},[r.$slots[`icon-left`]?(n(),p(`span`,_,[e(r.$slots,`icon-left`,{},void 0,!0)])):o(``,!0),l(`span`,v,[e(r.$slots,`default`,{},void 0,!0)]),r.$slots[`icon-right`]?(n(),p(`span`,y,[e(r.$slots,`icon-right`,{},void 0,!0)])):o(``,!0)],10,g))}},[[`__scopeId`,`data-v-dd070740`]]),ae={class:`buttons-page py-4 px-2 px-lg-3`},oe={class:`row g-4 align-items-start`},x={class:`col-12 col-lg-8 col-xl-9`},S={class:`showcase-head`},C={class:`showcase-body`},w={class:`btn-row`},T={class:`code-box mb-0`},E={class:`showcase-head`},D={class:`showcase-body`},O={class:`btn-row`},k={class:`code-box mb-0`},A={class:`showcase-head`},j={class:`showcase-body`},M={class:`btn-row`},N={class:`code-box mb-0`},P={class:`showcase-head`},F={class:`showcase-body`},I={class:`btn-row`},L={class:`code-box mb-0`},R={class:`showcase-head`},z={class:`showcase-body`},B={class:`btn-row`},V={class:`code-box mb-0`},H={class:`showcase-head`},U={class:`showcase-body`},W={class:`btn-row`},G={class:`code-box mb-0`},K={class:`showcase-head`},q={class:`showcase-body`},se={class:`btn-row`},ce={class:`code-box mb-0`},le={class:`showcase-head`},ue={class:`showcase-body`},de={class:`btn-row align-items-center`},fe={class:`code-box mb-0`},pe={class:`showcase-head`},me={class:`showcase-body`},he={class:`btn-row`},ge={class:`code-box mb-0`},_e={class:`showcase-head`},ve={class:`showcase-body`},ye={class:`code-box mb-0`},be={class:`showcase-head`},xe={class:`showcase-body`},Se={class:`code-box mb-0`},Ce={class:`showcase-head`},we={class:`showcase-body`},Te={class:`d-grid gap-2`},J={class:`code-box mb-0`},Ee={class:`col-12 col-lg-4 col-xl-3`},De={class:`toc-card toc-fixed position-lg-sticky top-0`},Oe={class:`toc-list mb-0`},ke=[`onClick`],Y=f({__name:`Button`,setup(e){let o=[`primary`,`secondary`,`success`,`info`,`warning`,`danger`,`dark`,`purple`,`pink`,`orange`,`light`,`link`],u=t(``),f=t(`default`),g={},_=null,v=[{id:`default`,label:`Default Example`},{id:`rounded`,label:`Rounded Buttons`},{id:`outline`,label:`Outline Buttons`},{id:`outline-rounded`,label:`Outline Rounded Buttons`},{id:`soft`,label:`Soft Buttons`},{id:`soft-rounded`,label:`Soft Rounded Buttons`},{id:`width`,label:`Button Width`},{id:`sizes`,label:`Button Sizes`},{id:`disabled`,label:`Disabled Button`},{id:`icons`,label:`Icon Button`},{id:`groups`,label:`Button Group`},{id:`blocks`,label:`Block Button`}],y=ee({default:`
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
</div>`});function Y(e,t){t&&(g[e]=t)}function Ae(e){f.value=e;let t=g[e];if(!t)return;if(_&&_!==window){let e=_.getBoundingClientRect(),n=t.getBoundingClientRect().top-e.top+_.scrollTop-96;_.scrollTo({top:n,behavior:`smooth`});return}let n=window.scrollY+t.getBoundingClientRect().top-110;window.scrollTo({top:n,behavior:`smooth`})}function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Z(e){return u.value===e?`Copied!`:`Copy code`}async function Q(e){await navigator.clipboard.writeText(y[e]),u.value=e,window.setTimeout(()=>{u.value=``},1200)}function $(){let e=v.map(e=>e.id);if(!e.length)return;let t=e[0];if(_&&_!==window){let n=_.getBoundingClientRect();e.forEach(e=>{let r=g[e];r&&r.getBoundingClientRect().top-n.top<=120&&(t=e)})}else e.forEach(e=>{let n=g[e];n&&n.getBoundingClientRect().top<=160&&(t=e)});f.value=t}return te(()=>{_=document.querySelector(`.main-content`)||window,_&&_!==window?_.addEventListener(`scroll`,$,{passive:!0}):window.addEventListener(`scroll`,$,{passive:!0}),window.addEventListener(`resize`,$,{passive:!0}),window.setTimeout($,80)}),r(()=>{_&&_!==window?_.removeEventListener(`scroll`,$):window.removeEventListener(`scroll`,$),window.removeEventListener(`resize`,$)}),(e,t)=>(n(),p(`div`,ae,[m(re),t[42]||=l(`div`,{class:`mb-3`},[l(`h4`,{class:`page-heading mb-1`},`Buttons`),l(`p`,{class:`page-subtitle mb-0`},` Bootstrap style button examples with copy-ready HTML snippets. `)],-1),l(`div`,oe,[l(`div`,x,[l(`section`,{id:`default`,ref:e=>Y(`default`,e),class:`showcase-card`},[l(`header`,S,[t[12]||=l(`h6`,{class:`mb-0`},`Default Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[0]||=e=>Q(`default`)},a(Z(`default`)),1)]),l(`div`,C,[l(`div`,w,[(n(),p(c,null,i(o,e=>m(b,{key:`d-${e}`,variant:e},{default:h(()=>[s(a(X(e)),1)]),_:2},1032,[`variant`])),64))]),l(`pre`,T,[l(`code`,null,a(y.default),1)])])],512),l(`section`,{id:`rounded`,ref:e=>Y(`rounded`,e),class:`showcase-card`},[l(`header`,E,[t[13]||=l(`h6`,{class:`mb-0`},`Rounded Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[1]||=e=>Q(`rounded`)},a(Z(`rounded`)),1)]),l(`div`,D,[l(`div`,O,[(n(),p(c,null,i(o,e=>m(b,{key:`r-${e}`,variant:e,rounded:``},{default:h(()=>[s(a(X(e)),1)]),_:2},1032,[`variant`])),64))]),l(`pre`,k,[l(`code`,null,a(y.rounded),1)])])],512),l(`section`,{id:`outline`,ref:e=>Y(`outline`,e),class:`showcase-card`},[l(`header`,A,[t[14]||=l(`h6`,{class:`mb-0`},`Outline Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[2]||=e=>Q(`outline`)},a(Z(`outline`)),1)]),l(`div`,j,[l(`div`,M,[(n(),p(c,null,i(o,e=>m(b,{key:`o-${e}`,variant:e,outline:``},{default:h(()=>[s(a(X(e)),1)]),_:2},1032,[`variant`])),64))]),l(`pre`,N,[l(`code`,null,a(y.outline),1)])])],512),l(`section`,{id:`outline-rounded`,ref:e=>Y(`outline-rounded`,e),class:`showcase-card`},[l(`header`,P,[t[15]||=l(`h6`,{class:`mb-0`},`Outline Rounded Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[3]||=e=>Q(`outlineRounded`)},a(Z(`outlineRounded`)),1)]),l(`div`,F,[l(`div`,I,[(n(),p(c,null,i(o,e=>m(b,{key:`or-${e}`,variant:e,outline:``,rounded:``},{default:h(()=>[s(a(X(e)),1)]),_:2},1032,[`variant`])),64))]),l(`pre`,L,[l(`code`,null,a(y.outlineRounded),1)])])],512),l(`section`,{id:`soft`,ref:e=>Y(`soft`,e),class:`showcase-card`},[l(`header`,R,[t[16]||=l(`h6`,{class:`mb-0`},`Soft Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[4]||=e=>Q(`soft`)},a(Z(`soft`)),1)]),l(`div`,z,[l(`div`,B,[(n(),p(c,null,i(o,e=>m(b,{key:`s-${e}`,variant:e,soft:``},{default:h(()=>[s(a(X(e)),1)]),_:2},1032,[`variant`])),64))]),l(`pre`,V,[l(`code`,null,a(y.soft),1)])])],512),l(`section`,{id:`soft-rounded`,ref:e=>Y(`soft-rounded`,e),class:`showcase-card`},[l(`header`,H,[t[17]||=l(`h6`,{class:`mb-0`},`Soft Rounded Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[5]||=e=>Q(`softRounded`)},a(Z(`softRounded`)),1)]),l(`div`,U,[l(`div`,W,[(n(),p(c,null,i(o,e=>m(b,{key:`sr-${e}`,variant:e,soft:``,rounded:``},{default:h(()=>[s(a(X(e)),1)]),_:2},1032,[`variant`])),64))]),l(`pre`,G,[l(`code`,null,a(y.softRounded),1)])])],512),l(`section`,{id:`width`,ref:e=>Y(`width`,e),class:`showcase-card`},[l(`header`,K,[t[18]||=l(`h6`,{class:`mb-0`},`Buttons Width`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[6]||=e=>Q(`width`)},a(Z(`width`)),1)]),l(`div`,q,[l(`div`,se,[m(b,{variant:`primary`,width:`xs`},{default:h(()=>[...t[19]||=[s(`Width xs`,-1)]]),_:1}),m(b,{variant:`secondary`,width:`sm`},{default:h(()=>[...t[20]||=[s(`Width sm`,-1)]]),_:1}),m(b,{variant:`success`,width:`md`},{default:h(()=>[...t[21]||=[s(`Width md`,-1)]]),_:1}),m(b,{variant:`info`,width:`lg`},{default:h(()=>[...t[22]||=[s(`Width lg`,-1)]]),_:1}),m(b,{variant:`warning`,width:`xl`},{default:h(()=>[...t[23]||=[s(`Width xl`,-1)]]),_:1})]),l(`pre`,ce,[l(`code`,null,a(y.width),1)])])],512),l(`section`,{id:`sizes`,ref:e=>Y(`sizes`,e),class:`showcase-card`},[l(`header`,le,[t[24]||=l(`h6`,{class:`mb-0`},`Buttons Sizes`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[7]||=e=>Q(`sizes`)},a(Z(`sizes`)),1)]),l(`div`,ue,[l(`div`,de,[m(b,{variant:`success`,size:`sm`},{default:h(()=>[...t[25]||=[s(`Small`,-1)]]),_:1}),m(b,{variant:`primary`,size:`md`},{default:h(()=>[...t[26]||=[s(`Medium`,-1)]]),_:1}),m(b,{variant:`danger`,size:`lg`},{default:h(()=>[...t[27]||=[s(`Large`,-1)]]),_:1})]),l(`pre`,fe,[l(`code`,null,a(y.sizes),1)])])],512),l(`section`,{id:`disabled`,ref:e=>Y(`disabled`,e),class:`showcase-card`},[l(`header`,pe,[t[28]||=l(`h6`,{class:`mb-0`},`Disabled Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[8]||=e=>Q(`disabled`)},a(Z(`disabled`)),1)]),l(`div`,me,[l(`div`,he,[m(b,{variant:`primary`,disabled:``},{default:h(()=>[...t[29]||=[s(`Primary`,-1)]]),_:1}),m(b,{variant:`secondary`,disabled:``},{default:h(()=>[...t[30]||=[s(`Secondary`,-1)]]),_:1}),m(b,{variant:`success`,disabled:``},{default:h(()=>[...t[31]||=[s(`Success`,-1)]]),_:1}),m(b,{variant:`info`,disabled:``},{default:h(()=>[...t[32]||=[s(`Info`,-1)]]),_:1}),m(b,{variant:`warning`,disabled:``},{default:h(()=>[...t[33]||=[s(`Warning`,-1)]]),_:1})]),l(`pre`,ge,[l(`code`,null,a(y.disabled),1)])])],512),l(`section`,{id:`icons`,ref:e=>Y(`icons`,e),class:`showcase-card`},[l(`header`,_e,[t[34]||=l(`h6`,{class:`mb-0`},`Icon Left Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[9]||=e=>Q(`icons`)},a(Z(`icons`)),1)]),l(`div`,ve,[t[35]||=ne(`<div class="btn-row d-flex flex-wrap gap-2" data-v-83727b27><button type="button" class="btn btn-primary" data-v-83727b27><i class="bx bx-heart" data-v-83727b27></i></button><button type="button" class="btn btn-secondary" data-v-83727b27><i class="bx bx-user-voice" data-v-83727b27></i></button><button type="button" class="btn btn-success" data-v-83727b27><i class="bx bx-check-double" data-v-83727b27></i></button><button type="button" class="btn btn-info" data-v-83727b27><i class="bx bx-cloud me-1" data-v-83727b27></i>Cloud Hosting </button><button type="button" class="btn btn-warning" data-v-83727b27><i class="bx bx-info-circle me-1" data-v-83727b27></i>Warning </button></div>`,1),l(`pre`,ye,[l(`code`,null,a(y.icons),1)])])],512),l(`section`,{id:`groups`,ref:e=>Y(`groups`,e),class:`showcase-card`},[l(`header`,be,[t[36]||=l(`h6`,{class:`mb-0`},`Button Groups`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[10]||=e=>Q(`groups`)},a(Z(`groups`)),1)]),l(`div`,xe,[t[37]||=l(`div`,{class:`d-flex flex-wrap gap-2 mb-3`},[l(`div`,{class:`btn-group mb-1 me-1`,role:`group`,"aria-label":`Horizontal group 1`},[l(`button`,{type:`button`,class:`btn btn-light`},`Left`),l(`button`,{type:`button`,class:`btn btn-light`},`Middle`),l(`button`,{type:`button`,class:`btn btn-light`},`Right`)]),l(`div`,{class:`btn-group mb-1 me-1`,role:`group`,"aria-label":`Horizontal group 2`},[l(`button`,{type:`button`,class:`btn btn-light`},`1`),l(`button`,{type:`button`,class:`btn btn-light`},`2`),l(`button`,{type:`button`,class:`btn btn-secondary`},`3`),l(`button`,{type:`button`,class:`btn btn-light`},`4`)]),l(`div`,{class:`btn-group mb-1 me-1`,role:`group`,"aria-label":`Horizontal group 3`},[l(`button`,{type:`button`,class:`btn btn-light`},`5`),l(`button`,{type:`button`,class:`btn btn-secondary`},`6`),l(`button`,{type:`button`,class:`btn btn-light`},`7`),l(`button`,{id:`dropdown`,type:`button`,class:`btn btn-light dropdown-toggle`,"data-bs-toggle":`dropdown`,"aria-expanded":`false`},` Dropdown `),l(`ul`,{class:`dropdown-menu dropdown-menu-end`,"aria-labelledby":`dropdown`},[l(`li`,null,[l(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)]),l(`li`,null,[l(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)])])]),l(`div`,{class:`d-flex gap-3`},[l(`div`,{class:`btn-group-vertical me-4`,role:`group`,"aria-label":`Vertical group 1`},[l(`button`,{type:`button`,class:`btn btn-light`},`Top`),l(`button`,{type:`button`,class:`btn btn-light`},`Middle`),l(`button`,{type:`button`,class:`btn btn-light`},`Bottom`)]),l(`div`,{class:`btn-group-vertical`,role:`group`,"aria-label":`Vertical group 2`},[l(`button`,{type:`button`,class:`btn btn-light`},`Button 1`),l(`button`,{type:`button`,class:`btn btn-light`},`Button 2`),l(`button`,{id:`verticalDropdown`,type:`button`,class:`btn btn-light dropdown-toggle`,"data-bs-toggle":`dropdown`,"aria-expanded":`false`},` Button 3 `),l(`ul`,{class:`dropdown-menu dropdown-menu-end`,"aria-labelledby":`verticalDropdown`},[l(`li`,null,[l(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)]),l(`li`,null,[l(`a`,{class:`dropdown-item`,href:`javascript:void(0);`},`Dropdown link`)])])])])],-1),l(`pre`,Se,[l(`code`,null,a(y.groups),1)])])],512),l(`section`,{id:`blocks`,ref:e=>Y(`blocks`,e),class:`showcase-card`},[l(`header`,Ce,[t[38]||=l(`h6`,{class:`mb-0`},`Block Buttons`,-1),l(`button`,{class:`btn btn-copy btn-sm`,onClick:t[11]||=e=>Q(`blocks`)},a(Z(`blocks`)),1)]),l(`div`,we,[l(`div`,Te,[m(b,{variant:`danger`},{default:h(()=>[...t[39]||=[s(`Block Button`,-1)]]),_:1}),m(b,{variant:`secondary`},{default:h(()=>[...t[40]||=[s(`Block Button`,-1)]]),_:1}),m(b,{variant:`light`},{default:h(()=>[...t[41]||=[s(`Block Button`,-1)]]),_:1})]),l(`pre`,J,[l(`code`,null,a(y.blocks),1)])])],512)]),l(`div`,Ee,[l(`aside`,De,[l(`ul`,Oe,[(n(),p(c,null,i(v,e=>l(`li`,{key:e.id},[l(`button`,{class:d([`toc-link`,{active:f.value===e.id}]),onClick:t=>Ae(e.id)},a(e.label),11,ke)])),64))])])])]),m(ie)]))}},[[`__scopeId`,`data-v-83727b27`]]);export{Y as default};