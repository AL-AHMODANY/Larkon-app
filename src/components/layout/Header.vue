<template>
  <!-- ── AUTH OVERLAY ──────────────────────────────────────── -->
  <Transition name="auth-fade">
    <div v-if="!isAuthenticated" class="auth-overlay">
      <div class="auth-card">
        <!-- Logo -->
        <div class="auth-logo">
          <span class="auth-logo__icon">⚡</span>
          <span class="auth-logo__text">Larkon</span>
        </div>

        <!-- Tab Switch -->
        <div class="auth-tabs">
          <button
            class="auth-tab"
            :class="{ active: authMode === 'login' }"
            @click="authMode = 'login'"
          >Sign In</button>
          <button
            class="auth-tab"
            :class="{ active: authMode === 'signup' }"
            @click="authMode = 'signup'"
          >Sign Up</button>
          <div class="auth-tab-indicator" :style="{ left: authMode === 'login' ? '4px' : 'calc(50% + 2px)', width: 'calc(50% - 6px)' }"></div>
        </div>

        <!-- LOGIN FORM -->
        <Transition name="form-slide" mode="out-in">
          <div v-if="authMode === 'login'" key="login" class="auth-form">
            <p class="auth-welcome">Welcome back 👋</p>
            <p class="auth-sub">Sign in to continue to Larkon.</p>

            <div class="auth-field" :class="{ error: loginErrors.email }">
              <label class="auth-label">Email Address</label>
              <div class="auth-input-wrap">
                <EnvelopeIcon class="auth-input-icon" />
                <input
                  v-model="loginForm.email"
                  type="email"
                  placeholder="admin@larkon.com"
                  class="auth-input"
                  @keydown.enter="doLogin"
                />
              </div>
              <span v-if="loginErrors.email" class="auth-error-msg">{{ loginErrors.email }}</span>
            </div>

            <div class="auth-field" :class="{ error: loginErrors.password }">
              <label class="auth-label">Password</label>
              <div class="auth-input-wrap">
                <LockClosedIcon class="auth-input-icon" />
                <input
                  v-model="loginForm.password"
                  :type="showLoginPass ? 'text' : 'password'"
                  placeholder="Enter your password"
                  class="auth-input"
                  @keydown.enter="doLogin"
                />
                <button class="auth-eye" @click="showLoginPass = !showLoginPass" type="button">
                  <EyeIcon v-if="!showLoginPass" class="auth-eye-icon" />
                  <EyeSlashIcon v-else class="auth-eye-icon" />
                </button>
              </div>
              <span v-if="loginErrors.password" class="auth-error-msg">{{ loginErrors.password }}</span>
            </div>

            <div class="auth-row">
              <label class="auth-check">
                <input type="checkbox" v-model="loginForm.remember" />
                <span>Remember me</span>
              </label>
              <a href="#" class="auth-link" @click.prevent>Forgot password?</a>
            </div>

            <div v-if="loginErrors.general" class="auth-general-error">
              <ExclamationCircleIcon class="auth-general-error__icon" />
              {{ loginErrors.general }}
            </div>

            <button class="auth-btn" @click="doLogin" :disabled="authLoading">
              <span v-if="!authLoading">Sign In</span>
              <span v-else class="auth-spinner"></span>
            </button>

            <p class="auth-switch">
              Don't have an account?
              <a href="#" @click.prevent="authMode = 'signup'" class="auth-link">Create account</a>
            </p>
          </div>

          <!-- SIGNUP FORM -->
          <div v-else key="signup" class="auth-form">
            <p class="auth-welcome">Create Account 🚀</p>
            <p class="auth-sub">Get started with Larkon Admin.</p>

            <div class="auth-field" :class="{ error: signupErrors.name }">
              <label class="auth-label">Full Name</label>
              <div class="auth-input-wrap">
                <UserCircleIcon class="auth-input-icon" />
                <input
                  v-model="signupForm.name"
                  type="text"
                  placeholder="John Doe"
                  class="auth-input"
                />
              </div>
              <span v-if="signupErrors.name" class="auth-error-msg">{{ signupErrors.name }}</span>
            </div>

            <div class="auth-field" :class="{ error: signupErrors.email }">
              <label class="auth-label">Email Address</label>
              <div class="auth-input-wrap">
                <EnvelopeIcon class="auth-input-icon" />
                <input
                  v-model="signupForm.email"
                  type="email"
                  placeholder="john@example.com"
                  class="auth-input"
                />
              </div>
              <span v-if="signupErrors.email" class="auth-error-msg">{{ signupErrors.email }}</span>
            </div>

            <div class="auth-field" :class="{ error: signupErrors.password }">
              <label class="auth-label">Password</label>
              <div class="auth-input-wrap">
                <LockClosedIcon class="auth-input-icon" />
                <input
                  v-model="signupForm.password"
                  :type="showSignupPass ? 'text' : 'password'"
                  placeholder="Min. 6 characters"
                  class="auth-input"
                />
                <button class="auth-eye" @click="showSignupPass = !showSignupPass" type="button">
                  <EyeIcon v-if="!showSignupPass" class="auth-eye-icon" />
                  <EyeSlashIcon v-else class="auth-eye-icon" />
                </button>
              </div>
              <span v-if="signupErrors.password" class="auth-error-msg">{{ signupErrors.password }}</span>
            </div>

            <div class="auth-field" :class="{ error: signupErrors.confirm }">
              <label class="auth-label">Confirm Password</label>
              <div class="auth-input-wrap">
                <LockClosedIcon class="auth-input-icon" />
                <input
                  v-model="signupForm.confirm"
                  :type="showConfirmPass ? 'text' : 'password'"
                  placeholder="Repeat your password"
                  class="auth-input"
                  @keydown.enter="doSignup"
                />
                <button class="auth-eye" @click="showConfirmPass = !showConfirmPass" type="button">
                  <EyeIcon v-if="!showConfirmPass" class="auth-eye-icon" />
                  <EyeSlashIcon v-else class="auth-eye-icon" />
                </button>
              </div>
              <span v-if="signupErrors.confirm" class="auth-error-msg">{{ signupErrors.confirm }}</span>
            </div>

            <div v-if="signupErrors.general" class="auth-general-error">
              <ExclamationCircleIcon class="auth-general-error__icon" />
              {{ signupErrors.general }}
            </div>

            <button class="auth-btn" @click="doSignup" :disabled="authLoading">
              <span v-if="!authLoading">Create Account</span>
              <span v-else class="auth-spinner"></span>
            </button>

            <p class="auth-switch">
              Already have an account?
              <a href="#" @click.prevent="authMode = 'login'" class="auth-link">Sign in</a>
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>

  <!-- ── MAIN TOPBAR (only shown when authenticated) ──────── -->
  <template v-if="isAuthenticated">
    <header class="topbar" :class="[`topbar--topbar-${topbarColor}`, { 'topbar--theme-dark': isDark }]">

      <!-- ── Left ──────────────────────────────────────────── -->
      <div class="topbar__left">
        <button class="topbar__icon-btn topbar__hamburger" title="Toggle Sidebar" @click="$emit('toggle-sidebar')">
          <Bars3Icon class="topbar__icon" />
        </button>
        <h4 class="topbar__title topbar__title--hide-sm">{{ pageTitle }}</h4>
      </div>

      <!-- ── Center: Live Clock ─────────────────────────────── -->
      <div class="topbar__clock topbar__clock--hide-sm">
        <span class="topbar__clock-time">{{ clockTime }}</span>
        <span class="topbar__clock-date">{{ clockDate }}</span>
      </div>

      <!-- ── Right ──────────────────────────────────────────── -->
      <div class="topbar__right">

        <!-- Refresh (hide on mobile) -->
        <button
          class="topbar__icon-btn topbar__icon-btn--hide-sm"
          title="Refresh Page"
          @click="refreshPage"
        >
          <ArrowPathIcon class="topbar__icon" />
        </button>

        <!-- Dark mode toggle -->
        <button
          class="topbar__icon-btn"
          :title="isDark ? 'Switch to Light' : 'Switch to Dark'"
          @click="toggleTheme"
        >
          <MoonIcon v-if="!isDark" class="topbar__icon" />
          <SunIcon  v-else         class="topbar__icon" />
        </button>

        <!-- Messages -->
        <div class="topbar__dropdown-wrap" ref="msgRef">
          <button
            class="topbar__icon-btn topbar__icon-btn--hide-xs"
            :class="{ active: msgOpen }"
            title="Messages"
            @click="toggleDropdown('msg')"
          >
            <ChatBubbleLeftEllipsisIcon class="topbar__icon" />
            <span v-if="unreadMessages" class="topbar__badge topbar__badge--blue">{{ unreadMessages }}</span>
          </button>

          <Transition name="dropdown">
            <div v-if="msgOpen" class="dropdown dropdown--msg">
              <div class="dropdown__header">
                <span class="dropdown__title">Messages</span>
                <span class="dropdown__subtitle">{{ unreadMessages }} new</span>
              </div>
              <div class="dropdown__body">
                <a
                  v-for="msg in messages"
                  :key="msg.id"
                  href="#"
                  class="msg-item"
                  :class="{ unread: !msg.read }"
                  @click.prevent="readMsg(msg)"
                >
                  <div class="msg-item__avatar-wrap">
                    <div
                      class="msg-item__avatar"
                      :style="msg.avatar ? {} : { background: msg.avatarBg }"
                    >
                      <img v-if="msg.avatar" :src="msg.avatar" :alt="msg.name" class="msg-item__avatar-img" @error="msg.avatar = null" />
                      <span v-else>{{ msg.initials }}</span>
                    </div>
                    <span v-if="msg.online" class="msg-item__online"></span>
                  </div>
                  <div class="msg-item__body">
                    <div class="msg-item__row">
                      <p class="msg-item__name">{{ msg.name }}</p>
                      <span class="msg-item__time">{{ msg.time }}</span>
                    </div>
                    <p class="msg-item__text">{{ msg.text }}</p>
                  </div>
                  <span v-if="!msg.read" class="notif-item__dot"></span>
                </a>
              </div>
              <div class="dropdown__footer">
                <a href="#" class="dropdown__footer-link" @click.prevent>View all Messages</a>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Notifications -->
        <div class="topbar__dropdown-wrap" ref="notificationsRef">
          <button
            class="topbar__icon-btn"
            :class="{ active: notifOpen }"
            title="Notifications"
            @click="toggleDropdown('notif')"
          >
            <BellIcon class="topbar__icon" />
            <span v-if="unreadCount" class="topbar__badge">{{ unreadCount }}</span>
          </button>

          <Transition name="dropdown">
            <div v-if="notifOpen" class="dropdown dropdown--notif">
              <div class="dropdown__header">
                <span class="dropdown__title">Notifications</span>
                <button class="dropdown__mark-all" @click="markAllRead">Clear All</button>
              </div>
              <div class="dropdown__body">
                <div
                  v-for="notif in notifications"
                  :key="notif.id"
                  class="notif-item"
                  :class="{ unread: !notif.read }"
                  @click="readNotif(notif)"
                >
                  <div class="notif-item__icon" :style="{ background: notif.iconBg }">
                    <component :is="notif.icon" class="notif-item__svg" />
                  </div>
                  <div class="notif-item__body">
                    <p class="notif-item__text" v-html="notif.text"></p>
                    <span class="notif-item__time">{{ notif.time }}</span>
                  </div>
                  <span v-if="!notif.read" class="notif-item__dot"></span>
                </div>
              </div>
              <div class="dropdown__footer">
                <a href="#" class="dropdown__footer-link" @click.prevent>View all notifications</a>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Activity Stream -->
        <div class="topbar__dropdown-wrap topbar__icon-btn--hide-xs" ref="activityRef">
          <button
            class="topbar__icon-btn"
            :class="{ active: activityOpen }"
            title="Activity Stream"
            @click="toggleDropdown('activity')"
          >
            <ClockIcon class="topbar__icon" />
          </button>

          <Transition name="dropdown">
            <div v-if="activityOpen" class="dropdown dropdown--activity">
              <div class="dropdown__header">
                <span class="dropdown__title">Activity Stream</span>
              </div>
              <div class="dropdown__body">
                <div v-for="item in activityStream" :key="item.id" class="activity-item">
                  <div class="activity-item__icon-wrap">
                    <div v-if="item.avatar" class="activity-item__avatar">
                      <img :src="item.avatar" :alt="item.title" class="activity-item__avatar-img" @error="item.avatar = null" />
                    </div>
                    <div v-else class="activity-item__icon" :style="{ background: item.iconBg || '#f3f4f9' }">
                      <component :is="item.icon || DocumentTextIcon" class="activity-item__svg" />
                    </div>
                    <div class="activity-item__line" v-if="!item.last"></div>
                  </div>
                  <div class="activity-item__content">
                    <p class="activity-item__title">{{ item.title }}</p>
                    <p class="activity-item__desc" v-if="item.desc">{{ item.desc }}</p>
                    <div class="activity-item__files" v-if="item.files">
                      <a v-for="f in item.files" :key="f" href="#" class="activity-item__file-chip" @click.prevent>
                        <DocumentTextIcon class="activity-item__file-icon" />
                        {{ f }}
                      </a>
                    </div>
                    <span class="activity-item__time">{{ item.time }}</span>
                  </div>
                </div>
              </div>
              <div class="dropdown__footer">
                <a href="#" class="dropdown__footer-link" @click.prevent>View All Activity</a>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Language -->
        <div class="topbar__dropdown-wrap topbar__icon-btn--hide-xs" ref="langRef">
          <button
            class="topbar__icon-btn"
            :class="{ active: langOpen }"
            title="Language"
            @click="toggleDropdown('lang')"
          >
            <GlobeAltIcon class="topbar__icon" />
          </button>

          <Transition name="dropdown">
            <div v-if="langOpen" class="dropdown dropdown--lang">
              <div class="dropdown__header">
                <span class="dropdown__title">Language</span>
              </div>
              <div class="dropdown__body">
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  class="lang-item"
                  :class="{ active: activeLang === lang.code }"
                  @click="setLang(lang.code)"
                >
                  <span class="lang-item__flag">{{ lang.flag }}</span>
                  <span class="lang-item__name">{{ lang.name }}</span>
                  <CheckIcon v-if="activeLang === lang.code" class="lang-item__check" />
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <!-- User Avatar -->
        <div class="topbar__dropdown-wrap" ref="userRef">
          <button
            class="topbar__user-btn"
            :class="{ active: userOpen }"
            @click="toggleDropdown('user')"
          >
            <img
              v-if="currentUser && currentUser.avatar && !avatarError"
              :src="currentUser.avatar"
              :alt="currentUser.name"
              class="topbar__avatar"
              @error="avatarError = true"
            />
            <span v-else class="topbar__avatar-fallback">{{ userInitials }}</span>
          </button>

          <Transition name="dropdown">
            <div v-if="userOpen" class="dropdown dropdown--user">
              <div class="dropdown__user-head">
                <div class="dropdown__avatar-img-wrap">
                  <img
                    v-if="currentUser && currentUser.avatar && !avatarError"
                    :src="currentUser.avatar"
                    :alt="currentUser.name"
                    class="dropdown__avatar-img"
                    @error="avatarError = true"
                  />
                  <div v-else class="dropdown__avatar">{{ userInitials }}</div>
                </div>
                <div class="dropdown__user-info">
                  <p class="dropdown__user-name">Welcome {{ currentUser?.firstName || currentUser?.name?.split(' ')[0] }}!</p>
                  <p class="dropdown__user-role">{{ currentUser?.role || 'User' }}</p>
                </div>
              </div>
              <div class="dropdown__body">
                <a
                  v-for="item in userMenuItems"
                  :key="item.label"
                  href="#"
                  class="user-menu-item"
                  @click.prevent="handleUserMenu(item)"
                >
                  <component :is="item.icon" class="user-menu-item__icon" />
                  <span>{{ item.label }}</span>
                  <span v-if="item.badge" class="user-menu-item__badge">{{ item.badge }}</span>
                </a>
              </div>
              <div class="dropdown__footer">
                <button class="logout-btn" @click="handleLogout">
                  <ArrowRightOnRectangleIcon class="logout-btn__icon" />
                  Logout
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Settings -->
        <button class="topbar__icon-btn" title="Theme Settings" @click="settingsOpen = true">
          <Cog6ToothIcon class="topbar__icon" />
        </button>

        <!-- Search -->
        <div class="topbar__search" :class="{ focused: searchFocused }" ref="searchWrapRef">
          <MagnifyingGlassIcon class="topbar__search-icon" />
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="topbar__search-input"
            @focus="searchFocused = true"
            @blur="onSearchBlur"
            @keydown.esc="clearSearch"
            @keydown.enter="doSearch"
          />
          <button v-if="searchQuery" class="topbar__search-clear" @click="clearSearch">
            <XMarkIcon class="topbar__icon topbar__icon--xs" />
          </button>

          <Transition name="dropdown">
            <div v-if="searchFocused && searchQuery.length > 1" class="dropdown dropdown--search">
              <div class="dropdown__header">
                <span class="dropdown__title">Results for "{{ searchQuery }}"</span>
              </div>
              <div class="dropdown__body">
                <template v-if="searchResults.length">
                  <a
                    v-for="result in searchResults"
                    :key="result.id"
                    href="#"
                    class="search-result-item"
                    @click.prevent
                  >
                    <div class="search-result-item__icon" :style="{ background: result.iconBg }">
                      <component :is="result.icon" class="search-result-item__svg" />
                    </div>
                    <div class="search-result-item__body">
                      <p class="search-result-item__label">{{ result.label }}</p>
                      <span class="search-result-item__sub">{{ result.sub }}</span>
                    </div>
                    <span class="search-result-item__arrow">›</span>
                  </a>
                </template>
                <div v-else class="search-empty">
                  <MagnifyingGlassIcon class="search-empty__icon" />
                  <p>No results found</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>

      </div>
    </header>

    <!-- ── Theme Settings Offcanvas ──────────────────────── -->
    <Transition name="offcanvas">
      <div v-if="settingsOpen" class="offcanvas-overlay" @click.self="settingsOpen = false">
        <div class="offcanvas">
          <div class="offcanvas__header">
            <h5 class="offcanvas__title">Theme Settings</h5>
            <button class="offcanvas__close" @click="settingsOpen = false">
              <XMarkIcon style="width:18px;height:18px;" />
            </button>
          </div>
          <div class="offcanvas__body">

            <div class="settings-section">
              <p class="settings-section__label">Color Scheme</p>
              <div class="settings-grid settings-grid--2">
                <button class="settings-card" :class="{ active: !isDark }" @click="setTheme('light')">
                  <div class="settings-card__preview settings-card__preview--light"></div>
                  <span>Light</span>
                </button>
                <button class="settings-card" :class="{ active: isDark }" @click="setTheme('dark')">
                  <div class="settings-card__preview settings-card__preview--dark"></div>
                  <span>Dark</span>
                </button>
              </div>
            </div>

            <div class="settings-section">
              <p class="settings-section__label">Topbar Color</p>
              <div class="settings-grid settings-grid--2">
                <button
                  v-for="opt in ['light','dark']"
                  :key="opt"
                  class="settings-card"
                  :class="{ active: topbarColor === opt }"
                  @click="setTopbarColor(opt)"
                >
                  <div class="settings-card__preview" :class="`settings-card__preview--topbar-${opt}`"></div>
                  <span>{{ opt.charAt(0).toUpperCase() + opt.slice(1) }}</span>
                </button>
              </div>
            </div>

            <div class="settings-section">
              <p class="settings-section__label">Menu Color</p>
              <div class="settings-grid settings-grid--2">
                <button
                  v-for="opt in ['light','dark']"
                  :key="opt"
                  class="settings-card"
                  :class="{ active: menuColor === opt }"
                  @click="setMenuColor(opt)"
                >
                  <div class="settings-card__preview" :class="`settings-card__preview--menu-${opt}`"></div>
                  <span>{{ opt.charAt(0).toUpperCase() + opt.slice(1) }}</span>
                </button>
              </div>
            </div>

            <div class="settings-section">
              <p class="settings-section__label">Sidebar Size</p>
              <div class="settings-grid settings-grid--2">
                <button
                  v-for="opt in sidebarSizes"
                  :key="opt.value"
                  class="settings-card"
                  :class="{ active: sidebarSize === opt.value }"
                  @click="setSidebarSize(opt.value)"
                >
                  <div class="settings-card__preview" :class="`settings-card__preview--sidebar-${opt.value}`"></div>
                  <span>{{ opt.label }}</span>
                </button>
              </div>
            </div>

            <!-- Inactivity Timer -->
            <div class="settings-section">
              <p class="settings-section__label">Auto Logout</p>
              <div class="settings-grid settings-grid--2">
                <button
                  v-for="opt in inactivityOptions"
                  :key="opt.value"
                  class="settings-card"
                  :class="{ active: inactivityTimeout === opt.value }"
                  @click="setInactivityTimeout(opt.value)"
                >
                  <span style="font-size:20px;">{{ opt.icon }}</span>
                  <span>{{ opt.label }}</span>
                </button>
              </div>
            </div>

            <button class="settings-reset" @click="resetSettings">
              <ArrowPathIcon style="width:15px;height:15px;" />
              Reset to Default
            </button>

          </div>
        </div>
      </div>
    </Transition>

    <!-- ── Inactivity Warning Modal ──────────────────────── -->
    <Transition name="modal-fade">
      <div v-if="showInactivityWarning" class="inactivity-modal-overlay">
        <div class="inactivity-modal">
          <div class="inactivity-modal__icon">⏰</div>
          <h3 class="inactivity-modal__title">Still there?</h3>
          <p class="inactivity-modal__text">You'll be logged out in <strong>{{ inactivityCountdown }}s</strong> due to inactivity.</p>
          <div class="inactivity-modal__actions">
            <button class="inactivity-modal__btn inactivity-modal__btn--primary" @click="resetInactivity">Stay Logged In</button>
            <button class="inactivity-modal__btn inactivity-modal__btn--ghost" @click="handleLogout">Logout</button>
          </div>
        </div>
      </div>
    </Transition>
  </template>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import {
  MoonIcon, SunIcon, BellIcon, Cog6ToothIcon, GlobeAltIcon,
  MagnifyingGlassIcon, XMarkIcon, CheckIcon, ArrowRightOnRectangleIcon,
  UserCircleIcon, LockClosedIcon, EnvelopeIcon, ShoppingBagIcon,
  CurrencyDollarIcon, UserGroupIcon, Bars3Icon, ArrowPathIcon,
  ChatBubbleLeftEllipsisIcon,
  QuestionMarkCircleIcon, ClockIcon, DocumentTextIcon, CheckCircleIcon,
  TrophyIcon, UserPlusIcon, ArrowDownTrayIcon, PhotoIcon, TagIcon,
  ShieldCheckIcon, StarIcon, EyeIcon, EyeSlashIcon, ExclamationCircleIcon,
} from "@heroicons/vue/24/outline";

// ── Props & Emits ────────────────────────────────────────────
const props = defineProps({
  pageTitle: { type: String, default: "WELCOME!" },
});

const emit = defineEmits([
  "toggle-sidebar", "open-settings", "logout", "search",
  "sidebar-size-change", "theme-change", "topbar-color-change", "menu-color-change",
]);

// ── AUTH ────────────────────────────────────────────────────
const isAuthenticated = ref(false);
const authMode        = ref("login");
const authLoading     = ref(false);
const showLoginPass   = ref(false);
const showSignupPass  = ref(false);
const showConfirmPass = ref(false);
const currentUser     = ref(null);

const loginForm  = ref({ email: "", password: "", remember: false });
const signupForm = ref({ name: "", email: "", password: "", confirm: "" });
const loginErrors  = ref({});
const signupErrors = ref({});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function doLogin() {
  loginErrors.value = {};
  const { email, password } = loginForm.value;

  if (!email) { loginErrors.value.email = "Email is required."; }
  else if (!validateEmail(email)) { loginErrors.value.email = "Enter a valid email."; }
  if (!password) { loginErrors.value.password = "Password is required."; }
  if (Object.keys(loginErrors.value).length) return;

  authLoading.value = true;
  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem("larkon-users") || "[]");
    const found = users.find(u => u.email === email && u.password === password);

    if (found) {
      setSession(found, loginForm.value.remember);
    } else {
      // demo fallback: if no users exist yet, allow a demo login
      if (users.length === 0 && email === "admin@larkon.com" && password === "admin123") {
        const demo = { name: "Admin User", email, password, role: "Administrator", avatar: "" };
        users.push(demo);
        localStorage.setItem("larkon-users", JSON.stringify(users));
        setSession(demo, loginForm.value.remember);
      } else {
        loginErrors.value.general = "Invalid email or password.";
      }
    }
    authLoading.value = false;
  }, 800);
}

function doSignup() {
  signupErrors.value = {};
  const { name, email, password, confirm } = signupForm.value;

  if (!name.trim())                 signupErrors.value.name = "Full name is required.";
  if (!email)                        signupErrors.value.email = "Email is required.";
  else if (!validateEmail(email))   signupErrors.value.email = "Enter a valid email.";
  if (!password)                     signupErrors.value.password = "Password is required.";
  else if (password.length < 6)     signupErrors.value.password = "Min. 6 characters.";
  if (!confirm)                      signupErrors.value.confirm = "Please confirm password.";
  else if (confirm !== password)    signupErrors.value.confirm = "Passwords do not match.";
  if (Object.keys(signupErrors.value).length) return;

  authLoading.value = true;
  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem("larkon-users") || "[]");
    if (users.find(u => u.email === email)) {
      signupErrors.value.general = "An account with this email already exists.";
      authLoading.value = false;
      return;
    }
    const newUser = { name: name.trim(), email, password, role: "User", avatar: "" };
    users.push(newUser);
    localStorage.setItem("larkon-users", JSON.stringify(users));
    setSession(newUser, false);
    authLoading.value = false;
  }, 800);
}

function setSession(user, remember) {
  const session = {
    ...user,
    firstName: user.name.split(" ")[0],
    loginTime: Date.now(),
  };
  delete session.password;
  if (remember) {
    localStorage.setItem("larkon-session", JSON.stringify(session));
  } else {
    sessionStorage.setItem("larkon-session", JSON.stringify(session));
  }
  currentUser.value = session;
  isAuthenticated.value = true;
  resetInactivity();
}

function loadSession() {
  const ls = localStorage.getItem("larkon-session");
  const ss = sessionStorage.getItem("larkon-session");
  const raw = ls || ss;
  if (raw) {
    try {
      currentUser.value = JSON.parse(raw);
      isAuthenticated.value = true;
      return true;
    } catch { /* ignore */ }
  }
  return false;
}

function handleLogout() {
  userOpen.value = false;
  showInactivityWarning.value = false;
  localStorage.removeItem("larkon-session");
  sessionStorage.removeItem("larkon-session");
  isAuthenticated.value = false;
  currentUser.value = null;
  clearInactivityTimers();
  emit("logout");
}

const userInitials = computed(() => {
  if (!currentUser.value) return "?";
  return currentUser.value.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
});

const avatarError = ref(false);

// ── Live Clock ───────────────────────────────────────────────
const clockTime = ref("");
const clockDate = ref("");
let clockInterval = null;

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clockTime.value = `${h}:${m}:${s}`;
  clockDate.value = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

// ── Theme ────────────────────────────────────────────────────
const isDark      = ref(false);
const topbarColor = ref("light");
const menuColor   = ref("dark");

function saveSettings() {
  const settings = {
    colorScheme:  isDark.value ? "dark" : "light",
    topbarColor:  topbarColor.value,
    menuColor:    menuColor.value,
    sidebarSize:  sidebarSize.value,
    inactivity:   inactivityTimeout.value,
  };
  localStorage.setItem("larkon_settings", JSON.stringify(settings));
}

function applyTheme(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  saveSettings();
}

function toggleTheme() {
  isDark.value = !isDark.value;
  applyTheme(isDark.value);
  emit("theme-change", isDark.value ? "dark" : "light");
}

function setTheme(mode) {
  isDark.value = mode === "dark";
  applyTheme(isDark.value);
  emit("theme-change", mode);
}

function setTopbarColor(color) {
  topbarColor.value = color;
  document.body.setAttribute("data-topbar", color);
  saveSettings();
  emit("topbar-color-change", color);
}

function setMenuColor(color) {
  menuColor.value = color;
  document.body.setAttribute("data-menu", color);
  saveSettings();
  emit("menu-color-change", color);
}

// ── Refresh ──────────────────────────────────────────────────
function refreshPage() {
  window.location.reload();
}

// ── Dropdowns ────────────────────────────────────────────────
const msgOpen      = ref(false);
const notifOpen    = ref(false);
const activityOpen = ref(false);
const langOpen     = ref(false);
const userOpen     = ref(false);

function toggleDropdown(name) {
  const map = { msg: msgOpen, notif: notifOpen, activity: activityOpen, lang: langOpen, user: userOpen };
  const cur = map[name];
  const next = !cur.value;
  Object.values(map).forEach(d => (d.value = false));
  cur.value = next;
}

// ── Messages ─────────────────────────────────────────────────
const msgRef = ref(null);
const messages = ref([
  { id: 1, name: "Josephine Thompson", initials: "JT", avatarBg: "#e3f2fd", avatar: "https://techzaa.in/larkon/admin/assets/images/users/avatar-1.jpg", text: "Wow 😍! this admin looks good and awesome design", time: "2 min ago", read: false, online: true },
  { id: 2, name: "Donoghue Susan", initials: "DS", avatarBg: "#fce4ec", avatar: null, text: "Hi, How are you? What about our next meeting", time: "12 min ago", read: false, online: false },
  { id: 3, name: "Jacob Gines", initials: "JG", avatarBg: "#e8f5e9", avatar: "https://techzaa.in/larkon/admin/assets/images/users/avatar-3.jpg", text: "Answered to your comment on the cash flow forecast's graph 🔔", time: "1 hr ago", read: false, online: true },
  { id: 4, name: "Shawn Bunch", initials: "SB", avatarBg: "#fff3e8", avatar: "https://techzaa.in/larkon/admin/assets/images/users/avatar-5.jpg", text: "Commented on Admin panel.", time: "3 hrs ago", read: true, online: false },
  { id: 5, name: "You have received", initials: "YH", avatarBg: "#f3e5f5", avatar: null, text: "20 new messages in the conversation", time: "5 hrs ago", read: true, online: false },
]);
const unreadMessages = computed(() => messages.value.filter(m => !m.read).length);
function readMsg(msg) { msg.read = true; }

// ── Notifications ─────────────────────────────────────────────
const notificationsRef = ref(null);
const notifications = ref([
  { id: 1, text: "New order <strong>#RB9652</strong> received from Judith Fritsche.", time: "2 min ago", read: false, icon: ShoppingBagIcon, iconBg: "#fff3e8" },
  { id: 2, text: "Payment of <strong>$750.95</strong> processed successfully.", time: "15 min ago", read: false, icon: CurrencyDollarIcon, iconBg: "#e8f5e9" },
  { id: 3, text: "<strong>3 new leads</strong> added this week.", time: "1 hr ago", read: false, icon: UserGroupIcon, iconBg: "#e3f2fd" },
  { id: 4, text: "Server maintenance scheduled for tonight at 2AM.", time: "3 hrs ago", read: true, icon: Cog6ToothIcon, iconBg: "#f3f4f9" },
  { id: 5, text: "Your monthly report is ready to download.", time: "Yesterday", read: true, icon: EnvelopeIcon, iconBg: "#fce4ec" },
]);
const unreadCount = computed(() => notifications.value.filter(n => !n.read).length);
function readNotif(notif) { notif.read = true; }
function markAllRead() { notifications.value.forEach(n => (n.read = true)); }

// ── Activity Stream ───────────────────────────────────────────
const activityRef = ref(null);
const activityStream = ref([
  { id: 1, title: "Report-Fix / Update", desc: "Add 3 files to Tasks", files: ["Concept.fig", "larkon.docs"], time: "Monday, 4:24 PM", icon: DocumentTextIcon, iconBg: "#e3f2fd" },
  { id: 2, title: "Project Status", desc: "Marked Design as Completed — UI/UX Figma Design", time: "Monday, 3:00 PM", icon: CheckCircleIcon, iconBg: "#e8f5e9" },
  { id: 3, title: "Larkon Application UI v2.0.0 Latest", desc: "Get access to over 20+ pages including a dashboard layout.", time: "Monday, 2:10 PM", icon: ArrowDownTrayIcon, iconBg: "#fff3e8" },
  { id: 4, title: "Alex Smith Attached Photos", desc: "3 photos added to the project gallery.", time: "Monday 1:00 PM", icon: PhotoIcon, iconBg: "#fce4ec", avatar: "https://techzaa.in/larkon/admin/assets/images/users/avatar-7.jpg" },
  { id: 5, title: "Rebecca J. added a new team member", desc: "Added a new member to Front Dashboard", time: "Monday 10:00 AM", icon: UserPlusIcon, iconBg: "#e8f5e9", avatar: "https://techzaa.in/larkon/admin/assets/images/users/avatar-6.jpg" },
  { id: 6, title: "Achievements", desc: 'Earned a "Best Product Award"', time: "Monday 9:30 AM", icon: TrophyIcon, iconBg: "#fff8e1", last: true },
]);

// ── Language ──────────────────────────────────────────────────
const langRef    = ref(null);
const activeLang = ref("en");
const languages  = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "French",  flag: "🇫🇷" },
  { code: "de", name: "German",  flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "ar", name: "Arabic",  flag: "🇸🇦" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
];
function setLang(code) {
  activeLang.value = code;
  langOpen.value = false;
  localStorage.setItem("larkon-lang", code);
}

// ── User Menu ─────────────────────────────────────────────────
const userRef = ref(null);
const userMenuItems = [
  { label: "Profile",      icon: UserCircleIcon,       badge: null },
  { label: "Messages",     icon: EnvelopeIcon,          badge: "5"  },
  { label: "Pricing",      icon: TagIcon,               badge: null },
  { label: "Help",         icon: QuestionMarkCircleIcon, badge: null },
  { label: "Lock Screen",  icon: LockClosedIcon,        badge: null },
];

function handleUserMenu(item) {
  userOpen.value = false;
  emit("open-settings", item.label);
}

// ── Settings Offcanvas ────────────────────────────────────────
const settingsOpen = ref(false);
const sidebarSize  = ref("default");
const sidebarSizes = [
  { label: "Default",     value: "default"      },
  { label: "Condensed",   value: "condensed"    },
  { label: "Hidden",      value: "hidden"       },
  { label: "Small Hover", value: "small-hover"  },
];

function setSidebarSize(size) {
  sidebarSize.value = size;
  saveSettings();
  emit("sidebar-size-change", size);
}

function resetSettings() {
  setTheme("light");
  setTopbarColor("light");
  setMenuColor("light");
  setSidebarSize("default");
  setInactivityTimeout(0);
}

// ── Inactivity Auto Logout ────────────────────────────────────
const inactivityTimeout     = ref(0);
const showInactivityWarning = ref(false);
const inactivityCountdown   = ref(30);
const inactivityOptions = [
  { value: 0,    label: "Off",    icon: "🔕" },
  { value: 5,    label: "5 min",  icon: "⏱️" },
  { value: 15,   label: "15 min", icon: "⏰" },
  { value: 30,   label: "30 min", icon: "🕐" },
];

let inactivityTimer = null;
let warningTimer    = null;
let countdownTimer  = null;

function setInactivityTimeout(mins) {
  inactivityTimeout.value = mins;
  saveSettings();
  clearInactivityTimers();
  if (mins > 0) startInactivityTimer();
}

function startInactivityTimer() {
  if (!inactivityTimeout.value) return;
  clearInactivityTimers();
  inactivityTimer = setTimeout(() => {
    showInactivityWarning.value = true;
    inactivityCountdown.value = 30;
    countdownTimer = setInterval(() => {
      inactivityCountdown.value--;
      if (inactivityCountdown.value <= 0) {
        clearInterval(countdownTimer);
        handleLogout();
      }
    }, 1000);
  }, inactivityTimeout.value * 60 * 1000);
}

function resetInactivity() {
  showInactivityWarning.value = false;
  clearInactivityTimers();
  if (inactivityTimeout.value > 0) startInactivityTimer();
}

function clearInactivityTimers() {
  clearTimeout(inactivityTimer);
  clearTimeout(warningTimer);
  clearInterval(countdownTimer);
}

const INACTIVITY_EVENTS = ["mousemove", "keydown", "click", "scroll", "touchstart"];

function onUserActivity() {
  if (!showInactivityWarning.value) resetInactivity();
}

// ── Search ────────────────────────────────────────────────────
const searchQuery   = ref("");
const searchFocused = ref(false);
const searchInput   = ref(null);
const searchWrapRef = ref(null);

const allSearchData = [
  { id: 1,  label: "Dashboard",       sub: "Page",     icon: Cog6ToothIcon,              iconBg: "#f3f4f9" },
  { id: 2,  label: "Orders",          sub: "Page",     icon: ShoppingBagIcon,            iconBg: "#fff3e8" },
  { id: 3,  label: "Anna M. Hines",   sub: "Customer", icon: UserCircleIcon,             iconBg: "#e3f2fd" },
  { id: 4,  label: "Judith Fritsche", sub: "Customer", icon: UserCircleIcon,             iconBg: "#e3f2fd" },
  { id: 5,  label: "Revenue Report",  sub: "Report",   icon: CurrencyDollarIcon,         iconBg: "#e8f5e9" },
  { id: 6,  label: "New Leads",       sub: "CRM",      icon: UserGroupIcon,              iconBg: "#fce4ec" },
  { id: 7,  label: "Chat",            sub: "App",      icon: ChatBubbleLeftEllipsisIcon, iconBg: "#e8f5e9" },
  { id: 8,  label: "Calendar",        sub: "App",      icon: ClockIcon,                  iconBg: "#e3f2fd" },
  { id: 9,  label: "Products",        sub: "Page",     icon: TagIcon,                    iconBg: "#fff3e8" },
  { id: 10, label: "Settings",        sub: "Page",     icon: Cog6ToothIcon,              iconBg: "#f3f4f9" },
  { id: 11, label: "Invoices",        sub: "Finance",  icon: DocumentTextIcon,           iconBg: "#e8f5e9" },
  { id: 12, label: "Customers",       sub: "Users",    icon: UserGroupIcon,              iconBg: "#fce4ec" },
  { id: 13, label: "Sellers",         sub: "Users",    icon: ShieldCheckIcon,            iconBg: "#e3f2fd" },
  { id: 14, label: "Reviews",         sub: "Content",  icon: StarIcon,                   iconBg: "#fff8e1" },
];

const searchResults = computed(() => {
  if (searchQuery.value.length < 2) return [];
  const q = searchQuery.value.toLowerCase();
  return allSearchData.filter(i => i.label.toLowerCase().includes(q) || i.sub.toLowerCase().includes(q)).slice(0, 6);
});

function onSearchBlur() {
  setTimeout(() => { searchFocused.value = false; }, 200);
}
function clearSearch() {
  searchQuery.value = "";
  searchFocused.value = false;
  searchInput.value?.blur();
}
function doSearch() { emit("search", searchQuery.value); }

// ── Click Outside ─────────────────────────────────────────────
function handleClickOutside(e) {
  if (notificationsRef.value && !notificationsRef.value.contains(e.target)) notifOpen.value    = false;
  if (langRef.value           && !langRef.value.contains(e.target))          langOpen.value     = false;
  if (userRef.value           && !userRef.value.contains(e.target))          userOpen.value     = false;
  if (msgRef.value            && !msgRef.value.contains(e.target))           msgOpen.value      = false;
  if (activityRef.value       && !activityRef.value.contains(e.target))      activityOpen.value = false;
  if (searchWrapRef.value     && !searchWrapRef.value.contains(e.target))    searchFocused.value = false;
}

// ── Lifecycle ─────────────────────────────────────────────────
onMounted(() => {
  // Restore session
  loadSession();

  // Restore settings from localStorage
  try {
    const s = JSON.parse(localStorage.getItem("larkon_settings") || "{}");
    if (s.colorScheme === "dark") { isDark.value = true; document.documentElement.setAttribute("data-theme", "dark"); }
    if (s.topbarColor) { topbarColor.value = s.topbarColor; document.body.setAttribute("data-topbar", s.topbarColor); }
    if (s.menuColor)   { menuColor.value   = s.menuColor;   document.body.setAttribute("data-menu",   s.menuColor); }
    if (s.sidebarSize) sidebarSize.value = s.sidebarSize;
    if (s.inactivity)  inactivityTimeout.value = parseInt(s.inactivity) || 0;
  } catch { /* noop */ }
  const savedLang = localStorage.getItem("larkon-lang");
  if (savedLang) activeLang.value = savedLang;

  // Clock
  updateClock();
  clockInterval = setInterval(updateClock, 1000);

  // Events
  document.addEventListener("mousedown", handleClickOutside);

  // Inactivity
  INACTIVITY_EVENTS.forEach(e => document.addEventListener(e, onUserActivity, { passive: true }));
  if (isAuthenticated.value && inactivityTimeout.value > 0) startInactivityTimer();
});

onBeforeUnmount(() => {
  clearInterval(clockInterval);
  clearInactivityTimers();
  document.removeEventListener("mousedown", handleClickOutside);
  INACTIVITY_EVENTS.forEach(e => document.removeEventListener(e, onUserActivity));
});

// Watch auth change to start/stop inactivity
watch(isAuthenticated, (val) => {
  if (val && inactivityTimeout.value > 0) startInactivityTimer();
  else clearInactivityTimers();
});
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────────
   AUTH OVERLAY
───────────────────────────────────────────────────────────── */
.auth-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #f3f4f9 0%, #e8eaf2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
}

.auth-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 420px;
  padding: 36px 32px 32px;
  animation: auth-card-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes auth-card-in {
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.auth-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
}
.auth-logo__icon {
  font-size: 28px;
  background: linear-gradient(135deg, #ff9b44, #fd7e14);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.auth-logo__text {
  font-size: 26px;
  font-weight: 900;
  color: #313a46;
  letter-spacing: -0.5px;
}

/* Tabs */
.auth-tabs {
  display: flex;
  position: relative;
  background: #f3f4f9;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 24px;
}
.auth-tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 9px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #6c757d;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.2s ease;
  font-family: inherit;
}
.auth-tab.active { color: #fd7e14; }
.auth-tab-indicator {
  position: absolute;
  top: 4px;
  bottom: 4px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

/* Form */
.auth-welcome { font-size: 20px; font-weight: 800; color: #313a46; margin-bottom: 4px; }
.auth-sub     { font-size: 13px; color: #6c757d; margin-bottom: 20px; }

.auth-field   { margin-bottom: 16px; }
.auth-label   { display: block; font-size: 12.5px; font-weight: 700; color: #313a46; margin-bottom: 6px; }

.auth-input-wrap {
  display: flex;
  align-items: center;
  border: 1.5px solid #eef2f7;
  border-radius: 10px;
  padding: 0 12px;
  gap: 8px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  background: #fff;
}
.auth-input-wrap:focus-within {
  border-color: #fd7e14;
  box-shadow: 0 0 0 3px rgba(253,126,20,0.1);
}
.auth-field.error .auth-input-wrap { border-color: #e74c3c; }
.auth-field.error .auth-input-wrap:focus-within { box-shadow: 0 0 0 3px rgba(231,76,60,0.1); }

.auth-input-icon {
  width: 16px; height: 16px;
  color: #98a6ad; stroke-width: 1.8; flex-shrink: 0;
}
.auth-input {
  flex: 1; border: none; background: transparent;
  font-size: 13.5px; color: #313a46;
  outline: none; padding: 11px 0;
  font-family: inherit;
}
.auth-input::placeholder { color: #b0bac5; }

.auth-eye {
  border: none; background: transparent; padding: 0; cursor: pointer;
  color: #98a6ad; display: flex; align-items: center;
  transition: color 0.12s ease;
}
.auth-eye:hover { color: #fd7e14; }
.auth-eye-icon  { width: 16px; height: 16px; stroke-width: 1.8; }

.auth-error-msg { font-size: 11.5px; color: #e74c3c; margin-top: 5px; display: block; }

.auth-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.auth-check { display: flex; align-items: center; gap: 7px; font-size: 13px; color: #6c757d; cursor: pointer; }
.auth-check input { accent-color: #fd7e14; width: 14px; height: 14px; }
.auth-link  { font-size: 13px; color: #fd7e14; font-weight: 600; text-decoration: none; }
.auth-link:hover { text-decoration: underline; }

.auth-general-error {
  display: flex; align-items: center; gap: 8px;
  background: #fce4ec; color: #c0392b;
  border-radius: 8px; padding: 10px 12px;
  font-size: 13px; margin-bottom: 16px;
}
.auth-general-error__icon { width: 16px; height: 16px; flex-shrink: 0; }

.auth-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ff9b44, #fd7e14);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14.5px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.15s ease, transform 0.1s ease;
  box-shadow: 0 4px 14px rgba(253,126,20,0.35);
}
.auth-btn:hover:not(:disabled)  { opacity: 0.92; transform: translateY(-1px); }
.auth-btn:active:not(:disabled) { transform: translateY(0); }
.auth-btn:disabled { opacity: 0.65; cursor: not-allowed; }

.auth-spinner {
  width: 18px; height: 18px;
  border: 2.5px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.auth-switch { text-align: center; font-size: 13px; color: #6c757d; margin-top: 18px; }

/* ─────────────────────────────────────────────────────────────
   TOPBAR — matches Larkon exactly
───────────────────────────────────────────────────────────── */
.topbar {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 24px;
  background: #ffffff;
  border-bottom: 1px solid #eef2f7;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  gap: 4px;
  transition: background 0.2s, border-color 0.2s;
  overflow: visible;
}

/* Dark topbar variant */
.topbar--topbar-dark {
  background: #313a46;
  border-bottom-color: #404954;
}
.topbar--topbar-dark .topbar__title      { color: #e2e8f0; }
.topbar--topbar-dark .topbar__clock-time { color: #e2e8f0; }
.topbar--topbar-dark .topbar__clock-date { color: #8996af; }
.topbar--topbar-dark .topbar__icon-btn   { color: #8996af; }
.topbar--topbar-dark .topbar__icon-btn:hover,
.topbar--topbar-dark .topbar__icon-btn.active {
  background: rgba(255,255,255,0.08);
  color: #fd7e14;
}
.topbar--topbar-dark .topbar__badge      { border-color: #313a46; }
.topbar--topbar-dark .topbar__search     { background: rgba(255,255,255,0.07); border-color: #404954; }
.topbar--topbar-dark .topbar__search-input { color: #e2e8f0; }
.topbar--topbar-dark .topbar__search-input::placeholder { color: #5a6a82; }
.topbar--topbar-dark .topbar__search-icon { color: #8996af; }

/* Global dark theme — topbar auto-adapts */
.topbar--theme-dark {
  background: #313a46;
  border-bottom-color: #404954;
}
.topbar--theme-dark .topbar__title      { color: #e2e8f0; }
.topbar--theme-dark .topbar__clock-time { color: #e2e8f0; }
.topbar--theme-dark .topbar__clock-date { color: #8996af; }
.topbar--theme-dark .topbar__icon-btn   { color: #8996af; }
.topbar--theme-dark .topbar__icon-btn:hover,
.topbar--theme-dark .topbar__icon-btn.active {
  background: rgba(255,255,255,0.08);
  color: #fd7e14;
}
.topbar--theme-dark .topbar__user-btn   { border-color: #404954; }
.topbar--theme-dark .topbar__badge      { border-color: #313a46; }
.topbar--theme-dark .topbar__search     { background: rgba(255,255,255,0.07); border-color: #404954; }
.topbar--theme-dark .topbar__search-input { color: #e2e8f0; }
.topbar--theme-dark .topbar__search-input::placeholder { color: #5a6a82; }
.topbar--theme-dark .topbar__search-icon { color: #8996af; }

/* ── Left ── */
.topbar__left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.topbar__hamburger { flex-shrink: 0; }
.topbar__title {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #313a46;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

/* ── Center clock — flex item, truly centered, never overlaps ── */
.topbar__clock {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1;
  pointer-events: none;
  min-width: 0;
  padding: 0 8px;
  overflow: hidden;
}
.topbar__clock-time {
  font-size: 15px;
  font-weight: 700;
  color: #313a46;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.topbar__clock-date {
  font-size: 10px;
  font-weight: 500;
  color: #8996af;
  margin-top: 2px;
  white-space: nowrap;
}

/* ── Right ── */
.topbar__right {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}

/* ── Icon button ── */
.topbar__icon-btn {
  position: relative;
  width: 36px; height: 36px;
  border-radius: 8px;
  border: none;
  background: transparent;
  display: flex; align-items: center; justify-content: center;
  color: #6c757d;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;
}
.topbar__icon-btn:hover,
.topbar__icon-btn.active {
  background: #f4f6fb;
  color: #fd7e14;
}
.topbar__icon       { width: 20px; height: 20px; stroke-width: 1.7; }
.topbar__icon--xs   { width: 14px; height: 14px; }

/* ── Badge ── */
.topbar__badge {
  position: absolute;
  top: 3px; right: 3px;
  min-width: 16px; height: 16px;
  padding: 0 4px;
  border-radius: 99px;
  background: #fd7e14;
  color: #fff;
  font-size: 9px; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid #ffffff;
  line-height: 1;
}
.topbar__badge--blue { background: #5b73e8; }

/* ── User avatar button ── */
.topbar__user-btn {
  position: relative;
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 2px solid #eef2f7;
  background: transparent;
  padding: 0; overflow: hidden;
  cursor: pointer;
  transition: border-color 0.15s;
  flex-shrink: 0;
}
.topbar__user-btn:hover,
.topbar__user-btn.active { border-color: #fd7e14; }
.topbar__avatar {
  width: 100%; height: 100%;
  object-fit: cover; border-radius: 50%; display: block;
}
.topbar__avatar-fallback {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #ff9b44, #fd7e14);
  color: #fff; font-size: 13px; font-weight: 800;
}

/* ── Search bar ── */
.topbar__search {
  position: relative;
  display: flex; align-items: center; gap: 6px;
  background: #f4f6fb;
  border: 1px solid #eef2f7;
  border-radius: 8px;
  padding: 0 10px;
  height: 36px; width: 170px;
  transition: width 0.25s, border-color 0.15s, box-shadow 0.15s;
  margin-left: 4px;
}
.topbar__search.focused {
  width: 240px;
  border-color: #fd7e14;
  box-shadow: 0 0 0 3px rgba(253,126,20,0.1);
}
.topbar__search-icon  { width: 15px; height: 15px; color: #8996af; flex-shrink: 0; stroke-width: 2; }
.topbar__search-input {
  flex: 1; border: none; background: transparent;
  font-size: 13px; color: #313a46;
  outline: none; font-family: inherit; min-width: 0;
}
.topbar__search-input::placeholder { color: #8996af; }
.topbar__search-clear {
  border: none; background: transparent; padding: 0;
  display: flex; align-items: center;
  color: #8996af; cursor: pointer;
}
.topbar__search-clear:hover { color: #313a46; }

/* ─────────────────────────────────────────────────────────────
   DROPDOWNS
───────────────────────────────────────────────────────────── */
.topbar__dropdown-wrap { position: relative; }

.dropdown {
  position: absolute;
  top: calc(100% + 8px); right: 0;
  background: var(--card-bg, #fff);
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  z-index: 200; overflow: hidden;
}

.dropdown__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--card-border, #eef2f7);
}
.dropdown__title    { font-size: 13px; font-weight: 700; color: var(--text-primary, #313a46); }
.dropdown__subtitle { font-size: 11.5px; color: var(--accent, #fd7e14); font-weight: 600; }
.dropdown__mark-all {
  font-size: 11.5px; font-weight: 600; color: var(--accent, #fd7e14);
  border: none; background: transparent; cursor: pointer; font-family: inherit;
}
.dropdown__mark-all:hover { text-decoration: underline; }
.dropdown__body { max-height: 360px; overflow-y: auto; }
.dropdown__body::-webkit-scrollbar { width: 4px; }
.dropdown__body::-webkit-scrollbar-track { background: transparent; }
.dropdown__body::-webkit-scrollbar-thumb { background: var(--card-border, #eef2f7); border-radius: 2px; }
.dropdown__footer { border-top: 1px solid var(--card-border, #eef2f7); padding: 10px 16px; text-align: center; }
.dropdown__footer-link { font-size: 12.5px; font-weight: 600; color: var(--accent, #fd7e14); display: block; }
.dropdown__footer-link:hover { text-decoration: underline; }

/* Messages */
.dropdown--msg { width: 340px; }
.msg-item {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 11px 16px; border-bottom: 1px solid var(--card-border, #eef2f7);
  cursor: pointer; text-decoration: none;
  transition: background 0.12s ease; position: relative;
}
.msg-item:last-child { border-bottom: none; }
.msg-item:hover      { background: var(--app-bg, #f3f4f9); }
.msg-item.unread     { background: rgba(253,126,20,0.03); }
.msg-item__avatar-wrap { position: relative; flex-shrink: 0; }
.msg-item__avatar {
  width: 38px; height: 38px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 800; color: var(--accent, #fd7e14); overflow: hidden;
}
.msg-item__avatar-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }
.msg-item__online {
  position: absolute; bottom: 1px; right: 1px;
  width: 9px; height: 9px; border-radius: 50%;
  background: #1abc9c; border: 2px solid var(--card-bg, #fff);
}
.msg-item__body  { flex: 1; min-width: 0; }
.msg-item__row   { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px; }
.msg-item__name  { font-size: 13px; font-weight: 700; color: var(--text-primary, #313a46); }
.msg-item__time  { font-size: 10.5px; color: var(--text-muted, #98a6ad); flex-shrink: 0; }
.msg-item__text  { font-size: 12px; color: var(--text-secondary, #6c757d); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px; }

/* Notifications */
.dropdown--notif { width: 340px; }
.notif-item {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 12px 16px; border-bottom: 1px solid var(--card-border, #eef2f7);
  cursor: pointer; transition: background 0.12s ease; position: relative;
}
.notif-item:last-child { border-bottom: none; }
.notif-item:hover      { background: var(--app-bg, #f3f4f9); }
.notif-item.unread     { background: rgba(253,126,20,0.03); }
.notif-item__icon      { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.notif-item__svg       { width: 17px; height: 17px; color: var(--accent, #fd7e14); stroke-width: 1.8; }
.notif-item__body      { flex: 1; min-width: 0; }
.notif-item__text      { font-size: 12.5px; line-height: 1.5; color: var(--text-primary, #313a46); margin-bottom: 3px; }
.notif-item__time      { font-size: 11px; color: var(--text-muted, #98a6ad); }
.notif-item__dot       { width: 8px; height: 8px; border-radius: 50%; background: var(--accent, #fd7e14); flex-shrink: 0; margin-top: 4px; }

/* Activity */
.dropdown--activity    { width: 360px; }
.activity-item         { display: flex; align-items: flex-start; gap: 12px; padding: 12px 16px; }
.activity-item__icon-wrap { position: relative; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.activity-item__icon   { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; z-index: 1; }
.activity-item__avatar { width: 34px; height: 34px; border-radius: 50%; overflow: hidden; flex-shrink: 0; z-index: 1; border: 2px solid var(--card-border, #eef2f7); }
.activity-item__avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.activity-item__svg    { width: 15px; height: 15px; color: var(--accent, #fd7e14); stroke-width: 1.8; }
.activity-item__line   { width: 1px; flex: 1; min-height: 20px; background: var(--card-border, #eef2f7); margin-top: 4px; }
.activity-item__content { flex: 1; min-width: 0; padding-bottom: 4px; }
.activity-item__title  { font-size: 13px; font-weight: 700; color: var(--text-primary, #313a46); margin-bottom: 2px; }
.activity-item__desc   { font-size: 12px; color: var(--text-secondary, #6c757d); line-height: 1.45; margin-bottom: 5px; }
.activity-item__time   { font-size: 11px; color: var(--text-muted, #98a6ad); display: block; margin-top: 4px; }
.activity-item__files  { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 4px; }
.activity-item__file-chip {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 2px 8px; border-radius: 4px; background: var(--app-bg, #f3f4f9);
  font-size: 11px; color: var(--text-secondary, #6c757d);
  text-decoration: none; transition: background 0.12s;
}
.activity-item__file-chip:hover { background: #e3f2fd; color: #1976d2; }
.activity-item__file-icon { width: 11px; height: 11px; stroke-width: 2; }

/* Language */
.dropdown--lang { width: 190px; }
.lang-item {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 9px 16px; border: none; background: transparent;
  font-size: 13px; color: var(--text-primary, #313a46); cursor: pointer;
  font-family: inherit; transition: background 0.12s ease;
}
.lang-item:hover      { background: var(--app-bg, #f3f4f9); }
.lang-item.active     { color: var(--accent, #fd7e14); font-weight: 700; }
.lang-item__flag      { font-size: 18px; line-height: 1; }
.lang-item__name      { flex: 1; text-align: left; }
.lang-item__check     { width: 14px; height: 14px; color: var(--accent, #fd7e14); stroke-width: 2.5; }

/* User */
.dropdown--user { width: 230px; }
.dropdown__user-head {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; border-bottom: 1px solid var(--card-border, #eef2f7);
  background: var(--app-bg, #f3f4f9);
}
.dropdown__avatar-img-wrap {
  width: 42px; height: 42px; border-radius: 50%; overflow: hidden;
  flex-shrink: 0; border: 2px solid var(--card-border, #eef2f7);
}
.dropdown__avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 50%; }
.dropdown__avatar {
  width: 42px; height: 42px; border-radius: 50%;
  background: linear-gradient(135deg, #ff9b44, #fd7e14);
  color: #fff; font-size: 14px; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.dropdown__user-info { min-width: 0; }
.dropdown__user-name { font-size: 13px; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dropdown__user-role { font-size: 11.5px; color: var(--text-muted); }

.user-menu-item {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px; font-size: 13px; color: var(--text-secondary, #6c757d);
  border-bottom: 1px solid var(--card-border, #eef2f7);
  text-decoration: none; transition: background 0.12s ease, color 0.12s ease;
}
.user-menu-item:last-child { border-bottom: none; }
.user-menu-item:hover { background: var(--app-bg, #f3f4f9); color: var(--accent, #fd7e14); }
.user-menu-item__icon  { width: 16px; height: 16px; stroke-width: 1.8; flex-shrink: 0; }
.user-menu-item__badge { margin-left: auto; background: var(--accent, #fd7e14); color: #fff; font-size: 10px; font-weight: 800; padding: 1px 6px; border-radius: 99px; }

.logout-btn {
  display: flex; align-items: center; gap: 8px;
  width: 100%; padding: 10px 16px;
  border: none; background: transparent;
  font-size: 13px; font-weight: 600; color: var(--danger, #e74c3c);
  cursor: pointer; font-family: inherit; transition: background 0.12s ease;
}
.logout-btn:hover      { background: #fce4ec; }
.logout-btn__icon      { width: 16px; height: 16px; stroke-width: 2; }

/* Search dropdown */
.dropdown--search { top: calc(100% + 6px); right: 0; left: 0; width: auto; min-width: 300px; }
.search-result-item {
  display: flex; align-items: center; gap: 12px; padding: 10px 16px;
  border-bottom: 1px solid var(--card-border, #eef2f7);
  text-decoration: none; transition: background 0.12s ease;
}
.search-result-item:last-child { border-bottom: none; }
.search-result-item:hover { background: var(--app-bg, #f3f4f9); }
.search-result-item__icon  { width: 34px; height: 34px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.search-result-item__svg   { width: 16px; height: 16px; color: var(--accent, #fd7e14); stroke-width: 1.8; }
.search-result-item__body  { flex: 1; min-width: 0; }
.search-result-item__label { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.search-result-item__sub   { font-size: 11.5px; color: var(--text-muted); }
.search-result-item__arrow { color: var(--text-muted); font-size: 18px; line-height: 1; }
.search-empty { padding: 28px 16px; text-align: center; color: var(--text-muted); font-size: 13px; }
.search-empty__icon { width: 28px; height: 28px; margin: 0 auto 8px; opacity: 0.4; }

/* ─────────────────────────────────────────────────────────────
   OFFCANVAS (Settings)
───────────────────────────────────────────────────────────── */
.offcanvas-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 500;
  display: flex; justify-content: flex-end;
}
.offcanvas {
  width: 290px; height: 100%;
  background: var(--card-bg, #fff);
  box-shadow: -4px 0 32px rgba(0,0,0,0.15);
  display: flex; flex-direction: column; overflow: hidden;
}
.offcanvas__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 20px; border-bottom: 1px solid var(--card-border, #eef2f7); flex-shrink: 0;
}
.offcanvas__title { font-size: 15px; font-weight: 700; color: var(--text-primary, #313a46); }
.offcanvas__close {
  width: 28px; height: 28px; border-radius: 6px;
  border: none; background: var(--app-bg, #f3f4f9);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--text-secondary, #6c757d);
  transition: background 0.12s ease;
}
.offcanvas__close:hover { background: #fee2d5; color: var(--accent, #fd7e14); }
.offcanvas__body { flex: 1; overflow-y: auto; padding: 20px; }

.settings-section        { margin-bottom: 22px; }
.settings-section__label {
  font-size: 11.5px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--text-muted, #98a6ad); margin-bottom: 10px;
}
.settings-grid    { display: grid; gap: 10px; }
.settings-grid--2 { grid-template-columns: 1fr 1fr; }
.settings-card {
  display: flex; flex-direction: column; align-items: center; gap: 7px;
  padding: 10px 8px; border: 2px solid var(--card-border, #eef2f7);
  border-radius: 10px; background: transparent;
  cursor: pointer; font-size: 12px; font-weight: 600;
  color: var(--text-secondary, #6c757d);
  transition: border-color 0.15s ease, color 0.15s ease;
}
.settings-card:hover  { border-color: var(--accent, #fd7e14); color: var(--accent, #fd7e14); }
.settings-card.active { border-color: var(--accent, #fd7e14); color: var(--accent, #fd7e14); }
.settings-card__preview {
  width: 100%; height: 44px; border-radius: 6px;
  border: 1px solid var(--card-border, #eef2f7); overflow: hidden; position: relative;
}
.settings-card__preview--light           { background: #f3f4f9; }
.settings-card__preview--light::after    { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #fff 50%, #f3f4f9 50%); }
.settings-card__preview--dark            { background: #313a46; }
.settings-card__preview--dark::after     { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #3d4654 50%, #2c333e 50%); }
.settings-card__preview--topbar-light    { background: linear-gradient(to bottom, #fff 40%, #f3f4f9 40%); }
.settings-card__preview--topbar-dark     { background: linear-gradient(to bottom, #313a46 40%, #f3f4f9 40%); }
.settings-card__preview--menu-light      { background: linear-gradient(to right, #f3f4f9 35%, #fff 35%); }
.settings-card__preview--menu-dark       { background: linear-gradient(to right, #313a46 35%, #fff 35%); }
.settings-card__preview--sidebar-default      { background: linear-gradient(to right, #3d4654 30%, #f3f4f9 30%); }
.settings-card__preview--sidebar-condensed    { background: linear-gradient(to right, #3d4654 18%, #f3f4f9 18%); }
.settings-card__preview--sidebar-hidden       { background: #f3f4f9; }
.settings-card__preview--sidebar-small-hover  { background: linear-gradient(to right, #3d4654 14%, #f3f4f9 14%); }

.settings-reset {
  display: flex; align-items: center; justify-content: center; gap: 7px;
  width: 100%; padding: 10px;
  border: 1px dashed var(--card-border, #eef2f7);
  border-radius: 8px; background: transparent;
  font-size: 13px; font-weight: 600; color: var(--text-secondary, #6c757d);
  cursor: pointer; font-family: inherit; margin-top: 4px;
  transition: border-color 0.15s, color 0.15s;
}
.settings-reset:hover { border-color: var(--danger, #e74c3c); color: var(--danger, #e74c3c); }

/* ─────────────────────────────────────────────────────────────
   INACTIVITY MODAL
───────────────────────────────────────────────────────────── */
.inactivity-modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9000;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
}
.inactivity-modal {
  background: #fff;
  border-radius: 20px;
  padding: 36px 32px;
  width: 100%; max-width: 360px;
  text-align: center;
  box-shadow: 0 24px 60px rgba(0,0,0,0.2);
  animation: auth-card-in 0.3s ease;
}
.inactivity-modal__icon  { font-size: 48px; margin-bottom: 12px; }
.inactivity-modal__title { font-size: 20px; font-weight: 800; color: #313a46; margin-bottom: 8px; }
.inactivity-modal__text  { font-size: 14px; color: #6c757d; margin-bottom: 24px; line-height: 1.5; }
.inactivity-modal__text strong { color: #fd7e14; }
.inactivity-modal__actions { display: flex; flex-direction: column; gap: 10px; }
.inactivity-modal__btn {
  padding: 11px 24px; border-radius: 10px; font-size: 14px; font-weight: 700;
  cursor: pointer; border: none; font-family: inherit; transition: all 0.15s ease;
}
.inactivity-modal__btn--primary { background: linear-gradient(135deg, #ff9b44, #fd7e14); color: #fff; box-shadow: 0 4px 14px rgba(253,126,20,0.3); }
.inactivity-modal__btn--primary:hover { opacity: 0.9; }
.inactivity-modal__btn--ghost { background: transparent; color: #6c757d; border: 1.5px solid #eef2f7; }
.inactivity-modal__btn--ghost:hover { background: #f3f4f9; color: #e74c3c; border-color: #e74c3c; }

/* ─────────────────────────────────────────────────────────────
   RESPONSIVE
───────────────────────────────────────────────────────────── */

/* Tablet 768–1024 */
@media (min-width: 768px) and (max-width: 1024px) {
  .topbar { padding: 0 16px; }
  .topbar__clock-time { font-size: 13px; }
  .topbar__clock-date { font-size: 9px; }
  .topbar__search { width: 130px; }
  .topbar__search.focused { width: 190px; }
}

/* Mobile < 768 */
@media (max-width: 767px) {
  .topbar { padding: 0 12px; gap: 2px; }
  .topbar__clock--hide-sm    { display: none !important; }
  .topbar__title--hide-sm    { display: none !important; }
  .topbar__icon-btn--hide-sm { display: none !important; }
  .topbar__search { width: 36px; padding: 0 8px; overflow: hidden; }
  .topbar__search.focused { width: 160px; }
  .topbar__right { gap: 1px; }
  .dropdown--msg,
  .dropdown--notif   { width: calc(100vw - 24px); right: -60px; }
  .dropdown--activity { width: calc(100vw - 24px); right: -80px; }
  .dropdown--user    { width: 210px; }
  .dropdown--search  { width: calc(100vw - 24px); right: 0; left: auto; min-width: unset; }
}

/* Small mobile < 480 */
@media (max-width: 480px) {
  .topbar { padding: 0 8px; }
  .topbar__icon-btn--hide-xs { display: none !important; }
  .topbar__search.focused    { width: 120px; }
  .topbar__icon-btn { width: 32px; height: 32px; }
  .topbar__icon     { width: 18px; height: 18px; }
  .topbar__user-btn { width: 32px; height: 32px; }
  .dropdown--notif  { right: -100px; }
  .topbar__right { gap: 0; }
}

/* ─────────────────────────────────────────────────────────────
   TRANSITIONS
───────────────────────────────────────────────────────────── */
.dropdown-enter-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.dropdown-leave-active { transition: opacity 0.14s ease, transform 0.14s ease; }
.dropdown-enter-from   { opacity: 0; transform: translateY(-6px); }
.dropdown-leave-to     { opacity: 0; transform: translateY(-4px); }

.offcanvas-enter-active { transition: opacity 0.22s ease; }
.offcanvas-leave-active { transition: opacity 0.18s ease; }
.offcanvas-enter-from, .offcanvas-leave-to { opacity: 0; }
.offcanvas-enter-active .offcanvas { transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }
.offcanvas-leave-active .offcanvas  { transition: transform 0.2s ease; }
.offcanvas-enter-from .offcanvas    { transform: translateX(100%); }
.offcanvas-leave-to .offcanvas      { transform: translateX(100%); }

.auth-fade-enter-active { transition: opacity 0.3s ease; }
.auth-fade-leave-active { transition: opacity 0.25s ease; }
.auth-fade-enter-from, .auth-fade-leave-to { opacity: 0; }

.form-slide-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.form-slide-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.form-slide-enter-from   { opacity: 0; transform: translateX(12px); }
.form-slide-leave-to     { opacity: 0; transform: translateX(-12px); }

.modal-fade-enter-active { transition: opacity 0.25s ease; }
.modal-fade-leave-active { transition: opacity 0.2s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
</style>
