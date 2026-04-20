// Mosaic Capital — msc.xyz

document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const t = document.querySelector(id);
      if (t) {
        e.preventDefault();
        const top = t.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    });
  });

  // Fade-up on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.svc-card,.strat-card,.rfq-step,.team-card,.res-card,.pillar,.om,.stat-item').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 40}ms`;
    io.observe(el);
  });

  // Stat counter animation
  function animateCounter(el) {
    const original = el.textContent.trim();
    const match = original.match(/([\D]*)([\d.]+)(.*)/);
    if (!match) return;
    const prefix = match[1], num = parseFloat(match[2]), suffix = match[3];
    const decimals = match[2].includes('.') ? (match[2].split('.')[1]?.length || 1) : 0;
    let startTs;
    const duration = 1600;
    function step(ts) {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = prefix + (decimals ? (num * eased).toFixed(decimals) : Math.round(num * eased)) + suffix;
      if (p < 1) requestAnimationFrame(step); else el.textContent = original;
    }
    requestAnimationFrame(step);
  }
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat-n').forEach(el => counterObs.observe(el));

  // Contact form
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = "Message sent — we'll be in touch.";
    btn.style.background = 'var(--blue)';
    btn.style.color = 'white';
    btn.disabled = true;
  });
});
