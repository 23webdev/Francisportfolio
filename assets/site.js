(function () {
  'use strict';

  /* ---- year ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- mobile nav ---- */
  var burger = document.getElementById('burger');
  var mnav   = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      mnav.classList.toggle('is-open', !open);
    });
    mnav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
        mnav.classList.remove('is-open');
      }
    });
  }

  /* ---- sticky header state + back to top ---- */
  var hdr   = document.querySelector('.hdr');
  var totop = document.getElementById('totop');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (hdr)   hdr.classList.toggle('is-stuck', y > 12);
    if (totop) totop.classList.toggle('is-on', y > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (totop) {
    totop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- reveal on scroll ---- */
  var revealables = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- skill bars ---- */
  var bars = document.querySelectorAll('.bar__fill');
  function fill(el) { el.style.width = (el.getAttribute('data-pct') || 0) + '%'; }
  if ('IntersectionObserver' in window) {
    var bo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { fill(en.target); bo.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (el) { bo.observe(el); });
  } else {
    bars.forEach(fill);
  }


  /* ---- work lightbox ---- */
  var lb     = document.getElementById('lb');
  var lbimg  = document.getElementById('lbimg');
  var lbname = document.getElementById('lbname');
  var lbx    = document.getElementById('lbx');
  var lastTrigger = null;

  function closeLb() {
    if (!lb) return;
    lb.classList.remove('is-on');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-open');
    lbimg.removeAttribute('src');
    if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
  }

  if (lb) {
    document.querySelectorAll('.work__thumb').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src  = btn.getAttribute('data-full');
        var name = btn.getAttribute('data-name') || '';
        if (!src) return;
        lastTrigger = btn;
        lbname.textContent = name;
        lbimg.alt = name + ', full page';
        lbimg.src = src;                       /* loaded only on demand */
        lb.classList.add('is-on');
        lb.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lb-open');
        lb.scrollTop = 0;
        lbx.focus();
      });
    });

    lbx.addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('is-on')) closeLb();
    });
  }

  /* ---- contact form -> mailto fallback ---- */
  var form = document.getElementById('cform');
  var ok   = document.getElementById('fok');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var d = new FormData(form);
      var body =
        'Name: '    + (d.get('name')    || '') + '\n' +
        'Email: '   + (d.get('email')   || '') + '\n' +
        'Phone: '   + (d.get('phone')   || '') + '\n' +
        'Project: ' + (d.get('project') || '') + '\n\n' +
        (d.get('message') || '');
      window.location.href =
        'mailto:franciscobeton@gmail.com' +
        '?subject=' + encodeURIComponent('Website project inquiry from ' + (d.get('name') || 'the website')) +
        '&body='    + encodeURIComponent(body);
      if (ok) ok.classList.add('is-on');
      form.reset();
    });
  }
})();
