import{H as e,M as t,P as n,Y as r,_ as i,b as a,f as o,h as s,t as c,v as l,x as u}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as d,t as f}from"./Footer-Ck9cRuzL.js";var p={class:`page-wrapper`},m={class:`demo-title`},h={key:0,class:`demo-desc`},g=[`innerHTML`],_={class:`code-block mt-3`},v={class:`code-bar`},y=[`onClick`],b={class:`code-body`},x=c({__name:`CheckboxRadio`,setup(c){let x=e(``);function S(e,t){navigator.clipboard.writeText(t).catch(()=>{}),x.value=e,setTimeout(()=>{x.value=``},2e3)}let C=[{id:`checkboxes`,title:`Default Checkboxes`,desc:`Browser default checkboxes improved with Bootstrap custom styles.`,preview:`<div class="d-flex flex-wrap gap-4">
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c1" checked /><label class="form-check-label" for="c1">Default checkbox (checked)</label></div>
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c2" /><label class="form-check-label" for="c2">Default checkbox</label></div>
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c3" disabled /><label class="form-check-label" for="c3">Disabled checkbox</label></div>
      <div class="form-check"><input class="form-check-input" type="checkbox" id="c4" checked disabled /><label class="form-check-label" for="c4">Disabled checked</label></div>
    </div>`,code:`<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1" checked />
  <label class="form-check-label" for="check1">Default checkbox (checked)</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check2" />
  <label class="form-check-label" for="check2">Default checkbox</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check3" disabled />
  <label class="form-check-label" for="check3">Disabled checkbox</label>
</div>`},{id:`inline-checks`,title:`Inline Checkboxes`,desc:`Group checkboxes on the same horizontal row with .form-check-inline.`,preview:`<div class="d-flex flex-wrap gap-3">
      <div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="ic1" checked /><label class="form-check-label" for="ic1">Option 1</label></div>
      <div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="ic2" /><label class="form-check-label" for="ic2">Option 2</label></div>
      <div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="ic3" /><label class="form-check-label" for="ic3">Option 3</label></div>
    </div>`,code:`<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheck1" checked />
  <label class="form-check-label" for="inlineCheck1">Option 1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheck2" />
  <label class="form-check-label" for="inlineCheck2">Option 2</label>
</div>`},{id:`radios`,title:`Default Radio Buttons`,desc:`For selecting one option from a set.`,preview:`<div class="d-flex flex-wrap gap-4">
      <div class="form-check"><input class="form-check-input" type="radio" name="r1" id="r1" checked /><label class="form-check-label" for="r1">Option 1</label></div>
      <div class="form-check"><input class="form-check-input" type="radio" name="r1" id="r2" /><label class="form-check-label" for="r2">Option 2</label></div>
      <div class="form-check"><input class="form-check-input" type="radio" name="r1" id="r3" /><label class="form-check-label" for="r3">Option 3</label></div>
      <div class="form-check"><input class="form-check-input" type="radio" name="r2" id="r4" disabled /><label class="form-check-label" for="r4">Disabled radio</label></div>
    </div>`,code:`<div class="form-check">
  <input class="form-check-input" type="radio" name="radioGroup" id="radio1" checked />
  <label class="form-check-label" for="radio1">Option 1</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioGroup" id="radio2" />
  <label class="form-check-label" for="radio2">Option 2</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioGroup" id="radio3" disabled />
  <label class="form-check-label" for="radio3">Disabled radio</label>
</div>`},{id:`switches`,title:`Toggle Switches`,desc:`A switch has the markup of a custom checkbox but uses the .form-switch class.`,preview:`<div class="d-flex flex-wrap gap-4">
      <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="sw1" checked /><label class="form-check-label" for="sw1">Enabled (checked)</label></div>
      <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="sw2" /><label class="form-check-label" for="sw2">Enabled (unchecked)</label></div>
      <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="sw3" disabled /><label class="form-check-label" for="sw3">Disabled switch</label></div>
    </div>`,code:`<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1" checked />
  <label class="form-check-label" for="switch1">Enabled (checked)</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch2" />
  <label class="form-check-label" for="switch2">Enabled (unchecked)</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch3" disabled />
  <label class="form-check-label" for="switch3">Disabled switch</label>
</div>`},{id:`btn-checks`,title:`Button-style Checkboxes`,desc:`Create button-like checkboxes and radio buttons using .btn-check.`,preview:`<div class="btn-group" role="group">
      <input type="checkbox" class="btn-check" id="bc1" checked /><label class="btn btn-outline-primary" for="bc1">Checkbox 1</label>
      <input type="checkbox" class="btn-check" id="bc2" /><label class="btn btn-outline-primary" for="bc2">Checkbox 2</label>
      <input type="checkbox" class="btn-check" id="bc3" /><label class="btn btn-outline-primary" for="bc3">Checkbox 3</label>
    </div>`,code:`<div class="btn-group" role="group">
  <input type="checkbox" class="btn-check" id="btncheck1" checked />
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" />
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" />
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>`},{id:`btn-radios`,title:`Button-style Radio Buttons`,desc:`Radio buttons can also be styled as buttons using .btn-check.`,preview:`<div class="btn-group" role="group">
      <input type="radio" class="btn-check" name="br" id="br1" checked /><label class="btn btn-outline-primary" for="br1">Radio 1</label>
      <input type="radio" class="btn-check" name="br" id="br2" /><label class="btn btn-outline-primary" for="br2">Radio 2</label>
      <input type="radio" class="btn-check" name="br" id="br3" /><label class="btn btn-outline-primary" for="br3">Radio 3</label>
    </div>`,code:`<div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>`}];return(e,c)=>(t(),l(`div`,p,[u(d),c[2]||=s(`div`,{class:`page-header`},[s(`h4`,{class:`page-title`},`Checkbox & Radio`),s(`p`,{class:`page-subtitle`},`Bootstrap 5 checkbox, radio, and toggle switch components.`)],-1),(t(),l(o,null,n(C,e=>s(`div`,{key:e.id,class:`demo-card`},[s(`h6`,m,r(e.title),1),e.desc?(t(),l(`p`,h,r(e.desc),1)):i(``,!0),s(`div`,{class:`demo-box`,innerHTML:e.preview},null,8,g),s(`div`,_,[s(`div`,v,[c[1]||=s(`span`,{class:`code-badge`},`HTML`,-1),s(`button`,{class:`copy-btn`,onClick:t=>S(e.id,e.code)},[c[0]||=s(`i`,{class:`bi bi-clipboard me-1`},null,-1),a(r(x.value===e.id?`Copied!`:`Copy`),1)],8,y)]),s(`pre`,b,[s(`code`,null,r(e.code),1)])])])),64)),u(f)]))}},[[`__scopeId`,`data-v-59796640`]]);export{x as default};