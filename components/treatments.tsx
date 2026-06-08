"use client";

import { useState, useRef, useEffect } from "react";
import ClinicBannerButtons from "./clinic-banner-buttons";

const treatments = [
  {
    id: "hydrafacial",
    number: "01",
    tag: "Deep Cleanse",
    name: "HydraFacial Treatment",
    subtitle: "The world's most loved medical facial — now available near you in Velachery.",
    description:
      "HydraFacial is a 3-step treatment that cleanses, exfoliates, and infuses your skin with customized serums in one session. No downtime. Instant results. Suitable for all skin types. Searching for hydrafacial near me in Chennai? Call us to know the latest HydraFacial price at our Velachery clinic.",
    idealFor: [
      "Dull and dehydrated skin",
      "Clogged pores and blackheads",
      "Uneven skin texture",
      "Early signs of ageing",
      "Oily and acne-prone skin",
    ],
    image: "/images.png",
    imageAlt: "HydraFacial treatment session Velachery Chennai",
  },
  {
    id: "hydraglow",
    number: "02",
    tag: "Instant Glow",
    name: "Hydraglow Facial",
    subtitle: "A luxurious skin treatment combining deep hydration with brightening actives.",
    description:
      "Perfect for those who want that enviable lit-from-within glow — ideal before weddings, parties, or special occasions. This treatment delivers deep nourishment and instant radiance in a single relaxing session.",
    idealFor: [
      "Pre-wedding & event glow prep",
      "Dull and dehydrated skin",
      "Brightening & skin tone evening",
      "Deep nourishment for dry skin",
    ],
    image: "/images1.png",
    imageAlt: "Hydraglow facial glow treatment",
  },
  {
    id: "vitamin-c",
    number: "03",
    tag: "Brightening",
    name: "Vitamin C Infusion",
    subtitle: "One of the most powerful antioxidants for the skin — brightening pigmentation and evening skin tone.",
    description:
      "Our Vitamin C infusion treatment delivers this active ingredient directly into the skin at clinical concentrations, far beyond what any topical cream can achieve — fighting free radicals and restoring luminosity.",
    idealFor: [
      "Dull and uneven skin tone",
      "Sun-damaged skin",
      "Early signs of ageing",
      "Skin brightening before events",
    ],
    image: "/images2.png",
    imageAlt: "Vitamin C infusion brightening treatment",
  },
  {
    id: "oxygen",
    number: "04",
    tag: "Skin Revival",
    name: "Oxygen Therapy",
    subtitle: "Used by top skin clinics globally — floods the skin with pure oxygen and nutrients.",
    description:
      "Oxygen therapy restores radiance, improves circulation, and accelerates skin cell renewal. A favourite for anyone with tired or stressed skin. Ask about our exclusive packages combining HydraFacial + Vitamin C Infusion + White Veil Therapy at 50% OFF.",
    idealFor: [
      "Tired and stressed-looking skin",
      "Poor skin circulation",
      "Post-event skin recovery",
      "Radiance boost for all skin types",
    ],
    image: "/images3.png",
    imageAlt: "Oxygen therapy skin revival treatment",
  },
];

function ContactForm() {
  return (
    <div className="mt-5 rounded-xl p-4"
      style={{ background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.20)' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#f9a8d4", marginBottom: 10 }}>
        Book a Consultation
      </p>
      <ClinicBannerButtons variant="dark" className="max-w-md md:max-w-none" />
    </div>
  );
}

export default function SkinTreatments() {
  const [active, setActive] = useState("red-light");
  const current = treatments.find((t) => t.id === active) ?? treatments[0];
  const activeIndex = treatments.findIndex((t) => t.id === active);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) { isMounted.current = true; return; }
    const container = tabsScrollRef.current;
    if (!container) return;
    const activeBtn = container.querySelector<HTMLButtonElement>(".sk-tab.active");
    if (activeBtn) activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const goPrev = () => { if (activeIndex > 0) setActive(treatments[activeIndex - 1].id); };
  const goNext = () => { if (activeIndex < treatments.length - 1) setActive(treatments[activeIndex + 1].id); };

  return (
    <>
      <style>{`
        .sk-root * { box-sizing: border-box; }
        .sk-root { font-family: var(--font-outfit); }

        .sk-eyebrow-l { height:1px; width:60px; background:linear-gradient(90deg,transparent,#ec4899); }
        .sk-eyebrow-r { height:1px; width:60px; background:linear-gradient(90deg,#ec4899,transparent); }

        .sk-fade {
          animation: skFade 0.35s ease forwards;
        }
        @keyframes skFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sk-tab {
          flex: 1;
          text-align: left;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(236,72,153,0.12);
          background: rgba(236,72,153,0.03);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .sk-tab:hover {
          border-color: rgba(236,72,153,0.28);
          background: rgba(236,72,153,0.06);
        }
        .sk-tab.active {
          border-color: rgba(236,72,153,0.55) !important;
          background: rgba(236,72,153,0.10) !important;
        }

        .sk-ideal li {
          position: relative;
          padding-left: 15px;
          color: rgba(255,240,246,0.65);
          font-size: 13px;
          line-height: 1.6;
        }
        .sk-ideal li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          background: #ec4899;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(236,72,153,0.5);
        }

        .sk-img-wrap {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #111;
          min-height: 360px;
        }

        .sk-tabs-scroll {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .sk-tabs-scroll::-webkit-scrollbar { display: none; }

        @media (min-width: 641px) {
          .sk-call-wrapper { display: none !important; }
        }

        @media (max-width: 1023px) {
          .sk-grid { grid-template-columns: 1fr !important; }
          .sk-img-wrap { min-height: 260px; }
        }

        @media (max-width: 580px) {
          .sk-tab { flex: 0 0 auto; min-width: 130px; }
          .sk-img-wrap { min-height: 220px; }
          .sk-root { padding: 42px 14px !important; }
        }

        .sk-arrow {
          display: none;
          flex-shrink: 0;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(236,72,153,0.25);
          background: rgba(236,72,153,0.07);
          color: #f9a8d4;
          cursor: pointer;
          align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }
        .sk-arrow:hover:not(:disabled) {
          background: rgba(236,72,153,0.18);
          border-color: rgba(236,72,153,0.50);
        }
        .sk-arrow:disabled { opacity: 0.28; cursor: default; }

        @media (max-width: 640px) {
          .sk-arrow { display: flex; }
          .sk-tabs-row { display: flex; align-items: center; gap: 8px; }
          .sk-tabs-scroll { margin-bottom: 0; flex: 1; }
        }
      `}</style>

      <section
        id="skin-treatments"
        className="sk-root"
        style={{
          background: 'linear-gradient(160deg, #1a0010 0%, #2d0020 40%, #1a0018 100%)',
          padding: "60px 16px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 10 }}>
              <div className="sk-eyebrow-l" />
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#ec4899" }}>
                Treatments for Dull &amp; Dry Skin
              </span>
              <div className="sk-eyebrow-r" />
            </div>
            <h2 style={{ fontSize: "clamp(26px,4.5vw,44px)", fontWeight: 700, color: "#fff0f6", lineHeight: 1.2, margin: "0 0 4px" }}>
              Hydrafacial &amp; Glow Treatments —
            </h2>
            <h2 style={{
              fontFamily: "var(--font-outfit)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(20px,3.2vw,38px)",
              lineHeight: 1.25,
              margin: "0 0 16px",
              background: "linear-gradient(90deg, #ec4899, #f9a8d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              For Dull, Dry, and Tired Skin
            </h2>
            <p style={{ color: "rgba(255,240,246,0.50)", fontSize: 14, maxWidth: 920, lineHeight: 1.7, margin: "0 auto" }}>
              Stress, pollution, sun exposure, and irregular sleep can strip your skin of its natural glow. Our hydration and glow treatments deliver instant radiance — deeply cleansing, nourishing, and reviving your skin in a single session.
            </p>
          </div>

          {/* ── Tabs ── */}
          <div className="sk-tabs-row" style={{ marginBottom: 24 }}>
            <button className="sk-arrow" onClick={goPrev} disabled={activeIndex === 0} aria-label="Previous treatment">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="sk-tabs-scroll" ref={tabsScrollRef}>
              {treatments.map((t) => (
                <button key={t.id} onClick={() => setActive(t.id)} className={`sk-tab${active === t.id ? " active" : ""}`}>
                  <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 3, color: active === t.id ? "#ec4899" : "rgba(255,240,246,0.25)" }}>
                    {t.number}
                  </span>
                  <span style={{ display: "block", fontSize: 13, fontWeight: 600, lineHeight: 1.35, color: active === t.id ? "#fff0f6" : "rgba(255,240,246,0.48)" }}>
                    {t.name}
                  </span>
                  <span style={{ display: "block", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 3, color: active === t.id ? "rgba(249,168,212,0.75)" : "rgba(255,240,246,0.18)" }}>
                    {t.tag}
                  </span>
                </button>
              ))}
            </div>

            <button className="sk-arrow" onClick={goNext} disabled={activeIndex === treatments.length - 1} aria-label="Next treatment">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* ── Card ── */}
          <div
            key={active}
            className="sk-fade sk-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {/* LEFT — Image */}
            <div className="sk-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={current.imageAlt}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,0,16,0.75) 0%, transparent 55%)" }} />
              {/* Top pink accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #ec4899, #f9a8d4, transparent)" }} />
              <div style={{ position: "absolute", bottom: 14, left: 14 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff0f6", background: "rgba(236,72,153,0.25)", border: "1px solid rgba(236,72,153,0.45)", padding: "5px 12px", borderRadius: 20, backdropFilter: "blur(6px)" }}>
                  {current.name}
                </span>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div style={{ display: "flex", flexDirection: "column" }}>

              {/* number + tag */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#ec4899" }}>{current.number}</span>
                <span style={{ flex: 1, height: 1, background: "rgba(236,72,153,0.20)" }} />
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#f9a8d4", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.30)", padding: "4px 10px", borderRadius: 20 }}>
                  {current.tag}
                </span>
              </div>

              {/* title */}
              <h3 style={{ fontFamily: "var(--font-outfit)", fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: "#fff0f6", lineHeight: 1.2, marginBottom: 6 }}>
                {current.name}
              </h3>

              {/* subtitle */}
              <p style={{ color: "#f9a8d4", fontSize: 13, fontWeight: 500, lineHeight: 1.5, marginBottom: 12 }}>
                {current.subtitle}
              </p>

              {/* description */}
              <p style={{ color: "rgba(255,240,246,0.50)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
                {current.description}
              </p>

              {/* ideal for */}
              <div style={{ background: "rgba(236,72,153,0.05)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: 14, padding: "14px 16px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#ec4899", marginBottom: 10 }}>
                  Ideal For
                </p>
                <ul className="sk-ideal" style={{ display: "flex", flexDirection: "column", gap: 6, listStyle: "none", margin: 0, padding: 0 }}>
                  {current.idealFor.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
