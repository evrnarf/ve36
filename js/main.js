/* ==========================================================================
   Vizyon Eskişehir 2036 — arayüz davranışları
   ========================================================================== */
(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var nav = document.getElementById('mainNav');
  var navToggle = document.getElementById('navToggle');

  /* ---------- 1. Scroll ile header zemini ---------- */
  var solidHeader = header.classList.contains('is-solid');

  function onScroll() {
    if (solidHeader) return;   // alt sayfalarda zemin zaten dolu
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
    var sp = document.querySelector('.nav__has-mega');
    var st = document.querySelector('.nav__sub-toggle');
    if (sp) sp.classList.remove('is-sub-open');
    if (st) st.setAttribute('aria-expanded', 'false');
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
    .map(function (l) {
      var href = l.getAttribute('href') || '';
      // Yalnızca sayfa içi çapalar; alt sayfa bağlantıları hariç
      // href="#" gibi boş çapalar geçersiz seçicidir; querySelector'a verilirse
      // SyntaxError fırlatır ve tüm dosyanın çalışması durur.
      if (href.length < 2 || href.charAt(0) !== '#') return null;
      try { return document.querySelector(href); } catch (e) { return null; }
    })
    .filter(Boolean);

  function setActive() {
    if (!sections.length) return;
    var pos = window.scrollY + window.innerHeight * 0.28;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
    links.forEach(function (l) {
      var href = l.getAttribute('href') || '';
      if (href.length < 2 || href.charAt(0) !== '#') return;
      l.classList.toggle('is-active', href === '#' + current.id);
    });
  }
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });

  /* ---------- 3b. Mobil: İlçelerimiz alt menüsü ---------- */
  var subToggle = document.querySelector('.nav__sub-toggle');
  var subParent = subToggle && subToggle.closest('.nav__has-mega');

  if (subToggle && subParent) {
    subToggle.addEventListener('click', function (e) {
      e.preventDefault();
      var open = subParent.classList.toggle('is-sub-open');
      subToggle.setAttribute('aria-expanded', String(open));
      subToggle.setAttribute('aria-label', open ? 'İlçeler listesini kapat' : 'İlçeler listesini aç');
    });
  }

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

      items.forEach(function (other) {
        var panel = other.querySelector('.faq__a');
        if (panel) panel.style.maxHeight = '';
      });

      if (willOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        var panel = item.querySelector('.faq__a');
        var inner = item.querySelector('.faq__a-inner');
        // Kesin yükseklik: uzun cevaplarda kırpılmayı, kısa cevaplarda
        // gecikmeli açılma hissini önler.
        if (panel && inner) panel.style.maxHeight = inner.scrollHeight + 'px';
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
  var reduce = typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.pcard, .callout, .logo-card, .valilik__body, .steps, .org, .puko, .player, .faq__item, .footer__grid, .ilce-kart, .kunye__item, .kanal'
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

  /* ---------- 7. İlçeler açılır menüsü ----------
     Masaüstünde CSS :hover / :focus-within ile açılır. Buradaki kod
     dokunmatik cihazlar ve klavye kullanımı için ek davranış sağlar.
  ------------------------------------------------------------------------ */
  var megaParent = document.querySelector('.nav__has-mega');

  if (megaParent) {
    var megaTrigger = megaParent.querySelector('.nav__link');
    var isTouch = typeof window.matchMedia === 'function' &&
      window.matchMedia('(hover: none)').matches;
    var isMobileNav = function () { return window.innerWidth <= 900; };

    function setMega(open) {
      megaParent.classList.toggle('is-open', open);
      megaTrigger.setAttribute('aria-expanded', String(open));
    }

    // Dokunmatik masaüstü/tablet: ilk dokunuş menüyü açar, ikincisi sayfaya gider
    megaTrigger.addEventListener('click', function (e) {
      if (isMobileNav()) return;           // mobil menüde liste zaten açık akar
      if (!isTouch) return;                // fareyle :hover devrede
      if (!megaParent.classList.contains('is-open')) {
        e.preventDefault();
        setMega(true);
      }
    });

    // Klavye: Aşağı ok ile menüye gir, Escape ile çık
    megaTrigger.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setMega(true);
        var ilk = megaParent.querySelector('.mega__link');
        if (ilk) ilk.focus();
      }
    });

    megaParent.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && megaParent.classList.contains('is-open')) {
        setMega(false);
        megaTrigger.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!megaParent.contains(e.target)) setMega(false);
    });
  }
  /* ---------- 7. Yeniden boyutlandırmada açık panelleri tazele ---------- */
  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      var open = document.querySelector('.faq__item.is-open');
      if (!open) return;
      var panel = open.querySelector('.faq__a');
      var inner = open.querySelector('.faq__a-inner');
      if (panel && inner) panel.style.maxHeight = inner.scrollHeight + 'px';
    }, 150);
  });
})();
