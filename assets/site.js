(function () {
  var d = document;
  /* header shadow on scroll */
  var hdr = d.querySelector('.hdr');
  var onScroll = function () { hdr.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* mobile menu */
  var burger = d.getElementById('burger'), nav = d.getElementById('nav');
  var setMenu = function (open) { nav.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false'); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  /* scroll reveals + skill bars */
  var els = d.querySelectorAll('.rv, .skbox');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('is-in'); }); }

  /* full-page lightbox */
  var lb = d.getElementById('lb'), lbImg = d.getElementById('lbImg'), lbName = d.getElementById('lbName'), last = null;
  var closeLb = function () { lb.hidden = true; lbImg.removeAttribute('src'); d.body.style.overflow = ''; if (last) last.focus(); };
  d.querySelectorAll('.pj__img').forEach(function (b) {
    b.addEventListener('click', function () {
      last = b; lbImg.src = b.dataset.full; lbImg.alt = 'Full page design for ' + b.dataset.name; lbName.textContent = b.dataset.name;
      lb.hidden = false; d.body.style.overflow = 'hidden'; lb.querySelector('.lb__scroll').scrollTop = 0; d.getElementById('lbX').focus();
    });
  });
  d.getElementById('lbX').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb__scroll')) closeLb(); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

  /* contact form -> mailto fallback */
  var form = d.getElementById('cform'), ok = d.getElementById('fok');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var f = new FormData(form);
    var body = 'Name: ' + (f.get('name') || '') + '\n' + 'Email: ' + (f.get('email') || '') + '\n' + 'Phone: ' + (f.get('phone') || '') + '\n' +
      'Project: ' + (f.get('project') || '') + '\n\n' + (f.get('message') || '');
    window.location.href = 'mailto:franciscobeton@gmail.com' + '?subject=' + encodeURIComponent('Website project inquiry from ' + (f.get('name') || 'the website')) + '&body=' + encodeURIComponent(body);
    ok.classList.add('is-on'); form.reset();
  });

  var yr = d.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
