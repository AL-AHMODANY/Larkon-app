<template>
  <div class="db">
    <!-- Header row -->
    <div class="db__header">
      <div>
        <h4 class="db__title">WELCOME!</h4>
        <p class="db__sub">Dashboard</p>
      </div>
    </div>

    <!-- Alert -->
    <div class="db__alert">
      <i class="bx bx-error-circle db__alert-icon"></i>
      We regret to inform you that our server is currently experiencing technical difficulties.
    </div>

    <!-- Stat cards: icon on RIGHT, text on LEFT -->
    <div class="db__stats">
      <div v-for="s in stats" :key="s.label" class="db__stat-card">
        <div class="db__stat-body">
          <p class="db__stat-label">{{ s.label }}</p>
          <h3 class="db__stat-value">{{ s.value }}</h3>
          <div class="db__stat-footer">
            <span class="db__stat-delta" :class="s.up ? 'up' : 'down'">
              <i :class="s.up ? 'bx bx-trending-up' : 'bx bx-trending-down'"></i>
              {{ s.delta }}
            </span>
            <span class="db__stat-period">{{ s.period }}</span>
            <a href="#" class="db__stat-link">View More</a>
          </div>
        </div>
        <div class="db__stat-icon" :style="{ background: s.iconBg }">
          <component :is="s.icon" class="db__stat-svg" />
        </div>
      </div>
    </div>

    <!-- Performance chart -->
    <div class="db__card">
      <div class="db__card-header">
        <h5 class="db__card-title">Performance</h5>
        <div class="db__tabs">
          <button v-for="p in periods" :key="p" class="db__tab" :class="{ active: activePeriod === p }" @click="activePeriod = p">{{ p }}</button>
        </div>
      </div>
      <div class="db__card-body">
        <apexchart type="bar" height="280" :options="perfOpts" :series="perfSeries" />
      </div>
    </div>

    <!-- Middle row -->
    <div class="db__mid">
      <!-- Conversions -->
      <div class="db__card db__conv">
        <div class="db__card-header"><h5 class="db__card-title">Conversions</h5></div>
        <div class="db__card-body db__conv-body">
          <apexchart type="radialBar" height="200" :options="radialOpts" :series="[65.2]" />
          <p class="db__conv-label">Returning Customer</p>
          <div class="db__conv-stats">
            <div class="db__conv-stat"><span>This Week</span><strong>23.5k</strong></div>
            <div class="db__conv-stat"><span>Last Week</span><strong>41.05k</strong></div>
          </div>
          <button class="db__btn-outline">View Details</button>
        </div>
      </div>

      <!-- Sessions by Country -->
      <div class="db__card db__sessions">
        <div class="db__card-header"><h5 class="db__card-title">Sessions by Country</h5></div>
        <div class="db__card-body db__sessions-body">
          <svg viewBox="0 0 560 260" class="db__map">
            <ellipse cx="110" cy="110" rx="75" ry="50" :fill="isDark?'rgba(255,255,255,0.07)':'#dde3ef'"/>
            <ellipse cx="170" cy="92" rx="115" ry="65" :fill="isDark?'rgba(255,255,255,0.07)':'#dde3ef'"/>
            <ellipse cx="295" cy="92" rx="95" ry="55" :fill="isDark?'rgba(255,255,255,0.07)':'#dde3ef'"/>
            <ellipse cx="295" cy="172" rx="60" ry="46" :fill="isDark?'rgba(255,255,255,0.07)':'#dde3ef'"/>
            <ellipse cx="450" cy="110" rx="65" ry="46" :fill="isDark?'rgba(255,255,255,0.07)':'#dde3ef'"/>
            <ellipse cx="460" cy="182" rx="28" ry="38" :fill="isDark?'rgba(255,255,255,0.07)':'#dde3ef'"/>
            <ellipse cx="152" cy="188" rx="26" ry="42" :fill="isDark?'rgba(255,255,255,0.07)':'#dde3ef'"/>
            <circle cx="140" cy="98" r="5" fill="#fd7e14" opacity="0.9"/>
            <circle cx="172" cy="93" r="5" fill="#fd7e14" opacity="0.9"/>
            <circle cx="200" cy="112" r="4" fill="#fd7e14" opacity="0.7"/>
            <circle cx="400" cy="116" r="5" fill="#fd7e14" opacity="0.9"/>
            <text x="118" y="86" font-size="8" :fill="isDark?'#7a8fa8':'#6c757d'">Canada</text>
            <text x="148" y="100" font-size="8" :fill="isDark?'#7a8fa8':'#6c757d'">United States</text>
            <text x="172" y="126" font-size="8" :fill="isDark?'#7a8fa8':'#6c757d'">Brazil</text>
            <text x="368" y="104" font-size="8" :fill="isDark?'#7a8fa8':'#6c757d'">Russia</text>
            <text x="392" y="120" font-size="8" :fill="isDark?'#7a8fa8':'#6c757d'">China</text>
          </svg>
          <div class="db__conv-stats">
            <div class="db__conv-stat"><span>This Week</span><strong>23.5k</strong></div>
            <div class="db__conv-stat"><span>Last Week</span><strong>41.05k</strong></div>
          </div>
        </div>
      </div>

      <!-- Top Pages -->
      <div class="db__card db__toppages">
        <div class="db__card-header">
          <h5 class="db__card-title">Top Pages</h5>
          <a href="#" class="db__card-link">View All</a>
        </div>
        <div class="db__card-body db__p0">
          <table class="db__tp-table">
            <thead><tr><th>Page Path</th><th>Page Views</th></tr></thead>
            <tbody>
              <tr v-for="p in topPages" :key="p.path">
                <td><a href="#" class="db__tp-link">{{ p.path }}</a></td>
                <td class="db__tp-views">{{ p.views.toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Recent Orders -->
    <div class="db__card">
      <div class="db__card-header">
        <h5 class="db__card-title">Recent Orders</h5>
        <a href="#" class="db__btn-accent">+ Create Order</a>
      </div>
      <div class="db__card-body db__p0">
        <div class="db__table-wrap">
          <table class="db__table">
            <thead>
              <tr>
                <th>Order ID.</th><th>Date</th><th>Customer Name</th>
                <th>Phone No.</th><th>Address</th><th>Payment Type</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="o in recentOrders" :key="o.id">
                <td><a href="#" class="db__tlink">{{ o.id }}</a></td>
                <td class="db__muted">{{ o.date }}</td>
                <td>{{ o.customer }}</td>
                <td class="db__muted">{{ o.phone }}</td>
                <td class="db__muted">{{ o.address }}</td>
                <td class="db__muted">{{ o.payment }}</td>
                <td>
                  <span class="db__badge" :class="o.status === 'Completed' ? 'completed' : 'processing'">
                    <span class="db__dot"></span>{{ o.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="db__table-footer">
          <span class="db__muted">Showing <strong>5</strong> of <strong>90,521</strong> orders</span>
          <div class="db__pagination">
            <button class="db__page-btn" disabled>&#8249;</button>
            <button class="db__page-btn active">1</button>
            <button class="db__page-btn">2</button>
            <button class="db__page-btn">3</button>
            <button class="db__page-btn">&#8250;</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="db__footer">
      {{ new Date().getFullYear() }} &copy; Larkon. Crafted with ❤️ by Techzaa
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import VueApexCharts from "vue3-apexcharts";
import {
  ShoppingBagIcon, UserGroupIcon, TagIcon, CurrencyDollarIcon,
} from "@heroicons/vue/24/outline";

const apexchart = VueApexCharts;

const isDark = ref(false);
const updateTheme = () => { isDark.value = document.documentElement.getAttribute("data-theme") === "dark"; };
onMounted(() => {
  updateTheme();
  new MutationObserver(updateTheme).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
});

const stats = ref([
  { label: "Total Orders",    value: "13,647",  delta: "2.3%",  period: "Last Week",  up: true,  icon: ShoppingBagIcon,   iconBg: "linear-gradient(135deg,#ff9b44,#fd7e14)" },
  { label: "New Leads",       value: "9,526",   delta: "8.1%",  period: "Last Month", up: true,  icon: UserGroupIcon,     iconBg: "linear-gradient(135deg,#ff9b44,#fd7e14)" },
  { label: "Deals",           value: "976",     delta: "0.3%",  period: "Last Month", up: false, icon: TagIcon,           iconBg: "linear-gradient(135deg,#ff9b44,#fd7e14)" },
  { label: "Booked Revenue",  value: "$123.6k", delta: "10.6%", period: "Last Month", up: false, icon: CurrencyDollarIcon,iconBg: "linear-gradient(135deg,#ff9b44,#fd7e14)" },
]);

const periods = ["ALL","1M","6M","1Y"];
const activePeriod = ref("1Y");

const perfSeries = ref([
  { name: "Page Views", type: "bar",  data: [32,63,44,48,52,54,38,78,36,52,60,66] },
  { name: "Clicks",     type: "line", data: [8,14,10,20,16,22,18,28,14,24,18,32]  },
]);

const perfOpts = computed(() => ({
  chart: { toolbar: { show: false }, fontFamily: "inherit", background: "transparent", animations: { enabled: true, speed: 400 } },
  plotOptions: { bar: { borderRadius: 4, columnWidth: "42%" } },
  colors: ["#fd7e14","#2ecc71"],
  dataLabels: { enabled: false },
  stroke: { width: [0, 2.5], curve: "smooth" },
  xaxis: {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    axisBorder: { show: false }, axisTicks: { show: false },
    labels: { style: { colors: isDark.value ? "#7a8fa8" : "#8996af", fontSize: "12px" } },
  },
  yaxis: { min: 0, max: 80, tickAmount: 8, labels: { style: { colors: isDark.value ? "#7a8fa8" : "#8996af", fontSize: "12px" } } },
  grid: { borderColor: isDark.value ? "rgba(255,255,255,0.07)" : "rgba(137,150,175,0.12)", strokeDashArray: 4, xaxis: { lines: { show: false } } },
  legend: { position: "bottom", horizontalAlign: "center", markers: { radius: 50, width: 10, height: 10 }, labels: { colors: isDark.value ? "#7a8fa8" : "#8996af" } },
  tooltip: { theme: isDark.value ? "dark" : "light" },
}));

const radialOpts = computed(() => ({
  chart: { background: "transparent", toolbar: { show: false } },
  plotOptions: {
    radialBar: {
      startAngle: -135, endAngle: 135,
      hollow: { size: "62%" },
      dataLabels: {
        name: { show: false },
        value: { fontSize: "24px", fontWeight: 700, color: isDark.value ? "#e2e8f4" : "#313a46", offsetY: 8, formatter: v => v + "%" },
      },
      track: { background: isDark.value ? "rgba(255,255,255,0.07)" : "#eef2f7", strokeWidth: "100%" },
    },
  },
  fill: { type: "gradient", gradient: { shade: "dark", type: "horizontal", gradientToColors: ["#fd7e14"], stops: [0,100] } },
  colors: ["#ff9b44"],
  stroke: { lineCap: "round" },
}));

const topPages = ref([
  { path: "larkon/ecommerce.html",  views: 465  },
  { path: "larkon/dashboard.html",  views: 426  },
  { path: "larkon/chat.html",       views: 254  },
  { path: "larkon/auth-login.html", views: 3369 },
  { path: "larkon/email.html",      views: 985  },
  { path: "larkon/social.html",     views: 653  },
  { path: "larkon/blog.html",       views: 478  },
]);

const recentOrders = ref([
  { id: "#RB5625", date: "29 April 2024", customer: "Anna M. Hines",      phone: "(+1)-555-1564-261",  address: "Burr Ridge/Illinois",  payment: "Credit Card", status: "Completed"  },
  { id: "#RB9652", date: "25 April 2024", customer: "Judith H. Fritsche", phone: "(+57)-305-5579-759", address: "SULLIVAN/Kentucky",    payment: "Credit Card", status: "Completed"  },
  { id: "#RB5984", date: "25 April 2024", customer: "Peter T. Smith",     phone: "(+33)-655-5187-93",  address: "Yreka/California",     payment: "Pay Pal",     status: "Completed"  },
  { id: "#RB3625", date: "21 April 2024", customer: "Emmanuel J. Delcid", phone: "(+30)-693-5553-637", address: "Atlanta/Georgia",      payment: "Pay Pal",     status: "Processing" },
  { id: "#RB8652", date: "18 April 2024", customer: "William J. Cook",    phone: "(+91)-855-5446-150", address: "Rosenberg/Texas",      payment: "Credit Card", status: "Processing" },
]);
</script>

<style scoped>
.db {
  --c-bg:      var(--card-bg, #ffffff);
  --c-border:  var(--card-border, #eef2f7);
  --c-shadow:  var(--card-shadow, 0 1px 4px rgba(0,0,0,0.06));
  --c-text:    var(--text-primary, #313a46);
  --c-muted:   var(--text-muted, #8996af);
  --c-accent:  var(--accent, #fd7e14);
  --c-success: var(--success, #2ecc71);
  --c-danger:  var(--danger, #e74c3c);
  --c-radius:  10px;
  --c-gap:     20px;
  display: flex; flex-direction: column; gap: var(--c-gap); padding: 0;
}

/* Header */
.db__header { display: flex; align-items: center; justify-content: space-between; }
.db__title  { font-size: 15px; font-weight: 700; letter-spacing: 0.06em; color: var(--c-text); margin: 0; }
.db__sub    { font-size: 12px; color: var(--c-muted); margin: 2px 0 0; }

/* Alert */
.db__alert {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 18px; border-radius: var(--c-radius);
  background: #fff4e5; border: 1px solid #ffe0b2;
  font-size: 13.5px; color: #9c4b00;
}
:global([data-theme="dark"]) .db__alert { background: rgba(253,126,20,0.12); border-color: rgba(253,126,20,0.25); color: #ffa94d; }

/* Stat cards */
.db__stats { display: grid; grid-template-columns: repeat(4,1fr); gap: var(--c-gap); }
@media(max-width:1200px){ .db__stats { grid-template-columns: repeat(2,1fr); } }
@media(max-width:600px) { .db__stats { grid-template-columns: 1fr; } }

.db__stat-card {
  background: var(--c-bg); border: 1px solid var(--c-border);
  border-radius: var(--c-radius); box-shadow: var(--c-shadow);
  padding: 20px; display: flex; align-items: flex-start;
  justify-content: space-between; gap: 12px;
  transition: box-shadow 0.2s;
}
.db__stat-card:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.1); }
.db__stat-body { flex: 1; min-width: 0; }
.db__stat-label { font-size: 13px; color: var(--c-muted); margin: 0 0 4px; }
.db__stat-value { font-size: 26px; font-weight: 700; color: var(--c-text); margin: 0 0 8px; }
.db__stat-footer { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.db__stat-delta { display: inline-flex; align-items: center; gap: 3px; font-size: 12px; font-weight: 600; }
.db__stat-delta.up   { color: var(--c-success); }
.db__stat-delta.down { color: var(--c-danger); }
.db__stat-delta i { font-size: 14px; }
.db__stat-period { font-size: 12px; color: var(--c-muted); }
.db__stat-link { margin-left: auto; font-size: 12px; font-weight: 500; color: var(--c-accent); text-decoration: none; }
.db__stat-link:hover { text-decoration: underline; }
.db__stat-icon {
  width: 54px; height: 54px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.db__stat-svg { width: 26px; height: 26px; color: #fff; stroke-width: 1.8; }

/* Generic card */
.db__card { background: var(--c-bg); border: 1px solid var(--c-border); border-radius: var(--c-radius); box-shadow: var(--c-shadow); }
.db__card-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px 12px; border-bottom: 1px solid var(--c-border); }
.db__card-title  { margin: 0; font-size: 15px; font-weight: 700; color: var(--c-text); }
.db__card-link   { font-size: 13px; color: var(--c-accent); text-decoration: none; font-weight: 500; }
.db__card-link:hover { text-decoration: underline; }
.db__card-body   { padding: 16px 20px; }
.db__p0          { padding: 0 !important; }

/* Tabs */
.db__tabs { display: flex; gap: 3px; background: #f4f6fb; border-radius: 6px; padding: 3px; }
:global([data-theme="dark"]) .db__tabs { background: rgba(255,255,255,0.06); }
.db__tab { padding: 4px 10px; border: none; border-radius: 5px; font-size: 12px; font-weight: 600; background: transparent; color: var(--c-muted); cursor: pointer; transition: background 0.15s, color 0.15s; }
.db__tab.active { background: var(--c-bg); color: var(--c-text); box-shadow: 0 1px 4px rgba(0,0,0,0.08); }

/* Middle grid */
.db__mid { display: grid; grid-template-columns: 1fr 1.5fr 1.5fr; gap: var(--c-gap); align-items: start; }
@media(max-width:1100px){ .db__mid { grid-template-columns: 1fr 1fr; } }
@media(max-width:700px) { .db__mid { grid-template-columns: 1fr; } }

/* Conversions */
.db__conv-body { display: flex; flex-direction: column; align-items: center; padding: 12px 20px 20px; gap: 8px; }
.db__conv-label { font-size: 13px; color: var(--c-muted); margin: 0; }
.db__conv-stats { display: flex; gap: 24px; width: 100%; justify-content: center; margin-top: 4px; }
.db__conv-stat  { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.db__conv-stat span  { font-size: 12px; color: var(--c-muted); }
.db__conv-stat strong{ font-size: 18px; font-weight: 700; color: var(--c-text); }
.db__btn-outline {
  margin-top: 8px; padding: 7px 22px; border: 1px solid var(--c-border);
  border-radius: 6px; background: transparent; font-size: 13px; font-weight: 500;
  color: var(--c-muted); cursor: pointer; width: 100%;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.db__btn-outline:hover { background: rgba(253,126,20,0.08); color: var(--c-accent); border-color: var(--c-accent); }

/* Sessions map */
.db__sessions-body { display: flex; flex-direction: column; gap: 12px; padding: 12px 20px 20px; }
.db__map { width: 100%; height: auto; }

/* Top Pages table */
.db__tp-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.db__tp-table thead th { padding: 10px 16px; text-align: left; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--c-muted); border-bottom: 1px solid var(--c-border); }
.db__tp-table tbody tr { border-bottom: 1px solid var(--c-border); transition: background 0.12s; }
.db__tp-table tbody tr:last-child { border-bottom: none; }
.db__tp-table tbody tr:hover { background: rgba(253,126,20,0.03); }
.db__tp-table td { padding: 9px 16px; color: var(--c-text); vertical-align: middle; }
.db__tp-link { color: var(--c-text); text-decoration: none; font-size: 12.5px; }
.db__tp-link:hover { color: var(--c-accent); }
.db__tp-views { font-weight: 700; text-align: right; color: var(--c-text); }

/* Accent button */
.db__btn-accent { padding: 6px 14px; background: var(--c-accent); color: #fff; border: none; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer; text-decoration: none; transition: opacity 0.15s; }
.db__btn-accent:hover { opacity: 0.88; }

/* Orders table */
.db__table-wrap { overflow-x: auto; }
.db__table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 700px; }
.db__table thead th { padding: 10px 14px; text-align: left; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--c-muted); border-bottom: 1px solid var(--c-border); white-space: nowrap; }
.db__table tbody tr { border-bottom: 1px solid var(--c-border); transition: background 0.12s; }
.db__table tbody tr:last-child { border-bottom: none; }
.db__table tbody tr:hover { background: rgba(253,126,20,0.03); }
.db__table td { padding: 10px 14px; color: var(--c-text); vertical-align: middle; }
.db__tlink { color: var(--c-accent); text-decoration: none; font-weight: 600; }
.db__tlink:hover { text-decoration: underline; }
.db__muted { color: var(--c-muted) !important; font-size: 12.5px; }

.db__badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
.db__badge.completed  { background: rgba(46,204,113,0.12); color: #2ecc71; }
.db__badge.processing { background: rgba(91,115,232,0.12); color: #5b73e8; }
.db__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex-shrink: 0; }

.db__table-footer { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-top: 1px solid var(--c-border); flex-wrap: wrap; gap: 8px; }
.db__pagination { display: flex; gap: 4px; }
.db__page-btn { width: 30px; height: 30px; border: 1px solid var(--c-border); border-radius: 5px; background: var(--c-bg); color: var(--c-text); font-size: 13px; cursor: pointer; transition: background 0.15s, color 0.15s; display: flex; align-items: center; justify-content: center; }
.db__page-btn:hover:not(:disabled) { background: var(--c-accent); color: #fff; border-color: var(--c-accent); }
.db__page-btn.active { background: var(--c-accent); color: #fff; border-color: var(--c-accent); }
.db__page-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* Footer */
.db__footer { text-align: center; font-size: 13px; color: var(--c-muted); padding: 8px 0 4px; }
</style>
