<template>
  <div class="auth-page">
    <div class="auth-page__header">
      <h4 class="auth-page__title">Reset Password</h4>
      <nav class="auth-page__breadcrumb">
        <span>Authentication</span>
        <span class="sep">›</span>
        <span class="active">Reset Password</span>
      </nav>
    </div>

    <div class="auth-demo-wrap">
      <div class="auth-card-demo">
        <div class="acd-logo">
          <span class="acd-logo__icon">⚡</span>
          <span class="acd-logo__text">AL-AHMODANY</span>
        </div>

        <div class="acd-icon-wrap">
          <i class="bx bx-lock-open-alt acd-big-icon"></i>
        </div>

        <h2 class="acd-title">Forgot Password?</h2>
        <p class="acd-sub">Enter your email and we'll send you a reset link.</p>

        <div v-if="!sent">
          <div class="acd-field" :class="{ error: errors.email }">
            <label class="acd-label">Email Address</label>
            <div class="acd-input-wrap">
              <i class="bx bx-envelope acd-input-icon"></i>
              <input
                v-model="email"
                type="email"
                placeholder="admin@example.com"
                class="acd-input"
                @keydown.enter="submit"
              />
            </div>
            <span v-if="errors.email" class="acd-error">{{ errors.email }}</span>
          </div>

          <button class="acd-btn" @click="submit" :disabled="loading">
            <span v-if="!loading">Send Reset Link</span>
            <span v-else class="acd-spinner"></span>
          </button>
        </div>

        <div v-else class="acd-success-block">
          <div class="acd-success-icon">
            <i class="bx bx-check-circle"></i>
          </div>
          <h3>Check your email</h3>
          <p>We've sent a password reset link to <strong>{{ email }}</strong></p>
          <button class="acd-btn acd-btn--outline" @click="sent = false; email = ''">
            Try another email
          </button>
        </div>

        <p class="acd-switch">
          Remember your password?
          <router-link to="/auth/signin" class="acd-link">Sign in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email   = ref("");
const errors  = ref({});
const loading = ref(false);
const sent    = ref(false);

function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

function submit() {
  errors.value = {};
  if (!email.value)                    errors.value.email = "Email is required.";
  else if (!validateEmail(email.value)) errors.value.email = "Enter a valid email.";
  if (errors.value.email) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    sent.value = true;
  }, 800);
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
  width: 100%; max-width: 420px;
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 14px; padding: 36px 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  text-align: center;
}

.acd-logo { display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 20px; }
.acd-logo__icon { font-size: 22px; }
.acd-logo__text { font-size: 18px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; }

.acd-icon-wrap { margin-bottom: 16px; }
.acd-big-icon { font-size: 52px; color: var(--accent); }

.acd-title { font-size: 22px; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
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
.acd-error { font-size: 12px; color: #e74c3c; text-align: left; }

.acd-btn {
  width: 100%; padding: 11px; background: var(--accent); color: #fff;
  border: none; border-radius: 7px; font-size: 14px; font-weight: 600;
  cursor: pointer; transition: opacity 0.15s; margin-bottom: 16px;
  display: flex; align-items: center; justify-content: center; min-height: 42px;
}
.acd-btn:hover:not(:disabled) { opacity: 0.88; }
.acd-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.acd-btn--outline {
  background: transparent; color: var(--accent);
  border: 1px solid var(--accent);
}
.acd-btn--outline:hover { background: rgba(253,126,20,0.08); }

.acd-spinner {
  width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff; border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.acd-success-block { display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 16px; }
.acd-success-icon { font-size: 52px; color: #2ecc71; }
.acd-success-block h3 { font-size: 18px; font-weight: 700; color: var(--text-primary); margin: 0; }
.acd-success-block p  { font-size: 13.5px; color: var(--text-muted); margin: 0; }

.acd-switch { font-size: 13px; color: var(--text-muted); margin: 0; }
.acd-link { color: var(--accent); text-decoration: none; font-weight: 500; }
.acd-link:hover { text-decoration: underline; }
</style>
