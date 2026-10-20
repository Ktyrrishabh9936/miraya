"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

type IconName = "search" | "heart" | "user" | "bag" | "sun" | "moon" | "menu" | "close" | "arrow" | "calendar" | "shield" | "diamond" | "refresh" | "truck" | "instagram";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></>,
    heart: <path d="M20.8 4.7a5.4 5.4 0 0 0-7.6 0L12 5.9l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.7a5.4 5.4 0 0 0 0-7.6Z"/>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4.5 21c.8-4.2 3.3-6 7.5-6s6.7 1.8 7.5 6"/></>,
    bag: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M21 15.4A9 9 0 0 1 8.6 3a9 9 0 1 0 12.4 12.4Z"/>,
    menu: <><path d="M3 7h18M3 12h18M3 17h18"/></>,
    close: <path d="m5 5 14 14M19 5 5 19"/>,
    arrow: <><path d="M4 12h15M14 7l5 5-5 5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
    shield: <><path d="M12 2 20 5v6c0 5-3.4 8.8-8 11-4.6-2.2-8-6-8-11V5l8-3Z"/><path d="m8.5 12 2.3 2.3 4.8-5"/></>,
    diamond: <><path d="m3 8 4-5h10l4 5-9 13L3 8Z"/><path d="M3 8h18M7 3l5 5 5-5M12 8v13"/></>,
    refresh: <><path d="M20 7v5h-5"/><path d="M18.2 17A8 8 0 1 1 20 12"/></>,
    truck: <><path d="M2 6h13v11H2zM15 10h4l3 4v3h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Brand({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""} ${light ? "brand--light" : ""}`} href="#top" aria-label="Miraya home">
      <Image
        className={compact ? "brand__image brand__image--mark" : "brand__image brand__image--lockup"}
        src={compact ? "/brand/miraya-monogram.png" : "/brand/miraya-lockup.png"}
        alt=""
        width={compact ? 160 : 360}
        height={compact ? 160 : 120}
        sizes={compact ? "80px" : "240px"}
      />
    </a>
  );
}

const collectionFamilies = ["Gold", "Diamonds", "Kundan", "Polki", "Jadau", "Solitaires", "Precious Stones", "Pearls"];

const categories = [
  { name: "Rings", note: "Promises in precious metal", image: "/jewellery/rings.jpg" },
  { name: "Earrings", note: "Details that catch the light", image: "/jewellery/earrings.jpg" },
  { name: "Bracelets", note: "Everyday radiance", image: "/jewellery/product-a.jpg" },
  { name: "Bangles", note: "A circle of tradition", image: "/jewellery/craft.jpg" },
  { name: "Pendant Sets", note: "Close to the heart", image: "/jewellery/pendant.jpg" },
  { name: "Necklace Sets", note: "Made for grand moments", image: "/jewellery/hero.jpg" },
  { name: "Chains", note: "Understated elegance", image: "/jewellery/bracelet.jpg" },
  { name: "Cufflinks", note: "A polished final note", image: "/jewellery/bangles.jpg" },
];

const products = [
  { name: "Rose Bloom Ensemble", family: "Diamonds", image: "/jewellery/rings.jpg", detail: "Rose gold · Diamond set", tag: "New" },
  { name: "Mayura Heirloom Set", family: "Precious Stones", image: "/jewellery/necklace.jpg", detail: "Enamel · Pearl drops", tag: "Signature" },
  { name: "Emerald Rani Pendant", family: "Precious Stones", image: "/jewellery/pendant.jpg", detail: "Emerald · Diamond accents", tag: "Curator’s pick" },
  { name: "Noor Diamond Bangles", family: "Diamonds", image: "/jewellery/bridal.jpg", detail: "Diamond · Rose gold", tag: "Bestseller" },
  { name: "Golden Rhythm Bangle", family: "Gold", image: "/jewellery/craft.jpg", detail: "Gold · Enamel detail", tag: "Everyday" },
  { name: "Azure Drop Bracelet", family: "Diamonds", image: "/jewellery/product-a.jpg", detail: "Diamond · Two-tone gold", tag: "New" },
];

const heroSlides = [
  {
    eyebrow: "Crafted for your forever",
    title: "The art of timeless radiance",
    accent: "Radiance",
    lede: "Exquisite Indian fine jewellery, where enduring craftsmanship meets contemporary elegance.",
    image: "/jewellery/hero.jpg",
    alt: "Gold necklace and earrings from the Miraya heirloom collection",
    label: "Heirloom Gold",
  },
  {
    eyebrow: "A language of light",
    title: "Diamonds, distinctly yours",
    accent: "Yours",
    lede: "Contemporary diamond pieces with a quiet brilliance, thoughtfully composed for every chapter.",
    image: "/jewellery/bridal.jpg",
    alt: "Diamond bangles from the Miraya signature collection",
    label: "Diamond Edit",
  },
  {
    eyebrow: "Colour with a soul",
    title: "Heritage, reimagined",
    accent: "Reimagined",
    lede: "Precious stones, sculptural forms and expressive colour—rooted in tradition and made for now.",
    image: "/jewellery/necklace.jpg",
    alt: "Colourful peacock-inspired precious-stone jewellery set",
    label: "Precious Stones",
  },
];

function AppointmentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      setSent(false);
      setSubmitting(false);
      setError("");
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "We could not send your request.");
      }

      form.reset();
      setSent(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your request.");
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="appointment-title" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__panel">
        <button className="modal__close icon-button" onClick={onClose} aria-label="Close appointment form"><Icon name="close" /></button>
        {sent ? (
          <div className="success">
            <span className="success__gem">✦</span>
            <p className="eyebrow">Request received</p>
            <h2 id="appointment-title">Your private viewing awaits.</h2>
            <p>Thank you. A Miraya jewellery advisor will contact you to confirm your preferred time.</p>
            <button className="button button--dark" onClick={onClose}>Continue exploring</button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Private consultation</p>
            <h2 id="appointment-title">Book your Miraya experience</h2>
            <p className="modal__intro">Tell us what you are looking for and we’ll curate a viewing around you.</p>
            <form className="appointment-form" onSubmit={submit}>
              <label><span>Full name</span><input name="name" autoFocus required placeholder="Your name" /></label>
              <label><span>Phone number</span><input name="phone" type="tel" required placeholder="+91 00000 00000" /></label>
              <label><span>Preferred date</span><input name="date" type="date" required /></label>
              <label><span>Consultation</span><select name="format" defaultValue="Store visit"><option>Store visit</option><option>Video consultation</option></select></label>
              <label className="form-wide"><span>I’m interested in</span><select name="interest" defaultValue="Bridal jewellery"><option>Bridal jewellery</option><option>Gold jewellery</option><option>Diamond jewellery</option><option>Bespoke design</option><option>Everyday pieces</option></select></label>
              <label className="form-wide"><span>Anything we should know?</span><textarea name="message" rows={3} placeholder="A style, occasion or budget range (optional)" /></label>
              {error && <p className="form-error form-wide" role="alert">{error}</p>}
              <button className="button button--gold form-wide" type="submit" disabled={submitting}>{submitting ? "Sending request…" : "Request appointment"} {!submitting && <Icon name="arrow" size={17}/>}</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [favourites, setFavourites] = useState<string[]>([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("miraya-theme") as "light" | "dark" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved || preferred;
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    if (heroPaused) return;
    const timer = window.setInterval(() => setHeroIndex((current) => (current + 1) % heroSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, [heroPaused]);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("miraya-theme", next);
    document.documentElement.dataset.theme = next;
  }

  const visibleProducts = useMemo(() => filter === "All" ? products.slice(0, 4) : products.filter((p) => p.family === filter).slice(0, 4), [filter]);
  const openBooking = () => { setMenuOpen(false); setAppointmentOpen(true); };

  return (
    <main id="top">
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
      <div className="announcement"><span>Complimentary insured delivery across India</span><i>✦</i><span>Certified diamonds &amp; hallmarked gold</span><i>✦</i><button onClick={openBooking}>Private appointments available</button></div>
      <header className="site-header">
        <button className="icon-button mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation" aria-expanded={menuOpen}><Icon name={menuOpen ? "close" : "menu"}/></button>
        <nav className="nav nav--left" aria-label="Primary navigation">
          <a href="#collections">Collections</a><a href="#categories">Jewellery</a><a href="#story">Our story</a>
        </nav>
        <Brand />
        <div className="header-actions">
          <button className="icon-button desktop-icon" aria-label="Search"><Icon name="search" /></button>
          <button className="icon-button desktop-icon" aria-label="Favourites"><Icon name="heart" /></button>
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}><Icon name={theme === "light" ? "moon" : "sun"}/></button>
          <button className="button button--dark button--header" onClick={openBooking}>Book an appointment</button>
        </div>
        {menuOpen && <div className="mobile-menu"><a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a><a href="#categories" onClick={() => setMenuOpen(false)}>Jewellery</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#featured" onClick={() => setMenuOpen(false)}>Featured pieces</a><button className="button button--gold" onClick={openBooking}>Book an appointment</button></div>}
      </header>

      <section className="hero" aria-roledescription="carousel" aria-label="Miraya featured collections" onMouseEnter={() => setHeroPaused(true)} onMouseLeave={() => setHeroPaused(false)}>
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__main">
          <div className="hero__copy" key={`copy-${heroIndex}`}>
            <p className="eyebrow">{heroSlides[heroIndex].eyebrow}</p>
            <h1>{heroSlides[heroIndex].title}</h1>
            <p className="hero__lede">{heroSlides[heroIndex].lede}</p>
            <div className="hero__actions"><a className="button button--gold" href="#categories">Explore collections <Icon name="arrow" size={17}/></a><button className="text-link text-link--light" onClick={openBooking}><Icon name="calendar" size={18}/> Request an appointment</button></div>
          </div>
          <div className="hero__visual" key={`visual-${heroIndex}`}>
            <div className="hero__frame">
              <Image
                src={heroSlides[heroIndex].image}
                alt={heroSlides[heroIndex].alt}
                fill
                priority={heroIndex === 0}
                loading="eager"
                fetchPriority={heroIndex === 0 ? "high" : "auto"}
                unoptimized
                sizes="(max-width: 800px) 100vw, 42vw"
              />
            </div>
            <span className="sparkle sparkle--one">✦</span><span className="sparkle sparkle--two">✧</span>
            <div className="light-trail" aria-hidden="true" />
          </div>
        </div>
        <div className="hero__rail">
          {heroSlides.map((slide, index) => (
            <button className={`hero-thumb ${index === heroIndex ? "hero-thumb--active" : ""}`} key={slide.label} onClick={() => setHeroIndex(index)} aria-label={`Show ${slide.label}`} aria-current={index === heroIndex ? "true" : undefined}>
              <Image src={slide.image} alt="" fill sizes="(max-width: 560px) 34vw, 24vw" />
              <span><b>{String(index + 1).padStart(2, "0")}</b>{slide.label}</span>
              {index === heroIndex && <i className={heroPaused ? "paused" : ""} />}
            </button>
          ))}
        </div>
        <div className="hero__status"><button onClick={() => setHeroPaused(!heroPaused)} aria-label={heroPaused ? "Resume hero autoplay" : "Pause hero autoplay"}>{heroPaused ? "Play" : "Pause"}</button><span>{String(heroIndex + 1).padStart(2,"0")} / {String(heroSlides.length).padStart(2,"0")}</span></div>
        <a className="scroll-cue" href="#collections"><span>Scroll to discover</span><i/></a>
      </section>

      <div className="marquee" aria-label="Miraya collection highlights"><div>{[...collectionFamilies, ...collectionFamilies].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>

      <section className="collections section" id="collections">
        <header className="section-heading"><p className="eyebrow">Our collections</p><h2>Eight expressions of <em>beauty</em></h2><p>From the warmth of traditional gold to contemporary diamond brilliance.</p></header>
        <div className="collection-list">
          {collectionFamilies.map((item, i) => <a href="#featured" className="collection-pill" key={item}><span>{String(i + 1).padStart(2,"0")}</span>{item}<Icon name="arrow" size={16}/></a>)}
        </div>
      </section>

      <section className="categories section" id="categories">
        <header className="section-heading section-heading--split"><div><p className="eyebrow">Shop by category</p><h2>Find your <em>signature</em></h2></div><p>Pieces for quiet mornings, grand celebrations, and every beautiful moment between.</p></header>
        <div className="category-grid">
          {categories.map((category, i) => <a className={`category-card category-card--${i + 1}`} href="#featured" key={category.name}>
            <div className="category-card__image"><Image src={category.image} alt="" fill sizes="(max-width: 700px) 70vw, 25vw" /></div>
            <div className="category-card__copy"><span>{String(i + 1).padStart(2,"0")}</span><h3>{category.name}</h3><p>{category.note}</p><i><Icon name="arrow" size={17}/></i></div>
          </a>)}
        </div>
      </section>

      <section className="story" id="story">
        <div className="story__image"><Image src="/jewellery/necklace.jpg" alt="Colourful peacock-inspired jewellery set" fill sizes="(max-width: 800px) 100vw, 50vw"/><div className="story__seal"><Brand compact light/><span>Crafted to<br/>be cherished</span></div></div>
        <div className="story__copy"><p className="eyebrow">The Miraya symbol</p><h2>Born from meaning.<br/><em>Made to endure.</em></h2><p>Our mark unites the <strong>M of Miraya</strong>, a teardrop for eternal elegance, and the brilliance of a diamond. It is our promise to create pieces with soul—jewellery that feels distinctly yours today and becomes part of your story tomorrow.</p>
          <div className="symbol-equation"><div><b>M</b><small>Miraya</small></div><i>+</i><div><b className="drop">◊</b><small>Eternal elegance</small></div><i>+</i><div><b>◇</b><small>Diamond brilliance</small></div><i>=</i><div><Brand compact/><small>Miraya symbol</small></div></div>
          <a className="text-link story__link" href="#promise">Discover our story <Icon name="arrow" size={17}/></a>
        </div>
      </section>

      <section className="featured section" id="featured">
        <header className="section-heading"><p className="eyebrow">Curated for you</p><h2>Pieces worth <em>remembering</em></h2></header>
        <div className="filter-tabs" role="tablist" aria-label="Product filters">{["All","Gold","Diamonds","Precious Stones"].map(tab => <button key={tab} className={filter === tab ? "active" : ""} onClick={() => setFilter(tab)}>{tab === "All" ? "Bestsellers" : tab}</button>)}</div>
        <div className="product-grid">
          {visibleProducts.map((product) => <article className="product-card" key={product.name}>
            <div className="product-card__image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 85vw, 25vw"/><span className="product-card__tag">{product.tag}</span><button className={`heart ${favourites.includes(product.name) ? "heart--active" : ""}`} aria-label={`Save ${product.name}`} onClick={() => setFavourites((current) => current.includes(product.name) ? current.filter(x => x !== product.name) : [...current, product.name])}><Icon name="heart" size={18}/></button><button className="product-card__quick" onClick={openBooking}>View in person</button></div>
            <div className="product-card__info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><button aria-label={`Explore ${product.name}`} onClick={openBooking}><Icon name="arrow" size={18}/></button></div>
          </article>)}
        </div>
        {visibleProducts.length === 0 && <p className="empty-state">This edit is being curated. Explore all pieces or book a private viewing.</p>}
      </section>

      <section className="bridal">
        <div className="bridal__copy"><p className="eyebrow">The bridal edit</p><h2>For every<br/><em>forever.</em></h2><p>From your first consultation to the final fitting, we bring your vision to life through heirloom-worthy craft.</p><button className="button button--gold" onClick={openBooking}>Meet your jewellery advisor <Icon name="arrow" size={17}/></button></div>
        <div className="bridal__image"><Image src="/jewellery/bridal.jpg" alt="Diamond bangles from the Miraya bridal edit" fill sizes="(max-width: 800px) 100vw, 55vw"/><div className="bridal__note"><span>Personal curation</span><span>Bespoke design</span><span>Private fitting</span></div></div>
      </section>

      <section className="promise" id="promise">
        {[{icon:"shield" as IconName,title:"Hallmarked gold",text:"Purity you can trust"},{icon:"diamond" as IconName,title:"Certified diamonds",text:"Quality, clearly documented"},{icon:"refresh" as IconName,title:"Lifetime exchange",text:"A promise that endures"},{icon:"truck" as IconName,title:"Insured delivery",text:"Thoughtfully handled"}].map(item => <div key={item.title}><span><Icon name={item.icon} size={27}/></span><p><strong>{item.title}</strong><small>{item.text}</small></p></div>)}
      </section>

      <section className="appointment section">
        <div className="appointment__monogram"><Brand compact light/><span>Miraya<br/>private viewing</span></div>
        <div className="appointment__copy"><p className="eyebrow">A moment, just for you</p><h2>Experience the jewellery<br/><em>beyond the screen.</em></h2><p>Join us in store or meet by video. Your dedicated advisor will prepare a selection around your style and occasion.</p><button className="button button--gold" onClick={openBooking}>Book an appointment <Icon name="calendar" size={17}/></button></div>
      </section>

      <section className="journal section">
        <header className="section-heading section-heading--split"><div><p className="eyebrow">The Miraya journal</p><h2>Stories of <em>craft</em></h2></div><a className="text-link" href="#top">Explore the journal <Icon name="arrow" size={17}/></a></header>
        <div className="journal__grid"><article><div><Image src="/jewellery/earrings.jpg" alt="Diamond jewellery details" fill sizes="50vw"/></div><p className="eyebrow">Jewellery guide</p><h3>How to choose jewellery that feels like you</h3></article><article><div><Image src="/jewellery/bangles.jpg" alt="Emerald and diamond jewellery detail" fill sizes="50vw"/></div><p className="eyebrow">Care &amp; keeping</p><h3>A lifetime of brilliance: caring for your pieces</h3></article></div>
      </section>

      <footer className="footer">
        <div className="footer__brand"><Brand light/><p>Fine jewellery for life’s most meaningful moments.</p><button className="text-link text-link--light" onClick={openBooking}>Book a private viewing <Icon name="arrow" size={17}/></button></div>
        <div><h4>Collections</h4>{collectionFamilies.slice(0,6).map(x => <a href="#collections" key={x}>{x}</a>)}</div>
        <div><h4>Categories</h4>{categories.slice(0,6).map(x => <a href="#categories" key={x.name}>{x.name}</a>)}</div>
        <div><h4>Visit Miraya</h4><p>Private consultations available in store and by video.</p><button onClick={openBooking}>Request an appointment</button><span className="social"><Icon name="instagram"/> Instagram</span></div>
        <div className="footer__bottom"><span>© 2026 Miraya Gold &amp; Diamond</span><span>Privacy · Terms · Accessibility</span></div>
      </footer>
    </main>
  );
}
