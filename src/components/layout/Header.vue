<template>
  <header class="topbar">

    <!-- ── Left: Page Title ──────────────────────────────── -->
    <div class="topbar__left">
      <h4 class="topbar__title">{{ pageTitle }}</h4>
    </div>

    <!-- ── Right: Actions ───────────────────────────────── -->
    <div class="topbar__right">

      <!-- Dark mode toggle -->
      <button
        class="topbar__icon-btn"
        :title="isDark ? 'Switch to Light' : 'Switch to Dark'"
        @click="toggleTheme"
      >
        <MoonIcon v-if="!isDark" class="topbar__icon" />
        <SunIcon v-else class="topbar__icon" />
      </button>

      <!-- Notifications -->
      <div class="topbar__dropdown-wrap" ref="notifRef">
        <button
          class="topbar__icon-btn"
          :class="{ active: notifOpen }"
          title="Notifications"
          @click="notifOpen = !notifOpen"
        >
          <BellIcon class="topbar__icon" />
          <span v-if="unreadCount" class="topbar__badge">{{ unreadCount }}</span>
        </button>

        <Transition name="dropdown">
          <div v-if="notifOpen" class="dropdown dropdown--notif">
            <div class="dropdown__header">
              <span class="dropdown__title">Notifications</span>
              <button class="dropdown__mark-all" @click="markAllRead">Mark all read</button>
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
                  <p class="notif-item__text">{{ notif.text }}</p>
                  <span class="notif-item__time">{{ notif.time }}</span>
                </div>
                <span v-if="!notif.read" class="notif-item__dot"></span>
              </div>
            </div>
            <div class="dropdown__footer">
              <a href="#" class="dropdown__footer-link">View all notifications</a>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Settings / Cog -->
      <button class="topbar__icon-btn" title="Settings" @click="$emit('open-settings')">
        <Cog6ToothIcon class="topbar__icon" />
      </button>

      <!-- Language / Globe -->
      <div class="topbar__dropdown-wrap" ref="langRef">
        <button
          class="topbar__icon-btn"
          :class="{ active: langOpen }"
          title="Language"
          @click="langOpen = !langOpen"
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

      <!-- User Avatar + Dropdown -->
      <div class="topbar__dropdown-wrap" ref="userRef">
        <button
          class="topbar__user-btn"
          :class="{ active: userOpen }"
          @click="userOpen = !userOpen"
        >
          <img
            :src="user.avatar"
            :alt="user.name"
            class="topbar__avatar"
            @error="onAvatarError"
          />
          <span class="topbar__avatar-fallback" v-if="avatarError">
            {{ userInitials }}
          </span>
        </button>

        <Transition name="dropdown">
          <div v-if="userOpen" class="dropdown dropdown--user">
            <div class="dropdown__user-head">
              <div class="dropdown__avatar">{{ userInitials }}</div>
              <div class="dropdown__user-info">
                <p class="dropdown__user-name">{{ user.name }}</p>
                <p class="dropdown__user-role">{{ user.role }}</p>
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

      <!-- Search -->
      <div class="topbar__search" :class="{ focused: searchFocused }">
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
        <button
          v-if="searchQuery"
          class="topbar__search-clear"
          @click="clearSearch"
        >
          <XMarkIcon class="topbar__icon topbar__icon--xs" />
        </button>

        <!-- Search results -->
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
                >
                  <div class="search-result-item__icon" :style="{ background: result.iconBg }">
                    <component :is="result.icon" class="search-result-item__svg" />
                  </div>
                  <div class="search-result-item__body">
                    <p class="search-result-item__label">{{ result.label }}</p>
                    <span class="search-result-item__sub">{{ result.sub }}</span>
                  </div>
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
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import {
  MoonIcon,
  SunIcon,
  BellIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  CheckIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  LockClosedIcon,
  EnvelopeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";

// ── Props & Emits ───────────────────────────────────────────
const props = defineProps({
  pageTitle: {
    type: String,
    default: "WELCOME!",
  },
});

const emit = defineEmits(["open-settings", "logout", "search"]);

// ── Theme ───────────────────────────────────────────────────
const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light"
  );
  localStorage.setItem("larkon-theme", isDark.value ? "dark" : "light");
}

onMounted(() => {
  const saved = localStorage.getItem("larkon-theme");
  if (saved === "dark") {
    isDark.value = true;
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

// ── Notifications ───────────────────────────────────────────
const notifOpen = ref(false);
const notifRef  = ref(null);

const notifications = ref([
  {
    id: 1,
    text: "New order #RB9652 received from Judith Fritsche.",
    time: "2 min ago",
    read: false,
    icon: ShoppingBagIcon,
    iconBg: "#fff3e8",
  },
  {
    id: 2,
    text: "Payment of $750.95 processed successfully.",
    time: "15 min ago",
    read: false,
    icon: CurrencyDollarIcon,
    iconBg: "#e8f5e9",
  },
  {
    id: 3,
    text: "3 new leads added this week.",
    time: "1 hr ago",
    read: false,
    icon: UserGroupIcon,
    iconBg: "#e3f2fd",
  },
  {
    id: 4,
    text: "Server maintenance scheduled for tonight at 2AM.",
    time: "3 hrs ago",
    read: true,
    icon: Cog6ToothIcon,
    iconBg: "#f3f4f9",
  },
  {
    id: 5,
    text: "Your monthly report is ready to download.",
    time: "Yesterday",
    read: true,
    icon: EnvelopeIcon,
    iconBg: "#fce4ec",
  },
]);

const unreadCount = computed(() =>
  notifications.value.filter((n) => !n.read).length
);

function readNotif(notif) {
  notif.read = true;
}

function markAllRead() {
  notifications.value.forEach((n) => (n.read = true));
}

// ── Language ────────────────────────────────────────────────
const langOpen   = ref(false);
const langRef    = ref(null);
const activeLang = ref("en");

const languages = [
  { code: "en", name: "English",  flag: "🇺🇸" },
  { code: "fr", name: "French",   flag: "🇫🇷" },
  { code: "de", name: "German",   flag: "🇩🇪" },
  { code: "es", name: "Spanish",  flag: "🇪🇸" },
  { code: "ar", name: "Arabic",   flag: "🇸🇦" },
  { code: "zh", name: "Chinese",  flag: "🇨🇳" },
];

function setLang(code) {
  activeLang.value = code;
  langOpen.value   = false;
}

// ── User ────────────────────────────────────────────────────
const userOpen    = ref(false);
const userRef     = ref(null);
const avatarError = ref(false);

const user = ref({
  name:   "Anna M. Hines",
  role:   "Administrator",
  email:  "anna.hines@mail.com",
  avatar: "https://i.pravatar.cc/80?img=47",
});

const userInitials = computed(() =>
  user.value.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
);

function onAvatarError() {
  avatarError.value = true;
}

const userMenuItems = [
  { label: "My Profile",   icon: UserCircleIcon,  badge: null },
  { label: "My Account",   icon: LockClosedIcon,  badge: null },
  { label: "Messages",     icon: EnvelopeIcon,    badge: "5"  },
];

function handleUserMenu(item) {
  userOpen.value = false;
  // Extend with router.push per item if needed
}

function handleLogout() {
  userOpen.value = false;
  emit("logout");
}

// ── Search ──────────────────────────────────────────────────
const searchQuery   = ref("");
const searchFocused = ref(false);
const searchInput   = ref(null);

// Mock search data — replace with real API call
const allSearchData = [
  { id: 1, label: "Dashboard",        sub: "Page",     icon: Cog6ToothIcon,    iconBg: "#f3f4f9" },
  { id: 2, label: "Orders",           sub: "Page",     icon: ShoppingBagIcon,  iconBg: "#fff3e8" },
  { id: 3, label: "Anna M. Hines",    sub: "Customer", icon: UserCircleIcon,   iconBg: "#e3f2fd" },
  { id: 4, label: "Judith Fritsche",  sub: "Customer", icon: UserCircleIcon,   iconBg: "#e3f2fd" },
  { id: 5, label: "Revenue Report",   sub: "Report",   icon: CurrencyDollarIcon, iconBg: "#e8f5e9" },
  { id: 6, label: "New Leads",        sub: "CRM",      icon: UserGroupIcon,    iconBg: "#fce4ec" },
];

const searchResults = computed(() => {
  if (!searchQuery.value || searchQuery.value.length < 2) return [];
  const q = searchQuery.value.toLowerCase();
  return allSearchData.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.sub.toLowerCase().includes(q)
  );
});

function onSearchBlur() {
  // Delay so click on results registers first
  setTimeout(() => {
    searchFocused.value = false;
  }, 200);
}

function clearSearch() {
  searchQuery.value   = "";
  searchFocused.value = false;
  searchInput.value?.blur();
}

function doSearch() {
  emit("search", searchQuery.value);
}

// ── Click-outside to close dropdowns ────────────────────────
function handleClickOutside(e) {
  if (notifRef.value && !notifRef.value.contains(e.target)) notifOpen.value = false;
  if (langRef.value  && !langRef.value.contains(e.target))  langOpen.value  = false;
  if (userRef.value  && !userRef.value.contains(e.target))  userOpen.value  = false;
}

onMounted(() => document.addEventListener("mousedown", handleClickOutside));
onBeforeUnmount(() => document.removeEventListener("mousedown", handleClickOutside));
</script>

<style scoped>
/* ── Topbar shell ───────────────────────────────────────── */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px 0 24px;
  background: var(--topbar-bg, #fff);
  border-bottom: 1px solid var(--topbar-border, #eef2f7);
  box-shadow: var(--topbar-shadow, 0 2px 12px rgba(0,0,0,0.06));
  position: sticky;
  top: 0;
  z-index: 100;
  gap: 12px;
}

/* ── Left ───────────────────────────────────────────────── */
.topbar__left { flex-shrink: 0; }
.topbar__title {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.07em;
  color: var(--text-primary, #313a46);
  text-transform: uppercase;
}

/* ── Right ──────────────────────────────────────────────── */
.topbar__right {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}

/* ── Icon Button ────────────────────────────────────────── */
.topbar__icon-btn {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary, #6c757d);
  transition: background 0.15s ease, color 0.15s ease;
}
.topbar__icon-btn:hover,
.topbar__icon-btn.active {
  background: var(--app-bg, #f3f4f9);
  color: var(--accent, #fd7e14);
}
.topbar__icon { width: 19px; height: 19px; stroke-width: 1.8; }
.topbar__icon--xs { width: 14px; height: 14px; }

/* Notification badge */
.topbar__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 99px;
  background: var(--accent, #fd7e14);
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--topbar-bg, #fff);
  line-height: 1;
}

/* ── User button ────────────────────────────────────────── */
.topbar__user-btn {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--topbar-border, #eef2f7);
  background: transparent;
  padding: 0;
  overflow: hidden;
  transition: border-color 0.15s ease;
}
.topbar__user-btn:hover,
.topbar__user-btn.active {
  border-color: var(--accent, #fd7e14);
}
.topbar__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.topbar__avatar-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-muted, #fff3e8);
  color: var(--accent, #fd7e14);
  font-size: 12px;
  font-weight: 800;
}

/* ── Search ─────────────────────────────────────────────── */
.topbar__search {
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--app-bg, #f3f4f9);
  border: 1px solid var(--topbar-border, #eef2f7);
  border-radius: 8px;
  padding: 0 10px;
  height: 36px;
  width: 200px;
  transition: width 0.25s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  margin-left: 6px;
}
.topbar__search.focused {
  width: 280px;
  border-color: var(--accent, #fd7e14);
  box-shadow: 0 0 0 3px rgba(253, 126, 20, 0.1);
}
.topbar__search-icon {
  width: 15px;
  height: 15px;
  color: var(--text-muted, #98a6ad);
  flex-shrink: 0;
  stroke-width: 2;
}
.topbar__search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 13px;
  color: var(--text-primary, #313a46);
  outline: none;
  font-family: inherit;
}
.topbar__search-input::placeholder { color: var(--text-muted, #98a6ad); }
.topbar__search-clear {
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  color: var(--text-muted);
}
.topbar__search-clear:hover { color: var(--text-primary); }

/* ── Dropdown base ──────────────────────────────────────── */
.topbar__dropdown-wrap { position: relative; }

.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--card-bg, #fff);
  border: 1px solid var(--card-border, #eef2f7);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 200;
  overflow: hidden;
}

.dropdown__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--card-border, #eef2f7);
}
.dropdown__title {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary, #313a46);
}
.dropdown__mark-all {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--accent, #fd7e14);
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
}
.dropdown__mark-all:hover { text-decoration: underline; }

.dropdown__body {
  max-height: 340px;
  overflow-y: auto;
}

.dropdown__footer {
  border-top: 1px solid var(--card-border, #eef2f7);
  padding: 10px 16px;
  text-align: center;
}
.dropdown__footer-link {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--accent, #fd7e14);
  display: block;
}
.dropdown__footer-link:hover { text-decoration: underline; }

/* ── Notifications dropdown ─────────────────────────────── */
.dropdown--notif { width: 340px; }

.notif-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--card-border, #eef2f7);
  cursor: pointer;
  transition: background 0.12s ease;
  position: relative;
}
.notif-item:last-child { border-bottom: none; }
.notif-item:hover      { background: var(--app-bg, #f3f4f9); }
.notif-item.unread     { background: rgba(253, 126, 20, 0.03); }

.notif-item__icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.notif-item__svg { width: 17px; height: 17px; color: var(--accent, #fd7e14); stroke-width: 1.8; }

.notif-item__body { flex: 1; min-width: 0; }
.notif-item__text {
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--text-primary, #313a46);
  margin-bottom: 3px;
}
.notif-item__time { font-size: 11px; color: var(--text-muted, #98a6ad); }

.notif-item__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent, #fd7e14);
  flex-shrink: 0;
  margin-top: 4px;
}

/* ── Language dropdown ──────────────────────────────────── */
.dropdown--lang { width: 190px; }

.lang-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 16px;
  border: none;
  background: transparent;
  font-size: 13px;
  color: var(--text-primary, #313a46);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.12s ease;
}
.lang-item:hover  { background: var(--app-bg, #f3f4f9); }
.lang-item.active { color: var(--accent, #fd7e14); font-weight: 700; }

.lang-item__flag { font-size: 18px; line-height: 1; }
.lang-item__name { flex: 1; text-align: left; }
.lang-item__check { width: 14px; height: 14px; color: var(--accent, #fd7e14); stroke-width: 2.5; }

/* ── User dropdown ──────────────────────────────────────── */
.dropdown--user { width: 230px; }

.dropdown__user-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--card-border, #eef2f7);
  background: var(--app-bg, #f3f4f9);
}
.dropdown__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9b44, #fd7e14);
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.dropdown__user-info { min-width: 0; }
.dropdown__user-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropdown__user-role { font-size: 11.5px; color: var(--text-muted); }

.user-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  font-size: 13px;
  color: var(--text-secondary, #6c757d);
  border-bottom: 1px solid var(--card-border, #eef2f7);
  transition: background 0.12s ease, color 0.12s ease;
}
.user-menu-item:last-child { border-bottom: none; }
.user-menu-item:hover {
  background: var(--app-bg, #f3f4f9);
  color: var(--accent, #fd7e14);
}
.user-menu-item__icon { width: 16px; height: 16px; stroke-width: 1.8; flex-shrink: 0; }
.user-menu-item__badge {
  margin-left: auto;
  background: var(--accent, #fd7e14);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  padding: 1px 6px;
  border-radius: 99px;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: transparent;
  font-size: 13px;
  font-weight: 600;
  color: var(--danger, #e74c3c);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.12s ease;
}
.logout-btn:hover { background: #fce4ec; }
.logout-btn__icon { width: 16px; height: 16px; stroke-width: 2; }

/* ── Search dropdown ────────────────────────────────────── */
.dropdown--search {
  top: calc(100% + 6px);
  right: 0;
  left: 0;
  width: auto;
  min-width: 320px;
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--card-border, #eef2f7);
  transition: background 0.12s ease;
}
.search-result-item:last-child { border-bottom: none; }
.search-result-item:hover { background: var(--app-bg, #f3f4f9); }

.search-result-item__icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.search-result-item__svg { width: 16px; height: 16px; color: var(--accent, #fd7e14); stroke-width: 1.8; }

.search-result-item__body { flex: 1; min-width: 0; }
.search-result-item__label { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.search-result-item__sub   { font-size: 11.5px; color: var(--text-muted); }

.search-empty {
  padding: 28px 16px;
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
}
.search-empty__icon { width: 28px; height: 28px; margin: 0 auto 8px; opacity: 0.4; }

/* ── Dropdown transition ────────────────────────────────── */
.dropdown-enter-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.dropdown-leave-active { transition: opacity 0.14s ease, transform 0.14s ease; }
.dropdown-enter-from  { opacity: 0; transform: translateY(-6px); }
.dropdown-leave-to    { opacity: 0; transform: translateY(-4px); }
</style>