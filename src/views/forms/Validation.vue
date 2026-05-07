<template>
  <div class="page-wrapper">
    <CdnSection />

    <div class="page-layout">
      <div class="page-main">
        <div class="page-header">
          <h4 class="page-title">Form Validation</h4>
          <p class="page-subtitle">Bootstrap 5 client-side form validation with reactive state.</p>
        </div>

        <!-- Custom Validation -->
        <div id="custom-validation" class="demo-card">
          <h6 class="demo-title">Custom Validation Styles</h6>
          <p class="demo-desc">Add <code>.was-validated</code> to the form to trigger validation feedback on all fields. Click Submit to see it in action.</p>
          <div class="demo-box">
            <form @submit.prevent="submitForm" :class="{ 'was-validated': submitted }">
              <div class="row g-3">
                <div class="col-12 col-md-6">
                  <label class="form-label">First name <span class="text-danger">*</span></label>
                  <input v-model="form.firstName" type="text" class="form-control"
                    :class="submitted ? (form.firstName ? 'is-valid' : 'is-invalid') : ''"
                    placeholder="John" required />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter your first name.</div>
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label">Last name <span class="text-danger">*</span></label>
                  <input v-model="form.lastName" type="text" class="form-control"
                    :class="submitted ? (form.lastName ? 'is-valid' : 'is-invalid') : ''"
                    placeholder="Doe" required />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter your last name.</div>
                </div>
                <div class="col-12">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input v-model="form.email" type="email" class="form-control"
                    :class="submitted ? (isValidEmail ? 'is-valid' : 'is-invalid') : ''"
                    placeholder="john@example.com" required />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label">Password <span class="text-danger">*</span></label>
                  <input v-model="form.password" type="password" class="form-control"
                    :class="submitted ? (form.password.length >= 6 ? 'is-valid' : 'is-invalid') : ''"
                    placeholder="Min. 6 characters" required />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Password must be at least 6 characters.</div>
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label">Country <span class="text-danger">*</span></label>
                  <select v-model="form.country" class="form-select"
                    :class="submitted ? (form.country ? 'is-valid' : 'is-invalid') : ''" required>
                    <option value="">Choose a country...</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please select a country.</div>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input v-model="form.agree" class="form-check-input" type="checkbox" id="agreeCheck"
                      :class="submitted ? (form.agree ? 'is-valid' : 'is-invalid') : ''" required />
                    <label class="form-check-label" for="agreeCheck">I agree to the terms and conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>
                <div class="col-12 d-flex gap-2">
                  <button type="submit" class="btn btn-primary">Submit Form</button>
                  <button type="button" class="btn btn-outline-secondary" @click="resetForm">Reset</button>
                </div>
              </div>
            </form>
            <div v-if="submitted && isFormValid" class="alert alert-success mt-3 mb-0">
              ✓ Form submitted successfully!
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('validation', validationCode)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'validation' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ validationCode }}</code></pre>
          </div>
        </div>

        <!-- Inline States -->
        <div id="inline-states" class="demo-card">
          <h6 class="demo-title">Inline Valid / Invalid States</h6>
          <p class="demo-desc">Apply <code>.is-valid</code> or <code>.is-invalid</code> directly on any input, select, or textarea.</p>
          <div class="demo-box">
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <label class="form-label">Username</label>
                <input type="text" class="form-control is-invalid" value="user@" />
                <div class="invalid-feedback">Username can only contain letters and numbers.</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control is-valid" value="user@example.com" />
                <div class="valid-feedback">Email is valid.</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">Country</label>
                <select class="form-select is-valid">
                  <option selected>United States</option>
                </select>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label">Message</label>
                <textarea class="form-control is-invalid" rows="3" placeholder="Too short..."></textarea>
                <div class="invalid-feedback">Message must be at least 20 characters.</div>
              </div>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('inline', inlineCode)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'inline' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ inlineCode }}</code></pre>
          </div>
        </div>

        <PageFooter />
      </div>

      <!-- Right TOC -->
      <aside class="toc-sidebar d-none d-xl-block">
        <div class="toc-title">ON THIS PAGE</div>
        <nav class="toc-nav">
          <a v-for="item in tocItems" :key="item.id"
            :href="`#${item.id}`" class="toc-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const submitted = ref(false)
const copied = ref('')
const activeSection = ref('custom-validation')
const form = ref({ firstName: '', lastName: '', email: '', password: '', country: '', agree: false })

const tocItems = [
  { id: 'custom-validation', label: 'Custom Validation' },
  { id: 'inline-states',     label: 'Inline States' },
]

const isValidEmail = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email))
const isFormValid = computed(() =>
  form.value.firstName && form.value.lastName && isValidEmail.value &&
  form.value.password.length >= 6 && form.value.country && form.value.agree
)

function submitForm() { submitted.value = true }
function resetForm() {
  submitted.value = false
  Object.keys(form.value).forEach(k => { form.value[k] = typeof form.value[k] === 'boolean' ? false : '' })
}
function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}
function scrollTo(id) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function onScroll() {
  for (const item of [...tocItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 120) { activeSection.value = item.id; break }
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const validationCode = `<form class="needs-validation" novalidate id="myForm">
  <div class="row g-3">
    <div class="col-12 col-md-6">
      <label class="form-label">First name <span class="text-danger">*</span></label>
      <input type="text" class="form-control" id="firstName" placeholder="John" required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter your first name.</div>
    </div>
    <div class="col-12 col-md-6">
      <label class="form-label">Last name <span class="text-danger">*</span></label>
      <input type="text" class="form-control" id="lastName" placeholder="Doe" required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter your last name.</div>
    </div>
    <div class="col-12">
      <label class="form-label">Email <span class="text-danger">*</span></label>
      <input type="email" class="form-control" id="email" placeholder="john@example.com" required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter a valid email address.</div>
    </div>
    <div class="col-12 col-md-6">
      <label class="form-label">Password <span class="text-danger">*</span></label>
      <input type="password" class="form-control" id="password"
        placeholder="Min. 6 characters" minlength="6" required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Password must be at least 6 characters.</div>
    </div>
    <div class="col-12 col-md-6">
      <label class="form-label">Country <span class="text-danger">*</span></label>
      <select class="form-select" id="country" required>
        <option value="">Choose a country...</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
      </select>
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please select a country.</div>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="agreeCheck" required />
        <label class="form-check-label" for="agreeCheck">
          I agree to the terms and conditions
        </label>
        <div class="invalid-feedback">You must agree before submitting.</div>
      </div>
    </div>
    <div class="col-12 d-flex gap-2">
      <button type="submit" class="btn btn-primary">Submit Form</button>
      <button type="reset" class="btn btn-outline-secondary">Reset</button>
    </div>
  </div>
</form>

<script>
// Bootstrap 5 validation — add .was-validated on submit
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault()
  this.classList.add('was-validated')
  if (this.checkValidity()) {
    alert('Form submitted successfully!')
  }
})
<\/script>`

const inlineCode = `<div class="row g-3">
  <!-- Invalid input -->
  <div class="col-12 col-md-6">
    <label class="form-label">Username</label>
    <input type="text" class="form-control is-invalid" value="user@" />
    <div class="invalid-feedback">Username can only contain letters and numbers.</div>
  </div>

  <!-- Valid input -->
  <div class="col-12 col-md-6">
    <label class="form-label">Email</label>
    <input type="email" class="form-control is-valid" value="user@example.com" />
    <div class="valid-feedback">Email is valid.</div>
  </div>

  <!-- Valid select -->
  <div class="col-12 col-md-6">
    <label class="form-label">Country</label>
    <select class="form-select is-valid">
      <option selected>United States</option>
    </select>
    <div class="valid-feedback">Looks good!</div>
  </div>

  <!-- Invalid textarea -->
  <div class="col-12 col-md-6">
    <label class="form-label">Message</label>
    <textarea class="form-control is-invalid" rows="3" placeholder="Too short..."></textarea>
    <div class="invalid-feedback">Message must be at least 20 characters.</div>
  </div>
</div>`
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-layout { display: flex; gap: 0; align-items: flex-start; }
.page-main { flex: 1; min-width: 0; padding-right: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); scroll-margin-top: 80px; }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.6; }
.demo-desc :deep(code) { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 300px; font-family: 'Courier New', monospace; }
.toc-sidebar { width: 190px; flex-shrink: 0; position: sticky; top: 80px; align-self: flex-start; }
.toc-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 10px; text-transform: uppercase; }
.toc-nav { display: flex; flex-direction: column; gap: 2px; }
.toc-link { display: block; padding: 5px 10px; font-size: 0.8rem; color: var(--text-secondary); text-decoration: none; border-radius: 6px; border-left: 2px solid transparent; transition: all 0.15s; }
.toc-link:hover { color: var(--accent); background: var(--accent-muted); }
.toc-link.active { color: var(--accent); border-left-color: var(--accent); background: var(--accent-muted); font-weight: 600; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .page-main { padding-right: 0; } }
</style>
