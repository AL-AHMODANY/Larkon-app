import{A as e,O as t,V as n,c as r,d as i,dt as a,ft as o,i as s,m as c,pt as l,t as u}from"./_plugin-vue_export-helper-Ct9996Xc.js";import{a as d}from"./index-D_mp5A_a.js";var f={class:`page-content`},p={class:`row`},ee={class:`col-lg-9`},te={class:`card`},ne={class:`card-body`},m={class:`accordion`,id:`accordionBasic`},h=[`id`],g=[`onClick`,`aria-expanded`],_=[`innerHTML`],v={class:`code-block mt-4`},y={class:`code-header`},b={key:0},x={key:1},S={class:`code-pre`},C={ref:`basicCode`},w={class:`card`},T={class:`card-body`},E={class:`accordion accordion-flush`,id:`accordionFlush`},D={class:`accordion-header`},O=[`onClick`,`aria-expanded`],k={class:`accordion-body`},A={class:`code-block mt-4`},j={class:`code-header`},M={key:0},N={key:1},re={class:`card`},P={class:`card-body`},F={class:`accordion`,id:`accordionAlwaysOpen`},I={class:`accordion-header`},L=[`onClick`,`aria-expanded`],R=[`innerHTML`],z={class:`code-block mt-4`},B={class:`code-header`},V={key:0},H={key:1},U={class:`col-lg-3 d-none d-lg-block`},W={class:`page-nav-sticky`},G={class:`page-nav`},K=[`href`,`onClick`],q=u({__name:`Accordion`,setup(u){let q=[{id:`basic`,label:`Default Example`},{id:`flush`,label:`Flush Accordion`},{id:`alwaysopen`,label:`Always Open`}],J=n(`basic`),Y=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})},X=n(null),Z=e=>{let t={basic:document.querySelector(`#accordionBasic`)?.closest(`.card`)?.querySelector(`code`)?.innerText,flush:document.querySelector(`#accordionFlush`)?.closest(`.card`)?.querySelector(`code`)?.innerText,always:document.querySelector(`#accordionAlwaysOpen`)?.closest(`.card`)?.querySelector(`code`)?.innerText};navigator.clipboard.writeText(t[e]||``).then(()=>{X.value=e,setTimeout(()=>X.value=null,2e3)})},Q=n([{title:`Accordion Item #1`,open:!0,body:`<strong>This is the first item's accordion body.</strong> It is shown by default,
      until the collapse plugin adds the appropriate classes that we use to style each element.
      These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      You can modify any of this with custom CSS or overriding our default variables. It's also worth
      noting that just about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow.`},{title:`Accordion Item #2`,open:!1,body:`Placeholder content for accordion item #2.`},{title:`Accordion Item #3`,open:!1,body:`Placeholder content for accordion item #3.`}]),ie=e=>{Q.value.forEach((t,n)=>{t.open=n===e?!t.open:!1})},$=n([{title:`Accordion Item #1`,open:!1,body:`Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class.`},{title:`Accordion Item #2`,open:!1,body:`Placeholder content for accordion item #2.`},{title:`Accordion Item #3`,open:!1,body:`Placeholder content for accordion item #3.`}]),ae=e=>{$.value.forEach((t,n)=>{t.open=n===e?!t.open:!1})},oe=n([{title:`Accordion Item #1`,open:!0,body:`<strong>This is the first item's accordion body.</strong> It is shown by default,
      until the collapse plugin adds the appropriate classes that we use to style each element.
      These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      You can modify any of this with custom CSS or overriding our default variables.`},{title:`Accordion Item #2`,open:!1,body:`Placeholder content for accordion item #2.`},{title:`Accordion Item #3`,open:!1,body:`Placeholder content for accordion item #3.`}]);return(n,u)=>(t(),i(`div`,f,[u[14]||=r(`div`,{class:`page-title-box`},[r(`h4`,{class:`page-title`},`Accordion`)],-1),r(`div`,p,[r(`div`,ee,[r(`div`,te,[r(`div`,ne,[u[4]||=r(`h5`,{class:`card-title mb-1`},`Basic Example`,-1),u[5]||=r(`p`,{class:`text-muted mb-4`},[c(` Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use `),r(`code`,null,`.accordion`),c(` as a wrapper. `)],-1),r(`div`,m,[(t(!0),i(s,null,e(Q.value,(e,n)=>(t(),i(`div`,{key:n,class:`accordion-item`},[r(`h2`,{class:`accordion-header`,id:`basicHeading${n}`},[r(`button`,{class:a([`accordion-button`,{collapsed:e.open===!1}]),type:`button`,onClick:e=>ie(n),"aria-expanded":e.open},l(e.title),11,g)],8,h),r(`div`,{class:a([`accordion-collapse`,{show:e.open}]),style:o(e.open?`height: auto;`:`height: 0; overflow: hidden;`)},[r(`div`,{class:`accordion-body`,innerHTML:e.body},null,8,_)],6)]))),128))]),r(`div`,v,[r(`div`,y,[u[3]||=r(`span`,null,`HTML`,-1),r(`button`,{class:`btn-copy`,onClick:u[0]||=e=>Z(`basic`)},[X.value===`basic`?(t(),i(`span`,b,`Copied!`)):(t(),i(`span`,x,`Copy`))])]),r(`pre`,S,[r(`code`,C,`<div class="accordion" id="accordionExample">
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
</div>`,512)])])])]),r(`div`,w,[r(`div`,T,[u[8]||=r(`h5`,{class:`card-title mb-1`},`Flush Accordion`,-1),u[9]||=r(`p`,{class:`text-muted mb-4`},[c(` Add `),r(`code`,null,`.accordion-flush`),c(` to remove the default `),r(`code`,null,`background-color`),c(`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. `)],-1),r(`div`,E,[(t(!0),i(s,null,e($.value,(e,n)=>(t(),i(`div`,{key:n,class:`accordion-item`},[r(`h2`,D,[r(`button`,{class:a([`accordion-button`,{collapsed:!e.open}]),type:`button`,onClick:e=>ae(n),"aria-expanded":e.open},l(e.title),11,O)]),r(`div`,{class:a([`accordion-collapse`,{show:e.open}]),style:o(e.open?`height: auto;`:`height: 0; overflow: hidden;`)},[r(`div`,k,l(e.body),1)],6)]))),128))]),r(`div`,A,[r(`div`,j,[u[6]||=r(`span`,null,`HTML`,-1),r(`button`,{class:`btn-copy`,onClick:u[1]||=e=>Z(`flush`)},[X.value===`flush`?(t(),i(`span`,M,`Copied!`)):(t(),i(`span`,N,`Copy`))])]),u[7]||=r(`pre`,{class:`code-pre`},[r(`code`,null,`<div class="accordion accordion-flush" id="accordionFlushExample">
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
</div>`)],-1)])])]),r(`div`,re,[r(`div`,P,[u[12]||=r(`h5`,{class:`card-title mb-1`},`Always Open Accordion`,-1),u[13]||=r(`p`,{class:`text-muted mb-4`},[c(` Omit the `),r(`code`,null,`data-bs-parent`),c(` attribute on each `),r(`code`,null,`.accordion-collapse`),c(` to make accordion items stay open when another item is opened. `)],-1),r(`div`,F,[(t(!0),i(s,null,e(oe.value,(e,n)=>(t(),i(`div`,{key:n,class:`accordion-item`},[r(`h2`,I,[r(`button`,{class:a([`accordion-button`,{collapsed:!e.open}]),type:`button`,onClick:t=>e.open=!e.open,"aria-expanded":e.open},l(e.title),11,L)]),r(`div`,{class:a([`accordion-collapse`,{show:e.open}]),style:o(e.open?`height: auto;`:`height: 0; overflow: hidden;`)},[r(`div`,{class:`accordion-body`,innerHTML:e.body},null,8,R)],6)]))),128))]),r(`div`,z,[r(`div`,B,[u[10]||=r(`span`,null,`HTML`,-1),r(`button`,{class:`btn-copy`,onClick:u[2]||=e=>Z(`always`)},[X.value===`always`?(t(),i(`span`,V,`Copied!`)):(t(),i(`span`,H,`Copy`))])]),u[11]||=r(`pre`,{class:`code-pre`},[r(`code`,null,`<div class="accordion" id="accordionPanelsStayOpenExample">
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
</div>`)],-1)])])])]),r(`div`,U,[r(`div`,W,[r(`nav`,G,[(t(),i(s,null,e(q,e=>r(`a`,{key:e.id,href:`#${e.id}`,class:a([`page-nav-link`,{active:J.value===e.id}]),onClick:d(t=>Y(e.id),[`prevent`])},l(e.label),11,K)),64))])])])])]))}},[[`__scopeId`,`data-v-6e788fbf`]]);export{q as default};