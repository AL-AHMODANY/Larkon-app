<template>
  <div class="auth-page">
    <div class="auth-page__header">
      <h4 class="auth-page__title">Lock Screen</h4>
      <nav class="auth-page__breadcrumb">
        <span>Authentication</span>
        <span class="sep">›</span>
        <span class="active">Lock Screen</span>
      </nav>
    </div>

    <div class="auth-demo-wrap">
      <div class="auth-card-demo">
        <div class="acd-logo">
          <span class="acd-logo__icon">⚡</span>
          <span class="acd-logo__text">AL-AHMODANY</span>
        </div>

        <!-- Avatar -->
        <div class="lock-avatar">
          <div class="lock-avatar__img">
            <span class="lock-avatar__initials">{{ initials }}</span>
          </div>
          <div class="lock-avatar__lock">
            <i class="bx bx-lock-alt"></i>
          </div>
        </div>

        <h2 class="acd-title">{{ userName }}</h2>
        <p class="acd-sub">Enter your password to unlock the screen.</p>

        <div class="acd-field" :class="{ error: errors.password }">
          <label class="acd-label">Password</label>
          <div class="acd-input-wrap">
            <i class="bx bx-lock-alt acd-input-icon"></i>
            <input
              v-model="password"
              :type="showPass ? 'text' : 'password'"
              placeholder="Enter your password"
              class="acd-input"
              @keydown.enter="unlock"
            />
            <button class="acd-eye" type="button" @click="showPass = !showPass">
              <i :class="showPass ? 'bx bx-hide' : 'bx bx-show'"></i>
            </button>
          </div>
          <span v-if="errors.password" class="acd-error">{{ errors.password }}</span>
        </div>

        <div v-if="unlocked" class="acd-success">
          <i class="bx bx-check-circle"></i>
          Screen unlocked successfully!
        </div>

        <button class="acd-btn" @click="unlock" :disabled="loading">
          <span v-if="!loading">Unlock</span>
          <span v-else class="acd-spinner"></span>
        </button>

        <p class="acd-switch">
          Not you?
          <router-link to="/auth/signin" class="acd-link">Sign in as different user</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router   = useRouter();
const password = ref("");
const errors   = ref({});
const loading  = ref(false);
const unlocked = ref(false);
const showPass = ref(false);

// Try to get current user from session
const currentUser = (() => {
  try {
    const ls = localStorage.getItem("AL-AHMODANY-session");
    const ss = sessionStorage.getItem("AL-AHMODANY-session");
    return JSON.parse(ls || ss || "null");
  } catch { return null; }
})();

const userName = computed(() => currentUser?.name || "Admin User");
const initials = computed(() => {
  const name = currentUser?.name || "Admin User";
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
});

function unlock() {
  errors.value = {};
  unlocked.value = false;
  if (!password.value) { errors.value.password = "Password is required."; return; }

  loading.value = true;
  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem("AL-AHMODANY-users") || "[]");
    const email = currentUser?.email || "admin@AL-AHMODANY.com";
    const found = users.find(u => u.email === email && u.password === password.value)
      || (email === "admin@AL-AHMODANY.com" && password.value === "admin123");
    if (found) {
      unlocked.value = true;
      password.value = "";
      // Restore session
      const session = currentUser || { name: "Admin User", email, role: "Administrator", avatar: "", firstName: "Admin", loginTime: Date.now() };
      session.loginTime = Date.now();
      sessionStorage.setItem("AL-AHMODANY-session", JSON.stringify(session));
      setTimeout(() => router.push("/dashboard"), 600);
    } else {
      errors.value.password = "Incorrect password.";
    }
    loading.value = false;
  }, 700);
}
</script>

<style scoped>
.auth-page { display: flex; flex-direction: column; gap: 20px; }
.auth-page__header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
.auth-page__title  { font-size: 18px; font-weight: 700; color: var(--text-primary); margin: 0; }
.auth-page__breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-muted); }
.auth-page__breadcrumb .sep { opacity: 0.5; }
.auth-page__breadcrumb .active { color: var(--accent); font-weight: 500; }

.auth-demo-wrap { display: flex; justify-content: center; padding: 20px 0; }

.auth-card-demo {
  width: 100%; max-width: 400px;
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 14px; padding: 36px 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  text-align: center;
}

.acd-logo { display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 24px; }
.acd-logo__icon { font-size: 22px; }
.acd-logo__text { font-size: 18px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; }

.lock-avatar {
  position: relative; display: inline-flex;
  align-items: center; justify-content: center;
  margin-bottom: 16px;
}
.lock-avatar__img {
  width: 80px; height: 80px; border-radius: 50%;
  background: linear-gradient(135deg, #ff9b44, #fd7e14);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 16px rgba(253,126,20,0.35);
}
.lock-avatar__initials { font-size: 28px; font-weight: 700; color: #fff; }
.lock-avatar__lock {
  position: absolute; bottom: -4px; right: -4px;
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--card-bg); border: 2px solid var(--card-border);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; color: var(--text-muted);
}

.acd-title { font-size: 20px; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.acd-sub   { font-size: 13.5px; color: var(--text-muted); margin: 0 0 24px; }

.acd-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; text-align: left; }
.acd-field.error .acd-input { border-color: #e74c3c; }
.acd-label { font-size: 13px; font-weight: 600; color: var(--text-primary); }

.acd-input-wrap { position: relative; display: flex; align-items: center; }
.acd-input-icon { position: absolute; left: 12px; font-size: 16px; color: var(--text-muted); pointer-events: none; }
.acd-input {
  width: 100%; padding: 10px 12px 10px 36px;
  background: var(--bg-input, #f8f9fa); border: 1px solid var(--card-border);
  border-radius: 7px; font-size: 13.5px; color: var(--text-primary);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.acd-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(253,126,20,0.12); }
.acd-eye { position: absolute; right: 10px; background: none; border: none; cursor: pointer; color: var(--text-muted); font-size: 16px; padding: 4px; }
.acd-error { font-size: 12px; color: #e74c3c; text-align: left; }

.acd-success {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px; background: rgba(46,204,113,0.1); border: 1px solid rgba(46,204,113,0.25);
  border-radius: 7px; font-size: 13px; color: #2ecc71; margin-bottom: 14px; text-align: left;
}

.acd-btn {
  width: 100%; padding: 11px; background: var(--accent); color: #fff;
  border: none; border-radius: 7px; font-size: 14px; font-weight: 600;
  cursor: pointer; transition: opacity 0.15s; margin-bottom: 16px;
  display: flex; align-items: center; justify-content: center; min-height: 42px;
}
.acd-btn:hover:not(:disabled) { opacity: 0.88; }
.acd-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.acd-spinner {
  width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff; border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.acd-switch { font-size: 13px; color: var(--text-muted); margin: 0; }
.acd-link { color: var(--accent); text-decoration: none; font-weight: 500; }
.acd-link:hover { text-decoration: underline; }
</style>
