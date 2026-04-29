<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h4 class="page-title">File Upload</h4>
      <p class="page-subtitle">File upload components with drag-and-drop and preview support.</p>
    </div>

    <!-- Basic File Inputs -->
    <div class="demo-card">
      <h6 class="demo-title">Basic File Input</h6>
      <p class="demo-desc">Use <code>.form-control</code> on <code>input[type="file"]</code> for consistent styling.</p>
      <div class="demo-box">
        <div class="row g-3">
          <div class="col-12 col-md-6"><label class="form-label">Single File</label><input class="form-control" type="file" /></div>
          <div class="col-12 col-md-6"><label class="form-label">Multiple Files</label><input class="form-control" type="file" multiple /></div>
          <div class="col-12 col-md-6"><label class="form-label">Images Only</label><input class="form-control" type="file" accept="image/*" /></div>
          <div class="col-12 col-md-6"><label class="form-label">PDF Only</label><input class="form-control" type="file" accept=".pdf" /></div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('basic', codes.basic)"><i class="bi bi-clipboard me-1"></i>{{ copied==='basic'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.basic }}</code></pre>
      </div>
    </div>

    <!-- Drag & Drop -->
    <div class="demo-card">
      <h6 class="demo-title">Drag &amp; Drop Upload</h6>
      <p class="demo-desc">Custom drag-and-drop zone with file list preview.</p>
      <div class="demo-box">
        <div class="drop-zone" :class="{ 'drop-zone--active': isDragging }"
          @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false" @drop.prevent="onDrop">
          <div class="drop-zone__icon"><i class="bi bi-cloud-upload"></i></div>
          <p class="drop-zone__text">Drag &amp; drop files here, or
            <label class="drop-zone__browse">browse<input type="file" multiple hidden @change="onFileChange" /></label>
          </p>
          <p class="drop-zone__hint">Supports: JPG, PNG, PDF, DOCX (max 10MB)</p>
        </div>
        <div v-if="droppedFiles.length" class="file-list mt-3">
          <div v-for="(file, i) in droppedFiles" :key="i" class="file-item">
            <i :class="fileIcon(file.name)" class="file-item__icon"></i>
            <div class="file-item__info">
              <span class="file-item__name">{{ file.name }}</span>
              <span class="file-item__size">{{ formatSize(file.size) }}</span>
            </div>
            <button class="file-item__remove" @click="droppedFiles.splice(i,1)"><i class="bi bi-x"></i></button>
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('drop', codes.drop)"><i class="bi bi-clipboard me-1"></i>{{ copied==='drop'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.drop }}</code></pre>
      </div>
    </div>

    <!-- Image Preview -->
    <div class="demo-card">
      <h6 class="demo-title">Image Preview</h6>
      <p class="demo-desc">Show a live preview of the selected image before uploading.</p>
      <div class="demo-box">
        <div class="row g-3 align-items-start">
          <div class="col-12 col-md-6">
            <label class="form-label">Select Image</label>
            <input class="form-control" type="file" accept="image/*" @change="onImageSelect" />
          </div>
          <div class="col-12 col-md-6" v-if="previewUrl">
            <label class="form-label">Preview</label>
            <div class="img-preview"><img :src="previewUrl" alt="Preview" /></div>
          </div>
        </div>
      </div>
      <div class="code-block mt-3">
        <div class="code-bar"><span class="code-badge">HTML</span>
          <button class="copy-btn" @click="copy('preview', codes.preview)"><i class="bi bi-clipboard me-1"></i>{{ copied==='preview'?'Copied!':'Copy' }}</button>
        </div>
        <pre class="code-body"><code>{{ codes.preview }}</code></pre>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageFooter from '../../components/layout/Footer.vue'

const isDragging = ref(false)
const droppedFiles = ref([])
const previewUrl = ref(null)
const copied = ref('')

function copy(id, text) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = id
  setTimeout(() => { copied.value = '' }, 2000)
}
function onFileChange(e) { droppedFiles.value = [...droppedFiles.value, ...Array.from(e.target.files)] }
function onDrop(e) { isDragging.value = false; droppedFiles.value = [...droppedFiles.value, ...Array.from(e.dataTransfer.files)] }
function onImageSelect(e) { const f = e.target.files[0]; if (f) previewUrl.value = URL.createObjectURL(f) }
function formatSize(b) { if (b < 1024) return b + ' B'; if (b < 1048576) return (b/1024).toFixed(1)+' KB'; return (b/1048576).toFixed(1)+' MB' }
function fileIcon(name) {
  const ext = name.split('.').pop().toLowerCase()
  if (['jpg','jpeg','png','gif','webp'].includes(ext)) return 'bi bi-file-image text-success'
  if (ext === 'pdf') return 'bi bi-file-pdf text-danger'
  if (['doc','docx'].includes(ext)) return 'bi bi-file-word text-primary'
  return 'bi bi-file-earmark text-secondary'
}

const codes = {
  basic: `<!-- Single file -->
<input class="form-control" type="file" />

<!-- Multiple files -->
<input class="form-control" type="file" multiple />

<!-- Images only -->
<input class="form-control" type="file" accept="image/*" />

<!-- PDF only -->
<input class="form-control" type="file" accept=".pdf" />`,

  drop: `<div class="drop-zone"
  @dragover.prevent="isDragging = true"
  @dragleave.prevent="isDragging = false"
  @drop.prevent="onDrop">
  <p>Drag & drop files here, or <label>browse<input type="file" hidden /></label></p>
</div>

<script setup>
const isDragging = ref(false)
function onDrop(e) {
  isDragging.value = false
  const files = Array.from(e.dataTransfer.files)
  // handle files...
}
<\/script>`,

  preview: `<input class="form-control" type="file" accept="image/*" @change="onImageSelect" />
<img v-if="previewUrl" :src="previewUrl" alt="Preview" />

<script setup>
const previewUrl = ref(null)
function onImageSelect(e) {
  const file = e.target.files[0]
  if (file) previewUrl.value = URL.createObjectURL(file)
}
<\/script>`,
}
</script>

<style scoped>
.page-wrapper { padding: 24px; }
.page-header { margin-bottom: 24px; }
.page-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.page-subtitle { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
.demo-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 20px 22px; margin-bottom: 20px; box-shadow: var(--card-shadow); }
.demo-title { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
.demo-desc { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; }
.demo-desc code { background: rgba(253,126,20,0.1); color: var(--accent); padding: 1px 5px; border-radius: 3px; font-size: 0.78rem; }
.demo-box { background: var(--app-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 20px; }
.drop-zone { border: 2px dashed var(--card-border); border-radius: 10px; padding: 40px 20px; text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s; }
.drop-zone--active { border-color: var(--accent); background: var(--accent-muted); }
.drop-zone__icon { font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px; }
.drop-zone__text { font-size: 0.9rem; color: var(--text-secondary); margin: 0 0 6px; }
.drop-zone__browse { color: var(--accent); cursor: pointer; font-weight: 600; }
.drop-zone__hint { font-size: 0.78rem; color: var(--text-muted); margin: 0; }
.file-list { display: flex; flex-direction: column; gap: 8px; }
.file-item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; }
.file-item__icon { font-size: 1.3rem; flex-shrink: 0; }
.file-item__info { flex: 1; min-width: 0; }
.file-item__name { display: block; font-size: 0.83rem; font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.file-item__size { font-size: 0.75rem; color: var(--text-muted); }
.file-item__remove { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem; padding: 0; transition: color 0.15s; }
.file-item__remove:hover { color: var(--danger); }
.img-preview { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.img-preview img { width: 100%; height: 200px; object-fit: cover; display: block; }
.code-block { border: 1px solid var(--card-border); border-radius: 8px; overflow: hidden; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--app-bg); border-bottom: 1px solid var(--card-border); }
.code-badge { background: var(--accent); color: #fff; font-size: 0.67rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.copy-btn { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 5px; font-size: 0.73rem; padding: 3px 10px; color: var(--text-muted); cursor: pointer; transition: all 0.15s; }
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.code-body { background: var(--app-bg); margin: 0; padding: 12px 16px; font-size: 0.73rem; color: var(--text-secondary); line-height: 1.7; overflow-x: auto; max-height: 200px; font-family: 'Courier New', monospace; }
@media (max-width: 576px) { .page-wrapper { padding: 16px; } }
</style>
