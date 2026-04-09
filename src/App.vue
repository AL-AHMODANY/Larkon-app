<!-- src/App.vue -->
<template>
  <div class="app-container" :class="{ 'dark-mode': isDarkMode }">
    <Sidebar />

    <div class="main-wrapper">
      <Header @toggle-dark-mode="toggleDarkMode" :is-dark="isDarkMode" />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Sidebar from "./components/layout/Sidebar.vue";
import Header from "./components/layout/Header.vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

provide("isDarkMode", isDarkMode);
</script>

<style scoped>
.app-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.app-container.dark-mode {
  background-color: #111827;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #f9fafb;
  transition: background-color 0.3s ease;
}

.dark-mode .main-wrapper {
  background-color: #1f2937;
}

.main-content {
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
}

.welcome-card {
  background: white;
  border-radius: 24px;
  padding: 28px 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #eef2f6;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.dark-mode .welcome-card {
  background: #374151;
  border-color: #4b5563;
}

.welcome-card h1 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.dark-mode .welcome-card h1 {
  color: #f3f4f6;
}

.welcome-card p {
  color: #4b5563;
  font-size: 0.95rem;
}

.dark-mode .welcome-card p {
  color: #9ca3af;
}
</style>
