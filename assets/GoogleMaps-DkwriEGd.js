import{H as e,M as t,P as n,Y as r,b as i,f as a,h as o,t as s,v as c,x as l,y as u}from"./_plugin-vue_export-helper-CLHCuJKU.js";import{n as d,t as f}from"./Footer-Ck9cRuzL.js";var p={class:`page-wrapper`},m={class:`demo-title`},h={class:`demo-desc`},g={class:`demo-box p-0`},_={class:`map-container`},v=[`src`,`title`],y={class:`code-block mt-3`},b={class:`code-bar`},x=[`onClick`],S={class:`code-body`},C=s({__name:`GoogleMaps`,setup(s){let C=e(``);function w(e,t){navigator.clipboard.writeText(t).catch(()=>{}),C.value=e,setTimeout(()=>{C.value=``},2e3)}let T=[{id:`basic`,title:`Basic Map — New York City`,desc:`A standard embedded Google Map centered on New York City.`,src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s`,code:`<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
  width="100%"
  height="380"
  style="border:0"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`},{id:`satellite`,title:`Satellite View — London`,desc:`Google Maps in satellite view mode showing London from above.`,src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83989591!2d-0.24168120642536!3d51.52877184100512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e1!3m2!1sen!2s!4v1699000000001!5m2!1sen!2s`,code:`<!-- Satellite view: add &maptype=satellite or use 5e1 in the embed URL -->
<iframe
  src="https://www.google.com/maps/embed?pb=...!5e1!..."
  width="100%"
  height="380"
  style="border:0"
  allowfullscreen
  loading="lazy">
</iframe>`},{id:`paris`,title:`Map with Marker — Paris`,desc:`Embedded map centered on the Eiffel Tower with a location marker.`,src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156740873!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2s!4v1699000000002!5m2!1sen!2s`,code:`<!-- Search for a specific place — Google Maps generates the embed URL -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!...!2sEiffel%20Tower!..."
  width="100%"
  height="380"
  style="border:0"
  allowfullscreen
  loading="lazy">
</iframe>

<!-- Vue component wrapper -->
<template>
  <div class="map-wrapper">
    <iframe
      :src="mapSrc"
      width="100%"
      height="380"
      style="border:0"
      allowfullscreen
      loading="lazy"
    />
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
const mapSrc = 'https://www.google.com/maps/embed?pb=...'
<\/script>`}];return(e,s)=>(t(),c(`div`,p,[l(d),s[2]||=u(`<div class="page-header" data-v-45483bf2><h4 class="page-title" data-v-45483bf2>Google Maps</h4><p class="page-subtitle" data-v-45483bf2>Embedded Google Maps with various display modes and configurations.</p></div><div class="alert-info-box mb-4" data-v-45483bf2><i class="bi bi-info-circle-fill me-2" data-v-45483bf2></i> Replace <code data-v-45483bf2>YOUR_API_KEY</code> in the embed URLs with a valid Google Maps API key for production use. </div>`,2),(t(),c(a,null,n(T,e=>o(`div`,{key:e.id,class:`demo-card`},[o(`h6`,m,r(e.title),1),o(`p`,h,r(e.desc),1),o(`div`,g,[o(`div`,_,[o(`iframe`,{src:e.src,width:`100%`,height:`380`,style:{border:`0`,display:`block`},allowfullscreen:``,loading:`lazy`,referrerpolicy:`no-referrer-when-downgrade`,title:e.title},null,8,v)])]),o(`div`,y,[o(`div`,b,[s[1]||=o(`span`,{class:`code-badge`},`HTML`,-1),o(`button`,{class:`copy-btn`,onClick:t=>w(e.id,e.code)},[s[0]||=o(`i`,{class:`bi bi-clipboard me-1`},null,-1),i(r(C.value===e.id?`Copied!`:`Copy`),1)],8,x)]),o(`pre`,S,[o(`code`,null,r(e.code),1)])])])),64)),l(f)]))}},[[`__scopeId`,`data-v-45483bf2`]]);export{C as default};