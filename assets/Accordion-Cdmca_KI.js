import{H as e,J as t,M as n,P as r,Y as i,b as a,d as o,f as s,h as c,q as l,t as u,v as d,x as f}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as ee,t as te}from"./Footer-Ck9cRuzL.js";var ne={class:`page-content`},re={class:`row`},ie={class:`col-lg-9`},p={class:`card`},m={class:`card-body`},h={class:`accordion`,id:`accordionBasic`},g=[`id`],_=[`onClick`,`aria-expanded`],v=[`innerHTML`],y={class:`code-block mt-4`},b={class:`code-header`},x={key:0},S={key:1},C={class:`code-pre`},w={ref:`basicCode`},T={class:`card`},E={class:`card-body`},D={class:`accordion accordion-flush`,id:`accordionFlush`},O={class:`accordion-header`},k=[`onClick`,`aria-expanded`],A={class:`accordion-body`},j={class:`code-block mt-4`},M={class:`code-header`},ae={key:0},N={key:1},P={class:`card`},F={class:`card-body`},I={class:`accordion`,id:`accordionAlwaysOpen`},L={class:`accordion-header`},R=[`onClick`,`aria-expanded`],z=[`innerHTML`],B={class:`code-block mt-4`},V={class:`code-header`},H={key:0},U={key:1},W={class:`col-lg-3 d-none d-lg-block`},G={class:`page-nav-sticky`},K={class:`page-nav`},q=[`href`,`onClick`],J=u({__name:`Accordion`,setup(u){let J=[{id:`basic`,label:`Default Example`},{id:`flush`,label:`Flush Accordion`},{id:`alwaysopen`,label:`Always Open`}],oe=e(`basic`),se=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})},Y=e(null),X=e=>{let t={basic:document.querySelector(`#accordionBasic`)?.closest(`.card`)?.querySelector(`code`)?.innerText,flush:document.querySelector(`#accordionFlush`)?.closest(`.card`)?.querySelector(`code`)?.innerText,always:document.querySelector(`#accordionAlwaysOpen`)?.closest(`.card`)?.querySelector(`code`)?.innerText};navigator.clipboard.writeText(t[e]||``).then(()=>{Y.value=e,setTimeout(()=>Y.value=null,2e3)})},Z=e([{title:`Accordion Item #1`,open:!0,body:`<strong>This is the first item's accordion body.</strong> It is shown by default,
      until the collapse plugin adds the appropriate classes that we use to style each element.
      These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      You can modify any of this with custom CSS or overriding our default variables. It's also worth
      noting that just about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow.`},{title:`Accordion Item #2`,open:!1,body:`Placeholder content for accordion item #2.`},{title:`Accordion Item #3`,open:!1,body:`Placeholder content for accordion item #3.`}]),Q=e=>{Z.value.forEach((t,n)=>{t.open=n===e?!t.open:!1})},$=e([{title:`Accordion Item #1`,open:!1,body:`Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class.`},{title:`Accordion Item #2`,open:!1,body:`Placeholder content for accordion item #2.`},{title:`Accordion Item #3`,open:!1,body:`Placeholder content for accordion item #3.`}]),ce=e=>{$.value.forEach((t,n)=>{t.open=n===e?!t.open:!1})},le=e([{title:`Accordion Item #1`,open:!0,body:`<strong>This is the first item's accordion body.</strong> It is shown by default,
      until the collapse plugin adds the appropriate classes that we use to style each element.
      These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      You can modify any of this with custom CSS or overriding our default variables.`},{title:`Accordion Item #2`,open:!1,body:`Placeholder content for accordion item #2.`},{title:`Accordion Item #3`,open:!1,body:`Placeholder content for accordion item #3.`}]);return(e,u)=>(n(),d(`div`,ne,[f(ee),u[14]||=c(`div`,{class:`page-title-box`},[c(`h4`,{class:`page-title`},`Accordion`)],-1),c(`div`,re,[c(`div`,ie,[c(`div`,p,[c(`div`,m,[u[4]||=c(`h5`,{class:`card-title mb-1`},`Basic Example`,-1),u[5]||=c(`p`,{class:`text-muted mb-4`},[a(` Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use `),c(`code`,null,`.accordion`),a(` as a wrapper. `)],-1),c(`div`,h,[(n(!0),d(s,null,r(Z.value,(e,r)=>(n(),d(`div`,{key:r,class:`accordion-item`},[c(`h2`,{class:`accordion-header`,id:`basicHeading${r}`},[c(`button`,{class:l([`accordion-button`,{collapsed:e.open===!1}]),type:`button`,onClick:e=>Q(r),"aria-expanded":e.open},i(e.title),11,_)],8,g),c(`div`,{class:l([`accordion-collapse`,{show:e.open}]),style:t(e.open?`height: auto;`:`height: 0; overflow: hidden;`)},[c(`div`,{class:`accordion-body`,innerHTML:e.body},null,8,v)],6)]))),128))]),c(`div`,y,[c(`div`,b,[u[3]||=c(`span`,null,`HTML`,-1),c(`button`,{class:`btn-copy`,onClick:u[0]||=e=>X(`basic`)},[Y.value===`basic`?(n(),d(`span`,x,`Copied!`)):(n(),d(`span`,S,`Copy`))])]),c(`pre`,C,[c(`code`,w,`<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default...
      </div>
    </div>
  </div>
</div>`,512)])])])]),c(`div`,T,[c(`div`,E,[u[8]||=c(`h5`,{class:`card-title mb-1`},`Flush Accordion`,-1),u[9]||=c(`p`,{class:`text-muted mb-4`},[a(` Add `),c(`code`,null,`.accordion-flush`),a(` to remove the default `),c(`code`,null,`background-color`),a(`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. `)],-1),c(`div`,D,[(n(!0),d(s,null,r($.value,(e,r)=>(n(),d(`div`,{key:r,class:`accordion-item`},[c(`h2`,O,[c(`button`,{class:l([`accordion-button`,{collapsed:!e.open}]),type:`button`,onClick:e=>ce(r),"aria-expanded":e.open},i(e.title),11,k)]),c(`div`,{class:l([`accordion-collapse`,{show:e.open}]),style:t(e.open?`height: auto;`:`height: 0; overflow: hidden;`)},[c(`div`,A,i(e.body),1)],6)]))),128))]),c(`div`,j,[c(`div`,M,[u[6]||=c(`span`,null,`HTML`,-1),c(`button`,{class:`btn-copy`,onClick:u[1]||=e=>X(`flush`)},[Y.value===`flush`?(n(),d(`span`,ae,`Copied!`)):(n(),d(`span`,N,`Copy`))])]),u[7]||=c(`pre`,{class:`code-pre`},[c(`code`,null,`<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion...</div>
    </div>
  </div>
</div>`)],-1)])])]),c(`div`,P,[c(`div`,F,[u[12]||=c(`h5`,{class:`card-title mb-1`},`Always Open Accordion`,-1),u[13]||=c(`p`,{class:`text-muted mb-4`},[a(` Omit the `),c(`code`,null,`data-bs-parent`),a(` attribute on each `),c(`code`,null,`.accordion-collapse`),a(` to make accordion items stay open when another item is opened. `)],-1),c(`div`,I,[(n(!0),d(s,null,r(le.value,(e,r)=>(n(),d(`div`,{key:r,class:`accordion-item`},[c(`h2`,L,[c(`button`,{class:l([`accordion-button`,{collapsed:!e.open}]),type:`button`,onClick:t=>e.open=!e.open,"aria-expanded":e.open},i(e.title),11,R)]),c(`div`,{class:l([`accordion-collapse`,{show:e.open}]),style:t(e.open?`height: auto;`:`height: 0; overflow: hidden;`)},[c(`div`,{class:`accordion-body`,innerHTML:e.body},null,8,z)],6)]))),128))]),c(`div`,B,[c(`div`,V,[u[10]||=c(`span`,null,`HTML`,-1),c(`button`,{class:`btn-copy`,onClick:u[2]||=e=>X(`always`)},[Y.value===`always`?(n(),d(`span`,H,`Copied!`)):(n(),d(`span`,U,`Copy`))])]),u[11]||=c(`pre`,{class:`code-pre`},[c(`code`,null,`<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong>...
      </div>
    </div>
  </div>
</div>`)],-1)])])])]),c(`div`,W,[c(`div`,G,[c(`nav`,K,[(n(),d(s,null,r(J,e=>c(`a`,{key:e.id,href:`#${e.id}`,class:l([`page-nav-link`,{active:oe.value===e.id}]),onClick:o(t=>se(e.id),[`prevent`])},i(e.label),11,q)),64))])])])]),f(te)]))}},[[`__scopeId`,`data-v-3c3cb3e9`]]);export{J as default};