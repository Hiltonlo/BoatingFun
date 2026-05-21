/* =========================================================
   Lake Conroe Escapes — Shared site behavior
   ========================================================= */

// ---------- Experience packages (shared across pages) ----------
const FLEET = [
  {
    id: 'half-day-lake',
    name: 'Lake Adventure',
    type: 'Half-Day Cruise',
    category: 'boating',
    duration: '4 Hours',
    guests: 12,
    cabins: 0,
    crew: 2,
    description: 'Set out on Lake Conroe for a four-hour guided cruise. Swim, tube, or simply relax on the water with a fully stocked cooler and Bluetooth sound.',
    features: ['Captain & first mate', 'Water toys & tubes', 'Cooler & ice', 'Bluetooth audio', 'Life vests', 'Snacks on board'],
    badge: 'Popular'
  },
  {
    id: 'full-day-escape',
    name: 'Full Day Escape',
    type: 'Full-Day Cruise',
    category: 'boating',
    duration: '8 Hours',
    guests: 20,
    cabins: 0,
    crew: 3,
    description: 'A complete day on the lake with catered lunch, water activities, and a guided tour of Lake Conroe\'s most scenic coves and shorelines.',
    features: ['Captain & crew', 'Catered lunch', 'Water toys', 'Full bar service', 'Towels provided', 'Scenic route'],
    badge: 'Best Value'
  },
  {
    id: 'sunset-cruise',
    name: 'Sunset Cruise',
    type: 'Evening Experience',
    category: 'boating',
    duration: '3 Hours',
    guests: 16,
    cabins: 0,
    crew: 2,
    description: 'Watch the Texas sun set over Lake Conroe with cocktails, charcuterie, and the best golden-hour view in Montgomery County.',
    features: ['Captain & crew', 'Cocktail service', 'Charcuterie board', 'Scenic sunset route', 'Premium audio'],
    badge: ''
  },
  {
    id: 'business-outing',
    name: 'Executive Outing',
    type: 'Business Package',
    category: 'events',
    duration: 'Full Day',
    guests: 40,
    cabins: 0,
    crew: 4,
    description: 'The complete corporate experience — lake cruise, 18 holes at a private club, pool access, and fine dining. Built to impress clients and reward teams.',
    features: ['Private boat charter', 'Golf (18 holes)', 'Private club pool', 'Fine dining dinner', 'Dedicated host', 'Fully customizable'],
    badge: 'Signature'
  },
  {
    id: 'reunion-package',
    name: 'Reunion Celebration',
    type: 'Group Event',
    category: 'events',
    duration: 'Full Day',
    guests: 60,
    cabins: 0,
    crew: 6,
    description: 'Reconnect in style. Multiple boats, private club access, catered meals, and personal touches make family or group reunions truly memorable.',
    features: ['Multiple vessels', 'Private club access', 'Catered meals', 'Event coordination', 'Custom decor', 'Flexible timing'],
    badge: ''
  },
  {
    id: 'holiday-event',
    name: 'Holiday on the Lake',
    type: 'Holiday Package',
    category: 'events',
    duration: 'Custom',
    guests: 50,
    cabins: 0,
    crew: 5,
    description: 'Celebrate the holidays on Lake Conroe — festive cruises, lakeside dining, and private club festivities for groups of all sizes.',
    features: ['Holiday decor', 'Festive menu', 'Private club venue', 'Custom program', 'Live entertainment', 'Photo opportunities'],
    badge: 'Seasonal'
  }
];

// ---------- SVG generators (decorative lake / activity art) ----------
function yachtSVG(seed = 0) {
  const palettes = [
    ['#0a1929', '#0f3352', '#c9a961'],
    ['#0f2237', '#16304a', '#d9bd7a'],
    ['#0a1929', '#1a3a5c', '#c9a961'],
    ['#071622', '#0f3352', '#d9bd7a']
  ];
  const p = palettes[seed % palettes.length];

  const scenes = [
    // Boating scene
    `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky${seed}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${p[0]}"/>
          <stop offset="1" stop-color="${p[1]}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="240" fill="url(#sky${seed})"/>
      <rect y="240" width="600" height="160" fill="${p[0]}"/>
      <circle cx="${150 + seed * 80}" cy="90" r="35" fill="${p[2]}" opacity="0.18"/>
      <circle cx="${150 + seed * 80}" cy="90" r="20" fill="${p[2]}" opacity="0.32"/>
      <!-- Treeline -->
      <path d="M0 240 Q60 210 120 235 Q160 205 210 232 Q250 208 300 235 Q340 205 390 232 Q430 210 480 238 Q520 210 570 235 L600 240 L600 260 L0 260 Z" fill="${p[0]}" opacity="0.6"/>
      <!-- Boat -->
      <g transform="translate(${190 + seed * 8}, 225)">
        <path d="M0 38 Q35 60 195 60 L230 38 Z" fill="${p[2]}" opacity="0.95"/>
        <path d="M28 22 L202 22 L192 38 L38 38 Z" fill="${p[2]}" opacity="0.82"/>
        <path d="M68 6 L165 6 L165 22 L68 22 Z" fill="${p[2]}" opacity="0.70"/>
        ${seed % 2 === 0 ? `<line x1="115" y1="6" x2="115" y2="-55" stroke="${p[2]}" stroke-width="1.2"/>` : ''}
      </g>
      <path d="M0 320 Q150 308 300 320 T600 320" stroke="${p[2]}" stroke-width="0.9" opacity="0.28" fill="none"/>
      <path d="M0 355 Q150 343 300 355 T600 355" stroke="${p[2]}" stroke-width="0.7" opacity="0.18" fill="none"/>
      <path d="M0 385 Q150 373 300 385 T600 385" stroke="${p[2]}" stroke-width="0.5" opacity="0.12" fill="none"/>
    </svg>`,
    // Golf scene
    `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gsky${seed}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${p[0]}"/>
          <stop offset="1" stop-color="${p[1]}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#gsky${seed})"/>
      <!-- Rolling hills / fairway -->
      <path d="M0 300 Q100 260 200 285 Q300 250 400 280 Q500 255 600 275 L600 400 L0 400 Z" fill="${p[1]}" opacity="0.5"/>
      <path d="M0 340 Q150 310 300 330 Q450 305 600 325 L600 400 L0 400 Z" fill="${p[0]}" opacity="0.7"/>
      <!-- Flag on green -->
      <line x1="340" y1="240" x2="340" y2="300" stroke="${p[2]}" stroke-width="2"/>
      <path d="M340 240 L370 255 L340 268 Z" fill="${p[2]}" opacity="0.9"/>
      <!-- Golf ball -->
      <circle cx="200" cy="298" r="5" fill="#fff" opacity="0.7"/>
      <!-- Sun glow -->
      <circle cx="480" cy="100" r="50" fill="${p[2]}" opacity="0.14"/>
      <circle cx="480" cy="100" r="28" fill="${p[2]}" opacity="0.28"/>
      <!-- Star dots -->
      <circle cx="100" cy="60" r="1" fill="#fff" opacity="0.5"/>
      <circle cx="250" cy="40" r="0.8" fill="#fff" opacity="0.4"/>
      <circle cx="380" cy="80" r="1" fill="#fff" opacity="0.6"/>
    </svg>`
  ];

  return scenes[seed % scenes.length];
}

function waveBackgroundSVG() {
  return `
    <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <path d="M0 600 Q360 550 720 600 T1440 600 L1440 800 L0 800 Z" fill="rgba(201, 169, 97, 0.04)"/>
      <path d="M0 650 Q360 610 720 650 T1440 650 L1440 800 L0 800 Z" fill="rgba(201, 169, 97, 0.06)"/>
      <path d="M0 700 Q360 670 720 700 T1440 700 L1440 800 L0 800 Z" fill="rgba(201, 169, 97, 0.08)"/>
    </svg>
  `;
}

// ---------- Navigation behavior ----------
function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  if (!nav.classList.contains('solid')) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
}

// ---------- Reveal on scroll ----------
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ---------- Render featured experiences (home page) ----------
function renderFeatured() {
  const target = document.querySelector('#featured-fleet');
  if (!target) return;
  const featured = FLEET.slice(0, 3);
  target.innerHTML = featured.map((e, i) => experienceCard(e, i)).join('');
}

// ---------- Render full experiences (experiences page) ----------
function renderFleet(filter = 'all') {
  const target = document.querySelector('#fleet-grid');
  if (!target) return;
  const list = filter === 'all' ? FLEET : FLEET.filter(e => e.category === filter);
  target.innerHTML = list.map((e, i) => experienceCard(e, i)).join('');
}

function experienceCard(e, i) {
  return `
    <article class="yacht-card reveal">
      <div class="yacht-img">
        ${yachtSVG(i)}
        ${e.badge ? `<span class="yacht-badge">${e.badge}</span>` : ''}
      </div>
      <div class="yacht-info">
        <h3>${e.name}</h3>
        <div class="yacht-type">${e.type} &bull; Up to ${e.guests} Guests</div>
        <p style="color: var(--muted); font-size: 0.92rem; margin-bottom: 0;">${e.description}</p>
        <div class="yacht-specs">
          <span><strong>${e.guests}</strong>Guests</span>
          <span><strong>${e.duration}</strong>Duration</span>
          <span><strong>${e.crew}</strong>Crew</span>
        </div>
        <div class="yacht-price" style="font-size: 1rem; color: var(--muted);">Custom pricing · Inquire to book</div>
        <div class="yacht-cta">
          <a href="booking.html?exp=${e.id}" class="btn btn-primary">Book This</a>
          <a href="contact.html" class="btn btn-outline-dark">Ask a Question</a>
        </div>
      </div>
    </article>
  `;
}

// ---------- Experiences page filters ----------
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFleet(btn.dataset.filter);
      setTimeout(initReveal, 50);
    });
  });
}

// ---------- Booking form ----------
function initBooking() {
  const form = document.querySelector('#booking-form');
  if (!form) return;

  // Populate experience select
  const expSelect = form.querySelector('[name="experience"]');
  if (expSelect) {
    expSelect.innerHTML = '<option value="">Select an experience...</option>' +
      FLEET.map(e => `<option value="${e.id}">${e.name} — ${e.type} (up to ${e.guests} guests)</option>`).join('');

    // Pre-select from URL
    const params = new URLSearchParams(window.location.search);
    const pre = params.get('exp');
    if (pre && FLEET.find(e => e.id === pre)) {
      expSelect.value = pre;
    }
  }

  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  const dateField = form.querySelector('[name="event_date"]');
  if (dateField) dateField.min = today;

  // Submit
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const showConfirmation = () => {
      const ref = 'LCE-' + Math.random().toString(36).slice(2, 7).toUpperCase();
      const refEl = document.querySelector('#confirm-ref');
      if (refEl) refEl.textContent = ref;
      const wrap = document.querySelector('#booking-form-wrap');
      if (wrap) wrap.style.display = 'none';
      const conf = document.querySelector('#confirmation');
      if (conf) {
        conf.classList.add('show');
        window.scrollTo({ top: conf.offsetTop - 100, behavior: 'smooth' });
      }
    };

    if (!form.action || form.action.includes('YOUR_FORMSPREE_ID')) {
      showConfirmation();
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        showConfirmation();
      } else {
        throw new Error('Submission failed: ' + response.status);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong sending your request. Please try again or call us at (936) 555-0148.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

function formatDate(s) {
  if (!s) return '';
  const d = new Date(s);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ---------- Contact form ----------
function initContact() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const note = document.querySelector('#contact-success');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const showSuccess = () => {
      if (note) note.style.display = 'block';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      setTimeout(() => { if (note) note.style.display = 'none'; }, 8000);
    };

    if (!form.action || form.action.includes('YOUR_FORMSPREE_ID')) {
      showSuccess();
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        showSuccess();
      } else {
        throw new Error('Submission failed: ' + response.status);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again or email delbusinessenterprises@hotmail.com.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// ---------- Boot ----------
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderFeatured();
  renderFleet('all');
  initFilters();
  initBooking();
  initContact();
  initReveal();
});
