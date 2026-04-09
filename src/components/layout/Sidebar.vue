<!-- src/components/Sidebar.vue -->
<template>
  <aside class="sidebar" :class="{ 'dark-sidebar': isDarkMode }">
    <!-- FIXED LOGO AREA (always visible) -->
    <div class="logo-area">
      <img src="../../assets/images/image.png" alt="Larkon Logo" class="logo-img" />
      <span class="logo-text">Larkon</span>
    </div>

    <!-- SCROLLABLE NAVIGATION MENU (scrollbar hidden) -->
    <div class="nav-scrollable">
      <nav class="nav-menu">
        <!-- DASHBOARD Section -->
        <div class="nav-section">
          <div class="section-title">DASHBOARD</div>
          <router-link to="/" class="nav-link dashboard-link" :class="{ active: $route.path === '/dashboard' }">
            <HomeIcon class="nav-icon" />
            <span class="nav-label">Dashboard</span>
          </router-link>
        </div>

        <!-- COMPONENTS Section -->
        <div class="nav-section">
          <div class="section-title">COMPONENTS</div>
          
          <div v-for="item in menuItems" :key="item.name" class="nav-item-wrapper">
            <div class="dropdown-group">
              <div class="nav-link dropdown-trigger" :class="{ 'dropdown-open': item.isOpen }" @click="toggleDropdown(item)">
                <component :is="item.icon" class="nav-icon" />
                <span class="nav-label">{{ item.name }}</span>
                <span v-if="item.badge" class="badge">{{ item.badge }}</span>
                <ChevronDownIcon class="dropdown-icon" :class="{ 'rotate': item.isOpen }" />
              </div>
              <div class="dropdown-items" :class="{ 'show': item.isOpen }">
                <router-link
                  v-for="sub in item.dropdown"
                  :key="sub.name"
                  :to="sub.route"
                  class="dropdown-link"
                  :class="{ disabled: sub.disabled, active: $route.path === sub.route }"
                  @click="sub.disabled && $event.preventDefault()"
                >
                  <span class="nav-label">{{ sub.name }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  Squares2X2Icon,
  CpuChipIcon,
  ChartPieIcon,
  DocumentTextIcon,
  TableCellsIcon,
  PhotoIcon,
  MapIcon,
  Bars3Icon,
  HomeIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()
const route = useRoute()
const isDarkMode = inject('isDarkMode', ref(false))

onMounted(() => {
  if (route.path === '/') {
    router.push('/buttons')
  }
})

const menuItems = ref([
  { 
    name: 'Base UI', 
    icon: Squares2X2Icon,
    badge: '',
    dropdown: [
      { name: 'Button', route: '/buttons' },
      { name: 'Cards', route: '/cards' },
      { name: 'Modals', route: '/modals' },
      { name: 'Alerts', route: '/alerts' },
      { name: 'Badges', route: '/badges' },
      { name: 'Progress Bars', route: '/progress-bars' }
    ],
    isOpen: true
  },
  { 
    name: 'Advanced UI', 
    icon: CpuChipIcon,
    dropdown: [
      { name: 'Drag & Drop', route: '/drag-drop' },
      { name: 'Carousel', route: '/carousel' },
      { name: 'Tooltips', route: '/tooltips' },
      { name: 'Popovers', route: '/popovers' },
      { name: 'Accordions', route: '/accordions' },
      { name: 'Tabs', route: '/tabs' }
    ],
    isOpen: false
  },
  { 
    name: 'Charts', 
    icon: ChartPieIcon, 
    badge: '12',
    dropdown: [
      { name: 'Line Chart', route: '/line-chart' },
      { name: 'Bar Chart', route: '/bar-chart' },
      { name: 'Pie Chart', route: '/pie-chart' },
      { name: 'Area Chart', route: '/area-chart' },
      { name: 'Scatter Plot', route: '/scatter-plot' },
      { name: 'Radar Chart', route: '/radar-chart' }
    ],
    isOpen: false
  },
  { 
    name: 'Forms', 
    icon: DocumentTextIcon,
    dropdown: [
      { name: 'Input Fields', route: '/input-fields' },
      { name: 'Select Menus', route: '/select-menus' },
      { name: 'Checkboxes', route: '/checkboxes' },
      { name: 'Radio Buttons', route: '/radio-buttons' },
      { name: 'File Upload', route: '/file-upload' },
      { name: 'Date Picker', route: '/date-picker' }
    ],
    isOpen: false
  },
  { 
    name: 'Tables', 
    icon: TableCellsIcon,
    dropdown: [
      { name: 'Basic Table', route: '/basic-table' },
      { name: 'Data Table', route: '/data-table' },
      { name: 'Sortable Table', route: '/sortable-table' },
      { name: 'Filterable Table', route: '/filterable-table' },
      { name: 'Pagination', route: '/pagination' },
      { name: 'Editable Table', route: '/editable-table' }
    ],
    isOpen: false
  },
  { 
    name: 'Icons', 
    icon: PhotoIcon,
    dropdown: [
      { name: 'Hero Icons', route: '/hero-icons' },
      { name: 'Font Awesome', route: '/font-awesome' },
      { name: 'Material Icons', route: '/material-icons' },
      { name: 'Feather Icons', route: '/feather-icons' },
      { name: 'Bootstrap Icons', route: '/bootstrap-icons' },
      { name: 'Custom Icons', route: '/custom-icons' }
    ],
    isOpen: false
  },
  { 
    name: 'Maps', 
    icon: MapIcon,
    dropdown: [
      { name: 'Google Maps', route: '/google-maps' },
      { name: 'Leaflet Maps', route: '/leaflet-maps' },
      { name: 'Vector Maps', route: '/vector-maps' },
      { name: 'Heat Maps', route: '/heat-maps' },
      { name: 'Street View', route: '/street-view' },
      { name: '3D Maps', route: '/3d-maps' }
    ],
    isOpen: false
  },
  { 
    name: 'Badge Menu', 
    icon: Bars3Icon,
    dropdown: [
      { name: 'Menu Item 1', route: '/menu-item-1' },
      { name: 'Menu Item 2', route: '/menu-item-2' },
      { name: 'Menu Item 3', route: '/menu-item-3' },
      { name: 'Menu Item 4', route: '/menu-item-4' },
      { name: 'Disable Item', route: '#', disabled: true }
    ],
    isOpen: false
  }
])

const toggleDropdown = (item) => {
  item.isOpen = !item.isOpen
}
</script>

<style scoped>
/* ========== SIDEBAR CONTAINER ========== */
.sidebar {
  width: 280px;
  background: linear-gradient(180deg, #ffffff 0%, #fefefe 100%);
  border-right: 1px solid #e9edf2;
  display: flex;
  flex-direction: column;
  height: 100vh;          /* Full viewport height */
  overflow: hidden;       /* Prevents sidebar from scrolling as a whole */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.sidebar.dark-sidebar {
  background: linear-gradient(180deg, #1f2937 0%, #111827 100%);
  border-right-color: #374151;
}

/* ========== FIXED LOGO AREA (never scrolls) ========== */
.logo-area {
  flex-shrink: 0;        /* Prevents shrinking */
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 20px 28px 24px;
  border-bottom: 1px solid #eff3f8;
}

.dark-sidebar .logo-area {
  border-bottom-color: #374151;
}

.logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 10px;
  background: #f3f4f6;
  padding: 4px;
}

.dark-sidebar .logo-img {
  background: #374151;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #f97316, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.3px;
}

/* ========== SCROLLABLE NAVIGATION (scrollbar hidden) ========== */
.nav-scrollable {
  flex: 1;               /* Takes remaining space */
  overflow-y: auto;      /* Enables scrolling */
  /* Hide scrollbar for Chrome, Safari, Edge */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.nav-scrollable::-webkit-scrollbar {
  display: none;         /* Hide scrollbar in WebKit browsers */
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px 32px 16px;
}

/* ========== REST OF YOUR STYLES (unchanged, but cleaned duplicates) ========== */
.nav-section {
  width: 100%;
}

.section-title {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #9ca3af;
  padding: 0 16px 8px 16px;
  margin-top: 4px;
}

.dark-sidebar .section-title {
  color: #6b7280;
}

.nav-item-wrapper {
  width: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 16px;
  border-radius: 14px;
  color: #4b5563;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  position: relative;
}

.dark-sidebar .nav-link {
  color: #9ca3af;
}

.nav-link:hover:not(.disabled) {
  background-color: #fef3e8;
  color: #f97316;
}

.dark-sidebar .nav-link:hover:not(.disabled) {
  background-color: #374151;
  color: #f97316;
}

.nav-link.active,
.router-link-active.router-link-exact-active.nav-link,
.dropdown-link.active {
  background-color: #fff2e5;
  color: #f97316;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(249,115,22,0.1);
}

.dark-sidebar .nav-link.active,
.dark-sidebar .dropdown-link.active {
  background-color: #374151;
  color: #f97316;
}

.dashboard-link {
  margin-bottom: 4px;
}

.nav-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.nav-label {
  flex: 1;
  font-size: 0.95rem;
}

.badge {
  background-color: #f97316;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 30px;
  line-height: 1.2;
  margin-right: 8px;
}

/* Dropdown Styles */
.dropdown-group {
  width: 100%;
}

.dropdown-trigger {
  cursor: pointer;
  justify-content: space-between;
}

.dropdown-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-items {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  padding-left: 36px;
}

.dropdown-items.show {
  max-height: 500px;
  transition: max-height 0.3s ease-in;
}

.dropdown-link {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin: 4px 0;
  border-radius: 10px;
  color: #6b7280;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.dark-sidebar .dropdown-link {
  color: #9ca3af;
}

.dropdown-link:hover:not(.disabled) {
  background-color: #fef3e8;
  color: #f97316;
}

.dark-sidebar .dropdown-link:hover:not(.disabled) {
  background-color: #374151;
  color: #f97316;
}

.dropdown-link.disabled {
  color: #cbd5e1;
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none;
}

.dropdown-link .nav-label {
  font-size: 0.9rem;
}
</style>