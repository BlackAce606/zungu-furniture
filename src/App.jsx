import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Chatbot from './Chatbot.jsx';
import { SITE_I18N, getStoredLang } from './i18n.js';

// Desktop gets the newer, higher-quality landscape clip; mobile/tablet gets
// the original portrait clip — same breakpoint (900px) already used for the
// nav's mobile menu elsewhere in this file, so "tablet" is treated the same
// way there and here.
const HERO_SETS = {
  landscape: { dir: 'hero-frames-landscape', count: 120 },
  portrait: { dir: 'hero-frames-portrait', count: 119 },
};
const heroFramePath = (mode, i) => `/${HERO_SETS[mode].dir}/frame_${String(i + 1).padStart(3, '0')}.jpg`;
const pickHeroMode = () => (window.innerWidth <= 900 ? 'portrait' : 'landscape');

function Nav({ lang, onToggleLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);
  const t = SITE_I18N[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="logo">
        <img src="/logo.png" alt="Zungu Furniture & Interior Design" />
        <span className="logo-word">ZUNGU</span>
      </a>
      <div className="nav-right">
        <nav className={`nav-links${open ? ' open' : ''}`}>
          <a href="#collection" onClick={close}>{t.collection}</a>
          <a href="#studio" onClick={close}>{t.studio}</a>
          <a href="#work" onClick={close}>{t.work}</a>
          <a href="#testimonials" onClick={close}>{t.testimonials}</a>
          <a href="#booking" onClick={close}>{t.booking}</a>
          <a href="#contact" onClick={close}>{t.contact}</a>
        </nav>
        <button
          className="lang-toggle"
          aria-label={lang === 'en' ? 'Switch to Swahili' : 'Badili kwa Kiingereza'}
          onClick={onToggleLang}
        >
          {lang === 'en' ? 'SW' : 'EN'}
        </button>
        <button className={`menu-toggle${open ? ' open' : ''}`} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

function Hero({ lang }) {
  const t = SITE_I18N[lang].hero;
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);
  const setsRef = useRef({
    landscape: { frames: new Array(HERO_SETS.landscape.count), loaded: new Array(HERO_SETS.landscape.count).fill(false), started: false },
    portrait: { frames: new Array(HERO_SETS.portrait.count), loaded: new Array(HERO_SETS.portrait.count).fill(false), started: false },
  });
  const modeRef = useRef(null);
  const currentIndexRef = useRef(0);
  // The sticky .hero (100vh) inside .hero-scroll (280vh) only stays pinned
  // until raw scroll reaches (containerHeight - viewportHeight) — past that
  // it un-sticks and slides away with the page. Frame playback and the
  // tagline reveal must both finish BEFORE that point, or they play out
  // while the video is already scrolling off-screen. pinEndRef holds that
  // fraction (with a small safety margin), computed from real element
  // heights so it stays correct if these heights ever change.
  const pinEndRef = useRef(1);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    const mode = modeRef.current;
    if (!canvas || !mode) return;
    const count = HERO_SETS[mode].count;
    const set = setsRef.current[mode];

    let useIndex = index;
    if (!set.loaded[useIndex]) {
      let i = useIndex;
      while (i >= 0 && !set.loaded[i]) i--;
      if (i < 0) {
        i = useIndex;
        while (i < count && !set.loaded[i]) i++;
      }
      if (i < 0 || i >= count) return;
      useIndex = i;
    }

    currentIndexRef.current = index;
    const img = set.frames[useIndex];
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const neededW = Math.round(rect.width * dpr);
    const neededH = Math.round(rect.height * dpr);
    if (canvas.width !== neededW || canvas.height !== neededH) {
      canvas.width = neededW;
      canvas.height = neededH;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const cw = rect.width, ch = rect.height;
    ctx.clearRect(0, 0, cw, ch);
    const scale = Math.max(cw / img.width, ch / img.height);
    const dw = img.width * scale, dh = img.height * scale;
    const dx = (cw - dw) / 2, dy = (ch - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  const startLoading = (mode) => {
    const set = setsRef.current[mode];
    if (set.started) return;
    set.started = true;
    const count = HERO_SETS[mode].count;
    for (let i = 0; i < count; i++) {
      const img = new Image();
      img.src = heroFramePath(mode, i);
      img.onload = () => {
        set.loaded[i] = true;
        set.frames[i] = img;
        if (i === 0 && mode === modeRef.current) drawFrame(currentIndexRef.current);
      };
    }
  };

  const setMode = (mode) => {
    if (mode === modeRef.current) return;
    modeRef.current = mode;
    startLoading(mode);
    drawFrame(currentIndexRef.current);
  };

  const computePinEnd = () => {
    const el = scrollRef.current;
    if (!el) return;
    const raw = 1 - window.innerHeight / el.offsetHeight;
    // 8% cushion so playback/reveal finish a beat before the hard release
    // point, not right on top of it.
    pinEndRef.current = Math.max(0.1, raw * 0.92);
  };

  useEffect(() => {
    setMode(pickHeroMode());
    computePinEnd();
    const onResize = () => {
      setMode(pickHeroMode());
      computePinEnd();
      drawFrame(currentIndexRef.current);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Heading fades in only over the final stretch of the scroll-scrub, once
  // the clip has essentially finished playing — set imperatively (not via
  // useTransform+style) per this codebase's established Framer Motion
  // gotcha: declarative scroll-linked opacity silently freezes here.
  const headingRef = useRef(null);
  const REVEAL_START = 0.82;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const mode = modeRef.current;
    if (!mode) return;

    // Remap so 0→1 spans only the portion of scroll where the hero is
    // actually pinned on screen — see pinEndRef above.
    const p = Math.min(1, latest / pinEndRef.current);

    drawFrame(Math.round(p * (HERO_SETS[mode].count - 1)));

    if (headingRef.current) {
      const opacity = p < REVEAL_START ? 0 : (p - REVEAL_START) / (1 - REVEAL_START);
      headingRef.current.style.opacity = opacity;
    }
  });

  return (
    <section className="hero-scroll" ref={scrollRef} id="studio">
      <div className="hero">
        <canvas className="hero-video" ref={canvasRef}></canvas>
        <div className="hero-content">
          <h1 className="hero-tagline" ref={headingRef} style={{ opacity: 0 }}>{t.heading}</h1>
        </div>
      </div>
    </section>
  );
}

function Stats({ lang }) {
  const t = SITE_I18N[lang].stats;
  return (
    <section className="stats">
      <div className="stats-grid">
        {t.items.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <p className="stats-note">{t.note}</p>
    </section>
  );
}

function Services({ lang }) {
  const t = SITE_I18N[lang].services;
  return (
    <section className="services" id="collection">
      <div className="section-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.heading}</h2>
      </div>
      <ul className="services-list">
        {t.items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

const WORK_COUNT = 9;
const workVideoPath = (i) => `/work/work-${String(i + 1).padStart(2, '0')}.mp4`;
const workPosterPath = (i) => `/work/work-${String(i + 1).padStart(2, '0')}.jpg`;

// Autoplay (muted) only while its card is actually on screen — same pattern
// already proven for video cards on the Minimax site — so nine videos don't
// all try to play/download at once.
function WorkVideo({ index, caption }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="work-item">
      <video
        ref={videoRef}
        src={workVideoPath(index)}
        poster={workPosterPath(index)}
        muted
        loop
        playsInline
        controls
        preload="none"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

// Continuous gliding marquee — same technique as the Minimax "Current
// Projects" slider: the list is rendered twice back-to-back and a
// requestAnimationFrame loop increments scrollLeft at a constant speed,
// wrapping once it passes one full set's width (seamless since the second
// copy is identical). Pauses on hover/touch, and only runs while the rail
// is actually in view.
const WORK_SPEED_PX_PER_SEC = 40;

function Work({ lang }) {
  const t = SITE_I18N[lang].work;
  const railRef = useRef(null);
  const inViewRef = useRef(false);
  const pausedRef = useRef(false);
  const lastTsRef = useRef(null);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { inViewRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    observer.observe(el);

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);

    let rafId;
    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (inViewRef.current && !pausedRef.current) {
        const half = el.scrollWidth / 2;
        el.scrollLeft += WORK_SPEED_PX_PER_SEC * dt;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  const doubled = [...t.items, ...t.items];

  return (
    <section className="work" id="work">
      <div className="section-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.heading}</h2>
        <p className="section-note">{t.note}</p>
      </div>
      <div className="work-rail" ref={railRef}>
        {doubled.map((item, i) => (
          <WorkVideo key={`${item.caption}-${i}`} index={item.video - 1} caption={item.caption} />
        ))}
      </div>
    </section>
  );
}

function Testimonials({ lang }) {
  const t = SITE_I18N[lang].testimonials;
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.heading}</h2>
        <p className="section-note">{t.note}</p>
      </div>
      <div className="testimonials-grid">
        {t.items.map((item) => (
          <div className="testimonial-card" key={item.name}>
            <p className="testimonial-quote">{item.quote}</p>
            <p className="testimonial-name">{item.name}</p>
            <p className="testimonial-role">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Booking({ lang }) {
  const t = SITE_I18N[lang].booking;
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || slot === null || !name || !phone) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="booking" id="booking">
        <div className="booking-card">
          <div className="booking-success">
            <h3>{t.successTitle}</h3>
            <p>{t.successBody(date, t.slots[slot], name)}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="booking" id="booking">
      <div className="section-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.heading}</h2>
        <p className="section-sub">{t.sub}</p>
      </div>
      <div className="booking-card">
        <form onSubmit={handleSubmit}>
          <div className="booking-field">
            <label>{t.dateLabel}</label>
            <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="booking-field">
            <label>{t.slotLabel}</label>
            <div className="slot-grid">
              {t.slots.map((s, i) => (
                <button
                  type="button"
                  key={s}
                  className={`slot-btn${slot === i ? ' active' : ''}`}
                  onClick={() => setSlot(i)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="booking-row">
            <div className="booking-field">
              <label>{t.nameLabel}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="booking-field">
              <label>{t.phoneLabel}</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
          <button type="submit" className="btn booking-submit">{t.submit}</button>
          <p className="booking-note">{t.note}</p>
        </form>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  const t = SITE_I18N[lang].contact;
  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.heading}</h2>
        <p className="section-sub">{t.sub}</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div><span className="eyebrow">{t.officeLabel}</span><p>{t.office}</p></div>
          <div><span className="eyebrow">{t.locationLabel}</span><p>{t.location}</p></div>
          <div>
            <span className="eyebrow">{t.directionsLabel}</span>
            <p><a className="directions-link" href="https://maps.app.goo.gl/uvjaXbFKRQHTkZ4N7" target="_blank" rel="noopener noreferrer">{t.directions}</a></p>
          </div>
          <div><span className="eyebrow">{t.emailLabel}</span><p><a href="mailto:ngowirodrick@gmail.com">ngowirodrick@gmail.com</a></p></div>
          <div>
            <span className="eyebrow">{t.phoneLabel}</span>
            <p><a href="tel:+255764237115">0764 237 115</a></p>
            <p><a href="tel:+255748278219">0748 278 219</a></p>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder={t.nameLabel} required />
          <textarea placeholder={t.messageLabel} rows="4" required></textarea>
          <button type="submit" className="btn">{t.submit}</button>
        </form>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const t = SITE_I18N[lang].footer;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">
          <img src="/logo.png" alt="Zungu Furniture & Interior Design" />
          ZUNGU
        </span>
        <p className="footer-tagline">{t.tagline}</p>
        <p className="footer-copy">&copy; 2026 Zungu Furniture</p>
      </div>
    </footer>
  );
}

function App() {
  const [lang, setLang] = useState(getStoredLang());

  useEffect(() => {
    localStorage.setItem('zungu_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'sw' : 'en'));

  return (
    <>
      <Nav lang={lang} onToggleLang={toggleLang} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <Services lang={lang} />
      <Work lang={lang} />
      <Testimonials lang={lang} />
      <Booking lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <Chatbot lang={lang} />
    </>
  );
}

export default App;
