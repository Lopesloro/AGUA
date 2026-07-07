/* PH Aguas — main.js */

// Progress bar
window.addEventListener('scroll', () => {
  const el = document.getElementById('progress');
  if (el) {
    const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    el.style.width = p + '%';
  }
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if (h) h.classList.toggle('scrolled', window.scrollY > 10);
});

// Hamburger
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }));
  }

  // Active nav — only top-level triggers, not dropdown items
  const navTriggers = document.querySelectorAll('.nav-main > .nav-link-plain, .nav-main .nav-item > .nav-link-drop, .mobile-menu > a');
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  navTriggers.forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0].split('?')[0];
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Fade-up on scroll
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (e.target.dataset.delay || 0) + 'ms';
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    fadeEls.forEach(el => obs.observe(el));
  }

  // Counter animation
  function animCounter(el) {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const dur = 1800;
    const start = performance.now();
    const update = now => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (t < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
  const counters = document.querySelectorAll('.stat-value[data-target]');
  if (counters.length) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animCounter(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => co.observe(el));
  }

  // Filter tabs — search parent element for families
  document.querySelectorAll('.filter-tabs').forEach(tabs => {
    tabs.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        const container = tabs.parentElement;
        if (!container) return;
        container.querySelectorAll('[data-family]').forEach(item => {
          item.style.display = (filter === 'all' || item.dataset.family === filter) ? '' : 'none';
        });
      });
    });
  });

  // Modal system
  const modal = document.getElementById('ph-modal');
  if (modal) {
    const closeBtn = document.getElementById('ph-modal-close-btn');
    const backdrop = modal.querySelector('.ph-modal-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', closePhModal);
    if (backdrop) backdrop.addEventListener('click', closePhModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePhModal(); });
  }

  // Modal triggers on equipment cards
  document.querySelectorAll('.eq-card [data-open-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const card = btn.closest('.eq-card');
      if (!card) return;
      const img = card.querySelector('.eq-img');
      const specs = [...card.querySelectorAll('.eq-spec')].map(s => s.textContent);
      openPhModal({
        tag: card.querySelector('.eq-tag')?.textContent || '',
        title: card.querySelector('.eq-title')?.textContent || '',
        sub: '',
        desc: card.querySelector('.eq-desc')?.textContent || '',
        img: img ? img.src : '',
        specs,
        waItem: card.querySelector('.eq-title')?.textContent || ''
      });
    });
  });

  // Modal triggers on product cards
  document.querySelectorAll('.prod-card [data-open-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const card = btn.closest('.prod-card');
      if (!card) return;
      const specs = [...card.querySelectorAll('.prod-app')].map(s => s.textContent);
      openPhModal({
        tag: card.querySelector('.prod-tag')?.textContent || '',
        title: card.querySelector('.prod-name')?.textContent || '',
        sub: card.querySelector('.prod-formula')?.textContent || '',
        desc: card.querySelector('.prod-desc')?.textContent || '',
        img: '',
        specs,
        waItem: card.querySelector('.prod-name')?.textContent || ''
      });
    });
  });
});

function openPhModal(data) {
  const modal = document.getElementById('ph-modal');
  if (!modal) return;
  document.getElementById('ph-modal-tag').textContent = data.tag || '';
  document.getElementById('ph-modal-title').textContent = data.title || '';
  document.getElementById('ph-modal-sub').textContent = data.sub || '';
  document.getElementById('ph-modal-desc').textContent = data.desc || '';

  const imgWrap = document.getElementById('ph-modal-img-wrap');
  if (data.img) {
    imgWrap.innerHTML = '<img src="' + data.img + '" alt="' + (data.title || '') + '">';
    imgWrap.style.display = '';
  } else {
    imgWrap.innerHTML = '';
    imgWrap.style.display = 'none';
  }

  const specsEl = document.getElementById('ph-modal-specs');
  if (data.specs && data.specs.length) {
    specsEl.innerHTML = data.specs.map(s => '<span class="modal-spec-chip">' + s + '</span>').join('');
  } else {
    specsEl.innerHTML = '';
  }

  const waMsg = 'Olá, gostaria de solicitar informações sobre: ' + (data.waItem || data.title || '');
  document.getElementById('ph-modal-wa').href = 'https://wa.me/5511910301546?text=' + encodeURIComponent(waMsg);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePhModal() {
  const modal = document.getElementById('ph-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
