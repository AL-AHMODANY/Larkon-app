<template>
  <header class="header">
    <div class="header-left">
      <button class="icon-btn hamburger" @click="toggleSidebarMode">
        <svg class="icon-size" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div class="welcome-text">{{ greeting }}! Welcome!</div>
      <div class="time-icon" @click="toggleTime">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span v-if="showTime" class="time-display">{{ currentTime }}</span>
      </div>
    </div>

    <div class="header-right">
      <!-- Search -->
      <div class="search-wrapper" ref="searchContainerRef">
        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Search..." class="search-input" v-model="searchQuery" @input="handleSearch" @keyup.enter="executeSearch" />
        <div v-if="searchResults.length && searchQuery" class="search-results-dropdown">
          <div v-for="result in searchResults" :key="result.id" class="search-result-item" @click="selectSearchResult(result)">
            <span>{{ result.name }}</span>
          </div>
        </div>
      </div>

      <!-- Dark mode toggle -->
      <button class="icon-btn" @click="toggleDarkMode">
        <svg v-if="!isDark" class="icon-size" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else class="icon-size" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>

      <!-- Notifications Dropdown -->
      <div class="notif-wrapper" ref="notificationsContainerRef">
        <button class="icon-btn" @click="toggleNotificationsDropdown">
          <svg class="icon-size" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="notif-badge" v-if="unreadCount > 0">{{ unreadCount }}</span>
        </button>

        <div v-if="notificationsDropdownOpen" class="dropdown-menu notifications-dropdown">
          <div class="dropdown-header">
            <h4>Notifications</h4>
            <button class="clear-all-btn" @click.stop="clearAllNotifications">Clear All</button>
          </div>
          <div class="notifications-list">
            <div v-for="notif in notifications" :key="notif.id" class="notification-item" :class="{ unread: !notif.read }" @click.stop="markAsRead(notif.id)">
              <img :src="notif.avatar" class="notif-avatar" />
              <div class="notif-content">
                <p><strong>{{ notif.name }}</strong> {{ notif.message }}</p>
                <span class="notif-time">{{ notif.time }}</span>
              </div>
            </div>
            <div v-if="notifications.length === 0" class="empty-notifications">No notifications</div>
          </div>
          <div class="dropdown-footer">
            <button class="view-all-btn" @click.stop="viewAllNotifications">View All Notification</button>
          </div>
        </div>
      </div>

      <!-- Settings button -->
      <button class="icon-btn" @click.stop="openSettingsPanel">
        <svg class="icon-size" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      <!-- Profile / Auth Section -->
      <div class="profile-dropdown-container" ref="profileContainerRef">
        <!-- Logged In -->
        <template v-if="isLoggedIn">
          <button class="profile-btn" @click.stop="toggleProfileDropdown">
            <img :src="user.avatar" alt="Profile" class="profile-image" />
            <span class="profile-name">{{ user.name }}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div v-if="profileDropdownOpen" class="profile-dropdown-menu">
            <div class="profile-welcome">
              <img :src="user.avatar" alt="Profile" class="profile-image-large" />
              <div>
                <h4>Welcome {{ user.name }}!</h4>
                <p>{{ user.email }}</p>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item" @click.prevent="handleMenuClick('Profile')">Profile</a>
            <a href="#" class="dropdown-item" @click.prevent="handleMenuClick('Messages')">Messages</a>
            <a href="#" class="dropdown-item" @click.prevent="handleMenuClick('Pricing')">Pricing</a>
            <a href="#" class="dropdown-item" @click.prevent="handleMenuClick('Help')">Help</a>
            <a href="#" class="dropdown-item" @click.prevent="handleMenuClick('Lock screen')">Lock screen</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item text-danger" @click.prevent="logout">Logout</a>
          </div>
        </template>

        <!-- Logged Out -->
        <template v-else>
          <div class="auth-buttons">
            <button class="auth-btn login-btn" @click="showLoginModal = true">Login</button>
            <button class="auth-btn signup-btn" @click="showSignupModal = true">Sign Up</button>
          </div>
        </template>
      </div>
    </div>

    <!-- Settings Panel -->
    <Teleport to="body">
      <div v-if="settingsPanelOpen" class="settings-overlay" @click="closeSettingsPanel"></div>
      <div class="settings-panel" :class="{ open: settingsPanelOpen }">
        <div class="settings-header">
          <h3>Theme Settings</h3>
          <button class="close-settings" @click="closeSettingsPanel">×</button>
        </div>
        <div class="settings-body">
          <div class="setting-group">
            <label>Color Scheme</label>
            <div class="button-group">
              <button type="button" class="setting-btn" :class="{ active: settings.colorScheme === 'light' }" @click="updateColorScheme('light')">Light</button>
              <button type="button" class="setting-btn" :class="{ active: settings.colorScheme === 'dark' }" @click="updateColorScheme('dark')">Dark</button>
            </div>
          </div>
          <div class="setting-group">
            <label>Topbar Color</label>
            <div class="button-group">
              <button type="button" class="setting-btn" :class="{ active: settings.topbarColor === 'light' }" @click="updateTopbarColor('light')">Light</button>
              <button type="button" class="setting-btn" :class="{ active: settings.topbarColor === 'dark' }" @click="updateTopbarColor('dark')">Dark</button>
            </div>
          </div>
          <div class="setting-group">
            <label>Menu Color</label>
            <div class="button-group">
              <button type="button" class="setting-btn" :class="{ active: settings.menuColor === 'light' }" @click="updateMenuColor('light')">Light</button>
              <button type="button" class="setting-btn" :class="{ active: settings.menuColor === 'dark' }" @click="updateMenuColor('dark')">Dark</button>
            </div>
          </div>
          <div class="setting-group">
            <label>Sidebar Size</label>
            <div class="button-group vertical">
              <button type="button" class="setting-btn" :class="{ active: settings.sidebarSize === 'default' }" @click="updateSidebarSize('default')">Default</button>
              <button type="button" class="setting-btn" :class="{ active: settings.sidebarSize === 'condensed' }" @click="updateSidebarSize('condensed')">Condensed</button>
              <button type="button" class="setting-btn" :class="{ active: settings.sidebarSize === 'hidden' }" @click="updateSidebarSize('hidden')">Hidden</button>
              <button type="button" class="setting-btn" :class="{ active: settings.sidebarSize === 'sm-hover' }" @click="updateSidebarSize('sm-hover')">Small Hover</button>
              <button type="button" class="setting-btn" :class="{ active: settings.sidebarSize === 'sm-hover-active' }" @click="updateSidebarSize('sm-hover-active')">Small Hover Active</button>
            </div>
          </div>
        </div>
        <div class="settings-footer">
          <button class="reset-btn" @click="resetSettings">Reset</button>
        </div>
      </div>
    </Teleport>

    <!-- Login Modal -->
    <Teleport to="body">
      <div v-if="showLoginModal" class="modal-overlay" @click="showLoginModal = false">
        <div class="modal-content" @click.stop>
          <h3>Login</h3>
          <input type="email" v-model="loginEmail" placeholder="Email" class="modal-input" />
          <input type="password" v-model="loginPassword" placeholder="Password" class="modal-input" />
          <button class="modal-btn" @click="handleLogin">Login</button>
          <button class="modal-close" @click="showLoginModal = false">Cancel</button>
        </div>
      </div>
      <div v-if="showSignupModal" class="modal-overlay" @click="showSignupModal = false">
        <div class="modal-content" @click.stop>
          <h3>Sign Up</h3>
          <input type="text" v-model="signupName" placeholder="Name" class="modal-input" />
          <input type="email" v-model="signupEmail" placeholder="Email" class="modal-input" />
          <input type="password" v-model="signupPassword" placeholder="Password" class="modal-input" />
          <button class="modal-btn" @click="handleSignup">Sign Up</button>
          <button class="modal-close" @click="showSignupModal = false">Cancel</button>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ---------- Auth ----------
const useAuth = () => {
  const isLoggedIn = ref(false)
  const user = ref({ name: '', email: '', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' })

  const loadAuth = () => {
    const stored = localStorage.getItem('auth_user')
    if (stored) {
      try {
        const data = JSON.parse(stored)
        isLoggedIn.value = true
        user.value = data
      } catch (e) {}
    }
  }

  const login = (email) => {
    const demoUser = {
      name: email.split('@')[0],
      email: email,
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
    }
    user.value = demoUser
    isLoggedIn.value = true
    localStorage.setItem('auth_user', JSON.stringify(demoUser))
  }

  const signup = (name, email) => {
    const newUser = {
      name: name,
      email: email,
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
    }
    user.value = newUser
    isLoggedIn.value = true
    localStorage.setItem('auth_user', JSON.stringify(newUser))
  }

  const logout = () => {
    isLoggedIn.value = false
    user.value = { name: '', email: '', avatar: '' }
    localStorage.removeItem('auth_user')
  }

  return { isLoggedIn, user, loadAuth, login, signup, logout }
}

// ---------- Notifications ----------
const useNotifications = () => {
  const notifications = ref([
    { id: 1, name: 'Jacob Gines', message: 'Answered to your comment', time: '2 min ago', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', read: false },
    { id: 2, name: 'System', message: 'You have 20 new messages', time: '15 min ago', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', read: false },
    { id: 3, name: 'Shawn Bunch', message: 'Commented on Admin', time: '1 hour ago', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', read: true }
  ])

  const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

  const markAsRead = (id) => {
    const notif = notifications.value.find(n => n.id === id)
    if (notif) notif.read = true
  }

  const clearAllNotifications = () => {
    notifications.value = []
  }

  return { notifications, unreadCount, markAsRead, clearAllNotifications }
}

// ---------- Settings (using data-attributes) ----------
const useSettings = (emit) => {
  const settings = ref({
    colorScheme: 'light',
    topbarColor: 'light',
    menuColor: 'light',
    sidebarSize: 'default'
  })

  const loadSettings = () => {
    const saved = localStorage.getItem('larkon_settings')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        settings.value = parsed
      } catch (e) {}
    }
    applyAllSettings()
  }

  const saveSettings = () => {
    localStorage.setItem('larkon_settings', JSON.stringify(settings.value))
  }

  const applyColorScheme = () => {
    document.documentElement.setAttribute('data-theme', settings.value.colorScheme)
  }

  const applyTopbarColor = () => {
    document.body.setAttribute('data-topbar', settings.value.topbarColor)
  }

  const applyMenuColor = () => {
    document.body.setAttribute('data-menu', settings.value.menuColor)
  }

  const applySidebarSize = () => {
    const body = document.body
    if (settings.value.sidebarSize === 'default') {
      body.removeAttribute('data-sidebar-size')
    } else {
      body.setAttribute('data-sidebar-size', settings.value.sidebarSize)
    }
    emit('sidebar-mode-changed', settings.value.sidebarSize)
  }

  const applyAllSettings = () => {
    applyColorScheme()
    applyTopbarColor()
    applyMenuColor()
    applySidebarSize()
  }

  const updateColorScheme = (value) => {
    settings.value.colorScheme = value
    applyColorScheme()
    saveSettings()
  }

  const updateTopbarColor = (value) => {
    settings.value.topbarColor = value
    applyTopbarColor()
    saveSettings()
  }

  const updateMenuColor = (value) => {
    settings.value.menuColor = value
    applyMenuColor()
    saveSettings()
  }

  const updateSidebarSize = (value) => {
    settings.value.sidebarSize = value
    applySidebarSize()
    saveSettings()
  }

  const resetSettings = () => {
    settings.value = {
      colorScheme: 'light',
      topbarColor: 'light',
      menuColor: 'light',
      sidebarSize: 'default'
    }
    applyAllSettings()
    saveSettings()
  }

  return {
    settings,
    loadSettings,
    updateColorScheme,
    updateTopbarColor,
    updateMenuColor,
    updateSidebarSize,
    resetSettings
  }
}

// ---------- Click Outside ----------
const useClickOutside = (elementRef, callback) => {
  const handler = (event) => {
    if (elementRef.value && !elementRef.value.contains(event.target)) {
      callback()
    }
  }
  onMounted(() => document.addEventListener('click', handler))
  onUnmounted(() => document.removeEventListener('click', handler))
}

// ---------- Component Setup ----------
const props = defineProps({
  isDark: { type: Boolean, default: false }
})
const emit = defineEmits(['toggle-dark-mode', 'sidebar-mode-changed'])

const { isLoggedIn, user, loadAuth, login, signup, logout } = useAuth()
const { notifications, unreadCount, markAsRead, clearAllNotifications } = useNotifications()
const { settings, loadSettings, updateColorScheme, updateTopbarColor, updateMenuColor, updateSidebarSize, resetSettings } = useSettings(emit)

// UI State
const notificationsDropdownOpen = ref(false)
const notificationsContainerRef = ref(null)
const settingsPanelOpen = ref(false)
const profileDropdownOpen = ref(false)
const profileContainerRef = ref(null)
const searchQuery = ref('')
const searchResults = ref([])
const searchContainerRef = ref(null)
const showTime = ref(false)
const currentTime = ref('')
let clockInterval

const searchData = ref([
  { id: 1, name: 'Dashboard' },
  { id: 2, name: 'Users Management' },
  { id: 3, name: 'Analytics Reports' },
  { id: 4, name: 'Settings' },
  { id: 5, name: 'Profile Settings' },
  { id: 6, name: 'Notifications' },
  { id: 7, name: 'Messages' },
  { id: 8, name: 'Pricing Plans' },
])

// Modals
const showLoginModal = ref(false)
const showSignupModal = ref(false)
const loginEmail = ref('')
const loginPassword = ref('')
const signupName = ref('')
const signupEmail = ref('')
const signupPassword = ref('')

// Computed
const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
})

// Methods
const toggleDarkMode = () => emit('toggle-dark-mode')
const toggleSidebarMode = () => {
  const newMode = settings.value.sidebarSize === 'default' ? 'condensed' : 'default'
  updateSidebarSize(newMode)
}
const openSettingsPanel = () => {
  settingsPanelOpen.value = true
  profileDropdownOpen.value = false
  notificationsDropdownOpen.value = false
}
const closeSettingsPanel = () => { settingsPanelOpen.value = false }
const toggleProfileDropdown = () => {
  profileDropdownOpen.value = !profileDropdownOpen.value
  notificationsDropdownOpen.value = false
  settingsPanelOpen.value = false
}
const toggleNotificationsDropdown = () => {
  notificationsDropdownOpen.value = !notificationsDropdownOpen.value
  profileDropdownOpen.value = false
  settingsPanelOpen.value = false
}
const handleMenuClick = (action) => { alert(`${action} clicked`); profileDropdownOpen.value = false }
const viewAllNotifications = () => { alert('Viewing all notifications'); notificationsDropdownOpen.value = false }

// Auth handlers
const handleLogin = () => {
  if (loginEmail.value && loginPassword.value) {
    login(loginEmail.value)
    showLoginModal.value = false
    loginEmail.value = ''
    loginPassword.value = ''
  } else alert('Please enter email and password')
}
const handleSignup = () => {
  if (signupName.value && signupEmail.value && signupPassword.value) {
    signup(signupName.value, signupEmail.value)
    showSignupModal.value = false
    signupName.value = ''
    signupEmail.value = ''
    signupPassword.value = ''
  } else alert('Please fill all fields')
}

// Search handlers
const handleSearch = () => {
  if (searchQuery.value.trim() === '') { searchResults.value = []; return }
  const query = searchQuery.value.toLowerCase()
  searchResults.value = searchData.value.filter(item => item.name.toLowerCase().includes(query))
}
const executeSearch = () => {
  if (searchQuery.value.trim()) alert(`Searching for: ${searchQuery.value}`)
  searchResults.value = []
}
const selectSearchResult = (result) => {
  alert(`Navigating to: ${result.name}`)
  searchQuery.value = result.name
  searchResults.value = []
}

// Time handlers
const updateClock = () => {
  const now = new Date()
  currentTime.value = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
}
const toggleTime = () => {
  showTime.value = !showTime.value
  if (showTime.value) updateClock()
}

// Click outside
useClickOutside(notificationsContainerRef, () => { notificationsDropdownOpen.value = false })
useClickOutside(profileContainerRef, () => { profileDropdownOpen.value = false })
useClickOutside(searchContainerRef, () => { searchResults.value = [] })

const handleDocumentClick = (event) => {
  if (!event.target.closest('.time-icon')) showTime.value = false
}

// Lifecycle
onMounted(() => {
  loadAuth()
  loadSettings()
  document.addEventListener('click', handleDocumentClick)
  clockInterval = setInterval(() => { if (showTime.value) updateClock() }, 1000)
})
onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
  if (clockInterval) clearInterval(clockInterval)
})
</script>

<style scoped>
/* ========== HEADER STYLES ========== */
.header {
  background: #ffffff;
  border-bottom: 1px solid #eef2f6;
  padding: 14px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

[data-topbar="dark"] .header {
  background: #1e293b !important;
  border-bottom-color: #334155;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 18px;
}

.welcome-text {
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
  background: #fef9f0;
  padding: 5px 14px;
  border-radius: 40px;
}

[data-theme="dark"] .welcome-text {
  background: #374151;
  color: #f3f4f6;
}

.time-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 40px;
  background: #f3f4f6;
  transition: all 0.2s;
}

.time-icon:hover {
  background: #e5e7eb;
}

[data-theme="dark"] .time-icon {
  background: #374151;
}

.time-display {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4b5563;
}

[data-theme="dark"] .time-display {
  color: #f3f4f6;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  overflow: visible !important;
}

.icon-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #4b5563;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.2s;
}

.icon-btn:hover {
  background-color: #f3f4f6;
  color: #f97316;
}

[data-theme="dark"] .icon-btn:hover {
  background-color: #374151;
}

.icon-size {
  width: 20px;
  height: 20px;
}

/* Search */
.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #9ca3af;
}

.search-input {
  padding: 8px 12px 8px 38px;
  border: 1px solid #e5e9f0;
  border-radius: 40px;
  background-color: #f9fafb;
  font-size: 0.9rem;
  width: 220px;
  outline: none;
  transition: all 0.2s;
}

.search-input:focus {
  border-color: #f97316;
  width: 260px;
}

.search-results-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  min-width: 280px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1001;
  border: 1px solid #e5e9f0;
}

.search-result-item {
  padding: 10px 16px;
  cursor: pointer;
  color: #4b5563;
}

.search-result-item:hover {
  background: #f3f4f6;
}

/* Notifications */
.notif-wrapper {
  position: relative;
  overflow: visible !important;
}

.notif-badge {
  position: absolute;
  top: -2px;
  right: -4px;
  background-color: #f97316;
  color: white;
  font-size: 0.65rem;
  font-weight: bold;
  border-radius: 30px;
  padding: 2px 6px;
  min-width: 18px;
  text-align: center;
  border: 2px solid white;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: #1e2a3a;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  min-width: 320px;
  z-index: 1050;
  overflow: hidden;
  border: 1px solid #334155;
}

.notifications-dropdown {
  width: 360px;
}

.dropdown-header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
}

.dropdown-header h4 {
  margin: 0;
  font-size: 16px;
  color: #fff;
}

.clear-all-btn {
  background: none;
  border: none;
  color: #f97316;
  font-size: 12px;
  cursor: pointer;
}

.notifications-list {
  max-height: 360px;
  overflow-y: auto;
}

.notification-item {
  display: flex;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid #334155;
  cursor: pointer;
}

.notification-item:hover {
  background: #243142;
}

.notification-item.unread {
  background: #1a2a3a;
}

.notif-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.notif-content p {
  margin: 0 0 4px;
  font-size: 13px;
  color: #e2e8f0;
}

.notif-time {
  font-size: 11px;
  color: #64748b;
}

.empty-notifications {
  padding: 40px;
  text-align: center;
  color: #94a3b8;
}

.dropdown-footer {
  padding: 12px 20px;
  border-top: 1px solid #334155;
}

.view-all-btn {
  width: 100%;
  padding: 10px;
  background: #f97316;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background 0.2s;
}

.view-all-btn:hover {
  background: #ea580c;
}

/* Profile Dropdown */
.profile-dropdown-container {
  position: relative;
}

.profile-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 40px;
  transition: all 0.2s;
}

.profile-btn:hover {
  background-color: #f3f4f6;
}

[data-theme="dark"] .profile-btn:hover {
  background-color: #374151;
}

.profile-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-name {
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
}

[data-theme="dark"] .profile-name {
  color: #e2e8f0;
}

.profile-dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: #1e2a3a;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  min-width: 260px;
  z-index: 1050;
  overflow: hidden;
  border: 1px solid #334155;
}

.profile-welcome {
  padding: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: #243142;
}

.profile-image-large {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.profile-welcome h4 {
  margin: 0;
  font-size: 14px;
  color: #fff;
}

.profile-welcome p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #94a3b8;
}

.dropdown-divider {
  height: 1px;
  background: #334155;
  margin: 8px 0;
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  color: #e2e8f0;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background: #334155;
  color: #f97316;
}

.text-danger {
  color: #ef4444;
}

.text-danger:hover {
  background: #450a0a;
  color: #ef4444;
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-btn {
  padding: 8px 16px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.login-btn {
  background: transparent;
  color: #f97316;
  border: 1px solid #f97316;
}

.login-btn:hover {
  background: #f97316;
  color: white;
}

.signup-btn {
  background: #f97316;
  color: white;
}

.signup-btn:hover {
  background: #ea580c;
}

/* Settings Panel */
.settings-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
}

.settings-panel {
  position: fixed;
  top: 0;
  right: -420px;
  width: 400px;
  height: 100%;
  background: #1e2a3a;
  z-index: 2001;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 16px 0 0 16px;
}

.settings-panel.open {
  right: 0;
}

.settings-header {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
}

.settings-header h3 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}

.close-settings {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #94a3b8;
  transition: color 0.2s;
}

.close-settings:hover {
  color: #f97316;
}

.settings-body {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.setting-group {
  margin-bottom: 32px;
}

.setting-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.button-group.vertical {
  flex-direction: column;
  gap: 10px;
  align-items: stretch;
}

.setting-btn {
  background: #2d3a4a;
  border: none;
  padding: 8px 20px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;
  text-align: center;
}

.setting-btn:hover {
  background: #3b4a5c;
  transform: translateY(-1px);
  color: #f97316;
}

.setting-btn.active {
  background: #f97316;
  color: white;
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
}

.setting-btn.active:hover {
  background: #ea580c;
}

.button-group.vertical .setting-btn {
  width: 100%;
}

.settings-footer {
  padding: 20px 24px;
  border-top: 1px solid #334155;
}

.reset-btn {
  width: 100%;
  padding: 12px;
  background: #dc2626;
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-btn:hover {
  background: #b91c1c;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}

/* Modals */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 32px;
  width: 320px;
  text-align: center;
}

[data-theme="dark"] .modal-content {
  background: #1e293b;
  color: white;
}

.modal-content h3 {
  margin: 0 0 20px;
}

.modal-input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
}

.modal-btn {
  width: 100%;
  padding: 12px;
  background: #f97316;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 12px;
}

.modal-close {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 700px) {
  .header {
    padding: 12px 20px;
  }
  .search-input {
    width: 160px;
  }
  .profile-name {
    display: none;
  }
  .settings-panel {
    width: 100%;
    right: -100%;
    border-radius: 0;
  }
}
</style>