<template>
  <!-- Modal wrapper -->
  <div
    class="modal fade"
    :class="{ show: show }"
    tabindex="-1"
    :style="{ display: show ? 'block' : 'none' }"
    @keydown.esc="handleEsc"
  >
    <!-- Modal dialog -->
    <div
      class="modal-dialog"
      :class="[
        size ? `modal-${size}` : '',
        centered ? 'modal-dialog-centered' : '',
        scrollable ? 'modal-dialog-scrollable' : '',
        fullscreenClass
      ]"
    >
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header" :class="variantClass">
          <slot name="header">
            <h5 class="modal-title">Example Modal Title</h5>
            <button type="button" class="btn-close" @click="close"></button>
          </slot>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <slot name="body">
            <!-- Example form -->
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input v-model="form.name" type="text" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Price</label>
                <input v-model="form.price" type="number" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Category</label>
                <select v-model="form.category" class="form-select" required>
                  <option value="">Select category</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home</option>
                  <option>Sports</option>
                </select>
              </div>
            </form>

            <!-- Example scrollable content -->
            <div v-if="scrollable" class="mt-3">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 20" :key="i">
                    <td>{{ i }}</td>
                    <td>Sample Item {{ i }}</td>
                    <td>${{ i * 10 }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </slot>
        </div>

        <!-- Footer -->
        <div class="modal-footer">
          <slot name="footer">
            <button class="btn btn-secondary" @click="close">Close</button>
            <button class="btn btn-primary" @click="submitForm">Submit</button>
            <button class="btn btn-danger" @click="confirmAction">Confirm</button>
          </slot>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div
      v-if="show && backdrop"
      class="modal-backdrop fade show"
      @click="handleBackdropClick"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive, watch, computed } from 'vue'

/* Props define modal behavior and appearance */
const props = defineProps({
  show: Boolean,
  size: String, // sm, lg, xl
  centered: Boolean,
  scrollable: Boolean,
  staticBackdrop: Boolean,
  fullscreen: [Boolean, String], // true or breakpoint string (e.g. 'md-down')
  variant: String // e.g. 'primary', 'success', 'danger'
})

/* Emits for parent communication */
const emit = defineEmits(['close', 'submit', 'confirm'])

/* Reactive form data for demonstration */
const form = reactive({
  name: '',
  price: '',
  category: ''
})

/* Computed classes */
const fullscreenClass = computed(() => {
  if (props.fullscreen === true) return 'modal-fullscreen'
  if (typeof props.fullscreen === 'string') return `modal-fullscreen-${props.fullscreen}`
  return ''
})

const variantClass = computed(() => {
  return props.variant ? `bg-${props.variant} text-white` : ''
})

/* Backdrop control */
const backdrop = true

/* Watch modal visibility to lock body scroll */
watch(
  () => props.show,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  }
)

/* Close modal */
function close() {
  emit('close')
}

/* Submit form */
function submitForm() {
  emit('submit', { ...form })
}

/* Confirm action */
function confirmAction() {
  emit('confirm')
}

/* Handle backdrop click */
function handleBackdropClick() {
  if (!props.staticBackdrop) close()
}

/* Handle ESC key */
function handleEsc(e) {
  if (e.key === 'Escape' && !props.staticBackdrop) close()
}
</script>

<style scoped>
.modal {
  transition: opacity 0.3s ease;
}
.modal.fade.show {
  opacity: 1;
}
.modal-backdrop {
  transition: opacity 0.3s ease;
}
</style>
