<template>
  <div class="auth-page">
    <div class="auth-page__header">
      <h4 class="auth-page__title">Sign In</h4>
      <nav class="auth-page__breadcrumb">
        <span>Authentication</span>
        <span class="sep">›</span>
        <span class="active">Sign In</span>
      </nav>
    </div>

    <div class="auth-demo-wrap">
      <div class="auth-card-demo">
        <!-- Logo -->
        <div class="acd-logo">
          <span class="acd-logo__icon">⚡</span>
          <span class="acd-logo__text">AL-AHMODANY</span>
        </div>

        <h2 class="acd-title">Welcome Back 👋</h2>
        <p class="acd-sub">Enter your email and password to sign in.</p>

        <div class="acd-field" :class="{ error: errors.email }">
          <label class="acd-label">Email Address</label>
          <div class="acd-input-wrap">
            <i class="bx bx-envelope acd-input-icon"></i>
            <input
              v-model="form.email"
              type="email"
              placeholder="admin@example.com"
              class="acd-input"
              @keydown.enter="submit"
            />
          </div>
          <span v-if="errors.email" class="acd-error">{{ errors.email }}</span>
        </div>

        <div class="acd-field" :class="{ error: errors.password }">
          <label class="acd-label">Password</label>
          <div class="acd-input-wrap">
            <i class="bx bx-lock-alt acd-input-icon"></i>
            <input
              v-model="form.password"
              :type="showPass ? 'text' : 'password'"
              placeholder="Enter your password"
              class="acd-input"
              @keydown.enter="submit"
            />
            <button class="acd-eye" type="button" @click="showPass = !showPass">
              <i :class="showPass ? 'bx bx-hide' : 'bx bx-show'"></i>
            </button>
          </div>
          <span v-if="errors.password" class="acd-error">{{ errors.password }}</span>
        </div>

        <div class="acd-row">
          <label class="acd-check">
            <input type="checkbox" v-model="form.remember" />
            <span>Remember me</span>
          </label>
          <a href="#" class="acd-link" @click.prevent>Forgot password?</a>
        </div>

        <div v-if="errors.general" class="acd-general-error">
          <i class="bx bx-error-circle"></i>
          {{ errors.general }}
        </div>

        <div v-if="success" class="acd-success">
          <i class="bx bx-check-circle"></i>
          Signed in successfully!
        </div>

        <button class="acd-btn" @click="submit" :disabled="loading">
          <span v-if="!loading">Sign In</span>
          <span v-else class="acd-spinner"></span>
        </button>

        <p class="acd-switch">
          Don't have an account?
          <router-link to="/auth/signup" class="acd-link">Create account</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router  = useRouter();
const form    = ref({ email: "", password: "", remember: false });
const errors  = ref({});
const loading = ref(false);
const success = ref(false);
const showPass = ref(false);

function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

function submit() {
  errors.value = {};
  success.value = false;
  const { email, password } = form.value;
  if (!email)                  errors.value.email    = "Email is required.";
  else if (!validateEmail(email)) errors.value.email = "Enter a valid email.";
  if (!password)               errors.value.password = "Password is required.";
  if (Object.keys(errors.value).length) return;

  loading.value = true;
  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem("AL-AHMODANY-users") || "[]");
    let found = users.find(u => u.email === email && u.password === password);
    // Demo account fallback
    if (!found && email === "admin@AL-AHMODANY.com" && password === "admin123") {
      found = { name: "Admin User", email, password, role: "Administrator", avatar: "" };
      if (!users.length) {
        users.push(found);
        localStorage.setItem("AL-AHMODANY-users", JSON.stringify(users));
      }
    }
    if (found) {
      // Write session — same format as Header.vue setSession()
      const session = {
        name: found.name,
        email: found.email,
        role: found.role || "User",
        avatar: found.avatar || "",
        firstName: found.name.split(" ")[0],
        loginTime: Date.now(),
      };
      if (form.value.remember) {
        localStorage.setItem("AL-AHMODANY-session", JSON.stringify(session));
      } else {
        sessionStorage.setItem("AL-AHMODANY-session", JSON.stringify(session));
      }
      success.value = true;
      setTimeout(() => router.push("/dashboard"), 600);
    } else {
      errors.value.general = "Invalid email or password.";
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

.auth-demo-wrap {
  display: flex; justify-content: center; align-items: flex-start;
  padding: 20px 0;
}

.auth-card-demo {
  width: 100%; max-width: 440px;
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 14px; padding: 36px 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.acd-logo {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 24px;
}
.acd-logo__icon { font-size: 22px; }
.acd-logo__text { font-size: 18px; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; }

.acd-title { font-size: 22px; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.acd-sub   { font-size: 13.5px; color: var(--text-muted); margin: 0 0 24px; }

.acd-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.acd-field.error .acd-input { border-color: #e74c3c; }
.acd-label { font-size: 13px; font-weight: 600; color: var(--text-primary); }

.acd-input-wrap { position: relative; display: flex; align-items: center; }
.acd-input-icon {
  position: absolute; left: 12px; font-size: 16px;
  color: var(--text-muted); pointer-events: none;
}
.acd-input {
  width: 100%; padding: 10px 12px 10px 36px;
  background: var(--bg-input, #f8f9fa); border: 1px solid var(--card-border);
  border-radius: 7px; font-size: 13.5px; color: var(--text-primary);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.acd-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(253,126,20,0.12); }
.acd-eye {
  position: absolute; right: 10px; background: none; border: none;
  cursor: pointer; color: var(--text-muted); font-size: 16px; padding: 4px;
}
.acd-error { font-size: 12px; color: #e74c3c; }

.acd-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.acd-check { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-muted); cursor: pointer; }
.acd-link  { font-size: 13px; color: var(--accent); text-decoration: none; font-weight: 500; }
.acd-link:hover { text-decoration: underline; }

.acd-general-error {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px; background: rgba(231,76,60,0.1); border: 1px solid rgba(231,76,60,0.25);
  border-radius: 7px; font-size: 13px; color: #e74c3c; margin-bottom: 14px;
}
.acd-success {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px; background: rgba(46,204,113,0.1); border: 1px solid rgba(46,204,113,0.25);
  border-radius: 7px; font-size: 13px; color: #2ecc71; margin-bottom: 14px;
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

.acd-switch { font-size: 13px; color: var(--text-muted); text-align: center; margin: 0; }
</style>
