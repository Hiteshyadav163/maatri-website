// shared.js — nav, footer, WhatsApp float, scroll reveals, drawer

const NAV_HTML = `<nav>
  <a href="index.html" class="nav-brand">
    <img src="images/logo.jpg" alt="MaatriSparsh" class="nav-logo">
    <span class="nav-brand-name">MaatriSparsh</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="about.html" data-page="about">About</a></li>
    <li><a href="services.html" data-page="services">Services</a></li>
    <li><a href="faq.html" data-page="faq">FAQ</a></li>
    <li><a href="blog.html" data-page="blog">Blog</a></li>
    <li><a href="contact.html" data-page="contact">Contact</a></li>
  </ul>
  <div class="nav-right">
    <a href="contact.html" class="nav-cta">Request Demo</a>
    <button class="nav-hamburger" id="navHamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const DRAWER_HTML = `<div class="mobile-drawer" id="mobileDrawer">
  <div class="mobile-drawer-inner">
    <button class="mobile-drawer-close" id="drawerClose" aria-label="Close menu">&#x2715;</button>
    <div class="mobile-drawer-brand">
      <div style="font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--ink);">MaatriSparsh</div>
      <div style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-muted);margin-top:4px;">Hospital Partnership Programme</div>
    </div>
    <nav class="mobile-nav-links">
      <a href="index.html" class="mob-link" data-page="index">Home</a>
      <a href="about.html" class="mob-link" data-page="about">About</a>
      <a href="services.html" class="mob-link" data-page="services">Services</a>
      <a href="faq.html" class="mob-link" data-page="faq">FAQ</a>
      <a href="blog.html" class="mob-link" data-page="blog">Blog</a>
      <a href="contact.html" class="mob-link" data-page="contact">Contact</a>
    </nav>
    <div class="mobile-drawer-ctas">
      <a href="contact.html" class="mob-cta-email">✉ Request a Demo</a>
      <a href="https://wa.me/919340194664?text=Hello%20MaatriSparsh%20Team" target="_blank" rel="noopener" class="mob-cta-wa">💬 Chat on WhatsApp</a>
    </div>
  </div>
</div>
<div class="mobile-drawer-overlay" id="drawerOverlay"></div>`;

const FOOTER_HTML = `<footer>
  <div class="footer-grid">
    <div class="footer-brand-col">
      <img src="images/logo.jpg" alt="MaatriSparsh" style="height:52px;width:52px;border-radius:12px;object-fit:cover;">
      <div class="footer-brand-name">MaatriSparsh</div>
      <p class="footer-tagline">Bringing certified postpartum massage therapy and holistic wellness directly to your maternity ward.</p>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="Facebook">FB</a>
      </div>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Navigate</div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Legal</div>
      <ul>
        <li><a href="legal.html#terms">Terms &amp; Conditions</a></li>
        <li><a href="legal.html#privacy">Privacy Policy</a></li>
        <li><a href="legal.html#cancellation">Cancellation Policy</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Contact</div>
      <ul>
        <li><a href="mailto:partnerships@maatrisparsh.com" class="footer-email-link">partnerships@maatrisparsh.com</a></li>
        <li><a href="https://wa.me/919340194664">+91 93401 94664</a></li>
        <li><a href="contact.html">Request a Demo</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2025 MaatriSparsh Wellness. All rights reserved.</span>
    <div class="footer-legal">
      <a href="legal.html#terms">Terms</a>
      <a href="legal.html#privacy">Privacy</a>
      <a href="legal.html#cancellation">Cancellation</a>
    </div>
  </div>
</footer>`;

const WA_HTML = `<div class="wa-float">
  <div class="wa-tooltip"><strong style="display:block;font-size:11px;color:var(--ink-muted);margin-bottom:2px;">Quick Connect</strong>Chat with us on WhatsApp</div>
  <a class="wa-btn" href="https://wa.me/919340194664?text=Hello%20MaatriSparsh%20Team" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <div class="wa-pulse"></div>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.668 4.784 1.832 6.77L2 30l7.43-1.79A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.614l-.424-.252-4.408 1.062 1.1-4.29-.278-.44A11.56 11.56 0 014.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.34-8.64c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.89-1.074-2.59-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.434-.32.348-1.218 1.19-1.218 2.902s1.248 3.366 1.422 3.598c.174.232 2.456 3.748 5.952 5.258.832.36 1.482.574 1.988.734.836.266 1.596.228 2.198.138.67-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.656-.086-.144-.318-.232-.666-.406z"/></svg>
  </a>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  // ── Inject nav ──
  const navWrap = document.createElement('div');
  navWrap.innerHTML = NAV_HTML;
  document.body.insertBefore(navWrap.firstElementChild, document.body.firstChild);

  // ── Inject drawer + overlay right after nav ──
  const drawerWrap = document.createElement('div');
  drawerWrap.innerHTML = DRAWER_HTML;
  const navEl = document.querySelector('nav');
  let afterNav = navEl ? navEl.nextSibling : document.body.firstChild;
  while (drawerWrap.firstChild) {
    const child = drawerWrap.firstChild;
    document.body.insertBefore(child, afterNav);
  }

  // ── Inject footer ──
  const footerWrap = document.createElement('div');
  footerWrap.innerHTML = FOOTER_HTML;
  document.body.appendChild(footerWrap.firstElementChild);

  // ── Inject WhatsApp float ──
  const waWrap = document.createElement('div');
  waWrap.innerHTML = WA_HTML;
  document.body.appendChild(waWrap.firstElementChild);

  // ── Highlight active nav link ──
  const page = document.body.dataset.page || '';
  document.querySelectorAll('[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // ── Drawer logic ──
  const hamburger = document.getElementById('navHamburger');
  const drawer    = document.getElementById('mobileDrawer');
  const overlay   = document.getElementById('drawerOverlay');
  const closeBtn  = document.getElementById('drawerClose');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Close on any mob-link tap
  document.querySelectorAll('.mob-link').forEach(a => {
    a.addEventListener('click', () => setTimeout(closeDrawer, 80));
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      const t = document.querySelector(href);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeDrawer();
    });
  });

  // ── Scroll reveal ──
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = Array.from(el.parentElement?.querySelectorAll('.reveal') || []);
        const idx = siblings.indexOf(el);
        setTimeout(() => el.classList.add('visible'), Math.min(idx * 80, 400));
        revealObs.unobserve(el);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
});