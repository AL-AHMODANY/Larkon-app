<template>
  <div class="dashboard">

    <!-- ── Page title ──────────────────────────────────── -->
    <div class="page-title">
      <h4>WELCOME!</h4>
    </div>

    <!-- ── Alert banner ───────────────────────────────── -->
    <div class="alert-banner">
      <span class="alert-icon">
        <ExclamationTriangleIcon class="icon-sm" />
      </span>
      We regret to inform you that our server is currently experiencing technical difficulties.
    </div>

    <!-- ── Stat cards ─────────────────────────────────── -->
    <div class="stat-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <div class="stat-card__left">
          <div class="stat-card__icon" :style="{ background: stat.iconBg }">
            <component :is="stat.icon" class="stat-icon" />
          </div>
        </div>
        <div class="stat-card__right">
          <p class="stat-card__label">{{ stat.label }}</p>
          <h3 class="stat-card__value">{{ stat.value }}</h3>
          <div class="stat-card__footer">
            <span class="stat-card__delta" :class="stat.up ? 'up' : 'down'">
              <component :is="stat.up ? ArrowTrendingUpIcon : ArrowTrendingDownIcon" class="delta-icon" />
              {{ stat.delta }}
            </span>
            <span class="stat-card__period">{{ stat.period }}</span>
            <a href="#" class="stat-card__link">View More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Performance chart ──────────────────────────── -->
    <div class="card performance-card">
      <div class="card__header">
        <h5 class="card__title">Performance</h5>
        <div class="tab-pills">
          <button
            v-for="p in periods"
            :key="p"
            class="tab-pill"
            :class="{ active: activePeriod === p }"
            @click="activePeriod = p"
          >{{ p }}</button>
        </div>
      </div>
      <div class="card__body">
        <apexchart
          type="bar"
          height="300"
          :options="perfChartOptions"
          :series="perfSeries"
        />
      </div>
    </div>

    <!-- ── Middle row: Conversions + Sessions + Top Pages ─ -->
    <div class="middle-grid">

      <!-- Conversions radial -->
      <div class="card conversions-card">
        <div class="card__header">
          <h5 class="card__title">Conversions</h5>
        </div>
        <div class="card__body conv-body">
          <apexchart
            type="radialBar"
            height="220"
            :options="radialOptions"
            :series="[65.2]"
          />
          <p class="conv-label">Returning Customer</p>
          <div class="conv-stats">
            <div class="conv-stat">
              <span class="conv-stat__period">This Week</span>
              <strong class="conv-stat__val">23.5k</strong>
            </div>
            <div class="conv-stat">
              <span class="conv-stat__period">Last Week</span>
              <strong class="conv-stat__val">41.05k</strong>
            </div>
          </div>
          <button class="btn-outline">View Details</button>
        </div>
      </div>

      <!-- Sessions by Country map placeholder -->
      <div class="card sessions-card">
        <div class="card__header">
          <h5 class="card__title">Sessions by Country</h5>
        </div>
        <div class="card__body sessions-body">
          <div class="world-map">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="map-svg">
              <ellipse cx="120" cy="120" rx="80" ry="55" :fill="isDark ? 'rgba(255,255,255,0.08)' : '#e8edf5'"/>
              <ellipse cx="180" cy="100" rx="120" ry="70" :fill="isDark ? 'rgba(255,255,255,0.08)' : '#e8edf5'"/>
              <ellipse cx="310" cy="100" rx="100" ry="60" :fill="isDark ? 'rgba(255,255,255,0.08)' : '#e8edf5'"/>
              <ellipse cx="310" cy="185" rx="65"  ry="50" :fill="isDark ? 'rgba(255,255,255,0.08)' : '#e8edf5'"/>
              <ellipse cx="480" cy="120" rx="70"  ry="50" :fill="isDark ? 'rgba(255,255,255,0.08)' : '#e8edf5'"/>
              <ellipse cx="490" cy="195" rx="30"  ry="40" :fill="isDark ? 'rgba(255,255,255,0.08)' : '#e8edf5'"/>
              <ellipse cx="160" cy="200" rx="28"  ry="45" :fill="isDark ? 'rgba(255,255,255,0.08)' : '#e8edf5'"/>
              <circle cx="148" cy="105" r="6" fill="#fd7e14" opacity="0.85"/>
              <circle cx="180" cy="100" r="6" fill="#fd7e14" opacity="0.85"/>
              <circle cx="210" cy="120" r="5" fill="#fd7e14" opacity="0.7"/>
              <circle cx="420" cy="125" r="6" fill="#fd7e14" opacity="0.85"/>
              <text x="128" y="92"  font-size="9" :fill="isDark ? '#7a8fa8' : '#6c757d'">Canada</text>
              <text x="158" y="108" font-size="9" :fill="isDark ? '#7a8fa8' : '#6c757d'">United States</text>
              <text x="182" y="134" font-size="9" :fill="isDark ? '#7a8fa8' : '#6c757d'">Brazil</text>
              <text x="390" y="112" font-size="9" :fill="isDark ? '#7a8fa8' : '#6c757d'">Russia</text>
              <text x="415" y="130" font-size="9" :fill="isDark ? '#7a8fa8' : '#6c757d'">China</text>
            </svg>
          </div>
          <div class="sessions-stats">
            <div class="conv-stat">
              <span class="conv-stat__period">This Week</span>
              <strong class="conv-stat__val">23.5k</strong>
            </div>
            <div class="conv-stat">
              <span class="conv-stat__period">Last Week</span>
              <strong class="conv-stat__val">41.05k</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Pages -->
      <div class="card top-pages-card">
        <div class="card__header">
          <h5 class="card__title">Top Pages</h5>
          <a href="#" class="card__link">View All</a>
        </div>
        <div class="card__body p0">
          <div class="top-pages-list">
            <div v-for="page in topPages" :key="page.path" class="top-page-row">
              <div class="top-page-info">
                <div class="top-page-icon">
                  <DocumentTextIcon class="page-doc-icon" />
                </div>
                <div class="top-page-meta">
                  <a href="#" class="top-page-path">{{ page.path }}</a>
                  <div class="top-page-bar-wrap">
                    <div
                      class="top-page-bar"
                      :style="{ width: Math.min((page.views / 3500) * 100, 100) + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="top-page-stats">
                <span class="top-page-views">{{ page.views.toLocaleString() }}</span>
                <span
                  class="exit-rate"
                  :class="page.exit > 30 ? 'high' : page.exit > 15 ? 'mid' : 'low'"
                >{{ page.exitLabel }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ── Bottom row: Recent Transactions + Recent Orders ─ -->
    <div class="bottom-grid">

      <!-- Recent Transactions -->
      <div class="card txn-card">
        <div class="card__header">
          <h5 class="card__title">Recent Transactions</h5>
          <a href="#" class="btn-accent-sm">+ Add</a>
        </div>
        <div class="card__body p0">
          <div class="txn-list">
            <div v-for="txn in transactions" :key="txn.id" class="txn-row">
              <div class="txn-avatar" :style="{ background: txn.avatarBg }">
                {{ txn.initials }}
              </div>
              <div class="txn-body">
                <div class="txn-top">
                  <span class="txn-desc">{{ txn.desc }}</span>
                  <strong :class="txn.type === 'Cr' ? 'cr' : 'dr'">
                    {{ txn.type === 'Cr' ? '+' : '-' }}{{ txn.amount }}
                  </strong>
                </div>
                <div class="txn-bottom">
                  <span class="txn-date">{{ txn.date }}</span>
                  <span class="txn-type-badge" :class="txn.type === 'Cr' ? 'cr' : 'dr'">
                    {{ txn.type === 'Cr' ? 'Credit' : 'Debit' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="card orders-card">
        <div class="card__header">
          <h5 class="card__title">Recent Orders</h5>
          <a href="#" class="btn-accent-sm">+ Create Order</a>
        </div>
        <div class="card__body p0">
          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Order ID.</th>
                  <th>Date</th>
                  <th>Product</th>
                  <th>Customer Name</th>
                  <th>Email ID</th>
                  <th>Phone No.</th>
                  <th>Address</th>
                  <th>Payment Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in recentOrders" :key="order.id">
                  <td><a href="#" class="table-link">{{ order.id }}</a></td>
                  <td class="text-muted text-sm">{{ order.date }}</td>
                  <td>
                    <div class="product-thumb">
                      <component :is="order.productIcon" class="product-icon" />
                    </div>
                  </td>
                  <td>{{ order.customer }}</td>
                  <td class="text-muted text-sm">{{ order.email }}</td>
                  <td class="text-muted text-sm">{{ order.phone }}</td>
                  <td class="text-muted text-sm">{{ order.address }}</td>
                  <td class="text-muted text-sm">{{ order.payment }}</td>
                  <td>
                    <span class="status-badge" :class="order.status.toLowerCase()">
                      <span class="status-dot"></span>
                      {{ order.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Pagination -->
          <div class="table-footer">
            <span class="text-muted text-sm">Showing <strong>5</strong> of <strong>90,521</strong> orders</span>
            <div class="pagination">
              <button class="page-btn" disabled>‹</button>
              <button class="page-btn active">1</button>
              <button class="page-btn">2</button>
              <button class="page-btn">3</button>
              <button class="page-btn">›</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";
import {
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  TagIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  CameraIcon,
  MusicalNoteIcon,
  DevicePhoneMobileIcon,
  PrinterIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/outline";

const apexchart = VueApexCharts;

// ── Theme reactivity ────────────────────────────────────
const isDark = ref(false);
const updateTheme = () => {
  isDark.value = document.documentElement.getAttribute("data-theme") === "dark";
};
onMounted(() => {
  updateTheme();
  const observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
});

// ── Stat cards ──────────────────────────────────────────
const stats = ref([
  {
    label: "Total Orders",
    value: "13,647",
    delta: "2.3%",
    period: "Last Week",
    up: true,
    icon: ShoppingBagIcon,
    iconBg: "linear-gradient(160deg,#ff9b44 0%,#fd7e14 100%)",
  },
  {
    label: "New Leads",
    value: "9,526",
    delta: "8.1%",
    period: "Last Month",
    up: true,
    icon: UserGroupIcon,
    iconBg: "linear-gradient(160deg,#ff9b44 0%,#fd7e14 100%)",
  },
  {
    label: "Deals",
    value: "976",
    delta: "0.3%",
    period: "Last Month",
    up: false,
    icon: TagIcon,
    iconBg: "linear-gradient(160deg,#ff9b44 0%,#fd7e14 100%)",
  },
  {
    label: "Booked Revenue",
    value: "$123.6k",
    delta: "10.6%",
    period: "Last Month",
    up: false,
    icon: CurrencyDollarIcon,
    iconBg: "linear-gradient(160deg,#ff9b44 0%,#fd7e14 100%)",
  },
]);

// ── Period tabs ─────────────────────────────────────────
const periods = ["ALL", "1M", "6M", "1Y"];
const activePeriod = ref("1Y");

// ── Performance chart ───────────────────────────────────
const perfSeries = ref([
  {
    name: "Page Views",
    type: "bar",
    data: [32, 63, 44, 48, 52, 54, 38, 78, 36, 52, 60, 66],
  },
  {
    name: "Clicks",
    type: "line",
    data: [8, 14, 10, 20, 16, 22, 18, 28, 14, 24, 18, 32],
  },
]);

const perfChartOptions = computed(() => ({
  chart: {
    toolbar: { show: false },
    fontFamily: "inherit",
    background: "transparent",
    animations: { enabled: true, speed: 500 },
  },
  plotOptions: {
    bar: { borderRadius: 4, columnWidth: "45%" },
  },
  colors: ["#fd7e14", "#2ecc71"],
  dataLabels: { enabled: false },
  stroke: {
    width: [0, 2.5],
    curve: "smooth",
  },
  xaxis: {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    axisBorder: { show: false },
    axisTicks:  { show: false },
    labels: { style: { colors: isDark.value ? "#7a8fa8" : "#8996af", fontSize: "12px" } },
  },
  yaxis: {
    min: 0,
    max: 80,
    tickAmount: 8,
    labels: { style: { colors: isDark.value ? "#7a8fa8" : "#8996af", fontSize: "12px" } },
  },
  grid: {
    borderColor: isDark.value ? "rgba(255,255,255,0.08)" : "rgba(137,150,175,0.12)",
    strokeDashArray: 4,
    xaxis: { lines: { show: false } },
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    markers: { radius: 50, width: 10, height: 10 },
    labels: { colors: isDark.value ? "#7a8fa8" : "#8996af" },
  },
  tooltip: { theme: isDark.value ? "dark" : "light" },
}));

// ── Radial chart ────────────────────────────────────────
const radialOptions = computed(() => ({
  chart: { background: "transparent", toolbar: { show: false } },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: { size: "65%" },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: "26px",
          fontWeight: 700,
          color: isDark.value ? "#e2e8f4" : "#313a46",
          offsetY: 8,
          formatter: (v) => v + "%",
        },
      },
      track: { background: isDark.value ? "rgba(255,255,255,0.08)" : "#eef2f7", strokeWidth: "100%" },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      gradientToColors: ["#fd7e14"],
      stops: [0, 100],
    },
  },
  colors: ["#ff9b44"],
  stroke: { lineCap: "round" },
  labels: ["Returning Customer"],
}));

// ── Top pages ───────────────────────────────────────────
const topPages = ref([
  { path: "larkon/ecommerce.html", views: 465,  exit: 4.4,   exitLabel: "4.4%"  },
  { path: "larkon/dashboard.html", views: 426,  exit: 20.4,  exitLabel: "20.4%" },
  { path: "larkon/chat.html",      views: 254,  exit: 12.25, exitLabel: "12.25%"},
  { path: "larkon/auth-login.html",views: 3369, exit: 5.2,   exitLabel: "5.2%"  },
  { path: "larkon/email.html",     views: 985,  exit: 64.2,  exitLabel: "64.2%" },
  { path: "larkon/social.html",    views: 653,  exit: 2.4,   exitLabel: "2.4%"  },
  { path: "larkon/blog.html",      views: 478,  exit: 1.4,   exitLabel: "1.4%"  },
]);

// ── Transactions ────────────────────────────────────────
const transactions = ref([
  { id: 1, initials: "JT", avatarBg: "#e8f4fd", date: "24 April, 2024", amount: "$120.55", type: "Cr", desc: "Commissions"   },
  { id: 2, initials: "DS", avatarBg: "#fff3e0", date: "24 April, 2024", amount: "$9.68",   type: "Cr", desc: "Affiliates"    },
  { id: 3, initials: "JG", avatarBg: "#fce4ec", date: "20 April, 2024", amount: "$105.22", type: "Dr", desc: "Grocery"       },
  { id: 4, initials: "SB", avatarBg: "#e8f5e9", date: "18 April, 2024", amount: "$80.59",  type: "Cr", desc: "Refunds"       },
  { id: 5, initials: "WC", avatarBg: "#f3e5f5", date: "18 April, 2024", amount: "$750.95", type: "Dr", desc: "Bill Payments" },
  { id: 6, initials: "JK", avatarBg: "#e0f7fa", date: "17 April, 2024", amount: "$455.62", type: "Dr", desc: "Electricity"   },
  { id: 7, initials: "RP", avatarBg: "#fff8e1", date: "17 April, 2024", amount: "$102.77", type: "Cr", desc: "Interest"      },
  { id: 8, initials: "AM", avatarBg: "#e8eaf6", date: "16 April, 2024", amount: "$79.49",  type: "Cr", desc: "Refunds"       },
  { id: 9, initials: "PC", avatarBg: "#fbe9e7", date: "05 April, 2024", amount: "$980.00", type: "Dr", desc: "Shopping"      },
]);

// ── Recent Orders ───────────────────────────────────────
const recentOrders = ref([
  {
    id: "#RB5625", date: "29 April 2024",
    productIcon: ComputerDesktopIcon,
    customer: "Anna M. Hines",
    email: "anna.hines@mail.com",
    phone: "(+1)-555-1564-261",
    address: "Burr Ridge/Illinois",
    payment: "Credit Card",
    status: "Completed",
  },
  {
    id: "#RB9652", date: "25 April 2024",
    productIcon: CameraIcon,
    customer: "Judith H. Fritsche",
    email: "judith.fritsche.com",
    phone: "(+57)-305-5579-759",
    address: "SULLIVAN/Kentucky",
    payment: "Credit Card",
    status: "Completed",
  },
  {
    id: "#RB5984", date: "25 April 2024",
    productIcon: MusicalNoteIcon,
    customer: "Peter T. Smith",
    email: "peter.smith@mail.com",
    phone: "(+33)-655-5187-93",
    address: "Yreka/California",
    payment: "Pay Pal",
    status: "Completed",
  },
  {
    id: "#RB3625", date: "21 April 2024",
    productIcon: DevicePhoneMobileIcon,
    customer: "Emmanuel J. Delcid",
    email: "emmanuel.delicid@mail.com",
    phone: "(+30)-693-5553-637",
    address: "Atlanta/Georgia",
    payment: "Pay Pal",
    status: "Processing",
  },
  {
    id: "#RB8652", date: "18 April 2024",
    productIcon: PrinterIcon,
    customer: "William J. Cook",
    email: "william.cook@mail.com",
    phone: "(+91)-855-5446-150",
    address: "Rosenberg/Texas",
    payment: "Credit Card",
    status: "Processing",
  },
]);
</script>

<style scoped>
.dashboard {
  --card-bg:      #ffffff;
  --card-border:  #eef2f7;
  --card-shadow:  0 1px 4px rgba(0, 0, 0, 0.06);
  --text-primary: #313a46;
  --text-muted:   #8996af;
  --accent:       #fd7e14;
  --accent-light: #fff4ec;
  --success:      #2ecc71;
  --danger:       #e74c3c;
  --radius:       10px;
  --gap:          20px;

  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

/* Dark theme */
:global([data-theme="dark"]) .dashboard {
  --card-bg:      #1e2d40;
  --card-border:  rgba(255, 255, 255, 0.07);
  --card-shadow:  0 1px 6px rgba(0, 0, 0, 0.3);
  --text-primary: #e2e8f4;
  --text-muted:   #7a8fa8;
  --accent-light: rgba(253, 126, 20, 0.15);
}

/* ── Page title ─────────────────────────────────────── */
.page-title h4 {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-primary);
  margin: 0;
}

/* ── Alert banner ───────────────────────────────────── */
.alert-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: #fff4e5;
  border: 1px solid #ffe0b2;
  border-radius: var(--radius);
  font-size: 13.5px;
  color: #9c4b00;
}
:global([data-theme="dark"]) .alert-banner {
  background: rgba(253, 126, 20, 0.12);
  border-color: rgba(253, 126, 20, 0.25);
  color: #ffa94d;
}
.alert-icon { display: inline-flex; align-items: center; flex-shrink: 0; }
.icon-sm    { width: 18px; height: 18px; }

/* ── Stat grid ──────────────────────────────────────── */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
}
@media (max-width: 1200px) { .stat-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px)  { .stat-grid { grid-template-columns: 1fr; } }

.stat-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  box-shadow: var(--card-shadow);
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: box-shadow 0.2s ease;
}
.stat-card:hover { box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1); }

.stat-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.stat-icon { width: 24px; height: 24px; color: #fff; stroke-width: 1.8; }

.stat-card__right  { flex: 1; min-width: 0; }
.stat-card__label  { font-size: 13px; color: var(--text-muted); margin: 0 0 4px; }
.stat-card__value  { font-size: 24px; font-weight: 700; color: var(--text-primary); margin: 0 0 8px; }

.stat-card__footer {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.stat-card__delta {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  font-weight: 600;
}
.stat-card__delta.up   { color: var(--success); }
.stat-card__delta.down { color: var(--danger); }
.delta-icon { width: 13px; height: 13px; }

.stat-card__period { font-size: 12px; color: var(--text-muted); }
.stat-card__link {
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
}
.stat-card__link:hover { text-decoration: underline; }

/* ── Generic card ───────────────────────────────────── */
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  box-shadow: var(--card-shadow);
}
.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid var(--card-border);
}
.card__title {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
}
.card__link {
  font-size: 13px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}
.card__link:hover { text-decoration: underline; }
.card__body     { padding: 16px 20px; }
.card__body.p0  { padding: 0; }

/* ── Period tabs ────────────────────────────────────── */
.tab-pills {
  display: flex;
  gap: 4px;
  background: #f4f6fb;
  border-radius: 6px;
  padding: 3px;
}
:global([data-theme="dark"]) .tab-pills { background: rgba(255, 255, 255, 0.06); }

.tab-pill {
  padding: 4px 10px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.tab-pill.active {
  background: var(--card-bg);
  color: var(--text-primary);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

/* ── Middle grid ────────────────────────────────────── */
.middle-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr 1.6fr;
  gap: var(--gap);
  align-items: start;
}
@media (max-width: 1100px) { .middle-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 700px)  { .middle-grid { grid-template-columns: 1fr; } }

/* Conversions */
.conv-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px 20px;
  gap: 8px;
}
.conv-label { font-size: 13px; color: var(--text-muted); margin: 0; }
.conv-stats {
  display: flex;
  gap: 24px;
  margin-top: 4px;
  width: 100%;
  justify-content: center;
}
.conv-stat        { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.conv-stat__period{ font-size: 12px; color: var(--text-muted); }
.conv-stat__val   { font-size: 18px; font-weight: 700; color: var(--text-primary); }

.btn-outline {
  margin-top: 8px;
  padding: 7px 22px;
  border: 1px solid var(--card-border);
  border-radius: 6px;
  background: transparent;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  width: 100%;
}
.btn-outline:hover {
  background: var(--accent-light);
  color: var(--accent);
  border-color: var(--accent);
}

/* Sessions map */
.sessions-body { display: flex; flex-direction: column; gap: 12px; padding: 12px 20px 20px; }
.world-map     { width: 100%; }
.map-svg       { width: 100%; height: auto; }
.sessions-stats {
  display: flex;
  gap: 24px;
  justify-content: center;
  padding-top: 4px;
}

/* ── Data table ─────────────────────────────────────── */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
}
.data-table thead th {
  padding: 10px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  border-bottom: 1px solid var(--card-border);
  background: transparent;
  white-space: nowrap;
}
.data-table tbody tr {
  border-bottom: 1px solid var(--card-border);
  transition: background 0.12s ease;
}
.data-table tbody tr:last-child { border-bottom: none; }
.data-table tbody tr:hover { background: rgba(253, 126, 20, 0.03); }
.data-table td {
  padding: 10px 16px;
  color: var(--text-primary);
  vertical-align: middle;
}
.text-right { text-align: right !important; }
.text-muted { color: var(--text-muted) !important; }
.text-sm    { font-size: 12.5px !important; }

.table-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}
.table-link:hover { text-decoration: underline; }

/* Exit rate pills */
.exit-rate {
  font-size: 12px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 20px;
}
.exit-rate.low  { background: #e8f5e9; color: #27ae60; }
.exit-rate.mid  { background: #fff8e1; color: #f39c12; }
.exit-rate.high { background: #fce4ec; color: #e74c3c; }
:global([data-theme="dark"]) .exit-rate.low  { background: rgba(39, 174, 96, 0.15);  color: #2ecc71; }
:global([data-theme="dark"]) .exit-rate.mid  { background: rgba(243, 156, 18, 0.15); color: #f1c40f; }
:global([data-theme="dark"]) .exit-rate.high { background: rgba(231, 76, 60, 0.15);  color: #e74c3c; }

/* ── Bottom grid ────────────────────────────────────── */
.bottom-grid {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: var(--gap);
  align-items: start;
}
@media (max-width: 1000px) { .bottom-grid { grid-template-columns: 1fr; } }

/* ── Top Pages list ─────────────────────────────────── */
.top-pages-list { padding: 4px 0; }

.top-page-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--card-border);
  transition: background 0.12s ease;
}
.top-page-row:last-child { border-bottom: none; }
.top-page-row:hover { background: rgba(253, 126, 20, 0.03); }

.top-page-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
}

.top-page-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.page-doc-icon { width: 15px; height: 15px; color: var(--accent); stroke-width: 1.8; }

.top-page-meta {
  flex: 1;
  min-width: 0;
}
.top-page-path {
  display: block;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
}
.top-page-path:hover { color: var(--accent); }

.top-page-bar-wrap {
  height: 4px;
  background: var(--card-border);
  border-radius: 99px;
  overflow: hidden;
}
.top-page-bar {
  height: 100%;
  background: linear-gradient(90deg, #ff9b44, #fd7e14);
  border-radius: 99px;
  transition: width 0.4s ease;
}

.top-page-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  flex-shrink: 0;
}
.top-page-views {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
}

/* ── Transactions list ──────────────────────────────── */
.txn-list { padding: 4px 0; }

.txn-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--card-border);
  transition: background 0.12s ease;
}
.txn-row:last-child { border-bottom: none; }
.txn-row:hover { background: rgba(253, 126, 20, 0.03); }

.txn-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  flex-shrink: 0;
}

.txn-body { flex: 1; min-width: 0; }

.txn-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}
.txn-desc {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.txn-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.txn-date { font-size: 11.5px; color: var(--text-muted); }

.cr { color: var(--success) !important; }
.dr { color: var(--danger)  !important; }

.txn-type-badge {
  display: inline-block;
  padding: 1px 8px;
  border-radius: 20px;
  font-size: 10.5px;
  font-weight: 700;
}
.txn-type-badge.cr { background: #e8f5e9; color: #27ae60; }
.txn-type-badge.dr { background: #fce4ec; color: #e74c3c; }
:global([data-theme="dark"]) .txn-type-badge.cr { background: rgba(39, 174, 96, 0.15);  color: #2ecc71; }
:global([data-theme="dark"]) .txn-type-badge.dr { background: rgba(231, 76, 60, 0.15);  color: #e74c3c; }

/* Recent orders */
.table-scroll { overflow-x: auto; }

/* Status badges */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  white-space: nowrap;
}
.status-badge.completed  { background: #e8f5e9; color: #27ae60; }
.status-badge.processing { background: #fff3cd; color: #d68910; }
.status-badge.cancelled  { background: #fce4ec; color: #e74c3c; }
:global([data-theme="dark"]) .status-badge.completed  { background: rgba(39, 174, 96, 0.15);  color: #2ecc71; }
:global([data-theme="dark"]) .status-badge.processing { background: rgba(214, 137, 16, 0.15); color: #f1c40f; }
:global([data-theme="dark"]) .status-badge.cancelled  { background: rgba(231, 76, 60, 0.15);  color: #e74c3c; }
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}

/* Product icon thumb */
.product-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-icon { width: 18px; height: 18px; color: var(--accent); stroke-width: 1.6; }

/* ── Table footer / pagination ──────────────────────── */
.table-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid var(--card-border);
  flex-wrap: wrap;
  gap: 8px;
}
.pagination { display: flex; gap: 4px; }
.page-btn {
  width: 30px;
  height: 30px;
  border: 1px solid var(--card-border);
  border-radius: 5px;
  background: var(--card-bg);
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-btn:hover:not(:disabled):not(.active) {
  background: var(--accent-light);
  color: var(--accent);
}
.page-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.page-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── Accent small button ────────────────────────────── */
.btn-accent-sm {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  background: var(--accent);
  color: #fff;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.btn-accent-sm:hover { opacity: 0.88; }
</style>