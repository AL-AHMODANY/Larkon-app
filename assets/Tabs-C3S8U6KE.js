import{H as e,M as t,Y as n,b as r,h as i,q as a,t as o,v as ee,x as s}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as te,t as ne}from"./Footer-Ck9cRuzL.js";var re={class:`page-wrapper`},ie={class:`demo-card`},ae={class:`demo-box`},oe={class:`nav nav-tabs mb-3`},se={class:`nav-item`},ce={class:`nav-item`},le={class:`nav-item`},ue={class:`code-block mt-3`},c={class:`code-bar`},l={class:`code-body`},u={class:`demo-card`},d={class:`demo-box`},f={class:`nav nav-tabs nav-justified mb-3`},p={class:`nav-item`},m={class:`nav-item`},h={class:`nav-item`},g={class:`code-block mt-3`},_={class:`code-bar`},v={class:`code-body`},y={class:`demo-card`},b={class:`demo-box`},x={class:`nav nav-pills mb-3`},S={class:`nav-item`},C={class:`nav-item`},w={class:`nav-item`},T={class:`code-block mt-3`},E={class:`code-bar`},D={class:`code-body`},O={class:`demo-card`},k={class:`demo-box`},A={class:`nav nav-pills nav-justified mb-3`},j={class:`nav-item`},M={class:`nav-item`},N={class:`nav-item`},P={class:`code-block mt-3`},F={class:`code-bar`},de={class:`code-body`},I={class:`demo-card`},L={class:`demo-box`},R={class:`d-flex gap-3`},z={class:`nav nav-pills flex-column flex-shrink-0`,style:{"min-width":`120px`}},B={class:`nav-item`},V={class:`nav-item`},H={class:`nav-item`},fe={class:`code-block mt-3`},pe={class:`code-bar`},me={class:`code-body`},he={class:`demo-card`},ge={class:`demo-box`},_e={class:`d-flex gap-3`},ve={class:`nav nav-pills flex-column flex-shrink-0`,style:{"min-width":`120px`}},ye={class:`nav-item`},be={class:`nav-item`},xe={class:`nav-item`},Se={class:`code-block mt-3`},Ce={class:`code-bar`},U={class:`code-body`},W=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,G=o({__name:`Tabs`,setup(o){let G=e(`home`),K=e(`home`),q=e(`home`),J=e(`home`),Y=e(`home`),X=e(`home`),Z=e(``);function Q(e,t){navigator.clipboard.writeText(t).catch(()=>{}),Z.value=e,setTimeout(()=>{Z.value=``},2e3)}let $={tabs:`<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link disabled" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content mt-3">
  <div class="tab-pane fade show active" id="home">Home content...</div>
  <div class="tab-pane fade" id="profile">Profile content...</div>
</div>`,tabsJustified:`<ul class="nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#messages">Messages</button>
  </li>
</ul>`,pills:`<ul class="nav nav-pills" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link disabled" disabled>Disabled</button>
  </li>
</ul>`,pillsJustified:`<ul class="nav nav-pills nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#profile">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#messages">Messages</button>
  </li>
</ul>`,vertical:`<div class="d-flex gap-3">
  <ul class="nav nav-pills flex-column flex-shrink-0">
    <li class="nav-item">
      <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#v-home">Home</button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#v-profile">Profile</button>
    </li>
  </ul>
  <div class="tab-content flex-grow-1">
    <div class="tab-pane fade show active" id="v-home">Home content...</div>
    <div class="tab-pane fade" id="v-profile">Profile content...</div>
  </div>
</div>`,verticalRight:`<div class="d-flex gap-3">
  <div class="tab-content flex-grow-1">
    <div class="tab-pane fade show active" id="vr-home">Home content...</div>
    <div class="tab-pane fade" id="vr-profile">Profile content...</div>
  </div>
  <ul class="nav nav-pills flex-column flex-shrink-0">
    <li class="nav-item">
      <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#vr-home">Home</button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#vr-profile">Profile</button>
    </li>
  </ul>
</div>`};return(e,o)=>(t(),ee(`div`,re,[s(te),o[50]||=i(`div`,{class:`page-header`},[i(`h4`,{class:`page-title`},`Tabs`),i(`p`,{class:`page-subtitle`},`Bootstrap 5 nav tabs, pills, and vertical tab examples.`)],-1),i(`div`,ie,[o[27]||=i(`h6`,{class:`demo-title`},`Nav Tabs`,-1),o[28]||=i(`p`,{class:`demo-desc`},[r(`Use the `),i(`code`,null,`.nav-tabs`),r(` class to generate a tabbed interface.`)],-1),i(`div`,ae,[i(`ul`,oe,[i(`li`,se,[i(`a`,{class:a([`nav-link`,{active:G.value===`home`}]),onClick:o[0]||=e=>G.value=`home`,href:`#`},`Home`,2)]),i(`li`,ce,[i(`a`,{class:a([`nav-link`,{active:G.value===`profile`}]),onClick:o[1]||=e=>G.value=`profile`,href:`#`},`Profile`,2)]),i(`li`,le,[i(`a`,{class:a([`nav-link`,{active:G.value===`messages`}]),onClick:o[2]||=e=>G.value=`messages`,href:`#`},`Messages`,2)]),o[24]||=i(`li`,{class:`nav-item`},[i(`a`,{class:`nav-link disabled`,href:`#`,tabindex:`-1`},`Disabled`)],-1)]),i(`div`,{class:`tab-content-text`},n(W))]),i(`div`,ue,[i(`div`,c,[o[26]||=i(`span`,{class:`code-badge`},`HTML`,-1),i(`button`,{class:`copy-btn`,onClick:o[3]||=e=>Q(`t1`,$.tabs)},[o[25]||=i(`i`,{class:`bi bi-clipboard me-1`},null,-1),r(n(Z.value===`t1`?`Copied!`:`Copy`),1)])]),i(`pre`,l,[i(`code`,null,n($.tabs),1)])])]),i(`div`,u,[o[31]||=i(`h6`,{class:`demo-title`},`Tabs Justified`,-1),o[32]||=i(`p`,{class:`demo-desc`},[r(`Using `),i(`code`,null,`.nav-justified`),r(` forces tabs to fill the available width.`)],-1),i(`div`,d,[i(`ul`,f,[i(`li`,p,[i(`a`,{class:a([`nav-link`,{active:K.value===`home`}]),onClick:o[4]||=e=>K.value=`home`,href:`#`},`Home`,2)]),i(`li`,m,[i(`a`,{class:a([`nav-link`,{active:K.value===`profile`}]),onClick:o[5]||=e=>K.value=`profile`,href:`#`},`Profile`,2)]),i(`li`,h,[i(`a`,{class:a([`nav-link`,{active:K.value===`messages`}]),onClick:o[6]||=e=>K.value=`messages`,href:`#`},`Messages`,2)])]),i(`div`,{class:`tab-content-text`},n(W))]),i(`div`,g,[i(`div`,_,[o[30]||=i(`span`,{class:`code-badge`},`HTML`,-1),i(`button`,{class:`copy-btn`,onClick:o[7]||=e=>Q(`t2`,$.tabsJustified)},[o[29]||=i(`i`,{class:`bi bi-clipboard me-1`},null,-1),r(n(Z.value===`t2`?`Copied!`:`Copy`),1)])]),i(`pre`,v,[i(`code`,null,n($.tabsJustified),1)])])]),i(`div`,y,[o[36]||=i(`h6`,{class:`demo-title`},`Nav Pills`,-1),o[37]||=i(`p`,{class:`demo-desc`},[r(`Use the `),i(`code`,null,`.nav-pills`),r(` class to generate a pill-style navigation.`)],-1),i(`div`,b,[i(`ul`,x,[i(`li`,S,[i(`a`,{class:a([`nav-link`,{active:q.value===`home`}]),onClick:o[8]||=e=>q.value=`home`,href:`#`},`Home`,2)]),i(`li`,C,[i(`a`,{class:a([`nav-link`,{active:q.value===`profile`}]),onClick:o[9]||=e=>q.value=`profile`,href:`#`},`Profile`,2)]),i(`li`,w,[i(`a`,{class:a([`nav-link`,{active:q.value===`messages`}]),onClick:o[10]||=e=>q.value=`messages`,href:`#`},`Messages`,2)]),o[33]||=i(`li`,{class:`nav-item`},[i(`a`,{class:`nav-link disabled`,href:`#`,tabindex:`-1`},`Disabled`)],-1)]),i(`div`,{class:`tab-content-text`},n(W))]),i(`div`,T,[i(`div`,E,[o[35]||=i(`span`,{class:`code-badge`},`HTML`,-1),i(`button`,{class:`copy-btn`,onClick:o[11]||=e=>Q(`t3`,$.pills)},[o[34]||=i(`i`,{class:`bi bi-clipboard me-1`},null,-1),r(n(Z.value===`t3`?`Copied!`:`Copy`),1)])]),i(`pre`,D,[i(`code`,null,n($.pills),1)])])]),i(`div`,O,[o[40]||=i(`h6`,{class:`demo-title`},`Pills Justified`,-1),o[41]||=i(`p`,{class:`demo-desc`},[r(`Using `),i(`code`,null,`.nav-justified`),r(` with `),i(`code`,null,`.nav-pills`),r(` fills the available width.`)],-1),i(`div`,k,[i(`ul`,A,[i(`li`,j,[i(`a`,{class:a([`nav-link`,{active:J.value===`home`}]),onClick:o[12]||=e=>J.value=`home`,href:`#`},`Home`,2)]),i(`li`,M,[i(`a`,{class:a([`nav-link`,{active:J.value===`profile`}]),onClick:o[13]||=e=>J.value=`profile`,href:`#`},`Profile`,2)]),i(`li`,N,[i(`a`,{class:a([`nav-link`,{active:J.value===`messages`}]),onClick:o[14]||=e=>J.value=`messages`,href:`#`},`Messages`,2)])]),i(`div`,{class:`tab-content-text`},n(W))]),i(`div`,P,[i(`div`,F,[o[39]||=i(`span`,{class:`code-badge`},`HTML`,-1),i(`button`,{class:`copy-btn`,onClick:o[15]||=e=>Q(`t4`,$.pillsJustified)},[o[38]||=i(`i`,{class:`bi bi-clipboard me-1`},null,-1),r(n(Z.value===`t4`?`Copied!`:`Copy`),1)])]),i(`pre`,de,[i(`code`,null,n($.pillsJustified),1)])])]),i(`div`,I,[o[44]||=i(`h6`,{class:`demo-title`},`Tabs Vertical Left`,-1),o[45]||=i(`p`,{class:`demo-desc`},[r(`Navigation tags can display in vertical directions using `),i(`code`,null,`.flex-column`),r(`.`)],-1),i(`div`,L,[i(`div`,R,[i(`ul`,z,[i(`li`,B,[i(`a`,{class:a([`nav-link`,{active:Y.value===`home`}]),onClick:o[16]||=e=>Y.value=`home`,href:`#`},`Home`,2)]),i(`li`,V,[i(`a`,{class:a([`nav-link`,{active:Y.value===`profile`}]),onClick:o[17]||=e=>Y.value=`profile`,href:`#`},`Profile`,2)]),i(`li`,H,[i(`a`,{class:a([`nav-link`,{active:Y.value===`messages`}]),onClick:o[18]||=e=>Y.value=`messages`,href:`#`},`Messages`,2)])]),i(`div`,{class:`tab-content-text flex-grow-1`},n(W))])]),i(`div`,fe,[i(`div`,pe,[o[43]||=i(`span`,{class:`code-badge`},`HTML`,-1),i(`button`,{class:`copy-btn`,onClick:o[19]||=e=>Q(`t5`,$.vertical)},[o[42]||=i(`i`,{class:`bi bi-clipboard me-1`},null,-1),r(n(Z.value===`t5`?`Copied!`:`Copy`),1)])]),i(`pre`,me,[i(`code`,null,n($.vertical),1)])])]),i(`div`,he,[o[48]||=i(`h6`,{class:`demo-title`},`Tabs Vertical Right`,-1),o[49]||=i(`p`,{class:`demo-desc`},`Navigation tags can also display vertically on the right side.`,-1),i(`div`,ge,[i(`div`,_e,[i(`div`,{class:`tab-content-text flex-grow-1`},n(W)),i(`ul`,ve,[i(`li`,ye,[i(`a`,{class:a([`nav-link`,{active:X.value===`home`}]),onClick:o[20]||=e=>X.value=`home`,href:`#`},`Home`,2)]),i(`li`,be,[i(`a`,{class:a([`nav-link`,{active:X.value===`profile`}]),onClick:o[21]||=e=>X.value=`profile`,href:`#`},`Profile`,2)]),i(`li`,xe,[i(`a`,{class:a([`nav-link`,{active:X.value===`settings`}]),onClick:o[22]||=e=>X.value=`settings`,href:`#`},`Settings`,2)])])])]),i(`div`,Se,[i(`div`,Ce,[o[47]||=i(`span`,{class:`code-badge`},`HTML`,-1),i(`button`,{class:`copy-btn`,onClick:o[23]||=e=>Q(`t6`,$.verticalRight)},[o[46]||=i(`i`,{class:`bi bi-clipboard me-1`},null,-1),r(n(Z.value===`t6`?`Copied!`:`Copy`),1)])]),i(`pre`,U,[i(`code`,null,n($.verticalRight),1)])])]),s(ne)]))}},[[`__scopeId`,`data-v-bd0a20f4`]]);export{G as default};