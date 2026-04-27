import{A as e,B as t,O as n,V as r,c as i,d as a,dt as o,i as s,p as c,pt as l,t as ee}from"./_plugin-vue_export-helper-Ct9996Xc.js";var u={name:`Cards`,setup(){let e=[{img:`https://techzaa.in/larkon/admin/assets/images/small/img-1.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`},{img:`https://techzaa.in/larkon/admin/assets/images/small/img-2.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`},{img:`https://techzaa.in/larkon/admin/assets/images/small/img-4.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`},{img:`https://techzaa.in/larkon/admin/assets/images/small/img-5.jpg`,title:`Card title`,text:`Some quick example text to build on the card title and make up the bulk of the card's content.`}],n=[{bg:`bg-success`,title:`Success`,text:`Positive message`},{bg:`bg-warning`,title:`Warning`,text:`Cautionary message`},{bg:`bg-danger`,title:`Danger`,text:`Critical message`},{bg:`bg-info`,title:`Info`,text:`Informational message`}],i=[{img:`https://techzaa.in/larkon/admin/assets/images/small/img-4.jpg`,title:`Horizontal card`,text:`A short description for the horizontal card.`},{img:`https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg`,title:`Horizontal card`,text:`A short description for the horizontal card.`}],a=[`https://i.pinimg.com/1200x/cb/66/eb/cb66eb24a429800827e66b260c427652.jpg`,`https://i.pinimg.com/736x/d9/f3/fc/d9f3fc6990b4b4c204e79a14279c0fe8.jpg`,`https://i.pinimg.com/1200x/ac/06/2a/ac062aed79bf1e927e91bdc5cd67a633.jpg`,`https://i.pinimg.com/736x/01/31/90/013190c96e79d5685e1856e83b1da12f.jpg`,`https://i.pinimg.com/1200x/45/99/dc/4599dc8d3025c121c5cfc451487a98fe.jpg`,`https://i.pinimg.com/1200x/33/54/83/335483d19426078a195ac88b813759bb.jpg`,`https://i.pinimg.com/1200x/02/96/0c/02960c95e8f17a63e483de27a6572a91.jpg`,`https://i.pinimg.com/1200x/e7/79/12/e77912db441ea233654d7241d4b2d531.jpg`],o=t({basic:`<div class="row">
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
</div>`}),s=r(null);return{basicCards:e,colored:n,horizontalCards:i,imageOnly:a,codeSnippets:o,copyCode:async(e,t)=>{try{await navigator.clipboard.writeText(e),s.value=t,setTimeout(()=>{s.value===t&&(s.value=null)},1600)}catch{try{let n=document.createElement(`textarea`);n.value=e,n.style.position=`fixed`,n.style.left=`-9999px`,document.body.appendChild(n),n.select(),document.execCommand(`copy`),document.body.removeChild(n),s.value=t,setTimeout(()=>{s.value===t&&(s.value=null)},1600)}catch(e){console.error(`Copy failed`,e)}}},copiedId:s}}},d={class:`cards-page min-vh-100 py-5 bg-light`},f={class:`container`},p={class:`mb-5`},m={class:`row`},h={class:`card h-100 shadow-sm rounded`},g=[`src`,`alt`],_={class:`card-body d-flex flex-column`},v={class:`card-title`},y={class:`card-text flex-grow-1`},b={class:`code-preview p-3 bg-white shadow-sm rounded`},x={class:`d-flex justify-content-between align-items-start mb-2`},S={key:0},C={key:1,class:`text-success`},w={class:`mb-0`},T={class:`mb-5`},E={class:`code-preview p-3 bg-white shadow-sm rounded`},D={class:`d-flex justify-content-between align-items-start mb-2`},O={key:0},k={key:1,class:`text-success`},A={class:`mb-0`},j={class:`mb-5`},M={class:`row`},N={class:`card-body`},P={class:`card-title`},F={class:`card-text`},I={class:`code-preview p-3 bg-white shadow-sm rounded`},L={class:`d-flex justify-content-between align-items-start mb-2`},te={key:0},R={key:1,class:`text-success`},z={class:`mb-0`},B={class:`mb-5`},V={class:`row`},H={class:`card h-100 shadow-sm rounded`},U={class:`row g-0`},W={class:`col-4`},G=[`src`],K={class:`col-8`},q={class:`card-body d-flex flex-column`},J={class:`card-title`},Y={class:`card-text flex-grow-1`},X={class:`code-preview p-3 bg-white shadow-sm rounded`},Z={class:`d-flex justify-content-between align-items-start mb-2`},Q={key:0},ne={key:1,class:`text-success`},re={class:`mb-0`},ie={class:`mb-5`},ae={class:`code-preview mt-3 p-3 bg-white shadow-sm rounded`},oe={class:`d-flex justify-content-between align-items-start mb-2`},se={key:0},ce={key:1,class:`text-success`},le={class:`mb-0`},ue={class:`mb-5`},de={class:`row`},fe={class:`card image-card overflow-hidden rounded shadow-sm`},pe=[`src`],$={class:`code-preview p-3 bg-white shadow-sm rounded`},me={class:`d-flex justify-content-between align-items-start mb-2`},he={key:0},ge={key:1,class:`text-success`},_e={class:`mb-0`};function ve(t,r,ee,u,ve,ye){return n(),a(`div`,d,[i(`div`,f,[r[22]||=i(`h1`,{class:`mb-4`},`Cards`,-1),i(`section`,p,[r[8]||=i(`h3`,{class:`mb-3`},`Basic Card Grid`,-1),i(`div`,m,[(n(!0),a(s,null,e(u.basicCards,(e,t)=>(n(),a(`div`,{key:`basic-`+t,class:`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`},[i(`div`,h,[i(`img`,{src:e.img,class:`card-img-top`,alt:e.title},null,8,g),i(`div`,_,[i(`h5`,v,l(e.title),1),i(`p`,y,l(e.text),1),r[6]||=i(`button`,{class:`btn btn-warning mt-2 align-self-start`},`Button`,-1)])])]))),128))]),i(`div`,b,[i(`div`,x,[r[7]||=i(`strong`,null,`HTML`,-1),i(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:r[0]||=e=>u.copyCode(u.codeSnippets.basic,`basic`)},[u.copiedId===`basic`?(n(),a(`span`,C,`Copied!`)):(n(),a(`span`,S,`Copy`))])]),i(`pre`,w,[i(`code`,null,l(u.codeSnippets.basic),1)])])]),r[23]||=i(`hr`,null,null,-1),i(`section`,T,[r[10]||=i(`h3`,{class:`mb-3`},`Header / Footer / Overlay / List / Tabs`,-1),r[11]||=i(`div`,{class:`row`},[i(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[i(`div`,{class:`card h-100 shadow-sm rounded`},[i(`div`,{class:`card-header`},`Featured`),i(`div`,{class:`card-body d-flex flex-column`},[i(`h5`,{class:`card-title`},`Special title treatment`),i(`p`,{class:`card-text flex-grow-1`},`Supporting text below as a natural lead-in to additional content.`),i(`button`,{class:`btn btn-warning mt-2 align-self-start`},`Button`)]),i(`div`,{class:`card-footer text-muted`},`2 days ago`)])]),i(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[i(`div`,{class:`card text-white h-100 shadow-sm rounded overflow-hidden`},[i(`img`,{src:`https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg`,class:`card-img`,alt:`overlay`}),i(`div`,{class:`card-img-overlay d-flex flex-column justify-content-end p-3 overlay-gradient`},[i(`h5`,{class:`card-title`},`Overlay Title`),i(`p`,{class:`card-text`},`Short overlay description on the image.`),i(`button`,{class:`btn btn-warning btn-sm align-self-start`},`Button`)])])]),i(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[i(`div`,{class:`card h-100 shadow-sm rounded`},[i(`div`,{class:`card-body`},[i(`h5`,{class:`card-title`},`List Group Card`),i(`p`,{class:`card-text`},`Cards can include list groups for structured content.`)]),i(`ul`,{class:`list-group list-group-flush`},[i(`li`,{class:`list-group-item`},`Cras justo odio`),i(`li`,{class:`list-group-item`},`Dapibus ac facilisis in`),i(`li`,{class:`list-group-item`},`Vestibulum at eros`)]),i(`div`,{class:`card-body`},[i(`button`,{class:`btn btn-warning`},`Button`)])])]),i(`div`,{class:`col-12 col-md-6 col-lg-3 mb-4`},[i(`div`,{class:`card h-100 shadow-sm rounded`},[i(`div`,{class:`card-body`},[i(`ul`,{class:`nav nav-tabs mb-3`,role:`tablist`},[i(`li`,{class:`nav-item`,role:`presentation`},[i(`button`,{class:`nav-link active`,"data-bs-toggle":`tab`,"data-bs-target":`#cardTab1`,type:`button`},`Tab 1`)]),i(`li`,{class:`nav-item`,role:`presentation`},[i(`button`,{class:`nav-link`,"data-bs-toggle":`tab`,"data-bs-target":`#cardTab2`,type:`button`},`Tab 2`)])]),i(`div`,{class:`tab-content`},[i(`div`,{class:`tab-pane fade show active`,id:`cardTab1`},[i(`h5`,{class:`card-title`},`Tab 1 Content`),i(`p`,{class:`card-text`},`Content for the first tab.`)]),i(`div`,{class:`tab-pane fade`,id:`cardTab2`},[i(`h5`,{class:`card-title`},`Tab 2 Content`),i(`p`,{class:`card-text`},`Content for the second tab.`)])])])])])],-1),i(`div`,E,[i(`div`,D,[r[9]||=i(`strong`,null,`HTML`,-1),i(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:r[1]||=e=>u.copyCode(u.codeSnippets.advanced,`advanced`)},[u.copiedId===`advanced`?(n(),a(`span`,k,`Copied!`)):(n(),a(`span`,O,`Copy`))])]),i(`pre`,A,[i(`code`,null,l(u.codeSnippets.advanced),1)])])]),r[24]||=i(`hr`,null,null,-1),i(`section`,j,[r[14]||=i(`h3`,{class:`mb-3`},`Colored Cards`,-1),i(`div`,M,[(n(!0),a(s,null,e(u.colored,(e,t)=>(n(),a(`div`,{key:`col-`+t,class:`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`},[i(`div`,{class:o([`card`,`h-100`,`shadow-sm`,`rounded`,e.bg,`text-white`])},[i(`div`,N,[i(`h5`,P,l(e.title),1),i(`p`,F,l(e.text),1),r[12]||=i(`button`,{class:`btn btn-light btn-sm`},`Action`,-1)])],2)]))),128))]),i(`div`,I,[i(`div`,L,[r[13]||=i(`strong`,null,`HTML`,-1),i(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:r[2]||=e=>u.copyCode(u.codeSnippets.colored,`colored`)},[u.copiedId===`colored`?(n(),a(`span`,R,`Copied!`)):(n(),a(`span`,te,`Copy`))])]),i(`pre`,z,[i(`code`,null,l(u.codeSnippets.colored),1)])])]),r[25]||=i(`hr`,null,null,-1),i(`section`,B,[r[17]||=i(`h3`,{class:`mb-3`},`Horizontal Cards`,-1),i(`div`,V,[(n(!0),a(s,null,e(u.horizontalCards,(e,t)=>(n(),a(`div`,{key:`h-`+t,class:`col-12 col-md-6 mb-4`},[i(`div`,H,[i(`div`,U,[i(`div`,W,[i(`img`,{src:e.img,class:`img-fluid rounded-start h-100 object-fit-cover`,alt:`...`},null,8,G)]),i(`div`,K,[i(`div`,q,[i(`h5`,J,l(e.title),1),i(`p`,Y,l(e.text),1),r[15]||=i(`button`,{class:`btn btn-warning align-self-start`},`Button`,-1)])])])])]))),128))]),i(`div`,X,[i(`div`,Z,[r[16]||=i(`strong`,null,`HTML`,-1),i(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:r[3]||=e=>u.copyCode(u.codeSnippets.horizontal,`horizontal`)},[u.copiedId===`horizontal`?(n(),a(`span`,ne,`Copied!`)):(n(),a(`span`,Q,`Copy`))])]),i(`pre`,re,[i(`code`,null,l(u.codeSnippets.horizontal),1)])])]),r[26]||=i(`hr`,null,null,-1),i(`section`,ie,[r[19]||=c(`<h3 class="mb-3" data-v-ffe87056>Card Groups and Decks</h3><div class="card-group" data-v-ffe87056><div class="card h-100 shadow-sm rounded text-center p-3" data-v-ffe87056><img src="https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg" class="card-img-top mb-3 rounded" alt="city" data-v-ffe87056><div class="card-body d-flex flex-column" data-v-ffe87056><h5 class="card-title" data-v-ffe87056>Group Card 1</h5><p class="card-text flex-grow-1" data-v-ffe87056>Wider card with supporting text below as a natural lead-in to additional content.</p><p class="card-text" data-v-ffe87056><small class="text-muted" data-v-ffe87056>Last updated 3 mins ago</small></p></div></div><div class="card h-100 shadow-sm rounded text-center p-3" data-v-ffe87056><img src="https://techzaa.in/larkon/admin/assets/images/small/img-4.jpg" class="card-img-top mb-3 rounded" alt="arch" data-v-ffe87056><div class="card-body d-flex flex-column" data-v-ffe87056><h5 class="card-title" data-v-ffe87056>Group Card 2</h5><p class="card-text flex-grow-1" data-v-ffe87056>This card has supporting text below as a natural lead-in to additional content.</p><p class="card-text" data-v-ffe87056><small class="text-muted" data-v-ffe87056>Last updated 5 mins ago</small></p></div></div><div class="card h-100 shadow-sm rounded text-center p-3" data-v-ffe87056><img src="https://techzaa.in/larkon/admin/assets/images/small/img-2.jpg" class="card-img-top mb-3 rounded" alt="interior" data-v-ffe87056><div class="card-body d-flex flex-column" data-v-ffe87056><h5 class="card-title" data-v-ffe87056>Group Card 3</h5><p class="card-text flex-grow-1" data-v-ffe87056>Wider card with supporting text below as a natural lead-in to additional content.</p><p class="card-text" data-v-ffe87056><small class="text-muted" data-v-ffe87056>Last updated 10 mins ago</small></p></div></div></div>`,2),i(`div`,ae,[i(`div`,oe,[r[18]||=i(`strong`,null,`HTML`,-1),i(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:r[4]||=e=>u.copyCode(u.codeSnippets.group,`group`)},[u.copiedId===`group`?(n(),a(`span`,ce,`Copied!`)):(n(),a(`span`,se,`Copy`))])]),i(`pre`,le,[i(`code`,null,l(u.codeSnippets.group),1)])])]),r[27]||=i(`hr`,null,null,-1),i(`section`,ue,[r[21]||=i(`h3`,{class:`mb-3`},`Image-only Cards (Hover Zoom)`,-1),i(`div`,de,[(n(!0),a(s,null,e(u.imageOnly,(e,t)=>(n(),a(`div`,{key:`img-`+t,class:`col-6 col-sm-4 col-md-3 mb-4`},[i(`div`,fe,[i(`img`,{src:e,class:`card-img-top zoom-img`,alt:`gallery`},null,8,pe)])]))),128))]),i(`div`,$,[i(`div`,me,[r[20]||=i(`strong`,null,`HTML`,-1),i(`button`,{class:`btn btn-sm btn-outline-secondary`,onClick:r[5]||=e=>u.copyCode(u.codeSnippets.imageOnly,`imageOnly`)},[u.copiedId===`imageOnly`?(n(),a(`span`,ge,`Copied!`)):(n(),a(`span`,he,`Copy`))])]),i(`pre`,_e,[i(`code`,null,l(u.codeSnippets.imageOnly),1)])])])])])}var ye=ee(u,[[`render`,ve],[`__scopeId`,`data-v-ffe87056`]]);export{ye as default};