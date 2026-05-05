import{H as e,I as t,M as n,P as r,V as i,Y as a,f as o,h as s,q as c,t as ee,v as l,x as u,y as d}from"./_plugin-vue_export-helper-CLHCuJKU.js";import"./Footer-Ck9cRuzL.js";var f={name:`Cards`,setup(){let t=[{img:`https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-1.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`},{img:`https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-2.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`},{img:`https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-4.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`},{img:`https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-5.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`}],n=[{bg:`bg-success`,title:`Success`,text:`Positive message`},{bg:`bg-warning`,title:`Warning`,text:`Cautionary message`},{bg:`bg-danger`,title:`Danger`,text:`Critical message`},{bg:`bg-info`,title:`Info`,text:`Informational message`}],r=[{img:`https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-4.jpg`,title:`Horizontal card`,text:`A short description for the horizontal card.`},{img:`https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-3.jpg`,title:`Horizontal card`,text:`A short description for the horizontal card.`}],a=[`https://i.pinimg.com/1200x/cb/66/eb/cb66eb24a429800827e66b260c427652.jpg`,`https://i.pinimg.com/736x/d9/f3/fc/d9f3fc6990b4b4c204e79a14279c0fe8.jpg`,`https://i.pinimg.com/1200x/ac/06/2a/ac062aed79bf1e927e91bdc5cd67a633.jpg`,`https://i.pinimg.com/736x/01/31/90/013190c96e79d5685e1856e83b1da12f.jpg`,`https://i.pinimg.com/1200x/45/99/dc/4599dc8d3025c121c5cfc451487a98fe.jpg`,`https://i.pinimg.com/1200x/33/54/83/335483d19426078a195ac88b813759bb.jpg`,`https://i.pinimg.com/1200x/02/96/0c/02960c95e8f17a63e483de27a6572a91.jpg`,`https://i.pinimg.com/1200x/e7/79/12/e77912db441ea233654d7241d4b2d531.jpg`],o=i({basic:`<div class="row">
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100 shadow-sm rounded">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Card title</h5>
        <p class="card-text flex-grow-1">Card description here.</p>
        <button class="btn btn-warning mt-2 align-self-start">Button</button>
      </div>
    </div>
  </div>
</div>`,advanced:`<!-- Header / Footer -->
<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">Supporting text here.</p>
    <button class="btn btn-warning">Button</button>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>

<!-- Overlay -->
<div class="card text-white">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Overlay Title</h5>
    <p class="card-text">Overlay text</p>
  </div>
</div>

<!-- List group -->
<div class="card">
  <div class="card-body">Title and text</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
  </ul>
</div>

<!-- Tabs -->
<ul class="nav nav-tabs">
  <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1">Tab 1</button></li>
  <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2">Tab 2</button></li>
</ul>`,colored:`<div class="card bg-success text-white">
  <div class="card-body">
    <h5 class="card-title">Success</h5>
    <p class="card-text">Positive message</p>
  </div>
</div>`,horizontal:`<div class="card">
  <div class="row g-0">
    <div class="col-4">
      <img src="..." class="img-fluid" alt="...">
    </div>
    <div class="col-8">
      <div class="card-body">
        <h5 class="card-title">Horizontal card</h5>
        <p class="card-text">Description here.</p>
        <button class="btn btn-warning">Button</button>
      </div>
    </div>
  </div>
</div>`,group:`<div class="card-group">
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">...</div>
  </div>
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">...</div>
  </div>
</div>`,imageOnly:`<div class="row">
  <div class="col-3 mb-4">
    <div class="card image-card overflow-hidden">
      <img src="..." class="card-img-top zoom-img" alt="...">
    </div>
  </div>
</div>`}),s=e(null);return{basicCards:t,colored:n,horizontalCards:r,imageOnly:a,codeSnippets:o,copyCode:async(e,t)=>{try{await navigator.clipboard.writeText(e),s.value=t,setTimeout(()=>{s.value===t&&(s.value=null)},1600)}catch{try{let n=document.createElement(`textarea`);n.value=e,n.style.position=`fixed`,n.style.left=`-9999px`,document.body.appendChild(n),n.select(),document.execCommand(`copy`),document.body.removeChild(n),s.value=t,setTimeout(()=>{s.value===t&&(s.value=null)},1600)}catch(e){console.error(`Copy failed`,e)}}},copiedId:s}}},p={class:`cards-page min-vh-100 py-5 bg-light`},m={class:`container`},h={class:`mb-5`},g={class:`row`},_={class:`card h-100 shadow-sm rounded`},v=[`src`,`alt`],y={class:`card-body d-flex flex-column`},b={class:`card-title`},x={class:`card-text flex-grow-1`},S={class:`code-block`},C={class:`d-flex justify-content-between align-items-start mb-2`},w={key:0},T={key:1,class:`text-success`},E={class:`code-body`},D={class:`mb-5`},O={class:`code-block`},k={class:`d-flex justify-content-between align-items-start mb-2`},A={key:0},j={key:1,class:`text-success`},M={class:`code-body`},N={class:`mb-5`},P={class:`row`},F={class:`card-body`},I={class:`card-title`},L={class:`card-text`},R={class:`code-block`},z={class:`d-flex justify-content-between align-items-start mb-2`},B={key:0},V={key:1,class:`text-success`},H={class:`code-body`},U={class:`mb-5`},W={class:`row`},G={class:`card h-100 shadow-sm rounded`},K={class:`row g-0`},te={class:`col-4`},q=[`src`],J={class:`col-8`},Y={class:`card-body d-flex flex-column`},X={class:`card-title`},Z={class:`card-text flex-grow-1`},Q={class:`code-block`},ne={class:`d-flex justify-content-between align-items-start mb-2`},re={key:0},ie={key:1,class:`text-success`},ae={class:`code-body`},oe={class:`mb-5`},se={class:`code-block mt-3`},ce={class:`d-flex justify-content-between align-items-start mb-2`},le={key:0},ue={key:1,class:`text-success`},de={class:`code-body`},fe={class:`mb-5`},pe={class:`row`},$={class:`card image-card overflow-hidden rounded shadow-sm`},me=[`src`],he={class:`code-block`},ge={class:`d-flex justify-content-between align-items-start mb-2`},_e={key:0},ve={key:1,class:`text-success`},ye={class:`code-body`};function be(e,i,ee,f,be,xe){let Se=t(`CdnSection`),Ce=t(`PageFooter`);return n(),l(`div`,p,[u(Se),s(`div`,m,[i[22]||=s(`h1`,{class:`mb-4`},`Cards`,-1),s(`section`,h,[i[8]||=s(`h3`,{class:`mb-3`},`Basic Card Grid`,-1),s(`div`,g,[(n(!0),l(o,null,r(f.basicCards,(e,t)=>(n(),l(`div`,{key:`basic-`+t,class:`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`},[s(`div`,_,[s(`img`,{src:e.img,class:`card-img-top`,alt:e.title},null,8,v),s(`div`,y,[s(`h5`,b,a(e.title),1),s(`p`,x,a(e.text),1),i[6]||=s(`button`,{class:`btn btn-warning mt-2 align-self-start`},`Button`,-1)])])]))),128))]),s(`div`,S,[s(`div`,C,[i[7]||=s(`strong`,null,`HTML`,-1),s(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:i[0]||=e=>f.copyCode(f.codeSnippets.basic,`basic`)},[f.copiedId===`basic`?(n(),l(`span`,T,`Copied!`)):(n(),l(`span`,w,`Copy`))])]),s(`pre`,E,[s(`code`,null,a(f.codeSnippets.basic),1)])])]),i[23]||=s(`hr`,null,null,-1),s(`section`,D,[i[10]||=s(`h3`,{class:`mb-3`},`Header / Footer / Overlay / List / Tabs`,-1),i[11]||=s(`div`,{class:`row`},[s(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[s(`div`,{class:`card h-100 shadow-sm rounded`},[s(`div`,{class:`card-header`},`Featured`),s(`div`,{class:`card-body d-flex flex-column`},[s(`h5`,{class:`card-title`},`Special title treatment`),s(`p`,{class:`card-text flex-grow-1`},`Supporting text below as a natural lead-in to additional content.`),s(`button`,{class:`btn btn-warning mt-2 align-self-start`},`Button`)]),s(`div`,{class:`card-footer text-muted`},`2 days ago`)])]),s(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[s(`div`,{class:`card text-white h-100 shadow-sm rounded overflow-hidden`},[s(`img`,{src:`https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-3.jpg`,class:`card-img`,alt:`overlay`}),s(`div`,{class:`card-img-overlay d-flex flex-column justify-content-end p-3 overlay-gradient`},[s(`h5`,{class:`card-title`},`Overlay Title`),s(`p`,{class:`card-text`},`Short overlay description on the image.`),s(`button`,{class:`btn btn-warning btn-sm align-self-start`},`Button`)])])]),s(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[s(`div`,{class:`card h-100 shadow-sm rounded`},[s(`div`,{class:`card-body`},[s(`h5`,{class:`card-title`},`List Group Card`),s(`p`,{class:`card-text`},`Cards can include list groups for structured content.`)]),s(`ul`,{class:`list-group list-group-flush`},[s(`li`,{class:`list-group-item`},`Cras justo odio`),s(`li`,{class:`list-group-item`},`Dapibus ac facilisis in`),s(`li`,{class:`list-group-item`},`Vestibulum at eros`)]),s(`div`,{class:`card-body`},[s(`button`,{class:`btn btn-warning`},`Button`)])])]),s(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[s(`div`,{class:`card h-100 shadow-sm rounded`},[s(`div`,{class:`card-body`},[s(`ul`,{class:`nav nav-tabs mb-3`,role:`tablist`},[s(`li`,{class:`nav-item`,role:`presentation`},[s(`button`,{class:`nav-link active`,"data-bs-toggle":`tab`,"data-bs-target":`#cardTab1`,type:`button`},`Tab 1`)]),s(`li`,{class:`nav-item`,role:`presentation`},[s(`button`,{class:`nav-link`,"data-bs-toggle":`tab`,"data-bs-target":`#cardTab2`,type:`button`},`Tab 2`)])]),s(`div`,{class:`tab-content`},[s(`div`,{class:`tab-pane fade show active`,id:`cardTab1`},[s(`h5`,{class:`card-title`},`Tab 1 Content`),s(`p`,{class:`card-text`},`Content for the first tab.`)]),s(`div`,{class:`tab-pane fade`,id:`cardTab2`},[s(`h5`,{class:`card-title`},`Tab 2 Content`),s(`p`,{class:`card-text`},`Content for the second tab.`)])])])])])],-1),s(`div`,O,[s(`div`,k,[i[9]||=s(`strong`,null,`HTML`,-1),s(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:i[1]||=e=>f.copyCode(f.codeSnippets.advanced,`advanced`)},[f.copiedId===`advanced`?(n(),l(`span`,j,`Copied!`)):(n(),l(`span`,A,`Copy`))])]),s(`pre`,M,[s(`code`,null,a(f.codeSnippets.advanced),1)])])]),i[24]||=s(`hr`,null,null,-1),s(`section`,N,[i[14]||=s(`h3`,{class:`mb-3`},`Colored Cards`,-1),s(`div`,P,[(n(!0),l(o,null,r(f.colored,(e,t)=>(n(),l(`div`,{key:`col-`+t,class:`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`},[s(`div`,{class:c([`card`,`h-100`,`shadow-sm`,`rounded`,e.bg,`text-white`])},[s(`div`,F,[s(`h5`,I,a(e.title),1),s(`p`,L,a(e.text),1),i[12]||=s(`button`,{class:`btn btn-light btn-sm`},`Action`,-1)])],2)]))),128))]),s(`div`,R,[s(`div`,z,[i[13]||=s(`strong`,null,`HTML`,-1),s(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:i[2]||=e=>f.copyCode(f.codeSnippets.colored,`colored`)},[f.copiedId===`colored`?(n(),l(`span`,V,`Copied!`)):(n(),l(`span`,B,`Copy`))])]),s(`pre`,H,[s(`code`,null,a(f.codeSnippets.colored),1)])])]),i[25]||=s(`hr`,null,null,-1),s(`section`,U,[i[17]||=s(`h3`,{class:`mb-3`},`Horizontal Cards`,-1),s(`div`,W,[(n(!0),l(o,null,r(f.horizontalCards,(e,t)=>(n(),l(`div`,{key:`h-`+t,class:`col-12 col-md-6 mb-4`},[s(`div`,G,[s(`div`,K,[s(`div`,te,[s(`img`,{src:e.img,class:`img-fluid rounded-start h-100 object-fit-cover`,alt:`...`},null,8,q)]),s(`div`,J,[s(`div`,Y,[s(`h5`,X,a(e.title),1),s(`p`,Z,a(e.text),1),i[15]||=s(`button`,{class:`btn btn-warning align-self-start`},`Button`,-1)])])])])]))),128))]),s(`div`,Q,[s(`div`,ne,[i[16]||=s(`strong`,null,`HTML`,-1),s(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:i[3]||=e=>f.copyCode(f.codeSnippets.horizontal,`horizontal`)},[f.copiedId===`horizontal`?(n(),l(`span`,ie,`Copied!`)):(n(),l(`span`,re,`Copy`))])]),s(`pre`,ae,[s(`code`,null,a(f.codeSnippets.horizontal),1)])])]),i[26]||=s(`hr`,null,null,-1),s(`section`,oe,[i[19]||=d(`<h3 class="mb-3" data-v-afa8425b>Card Groups and Decks</h3><div class="card-group" data-v-afa8425b><div class="card h-100 shadow-sm rounded text-center p-3" data-v-afa8425b><img src="https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-3.jpg" class="card-img-top mb-3 rounded" alt="city" data-v-afa8425b><div class="card-body d-flex flex-column" data-v-afa8425b><h5 class="card-title" data-v-afa8425b>Group Card 1</h5><p class="card-text flex-grow-1" data-v-afa8425b>Wider card with supporting text below as a natural lead-in to additional content.</p><p class="card-text" data-v-afa8425b><small class="text-muted" data-v-afa8425b>Last updated 3 mins ago</small></p></div></div><div class="card h-100 shadow-sm rounded text-center p-3" data-v-afa8425b><img src="https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-4.jpg" class="card-img-top mb-3 rounded" alt="arch" data-v-afa8425b><div class="card-body d-flex flex-column" data-v-afa8425b><h5 class="card-title" data-v-afa8425b>Group Card 2</h5><p class="card-text flex-grow-1" data-v-afa8425b>This card has supporting text below as a natural lead-in to additional content.</p><p class="card-text" data-v-afa8425b><small class="text-muted" data-v-afa8425b>Last updated 5 mins ago</small></p></div></div><div class="card h-100 shadow-sm rounded text-center p-3" data-v-afa8425b><img src="https://techzaa.in/AL-AHMODANY/admin/assets/images/small/img-2.jpg" class="card-img-top mb-3 rounded" alt="interior" data-v-afa8425b><div class="card-body d-flex flex-column" data-v-afa8425b><h5 class="card-title" data-v-afa8425b>Group Card 3</h5><p class="card-text flex-grow-1" data-v-afa8425b>Wider card with supporting text below as a natural lead-in to additional content.</p><p class="card-text" data-v-afa8425b><small class="text-muted" data-v-afa8425b>Last updated 10 mins ago</small></p></div></div></div>`,2),s(`div`,se,[s(`div`,ce,[i[18]||=s(`strong`,null,`HTML`,-1),s(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:i[4]||=e=>f.copyCode(f.codeSnippets.group,`group`)},[f.copiedId===`group`?(n(),l(`span`,ue,`Copied!`)):(n(),l(`span`,le,`Copy`))])]),s(`pre`,de,[s(`code`,null,a(f.codeSnippets.group),1)])])]),i[27]||=s(`hr`,null,null,-1),s(`section`,fe,[i[21]||=s(`h3`,{class:`mb-3`},`Image-only Cards (Hover Zoom)`,-1),s(`div`,pe,[(n(!0),l(o,null,r(f.imageOnly,(e,t)=>(n(),l(`div`,{key:`img-`+t,class:`col-6 col-sm-4 col-md-3 mb-4`},[s(`div`,$,[s(`img`,{src:e,class:`card-img-top zoom-img`,alt:`gallery`},null,8,me)])]))),128))]),s(`div`,he,[s(`div`,ge,[i[20]||=s(`strong`,null,`HTML`,-1),s(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:i[5]||=e=>f.copyCode(f.codeSnippets.imageOnly,`imageOnly`)},[f.copiedId===`imageOnly`?(n(),l(`span`,ve,`Copied!`)):(n(),l(`span`,_e,`Copy`))])]),s(`pre`,ye,[s(`code`,null,a(f.codeSnippets.imageOnly),1)])])])]),u(Ce)])}var xe=ee(f,[[`render`,be],[`__scopeId`,`data-v-afa8425b`]]);export{xe as default};