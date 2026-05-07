<template>
  <div class="page-wrapper">
    <CdnSection />

    <div class="page-layout">
      <div class="page-main">
        <div class="page-header">
          <h4 class="page-title">Editors</h4>
          <p class="page-subtitle">Rich text editor with a custom toolbar using the browser's contenteditable API.</p>
        </div>

        <!-- Rich Text Editor -->
        <div id="rich-text" class="demo-card">
          <h6 class="demo-title">Rich Text Editor</h6>
          <p class="demo-desc">A lightweight WYSIWYG editor built with <code>contenteditable</code> and <code>document.execCommand</code>.</p>
          <div class="demo-box">
            <div class="editor-wrap">
              <div class="editor-toolbar">
                <div class="tb-group">
                  <button class="tb-btn" @click="exec('bold')" title="Bold"><i class="bi bi-type-bold"></i></button>
                  <button class="tb-btn" @click="exec('italic')" title="Italic"><i class="bi bi-type-italic"></i></button>
                  <button class="tb-btn" @click="exec('underline')" title="Underline"><i class="bi bi-type-underline"></i></button>
                  <button class="tb-btn" @click="exec('strikeThrough')" title="Strikethrough"><i class="bi bi-type-strikethrough"></i></button>
                </div>
                <div class="tb-sep"></div>
                <div class="tb-group">
                  <button class="tb-btn" @click="exec('justifyLeft')" title="Left"><i class="bi bi-text-left"></i></button>
                  <button class="tb-btn" @click="exec('justifyCenter')" title="Center"><i class="bi bi-text-center"></i></button>
                  <button class="tb-btn" @click="exec('justifyRight')" title="Right"><i class="bi bi-text-right"></i></button>
                </div>
                <div class="tb-sep"></div>
                <div class="tb-group">
                  <button class="tb-btn" @click="exec('insertUnorderedList')" title="Bullet List"><i class="bi bi-list-ul"></i></button>
                  <button class="tb-btn" @click="exec('insertOrderedList')" title="Numbered List"><i class="bi bi-list-ol"></i></button>
                </div>
                <div class="tb-sep"></div>
                <div class="tb-group">
                  <select class="tb-select" @change="execFormat($event)">
                    <option value="p">Paragraph</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                  </select>
                </div>
                <div class="tb-sep"></div>
                <div class="tb-group">
                  <button class="tb-btn" @click="exec('undo')" title="Undo"><i class="bi bi-arrow-counterclockwise"></i></button>
                  <button class="tb-btn" @click="exec('redo')" title="Redo"><i class="bi bi-arrow-clockwise"></i></button>
                </div>
              </div>
              <div class="editor-body" contenteditable="true" ref="editorRef" v-html="initialContent"></div>
            </div>
            <div class="mt-3 d-flex gap-2">
              <button class="btn btn-primary btn-sm" @click="getContent">Get HTML</button>
              <button class="btn btn-outline-secondary btn-sm" @click="clearContent">Clear</button>
            </div>
            <div v-if="outputHtml" class="mt-3">
              <label class="form-label">HTML Output:</label>
              <pre class="output-pre">{{ outputHtml }}</pre>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('editor', codes.editor)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'editor' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ codes.editor }}</code></pre>
          </div>
        </div>

        <!-- Minimal Textarea -->
        <div id="minimal-textarea" class="demo-card">
          <h6 class="demo-title">Minimal Textarea</h6>
          <p class="demo-desc">A simple textarea with character count — no dependencies required.</p>
          <div class="demo-box">
            <textarea class="form-control" rows="6" v-model="plainText" placeholder="Write your content here..."></textarea>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span class="text-muted" style="font-size:0.78rem;">{{ plainText.length }} characters</span>
              <button class="btn btn-sm btn-outline-secondary" @click="plainText = ''">Clear</button>
            </div>
          </div>
          <div class="code-block mt-3">
            <div class="code-bar">
              <span class="code-badge">HTML</span>
              <button class="copy-btn" @click="copy('textarea', codes.textarea)">
                <i class="bi bi-clipboard me-1"></i>{{ copied === 'textarea' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-body"><code>{{ codes.textarea }}</code></pre>
          </div>
        </div>

        <PageFooter />
      </div>

      <!-- Right TOC -->
      <aside class="toc-sidebar d-none d-xl-block">
        <div class="toc-title">ON THIS PAGE</div>
        <nav class="toc-nav">
          <a v-for="item in tocItems" :key="item.id"
            :href="`#${item.id}`" class="toc-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup>
import CdnSection from '../../components/CdnSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const editorRef = ref(null)
const outputHtml = ref('')
const plainText = ref('')
const copied = ref('')
const activeSection = ref('rich-text')
const initialContent = '<p>Start typing your content here. Use the toolbar to <strong>format text</strong>, create <em>italic</em> content, or add lists.</p>'

const tocItems = [
  { id: 'rich-text',        label: 'Rich Text Editor' },
  { id: 'minimal-textarea', label: 'Minimal Textarea' },
]

function exec(cmd) { document.execCommand(cmd, false, null); editorRef.value?.focus() }
function execFormat(e) { document.execCommand('formatBlock', false, e.target.value); editorRef.value?.focus() }
function getContent() { outputHtml.value = editorRef.value?.innerHTML || '' }
function clearContent() { if (editorRef.value) editorRef.value.innerHTML = ''; outputHtml.value = '' }
function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}
function scrollTo(id) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function onScroll() {
  for (const item of [...tocItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 120) { activeSection.value = item.id; break }
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const codes = {
  editor: `<!-- ── Toolbar ─────────────────────────────────────── -->
<div id="toolbar" style="display:flex;flex-wrap:wrap;align-items:center;gap:4px;padding:8px 10px;background:#f9fafb;border:1px solid #e5e7eb;border-bottom:none;border-radius:8px 8px 0 0;">

  <!-- Formatting -->
  <button data-cmd="bold"          class="tb" title="Bold"><b>B</b></button>
  <button data-cmd="italic"        class="tb" title="Italic"><i>I</i></button>
  <button data-cmd="underline"     class="tb" title="Underline"><u>U</u></button>
  <button data-cmd="strikeThrough" class="tb" title="Strikethrough"><s>S</s></button>

  <span class="tb-sep"></span>

  <!-- Alignment -->
  <button data-cmd="justifyLeft"   class="tb" title="Align left">&#8676;</button>
  <button data-cmd="justifyCenter" class="tb" title="Align center">&#8677;</button>
  <button data-cmd="justifyRight"  class="tb" title="Align right">&#8678;</button>

  <span class="tb-sep"></span>

  <!-- Lists -->
  <button data-cmd="insertUnorderedList" class="tb" title="Bullet list">&#8226; List</button>
  <button data-cmd="insertOrderedList"   class="tb" title="Numbered list">1. List</button>

  <span class="tb-sep"></span>

  <!-- Block format -->
  <select id="formatSelect" title="Block format">
    <option value="p">Paragraph</option>
    <option value="h1">Heading 1</option>
    <option value="h2">Heading 2</option>
    <option value="h3">Heading 3</option>
  </select>

  <span class="tb-sep"></span>

  <!-- Undo / Redo -->
  <button data-cmd="undo" class="tb" title="Undo">&#8617;</button>
  <button data-cmd="redo" class="tb" title="Redo">&#8618;</button>

</div>

<!-- ── Editable area ─────────────────────────────────── -->
<div id="editor" contenteditable="true"
  style="min-height:200px;padding:16px;border:1px solid #e5e7eb;border-radius:0 0 8px 8px;font-size:14px;line-height:1.7;outline:none;background:#fff;">
  <p>Start typing your content here. Use the toolbar to <strong>format text</strong>, create <em>italic</em> content, or add lists.</p>
</div>

<!-- ── Action buttons ───────────────────────────────── -->
<div style="margin-top:12px;display:flex;gap:8px;">
  <button class="btn btn-primary btn-sm" id="btnGetHtml">Get HTML</button>
  <button class="btn btn-outline-secondary btn-sm" id="btnClear">Clear</button>
</div>

<!-- ── HTML output ───────────────────────────────────── -->
<pre id="htmlOutput"
  style="display:none;margin-top:12px;padding:12px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;font-size:12px;white-space:pre-wrap;word-break:break-all;"></pre>

<!-- ── Styles ────────────────────────────────────────── -->
<style>
.tb {
  background: none;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 13px;
  color: #6c757d;
  transition: all 0.15s;
}
.tb:hover {
  background: #f3f4f9;
  border-color: #e5e7eb;
  color: #fd7e14;
}
.tb-sep {
  display: inline-block;
  width: 1px;
  height: 20px;
  background: #e5e7eb;
  margin: 0 4px;
  vertical-align: middle;
}
#formatSelect {
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  padding: 3px 6px;
  font-size: 12px;
  background: #fff;
  color: #6c757d;
  cursor: pointer;
  outline: none;
}
</style>

<!-- ── JavaScript ────────────────────────────────────── -->
<script>
(function () {
  var editor     = document.getElementById('editor')
  var output     = document.getElementById('htmlOutput')
  var fmtSelect  = document.getElementById('formatSelect')
  var btnGetHtml = document.getElementById('btnGetHtml')
  var btnClear   = document.getElementById('btnClear')

  /* ── Toolbar button clicks ── */
  document.getElementById('toolbar').addEventListener('click', function (e) {
    var btn = e.target.closest('[data-cmd]')
    if (!btn) return
    e.preventDefault()
    document.execCommand(btn.dataset.cmd, false, null)
    editor.focus()
  })

  /* ── Block-format select ── */
  fmtSelect.addEventListener('change', function () {
    document.execCommand('formatBlock', false, this.value)
    editor.focus()
    this.value = 'p'          // reset to default after applying
  })

  /* ── Get HTML ── */
  btnGetHtml.addEventListener('click', function () {
    output.style.display = 'block'
    output.textContent   = editor.innerHTML
  })

  /* ── Clear ── */
  btnClear.addEventListener('click', function () {
    editor.innerHTML     = ''
    output.style.display = 'none'
    output.textContent   = ''
    editor.focus()
  })
})()
<\/script>`,

  textarea: `<textarea class="form-control" id="myTextarea" rows="6"
  placeholder="Write your content here..."></textarea>

<div class="d-flex justify-content-between align-items-center mt-2">
  <span class="text-muted" id="charCount" style="font-size:0.78rem;">0 characters</span>
  <button class="btn btn-sm btn-outline-secondary"
    onclick="document.getElementById('myTextarea').value = ''; document.getElementById('charCount').textContent = '0 characters'">
    Clear
  </button>
</div>

<script>
document.getElementById('myTextarea').addEventListener('input', function() {
  document.getElementById('charCount').textContent = this.value.length + ' characters'
})
<\/script>`,
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-layout { display: flex; gap: 0; align-items: flex-start; }
.page-main { flex: 1; min-width: 0; padding-right: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); scroll-margin-top: 80px; }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.6; }
.demo-desc :deep(code) { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.editor-wrap { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.editor-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; padding: 8px 10px; background: var(--card-bg); border-bottom: 1px solid var(--card-border); }
.tb-group { display: flex; gap: 2px; }
.tb-sep { width: 1px; height: 20px; background: var(--card-border); margin: 0 4px; }
.tb-btn { background: none; border: 1px solid transparent; border-radius: 5px; padding: 4px 7px; color: var(--text-secondary); cursor: pointer; font-size: 0.85rem; transition: all 0.15s; }
.tb-btn:hover { background: var(--app-bg); border-color: var(--card-border); color: var(--accent); }
.tb-select { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; color: var(--text-secondary); font-size: 0.78rem; padding: 3px 6px; outline: none; }
.editor-body { min-height: 200px; padding: 16px; color: var(--text-primary); font-size: 0.9rem; line-height: 1.7; outline: none; background: var(--card-bg); }
.output-pre { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 6px; padding: 12px; font-size: 0.75rem; color: var(--text-secondary); overflow-x: auto; white-space: pre-wrap; word-break: break-all; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 300px; font-family: 'Courier New', monospace; }
.toc-sidebar { width: 190px; flex-shrink: 0; position: sticky; top: 80px; align-self: flex-start; }
.toc-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 10px; text-transform: uppercase; }
.toc-nav { display: flex; flex-direction: column; gap: 2px; }
.toc-link { display: block; padding: 5px 10px; font-size: 0.8rem; color: var(--text-secondary); text-decoration: none; border-radius: 6px; border-left: 2px solid transparent; transition: all 0.15s; }
.toc-link:hover { color: var(--accent); background: var(--accent-muted); }
.toc-link.active { color: var(--accent); border-left-color: var(--accent); background: var(--accent-muted); font-weight: 600; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } .page-main { padding-right: 0; } .tb-sep { display: none; } }
</style>
