import{B as e,H as t,M as n,P as r,Y as i,_ as a,b as o,f as s,h as c,l,t as u,v as d,x as f}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as p,t as m}from"./Footer-Ck9cRuzL.js";var h={class:`page-wrapper`},g={class:`demo-title`},_={key:0,class:`demo-desc`},v=[`innerHTML`],y={class:`code-block mt-3`},b={class:`code-bar`},x=[`onClick`],S={class:`code-body`},C={class:`demo-card`},w={class:`demo-box`},T={class:`row g-3`},E={class:`col-12 col-md-6`},D={class:`form-label`},O={class:`text-muted`},k={class:`code-block mt-3`},A={class:`code-bar`},j=`<input type="range" class="form-range" min="0" max="100" />
<input type="range" class="form-range" min="0" max="100" step="10" />`,M=u({__name:`BasicElements`,setup(u){let M=t(50),N=t(``);function P(e,t){navigator.clipboard.writeText(t).catch(()=>{}),N.value=e,setTimeout(()=>{N.value=``},2e3)}let F=[{id:`text-inputs`,title:`Text Inputs`,desc:`Standard text input controls with various states.`,preview:`<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default Input</label><input type="text" class="form-control" placeholder="Enter text..." /></div>
      <div class="col-12 col-md-6"><label class="form-label">With Helper Text</label><input type="text" class="form-control" placeholder="username@example.com" /><div class="form-text">We'll never share your email.</div></div>
      <div class="col-12 col-md-6"><label class="form-label">Disabled</label><input type="text" class="form-control" placeholder="Disabled input" disabled /></div>
      <div class="col-12 col-md-6"><label class="form-label">Read Only</label><input type="text" class="form-control" value="Read-only value" readonly /></div>
    </div>`,code:`<input type="text" class="form-control" placeholder="Enter text..." />

<!-- With helper text -->
<input type="text" class="form-control" placeholder="username@example.com" />
<div class="form-text">We'll never share your email.</div>

<!-- Disabled -->
<input type="text" class="form-control" placeholder="Disabled input" disabled />

<!-- Read only -->
<input type="text" class="form-control" value="Read-only value" readonly />`},{id:`sizing`,title:`Input Sizing`,desc:`Use .form-control-lg and .form-control-sm for different sizes.`,preview:`<div class="d-flex flex-column gap-3">
      <input type="text" class="form-control form-control-lg" placeholder="Large input (.form-control-lg)" />
      <input type="text" class="form-control" placeholder="Default input" />
      <input type="text" class="form-control form-control-sm" placeholder="Small input (.form-control-sm)" />
    </div>`,code:`<input type="text" class="form-control form-control-lg" placeholder="Large input" />
<input type="text" class="form-control" placeholder="Default input" />
<input type="text" class="form-control form-control-sm" placeholder="Small input" />`},{id:`select`,title:`Select`,desc:`Use the form-select class for custom select menus.`,preview:`<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default Select</label><select class="form-select"><option selected>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div>
      <div class="col-12 col-md-6"><label class="form-label">Multiple Select</label><select class="form-select" multiple><option>One</option><option>Two</option><option>Three</option></select></div>
    </div>`,code:`<!-- Default select -->
<select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Multiple select -->
<select class="form-select" multiple>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>`},{id:`textarea`,title:`Textarea`,desc:`Use rows attribute to control the height of the textarea.`,preview:`<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default Textarea</label><textarea class="form-control" rows="4" placeholder="Enter your message..."></textarea></div>
      <div class="col-12 col-md-6"><label class="form-label">Disabled Textarea</label><textarea class="form-control" rows="4" placeholder="Disabled..." disabled></textarea></div>
    </div>`,code:`<textarea class="form-control" rows="4" placeholder="Enter your message..."></textarea>

<!-- Disabled -->
<textarea class="form-control" rows="4" disabled></textarea>`},{id:`input-groups`,title:`Input Groups`,desc:`Extend form controls by adding text, buttons, or button groups on either side.`,preview:`<div class="d-flex flex-column gap-3">
      <div class="input-group"><span class="input-group-text">@</span><input type="text" class="form-control" placeholder="Username" /></div>
      <div class="input-group"><input type="text" class="form-control" placeholder="Recipient's username" /><span class="input-group-text">@example.com</span></div>
      <div class="input-group"><span class="input-group-text">$</span><input type="number" class="form-control" placeholder="Amount" /><span class="input-group-text">.00</span></div>
      <div class="input-group"><button class="btn btn-outline-secondary" type="button">Button</button><input type="text" class="form-control" placeholder="Search..." /><button class="btn btn-primary" type="button">Go</button></div>
    </div>`,code:`<!-- Prepend text -->
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username" />
</div>

<!-- Append text -->
<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" />
  <span class="input-group-text">@example.com</span>
</div>

<!-- Both sides -->
<div class="input-group">
  <span class="input-group-text">$</span>
  <input type="number" class="form-control" placeholder="Amount" />
  <span class="input-group-text">.00</span>
</div>

<!-- With buttons -->
<div class="input-group">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control" placeholder="Search..." />
  <button class="btn btn-primary" type="button">Go</button>
</div>`},{id:`validation`,title:`Validation States`,desc:`Use .is-valid and .is-invalid to show validation feedback.`,preview:`<div class="row g-3">
      <div class="col-12 col-md-4"><label class="form-label">Valid Input</label><input type="text" class="form-control is-valid" value="Looks good!" /><div class="valid-feedback">Looks good!</div></div>
      <div class="col-12 col-md-4"><label class="form-label">Invalid Input</label><input type="text" class="form-control is-invalid" value="Wrong value" /><div class="invalid-feedback">Please provide a valid value.</div></div>
    </div>`,code:`<!-- Valid -->
<input type="text" class="form-control is-valid" value="Looks good!" />
<div class="valid-feedback">Looks good!</div>

<!-- Invalid -->
<input type="text" class="form-control is-invalid" value="Wrong value" />
<div class="invalid-feedback">Please provide a valid value.</div>`},{id:`file`,title:`File Input`,desc:`Use the form-control class on input[type="file"] for consistent styling.`,preview:`<div class="row g-3">
      <div class="col-12 col-md-6"><label class="form-label">Default File Input</label><input class="form-control" type="file" /></div>
      <div class="col-12 col-md-6"><label class="form-label">Multiple Files</label><input class="form-control" type="file" multiple /></div>
    </div>`,code:`<input class="form-control" type="file" />

<!-- Multiple files -->
<input class="form-control" type="file" multiple />`}];return(t,u)=>(n(),d(`div`,h,[f(p),u[9]||=c(`div`,{class:`page-header`},[c(`h4`,{class:`page-title`},`Basic Elements`),c(`p`,{class:`page-subtitle`},`Standard HTML form controls styled with Bootstrap 5.`)],-1),(n(),d(s,null,r(F,e=>c(`div`,{key:e.id,class:`demo-card`},[c(`h6`,g,i(e.title),1),e.desc?(n(),d(`p`,_,i(e.desc),1)):a(``,!0),c(`div`,{class:`demo-box`,innerHTML:e.preview},null,8,v),c(`div`,y,[c(`div`,b,[u[3]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:t=>P(e.id,e.code)},[u[2]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),o(i(N.value===e.id?`Copied!`:`Copy`),1)],8,x)]),c(`pre`,S,[c(`code`,null,i(e.code),1)])])])),64)),c(`div`,C,[u[8]||=c(`h6`,{class:`demo-title`},`Range`,-1),c(`div`,w,[c(`div`,T,[c(`div`,E,[c(`label`,D,[u[4]||=o(`Default Range `,-1),c(`span`,O,`(`+i(M.value)+`)`,1)]),e(c(`input`,{type:`range`,class:`form-range`,"onUpdate:modelValue":u[0]||=e=>M.value=e,min:`0`,max:`100`},null,512),[[l,M.value]])]),u[5]||=c(`div`,{class:`col-12 col-md-6`},[c(`label`,{class:`form-label`},`Stepped Range`),c(`input`,{type:`range`,class:`form-range`,min:`0`,max:`100`,step:`10`})],-1)])]),c(`div`,k,[c(`div`,A,[u[7]||=c(`span`,{class:`code-badge`},`HTML`,-1),c(`button`,{class:`copy-btn`,onClick:u[1]||=e=>P(`range`,j)},[u[6]||=c(`i`,{class:`bi bi-clipboard me-1`},null,-1),o(i(N.value===`range`?`Copied!`:`Copy`),1)])]),c(`pre`,{class:`code-body`},[c(`code`,null,i(j))])])]),f(m)]))}},[[`__scopeId`,`data-v-32de7588`]]);export{M as default};