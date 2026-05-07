<template>
  <div class="cards-page min-vh-100 py-5 bg-light">
    <CdnSection />
    <div class="container">
      <h1 class="mb-4">Cards</h1>

      <!-- 1. Basic Card Grid -->
      <section class="mb-5">
        <h3 class="mb-3">Basic Card Grid</h3>
        <div class="row">
          <div
            v-for="(card, idx) in basicCards"
            :key="'basic-' + idx"
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div class="card h-100 shadow-sm rounded">
              <img :src="card.img" class="card-img-top" :alt="card.title" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ card.title }}</h5>
                <p class="card-text flex-grow-1">{{ card.text }}</p>
                <button class="btn btn-warning mt-2 align-self-start">Button</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Code preview -->
        <div class="code-block">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <strong>HTML</strong>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="copyCode(codeSnippets.basic, 'basic')"
            >
              <span v-if="copiedId !== 'basic'">Copy</span>
              <span v-else class="text-success">Copied!</span>
            </button>
          </div>
          <pre class="code-body"><code>{{ codeSnippets.basic }}</code></pre>
        </div>
      </section>

      <hr />

      <!-- 2. Header/Footer, Overlay, List Group, Tabs -->
      <section class="mb-5">
        <h3 class="mb-3">Header / Footer / Overlay / List / Tabs</h3>

        <div class="row">
          <!-- Header/Footer -->
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm rounded">
              <div class="card-header">Featured</div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text flex-grow-1">Supporting text below as a natural lead-in to additional content.</p>
                <button class="btn btn-warning mt-2 align-self-start">Button</button>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>
          </div>

          <!-- Overlay -->
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="card text-white h-100 shadow-sm rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop" class="card-img" alt="overlay" />
              <div class="card-img-overlay d-flex flex-column justify-content-end p-3 overlay-gradient">
                <h5 class="card-title">Overlay Title</h5>
                <p class="card-text">Short overlay description on the image.</p>
                <button class="btn btn-warning btn-sm align-self-start">Button</button>
              </div>
            </div>
          </div>

          <!-- List group -->
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm rounded">
              <div class="card-body">
                <h5 class="card-title">List Group Card</h5>
                <p class="card-text">Cards can include list groups for structured content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
              <div class="card-body">
                <button class="btn btn-warning">Button</button>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm rounded">
              <div class="card-body">
                <ul class="nav nav-tabs mb-3" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#cardTab1" type="button">Tab 1</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#cardTab2" type="button">Tab 2</button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="cardTab1">
                    <h5 class="card-title">Tab 1 Content</h5>
                    <p class="card-text">Content for the first tab.</p>
                  </div>
                  <div class="tab-pane fade" id="cardTab2">
                    <h5 class="card-title">Tab 2 Content</h5>
                    <p class="card-text">Content for the second tab.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Code preview -->
        <div class="code-block">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <strong>HTML</strong>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="copyCode(codeSnippets.advanced, 'advanced')"
            >
              <span v-if="copiedId !== 'advanced'">Copy</span>
              <span v-else class="text-success">Copied!</span>
            </button>
          </div>
          <pre class="code-body"><code>{{ codeSnippets.advanced }}</code></pre>
        </div>
      </section>

      <hr />

      <!-- 3. Colored Cards -->
      <section class="mb-5">
        <h3 class="mb-3">Colored Cards</h3>
        <div class="row">
          <div
            v-for="(c, i) in colored"
            :key="'col-'+i"
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div :class="['card', 'h-100', 'shadow-sm', 'rounded', c.bg, 'text-white']">
              <div class="card-body">
                <h5 class="card-title">{{ c.title }}</h5>
                <p class="card-text">{{ c.text }}</p>
                <button class="btn btn-light btn-sm">Action</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Code preview -->
        <div class="code-block">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <strong>HTML</strong>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="copyCode(codeSnippets.colored, 'colored')"
            >
              <span v-if="copiedId !== 'colored'">Copy</span>
              <span v-else class="text-success">Copied!</span>
            </button>
          </div>
          <pre class="code-body"><code>{{ codeSnippets.colored }}</code></pre>
        </div>
      </section>

      <hr />

      <!-- 4. Horizontal Cards -->
      <section class="mb-5">
        <h3 class="mb-3">Horizontal Cards</h3>
        <div class="row">
          <div
            v-for="(h, i) in horizontalCards"
            :key="'h-'+i"
            class="col-12 col-md-6 mb-4"
          >
            <div class="card h-100 shadow-sm rounded">
              <div class="row g-0">
                <div class="col-4">
                  <img :src="h.img" class="img-fluid rounded-start h-100 object-fit-cover" alt="..." />
                </div>
                <div class="col-8">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ h.title }}</h5>
                    <p class="card-text flex-grow-1">{{ h.text }}</p>
                    <button class="btn btn-warning align-self-start">Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Code preview -->
        <div class="code-block">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <strong>HTML</strong>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="copyCode(codeSnippets.horizontal, 'horizontal')"
            >
              <span v-if="copiedId !== 'horizontal'">Copy</span>
              <span v-else class="text-success">Copied!</span>
            </button>
          </div>
          <pre class="code-body"><code>{{ codeSnippets.horizontal }}</code></pre>
        </div>
      </section>

      <hr />

      <!-- 5. Card Groups / Decks -->
      <section class="mb-5">
        <h3 class="mb-3">Card Groups and Decks</h3>

        <div class="card-group">
          <div class="card h-100 shadow-sm rounded text-center p-3">
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=200&fit=crop" class="card-img-top mb-3 rounded" alt="city" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Group Card 1</h5>
              <p class="card-text flex-grow-1">Wider card with supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

          <div class="card h-100 shadow-sm rounded text-center p-3">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" class="card-img-top mb-3 rounded" alt="arch" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Group Card 2</h5>
              <p class="card-text flex-grow-1">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
            </div>
          </div>

          <div class="card h-100 shadow-sm rounded text-center p-3">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=200&fit=crop" class="card-img-top mb-3 rounded" alt="interior" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Group Card 3</h5>
              <p class="card-text flex-grow-1">Wider card with supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 10 mins ago</small></p>
            </div>
          </div>
        </div>

        <!-- Code preview -->
        <div class="code-block mt-3">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <strong>HTML</strong>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="copyCode(codeSnippets.group, 'group')"
            >
              <span v-if="copiedId !== 'group'">Copy</span>
              <span v-else class="text-success">Copied!</span>
            </button>
          </div>
          <pre class="code-body"><code>{{ codeSnippets.group }}</code></pre>
        </div>
      </section>

      <hr />

      <!-- 6. Image-only cards with hover zoom -->
      <section class="mb-5">
        <h3 class="mb-3">Image-only Cards (Hover Zoom)</h3>
        <div class="row">
          <div
            v-for="(img, i) in imageOnly"
            :key="'img-'+i"
            class="col-6 col-sm-4 col-md-3 mb-4"
          >
            <div class="card image-card overflow-hidden rounded shadow-sm">
              <img :src="img" class="card-img-top zoom-img" alt="gallery" />
            </div>
          </div>
        </div>

        <!-- Code preview -->
        <div class="code-block">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <strong>HTML</strong>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="copyCode(codeSnippets.imageOnly, 'imageOnly')"
            >
              <span v-if="copiedId !== 'imageOnly'">Copy</span>
              <span v-else class="text-success">Copied!</span>
            </button>
          </div>
          <pre class="code-body"><code>{{ codeSnippets.imageOnly }}</code></pre>
        </div>
      </section>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import CdnSection from '../../components/CdnSection.vue'
// footer
import PageFooter from '../../components/layout/Footer.vue'
/**
 * Cards.vue
 * Vue 3 Composition API
 * Bootstrap 5 for layout and styling
 */
import { ref, reactive } from "vue";

export default {
  name: "Cards",
  setup() {
    // Basic cards
    const basicCards = [
      {
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=200&fit=crop",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&h=200&fit=crop",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=200&fit=crop",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ];

    // Colored cards
    const colored = [
      { bg: "bg-success", title: "Success", text: "Positive message" },
      { bg: "bg-warning", title: "Warning", text: "Cautionary message" },
      { bg: "bg-danger", title: "Danger", text: "Critical message" },
      { bg: "bg-info", title: "Info", text: "Informational message" },
    ];

    // Horizontal cards
    const horizontalCards = [
      {
        img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=300&h=200&fit=crop",
        title: "Horizontal card",
        text: "A short description for the horizontal card.",
      },
      {
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
        title: "Horizontal card",
        text: "A short description for the horizontal card.",
      },
    ];

    // Image-only gallery
    const imageOnly = [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
    ];

    // Code snippets — complete, copy-paste ready with real working image URLs
    const codeSnippets = reactive({
      basic: `<div class="row">
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100 shadow-sm rounded">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
           class="card-img-top" alt="Mountain landscape" style="height:180px;object-fit:cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Card title</h5>
        <p class="card-text flex-grow-1">Some quick example text to build on the card title.</p>
        <button class="btn btn-warning mt-2 align-self-start">Button</button>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100 shadow-sm rounded">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=200&fit=crop"
           class="card-img-top" alt="Forest path" style="height:180px;object-fit:cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Card title</h5>
        <p class="card-text flex-grow-1">Some quick example text to build on the card title.</p>
        <button class="btn btn-warning mt-2 align-self-start">Button</button>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100 shadow-sm rounded">
      <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&h=200&fit=crop"
           class="card-img-top" alt="Night sky" style="height:180px;object-fit:cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Card title</h5>
        <p class="card-text flex-grow-1">Some quick example text to build on the card title.</p>
        <button class="btn btn-warning mt-2 align-self-start">Button</button>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100 shadow-sm rounded">
      <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=200&fit=crop"
           class="card-img-top" alt="Road trip" style="height:180px;object-fit:cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Card title</h5>
        <p class="card-text flex-grow-1">Some quick example text to build on the card title.</p>
        <button class="btn btn-warning mt-2 align-self-start">Button</button>
      </div>
    </div>
  </div>
</div>`,

      advanced: `<!-- 1. Header / Footer card -->
<div class="card shadow-sm rounded">
  <div class="card-header">Featured</div>
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text flex-grow-1">Supporting text below as a natural lead-in to additional content.</p>
    <button class="btn btn-warning mt-2 align-self-start">Button</button>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>

<!-- 2. Image overlay card -->
<div class="card text-white shadow-sm rounded overflow-hidden">
  <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop"
       class="card-img" alt="City skyline" style="height:220px;object-fit:cover;">
  <div class="card-img-overlay d-flex flex-column justify-content-end p-3"
       style="background:linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.55) 100%);">
    <h5 class="card-title">Overlay Title</h5>
    <p class="card-text">Short overlay description on the image.</p>
    <button class="btn btn-warning btn-sm align-self-start">Button</button>
  </div>
</div>

<!-- 3. List group card -->
<div class="card shadow-sm rounded">
  <div class="card-body">
    <h5 class="card-title">List Group Card</h5>
    <p class="card-text">Cards can include list groups for structured content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <button class="btn btn-warning">Button</button>
  </div>
</div>

<!-- 4. Tabs card -->
<div class="card shadow-sm rounded">
  <div class="card-body">
    <ul class="nav nav-tabs mb-3" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" data-bs-toggle="tab"
          data-bs-target="#tab1" type="button">Tab 1</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" data-bs-toggle="tab"
          data-bs-target="#tab2" type="button">Tab 2</button>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab1">
        <h5 class="card-title">Tab 1 Content</h5>
        <p class="card-text">Content for the first tab.</p>
      </div>
      <div class="tab-pane fade" id="tab2">
        <h5 class="card-title">Tab 2 Content</h5>
        <p class="card-text">Content for the second tab.</p>
      </div>
    </div>
  </div>
</div>`,

      colored: `<div class="row">
  <div class="col-sm-6 col-lg-3 mb-4">
    <div class="card bg-success text-white h-100 shadow-sm rounded">
      <div class="card-body">
        <h5 class="card-title">Success</h5>
        <p class="card-text">Positive message</p>
        <button class="btn btn-light btn-sm">Action</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3 mb-4">
    <div class="card bg-warning text-white h-100 shadow-sm rounded">
      <div class="card-body">
        <h5 class="card-title">Warning</h5>
        <p class="card-text">Cautionary message</p>
        <button class="btn btn-light btn-sm">Action</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3 mb-4">
    <div class="card bg-danger text-white h-100 shadow-sm rounded">
      <div class="card-body">
        <h5 class="card-title">Danger</h5>
        <p class="card-text">Critical message</p>
        <button class="btn btn-light btn-sm">Action</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3 mb-4">
    <div class="card bg-info text-white h-100 shadow-sm rounded">
      <div class="card-body">
        <h5 class="card-title">Info</h5>
        <p class="card-text">Informational message</p>
        <button class="btn btn-light btn-sm">Action</button>
      </div>
    </div>
  </div>
</div>`,

      horizontal: `<div class="row">
  <div class="col-md-6 mb-4">
    <div class="card h-100 shadow-sm rounded">
      <div class="row g-0">
        <div class="col-4">
          <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=300&h=200&fit=crop"
               class="img-fluid rounded-start h-100" alt="Night sky"
               style="object-fit:cover;">
        </div>
        <div class="col-8">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Horizontal card</h5>
            <p class="card-text flex-grow-1">A short description for the horizontal card.</p>
            <button class="btn btn-warning align-self-start">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6 mb-4">
    <div class="card h-100 shadow-sm rounded">
      <div class="row g-0">
        <div class="col-4">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
               class="img-fluid rounded-start h-100" alt="Mountain"
               style="object-fit:cover;">
        </div>
        <div class="col-8">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Horizontal card</h5>
            <p class="card-text flex-grow-1">A short description for the horizontal card.</p>
            <button class="btn btn-warning align-self-start">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,

      group: `<div class="card-group">
  <div class="card h-100 shadow-sm rounded text-center p-3">
    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=200&fit=crop"
         class="card-img-top mb-3 rounded" alt="City"
         style="height:160px;object-fit:cover;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">Group Card 1</h5>
      <p class="card-text flex-grow-1">Wider card with supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card h-100 shadow-sm rounded text-center p-3">
    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
         class="card-img-top mb-3 rounded" alt="Mountain"
         style="height:160px;object-fit:cover;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">Group Card 2</h5>
      <p class="card-text flex-grow-1">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
    </div>
  </div>
  <div class="card h-100 shadow-sm rounded text-center p-3">
    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=200&fit=crop"
         class="card-img-top mb-3 rounded" alt="Forest"
         style="height:160px;object-fit:cover;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">Group Card 3</h5>
      <p class="card-text flex-grow-1">Wider card with supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 10 mins ago</small></p>
    </div>
  </div>
</div>`,

      imageOnly: `<div class="row">
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="City"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="Mountain"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="Forest"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="Night sky"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="Road"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="Sunlit forest"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="Lake"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
  <div class="col-6 col-sm-4 col-md-3 mb-4">
    <div class="card overflow-hidden rounded shadow-sm" style="height:220px;">
      <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop"
           class="card-img-top w-100 h-100" alt="Waterfall"
           style="object-fit:cover;transition:transform 0.4s ease;">
    </div>
  </div>
</div>`,
    });

    // Copy-to-clipboard state
    const copiedId = ref(null);

    // Copy function using navigator.clipboard.writeText()
    const copyCode = async (text, id) => {
      try {
        await navigator.clipboard.writeText(text);
        copiedId.value = id;
        setTimeout(() => {
          if (copiedId.value === id) copiedId.value = null;
        }, 1600);
      } catch (err) {
        // fallback for older browsers
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          copiedId.value = id;
          setTimeout(() => {
            if (copiedId.value === id) copiedId.value = null;
          }, 1600);
        } catch (e) {
          console.error("Copy failed", e);
        }
      }
    };

    return {
      basicCards,
      colored,
      horizontalCards,
      imageOnly,
      codeSnippets,
      copyCode,
      copiedId,
    };
  },
};
</script>

<style scoped>
/* Page background is light gray via .bg-light on root */

/* Ensure card images cover their container */
.card-img-top,
.card-img {
  object-fit: cover;
  height: 180px;
}

/* For horizontal card image */
.object-fit-cover {
  object-fit: cover;
  height: 100%;
}

/* Overlay gradient for readability */
.overlay-gradient {
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%);
}

/* Image-only card hover zoom */
.image-card {
  height: 220px;
}
.image-card .zoom-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.image-card:hover .zoom-img {
  transform: scale(1.08);
}

/* Code preview styling */
.code-preview pre {
  background: #f8f9fa;
  border-radius: 6px;
  padding: 12px;
  overflow: auto;
  margin: 0;
  font-size: 0.85rem;
}

/* Make sure card-group children are equal height */
.card-group .card {
  display: flex;
  flex-direction: column;
}

/* Responsive tweaks */
@media (max-width: 576px) {
  .card-img-top,
  .card-img {
    height: 140px;
  }
  .image-card {
    height: 160px;
  }
}

/* ── Dark mode overrides ── */
:global([data-theme="dark"]) .cards-page {
  background: var(--bg-body) !important;
  color: var(--text-primary) !important;
}
:global([data-theme="dark"]) .code-preview {
  background: var(--card-bg) !important;
  border-color: var(--border-color) !important;
}
:global([data-theme="dark"]) .code-preview pre { background: var(--app-bg) !important; color: #c9d1d9 !important; }
</style>
