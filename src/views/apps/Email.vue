<template>
  <div class="app-page">
    <div class="app-page__header">
      <div>
        <h4 class="app-page__title">Email</h4>
        <nav class="app-page__breadcrumb">
          <span>Other Apps</span><span class="sep">›</span><span class="active">Email</span>
        </nav>
      </div>
      <button class="btn-accent"><i class="bx bx-plus"></i> Compose</button>
    </div>

    <!-- Email layout -->
    <div class="email-layout">
      <!-- Sidebar folders -->
      <div class="email-sidebar">
        <div class="email-folders">
          <div v-for="f in folders" :key="f.id" class="email-folder" :class="{ active: activeFolder === f.id }" @click="activeFolder = f.id">
            <i :class="f.icon" class="email-folder__icon"></i>
            <span class="email-folder__name">{{ f.name }}</span>
            <span v-if="f.count" class="email-folder__count">{{ f.count }}</span>
          </div>
        </div>
      </div>

      <!-- Email list -->
      <div class="email-list">
        <div class="email-list__header">
          <input type="checkbox" class="email-checkbox" />
          <button class="email-icon-btn" title="Refresh"><i class="bx bx-refresh"></i></button>
          <button class="email-icon-btn" title="Archive"><i class="bx bx-archive"></i></button>
          <button class="email-icon-btn" title="Delete"><i class="bx bx-trash"></i></button>
        </div>
        <div class="email-items">
          <div v-for="e in emails" :key="e.id" class="email-item" :class="{ unread: !e.read, starred: e.starred }" @click="selectedEmail = e">
            <input type="checkbox" class="email-checkbox" @click.stop />
            <button class="email-star" @click.stop="e.starred = !e.starred">
              <i :class="e.starred ? 'bxs bxs-star' : 'bx bx-star'"></i>
            </button>
            <div class="email-item__from">{{ e.from }}</div>
            <div class="email-item__subject">{{ e.subject }}</div>
            <div class="email-item__preview">{{ e.preview }}</div>
            <div class="email-item__time">{{ e.time }}</div>
          </div>
        </div>
      </div>

      <!-- Email detail -->
      <div class="email-detail" v-if="selectedEmail">
        <div class="email-detail__header">
          <h5 class="email-detail__subject">{{ selectedEmail.subject }}</h5>
          <div class="email-detail__actions">
            <button class="email-icon-btn" title="Reply"><i class="bx bx-reply"></i></button>
            <button class="email-icon-btn" title="Forward"><i class="bx bx-share"></i></button>
            <button class="email-icon-btn" title="Delete"><i class="bx bx-trash"></i></button>
          </div>
        </div>
        <div class="email-detail__from">
          <div class="email-avatar">{{ selectedEmail.from[0] }}</div>
          <div>
            <p class="email-detail__name">{{ selectedEmail.from }}</p>
            <p class="email-detail__email">{{ selectedEmail.email }}</p>
          </div>
          <span class="email-detail__time">{{ selectedEmail.time }}</span>
        </div>
        <div class="email-detail__body">
          <p>{{ selectedEmail.body }}</p>
        </div>
      </div>
      <div class="email-detail email-detail--empty" v-else>
        <i class="bx bx-envelope email-empty-icon"></i>
        <p>Select an email to read</p>
      </div>
    </div>

    <!-- Code section -->
    <div class="code-section">
      <div class="code-section__header">
        <h5 class="code-section__title"><i class="bx bx-code-alt"></i> Email Component Code</h5>
        <button class="code-copy-btn" @click="copyCode" :class="{ copied }">
          <i :class="copied ? 'bx bx-check' : 'bx bx-copy'"></i>
          {{ copied ? 'Copied!' : 'Copy Code' }}
        </button>
      </div>
      <pre class="code-block"><code>{{ emailCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeFolder = ref("inbox");
const selectedEmail = ref(null);
const copied = ref(false);

const folders = ref([
  { id: "inbox",    name: "Inbox",     icon: "bx bx-inbox",    count: 12 },
  { id: "starred",  name: "Starred",   icon: "bx bx-star",     count: 3  },
  { id: "sent",     name: "Sent",      icon: "bx bx-send",     count: 0  },
  { id: "drafts",   name: "Drafts",    icon: "bx bx-file",     count: 2  },
  { id: "trash",    name: "Trash",     icon: "bx bx-trash",    count: 0  },
]);

const emails = ref([
  { id: 1, from: "Josephine Thompson", email: "josephine@example.com", subject: "Admin Dashboard Design", preview: "Wow! this admin looks good and awesome design...", body: "Hi there! I wanted to reach out about the new admin dashboard design. It looks absolutely fantastic! The color scheme and layout are very professional. Great work on this project!", time: "10:30 AM", read: false, starred: true },
  { id: 2, from: "Donoghue Susan",     email: "susan@example.com",     subject: "Meeting Schedule",       preview: "Hi, How are you? What about our next meeting...", body: "Hello! I hope you're doing well. I wanted to discuss our upcoming meeting schedule. Are you available next Tuesday at 2 PM? Let me know what works best for you.", time: "9:15 AM",  read: true,  starred: false },
  { id: 3, from: "Jacob Gines",        email: "jacob@example.com",     subject: "Project Update",         preview: "Answered to your comment on the cash flow...",    body: "Thanks for your feedback on the cash flow forecast. I've updated the graph based on your suggestions. Please take a look when you have a moment.", time: "Yesterday", read: true,  starred: false },
  { id: 4, from: "Shawn Bunch",        email: "shawn@example.com",     subject: "Admin Panel Feedback",   preview: "Commented on Admin panel. Looking great!",        body: "Hey! I just wanted to say the admin panel is looking really great. The user interface is intuitive and the features are well organized. Keep up the excellent work!", time: "2 days ago", read: true,  starred: false },
]);

const emailCode = `<!-- ============================================
  EMAIL COMPONENT — Copy this entire block
  Requires: Bootstrap 5.3 CSS + JS
  https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
============================================ -->

<style>
.email-layout { display:flex; height:600px; border-radius:10px; overflow:hidden; border:1px solid #eef2f7; background:#fff; }
.email-sidebar { width:200px; flex-shrink:0; border-right:1px solid #eef2f7; padding:12px 8px; }
.email-folder { display:flex; align-items:center; gap:10px; padding:8px 12px; border-radius:6px; cursor:pointer; transition:background .15s; font-size:13px; color:#6c757d; }
.email-folder:hover { background:#f8f9fa; }
.email-folder.active { background:rgba(253,126,20,.10); color:#fd7e14; font-weight:600; }
.email-folder-count { margin-left:auto; font-size:11px; font-weight:700; background:#fd7e14; color:#fff; border-radius:99px; padding:1px 6px; }
.email-list { width:340px; flex-shrink:0; border-right:1px solid #eef2f7; display:flex; flex-direction:column; }
.email-list-header { display:flex; align-items:center; gap:8px; padding:12px 14px; border-bottom:1px solid #eef2f7; }
.email-items { flex:1; overflow-y:auto; }
.email-item { display:flex; align-items:center; gap:8px; padding:12px 14px; border-bottom:1px solid #eef2f7; cursor:pointer; transition:background .15s; }
.email-item:hover { background:#f8f9fa; }
.email-item.unread { background:rgba(253,126,20,.03); }
.email-item.unread .email-from { font-weight:700; }
.email-from { font-size:13px; color:#313a46; flex:1; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.email-subject { font-size:12.5px; color:#313a46; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.email-preview { font-size:12px; color:#8996af; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.email-time { font-size:11px; color:#8996af; flex-shrink:0; }
.email-detail { flex:1; display:flex; flex-direction:column; }
.email-detail-header { display:flex; align-items:center; justify-content:space-between; padding:16px 20px; border-bottom:1px solid #eef2f7; }
.email-detail-subject { margin:0; font-size:16px; font-weight:700; color:#313a46; }
.email-detail-from { display:flex; align-items:center; gap:12px; padding:16px 20px; border-bottom:1px solid #eef2f7; }
.email-avatar { width:40px; height:40px; border-radius:50%; background:#e3f2fd; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; color:#313a46; flex-shrink:0; }
.email-detail-body { flex:1; padding:20px; overflow-y:auto; font-size:14px; line-height:1.7; color:#313a46; }
.email-action-btn { background:transparent; border:1px solid #eef2f7; border-radius:6px; padding:5px 10px; font-size:12px; color:#6c757d; cursor:pointer; transition:all .15s; }
.email-action-btn:hover { border-color:#fd7e14; color:#fd7e14; }
</style>

<div class="email-layout">
  <!-- Folders -->
  <div class="email-sidebar">
    <div class="email-folder active">
      <span>📥</span> Inbox
      <span class="email-folder-count">12</span>
    </div>
    <div class="email-folder">
      <span>⭐</span> Starred
      <span class="email-folder-count">3</span>
    </div>
    <div class="email-folder"><span>📤</span> Sent</div>
    <div class="email-folder">
      <span>📝</span> Drafts
      <span class="email-folder-count">2</span>
    </div>
    <div class="email-folder"><span>🗑️</span> Trash</div>
  </div>

  <!-- Email list -->
  <div class="email-list">
    <div class="email-list-header">
      <input type="checkbox" />
      <button class="email-action-btn">🔄</button>
      <button class="email-action-btn">🗑️</button>
    </div>
    <div class="email-items">
      <div class="email-item unread" onclick="showEmail(this)">
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between">
            <span class="email-from">Josephine Thompson</span>
            <span class="email-time">10:30 AM</span>
          </div>
          <p class="email-subject">Admin Dashboard Design</p>
          <p class="email-preview">Wow! this admin looks good and awesome design...</p>
        </div>
      </div>
      <div class="email-item" onclick="showEmail(this)">
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between">
            <span class="email-from">Donoghue Susan</span>
            <span class="email-time">9:15 AM</span>
          </div>
          <p class="email-subject">Meeting Schedule</p>
          <p class="email-preview">Hi, How are you? What about our next meeting...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Email detail -->
  <div class="email-detail">
    <div class="email-detail-header">
      <h5 class="email-detail-subject">Admin Dashboard Design</h5>
      <div style="display:flex;gap:6px">
        <button class="email-action-btn">↩ Reply</button>
        <button class="email-action-btn">↪ Forward</button>
        <button class="email-action-btn">🗑️</button>
      </div>
    </div>
    <div class="email-detail-from">
      <div class="email-avatar">JT</div>
      <div>
        <p style="margin:0;font-size:14px;font-weight:600;color:#313a46">Josephine Thompson</p>
        <p style="margin:0;font-size:12px;color:#8996af">josephine@example.com</p>
      </div>
      <span style="margin-left:auto;font-size:12px;color:#8996af">10:30 AM</span>
    </div>
    <div class="email-detail-body">
      Hi there! I wanted to reach out about the new admin dashboard design.
      It looks absolutely fantastic! The color scheme and layout are very professional.
      Great work on this project!
    </div>
  </div>
</div>`;

function copyCode() {
  navigator.clipboard.writeText(emailCode).then(() => {
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

/* Email layout */
.email-layout { display: flex; height: 600px; border-radius: 10px; overflow: hidden; border: 1px solid var(--card-border); box-shadow: var(--card-shadow); background: var(--card-bg); }
.email-sidebar { width: 200px; flex-shrink: 0; border-right: 1px solid var(--card-border); padding: 12px 8px; }
.email-folders { display: flex; flex-direction: column; gap: 2px; }
.email-folder { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: background 0.15s; }
.email-folder:hover { background: var(--bg-hover, #f3f4f9); }
.email-folder.active { background: rgba(253,126,20,0.10); color: var(--accent); }
.email-folder__icon { font-size: 16px; flex-shrink: 0; }
.email-folder__name { font-size: 13px; font-weight: 500; flex: 1; }
.email-folder__count { font-size: 11px; font-weight: 700; background: var(--accent); color: #fff; border-radius: 99px; padding: 1px 6px; }
.email-list { width: 340px; flex-shrink: 0; border-right: 1px solid var(--card-border); display: flex; flex-direction: column; }
.email-list__header { display: flex; align-items: center; gap: 8px; padding: 12px 14px; border-bottom: 1px solid var(--card-border); }
.email-checkbox { width: 16px; height: 16px; cursor: pointer; }
.email-icon-btn { width: 30px; height: 30px; border: none; border-radius: 5px; background: transparent; color: var(--text-muted); font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.15s, color 0.15s; }
.email-icon-btn:hover { background: var(--bg-hover, #f3f4f9); color: var(--accent); }
.email-items { flex: 1; overflow-y: auto; }
.email-item { display: grid; grid-template-columns: 20px 20px 1fr 60px; gap: 8px; align-items: center; padding: 10px 14px; border-bottom: 1px solid var(--card-border); cursor: pointer; transition: background 0.15s; }
.email-item:hover { background: var(--bg-hover, #f3f4f9); }
.email-item.unread { background: rgba(253,126,20,0.03); }
.email-item.unread .email-item__from,
.email-item.unread .email-item__subject { font-weight: 700; }
.email-star { border: none; background: none; color: var(--text-muted); font-size: 16px; cursor: pointer; padding: 0; transition: color 0.15s; }
.email-star:hover { color: #f1c40f; }
.email-item.starred .email-star { color: #f1c40f; }
.email-item__from { font-size: 13px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; grid-column: 3; }
.email-item__subject { font-size: 12.5px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; grid-column: 3; }
.email-item__preview { font-size: 12px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; grid-column: 3; }
.email-item__time { font-size: 11px; color: var(--text-muted); text-align: right; grid-column: 4; grid-row: 1; }
.email-detail { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.email-detail--empty { align-items: center; justify-content: center; gap: 12px; color: var(--text-muted); }
.email-empty-icon { font-size: 52px; opacity: 0.3; }
.email-detail__header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--card-border); }
.email-detail__subject { margin: 0; font-size: 16px; font-weight: 700; color: var(--text-primary); }
.email-detail__actions { display: flex; gap: 6px; }
.email-detail__from { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-bottom: 1px solid var(--card-border); }
.email-avatar { width: 40px; height: 40px; border-radius: 50%; background: #e3f2fd; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: var(--text-primary); flex-shrink: 0; }
.email-detail__name  { font-size: 14px; font-weight: 600; color: var(--text-primary); margin: 0; }
.email-detail__email { font-size: 12px; color: var(--text-muted); margin: 0; }
.email-detail__time  { margin-left: auto; font-size: 12px; color: var(--text-muted); }
.email-detail__body { flex: 1; padding: 20px; overflow-y: auto; }
.email-detail__body p { font-size: 14px; line-height: 1.7; color: var(--text-primary); margin: 0; }

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
