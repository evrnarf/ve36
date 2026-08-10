/* ==========================================================================
   Vizyon Eskişehir 2036 — arayüz davranışları
   ========================================================================== */
(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var nav = document.getElementById('mainNav');
  var navToggle = document.getElementById('navToggle');

  /* ---------- 1. Scroll ile header zemini ---------- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 2. Mobil menü ---------- */
  function closeNav() {
    nav.classList.remove('is-open');
    header.classList.remove('has-open-nav');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Menüyü aç');
  }

  navToggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    header.classList.toggle('has-open-nav', open);
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* ---------- 3. Aktif menü bağlantısı ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);

  function setActive() {
    var pos = window.scrollY + window.innerHeight * 0.28;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
    links.forEach(function (l) {
      l.classList.toggle('is-active', l.getAttribute('href') === '#' + current.id);
    });
  }
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });

  /* ---------- 4. SSS akordiyonu ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.faq__item'));

  items.forEach(function (item) {
    var btn = item.querySelector('.faq__q');
    btn.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');

      // Tek seferde tek soru açık kalsın
      items.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });

      if (willOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- 5. Tanıtım filmi alanı ----------
     Gerçek video yayına alındığında aşağıdaki VIDEO_URL değerini doldurun.
     Örn: 'https://www.youtube.com/embed/XXXXXXXXXXX?autoplay=1'
  ------------------------------------------------------------------------ */
  var VIDEO_URL = '';
  var playBtn = document.querySelector('.player__play');
  var stage = document.querySelector('.player__stage');

  if (playBtn) {
    playBtn.addEventListener('click', function () {
      if (!VIDEO_URL) return;
      var frame = document.createElement('iframe');
      frame.src = VIDEO_URL;
      frame.title = 'Vizyon Eskişehir 2036 · Tanıtım Filmi';
      frame.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      frame.allowFullscreen = true;
      frame.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
      stage.appendChild(frame);
    });
  }

  /* ---------- 6. Görünüme girince yumuşak açılış ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.pcard, .callout, .logo-card, .valilik__body, .steps, .org, .puko, .player, .faq__item, .footer__grid'
    );

    Array.prototype.forEach.call(targets, function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }
})();
