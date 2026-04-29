# Project Structure

```
src/
├── main.js                    # App entry — CSS imports (order matters), app mount
├── App.vue                    # Root layout: Sidebar + Header + <router-view>
├── style.css                  # Global CSS vars, dark mode overrides, Bootstrap overrides
├── assets/
│   ├── images/                # Static images (profile placeholder, etc.)
│   └── style.css              # Secondary asset styles
├── components/
│   ├── BaseButton.vue         # Shared button component
│   └── layout/
│       ├── Header.vue         # Topbar + Auth overlay + Settings offcanvas + Inactivity modal
│       ├── Sidebar.vue        # Fixed left nav with collapsible sections and icon-only mode
│       ├── Footer.vue         # Page footer used inside view pages
│       ├── Dashboard.vue      # Dashboard page component
│       ├── Modals.vue         # Shared modal component
│       └── sidebarMenu.js     # (if present) Sidebar menu data
├── router/
│   └── index.js               # All routes defined here
└── views/
    ├── advanceUi/             # Rating, Scrollbar, SweetAlert, Swiper, Toastify
    ├── baseUi/                # Accordion, Alerts, Avatar, Badges, Breadcrumbs, Button,
    │                          # Card, Carousel, Collapse, Dropdown, Listgroup, Modal,
    │                          # Offcanvas, Pagination, Placeholders, Popovers, Progress,
    │                          # Scrollspy, Spinner, Tabs, Toasts, Tooltips
    ├── charts/                # Area, Bar, Boxplot, Bubble, Candlestick, Column, Heatmap,
    │                          # Line, Mixed, Pie, PolarArea, Radar, RadialBar, Scatter,
    │                          # Timeline, Treemap
    ├── forms/                 # BasicElements, CheckboxRadio, Editors, FileUpload,
    │                          # InputMask, Slider, Validation
    ├── icons/                 # Boxicons.vue, SolarIcons.vue
    ├── maps/                  # GoogleMaps.vue, VectorMaps.vue
    ├── menu/                  # DisableItem, MenuItem1, MenuItem2
    └── tables/                # BasicTables.vue, GridJs.vue
```

## Key Conventions

- **Layout shell** lives entirely in `App.vue` — sidebar margin, mobile overlay, resize handling
- **CSS variables** are defined in `src/style.css` under `:root` (light) and `[data-theme="dark"]`
- **Sidebar CSS variables** (`--sb-*`) are scoped inside `Sidebar.vue` and overridden via `:global([data-menu="light"]) .sidebar { ... }`
- **Topbar theming** uses modifier classes on `.topbar`: `.topbar--topbar-dark` and `.topbar--theme-dark`
- **Dark mode** is applied by setting `data-theme="dark"` on `<html>`; all dark overrides live in `src/style.css`
- **Icon libraries**: Heroicons (SVG components) in layout components; Boxicons and Bootstrap Icons (font `<i>` tags) in view pages
- **No backend** — auth, settings, and user data all use `localStorage` / `sessionStorage`
- **Route names** match the view filenames; routes are all flat (no nested router-views)
