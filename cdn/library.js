/*!
 * AL-AHMODANY Admin — library.js v1.0.0
 * CDN: <script src="/cdn/library.js"></script>
 * Vanilla JS — no Vue, no build step required.
 */
!function(w){"use strict";

var isTouchDevice = ('ontouchstart' in w) || (navigator.maxTouchPoints > 0);

/* =========================================================
   COPY BUTTON SYSTEM
========================================================= */
function initCopyButtons(root) {
  root = root || document;
  root.querySelectorAll(
    '.copy-btn,.btn-copy,.lk-copy-btn,.cdn-section__copy-btn,[data-copy-btn]'
  ).forEach(function(btn) {
    if (btn._lkBound) return;
    btn._lkBound = true;
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var text = btn.getAttribute('data-copy') || '';
      if (!text) {
        var block = btn.closest(
          '.code-block,.code-box,.lk-code-block,.showcase-card,.cp-card,.demo-card,.cdn-section__block'
        );
        if (block) {
          var pre = block.querySelector('pre,code');
          if (pre) text = pre.innerText || pre.textContent || '';
        }
      }
      if (!text) return;
      var orig = btn.innerHTML;
      copyText(text, function(ok) {
        btn.innerHTML = ok
          ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width:12px;height:12px;vertical-align:middle;margin-right:3px"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>Copied!'
          : 'Failed';
        btn.classList.add('copied');
        setTimeout(function() {
          btn.innerHTML = orig;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });
}

function copyText(text, cb) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      function() { cb(true); },
      function() { fallbackCopy(text, cb); }
    );
  } else {
    fallbackCopy(text, cb);
  }
}

function fallbackCopy(text, cb) {
  try {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    var ok = document.execCommand('copy');
    document.body.removeChild(ta);
    cb(ok);
  } catch(e) { cb(false); }
}

/* =========================================================
   DROPDOWN SYSTEM
========================================================= */
var closeTimers = {};

function initDropdowns(root) {
  root = root || document;
  root.querySelectorAll('.lk-dropdown-wrap').forEach(function(wrap) {
    if (wrap._lkDD) return;
    wrap._lkDD = true;
    var dd = wrap.querySelector('.lk-dropdown');
    var trigger = wrap.querySelector('button,[data-dd-trigger]');
    if (!dd || !trigger) return;
    dd.style.display = 'none';

    function open() {
      clearTimeout(closeTimers[wrap._lkId]);
      document.querySelectorAll('.lk-dropdown-wrap').forEach(function(w) {
        if (w !== wrap) {
          var d = w.querySelector('.lk-dropdown');
          if (d) d.style.display = 'none';
          w.classList.remove('open');
        }
      });
      dd.style.display = '';
      wrap.classList.add('open');
    }

    function close() {
      dd.style.display = 'none';
      wrap.classList.remove('open');
    }

    function sched() {
      closeTimers[wrap._lkId] = setTimeout(close, 120);
    }

    wrap._lkId = Math.random().toString(36).slice(2);

    if (!isTouchDevice) {
      wrap.addEventListener('mouseenter', open);
      wrap.addEventListener('mouseleave', sched);
      dd.addEventListener('mouseenter', function() { clearTimeout(closeTimers[wrap._lkId]); });
      dd.addEventListener('mouseleave', sched);
    }

    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      dd.style.display === '' ? close() : open();
    });

    document.addEventListener('click', function(e) {
      if (!wrap.contains(e.target)) close();
    });
  });
}

/* =========================================================
   THEME HELPER
========================================================= */
var Theme = {
  isDark: function() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  },
  set: function(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    try {
      var s = JSON.parse(localStorage.getItem('AL-AHMODANY_settings') || '{}');
      s.colorScheme = mode;
      localStorage.setItem('AL-AHMODANY_settings', JSON.stringify(s));
    } catch(e) {}
  },
  toggle: function() {
    this.set(this.isDark() ? 'light' : 'dark');
  },
  restore: function() {
    try {
      var s = JSON.parse(localStorage.getItem('AL-AHMODANY_settings') || '{}');
      if (s.colorScheme) this.set(s.colorScheme);
    } catch(e) {}
  }
};

/* =========================================================
   LIVE CLOCK
========================================================= */
function initClock() {
  var timeEl = document.querySelector('.lk-topbar__clock-time');
  var dateEl = document.querySelector('.lk-topbar__clock-date');
  if (!timeEl && !dateEl) return;

  function update() {
    var now = new Date();
    var h = now.getHours().toString().padStart(2, '0');
    var m = now.getMinutes().toString().padStart(2, '0');
    var s = now.getSeconds().toString().padStart(2, '0');
    if (timeEl) timeEl.textContent = h + ':' + m + ':' + s;
    if (dateEl) {
      var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      dateEl.textContent = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear();
    }
  }

  update();
  setInterval(update, 1000);
}

/* =========================================================
   RESPONSIVE TOPBAR
========================================================= */
function initResponsiveTopbar() {
  var tb = document.querySelector('.lk-topbar');
  if (!tb) return;
  function upd() {
    tb.classList.toggle('lk-topbar--compact', w.innerWidth <= 768);
  }
  upd();
  w.addEventListener('resize', upd, { passive: true });
}

/* =========================================================
   THEME TOGGLE BUTTON
========================================================= */
function initThemeToggle() {
  document.querySelectorAll('[data-theme-toggle]').forEach(function(btn) {
    if (btn._lkTheme) return;
    btn._lkTheme = true;
    btn.addEventListener('click', function() {
      Theme.toggle();
    });
  });
}

/* =========================================================
   CLICK OUTSIDE HELPER
========================================================= */
function onClickOutside(el, cb) {
  function h(e) { if (!el.contains(e.target)) cb(e); }
  document.addEventListener('mousedown', h);
  return function() { document.removeEventListener('mousedown', h); };
}

/* =========================================================
   BOOTSTRAP ALERT DISMISS (vanilla fallback)
========================================================= */
function initAlertDismiss(root) {
  root = root || document;
  root.querySelectorAll('[data-lk-dismiss="alert"]').forEach(function(btn) {
    if (btn._lkDismiss) return;
    btn._lkDismiss = true;
    btn.addEventListener('click', function() {
      var alert = btn.closest('.alert');
      if (alert) {
        alert.style.transition = 'opacity .15s ease';
        alert.style.opacity = '0';
        setTimeout(function() { alert.remove(); }, 160);
      }
    });
  });
}

/* =========================================================
   SCROLL SPY (for right-nav / TOC)
========================================================= */
function initScrollSpy(options) {
  options = options || {};
  var navLinks = document.querySelectorAll(
    options.selector || '.right-nav a, .lk-toc-link, .toc-link, .page-nav-link, .anchor-nav a'
  );
  if (!navLinks.length) return;

  var sections = [];
  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var el = document.querySelector(href);
      if (el) sections.push({ el: el, link: link });
    }
  });

  if (!sections.length) return;

  function update() {
    var scrollY = w.scrollY || w.pageYOffset;
    var offset = options.offset || 100;
    var active = null;

    sections.forEach(function(s) {
      if (s.el.getBoundingClientRect().top + scrollY - offset <= scrollY + 1) {
        active = s;
      }
    });

    navLinks.forEach(function(l) { l.classList.remove('active'); });
    if (active) active.link.classList.add('active');
  }

  w.addEventListener('scroll', update, { passive: true });
  update();
}

/* =========================================================
   AUTO-INIT
========================================================= */
function init() {
  initCopyButtons();
  initDropdowns();
  initResponsiveTopbar();
  initClock();
  initThemeToggle();
  initAlertDismiss();
  initScrollSpy();
  Theme.restore();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* =========================================================
   PUBLIC API
========================================================= */
w.ALLib = {
  initCopyButtons:    initCopyButtons,
  initDropdowns:      initDropdowns,
  initClock:          initClock,
  initThemeToggle:    initThemeToggle,
  initAlertDismiss:   initAlertDismiss,
  initScrollSpy:      initScrollSpy,
  copyText:           copyText,
  onClickOutside:     onClickOutside,
  theme:              Theme,
  version:            '1.0.0'
};

}(window);
