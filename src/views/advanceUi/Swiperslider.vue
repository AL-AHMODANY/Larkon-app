<template>
  <div class="page-wrapper-adv" style="min-height: 100vh;">
    <div class="container-fluid">

      <!-- Page Title -->
      <div class="mb-4">
        <p class="text-uppercase fw-bold mb-0" style="letter-spacing: 0.12em; font-size: 0.72rem; color: #6c757d;">Swiper Slider</p>
      </div>

      <div class="row g-4">
        <!-- Main Content -->
        <div class="col-lg-9">

          <!-- Overview Card -->
          <div class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="d-flex align-items-start justify-content-between">
                <div>
                  <h6 class="fw-bold mb-1" style="color: #1a1e2c;">Overview</h6>
                  <p class="text-muted mb-2" style="font-size: 0.84rem;">
                    Swiper is the most modern slider with no-jQuery, hardware accelerated transitions and amazing native behavior.
                  </p>
                  <h6 class="fw-bold mb-1" style="color: #1a1e2c;">Usage</h6>
                  <p class="text-muted mb-0" style="font-size: 0.84rem;">
                    Swiper js's CSS and Javascript files are bundled in the
                    <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;">vendor.min.css</a>
                    and
                    <a href="#" class="text-success text-decoration-none fw-semibold" style="font-size:0.83rem;">vendor.js</a>
                    and globally included in all pages.
                  </p>
                </div>
                <a href="https://swiperjs.com" target="_blank" class="btn btn-outline-success btn-sm ms-4 text-nowrap" style="font-size:0.78rem; border-radius:6px;">Official Website</a>
              </div>
            </div>
          </div>

          <!-- Swiper Section Cards -->
          <div
            v-for="(section, index) in sections"
            :key="section.id"
            :id="section.id"
            class="card border-0 shadow-sm rounded-3 mb-4"
          >
            <div class="card-body p-4">
              <h5 class="fw-semibold mb-1" style="font-size: 0.97rem; color: #1a1e2c;">{{ section.title }}</h5>
              <p class="text-muted mb-3" style="font-size: 0.83rem;" v-html="section.description"></p>

              <!-- Live Swiper Preview -->
              <div class="mb-3 rounded-2 overflow-hidden border" style="background:#f8f9fa;">
                <div
                  class="swiper"
                  :ref="el => { if (el) swiperEls[index] = el }"
                  style="width: 100%; height: 220px;"
                >
                  <div class="swiper-wrapper">
                    <div
                      v-for="(slide, si) in section.slides"
                      :key="si"
                      class="swiper-slide"
                    >
                      <img
                        :src="slide.img"
                        :alt="slide.alt"
                        style="width:100%; height:100%; object-fit:cover;"
                      />
                    </div>
                  </div>
                  <!-- Navigation -->
                  <div v-if="section.navigation" class="swiper-button-next" style="color:#fff;"></div>
                  <div v-if="section.navigation" class="swiper-button-prev" style="color:#fff;"></div>
                  <!-- Pagination -->
                  <div
                    v-if="section.pagination"
                    :class="['swiper-pagination', section.paginationType === 'fraction' ? 'swiper-pagination-fraction' : '']"
                  ></div>
                  <!-- Scrollbar -->
                  <div v-if="section.scrollbar" class="swiper-scrollbar"></div>
                </div>
              </div>

              <!-- Code Block -->
              <div class="rounded-3 overflow-hidden border">
                <div class="d-flex align-items-center justify-content-between px-3 py-2" style="background: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                  <div class="d-flex gap-1">
                    <button
                      class="btn btn-sm fw-semibold"
                      :class="activeTab[index] === 'html' ? 'tab-active-html' : 'tab-inactive'"
                      style="font-size: 0.72rem; border-radius: 5px; padding: 0.2rem 0.65rem;"
                      @click="activeTab[index] = 'html'"
                    >HTML</button>
                    <button
                      class="btn btn-sm fw-semibold"
                      :class="activeTab[index] === 'js' ? 'tab-active-js' : 'tab-inactive'"
                      style="font-size: 0.72rem; border-radius: 5px; padding: 0.2rem 0.65rem;"
                      @click="activeTab[index] = 'js'"
                    >JAVASCRIPT</button>
                  </div>
                  <button
                    class="btn btn-sm py-1 px-2"
                    :class="copiedIndex === index ? 'btn-success' : 'btn-outline-secondary'"
                    style="font-size: 0.72rem;"
                    @click="copyCode(index)"
                  >{{ copiedIndex === index ? 'Copied!' : 'Copy' }}</button>
                </div>
                <div style="background: #fff; overflow-x: auto; max-height: 240px;">
                  <pre class="mb-0 px-3 py-3" style="font-size: 0.76rem; color: #c0392b; font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace; line-height: 1.75; white-space: pre;">{{ activeTab[index] === 'html' ? section.htmlCode : section.jsCode }}</pre>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- TOC Sidebar -->
        <div class="col-lg-3 d-none d-lg-block">
          <div class="card border-0 shadow-sm rounded-3" style="position: sticky; top: 1.5rem;">
            <div class="card-body p-3">
              <a
                href="javascript:void(0)"
                class="d-block text-decoration-none py-1 px-3 mb-1 toc-link"
                :class="{ 'toc-active': activeId === 'overview' }"
                style="font-size: 0.82rem; border-radius: 6px;"
                @click="scrollToSection('overview')"
              >Overview</a>
              <a
                v-for="section in sections"
                :key="section.id"
                href="javascript:void(0)"
                class="d-block text-decoration-none py-1 px-3 mb-1 toc-link"
                :class="{ 'toc-active': activeId === section.id }"
                style="font-size: 0.82rem; border-radius: 6px;"
                @click="scrollToSection(section.id)"
              >{{ section.title }}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-5 pb-3">
        <small class="text-muted">2026 © Larkon. Crafted with ❤️ by Techzaa</small>
      </div>

    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import PageFooter from '../../components/layout/Footer.vue'
import { ref, reactive, onMounted, nextTick } from 'vue'

// Swiper must be installed: npm install swiper
import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCreative, EffectFlip, EffectCube, EffectCoverflow, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-creative'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-coverflow'

const activeId = ref('overview')
const copiedIndex = ref(null)
const swiperEls = ref([])
const activeTab = reactive({})

// Slide images using picsum
const imgs = [
  { img: 'https://picsum.photos/seed/sofa1/800/400', alt: 'Slide 1' },
  { img: 'https://picsum.photos/seed/arch1/800/400', alt: 'Slide 2' },
  { img: 'https://picsum.photos/seed/room1/800/400', alt: 'Slide 3' },
  { img: 'https://picsum.photos/seed/lamp1/800/400', alt: 'Slide 4' },
]

const sections = [
  {
    id: 'section-default',
    title: 'Default Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">default-swiper</code> class to set a default swiper.',
    slides: imgs,
    navigation: false,
    pagination: false,
    scrollbar: false,
    paginationType: null,
    swiperConfig: { loop: true, modules: [] },
    htmlCode: `<!-- Default Swiper -->
<div class="swiper default-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
</div>`,
    jsCode: `var swiper = new Swiper(".default-swiper", {
  loop: true,
});`
  },
  {
    id: 'section-navigation',
    title: 'Navigation & Pagination Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">navigation-swiper</code> class to set a swiper with navigation and pagination.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      modules: [Navigation, Pagination],
      navigation: true,
      pagination: { clickable: true },
    },
    htmlCode: `<!-- Navigation & Pagination Swiper -->
<div class="swiper navigation-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".navigation-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-pagination-dynamic',
    title: 'Pagination Dynamic Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">pagination-dynamic-swiper</code> class to set a dynamic swiper with pagination.',
    slides: imgs,
    navigation: false,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      modules: [Pagination],
      pagination: { clickable: true, dynamicBullets: true },
    },
    htmlCode: `<!-- Pagination Dynamic Swiper -->
<div class="swiper pagination-dynamic-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".pagination-dynamic-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});`
  },
  {
    id: 'section-pagination-fraction',
    title: 'Pagination Fraction Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">pagination-fraction-swiper</code> class to set a fraction swiper with pagination.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'fraction',
    swiperConfig: {
      loop: true,
      modules: [Navigation, Pagination],
      navigation: true,
      pagination: { type: 'fraction' },
    },
    htmlCode: `<!-- Pagination Fraction Swiper -->
<div class="swiper pagination-fraction-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".pagination-fraction-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});`
  },
  {
    id: 'section-pagination-custom',
    title: 'Pagination Custom Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">pagination-custom-swiper</code> class to set a swiper with custom pagination.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      modules: [Navigation, Pagination],
      navigation: true,
      pagination: { clickable: true },
    },
    htmlCode: `<!-- Pagination Custom Swiper -->
<div class="swiper pagination-custom-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".pagination-custom-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderCustom: function (swiper, current, total) {
      return current + " of " + total;
    },
  },
});`
  },
  {
    id: 'section-pagination-progress',
    title: 'Pagination Progress Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">pagination-progress-swiper</code> class to set a swiper with progress pagination.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'progressbar',
    swiperConfig: {
      loop: true,
      modules: [Navigation, Pagination],
      navigation: true,
      pagination: { type: 'progressbar' },
    },
    htmlCode: `<!-- Pagination Progress Swiper -->
<div class="swiper pagination-progress-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".pagination-progress-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});`
  },
  {
    id: 'section-scrollbar',
    title: 'Pagination Scrollbar Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">pagination-scrollbar-swiper</code> class to set a swiper with scrollbar pagination.',
    slides: imgs,
    navigation: false,
    pagination: false,
    scrollbar: true,
    paginationType: null,
    swiperConfig: {
      loop: true,
      modules: [Scrollbar],
      scrollbar: { draggable: true },
    },
    htmlCode: `<!-- Scrollbar Swiper -->
<div class="swiper pagination-scrollbar-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-scrollbar"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".pagination-scrollbar-swiper", {
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});`
  },
  {
    id: 'section-vertical',
    title: 'Vertical Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">vertical-swiper</code> class to set a vertical swiper.',
    slides: imgs,
    navigation: false,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      direction: 'vertical',
      loop: true,
      modules: [Pagination],
      pagination: { clickable: true },
    },
    htmlCode: `<!-- Vertical Swiper -->
<div class="swiper vertical-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".vertical-swiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-mousewheel',
    title: 'Mousewheel Control Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">mousewheel-control-swiper</code> class to set a swiper with mousewheel scroll.',
    slides: imgs,
    navigation: false,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      direction: 'vertical',
      loop: true,
      modules: [Mousewheel, Pagination],
      mousewheel: true,
      pagination: { clickable: true },
    },
    htmlCode: `<!-- Mousewheel Control Swiper -->
<div class="swiper mousewheel-control-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".mousewheel-control-swiper", {
  direction: "vertical",
  loop: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-fade',
    title: 'Effect Fade Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-fade-swiper</code> class to set a swiper with fade effect.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'fade',
      modules: [Navigation, Pagination, EffectFade],
      navigation: true,
      pagination: { clickable: true },
    },
    htmlCode: `<!-- Effect Fade Swiper -->
<div class="swiper effect-fade-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-fade-swiper", {
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-creative',
    title: 'Effect Creative Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-creative-swiper</code> class to set a swiper with creative custom effect.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'creative',
      modules: [Navigation, Pagination, EffectCreative],
      navigation: true,
      pagination: { clickable: true },
      creativeEffect: {
        prev: { shadow: true, translate: [0, 0, -400] },
        next: { translate: ['100%', 0, 0] },
      },
    },
    htmlCode: `<!-- Effect Creative Swiper -->
<div class="swiper effect-creative-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-creative-swiper", {
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: { shadow: true, translate: [0, 0, -400] },
    next: { translate: ["100%", 0, 0] },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-creative-2',
    title: 'Effect Creative Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-creative-swiper</code> class to set a swiper with the creative effect.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'creative',
      modules: [Navigation, Pagination, EffectCreative],
      navigation: true,
      pagination: { clickable: true },
      creativeEffect: {
        prev: { shadow: true, translate: ['-120%', 0, -500] },
        next: { shadow: true, translate: ['120%', 0, -500] },
      },
    },
    htmlCode: `<!-- Effect Creative Swiper 2 -->
<div class="swiper effect-creative-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-creative-swiper", {
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: { shadow: true, translate: ["-120%", 0, -500] },
    next: { shadow: true, translate: ["120%", 0, -500] },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-creative-3',
    title: 'Effect Creative Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-creative-swiper</code> class to set a swiper with the creative effect.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'creative',
      modules: [Navigation, Pagination, EffectCreative],
      navigation: true,
      pagination: { clickable: true },
      creativeEffect: {
        prev: { shadow: true, origin: 'left center', translate: ['-5%', 0, -200], rotate: [0, 100, 0] },
        next: { origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0] },
      },
    },
    htmlCode: `<!-- Effect Creative Swiper 3 -->
<div class="swiper effect-creative-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-creative-swiper", {
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-flip',
    title: 'Effect Flip Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-flip-swiper</code> class to set a swiper with the flip effect.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'flip',
      modules: [Navigation, Pagination, EffectFlip],
      navigation: true,
      pagination: { clickable: true },
      grabCursor: true,
    },
    htmlCode: `<!-- Effect Flip Swiper -->
<div class="swiper effect-flip-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-flip-swiper", {
  loop: true,
  effect: "flip",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-flip-2',
    title: 'Effect Flip Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-flip-swiper</code> class to set a swiper with the flip effect.',
    slides: imgs,
    navigation: true,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'flip',
      modules: [Navigation, Pagination, EffectFlip],
      navigation: true,
      pagination: { clickable: true },
      grabCursor: true,
      flipEffect: { slideShadows: false },
    },
    htmlCode: `<!-- Effect Flip Swiper 2 -->
<div class="swiper effect-flip-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-flip-swiper", {
  loop: true,
  effect: "flip",
  grabCursor: true,
  flipEffect: { slideShadows: false },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-cube',
    title: 'Effect Cube Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-cube-swiper</code> class to set a swiper with the cube effect.',
    slides: imgs,
    navigation: false,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'cube',
      modules: [Pagination, EffectCube],
      grabCursor: true,
      cubeEffect: { shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 },
      pagination: { clickable: true },
    },
    htmlCode: `<!-- Effect Cube Swiper -->
<div class="swiper effect-cube-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-cube-swiper", {
  loop: true,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
  {
    id: 'section-effect-coverflow',
    title: 'Effect Coverflow Swiper',
    description: 'Use <code class="text-danger" style="background:#fef0f6;padding:1px 5px;border-radius:4px;font-size:0.8rem;">effect-coverflow-swiper</code> class to set a swiper with coverflow effect.',
    slides: imgs,
    navigation: false,
    pagination: true,
    scrollbar: false,
    paginationType: 'bullets',
    swiperConfig: {
      loop: true,
      effect: 'coverflow',
      modules: [Pagination, EffectCoverflow],
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true },
      pagination: { clickable: true },
    },
    htmlCode: `<!-- Effect Coverflow Swiper -->
<div class="swiper effect-coverflow-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="images/img1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img2.jpg" alt="" class="img-fluid" />
    </div>
    <div class="swiper-slide">
      <img src="images/img3.jpg" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`,
    jsCode: `var swiper = new Swiper(".effect-coverflow-swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});`
  },
]

// Init active tabs
sections.forEach((_, i) => { activeTab[i] = 'html' })

async function copyCode(index) {
  const code = activeTab[index] === 'html'
    ? sections[index].htmlCode
    : sections[index].jsCode
  try {
    await navigator.clipboard.writeText(code)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = code
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copiedIndex.value = index
  setTimeout(() => { copiedIndex.value = null }, 2000)
}

function scrollToSection(id) {
  activeId.value = id
  const el = document.getElementById(id) || document.getElementById('overview')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(async () => {
  await nextTick()
  sections.forEach((section, index) => {
    const el = swiperEls.value[index]
    if (!el) return

    const cfg = { ...section.swiperConfig }

    // Resolve navigation selectors per instance using child elements
    if (cfg.navigation === true) {
      cfg.navigation = {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      }
    }
    if (cfg.pagination && typeof cfg.pagination === 'object') {
      cfg.pagination = { ...cfg.pagination, el: el.querySelector('.swiper-pagination') }
    }
    if (cfg.scrollbar && typeof cfg.scrollbar === 'object') {
      cfg.scrollbar = { ...cfg.scrollbar, el: el.querySelector('.swiper-scrollbar') }
    }

    new Swiper(el, cfg)
  })
})
</script>

<style scoped>
.page-wrapper-adv { padding: 1.5rem 1rem; min-height: 100vh; background: var(--bg-body); color: var(--text-primary); }
/* TOC */
.toc-link {
  color: #495057;
  border-left: 2px solid transparent;
  transition: all 0.15s;
}
.toc-link:hover {
  color: #4a6cf7;
  background-color: #f0f3ff;
  border-left-color: #4a6cf7;
}
.toc-active {
  color: #4a6cf7 !important;
  background-color: #f0f3ff;
  border-left: 2px solid #4a6cf7;
}

/* Tabs */
.tab-active-html {
  background: #fd7e14 !important;
  color: #fff !important;
  border: none !important;
}
.tab-active-js {
  background: #495057 !important;
  color: #fff !important;
  border: none !important;
}
.tab-inactive {
  background: transparent !important;
  color: #6c757d !important;
  border: none !important;
}
.tab-inactive:hover {
  background: #e9ecef !important;
}

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .tab-inactive {
  color: var(--text-secondary) !important;
}
:global([data-theme="dark"]) .tab-inactive:hover {
  background: var(--app-bg) !important;
}
</style>