<script setup>
import { ref } from 'vue'
import Modal from '../../views/baseUi/Modal.vue'

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div>
    <h2>Modal Page</h2>

    <button class="btn btn-primary" @click="openModal">
      Open Modal
    </button>

    <Modal
      :show="showModal"
      @close="closeModal"
    />
  </div>
</template>