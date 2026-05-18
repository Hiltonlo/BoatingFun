/* =========================================================
   Maris Yacht Charters — Shared site behavior
   ========================================================= */

// ---------- Fleet data (shared across pages) ----------
const FLEET = [
  {
    id: 'aurelia',
    name: 'Aurelia',
    type: 'Motor Yacht',
    category: 'motor',
    length: 78,
    guests: 12,
    cabins: 4,
    crew: 4,
    dayRate: 6500,
    weekRate: 38000,
    description: 'A timeless Italian-built motor yacht with sweeping deck spaces, two jacuzzis, and a master suite with private terrace.',
    features: ['Jacuzzi', 'Water toys', 'Wi-Fi', 'Master suite', 'Sun deck', 'Chef on board'],
    badge: 'Signature'
  },
  {
    id: 'meridian',
    name: 'Meridian',
    type: 'Sailing Yacht',
    category: 'sailing',
    length: 65,
    guests: 8,
    cabins: 3,
    crew: 3,
    dayRate: 4200,
    weekRate: 25000,
    description: 'Classic performance sailing yacht with teak decks and an interior styled in walnut and ivory linen.',
    features: ['Full sail rig', 'Tender included', 'Snorkel gear', 'Hi-fi system'],
    badge: 'New'
  },
  {
    id: 'celestine',
    name: 'Celestine',
    type: 'Catamaran',
    category: 'catamaran',
    length: 58,
    guests: 10,
    cabins: 4,
    crew: 2,
    dayRate: 3800,
    weekRate: 22500,
    description: 'A stable luxury catamaran perfect for shallow-water cruising, ideal for families and small groups.',
    features: ['Wide deck', 'Paddleboards', 'Open salon', 'Shaded cockpit'],
    badge: ''
  },
  {
    id: 'orion',
    name: 'Orion',
    type: 'Mega Yacht',
    category: 'motor',
    length: 112,
    guests: 12,
    cabins: 6,
    crew: 8,
    dayRate: 14500,
    weekRate: 92000,
    description: 'Our flagship — five decks, a full beach club, gym, cinema, and a Michelin-trained executive chef.',
    features: ['Beach club', 'Cinema', 'Gym', 'Helipad', 'Chef', 'Sommelier'],
    badge: 'Flagship'
  },
  {
    id: 'sereno',
    name: 'Sereno',
    type: 'Day Cruiser',
    category: 'day',
    length: 42,
    guests: 12,
    cabins: 1,
    crew: 2,
    dayRate: 1800,
    weekRate: null,
    description: 'A sleek day cruiser made for harbour-hops, sunset apéros, and intimate celebrations on the water.',
    features: ['Bar service', 'Bluetooth audio', 'Sun pads', 'Half-day option'],
    badge: ''
  },
  {
    id: 'vela',
    name: 'Vela',
    type: 'Sailing Yacht',
    category: 'sailing',
    length: 72,
    guests: 10,
    cabins: 4,
    crew: 3,
    dayRate: 5100,
    weekRate: 31000,
    description: 'Modern carbon-mast sailing yacht built for ocean passages, with a minimalist Scandinavian interior.',
    features: ['Carbon rig', 'Hydraulic furling', 'Owner cabin', 'Sat comms'],
    badge: ''
  }
];

// ---------- SVG generators (decorative yacht/wave art) ----------
function yachtSVG(seed = 0) {
  const palettes = [
    ['#0a1929', '#16304a', '#c9a961'],
    ['#16304a', '#1a3a5c', '#d9bd7a'],
    ['#0f2237', '#16304a', '#c9a961'],
    ['#0a1929', '#1a3a5c', '#d9bd7a']
  ];
  const p = palettes[seed % palettes.length];
  return `
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky${seed}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${p[0]}"/>
          <stop offset="1" stop-color="${p[1]}"/>
        </linearGradient>
        <linearGradient id="water${seed}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${p[1]}"/>
          <stop offset="1" stop-color="${p[0]}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="240" fill="url(#sky${seed})"/>
      <rect y="240" width="600" height="160" fill="url(#water${seed})"/>
      <!-- Sun/Moon glow -->
      <circle cx="${120 + (seed * 60) % 360}" cy="100" r="40" fill="${p[2]}" opacity="0.18"/>
      <circle cx="${120 + (seed * 60) % 360}" cy="100" r="22" fill="${p[2]}" opacity="0.35"/>
      <!-- Distant headland -->
      <path d="M0 240 Q150 ${210 + seed * 4} 300 235 T600 240 L600 260 L0 260 Z" fill="${p[0]}" opacity="0.5"/>
      <!-- Yacht silhouette -->
      <g transform="translate(${180 + seed * 10}, 220)">
        <!-- Hull -->
        <path d="M0 40 Q40 70 200 70 L240 40 Z" fill="${p[2]}" opacity="0.95"/>
        <!-- Superstructure -->
        <path d="M30 20 L210 20 L200 40 L40 40 Z" fill="${p[2]}" opacity="0.8"/>
        <path d="M70 4 L170 4 L170 20 L70 20 Z" fill="${p[2]}" opacity="0.7"/>
        ${seed % 2 === 0 ? '<line x1="120" y1="4" x2="120" y2="-60" stroke="' + p[2] + '" stroke-width="1.2"/>' : ''}
      </g>
      <!-- Reflection -->
      <path d="M${180 + seed * 10} 290 Q${300 + seed * 10} 300 ${420 + seed * 10} 290" stroke="${p[2]}" stroke-width="1" opacity="0.4" fill="none"/>
      <!-- Subtle wave lines -->
      <path d="M0 320 Q150 310 300 320 T600 320" stroke="${p[2]}" stroke-width="0.8" opacity="0.25" fill="none"/>
      <path d="M0 350 Q150 340 300 350 T600 350" stroke="${p[2]}" stroke-width="0.6" opacity="0.18" fill="none"/>
      <path d="M0 380 Q150 370 300 380 T600 380" stroke="${p[2]}" stroke-width="0.5" opacity="0.12" fill="none"/>
    </svg>
  `;
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

  // Scroll background
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  if (nav.classList.contains('solid')) {
    // pages with light bg keep nav solid
  } else {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile toggle
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

// ---------- Render featured fleet (home page) ----------
function renderFeatured() {
  const target = document.querySelector('#featured-fleet');
  if (!target) return;
  const featured = FLEET.slice(0, 3);
  target.innerHTML = featured.map((y, i) => yachtCard(y, i)).join('');
}

// ---------- Render full fleet (fleet page) ----------
function renderFleet(filter = 'all') {
  const target = document.querySelector('#fleet-grid');
  if (!target) return;
  const list = filter === 'all' ? FLEET : FLEET.filter(y => y.category === filter);
  target.innerHTML = list.map((y, i) => yachtCard(y, i)).join('');
}

function yachtCard(y, i) {
  return `
    <article class="yacht-card reveal">
      <div class="yacht-img">
        ${yachtSVG(i)}
        ${y.badge ? `<span class="yacht-badge">${y.badge}</span>` : ''}
      </div>
      <div class="yacht-info">
        <h3>${y.name}</h3>
        <div class="yacht-type">${y.type} • ${y.length}'</div>
        <p style="color: var(--muted); font-size: 0.92rem; margin-bottom: 0;">${y.description}</p>
        <div class="yacht-specs">
          <span><strong>${y.guests}</strong>Guests</span>
          <span><strong>${y.cabins}</strong>Cabins</span>
          <span><strong>${y.crew}</strong>Crew</span>
        </div>
        <div class="yacht-price">$${y.dayRate.toLocaleString()} <span class="per">/ day</span></div>
        <div class="yacht-cta">
          <a href="booking.html?yacht=${y.id}" class="btn btn-primary">Reserve</a>
        </div>
      </div>
    </article>
  `;
}

// ---------- Fleet page filters ----------
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFleet(btn.dataset.filter);
      // Re-init reveal for newly rendered cards
      setTimeout(initReveal, 50);
    });
  });
}

// ---------- Booking form ----------
function initBooking() {
  const form = document.querySelector('#booking-form');
  if (!form) return;

  // Populate yacht select
  const yachtSelect = form.querySelector('[name="yacht"]');
  yachtSelect.innerHTML = '<option value="">Select a yacht...</option>' +
    FLEET.map(y => `<option value="${y.id}">${y.name} — ${y.type} ($${y.dayRate.toLocaleString()}/day)</option>`).join('');

  // Pre-select from URL
  const params = new URLSearchParams(window.location.search);
  const pre = params.get('yacht');
  if (pre && FLEET.find(y => y.id === pre)) {
    yachtSelect.value = pre;
  }

  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  form.querySelector('[name="start"]').min = today;
  form.querySelector('[name="end"]').min = today;

  // Live summary
  const updateSummary = () => {
    const yachtId = yachtSelect.value;
    const yacht = FLEET.find(y => y.id === yachtId);
    const start = form.querySelector('[name="start"]').value;
    const end = form.querySelector('[name="end"]').value;
    const guests = form.querySelector('[name="guests"]').value || '—';

    document.querySelector('#sum-yacht').textContent = yacht ? yacht.name : '—';
    document.querySelector('#sum-dates').textContent = (start && end)
      ? `${formatDate(start)} → ${formatDate(end)}`
      : '—';
    document.querySelector('#sum-guests').textContent = guests;

    let nights = 0;
    if (start && end) {
      const s = new Date(start), e = new Date(end);
      nights = Math.max(0, Math.round((e - s) / 86400000));
    }
    document.querySelector('#sum-nights').textContent = nights || '—';

    const rate = yacht ? yacht.dayRate : 0;
    const subtotal = rate * nights;
    const apa = Math.round(subtotal * 0.3); // typical APA estimate
    const total = subtotal + apa;

    document.querySelector('#sum-subtotal').textContent = subtotal ? `$${subtotal.toLocaleString()}` : '—';
    document.querySelector('#sum-apa').textContent = apa ? `$${apa.toLocaleString()}` : '—';
    document.querySelector('#sum-total').textContent = total ? `$${total.toLocaleString()}` : '—';
  };

  form.addEventListener('input', updateSummary);
  form.addEventListener('change', updateSummary);
  updateSummary();

  // Submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const showConfirmation = () => {
      const ref = 'MAR-' + Math.random().toString(36).slice(2, 7).toUpperCase();
      document.querySelector('#confirm-ref').textContent = ref;
      document.querySelector('#booking-form-wrap').style.display = 'none';
      document.querySelector('#confirmation').classList.add('show');
      window.scrollTo({ top: document.querySelector('#confirmation').offsetTop - 100, behavior: 'smooth' });
    };

    // If Formspree isn't configured yet, fall back to the demo confirmation
    if (!form.action || form.action.includes('YOUR_FORMSPREE_ID')) {
      console.warn('Formspree not configured on booking form — showing demo confirmation. Replace YOUR_FORMSPREE_ID in booking.html to receive real submissions.');
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
      alert('Something went wrong sending your reservation. Please try again, or call us at +377 99 99 12 34.');
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
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const note = document.querySelector('#contact-success');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const showSuccess = () => {
      note.style.display = 'block';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      setTimeout(() => { note.style.display = 'none'; }, 8000);
    };

    // Fallback if Formspree isn't configured
    if (!form.action || form.action.includes('YOUR_FORMSPREE_ID')) {
      console.warn('Formspree not configured on contact form — showing demo success. Replace YOUR_FORMSPREE_ID in contact.html to receive real submissions.');
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
      alert('Something went wrong sending your message. Please try again, or email charter@marisyachts.com.');
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
