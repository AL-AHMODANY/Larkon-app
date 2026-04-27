<template>
  <div class="container-fluid py-4 page-bg">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-8">

        <div class="card mb-4 border-0 shadow-sm">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-1">Nav Tabs</h5>
            <p class="text-muted small mb-4">Use the <code class="text-danger">.nav-tabs</code> class to generate a tabbed interface.</p>

            <ul class="nav nav-tabs mb-3" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab1 === 'home' }" @click="tab1 = 'home'">Home</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab1 === 'profile' }" @click="tab1 = 'profile'">Profile</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab1 === 'messages' }" @click="tab1 = 'messages'">Messages</a>
              </li>
            </ul>
            <div class="tab-content text-muted small">
              <div class="tab-pane fade show active">{{ dummyText }}</div>
            </div>

            <div class="code-block mt-4 position-relative">
              <span class="badge bg-success position-absolute top-0 end-0 m-2">HTML</span>
              <pre class="m-0 p-3 text-success"><code>&lt;ul class="nav nav-tabs"&gt;...&lt;/ul&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="card mb-4 border-0 shadow-sm">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-1">Tabs Justified</h5>
            <p class="text-muted small mb-4">Using class <code class="text-danger">.nav-justified</code>, you can force your <code class="text-danger">nav-tabs</code> to fill available width.</p>

            <ul class="nav nav-tabs nav-justified mb-3" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab2 === 'home' }" @click="tab2 = 'home'">Home</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab2 === 'profile' }" @click="tab2 = 'profile'">Profile</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab2 === 'messages' }" @click="tab2 = 'messages'">Messages</a>
              </li>
            </ul>
            <div class="tab-content text-muted small">
              <div class="tab-pane fade show active">{{ dummyText }}</div>
            </div>
          </div>
        </div>

        <div class="card mb-4 border-0 shadow-sm">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-1">Nav Pills</h5>
            <p class="text-muted small mb-4">Use the <code class="text-danger">.nav-pills</code> class to generate a pilled interface.</p>

            <ul class="nav nav-pills mb-3" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab3 === 'home' }" @click="tab3 = 'home'">Home</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab3 === 'profile' }" @click="tab3 = 'profile'">Profile</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab3 === 'messages' }" @click="tab3 = 'messages'">Messages</a>
              </li>
            </ul>
            <div class="tab-content text-muted small">
              <div class="tab-pane fade show active">{{ dummyText }}</div>
            </div>
          </div>
        </div>

        <div class="card mb-4 border-0 shadow-sm">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-1">Pills Justified</h5>
            <p class="text-muted small mb-4">Using class <code class="text-danger">.nav-justified</code>, you can force your <code class="text-danger">nav-pills</code> to fill available width.</p>

            <ul class="nav nav-pills nav-justified mb-3" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab4 === 'home' }" @click="tab4 = 'home'">Home</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab4 === 'profile' }" @click="tab4 = 'profile'">Profile</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link cursor-pointer" :class="{ active: tab4 === 'messages' }" @click="tab4 = 'messages'">Messages</a>
              </li>
            </ul>
            <div class="tab-content text-muted small">
              <div class="tab-pane fade show active">{{ dummyText }}</div>
            </div>
          </div>
        </div>

        <div class="card mb-4 border-0 shadow-sm">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-1">Tabs Vertical Left</h5>
            <p class="text-muted small mb-4">You can also have navigation tags displaying in vertical directions.</p>

            <div class="row">
              <div class="col-md-3 col-sm-12 mb-3 mb-md-0">
                <ul class="nav nav-pills flex-column" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link cursor-pointer" :class="{ active: tab5 === 'home' }" @click="tab5 = 'home'">Home</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link cursor-pointer" :class="{ active: tab5 === 'profile' }" @click="tab5 = 'profile'">Profile</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link cursor-pointer" :class="{ active: tab5 === 'messages' }" @click="tab5 = 'messages'">Messages</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-9 col-sm-12">
                <div class="tab-content text-muted small">
                  <div class="tab-pane fade show active">{{ dummyText }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4 border-0 shadow-sm">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-1">Tabs Vertical Right</h5>
            <p class="text-muted small mb-4">You can also have navigation tags displaying in vertical directions on the right.</p>

            <div class="row">
              <div class="col-md-9 col-sm-12 order-2 order-md-1">
                <div class="tab-content text-muted small">
                  <div class="tab-pane fade show active">{{ dummyText }}</div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 mb-3 mb-md-0 order-1 order-md-2">
                <ul class="nav nav-pills flex-column" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link cursor-pointer" :class="{ active: tab6 === 'home' }" @click="tab6 = 'home'">Home</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link cursor-pointer" :class="{ active: tab6 === 'profile' }" @click="tab6 = 'profile'">Profile</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link cursor-pointer" :class="{ active: tab6 === 'settings' }" @click="tab6 = 'settings'">Settings</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// State management for each tab group
const tab1 = ref('home');
const tab2 = ref('home');
const tab3 = ref('home');
const tab4 = ref('home');
const tab5 = ref('home');
const tab6 = ref('home');

const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
</script>

<style scoped>
/* Minor stylistic alignments with the design */
.page-bg {
  background-color: #f3f3f9;
  min-height: 100vh;
}
.cursor-pointer {
  cursor: pointer;
}
.nav-pills .nav-link.active {
  background-color: #f06548; /* Matches the orange theme from the image */
}
.nav-tabs .nav-link.active {
  color: #f06548;
  border-bottom: 2px solid #f06548;
}
.nav-tabs .nav-link {
  color: #495057;
  border: none;
}
.code-block {
  background-color: #f8f9fa;
  border: 1px solid #e9ebec;
  border-radius: 0.25rem;
}
.code-block pre {
  font-size: 0.875rem;
}
</style>