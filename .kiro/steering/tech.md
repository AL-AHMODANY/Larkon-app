# Tech Stack

## Framework & Build
- **Vue 3** with `<script setup>` SFCs (Composition API)
- **Vite 8** — build tool and dev server
- **vue-router 5** — client-side routing

## UI Libraries
- **Bootstrap 5.3** — grid, utilities, and component classes
- **Boxicons 2.1** — icon font, imported globally via `boxicons/css/boxicons.min.css`
  - Regular: `<i class="bx bx-{name}"></i>`
  - Solid: `<i class="bxs bxs-{name}"></i>`
  - Logos: `<i class="bxl bxl-{name}"></i>`
- **Bootstrap Icons 1.13** — used as a stand-in for Solar Icons
  - Usage: `<i class="bi bi-{name}"></i>`
- **@heroicons/vue 2** — SVG icon components used in Header and Sidebar
  - Import from `@heroicons/vue/24/outline`

## Charts & Plugins
- **ApexCharts** + **vue3-apexcharts** — all chart pages
- **Swiper 12** — carousel/slider
- **simplebar 6** — custom scrollbars
- **SweetAlert2** — alert dialogs
- **Toastify-js** — toast notifications

## Styling
- **Tailwind CSS 4** (installed but Bootstrap is the primary utility framework)
- **sass-embedded** — SCSS support available
- Global styles: `src/style.css` (CSS custom properties, dark mode overrides, Bootstrap overrides)
- Component styles: scoped `<style scoped>` blocks in each `.vue` file
- Theme driven by `data-theme` on `<html>` and `data-menu` / `data-topbar` on `<body>`

## CSS Import Order (src/main.js)
1. `bootstrap/dist/css/bootstrap.min.css`
2. `bootstrap-icons/font/bootstrap-icons.css`
3. `boxicons/css/boxicons.min.css`
4. Plugin CSS (swiper, simplebar, toastify)
5. `./style.css` — **must be last** to override Bootstrap

## Common Commands
```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run deploy    # Deploy dist/ to GitHub Pages (gh-pages)
```
