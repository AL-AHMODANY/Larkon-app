<template>
  <div class="carousel-page">
    <CdnSection />
    <!-- Page Header -->
    <div class="page-header mb-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Base UI</a></li>
          <li class="breadcrumb-item active">Carousel</li>
        </ol>
      </nav>
      <h4 class="page-title mb-0">Carousel</h4>
    </div>

    <!-- Layout wrapper: main content + sticky right nav -->
    <div class="content-layout">
    <div class="main-content">

    <!-- 1. Slides Only -->
    <div id="slides-only" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">Slides Only</h5>
        <p class="text-muted small">Here's a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>

        <div class="demo-preview mb-3">
          <div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(slide, i) in slides" :key="i" :class="['carousel-item', { active: i === 0 }]">
                <img :src="slide.src" class="d-block w-100 carousel-img" :alt="slide.alt" />
              </div>
            </div>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('slidesOnly')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.slidesOnly }}</code></pre>
        </div>
      </div>
    </div>

    <!-- 2. With Controls -->
    <div id="with-controls" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">With Controls</h5>
        <p class="text-muted small">Adding in the previous and next controls.</p>

        <div class="demo-preview mb-3">
          <div id="carouselWithControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(slide, i) in slides" :key="i" :class="['carousel-item', { active: i === 0 }]">
                <img :src="slide.src" class="d-block w-100 carousel-img" :alt="slide.alt" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselWithControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselWithControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('withControls')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.withControls }}</code></pre>
        </div>
      </div>
    </div>

    <!-- 3. With Indicators -->
    <div id="with-indicators" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">With Indicators</h5>
        <p class="text-muted small">You can also add the indicators to the carousel, alongside the controls, too.</p>

        <div class="demo-preview mb-3">
          <div id="carouselWithIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button v-for="(slide, i) in slides" :key="i" type="button"
                data-bs-target="#carouselWithIndicators" :data-bs-slide-to="i"
                :class="{ active: i === 0 }" :aria-current="i === 0 ? 'true' : undefined"></button>
            </div>
            <div class="carousel-inner">
              <div v-for="(slide, i) in slides" :key="i" :class="['carousel-item', { active: i === 0 }]">
                <img :src="slide.src" class="d-block w-100 carousel-img" :alt="slide.alt" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselWithIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselWithIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('withIndicators')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.withIndicators }}</code></pre>
        </div>
      </div>
    </div>

    <!-- 4. With Captions -->
    <div id="with-captions" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">With Captions</h5>
        <p class="text-muted small">Add captions to your slides with the <code>.carousel-caption</code> element. They can be easily hidden on smaller viewports, as shown below, with optional display utilities. We hide them initially with <code>.d-none</code> and bring them back on medium-sized devices with <code>.d-md-block</code>.</p>

        <div class="demo-preview mb-3">
          <div id="carouselWithCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button v-for="(slide, i) in captionSlides" :key="i" type="button"
                data-bs-target="#carouselWithCaptions" :data-bs-slide-to="i"
                :class="{ active: i === 0 }"></button>
            </div>
            <div class="carousel-inner">
              <div v-for="(slide, i) in captionSlides" :key="i" :class="['carousel-item', { active: i === 0 }]">
                <img :src="slide.src" class="d-block w-100 carousel-img" :alt="slide.alt" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{{ slide.title }}</h5>
                  <p>{{ slide.caption }}</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselWithCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselWithCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('withCaptions')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.withCaptions }}</code></pre>
        </div>
      </div>
    </div>

    <!-- 5. Crossfade -->
    <div id="crossfade" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">Crossfade</h5>
        <p class="text-muted small">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add <code>.bg-body</code> to the <code>.carousel-item</code> elements for proper crossfading.</p>

        <div class="demo-preview mb-3">
          <div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(slide, i) in slides" :key="i" :class="['carousel-item', { active: i === 0 }]">
                <img :src="slide.src" class="d-block w-100 carousel-img" :alt="slide.alt" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('crossfade')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.crossfade }}</code></pre>
        </div>
      </div>
    </div>

    <!-- 6. Individual Interval -->
    <div id="individual-interval" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">Individual carousel item interval</h5>
        <p class="text-muted small">Add <code>data-bs-interval=""</code> to a <code>.carousel-item</code> to change the amount of time to delay between automatically cycling to the next item.</p>

        <div class="demo-preview mb-3">
          <div id="carouselInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img :src="slides[0].src" class="d-block w-100 carousel-img" alt="Slide 1" />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img :src="slides[1].src" class="d-block w-100 carousel-img" alt="Slide 2" />
              </div>
              <div class="carousel-item">
                <img :src="slides[2].src" class="d-block w-100 carousel-img" alt="Slide 3" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('interval')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.interval }}</code></pre>
        </div>
      </div>
    </div>

    <!-- 7. Disable Touch Swiping -->
    <div id="disable-touch" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">Disable touch swiping <span class="badge bg-primary-subtle text-primary ms-1">data-bs-touch</span> interval</h5>
        <p class="text-muted small">Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled by setting the <code>data-bs-touch</code> attribute to <code>false</code>.</p>

        <div class="demo-preview mb-3">
          <div id="carouselNoTouch" class="carousel slide" data-bs-touch="false" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(slide, i) in slides" :key="i" :class="['carousel-item', { active: i === 0 }]">
                <img :src="slide.src" class="d-block w-100 carousel-img" :alt="slide.alt" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselNoTouch" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselNoTouch" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('noTouch')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.noTouch }}</code></pre>
        </div>
      </div>
    </div>

    <!-- 8. Dark Variant -->
    <div id="dark-variant" class="demo-section card mb-4">
      <div class="card-body">
        <h5 class="section-title">Dark Variant <span class="badge bg-primary-subtle text-primary ms-1">carousel-dark</span> interval</h5>
        <p class="text-muted small">Add <code>.carousel-dark</code> to the <code>.carousel</code> for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the <code>filter</code> CSS property. Captions and controls have additional dark mode variables that optionally override the global values.</p>

        <div class="demo-preview mb-3">
          <div id="carouselDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button v-for="(slide, i) in captionSlides" :key="i" type="button"
                data-bs-target="#carouselDark" :data-bs-slide-to="i"
                :class="{ active: i === 0 }"></button>
            </div>
            <div class="carousel-inner">
              <div v-for="(slide, i) in captionSlides" :key="i" :class="['carousel-item', { active: i === 0 }]" style="background:#f5f5f5">
                <img :src="slide.src" class="d-block w-100 carousel-img" :alt="slide.alt" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{{ slide.title }}</h5>
                  <p>{{ slide.caption }}</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header d-flex justify-content-between align-items-center">
            <span class="badge bg-secondary">HTML</span>
            <button class="btn btn-sm btn-outline-secondary copy-btn" @click="copyCode('darkVariant')">Copy</button>
          </div>
          <pre class="mb-0"><code>{{ codeSnippets.darkVariant }}</code></pre>
        </div>
      </div>
    </div>

    </div><!-- /main-content -->

    <!-- Right-side anchor nav (hidden on mobile) -->
    <aside class="anchor-nav d-none d-xl-block">
      <ul class="list-unstyled">
        <li v-for="section in sections" :key="section.id">
          <a :href="`#${section.id}`" :class="{ active: activeSection === section.id }">
            {{ section.label }}
          </a>
        </li>
      </ul>
    </aside>

    </div><!-- /content-layout -->
    <PageFooter />
  </div>
</template>

<script>
import CdnSection from '../../components/CdnSection.vue'
// footer
import Footer from '../../components/layout/Footer.vue'
export default {
  name: 'CarouselPage',
  components: { PageFooter: Footer },
  data() {
    return {
      activeSection: 'slides-only',
      sections: [
        { id: 'slides-only', label: 'Slide Only' },
        { id: 'with-controls', label: 'With Controls' },
        { id: 'with-indicators', label: 'With Indicators' },
        { id: 'with-captions', label: 'With Captions' },
        { id: 'crossfade', label: 'Crossfade' },
        { id: 'individual-interval', label: 'Individual carousel item interval' },
        { id: 'disable-touch', label: 'Disable touch swiping' },
        { id: 'dark-variant', label: 'Dark Variant' },
        { id: 'dark-started', label: 'Dark Started' },
      ],
      slides: [
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop', alt: 'Mountain landscape' },
        { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop', alt: 'City skyline' },
        { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop', alt: 'Forest path' },
      ],
      captionSlides: [
        {
          src: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=400&fit=crop',
          alt: 'Night sky',
          title: 'First slide label',
          caption: 'Some representative placeholder content for the first slide.',
        },
        {
          src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=400&fit=crop',
          alt: 'Open road',
          title: 'Second slide label',
          caption: 'Some representative placeholder content for the second slide.',
        },
        {
          src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
          alt: 'Sunlit forest',
          title: 'Third slide label',
          caption: 'Some representative placeholder content for the third slide.',
        },
      ],
      codeSnippets: {
        slidesOnly: `<div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
</div>`,
        withControls: `<div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,
        withIndicators: `<div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselIndicators"
      data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselIndicators"
      data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselIndicators"
      data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,
        withCaptions: `<div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCaptions"
      data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselCaptions"
      data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselCaptions"
      data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Night sky"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Open road"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Sunlit forest"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,
        crossfade: `<div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,
        interval: `<div id="carouselInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,
        noTouch: `<div id="carouselNoTouch" class="carousel slide"
  data-bs-touch="false" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Mountain landscape"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
           class="d-block w-100" alt="City skyline"
           style="height:280px;object-fit:cover;">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Forest path"
           style="height:280px;object-fit:cover;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselNoTouch" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselNoTouch" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,
        darkVariant: `<div id="carouselDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselDark"
      data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselDark"
      data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselDark"
      data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style="background:#f5f5f5">
      <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Night sky"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" style="background:#f5f5f5">
      <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Open road"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" style="background:#f5f5f5">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
           class="d-block w-100" alt="Sunlit forest"
           style="height:280px;object-fit:cover;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`,
      },
    }
  },
  mounted() {
    this.initScrollSpy()
  },
  methods: {
    initScrollSpy() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id
            }
          })
        },
        { threshold: 0.3, rootMargin: '-60px 0px -60px 0px' }
      )
      this.sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    },
    copyCode(key) {
      const text = this.codeSnippets[key]
      navigator.clipboard.writeText(text).then(() => {
        // Optional: show a toast
      })
    },
  },
}
</script>

<style scoped>
.carousel-page {
  padding: 1.5rem 1rem 3rem;
}

/* Flex layout: main content + sidebar */
.content-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.main-content {
  flex: 1;
  min-width: 0;
  max-width: 680px;
}

/* Anchor nav */
.anchor-nav {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  align-self: flex-start;
}
.anchor-nav ul {
  border-left: 2px solid #e9ecef;
  padding-left: 0.75rem;
}
.anchor-nav li {
  margin-bottom: 0.4rem;
}
.anchor-nav a {
  font-size: 0.8rem;
  color: #6c757d;
  text-decoration: none;
  transition: color 0.2s;
}
.anchor-nav a:hover,
.anchor-nav a.active {
  color: #0d6efd;
  font-weight: 500;
}

/* Section card */
.demo-section {
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  box-shadow: none;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Carousel image height constraint */
.carousel-img {
  height: 280px;
  object-fit: cover;
  border-radius: 0.375rem;
}

@media (max-width: 576px) {
  .carousel-img {
    height: 180px;
  }
}

/* Code block */
.code-block {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 0.375rem;
  overflow: hidden;
}
.code-header {
  padding: 0.5rem 0.75rem;
  background: #f1f3f5;
  border-bottom: 1px solid #e9ecef;
}
.code-block pre {
  margin: 0;
  padding: 0.75rem 1rem;
  font-size: 0.78rem;
  overflow-x: auto;
  white-space: pre;
  color: #343a40;
  max-height: 240px;
}
.copy-btn {
  font-size: 0.75rem;
  padding: 2px 10px;
}

/* Badge variants */
.bg-primary-subtle {
  background-color: #cfe2ff;
}
.text-primary {
  color: #0d6efd !important;
}

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .code-block {
  background: var(--app-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .code-header {
  background: var(--card-bg) !important;
  border-bottom-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .code-block pre { color: #c9d1d9 !important; }
:global([data-theme="dark"]) .bg-primary-subtle { background-color: rgba(13,110,253,0.15) !important; }
</style>