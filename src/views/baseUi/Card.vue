<template>
  <div class="cards-page min-vh-100 py-5 bg-light">
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
        <div class="code-preview p-3 bg-white shadow-sm rounded">
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
          <pre class="mb-0"><code>{{ codeSnippets.basic }}</code></pre>
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
              <img src="https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg" class="card-img" alt="overlay" />
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
        <div class="code-preview p-3 bg-white shadow-sm rounded">
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
          <pre class="mb-0"><code>{{ codeSnippets.advanced }}</code></pre>
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
        <div class="code-preview p-3 bg-white shadow-sm rounded">
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
          <pre class="mb-0"><code>{{ codeSnippets.colored }}</code></pre>
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
        <div class="code-preview p-3 bg-white shadow-sm rounded">
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
          <pre class="mb-0"><code>{{ codeSnippets.horizontal }}</code></pre>
        </div>
      </section>

      <hr />

      <!-- 5. Card Groups / Decks -->
      <section class="mb-5">
        <h3 class="mb-3">Card Groups and Decks</h3>

        <div class="card-group">
          <div class="card h-100 shadow-sm rounded text-center p-3">
            <img src="https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg" class="card-img-top mb-3 rounded" alt="city" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Group Card 1</h5>
              <p class="card-text flex-grow-1">Wider card with supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

          <div class="card h-100 shadow-sm rounded text-center p-3">
            <img src="https://techzaa.in/larkon/admin/assets/images/small/img-4.jpg" class="card-img-top mb-3 rounded" alt="arch" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Group Card 2</h5>
              <p class="card-text flex-grow-1">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
            </div>
          </div>

          <div class="card h-100 shadow-sm rounded text-center p-3">
            <img src="https://techzaa.in/larkon/admin/assets/images/small/img-2.jpg" class="card-img-top mb-3 rounded" alt="interior" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Group Card 3</h5>
              <p class="card-text flex-grow-1">Wider card with supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 10 mins ago</small></p>
            </div>
          </div>
        </div>

        <!-- Code preview -->
        <div class="code-preview mt-3 p-3 bg-white shadow-sm rounded">
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
          <pre class="mb-0"><code>{{ codeSnippets.group }}</code></pre>
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
        <div class="code-preview p-3 bg-white shadow-sm rounded">
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
          <pre class="mb-0"><code>{{ codeSnippets.imageOnly }}</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
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
        img: "https://techzaa.in/larkon/admin/assets/images/small/img-1.jpg",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        img: "https://techzaa.in/larkon/admin/assets/images/small/img-2.jpg",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        img: "https://techzaa.in/larkon/admin/assets/images/small/img-4.jpg",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        img: "https://techzaa.in/larkon/admin/assets/images/small/img-5.jpg",
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
        img: "https://techzaa.in/larkon/admin/assets/images/small/img-4.jpg",
        title: "Horizontal card",
        text: "A short description for the horizontal card.",
      },
      {
        img: "https://techzaa.in/larkon/admin/assets/images/small/img-3.jpg",
        title: "Horizontal card",
        text: "A short description for the horizontal card.",
      },
    ];

    // Image-only gallery
    const imageOnly = [
      "https://i.pinimg.com/1200x/cb/66/eb/cb66eb24a429800827e66b260c427652.jpg",
      "https://i.pinimg.com/736x/d9/f3/fc/d9f3fc6990b4b4c204e79a14279c0fe8.jpg",
      "https://i.pinimg.com/1200x/ac/06/2a/ac062aed79bf1e927e91bdc5cd67a633.jpg",
      "https://i.pinimg.com/736x/01/31/90/013190c96e79d5685e1856e83b1da12f.jpg",
      "https://i.pinimg.com/1200x/45/99/dc/4599dc8d3025c121c5cfc451487a98fe.jpg",
      "https://i.pinimg.com/1200x/33/54/83/335483d19426078a195ac88b813759bb.jpg",
      "https://i.pinimg.com/1200x/02/96/0c/02960c95e8f17a63e483de27a6572a91.jpg",
      "https://i.pinimg.com/1200x/e7/79/12/e77912db441ea233654d7241d4b2d531.jpg",
    ];

    // Code snippets for preview blocks (original, representative HTML)
    const codeSnippets = reactive({
      basic: `<div class="row">
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
</div>`,

      advanced: `<!-- Header / Footer -->
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
</ul>`,

      colored: `<div class="card bg-success text-white">
  <div class="card-body">
    <h5 class="card-title">Success</h5>
    <p class="card-text">Positive message</p>
  </div>
</div>`,

      horizontal: `<div class="card">
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
</div>`,

      group: `<div class="card-group">
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">...</div>
  </div>
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">...</div>
  </div>
</div>`,

      imageOnly: `<div class="row">
  <div class="col-3 mb-4">
    <div class="card image-card overflow-hidden">
      <img src="..." class="card-img-top zoom-img" alt="...">
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
</style>
