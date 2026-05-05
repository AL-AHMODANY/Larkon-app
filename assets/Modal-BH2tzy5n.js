import{H as e,M as t,P as n,Y as r,_ as i,b as a,d as o,f as s,h as c,j as l,k as ee,m as u,n as d,q as f,t as te,v as p,x as m,z as h}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as ne,t as re}from"./Footer-Ck9cRuzL.js";var ie={class:`modal-page`},ae={class:`page-layout`},oe={class:`page-content`},se={class:`demo-section`,id:`default-example`},ce={class:`code-block`},le={class:`code-header`},ue={class:`code-pre`},de={class:`demo-section`,id:`static-backdrop`},fe={class:`code-block`},pe={class:`code-header`},me={class:`code-pre`},he={class:`demo-section`,id:`scrolling-long-content`},g={class:`code-block`},_={class:`code-header`},v={class:`code-pre`},y={class:`code-block`},b={class:`code-header`},x={class:`code-pre`},S={class:`demo-section`,id:`toggle-modals`},C={class:`btn-row`},w={class:`code-block`},T={class:`code-header`},E={class:`code-pre`},D={class:`btn-row`},O={class:`code-block`},k={class:`code-header`},A={class:`code-pre`},j={class:`demo-section`,id:`optional-sizes`},M={class:`code-block`},N={class:`code-header`},P={class:`code-pre`},F={class:`demo-section`,id:`fullscreen-modal`},I={class:`btn-row flex-wrap`},L={class:`code-block`},R={class:`code-header`},ge={class:`code-pre`},_e={class:`demo-section`,id:`modal-based-alerts`},z={class:`btn-row flex-wrap`},ve={class:`code-block`},ye={class:`code-header`},be={class:`code-pre`},xe={class:`demo-section`,id:`custom-alerts`},Se={class:`btn-row flex-wrap`},Ce={class:`code-block`},we={class:`code-header`},Te={class:`code-pre`},Ee={class:`toc-sidebar`},De={class:`toc-nav`},Oe=[`href`,`onClick`],ke={class:`modal-content`},Ae={class:`modal-title`},je={key:0,class:`alert-modal-body`},Me={class:`alert-modal-title`},Ne={class:`alert-modal-msg`},Pe={key:1},Fe={key:0,class:`modal-footer`},Ie={key:1,class:`modal-footer`},B=te({__name:`Modal`,setup(te){let B=e(null),V=e(null),H=e(`default-example`),U=[{id:`default-example`,label:`Default Example`},{id:`static-backdrop`,label:`Static Backdrop`},{id:`scrolling-long-content`,label:`Scrolling Long Content`},{id:`toggle-modals`,label:`Toggle between Modals`},{id:`optional-sizes`,label:`Optional Sizes`},{id:`fullscreen-modal`,label:`Fullscreen Modal`},{id:`modal-based-alerts`,label:`Modal Based Alerts`},{id:`custom-alerts`,label:`Custom Modal Alerts`}],W=[`Woohoo, you're reading this text in a modal! This is just a demo of how modals work. Click the close button to dismiss this modal.`],G=Array(12).fill(`Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.`),Le={default:{title:`Modal title`,bodyParagraphs:W},static:{title:`Modal title`,bodyParagraphs:W,staticBackdrop:!0},scrolling:{title:`Modal title`,bodyParagraphs:G,scrollPage:!0},scrollable:{title:`Modal title`,bodyParagraphs:G,scrollableBody:!0},centered:{title:`Modal title`,bodyParagraphs:W,centered:!0},centeredScrollable:{title:`Modal title`,bodyParagraphs:G,centered:!0,scrollableBody:!0},top:{title:`Top Modal`,bodyParagraphs:W,position:`top`},bottom:{title:`Bottom Modal`,bodyParagraphs:W,position:`bottom`},toggle1:{title:`First Modal`,bodyParagraphs:[`Open the second modal using the button below.`],nextModal:`toggle2`,nextLabel:`Open second modal`},toggle2:{title:`Second Modal`,bodyParagraphs:[`Hide this modal and show the first with the button below.`],nextModal:`toggle1`,nextLabel:`Back to first`},xlarge:{title:`Extra large modal`,bodyParagraphs:W,size:`xl`},large:{title:`Large modal`,bodyParagraphs:W,size:`lg`},small:{title:`Small modal`,bodyParagraphs:W,size:`sm`},fullscreen:{title:`Full screen modal`,bodyParagraphs:G,fullscreen:!0},fullscreenSm:{title:`Full screen below sm`,bodyParagraphs:W,fullscreen:`sm`},fullscreenMd:{title:`Full screen below md`,bodyParagraphs:W,fullscreen:`md`},fullscreenLg:{title:`Full screen below lg`,bodyParagraphs:W,fullscreen:`lg`},fullscreenXl:{title:`Full screen below xl`,bodyParagraphs:W,fullscreen:`xl`},fullscreenXxl:{title:`Full screen below xxl`,bodyParagraphs:W,fullscreen:`xxl`},alertPrimary:{title:`Primary Alert`,alertType:`primary`,alertTitle:`Are you sure?`,body:`This action cannot be undone. Please confirm to proceed.`,hideFooter:!0},alertSecondary:{title:`Secondary Alert`,alertType:`secondary`,alertTitle:`Please note`,body:`This is a secondary alert message with important information.`,hideFooter:!0},alertSuccess:{title:`Success Alert`,alertType:`success`,alertTitle:`Great job!`,body:`Your action was completed successfully. Everything is in order.`,hideFooter:!0},alertDanger:{title:`Info Alert`,alertType:`danger`,alertTitle:`Heads up!`,body:`Something requires your attention. Please review before continuing.`,hideFooter:!0}},K=u(()=>Le[B.value]||{}),Re=u(()=>{let e=K.value,t=[];return e.position===`top`&&t.push(`modal-pos-top`),e.position===`bottom`&&t.push(`modal-pos-bottom`),t}),ze=u(()=>{let e=K.value,t=[];return e.centered&&t.push(`modal-centered`),e.scrollableBody&&t.push(`modal-dialog-scrollable`),e.size===`xl`&&t.push(`modal-xl`),e.size===`lg`&&t.push(`modal-lg`),e.size===`sm`&&t.push(`modal-sm`),e.fullscreen===!0&&t.push(`modal-fullscreen`),e.fullscreen===`sm`&&t.push(`modal-fullscreen-sm`),e.fullscreen===`md`&&t.push(`modal-fullscreen-md`),e.fullscreen===`lg`&&t.push(`modal-fullscreen-lg`),e.fullscreen===`xl`&&t.push(`modal-fullscreen-xl`),e.fullscreen===`xxl`&&t.push(`modal-fullscreen-xxl`),t}),Be=u(()=>{let e=K.value.alertType;return e?`modal-header--${e}`:``}),q=e=>{B.value=e},J=()=>{B.value=null},Y=()=>{if(K.value.staticBackdrop){let e=document.querySelector(`.modal-dialog`);e&&(e.classList.add(`modal-shake`),setTimeout(()=>e.classList.remove(`modal-shake`),400));return}J()},X=e=>{navigator.clipboard.writeText($[e]||``).then(()=>{V.value=e,setTimeout(()=>{V.value=null},2e3)})},Ve=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`}),H.value=e},Z=()=>{for(let e of[...U].reverse()){let t=document.getElementById(e.id);if(t&&t.getBoundingClientRect().top<=120){H.value=e.id;break}}},Q=e=>{e.key===`Escape`&&J()};ee(()=>{window.addEventListener(`scroll`,Z,{passive:!0}),window.addEventListener(`keydown`,Q)}),l(()=>{window.removeEventListener(`scroll`,Z),window.removeEventListener(`keydown`,Q)});let $={default:`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,static:`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>`,scrolling:`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>`,scrollable:`<!-- Modal with scrollable body -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">...</div>
  </div>
</div>`,centered:`<!-- Vertically centered modal -->
<div class="modal fade" id="exampleModalCentered" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">...</div>
  </div>
</div>

<!-- Vertically centered scrollable modal -->
<div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">...</div>
  </div>
</div>`,topbottom:`<!-- Top Modal -->
<div class="modal fade modal-top" id="topModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>

<!-- Bottom Modal -->
<div class="modal fade modal-bottom" id="bottomModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>`,toggle:`<!-- First Modal trigger -->
<a class="btn btn-primary" data-bs-toggle="modal" href="#firstModal">Open first modal</a>

<!-- First Modal -->
<div class="modal fade" id="firstModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">First Modal</h5>
      </div>
      <div class="modal-body">
        <div id="exampleModalToggle" aria-hidden="true" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,sizes:`<!-- Extra large modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">Extra large modal</button>
<!-- Large modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">Large modal</button>
<!-- Small modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#smallModal">Small modal</button>

<div class="modal-dialog modal-xl">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-sm">...</div>`,fullscreen:`<!-- Always fullscreen -->
<div class="modal-dialog modal-fullscreen">...</div>
<!-- Fullscreen below sm -->
<div class="modal-dialog modal-fullscreen-sm-down">...</div>
<!-- Fullscreen below md -->
<div class="modal-dialog modal-fullscreen-md-down">...</div>
<!-- Fullscreen below lg -->
<div class="modal-dialog modal-fullscreen-lg-down">...</div>
<!-- Fullscreen below xl -->
<div class="modal-dialog modal-fullscreen-xl-down">...</div>
<!-- Fullscreen below xxl -->
<div class="modal-dialog modal-fullscreen-xxl-down">...</div>`,alerts:`<!-- Primary Alert Modal -->
<div class="modal fade" id="primaryAlertModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header modal-colored-header bg-primary">
        <h5 class="modal-title text-white">Primary Alert Modal Header</h5>
      </div>
      <div class="modal-body text-center p-4">...</div>
    </div>
  </div>
</div>`};return(e,l)=>(t(),p(`div`,ie,[m(ne),l[63]||=c(`div`,{class:`page-header`},[c(`h1`,{class:`page-title`},`MODAL`)],-1),c(`div`,ae,[c(`div`,oe,[c(`section`,se,[l[34]||=c(`h2`,{class:`section-title`},`Default Models`,-1),l[35]||=c(`p`,{class:`section-desc`},` Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page. `,-1),c(`button`,{class:`btn btn-primary`,onClick:l[0]||=e=>q(`default`)},`Launch demo modal`),c(`div`,ce,[c(`div`,le,[l[33]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[1]||=e=>X(`default`)},r(V.value===`default`?`Copied!`:`Copy`),1)]),c(`pre`,ue,[c(`code`,null,r($.default),1)])])]),c(`section`,de,[l[37]||=c(`h2`,{class:`section-title`},`Static Backdrop`,-1),l[38]||=c(`p`,{class:`section-desc`},` When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it. `,-1),c(`button`,{class:`btn btn-primary`,onClick:l[2]||=e=>q(`static`)},`Launch static backdrop modal`),c(`div`,fe,[c(`div`,pe,[l[36]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[3]||=e=>X(`static`)},r(V.value===`static`?`Copied!`:`Free`),1)]),c(`pre`,me,[c(`code`,null,r($.static),1)])])]),c(`section`,he,[l[41]||=c(`h2`,{class:`section-title`},`Scrolling Long Content`,-1),l[42]||=c(`p`,{class:`section-desc`},` When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean. `,-1),c(`button`,{class:`btn btn-primary`,onClick:l[4]||=e=>q(`scrolling`)},`Launch demo modal`),c(`div`,g,[c(`div`,_,[l[39]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[5]||=e=>X(`scrolling`)},r(V.value===`scrolling`?`Copied!`:`Copy`),1)]),c(`pre`,v,[c(`code`,null,r($.scrolling),1)])]),l[43]||=c(`p`,{class:`section-desc mt-3`},[a(` You can also create a scrollable modal that allows scroll the modal body by adding `),c(`code`,{class:`inline-code`},`modal-dialog-scrollable`),a(` to `),c(`code`,{class:`inline-code`},`.modal-dialog`),a(`. `)],-1),c(`button`,{class:`btn btn-primary`,onClick:l[6]||=e=>q(`scrollable`)},`Launch demo modal`),c(`div`,y,[c(`div`,b,[l[40]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[7]||=e=>X(`scrollable`)},r(V.value===`scrollable`?`Copied!`:`Copy`),1)]),c(`pre`,x,[c(`code`,null,r($.scrollable),1)])])]),c(`section`,S,[l[46]||=c(`h2`,{class:`section-title`},`Modal Position`,-1),l[47]||=c(`p`,{class:`section-desc`},[a(` Add `),c(`code`,{class:`inline-code`},`.modal-dialog-centered`),a(` to `),c(`code`,{class:`inline-code`},`.modal-dialog`),a(` to vertically center the modal. `)],-1),c(`div`,C,[c(`button`,{class:`btn btn-primary`,onClick:l[8]||=e=>q(`centered`)},`Vertically centered modal`),c(`button`,{class:`btn btn-secondary`,onClick:l[9]||=e=>q(`centeredScrollable`)},`Vertically centered scrollable modal`)]),c(`div`,w,[c(`div`,T,[l[44]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[10]||=e=>X(`centered`)},r(V.value===`centered`?`Copied!`:`Free`),1)]),c(`pre`,E,[c(`code`,null,r($.centered),1)])]),l[48]||=c(`p`,{class:`section-desc mt-3`},[a(` Specify the position for the modal. You can display modal at top /bottom of page by specifying classes `),c(`code`,{class:`inline-code`},`modal-top`),a(` and `),c(`code`,{class:`inline-code`},`modal-bottom`),a(` respectively. `)],-1),c(`div`,D,[c(`button`,{class:`btn btn-success`,onClick:l[11]||=e=>q(`top`)},`Top Modal`),c(`button`,{class:`btn btn-danger`,onClick:l[12]||=e=>q(`bottom`)},`Bottom Modal`)]),c(`div`,O,[c(`div`,k,[l[45]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[13]||=e=>X(`topbottom`)},r(V.value===`topbottom`?`Copied!`:`Copy`),1)]),c(`pre`,A,[c(`code`,null,r($.topbottom),1)])])]),c(`section`,j,[l[50]||=c(`h2`,{class:`section-title`},`Toggle Between Modals`,-1),l[51]||=c(`p`,{class:`section-desc`},[a(` Toggle between multiple modals with some clever placement of the `),c(`code`,{class:`inline-code`},`data-bs-target`),a(` and `),c(`code`,{class:`inline-code`},`data-bs-toggle`),a(` attributes. For example, you could toggle a password reset modal form within an already open sign in modal. `),c(`strong`,null,`Please note multiple modals cannot be open at the same time`),a(` — this method simply toggles between two separate modals. `)],-1),c(`button`,{class:`btn btn-primary`,onClick:l[14]||=e=>q(`toggle1`)},`Open first modal`),c(`div`,M,[c(`div`,N,[l[49]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[15]||=e=>X(`toggle`)},r(V.value===`toggle`?`Copied!`:`Copy`),1)]),c(`pre`,P,[c(`code`,null,r($.toggle),1)])])]),c(`section`,F,[l[53]||=c(`h2`,{class:`section-title`},`Optional Sizes`,-1),l[54]||=c(`p`,{class:`section-desc`},[a(` Modals have three optional sizes, available via modifier classes to be placed on a `),c(`code`,{class:`inline-code`},`.modal-dialog`),a(`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. `)],-1),c(`div`,I,[c(`button`,{class:`btn btn-primary`,onClick:l[16]||=e=>q(`xlarge`)},`Extra large modal`),c(`button`,{class:`btn btn-primary`,onClick:l[17]||=e=>q(`large`)},`Large modal`),c(`button`,{class:`btn btn-primary`,onClick:l[18]||=e=>q(`small`)},`Small modal`)]),c(`div`,L,[c(`div`,R,[l[52]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[19]||=e=>X(`sizes`)},r(V.value===`sizes`?`Copied!`:`Copy`),1)]),c(`pre`,ge,[c(`code`,null,r($.sizes),1)])])]),c(`section`,_e,[l[56]||=c(`h2`,{class:`section-title`},`Fullscreen Modal`,-1),l[57]||=c(`p`,{class:`section-desc`},[a(` Another override is the option to pop up a modal that covers the user viewport, available via modifier classes to be placed on a `),c(`code`,{class:`inline-code`},`.modal-dialog`),a(`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. `)],-1),c(`div`,z,[c(`button`,{class:`btn btn-primary`,onClick:l[20]||=e=>q(`fullscreen`)},`Full screen`),c(`button`,{class:`btn btn-primary`,onClick:l[21]||=e=>q(`fullscreenSm`)},`Full screen below sm`),c(`button`,{class:`btn btn-primary`,onClick:l[22]||=e=>q(`fullscreenMd`)},`Full screen below md`),c(`button`,{class:`btn btn-primary`,onClick:l[23]||=e=>q(`fullscreenLg`)},`Full screen below lg`),c(`button`,{class:`btn btn-primary`,onClick:l[24]||=e=>q(`fullscreenXl`)},`Full screen below xl`),c(`button`,{class:`btn btn-primary`,onClick:l[25]||=e=>q(`fullscreenXxl`)},`Full screen below xxl`)]),c(`div`,ve,[c(`div`,ye,[l[55]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[26]||=e=>X(`fullscreen`)},r(V.value===`fullscreen`?`Copied!`:`Copy`),1)]),c(`pre`,be,[c(`code`,null,r($.fullscreen),1)])])]),c(`section`,xe,[l[59]||=c(`h2`,{class:`section-title`},`Modal Based Alerts`,-1),l[60]||=c(`p`,{class:`section-desc`},[a(` Modal alerts are customized alert modals available via modifier classes to be placed on a `),c(`code`,{class:`inline-code`},`.modal-dialog`),a(`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. `)],-1),c(`div`,Se,[c(`button`,{class:`btn btn-primary`,onClick:l[27]||=e=>q(`alertPrimary`)},`Primary Alert`),c(`button`,{class:`btn btn-secondary`,onClick:l[28]||=e=>q(`alertSecondary`)},`Secondary Alert`),c(`button`,{class:`btn btn-success`,onClick:l[29]||=e=>q(`alertSuccess`)},`Success Alert`),c(`button`,{class:`btn btn-danger`,onClick:l[30]||=e=>q(`alertDanger`)},`Info Alert`)]),c(`div`,Ce,[c(`div`,we,[l[58]||=c(`span`,{class:`code-label`},`HTML`,-1),c(`button`,{class:`code-copy`,onClick:l[31]||=e=>X(`alerts`)},r(V.value===`alerts`?`Copied!`:`Copy`),1)]),c(`pre`,Te,[c(`code`,null,r($.alerts),1)])])])]),c(`aside`,Ee,[c(`nav`,De,[(t(),p(s,null,n(U,e=>c(`a`,{key:e.id,href:`#${e.id}`,class:f([`toc-link`,{active:H.value===e.id}]),onClick:o(t=>Ve(e.id),[`prevent`])},r(e.label),11,Oe)),64))])])]),m(d,{name:`backdrop-fade`},{default:h(()=>[B.value?(t(),p(`div`,{key:0,class:`modal-backdrop`,onClick:Y})):i(``,!0)]),_:1}),m(d,{name:`modal-anim`},{default:h(()=>[B.value?(t(),p(`div`,{key:0,class:f([`modal-shell`,Re.value]),onClick:o(Y,[`self`])},[c(`div`,{class:f([`modal-dialog`,ze.value])},[c(`div`,ke,[c(`div`,{class:f([`modal-header`,Be.value])},[c(`h5`,Ae,r(K.value.title),1),c(`button`,{class:`modal-x`,onClick:J,"aria-label":`Close`},[...l[61]||=[c(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.5`},[c(`path`,{d:`M18 6L6 18M6 6l12 12`})],-1)]])],2),c(`div`,{class:f([`modal-body`,{"modal-body-scroll":K.value.scrollableBody}])},[K.value.alertType?(t(),p(`div`,je,[c(`div`,{class:f([`alert-icon`,`alert-icon--${K.value.alertType}`])},[...l[62]||=[c(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[c(`circle`,{cx:`12`,cy:`12`,r:`10`}),c(`path`,{d:`M12 8v4m0 4h.01`})],-1)]],2),c(`h4`,Me,r(K.value.alertTitle),1),c(`p`,Ne,r(K.value.body),1)])):(t(),p(`div`,Pe,[(t(!0),p(s,null,n(K.value.bodyParagraphs,(e,n)=>(t(),p(`p`,{key:n},r(e),1))),128))]))],2),K.value.hideFooter?K.value.alertType?(t(),p(`div`,Ie,[c(`button`,{class:`btn btn-light`,onClick:J},`Cancel`),c(`button`,{class:f([`btn`,`btn-${K.value.alertType}`]),onClick:J},`Confirm`,2)])):i(``,!0):(t(),p(`div`,Fe,[K.value.nextModal?(t(),p(`button`,{key:0,class:`btn btn-link`,onClick:l[32]||=e=>q(K.value.nextModal)},r(K.value.nextLabel||`Open another modal`),1)):i(``,!0),c(`button`,{class:`btn btn-light`,onClick:J},`Close`),c(`button`,{class:`btn btn-primary`,onClick:J},`Save changes`)]))])],2)],2)):i(``,!0)]),_:1}),m(re)]))}},[[`__scopeId`,`data-v-b3439e20`]]);export{B as default};