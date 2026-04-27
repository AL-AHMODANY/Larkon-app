import{A as e,E as t,O as n,R as r,V as i,c as a,d as o,dt as s,h as c,i as l,m as u,pt as d,s as f,t as ee,u as p,w as te}from"./_plugin-vue_export-helper-Ct9996Xc.js";import{a as m,t as h}from"./index-D_mp5A_a.js";var ne={class:`modal-page`},re={class:`page-layout`},ie={class:`page-content`},ae={class:`demo-section`,id:`default-example`},oe={class:`code-block`},se={class:`code-header`},ce={class:`code-pre`},le={class:`demo-section`,id:`static-backdrop`},ue={class:`code-block`},de={class:`code-header`},fe={class:`code-pre`},pe={class:`demo-section`,id:`scrolling-long-content`},me={class:`code-block`},he={class:`code-header`},g={class:`code-pre`},_={class:`code-block`},v={class:`code-header`},y={class:`code-pre`},b={class:`demo-section`,id:`toggle-modals`},x={class:`btn-row`},S={class:`code-block`},C={class:`code-header`},w={class:`code-pre`},T={class:`btn-row`},E={class:`code-block`},D={class:`code-header`},O={class:`code-pre`},k={class:`demo-section`,id:`optional-sizes`},A={class:`code-block`},j={class:`code-header`},M={class:`code-pre`},N={class:`demo-section`,id:`fullscreen-modal`},P={class:`btn-row flex-wrap`},F={class:`code-block`},I={class:`code-header`},L={class:`code-pre`},R={class:`demo-section`,id:`modal-based-alerts`},ge={class:`btn-row flex-wrap`},_e={class:`code-block`},ve={class:`code-header`},ye={class:`code-pre`},be={class:`demo-section`,id:`custom-alerts`},xe={class:`btn-row flex-wrap`},Se={class:`code-block`},Ce={class:`code-header`},we={class:`code-pre`},Te={class:`toc-sidebar`},Ee={class:`toc-nav`},De=[`href`,`onClick`],Oe={class:`modal-content`},ke={class:`modal-title`},Ae={key:0,class:`alert-modal-body`},je={class:`alert-modal-title`},Me={class:`alert-modal-msg`},Ne={key:1},Pe={key:0,class:`modal-footer`},Fe={key:1,class:`modal-footer`},z=ee({__name:`Modal`,setup(ee){let z=i(null),B=i(null),V=i(`default-example`),H=[{id:`default-example`,label:`Default Example`},{id:`static-backdrop`,label:`Static Backdrop`},{id:`scrolling-long-content`,label:`Scrolling Long Content`},{id:`toggle-modals`,label:`Toggle between Modals`},{id:`optional-sizes`,label:`Optional Sizes`},{id:`fullscreen-modal`,label:`Fullscreen Modal`},{id:`modal-based-alerts`,label:`Modal Based Alerts`},{id:`custom-alerts`,label:`Custom Modal Alerts`}],U=[`Woohoo, you're reading this text in a modal! This is just a demo of how modals work. Click the close button to dismiss this modal.`],W=Array(12).fill(`Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.`),Ie={default:{title:`Modal title`,bodyParagraphs:U},static:{title:`Modal title`,bodyParagraphs:U,staticBackdrop:!0},scrolling:{title:`Modal title`,bodyParagraphs:W,scrollPage:!0},scrollable:{title:`Modal title`,bodyParagraphs:W,scrollableBody:!0},centered:{title:`Modal title`,bodyParagraphs:U,centered:!0},centeredScrollable:{title:`Modal title`,bodyParagraphs:W,centered:!0,scrollableBody:!0},top:{title:`Top Modal`,bodyParagraphs:U,position:`top`},bottom:{title:`Bottom Modal`,bodyParagraphs:U,position:`bottom`},toggle1:{title:`First Modal`,bodyParagraphs:[`Open the second modal using the button below.`],nextModal:`toggle2`,nextLabel:`Open second modal`},toggle2:{title:`Second Modal`,bodyParagraphs:[`Hide this modal and show the first with the button below.`],nextModal:`toggle1`,nextLabel:`Back to first`},xlarge:{title:`Extra large modal`,bodyParagraphs:U,size:`xl`},large:{title:`Large modal`,bodyParagraphs:U,size:`lg`},small:{title:`Small modal`,bodyParagraphs:U,size:`sm`},fullscreen:{title:`Full screen modal`,bodyParagraphs:W,fullscreen:!0},fullscreenSm:{title:`Full screen below sm`,bodyParagraphs:U,fullscreen:`sm`},fullscreenMd:{title:`Full screen below md`,bodyParagraphs:U,fullscreen:`md`},fullscreenLg:{title:`Full screen below lg`,bodyParagraphs:U,fullscreen:`lg`},fullscreenXl:{title:`Full screen below xl`,bodyParagraphs:U,fullscreen:`xl`},fullscreenXxl:{title:`Full screen below xxl`,bodyParagraphs:U,fullscreen:`xxl`},alertPrimary:{title:`Primary Alert`,alertType:`primary`,alertTitle:`Are you sure?`,body:`This action cannot be undone. Please confirm to proceed.`,hideFooter:!0},alertSecondary:{title:`Secondary Alert`,alertType:`secondary`,alertTitle:`Please note`,body:`This is a secondary alert message with important information.`,hideFooter:!0},alertSuccess:{title:`Success Alert`,alertType:`success`,alertTitle:`Great job!`,body:`Your action was completed successfully. Everything is in order.`,hideFooter:!0},alertDanger:{title:`Info Alert`,alertType:`danger`,alertTitle:`Heads up!`,body:`Something requires your attention. Please review before continuing.`,hideFooter:!0}},G=f(()=>Ie[z.value]||{}),Le=f(()=>{let e=G.value,t=[];return e.position===`top`&&t.push(`modal-pos-top`),e.position===`bottom`&&t.push(`modal-pos-bottom`),t}),K=f(()=>{let e=G.value,t=[];return e.centered&&t.push(`modal-centered`),e.scrollableBody&&t.push(`modal-dialog-scrollable`),e.size===`xl`&&t.push(`modal-xl`),e.size===`lg`&&t.push(`modal-lg`),e.size===`sm`&&t.push(`modal-sm`),e.fullscreen===!0&&t.push(`modal-fullscreen`),e.fullscreen===`sm`&&t.push(`modal-fullscreen-sm`),e.fullscreen===`md`&&t.push(`modal-fullscreen-md`),e.fullscreen===`lg`&&t.push(`modal-fullscreen-lg`),e.fullscreen===`xl`&&t.push(`modal-fullscreen-xl`),e.fullscreen===`xxl`&&t.push(`modal-fullscreen-xxl`),t}),Re=f(()=>{let e=G.value.alertType;return e?`modal-header--${e}`:``}),q=e=>{z.value=e},J=()=>{z.value=null},Y=()=>{if(G.value.staticBackdrop){let e=document.querySelector(`.modal-dialog`);e&&(e.classList.add(`modal-shake`),setTimeout(()=>e.classList.remove(`modal-shake`),400));return}J()},X=e=>{navigator.clipboard.writeText($[e]||``).then(()=>{B.value=e,setTimeout(()=>{B.value=null},2e3)})},ze=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`}),V.value=e},Z=()=>{for(let e of[...H].reverse()){let t=document.getElementById(e.id);if(t&&t.getBoundingClientRect().top<=120){V.value=e.id;break}}},Q=e=>{e.key===`Escape`&&J()};te(()=>{window.addEventListener(`scroll`,Z,{passive:!0}),window.addEventListener(`keydown`,Q)}),t(()=>{window.removeEventListener(`scroll`,Z),window.removeEventListener(`keydown`,Q)});let $={default:`<!-- Button trigger modal -->
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
</div>`};return(t,i)=>(n(),o(`div`,ne,[i[63]||=a(`div`,{class:`page-header`},[a(`h1`,{class:`page-title`},`MODAL`)],-1),a(`div`,re,[a(`div`,ie,[a(`section`,ae,[i[34]||=a(`h2`,{class:`section-title`},`Default Models`,-1),i[35]||=a(`p`,{class:`section-desc`},` Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page. `,-1),a(`button`,{class:`btn btn-primary`,onClick:i[0]||=e=>q(`default`)},`Launch demo modal`),a(`div`,oe,[a(`div`,se,[i[33]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[1]||=e=>X(`default`)},d(B.value===`default`?`Copied!`:`Copy`),1)]),a(`pre`,ce,[a(`code`,null,d($.default),1)])])]),a(`section`,le,[i[37]||=a(`h2`,{class:`section-title`},`Static Backdrop`,-1),i[38]||=a(`p`,{class:`section-desc`},` When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it. `,-1),a(`button`,{class:`btn btn-primary`,onClick:i[2]||=e=>q(`static`)},`Launch static backdrop modal`),a(`div`,ue,[a(`div`,de,[i[36]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[3]||=e=>X(`static`)},d(B.value===`static`?`Copied!`:`Free`),1)]),a(`pre`,fe,[a(`code`,null,d($.static),1)])])]),a(`section`,pe,[i[41]||=a(`h2`,{class:`section-title`},`Scrolling Long Content`,-1),i[42]||=a(`p`,{class:`section-desc`},` When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean. `,-1),a(`button`,{class:`btn btn-primary`,onClick:i[4]||=e=>q(`scrolling`)},`Launch demo modal`),a(`div`,me,[a(`div`,he,[i[39]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[5]||=e=>X(`scrolling`)},d(B.value===`scrolling`?`Copied!`:`Copy`),1)]),a(`pre`,g,[a(`code`,null,d($.scrolling),1)])]),i[43]||=a(`p`,{class:`section-desc mt-3`},[u(` You can also create a scrollable modal that allows scroll the modal body by adding `),a(`code`,{class:`inline-code`},`modal-dialog-scrollable`),u(` to `),a(`code`,{class:`inline-code`},`.modal-dialog`),u(`. `)],-1),a(`button`,{class:`btn btn-primary`,onClick:i[6]||=e=>q(`scrollable`)},`Launch demo modal`),a(`div`,_,[a(`div`,v,[i[40]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[7]||=e=>X(`scrollable`)},d(B.value===`scrollable`?`Copied!`:`Copy`),1)]),a(`pre`,y,[a(`code`,null,d($.scrollable),1)])])]),a(`section`,b,[i[46]||=a(`h2`,{class:`section-title`},`Modal Position`,-1),i[47]||=a(`p`,{class:`section-desc`},[u(` Add `),a(`code`,{class:`inline-code`},`.modal-dialog-centered`),u(` to `),a(`code`,{class:`inline-code`},`.modal-dialog`),u(` to vertically center the modal. `)],-1),a(`div`,x,[a(`button`,{class:`btn btn-primary`,onClick:i[8]||=e=>q(`centered`)},`Vertically centered modal`),a(`button`,{class:`btn btn-secondary`,onClick:i[9]||=e=>q(`centeredScrollable`)},`Vertically centered scrollable modal`)]),a(`div`,S,[a(`div`,C,[i[44]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[10]||=e=>X(`centered`)},d(B.value===`centered`?`Copied!`:`Free`),1)]),a(`pre`,w,[a(`code`,null,d($.centered),1)])]),i[48]||=a(`p`,{class:`section-desc mt-3`},[u(` Specify the position for the modal. You can display modal at top /bottom of page by specifying classes `),a(`code`,{class:`inline-code`},`modal-top`),u(` and `),a(`code`,{class:`inline-code`},`modal-bottom`),u(` respectively. `)],-1),a(`div`,T,[a(`button`,{class:`btn btn-success`,onClick:i[11]||=e=>q(`top`)},`Top Modal`),a(`button`,{class:`btn btn-danger`,onClick:i[12]||=e=>q(`bottom`)},`Bottom Modal`)]),a(`div`,E,[a(`div`,D,[i[45]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[13]||=e=>X(`topbottom`)},d(B.value===`topbottom`?`Copied!`:`Copy`),1)]),a(`pre`,O,[a(`code`,null,d($.topbottom),1)])])]),a(`section`,k,[i[50]||=a(`h2`,{class:`section-title`},`Toggle Between Modals`,-1),i[51]||=a(`p`,{class:`section-desc`},[u(` Toggle between multiple modals with some clever placement of the `),a(`code`,{class:`inline-code`},`data-bs-target`),u(` and `),a(`code`,{class:`inline-code`},`data-bs-toggle`),u(` attributes. For example, you could toggle a password reset modal form within an already open sign in modal. `),a(`strong`,null,`Please note multiple modals cannot be open at the same time`),u(` — this method simply toggles between two separate modals. `)],-1),a(`button`,{class:`btn btn-primary`,onClick:i[14]||=e=>q(`toggle1`)},`Open first modal`),a(`div`,A,[a(`div`,j,[i[49]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[15]||=e=>X(`toggle`)},d(B.value===`toggle`?`Copied!`:`Copy`),1)]),a(`pre`,M,[a(`code`,null,d($.toggle),1)])])]),a(`section`,N,[i[53]||=a(`h2`,{class:`section-title`},`Optional Sizes`,-1),i[54]||=a(`p`,{class:`section-desc`},[u(` Modals have three optional sizes, available via modifier classes to be placed on a `),a(`code`,{class:`inline-code`},`.modal-dialog`),u(`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. `)],-1),a(`div`,P,[a(`button`,{class:`btn btn-primary`,onClick:i[16]||=e=>q(`xlarge`)},`Extra large modal`),a(`button`,{class:`btn btn-primary`,onClick:i[17]||=e=>q(`large`)},`Large modal`),a(`button`,{class:`btn btn-primary`,onClick:i[18]||=e=>q(`small`)},`Small modal`)]),a(`div`,F,[a(`div`,I,[i[52]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[19]||=e=>X(`sizes`)},d(B.value===`sizes`?`Copied!`:`Copy`),1)]),a(`pre`,L,[a(`code`,null,d($.sizes),1)])])]),a(`section`,R,[i[56]||=a(`h2`,{class:`section-title`},`Fullscreen Modal`,-1),i[57]||=a(`p`,{class:`section-desc`},[u(` Another override is the option to pop up a modal that covers the user viewport, available via modifier classes to be placed on a `),a(`code`,{class:`inline-code`},`.modal-dialog`),u(`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. `)],-1),a(`div`,ge,[a(`button`,{class:`btn btn-primary`,onClick:i[20]||=e=>q(`fullscreen`)},`Full screen`),a(`button`,{class:`btn btn-primary`,onClick:i[21]||=e=>q(`fullscreenSm`)},`Full screen below sm`),a(`button`,{class:`btn btn-primary`,onClick:i[22]||=e=>q(`fullscreenMd`)},`Full screen below md`),a(`button`,{class:`btn btn-primary`,onClick:i[23]||=e=>q(`fullscreenLg`)},`Full screen below lg`),a(`button`,{class:`btn btn-primary`,onClick:i[24]||=e=>q(`fullscreenXl`)},`Full screen below xl`),a(`button`,{class:`btn btn-primary`,onClick:i[25]||=e=>q(`fullscreenXxl`)},`Full screen below xxl`)]),a(`div`,_e,[a(`div`,ve,[i[55]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[26]||=e=>X(`fullscreen`)},d(B.value===`fullscreen`?`Copied!`:`Copy`),1)]),a(`pre`,ye,[a(`code`,null,d($.fullscreen),1)])])]),a(`section`,be,[i[59]||=a(`h2`,{class:`section-title`},`Modal Based Alerts`,-1),i[60]||=a(`p`,{class:`section-desc`},[u(` Modal alerts are customized alert modals available via modifier classes to be placed on a `),a(`code`,{class:`inline-code`},`.modal-dialog`),u(`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. `)],-1),a(`div`,xe,[a(`button`,{class:`btn btn-primary`,onClick:i[27]||=e=>q(`alertPrimary`)},`Primary Alert`),a(`button`,{class:`btn btn-secondary`,onClick:i[28]||=e=>q(`alertSecondary`)},`Secondary Alert`),a(`button`,{class:`btn btn-success`,onClick:i[29]||=e=>q(`alertSuccess`)},`Success Alert`),a(`button`,{class:`btn btn-danger`,onClick:i[30]||=e=>q(`alertDanger`)},`Info Alert`)]),a(`div`,Se,[a(`div`,Ce,[i[58]||=a(`span`,{class:`code-label`},`HTML`,-1),a(`button`,{class:`code-copy`,onClick:i[31]||=e=>X(`alerts`)},d(B.value===`alerts`?`Copied!`:`Copy`),1)]),a(`pre`,we,[a(`code`,null,d($.alerts),1)])])])]),a(`aside`,Te,[a(`nav`,Ee,[(n(),o(l,null,e(H,e=>a(`a`,{key:e.id,href:`#${e.id}`,class:s([`toc-link`,{active:V.value===e.id}]),onClick:m(t=>ze(e.id),[`prevent`])},d(e.label),11,De)),64))])])]),c(h,{name:`backdrop-fade`},{default:r(()=>[z.value?(n(),o(`div`,{key:0,class:`modal-backdrop`,onClick:Y})):p(``,!0)]),_:1}),c(h,{name:`modal-anim`},{default:r(()=>[z.value?(n(),o(`div`,{key:0,class:s([`modal-shell`,Le.value]),onClick:m(Y,[`self`])},[a(`div`,{class:s([`modal-dialog`,K.value])},[a(`div`,Oe,[a(`div`,{class:s([`modal-header`,Re.value])},[a(`h5`,ke,d(G.value.title),1),a(`button`,{class:`modal-x`,onClick:J,"aria-label":`Close`},[...i[61]||=[a(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.5`},[a(`path`,{d:`M18 6L6 18M6 6l12 12`})],-1)]])],2),a(`div`,{class:s([`modal-body`,{"modal-body-scroll":G.value.scrollableBody}])},[G.value.alertType?(n(),o(`div`,Ae,[a(`div`,{class:s([`alert-icon`,`alert-icon--${G.value.alertType}`])},[...i[62]||=[a(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[a(`circle`,{cx:`12`,cy:`12`,r:`10`}),a(`path`,{d:`M12 8v4m0 4h.01`})],-1)]],2),a(`h4`,je,d(G.value.alertTitle),1),a(`p`,Me,d(G.value.body),1)])):(n(),o(`div`,Ne,[(n(!0),o(l,null,e(G.value.bodyParagraphs,(e,t)=>(n(),o(`p`,{key:t},d(e),1))),128))]))],2),G.value.hideFooter?G.value.alertType?(n(),o(`div`,Fe,[a(`button`,{class:`btn btn-light`,onClick:J},`Cancel`),a(`button`,{class:s([`btn`,`btn-${G.value.alertType}`]),onClick:J},`Confirm`,2)])):p(``,!0):(n(),o(`div`,Pe,[G.value.nextModal?(n(),o(`button`,{key:0,class:`btn btn-link`,onClick:i[32]||=e=>q(G.value.nextModal)},d(G.value.nextLabel||`Open another modal`),1)):p(``,!0),a(`button`,{class:`btn btn-light`,onClick:J},`Close`),a(`button`,{class:`btn btn-primary`,onClick:J},`Save changes`)]))])],2)],2)):p(``,!0)]),_:1})]))}},[[`__scopeId`,`data-v-14109b8a`]]);export{z as default};