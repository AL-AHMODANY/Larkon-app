<template>
  <div class="dashboard-page min-vh-100 bg-light">
    <div class="container-fluid py-4">
      <!-- Alert banner -->
      <div
        class="alert rounded-3 d-flex align-items-center shadow-sm mb-4"
        role="alert"
        :class="['bg-warning', 'bg-opacity-25']"
      >
        <i class="bi bi-exclamation-triangle-fill fs-4 me-3 text-warning"></i>
        <div>
          <strong>Technical difficulties:</strong>
          <div class="small">
            We are currently experiencing intermittent server issues. Our team
            is investigating — thank you for your patience.
          </div>
        </div>
      </div>

      <!-- Summary cards -->
      <div class="row g-3 mb-4">
        <div
          class="col-12 col-sm-6 col-lg-3"
          v-for="(s, i) in summary"
          :key="i"
        >
          <div class="card h-100 shadow-sm rounded">
            <div class="card-body d-flex flex-column">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-flex align-items-center">
                  <div class="me-3 rounded-circle bg-light p-2 shadow-sm">
                    <i :class="s.icon" class="fs-4 text-secondary"></i>
                  </div>
                  <div>
                    <div class="text-muted small">{{ s.label }}</div>
                    <div class="h5 mb-0">{{ s.value }}</div>
                  </div>
                </div>
                <div class="text-end">
                  <div
                    :class="[
                      'small',
                      s.change >= 0 ? 'text-success' : 'text-danger',
                    ]"
                  >
                    <i
                      :class="
                        s.change >= 0 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'
                      "
                    ></i>
                    {{ Math.abs(s.change) }}%
                  </div>
                  <a href="#" class="small text-decoration-none">View More</a>
                </div>
              </div>

              <div class="mt-auto">
                <div class="progress" style="height: 6px">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: s.progress + '%' }"
                    :class="s.progressBarClass"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance chart area -->
      <div class="card shadow-sm rounded mb-4">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="mb-0">Performance</h5>
            <div class="btn-group" role="group" aria-label="time range">
              <button
                type="button"
                class="btn btn-sm"
                :class="
                  range === 'ALL' ? 'btn-warning' : 'btn-outline-secondary'
                "
                @click="setRange('ALL')"
              >
                ALL
              </button>
              <button
                type="button"
                class="btn btn-sm"
                :class="
                  range === '1M' ? 'btn-warning' : 'btn-outline-secondary'
                "
                @click="setRange('1M')"
              >
                1M
              </button>
              <button
                type="button"
                class="btn btn-sm"
                :class="
                  range === '6M' ? 'btn-warning' : 'btn-outline-secondary'
                "
                @click="setRange('6M')"
              >
                6M
              </button>
              <button
                type="button"
                class="btn btn-sm"
                :class="
                  range === '1Y' ? 'btn-warning' : 'btn-outline-secondary'
                "
                @click="setRange('1Y')"
              >
                1Y
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <canvas ref="performanceChart" height="120"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- Info cards row -->
      <div class="row g-3 mb-4">
        <!-- Conversions -->
        <div class="col-12 col-lg-4">
          <div class="card h-100 shadow-sm rounded">
            <div class="card-body">
              <h6 class="mb-3">Conversions</h6>
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <!-- Circular progress (SVG) -->
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 36 36"
                    class="rounded-circle"
                  >
                    <path
                      class="bg-circle"
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      stroke-width="2"
                    ></path>
                    <path
                      class="progress-circle"
                      :d="circlePath"
                      fill="none"
                      stroke="#198754"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      :stroke-dasharray="conversionPct + ', 100'"
                    ></path>
                    <text
                      x="18"
                      y="20.5"
                      font-size="6"
                      text-anchor="middle"
                      fill="#333"
                    >
                      {{ conversionPct }}%
                    </text>
                  </svg>
                </div>

                <div class="flex-grow-1">
                  <div class="h5 mb-1">{{ returningCustomers }}%</div>
                  <div class="small text-muted">Returning customers</div>

                  <div class="mt-3">
                    <div class="d-flex justify-content-between small">
                      <div>This Week</div>
                      <div class="fw-semibold">
                        {{ num(conversions.thisWeek) }}
                      </div>
                    </div>
                    <div class="d-flex justify-content-between small">
                      <div>Last Week</div>
                      <div class="fw-semibold">
                        {{ num(conversions.lastWeek) }}
                      </div>
                    </div>
                  </div>

                  <div class="mt-3">
                    <button class="btn btn-sm btn-warning">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sessions by Country -->
        <div class="col-12 col-lg-4">
          <div class="card h-100 shadow-sm rounded">
            <div class="card-body">
              <h6 class="mb-3">Sessions by Country</h6>
              <div class="map-placeholder mb-3">
                <!-- Simple SVG world map placeholder with data points -->
                <svg viewBox="0 0 800 300" class="w-100" style="height: 160px">
                  <rect width="100%" height="100%" fill="#f8f9fa"></rect>
                  <!-- approximate points -->
                  <circle
                    v-for="(p, idx) in mapPoints"
                    :key="idx"
                    :cx="p.x"
                    :cy="p.y"
                    r="6"
                    :fill="p.color"
                    :class="'map-dot'"
                  ></circle>
                  <text
                    v-for="(p, idx) in mapPoints"
                    :key="'t' + idx"
                    :x="p.x + 10"
                    :y="p.y + 4"
                    font-size="12"
                    fill="#333"
                  >
                    {{ p.code }}
                  </text>
                </svg>
              </div>

              <div class="small">
                <div class="d-flex justify-content-between">
                  <div>United States</div>
                  <div class="fw-semibold">{{ num(sessions.US) }}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>Canada</div>
                  <div class="fw-semibold">{{ num(sessions.CA) }}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>Brazil</div>
                  <div class="fw-semibold">{{ num(sessions.BR) }}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>Russia</div>
                  <div class="fw-semibold">{{ num(sessions.RU) }}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>China</div>
                  <div class="fw-semibold">{{ num(sessions.CN) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Pages -->
        <div class="col-12 col-lg-4">
          <div class="card h-100 shadow-sm rounded">
            <div class="card-body d-flex flex-column">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <h6 class="mb-0">Top Pages</h6>
                <a href="#" class="small">View All</a>
              </div>

              <div
                class="table-responsive"
                style="max-height: 220px; overflow: auto"
              >
                <table class="table table-borderless table-sm mb-0">
                  <thead class="small text-muted">
                    <tr>
                      <th>Page Path</th>
                      <th class="text-end">Page Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(p, idx) in topPages" :key="idx">
                      <td class="text-truncate" style="max-width: 220px">
                        {{ p.path }}
                      </td>
                      <td class="text-end fw-semibold">{{ num(p.views) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mt-auto pt-3">
                <small class="text-muted">Updated just now</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="card shadow-sm rounded mb-4">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="mb-0">Recent Orders</h5>
            <div>
              <button class="btn btn-sm btn-warning me-2">
                + Create Order
              </button>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in pagedOrders" :key="order.id">
                  <td class="fw-semibold">{{ order.id }}</td>
                  <td>{{ order.date }}</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        :src="order.productImage"
                        alt="product"
                        class="me-2 rounded"
                        style="width: 48px; height: 48px; object-fit: cover"
                      />
                      <div>
                        <div class="small">{{ order.productName }}</div>
                        <div class="small text-muted">
                          {{ order.productSku }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{{ order.customer }}</td>
                  <td class="text-truncate" style="max-width: 160px">
                    {{ order.email }}
                  </td>
                  <td>{{ order.phone }}</td>
                  <td class="text-truncate" style="max-width: 160px">
                    {{ order.address }}
                  </td>
                  <td>{{ order.payment }}</td>
                  <td>
                    <span class="d-inline-flex align-items-center">
                      <span
                        :class="['status-dot', order.statusClass, 'me-2']"
                      ></span>
                      <span>{{ order.status }}</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="small text-muted">
              Showing {{ pagedOrders.length }} of {{ orders.length }} orders
            </div>
            <nav>
              <ul class="pagination pagination-sm mb-0">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <button
                    class="page-link"
                    @click="goPage(currentPage - 1)"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                <li
                  class="page-item"
                  v-for="p in totalPages"
                  :key="p"
                  :class="{ active: p === currentPage }"
                >
                  <button class="page-link" @click="goPage(p)">{{ p }}</button>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: currentPage === totalPages }"
                >
                  <button
                    class="page-link"
                    @click="goPage(currentPage + 1)"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="text-center small text-muted py-3">
        2026 © YourCompany. Crafted with care.
      </footer>
    </div>
  </div>
</template>

<script>
/**
 * Dashboard.vue
 * Vue 3 Composition API
 * Bootstrap 5 for layout and styling
 * Uses Chart.js for charts
 */
import { ref, reactive, onMounted, computed } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "Dashboard",
  setup() {
    // Summary cards
    const summary = reactive([
      {
        label: "Total Orders",
        value: "13,647",
        change: 2.3,
        icon: "bi bi-basket-fill",
        progress: 72,
        progressBarClass: "bg-warning",
      },
      {
        label: "New Leads",
        value: "9,526",
        change: 8.1,
        icon: "bi bi-people-fill",
        progress: 58,
        progressBarClass: "bg-success",
      },
      {
        label: "Deals",
        value: "976",
        change: -0.3,
        icon: "bi bi-briefcase-fill",
        progress: 44,
        progressBarClass: "bg-danger",
      },
      {
        label: "Booked Revenue",
        value: "$123.6k",
        change: -10.6,
        icon: "bi bi-currency-dollar",
        progress: 36,
        progressBarClass: "bg-info",
      },
    ]);

    // Chart data (monthly)
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const pageViews = ref([
      1200, 1500, 1800, 2200, 2600, 3000, 2800, 3200, 3500, 3800, 4200, 4600,
    ]);
    const clicks = ref([
      200, 260, 300, 420, 520, 610, 580, 640, 700, 760, 820, 900,
    ]);

    const range = ref("ALL");

    const performanceChart = ref(null);
    let perfInstance = null;

    const setRange = (r) => {
      range.value = r;
      // For demo: adjust data slice
      let sliceFrom = 0;
      if (r === "1M") sliceFrom = 11;
      if (r === "6M") sliceFrom = 6;
      if (r === "1Y") sliceFrom = 0;
      updatePerformanceChart(sliceFrom);
    };

    const updatePerformanceChart = (startIndex = 0) => {
      const labels = months.slice(startIndex);
      const pv = pageViews.value.slice(startIndex);
      const cl = clicks.value.slice(startIndex);

      if (perfInstance) {
        perfInstance.data.labels = labels;
        perfInstance.data.datasets[0].data = pv;
        perfInstance.data.datasets[1].data = cl;
        perfInstance.update();
      }
    };

    // Conversions
    const conversionPct = ref(65.2);
    const returningCustomers = ref(conversionPct.value);
    const conversions = reactive({ thisWeek: 23500, lastWeek: 41050 });

    // Sessions by country (sample)
    const sessions = reactive({
      US: 23500,
      CA: 5200,
      BR: 4200,
      RU: 3100,
      CN: 18000,
    });
    const mapPoints = reactive([
      { code: "US", x: 360, y: 110, color: "#0d6efd" },
      { code: "CA", x: 330, y: 80, color: "#0d6efd" },
      { code: "BR", x: 420, y: 170, color: "#0d6efd" },
      { code: "RU", x: 560, y: 70, color: "#0d6efd" },
      { code: "CN", x: 700, y: 120, color: "#0d6efd" },
    ]);

    // Top pages
    const topPages = reactive([
      { path: "larkon/ecommerce.html", views: 465 },
      { path: "larkon/dashboard.html", views: 426 },
      { path: "larkon/chat.html", views: 254 },
      { path: "larkon/auth-login.html", views: 3369 },
      { path: "larkon/email.html", views: 985 },
      { path: "larkon/social.html", views: 653 },
      { path: "larkon/blog.html", views: 478 },
    ]);

    // Recent orders (sample)
    const orders = reactive([
      {
        id: "#RB5625",
        date: "29 Apr 2024",
        productImage: "https://i.pinimg.com/1200x/21/35/89/213589457e7b4729bc839a642a0d1eb9.jpg",
        productName: "Wireless Headset",
        productSku: "WH-100",
        customer: "Anna M. Hines",
        email: "anna.hines@mail.com",
        phone: "(+1)-555-1564-261",
        address: "Burr Ridge, Illinois",
        payment: "Credit Card",
        status: "Complete",
        statusClass: "bg-success",
      },
      {
        id: "#RB9652",
        date: "25 Apr 2024",
        productImage: "https://i.pinimg.com/1200x/fb/a5/a6/fba5a6427a825caa368ce86412d9118d.jpg",
        productName: "Smart Watch",
        productSku: "SW-22",
        customer: "Judith H. Fritsche",
        email: "judith.fritsche@mail.com",
        phone: "(+57)-305-5579-759",
        address: "Sullivan, Kentucky",
        payment: "Credit Card",
        status: "Complete",
        statusClass: "bg-success",
      },
      {
        id: "#RB5984",
        date: "25 Apr 2024",
        productImage: "https://i.pinimg.com/736x/09/2b/77/092b771ccf7b9a46d37684dcaa6cb620.jpg",
        productName: "Bluetooth Speaker",
        productSku: "BS-9",
        customer: "Peter T. Smith",
        email: "peter.smith@mail.com",
        phone: "(+33)-655-5187-93",
        address: "Yreka, California",
        payment: "PayPal",
        status: "Complete",
        statusClass: "bg-success",
      },
      {
        id: "#RB3625",
        date: "21 Apr 2024",
        productImage: "https://i.pinimg.com/736x/19/df/58/19df584d100713ecbbbcc72beb45ea56.jpg",
        productName: "Gaming Mouse",
        productSku: "GM-7",
        customer: "Emmanuel J. Delcid",
        email: "emmanuel.delcid@mail.com",
        phone: "(+30)-693-5533-637",
        address: "Atlanta, Georgia",
        payment: "PayPal",
        status: "Processing",
        statusClass: "bg-warning",
      },
      {
        id: "#RB8652",
        date: "18 Apr 2024",
        productImage: "https://i.pinimg.com/736x/25/3b/fa/253bfadfb3008ea04e8148202d33b132.jpg",
        productName: "Laptop Stand",
        productSku: "LS-3",
        customer: "William J. Cook",
        email: "william.cook@mail.com",
        phone: "(+91)-855-5446-150",
        address: "Rosenberg, Texas",
        payment: "Credit Card",
        status: "Processing",
        statusClass: "bg-warning",
      },
      // additional sample orders to demonstrate pagination
      {
        id: "#RB1111",
        date: "15 Apr 2024",
        productImage: "https://i.pinimg.com/1200x/66/4c/12/664c12000d9cb128fd4689e7c79ac407.jpg",
        productName: "USB Hub",
        productSku: "UH-1",
        customer: "Maya L. Stone",
        email: "maya.stone@mail.com",
        phone: "(+1)-555-1111-111",
        address: "Austin, Texas",
        payment: "Credit Card",
        status: "Complete",
        statusClass: "bg-success",
      },
      {
        id: "#RB2222",
        date: "12 Apr 2024",
        productImage: "https://i.pinimg.com/736x/64/63/a9/6463a999c708c793b3d0c242da494a33.jpg",
        productName: "Desk Lamp",
        productSku: "DL-2",
        customer: "Carlos M. Ruiz",
        email: "carlos.ruiz@mail.com",
        phone: "(+52)-555-2222-222",
        address: "Monterrey, Mexico",
        payment: "PayPal",
        status: "Complete",
        statusClass: "bg-success",
      },
    ]);

    // Pagination
    const pageSize = ref(5);
    const currentPage = ref(1);
    const totalPages = computed(() =>
      Math.max(1, Math.ceil(orders.length / pageSize.value)),
    );
    const pagedOrders = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      return orders.slice(start, start + pageSize.value);
    });

    const goPage = (p) => {
      if (p < 1) p = 1;
      if (p > totalPages.value) p = totalPages.value;
      currentPage.value = p;
    };

    // Chart initialization
    onMounted(() => {
      const ctx = performanceChart.value.getContext("2d");
      perfInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: months,
          datasets: [
            {
              type: "bar",
              label: "Page Views",
              data: pageViews.value,
              backgroundColor: "#fd7e14", // orange
              borderRadius: 6,
              barPercentage: 0.6,
            },
            {
              type: "line",
              label: "Clicks",
              data: clicks.value,
              borderColor: "#198754", // green
              backgroundColor: "rgba(25,135,84,0.08)",
              tension: 0.3,
              pointRadius: 3,
              yAxisID: "y1",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          scales: {
            y: {
              beginAtZero: true,
              position: "left",
              grid: { drawOnChartArea: true },
            },
            y1: {
              beginAtZero: true,
              position: "right",
              grid: { drawOnChartArea: false },
            },
          },
          plugins: {
            legend: { display: true, position: "top" },
            tooltip: { mode: "index", intersect: false },
          },
        },
      });
    });

    // SVG circle path helper (full circle)
    const circlePath =
      "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831";

    // Filters / formatters
    const num = (v) => {
      if (v === null || v === undefined) return "0";
      return v.toLocaleString();
    };

    // Expose to template
    return {
      summary,
      performanceChart,
      setRange,
      range,
      conversionPct,
      returningCustomers,
      conversions,
      circlePath,
      sessions,
      mapPoints,
      topPages,
      topPagesReactive: topPages,
      orders,
      pagedOrders,
      pageSize,
      currentPage,
      totalPages,
      goPage,
      months,
      pageViews,
      clicks,
      updatePerformanceChart,
      num,
    };
  },
  directives: {},
};
</script>

<style scoped>
.dashboard-page {
  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial;
  color: #212529;
}

/* Alert icon color */
.alert i {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Map dots */
.map-dot {
  stroke: #fff;
  stroke-width: 1;
  opacity: 0.95;
}

/* Status dot */
.status-dot {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
}
.status-dot.bg-success {
  background-color: #198754;
}
.status-dot.bg-warning {
  background-color: #ffc107;
}
.status-dot.bg-danger {
  background-color: #dc3545;
}

/* Card shadows and rounded */
.card {
  border: 0;
}

/* Table small tweaks */
.table-responsive {
  overflow-x: auto;
}

/* Make chart container responsive */
.card canvas {
  width: 100% !important;
  height: 260px !important;
}

/* Small screens adjustments */
@media (max-width: 767.98px) {
  .card canvas {
    height: 220px !important;
  }
}
</style>
