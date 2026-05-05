import{H as e,M as t,P as n,Y as r,_ as i,b as a,f as o,h as s,n as c,q as l,t as u,v as d,x as f,y as p,z as m}from"./_plugin-vue_export-helper-CLHCuJKU.js";var h={class:`cdn-banner`},g={class:`cdn-banner__inner`},_={class:`cdn-banner__actions`},v=[`aria-expanded`],y={key:0,class:`cdn-banner__code-wrap`},b={class:`cdn-banner__tabs`},x=[`onClick`],S={class:`cdn-banner__code-block`},C={class:`cdn-banner__code-bar`},w={class:`cdn-banner__pre`},T=u({__name:`CdnSection`,props:{baseUrl:{type:String,default:`/cdn`}},setup(u){let T=u,E=e(!1),D=e(!1),O=e(!1),k=e(`snippet`),A=[{id:`snippet`,label:`CDN Links only`},{id:`full`,label:`Full page example`}],j=`<!-- ① Bootstrap 5.3 — grid, utilities, components (REQUIRED) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

<!-- ② Bootstrap Icons 1.13 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" />

<!-- ③ Boxicons 2.1 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" />

<!-- ④ Swiper 12 (only needed for carousel/slider pages) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />

<!-- ⑤ SimpleBar 6 (only needed for custom scrollbar pages) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar@6/dist/simplebar.css" />

<!-- ⑥ Toastify (only needed for toast notification pages) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.css" />

<!-- ⑦ AL-AHMODANY theme + overrides — MUST be last -->
<link rel="stylesheet" href="${T.baseUrl}/library.css" />

<!-- ⑧ Bootstrap JS bundle (dropdowns, modals, tooltips, etc.) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"><\/script>

<!-- ⑨ AL-AHMODANY JS (copy buttons, theme toggle, scroll spy) -->
<script src="${T.baseUrl}/library.js" defer><\/script>`,M=`<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Page</title>

  <!-- ① Bootstrap 5.3 CSS — REQUIRED, must come first -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

  <!-- ② Bootstrap Icons 1.13 -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" />

  <!-- ③ Boxicons 2.1 -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" />

  <!-- ④–⑥ Optional plugins (remove if unused) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar@6/dist/simplebar.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.css" />

  <!-- ⑦ AL-AHMODANY theme — MUST be last -->
  <link rel="stylesheet" href="${T.baseUrl}/library.css" />
</head>

<body data-menu="dark" data-topbar="light">

  <div class="container py-4">

    <!-- Page title -->
    <h4 class="fw-bold text-uppercase mb-1">Buttons</h4>
    <p class="text-muted mb-4">Bootstrap style button examples.</p>

    <!-- Component card — same structure as Larkon -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title mb-1">Default Buttons</h5>
        <p class="text-muted">Use the button classes on a &lt;button&gt; element.</p>

        <!-- Live demo -->
        <div class="mb-3">
          <button type="button" class="btn btn-primary me-1">Primary</button>
          <button type="button" class="btn btn-secondary me-1">Secondary</button>
          <button type="button" class="btn btn-success me-1">Success</button>
          <button type="button" class="btn btn-danger me-1">Danger</button>
          <button type="button" class="btn btn-warning me-1">Warning</button>
          <button type="button" class="btn btn-info me-1">Info</button>
          <button type="button" class="btn btn-dark me-1">Dark</button>
          <button type="button" class="btn btn-purple me-1">Purple</button>
          <button type="button" class="btn btn-pink me-1">Pink</button>
          <button type="button" class="btn btn-orange me-1">Orange</button>
          <button type="button" class="btn btn-light me-1">Light</button>
          <button type="button" class="btn btn-link">Link</button>
        </div>

        <!-- Code block -->
        <div class="lk-code-block">
          <div class="lk-code-bar">
            <span class="lk-code-badge">HTML</span>
            <button class="lk-copy-btn" data-copy-btn>Copy</button>
          </div>
          <pre class="lk-code-body">&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-secondary"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-dark"&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-purple"&gt;Purple&lt;/button&gt;
&lt;button type="button" class="btn btn-pink"&gt;Pink&lt;/button&gt;
&lt;button type="button" class="btn btn-orange"&gt;Orange&lt;/button&gt;
&lt;button type="button" class="btn btn-light"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-link"&gt;Link&lt;/button&gt;</pre>
        </div>
      </div>
    </div>

  </div>

  <!-- ⑧ Bootstrap JS bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"><\/script>

  <!-- ⑨ AL-AHMODANY JS -->
  <script src="${T.baseUrl}/library.js" defer><\/script>

</body>
</html>`;function N(){F(j,D)}function P(){F(k.value===`snippet`?j:M,O)}function F(e,t){navigator.clipboard.writeText(e).then(()=>{t.value=!0,setTimeout(()=>{t.value=!1},2e3)}).catch(()=>{let n=document.createElement(`textarea`);n.value=e,n.style.cssText=`position:fixed;top:-9999px;left:-9999px;opacity:0`,document.body.appendChild(n),n.focus(),n.select(),document.execCommand(`copy`),document.body.removeChild(n),t.value=!0,setTimeout(()=>{t.value=!1},2e3)})}return(e,u)=>(t(),d(`div`,h,[s(`div`,g,[u[1]||=p(`<div class="cdn-banner__left" data-v-8809182a><span class="cdn-banner__icon" data-v-8809182a><i class="bx bx-link-alt" data-v-8809182a></i></span><div class="cdn-banner__text" data-v-8809182a><span class="cdn-banner__label" data-v-8809182a>Use via CDN</span><span class="cdn-banner__desc" data-v-8809182a> Add these to your <code data-v-8809182a>&lt;head&gt;</code> — same load order as the app </span></div></div>`,1),s(`div`,_,[s(`button`,{class:l([`cdn-banner__copy-btn`,{copied:D.value}]),onClick:N},[s(`i`,{class:l(D.value?`bx bx-check`:`bx bx-copy`)},null,2),a(` `+r(D.value?`Copied!`:`Copy CDN links`),1)],2),s(`button`,{class:`cdn-banner__toggle`,onClick:u[0]||=e=>E.value=!E.value,"aria-expanded":E.value},[s(`i`,{class:l(E.value?`bx bx-chevron-up`:`bx bx-chevron-down`)},null,2)],8,v)])]),f(c,{name:`cdn-expand`},{default:m(()=>[E.value?(t(),d(`div`,y,[s(`div`,b,[(t(),d(o,null,n(A,e=>s(`button`,{key:e.id,class:l([`cdn-banner__tab`,{active:k.value===e.id}]),onClick:t=>k.value=e.id},r(e.label),11,x)),64))]),s(`div`,S,[s(`div`,C,[u[2]||=s(`span`,{class:`cdn-banner__code-lang`},`HTML`,-1),s(`button`,{class:l([`cdn-banner__code-copy`,{copied:O.value}]),onClick:P},[s(`i`,{class:l(O.value?`bx bx-check`:`bx bx-copy`)},null,2),a(` `+r(O.value?`Copied!`:`Copy`),1)],2)]),s(`pre`,w,[s(`code`,null,r(k.value===`snippet`?j:M),1)])]),u[3]||=s(`p`,{class:`cdn-banner__note`},[s(`i`,{class:`bx bx-info-circle`}),s(`strong`,null,`Load order matters`),a(` — Bootstrap first, `),s(`code`,null,`library.css`),a(` last. Swiper, SimpleBar and Toastify are optional; only include them for pages that use those components. `)],-1)])):i(``,!0)]),_:1})]))}},[[`__scopeId`,`data-v-8809182a`]]),E={},D={class:`app-footer`};function O(e,n){return t(),d(`footer`,D,[s(`span`,null,[a(r(new Date().getFullYear())+` © AL-AHMODANY. Crafted by `,1),n[0]||=s(`a`,{href:`https://techzaa.in`,target:`_blank`,rel:`noopener`},`Techzaa`,-1)])])}var k=u(E,[[`render`,O],[`__scopeId`,`data-v-ae849181`]]);export{T as n,k as t};