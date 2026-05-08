<template>
  <div class="app-page">
    <div class="app-page__header">
      <div>
        <h4 class="app-page__title">Calendar</h4>
        <nav class="app-page__breadcrumb">
          <span>Other Apps</span><span class="sep">›</span><span class="active">Calendar</span>
        </nav>
      </div>
      <button class="btn-accent"><i class="bx bx-plus"></i> Add Event</button>
    </div>

    <!-- Calendar -->
    <div class="calendar-layout">
      <!-- Calendar header -->
      <div class="calendar-header">
        <div class="calendar-nav">
          <button class="calendar-nav-btn" @click="prevMonth"><i class="bx bx-chevron-left"></i></button>
          <h5 class="calendar-month">{{ currentMonth }}</h5>
          <button class="calendar-nav-btn" @click="nextMonth"><i class="bx bx-chevron-right"></i></button>
        </div>
        <div class="calendar-view-btns">
          <button class="calendar-view-btn active">Month</button>
          <button class="calendar-view-btn">Week</button>
          <button class="calendar-view-btn">Day</button>
        </div>
      </div>

      <!-- Calendar grid -->
      <div class="calendar-grid">
        <div v-for="day in weekDays" :key="day" class="calendar-weekday">{{ day }}</div>
        <div
          v-for="d in calendarDays"
          :key="d.id"
          class="calendar-day"
          :class="{ 'other-month': d.otherMonth, today: d.today, 'has-events': d.events.length }"
        >
          <span class="calendar-day__num">{{ d.day }}</span>
          <div class="calendar-events">
            <div v-for="e in d.events" :key="e.id" class="calendar-event" :style="{ background: e.color }">
              {{ e.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Code section -->
    <div class="code-section">
      <div class="code-section__header">
        <h5 class="code-section__title"><i class="bx bx-code-alt"></i> Calendar Component Code</h5>
        <button class="code-copy-btn" @click="copyCode" :class="{ copied }">
          <i :class="copied ? 'bx bx-check' : 'bx bx-copy'"></i>
          {{ copied ? 'Copied!' : 'Copy Code' }}
        </button>
      </div>
      <pre class="code-block"><code>{{ calendarCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentDate = ref(new Date());
const copied = ref(false);

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const currentMonth = computed(() => {
  return currentDate.value.toLocaleDateString("en-US", { month: "long", year: "numeric" });
});

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const today = new Date();
  const isToday = (d) => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const days = [];
  let id = 0;

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ id: id++, day: daysInPrevMonth - i, otherMonth: true, today: false, events: [] });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const events = [];
    if (d === 5)  events.push({ id: 1, title: "Team Meeting", color: "#fd7e14" });
    if (d === 12) events.push({ id: 2, title: "Project Review", color: "#5b73e8" });
    if (d === 18) events.push({ id: 3, title: "Client Call", color: "#2ecc71" });
    if (d === 25) events.push({ id: 4, title: "Product Launch", color: "#e74c3c" });
    days.push({ id: id++, day: d, otherMonth: false, today: isToday(d), events });
  }

  // Next month days
  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) {
    days.push({ id: id++, day: d, otherMonth: true, today: false, events: [] });
  }

  return days;
});

function prevMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
}

function nextMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
}

const calendarCode = `<!-- ============================================
  CALENDAR COMPONENT — Copy this entire block
  Requires: Bootstrap 5.3 CSS + JS
  https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
============================================ -->

<style>
.cal-wrap { background:#fff; border:1px solid #eef2f7; border-radius:10px; overflow:hidden; }
.cal-header { display:flex; align-items:center; justify-content:space-between; padding:16px 20px; border-bottom:1px solid #eef2f7; }
.cal-title { margin:0; font-size:16px; font-weight:700; color:#313a46; min-width:200px; text-align:center; }
.cal-nav-btn { width:32px; height:32px; border:1px solid #eef2f7; border-radius:6px; background:transparent; color:#6c757d; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .15s; }
.cal-nav-btn:hover { background:#fd7e14; color:#fff; border-color:#fd7e14; }
.cal-view-btns { display:flex; gap:4px; background:#f4f6fb; border-radius:6px; padding:3px; }
.cal-view-btn { padding:5px 12px; border:none; border-radius:5px; font-size:12px; font-weight:600; background:transparent; color:#8996af; cursor:pointer; }
.cal-view-btn.active { background:#fff; color:#313a46; box-shadow:0 1px 4px rgba(0,0,0,.08); }
.cal-grid { display:grid; grid-template-columns:repeat(7,1fr); }
.cal-weekday { padding:10px; text-align:center; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; color:#8996af; border-bottom:1px solid #eef2f7; background:#f8f9fa; }
.cal-day { min-height:90px; padding:8px; border-right:1px solid #eef2f7; border-bottom:1px solid #eef2f7; cursor:pointer; transition:background .15s; }
.cal-day:nth-child(7n) { border-right:none; }
.cal-day:hover { background:#f8f9fa; }
.cal-day.other-month { background:rgba(0,0,0,.02); }
.cal-day.other-month .cal-day-num { opacity:.4; }
.cal-day.today { background:rgba(253,126,20,.08); }
.cal-day.today .cal-day-num { background:#fd7e14; color:#fff; }
.cal-day-num { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; font-size:13px; font-weight:600; color:#313a46; margin-bottom:4px; }
.cal-event { padding:3px 6px; border-radius:4px; font-size:11px; font-weight:500; color:#fff; margin-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
</style>

<div class="cal-wrap">
  <div class="cal-header">
    <button class="cal-nav-btn" onclick="calPrev()">&#8249;</button>
    <h5 class="cal-title" id="calTitle">May 2026</h5>
    <button class="cal-nav-btn" onclick="calNext()">&#8250;</button>
    <div class="cal-view-btns" style="margin-left:16px">
      <button class="cal-view-btn active">Month</button>
      <button class="cal-view-btn">Week</button>
      <button class="cal-view-btn">Day</button>
    </div>
  </div>
  <div class="cal-grid" id="calGrid"></div>
</div>

<script>
var calDate = new Date();
var events = {
  5:  [{ title:'Team Meeting',   color:'#fd7e14' }],
  12: [{ title:'Project Review', color:'#5b73e8' }],
  18: [{ title:'Client Call',    color:'#2ecc71' }],
  25: [{ title:'Product Launch', color:'#e74c3c' }],
};

function renderCal() {
  var year = calDate.getFullYear(), month = calDate.getMonth();
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('calTitle').textContent = months[month] + ' ' + year;
  var grid = document.getElementById('calGrid');
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var html = days.map(function(d){ return '<div class="cal-weekday">'+d+'</div>'; }).join('');
  var firstDay = new Date(year, month, 1).getDay();
  var daysInMonth = new Date(year, month+1, 0).getDate();
  var daysInPrev = new Date(year, month, 0).getDate();
  var today = new Date();
  for (var i = firstDay-1; i >= 0; i--) {
    html += '<div class="cal-day other-month"><span class="cal-day-num">'+(daysInPrev-i)+'</span></div>';
  }
  for (var d = 1; d <= daysInMonth; d++) {
    var isToday = d===today.getDate() && month===today.getMonth() && year===today.getFullYear();
    var evts = (events[d]||[]).map(function(e){ return '<div class="cal-event" style="background:'+e.color+'">'+e.title+'</div>'; }).join('');
    html += '<div class="cal-day'+(isToday?' today':'')+'"><span class="cal-day-num">'+d+'</span>'+evts+'</div>';
  }
  var remaining = 42 - (firstDay + daysInMonth);
  for (var n = 1; n <= remaining; n++) {
    html += '<div class="cal-day other-month"><span class="cal-day-num">'+n+'</span></div>';
  }
  grid.innerHTML = html;
}

function calPrev() { calDate = new Date(calDate.getFullYear(), calDate.getMonth()-1, 1); renderCal(); }
function calNext() { calDate = new Date(calDate.getFullYear(), calDate.getMonth()+1, 1); renderCal(); }

renderCal();
<\/script>`;

function copyCode() {
  navigator.clipboard.writeText(calendarCode).then(() => {
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  });
}
</script>

<style scoped>
.app-page { display: flex; flex-direction: column; gap: 20px; }
.app-page__header { display: flex; align-items: center; justify-content: space-between; }
.app-page__title  { font-size: 18px; font-weight: 700; color: var(--text-primary); margin: 0; }
.app-page__breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-muted); margin-top: 2px; }
.app-page__breadcrumb .sep { opacity: 0.5; }
.app-page__breadcrumb .active { color: var(--accent); font-weight: 500; }
.btn-accent { display: flex; align-items: center; gap: 6px; padding: 8px 16px; background: var(--accent); color: #fff; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
.btn-accent:hover { opacity: 0.88; }
.btn-accent i { font-size: 16px; }

/* Calendar layout */
.calendar-layout { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; overflow: hidden; box-shadow: var(--card-shadow); }
.calendar-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--card-border); }
.calendar-nav { display: flex; align-items: center; gap: 12px; }
.calendar-nav-btn { width: 32px; height: 32px; border: 1px solid var(--card-border); border-radius: 6px; background: transparent; color: var(--text-muted); font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.15s, color 0.15s; }
.calendar-nav-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
.calendar-month { margin: 0; font-size: 16px; font-weight: 700; color: var(--text-primary); min-width: 180px; text-align: center; }
.calendar-view-btns { display: flex; gap: 4px; background: #f4f6fb; border-radius: 6px; padding: 3px; }
:global([data-theme="dark"]) .calendar-view-btns { background: rgba(255,255,255,0.06); }
.calendar-view-btn { padding: 5px 12px; border: none; border-radius: 5px; font-size: 12px; font-weight: 600; background: transparent; color: var(--text-muted); cursor: pointer; transition: background 0.15s, color 0.15s; }
.calendar-view-btn.active { background: var(--card-bg); color: var(--text-primary); box-shadow: 0 1px 4px rgba(0,0,0,0.08); }

/* Calendar grid */
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
.calendar-weekday { padding: 10px; text-align: center; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); border-bottom: 1px solid var(--card-border); background: var(--bg-hover, #f3f4f9); }
.calendar-day { min-height: 100px; padding: 8px; border-right: 1px solid var(--card-border); border-bottom: 1px solid var(--card-border); transition: background 0.15s; cursor: pointer; }
.calendar-day:nth-child(7n) { border-right: none; }
.calendar-day:hover { background: var(--bg-hover, #f3f4f9); }
.calendar-day.other-month { background: rgba(0,0,0,0.02); }
.calendar-day.other-month .calendar-day__num { opacity: 0.4; }
.calendar-day.today { background: rgba(253,126,20,0.08); }
.calendar-day.today .calendar-day__num { background: var(--accent); color: #fff; }
.calendar-day__num { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
.calendar-events { display: flex; flex-direction: column; gap: 3px; }
.calendar-event { padding: 3px 6px; border-radius: 4px; font-size: 11px; font-weight: 500; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* Code section */
.code-section { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; overflow: hidden; box-shadow: var(--card-shadow); }
.code-section__header { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; border-bottom: 1px solid var(--card-border); }
.code-section__title { margin: 0; font-size: 14px; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 8px; }
.code-section__title i { font-size: 18px; color: var(--accent); }
.code-copy-btn { display: flex; align-items: center; gap: 6px; padding: 6px 14px; border: 1px solid var(--card-border); border-radius: 6px; background: transparent; color: var(--text-muted); font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.code-copy-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
.code-copy-btn.copied { background: #2ecc71; color: #fff; border-color: #2ecc71; }
.code-block { margin: 0; padding: 20px; background: #1a2035; color: #e2e8f4; font-size: 13px; line-height: 1.7; overflow-x: auto; font-family: "Fira Code", "Consolas", monospace; white-space: pre; }
:global([data-theme="dark"]) .code-block { background: #0d1526; }
</style>
