<template>
  <div class="app-page">
    <!-- Page header -->
    <div class="app-page__header">
      <div>
        <h4 class="app-page__title">Chat</h4>
        <nav class="app-page__breadcrumb">
          <span>Other Apps</span><span class="sep">›</span><span class="active">Chat</span>
        </nav>
      </div>
    </div>

    <!-- Chat UI demo -->
    <div class="chat-layout">
      <!-- Sidebar contacts -->
      <div class="chat-sidebar">
        <div class="chat-search">
          <i class="bx bx-search chat-search__icon"></i>
          <input type="text" placeholder="Search contacts..." class="chat-search__input" v-model="searchQ" />
        </div>
        <div class="chat-contacts">
          <div
            v-for="c in filteredContacts"
            :key="c.id"
            class="chat-contact"
            :class="{ active: activeContact?.id === c.id }"
            @click="activeContact = c"
          >
            <div class="chat-contact__avatar" :style="{ background: c.color }">
              {{ c.initials }}
              <span v-if="c.online" class="chat-contact__online"></span>
            </div>
            <div class="chat-contact__info">
              <div class="chat-contact__row">
                <span class="chat-contact__name">{{ c.name }}</span>
                <span class="chat-contact__time">{{ c.time }}</span>
              </div>
              <p class="chat-contact__last">{{ c.last }}</p>
            </div>
            <span v-if="c.unread" class="chat-contact__badge">{{ c.unread }}</span>
          </div>
        </div>
      </div>

      <!-- Chat window -->
      <div class="chat-window" v-if="activeContact">
        <div class="chat-window__header">
          <div class="chat-contact__avatar sm" :style="{ background: activeContact.color }">{{ activeContact.initials }}</div>
          <div>
            <p class="chat-window__name">{{ activeContact.name }}</p>
            <p class="chat-window__status">{{ activeContact.online ? 'Online' : 'Offline' }}</p>
          </div>
          <div class="chat-window__actions">
            <button class="chat-icon-btn" title="Call"><i class="bx bx-phone"></i></button>
            <button class="chat-icon-btn" title="Video"><i class="bx bx-video"></i></button>
            <button class="chat-icon-btn" title="More"><i class="bx bx-dots-vertical-rounded"></i></button>
          </div>
        </div>
        <div class="chat-messages" ref="msgBox">
          <div v-for="msg in activeContact.messages" :key="msg.id" class="chat-msg" :class="msg.mine ? 'mine' : 'theirs'">
            <div class="chat-msg__bubble">{{ msg.text }}</div>
            <span class="chat-msg__time">{{ msg.time }}</span>
          </div>
        </div>
        <div class="chat-input-row">
          <button class="chat-icon-btn"><i class="bx bx-paperclip"></i></button>
          <input v-model="newMsg" type="text" placeholder="Type a message..." class="chat-input" @keydown.enter="sendMsg" />
          <button class="chat-send-btn" @click="sendMsg"><i class="bx bx-send"></i></button>
        </div>
      </div>
      <div class="chat-window chat-window--empty" v-else>
        <i class="bx bx-chat chat-empty-icon"></i>
        <p>Select a contact to start chatting</p>
      </div>
    </div>

    <!-- Code section -->
    <div class="code-section">
      <div class="code-section__header">
        <h5 class="code-section__title"><i class="bx bx-code-alt"></i> Chat Component Code</h5>
        <button class="code-copy-btn" @click="copyCode('chat')" :class="{ copied: copied === 'chat' }">
          <i :class="copied === 'chat' ? 'bx bx-check' : 'bx bx-copy'"></i>
          {{ copied === 'chat' ? 'Copied!' : 'Copy Code' }}
        </button>
      </div>
      <pre class="code-block"><code>{{ chatCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";

const searchQ = ref("");
const newMsg  = ref("");
const copied  = ref("");
const msgBox  = ref(null);

const contacts = ref([
  { id:1, name:"Josephine Thompson", initials:"JT", color:"#e3f2fd", online:true,  time:"2m",  last:"Wow! this admin looks good",  unread:3, messages:[
    { id:1, text:"Hey! How are you?",                    time:"10:00 AM", mine:false },
    { id:2, text:"I'm great, thanks! How about you?",    time:"10:01 AM", mine:true  },
    { id:3, text:"Wow! this admin looks good and awesome design", time:"10:02 AM", mine:false },
  ]},
  { id:2, name:"Donoghue Susan",      initials:"DS", color:"#fce4ec", online:false, time:"12m", last:"Hi, How are you?",             unread:0, messages:[
    { id:1, text:"Hi, How are you? What about our next meeting", time:"9:30 AM", mine:false },
    { id:2, text:"Sure, let's schedule it for tomorrow.",        time:"9:32 AM", mine:true  },
  ]},
  { id:3, name:"Jacob Gines",         initials:"JG", color:"#e8f5e9", online:true,  time:"1h",  last:"Answered to your comment",    unread:1, messages:[
    { id:1, text:"Answered to your comment on the cash flow forecast's graph", time:"8:00 AM", mine:false },
    { id:2, text:"Thanks for the update!",                                     time:"8:05 AM", mine:true  },
  ]},
  { id:4, name:"Shawn Bunch",         initials:"SB", color:"#fff3e8", online:false, time:"3h",  last:"Commented on Admin panel.",   unread:0, messages:[
    { id:1, text:"Commented on Admin panel.",  time:"Yesterday", mine:false },
  ]},
]);

const filteredContacts = computed(() =>
  contacts.value.filter(c => c.name.toLowerCase().includes(searchQ.value.toLowerCase()))
);

const activeContact = ref(contacts.value[0]);

function sendMsg() {
  if (!newMsg.value.trim() || !activeContact.value) return;
  activeContact.value.messages.push({
    id: Date.now(), text: newMsg.value.trim(),
    time: new Date().toLocaleTimeString("en-US", { hour:"2-digit", minute:"2-digit" }),
    mine: true,
  });
  newMsg.value = "";
  nextTick(() => { if (msgBox.value) msgBox.value.scrollTop = msgBox.value.scrollHeight; });
}

const chatCode = `<!-- ============================================
  CHAT COMPONENT — Copy this entire block
  Requires: Bootstrap 5.3 CSS + JS
  https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
============================================ -->

<style>
/* Chat layout */
.chat-layout { display:flex; height:560px; border-radius:10px; overflow:hidden; border:1px solid #eef2f7; background:#fff; }
.chat-sidebar { width:280px; flex-shrink:0; border-right:1px solid #eef2f7; display:flex; flex-direction:column; }
.chat-search-wrap { padding:12px; border-bottom:1px solid #eef2f7; position:relative; }
.chat-search-wrap input { width:100%; padding:8px 10px 8px 32px; border:1px solid #eef2f7; border-radius:6px; background:#f8f9fa; font-size:13px; outline:none; }
.chat-search-wrap input:focus { border-color:#fd7e14; }
.chat-contacts { flex:1; overflow-y:auto; }
.chat-contact { display:flex; align-items:center; gap:10px; padding:12px 14px; cursor:pointer; border-bottom:1px solid #eef2f7; transition:background .15s; }
.chat-contact:hover { background:#f8f9fa; }
.chat-contact.active { background:rgba(253,126,20,.08); }
.chat-avatar { width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex-shrink:0; }
.chat-contact-info { flex:1; min-width:0; }
.chat-contact-name { font-size:13.5px; font-weight:600; color:#313a46; }
.chat-contact-last { font-size:12px; color:#8996af; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.chat-contact-time { font-size:11px; color:#8996af; }
.chat-window { flex:1; display:flex; flex-direction:column; }
.chat-window-header { display:flex; align-items:center; gap:12px; padding:14px 18px; border-bottom:1px solid #eef2f7; }
.chat-messages { flex:1; overflow-y:auto; padding:16px 18px; display:flex; flex-direction:column; gap:12px; }
.chat-msg { display:flex; flex-direction:column; max-width:70%; }
.chat-msg.mine { align-self:flex-end; align-items:flex-end; }
.chat-msg.theirs { align-self:flex-start; align-items:flex-start; }
.chat-bubble { padding:10px 14px; border-radius:12px; font-size:13.5px; line-height:1.5; }
.chat-msg.mine .chat-bubble { background:#fd7e14; color:#fff; border-bottom-right-radius:3px; }
.chat-msg.theirs .chat-bubble { background:#f3f4f9; color:#313a46; border-bottom-left-radius:3px; }
.chat-msg-time { font-size:11px; color:#8996af; margin-top:4px; }
.chat-input-row { display:flex; align-items:center; gap:8px; padding:12px 16px; border-top:1px solid #eef2f7; }
.chat-input-row input { flex:1; padding:9px 14px; border:1px solid #eef2f7; border-radius:20px; background:#f8f9fa; font-size:13.5px; outline:none; }
.chat-input-row input:focus { border-color:#fd7e14; }
.chat-send-btn { width:38px; height:38px; border:none; border-radius:50%; background:#fd7e14; color:#fff; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; }
</style>

<div class="chat-layout">
  <!-- Contacts sidebar -->
  <div class="chat-sidebar">
    <div class="chat-search-wrap">
      <input type="text" placeholder="Search contacts..." />
    </div>
    <div class="chat-contacts">
      <div class="chat-contact active">
        <div class="chat-avatar" style="background:#e3f2fd;color:#313a46">JT</div>
        <div class="chat-contact-info">
          <div style="display:flex;justify-content:space-between">
            <span class="chat-contact-name">Josephine Thompson</span>
            <span class="chat-contact-time">2m</span>
          </div>
          <p class="chat-contact-last">Wow! this admin looks good</p>
        </div>
      </div>
      <div class="chat-contact">
        <div class="chat-avatar" style="background:#fce4ec;color:#313a46">DS</div>
        <div class="chat-contact-info">
          <div style="display:flex;justify-content:space-between">
            <span class="chat-contact-name">Donoghue Susan</span>
            <span class="chat-contact-time">12m</span>
          </div>
          <p class="chat-contact-last">Hi, How are you?</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Chat window -->
  <div class="chat-window">
    <div class="chat-window-header">
      <div class="chat-avatar" style="background:#e3f2fd;color:#313a46;width:36px;height:36px;font-size:12px">JT</div>
      <div>
        <p style="margin:0;font-size:14px;font-weight:700;color:#313a46">Josephine Thompson</p>
        <p style="margin:0;font-size:12px;color:#2ecc71">Online</p>
      </div>
    </div>
    <div class="chat-messages">
      <div class="chat-msg theirs">
        <div class="chat-bubble">Hey! How are you?</div>
        <span class="chat-msg-time">10:00 AM</span>
      </div>
      <div class="chat-msg mine">
        <div class="chat-bubble">I'm great, thanks! How about you?</div>
        <span class="chat-msg-time">10:01 AM</span>
      </div>
      <div class="chat-msg theirs">
        <div class="chat-bubble">Wow! this admin looks good and awesome design</div>
        <span class="chat-msg-time">10:02 AM</span>
      </div>
    </div>
    <div class="chat-input-row">
      <input type="text" placeholder="Type a message..." id="chatInput" />
      <button class="chat-send-btn" onclick="sendMsg()">&#10148;</button>
    </div>
  </div>
</div>

<script>
function sendMsg() {
  var input = document.getElementById('chatInput');
  if (!input.value.trim()) return;
  var msgs = document.querySelector('.chat-messages');
  var div = document.createElement('div');
  div.className = 'chat-msg mine';
  div.innerHTML = '<div class="chat-bubble">' + input.value + '</div><span class="chat-msg-time">Just now</span>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  input.value = '';
}
document.getElementById('chatInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') sendMsg();
});
<\/script>`;

function copyCode(key) {
  const map = { chat: chatCode };
  navigator.clipboard.writeText(map[key]).then(() => {
    copied.value = key;
    setTimeout(() => { copied.value = ""; }, 2000);
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

/* Chat layout */
.chat-layout {
  display: flex; height: 560px; border-radius: 10px; overflow: hidden;
  border: 1px solid var(--card-border); box-shadow: var(--card-shadow);
  background: var(--card-bg);
}

/* Sidebar */
.chat-sidebar { width: 280px; flex-shrink: 0; border-right: 1px solid var(--card-border); display: flex; flex-direction: column; }
.chat-search { padding: 12px; border-bottom: 1px solid var(--card-border); position: relative; }
.chat-search__icon { position: absolute; left: 22px; top: 50%; transform: translateY(-50%); font-size: 16px; color: var(--text-muted); }
.chat-search__input { width: 100%; padding: 8px 10px 8px 32px; border: 1px solid var(--card-border); border-radius: 6px; background: var(--bg-input, #f8f9fa); color: var(--text-primary); font-size: 13px; outline: none; }
.chat-search__input:focus { border-color: var(--accent); }
.chat-contacts { flex: 1; overflow-y: auto; }
.chat-contact { display: flex; align-items: center; gap: 10px; padding: 12px 14px; cursor: pointer; transition: background 0.15s; position: relative; border-bottom: 1px solid var(--card-border); }
.chat-contact:hover { background: var(--bg-hover, #f3f4f9); }
.chat-contact.active { background: rgba(253,126,20,0.08); }
.chat-contact__avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--text-primary); flex-shrink: 0; position: relative; }
.chat-contact__avatar.sm { width: 36px; height: 36px; font-size: 12px; }
.chat-contact__online { position: absolute; bottom: 1px; right: 1px; width: 9px; height: 9px; border-radius: 50%; background: #2ecc71; border: 2px solid var(--card-bg); }
.chat-contact__info { flex: 1; min-width: 0; }
.chat-contact__row { display: flex; align-items: center; justify-content: space-between; }
.chat-contact__name { font-size: 13.5px; font-weight: 600; color: var(--text-primary); }
.chat-contact__time { font-size: 11px; color: var(--text-muted); }
.chat-contact__last { font-size: 12px; color: var(--text-muted); margin: 2px 0 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.chat-contact__badge { background: var(--accent); color: #fff; font-size: 10px; font-weight: 700; border-radius: 99px; padding: 1px 6px; flex-shrink: 0; }

/* Chat window */
.chat-window { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.chat-window--empty { align-items: center; justify-content: center; gap: 12px; color: var(--text-muted); }
.chat-empty-icon { font-size: 52px; opacity: 0.3; }
.chat-window__header { display: flex; align-items: center; gap: 12px; padding: 14px 18px; border-bottom: 1px solid var(--card-border); }
.chat-window__name   { font-size: 14px; font-weight: 700; color: var(--text-primary); margin: 0; }
.chat-window__status { font-size: 12px; color: #2ecc71; margin: 0; }
.chat-window__actions { margin-left: auto; display: flex; gap: 6px; }
.chat-icon-btn { width: 32px; height: 32px; border: none; border-radius: 6px; background: var(--bg-hover, #f3f4f9); color: var(--text-muted); font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.15s, color 0.15s; }
.chat-icon-btn:hover { background: var(--accent); color: #fff; }
.chat-messages { flex: 1; overflow-y: auto; padding: 16px 18px; display: flex; flex-direction: column; gap: 12px; }
.chat-msg { display: flex; flex-direction: column; max-width: 70%; }
.chat-msg.mine  { align-self: flex-end; align-items: flex-end; }
.chat-msg.theirs{ align-self: flex-start; align-items: flex-start; }
.chat-msg__bubble { padding: 10px 14px; border-radius: 12px; font-size: 13.5px; line-height: 1.5; }
.chat-msg.mine   .chat-msg__bubble { background: var(--accent); color: #fff; border-bottom-right-radius: 3px; }
.chat-msg.theirs .chat-msg__bubble { background: var(--bg-hover, #f3f4f9); color: var(--text-primary); border-bottom-left-radius: 3px; }
.chat-msg__time { font-size: 11px; color: var(--text-muted); margin-top: 4px; }
.chat-input-row { display: flex; align-items: center; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--card-border); }
.chat-input { flex: 1; padding: 9px 14px; border: 1px solid var(--card-border); border-radius: 20px; background: var(--bg-input, #f8f9fa); color: var(--text-primary); font-size: 13.5px; outline: none; transition: border-color 0.15s; }
.chat-input:focus { border-color: var(--accent); }
.chat-send-btn { width: 38px; height: 38px; border: none; border-radius: 50%; background: var(--accent); color: #fff; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: opacity 0.15s; flex-shrink: 0; }
.chat-send-btn:hover { opacity: 0.88; }

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
