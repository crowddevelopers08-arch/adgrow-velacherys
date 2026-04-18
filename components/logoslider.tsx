"use client";

import { useEffect, useRef, useState } from "react";

const DOCTOR_IMAGE =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=90";

/* ── Animated Counter ── */
function Counter({ target }: { target: string }) {
  const num = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/\d/g, "");
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const dur = 1800;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(Math.round(ease * num));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, num]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function useVisible(threshold = 0.1) {
  const [v, setV] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

const metrics = [
  { val: "90%", label: "Diagnostic\nPrecision", col: "#e8185a" },
  { val: "92%", label: "Achievement\nRate", col: "#c0174b" },
  { val: "15K+", label: "Clients\nTransformed", col: "#a8103f" },
  { val: "12+", label: "Years of\nExcellence", col: "#901032" },
];

const steps = [
  {
    n: "01",
    title: "90% Diagnostic Precision",
    body: "Our specialists guarantee optimal treatment tailored to you.",
  },
  {
    n: "02",
    title: "92% Achievement Rate",
    body: "Attain your desired outcomes with assurance.",
  },
];

export default function GloskinApartSection() {
  const section = useVisible();
  const banner = useVisible();
  const [hov, setHov] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Lora:ital,wght@0,400;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .gs2 {
          font-family: 'DM Sans', sans-serif;
          background: #fafafa;
          overflow: hidden;
        }

        /* ══════════════════════════════
           TOP STRIP — full-width metrics
        ══════════════════════════════ */
        .gs2-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #0d0009;
        }

        .gs2-metric {
          padding: 44px 32px;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background 0.3s;
        }

        .gs2-metric:last-child { border-right: none; }
        .gs2-metric:hover { background: rgba(255,255,255,0.02); }

        .gs2-metric-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
        }

        .gs2-metric-val {
          font-family: 'Syne', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #fff;
        }

        .gs2-metric-lbl {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          white-space: pre-line;
          line-height: 1.5;
        }

        /* ══════════════════════════════
           MIDDLE — heading + steps grid
        ══════════════════════════════ */
        .gs2-mid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 100%;
        }

        /* LEFT — sticky heading panel */
        .gs2-mid-left {
          padding: 90px 80px 90px 72px;
          background: #fff;
          border-right: 1px solid #f0e4e8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .gs2-mid-left::after {
          content: '';
          position: absolute;
          top: 50px; bottom: 50px; right: -1px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, #e8185a, transparent);
          opacity: 0.4;
        }

        .gs2-tag {
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #e8185a;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .gs2-tag::before {
          content: '';
          width: 28px; height: 1.5px;
          background: #e8185a;
          border-radius: 2px;
        }

        .gs2-heading {
          font-family: 'Lora', serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 400;
          color: #1a0812;
          line-height: 1.2;
          margin-bottom: 22px;
          letter-spacing: -0.01em;
        }

        .gs2-heading em {
          font-style: italic;
          color: #e8185a;
        }

        .gs2-desc {
          font-size: 0.88rem;
          color: #8a6070;
          line-height: 1.85;
          font-weight: 300;
          margin-bottom: 40px;
          max-width: 340px;
        }

        .gs2-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 13px 28px;
          border-radius: 4px;
          cursor: pointer;
          border: none;
          transition: background 0.25s, transform 0.2s;
          align-self: flex-start;
        }
        .gs2-pill:hover {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          transform: translateY(-2px);
        }
        .gs2-pill-arrow {
          font-size: 1rem;
          transition: transform 0.25s;
        }
        .gs2-pill:hover .gs2-pill-arrow { transform: translateX(4px); }

        /* RIGHT — steps */
        .gs2-mid-right {
          padding: 90px 72px 90px 80px;
          background: #fafafa;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gs2-step {
          display: flex;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid #f0e4e8;
          cursor: default;
          transition: all 0.3s ease;
        }
        .gs2-step:first-child { border-top: 1px solid #f0e4e8; }

        .gs2-step.hov { padding-left: 10px; }

        .gs2-step-num {
          font-family: 'Lora', serif;
          font-size: 1rem;
          font-style: italic;
          font-weight: 400;
          color: #e8185a;
          opacity: 0.5;
          min-width: 28px;
          padding-top: 3px;
          transition: opacity 0.3s;
        }
        .gs2-step.hov .gs2-step-num { opacity: 1; }

        .gs2-step-content {}

        .gs2-step-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1a0812;
          margin-bottom: 7px;
          letter-spacing: 0.01em;
          transition: color 0.3s;
        }
        .gs2-step.hov .gs2-step-title { color: #e8185a; }

        .gs2-step-body {
          font-size: 0.83rem;
          color: #8a6070;
          line-height: 1.7;
          font-weight: 300;
        }

        .gs2-step-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e8185a;
          opacity: 0;
          flex-shrink: 0;
          margin-top: 8px;
          transition: opacity 0.3s;
          align-self: flex-start;
        }
        .gs2-step.hov .gs2-step-dot { opacity: 1; }

        /* ══════════════════════════════
           BOTTOM — CTA banner
        ══════════════════════════════ */
        .gs2-banner {
          background: linear-gradient(110deg, #0d0009 0%, #1e0414 40%, #2c0620 70%, #3a0830 100%);
          padding: 80px 72px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 80px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* Gradient rose glow */
        .gs2-banner::before {
          content: '';
          position: absolute;
          top: -100px; right: 300px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,24,90,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .gs2-banner-left { position: relative; z-index: 2; }

        .gs2-banner-eyebrow {
          font-family: 'Syne', sans-serif;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(232,24,90,0.8);
          margin-bottom: 18px;
        }

        .gs2-banner-title {
          font-family: 'Lora', serif;
          font-size: clamp(1.8rem, 2.6vw, 2.5rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }
        .gs2-banner-title em { font-style: italic; color: #e8527a; }

        .gs2-banner-body {
          font-size: 0.87rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.82;
          font-weight: 300;
          margin-bottom: 38px;
          max-width: 480px;
        }

        .gs2-banner-btns { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }

        .gs2-b-btn {
          background: #e8185a;
          color: #fff;
          border: none;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px 34px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.25s;
          box-shadow: 0 8px 28px rgba(232,24,90,0.35);
        }
        .gs2-b-btn:hover { background: #c0104a; transform: translateY(-2px); }

        .gs2-b-link {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.25s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gs2-b-link:hover { color: #fff; }

        /* Doctor image (banner right) */
        .gs2-banner-img {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .gs2-img-frame {
          width: 300px;
          height: 380px;
          border-radius: 160px 160px 160px 160px;
          overflow: hidden;
          border: 1px solid rgba(232,24,90,0.25);
          box-shadow: 0 0 0 8px rgba(232,24,90,0.06), 0 24px 60px rgba(0,0,0,0.5);
        }

        .gs2-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: saturate(0.8);
        }

        /* ── Animations ── */
        .gs2-fade {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .gs2-fade.on { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay:.05s!important }
        .d2 { transition-delay:.15s!important }
        .d3 { transition-delay:.25s!important }
        .d4 { transition-delay:.35s!important }
        .d5 { transition-delay:.45s!important }

        /* ── Responsive ── */
        @media(max-width:1024px) {
          .gs2-mid { grid-template-columns: 1fr; }
          .gs2-mid-left { padding: 64px 48px; border-right: none; border-bottom: 1px solid #f0e4e8; }
          .gs2-mid-left::after { display: none; }
          .gs2-mid-right { padding: 56px 48px; }
          .gs2-banner { grid-template-columns: 1fr; gap: 48px; padding: 64px 48px; }
          .gs2-banner-img { display: flex; justify-content: center; }
          .gs2-img-frame { width: 260px; height: 320px; }
        }

        @media(max-width:768px) {
          .gs2-metrics { grid-template-columns: repeat(2,1fr); }
          .gs2-metric { border-bottom: 1px solid rgba(255,255,255,0.06); }
          .gs2-mid-left, .gs2-mid-right { padding: 22px 28px; }
          .gs2-banner { padding: 52px 28px; }
          .gs2-metric-val { font-size: 2.3rem; }
        }

        @media(max-width:480px) {
          .gs2-metrics { grid-template-columns: 1fr 1fr; }
          .gs2-metric { padding: 30px 20px; }
          .gs2-heading { font-size: 1.85rem; }
          .gs2-banner-title { font-size: 1.7rem; }
          .gs2-img-frame { width: 220px; height: 280px; }
          .gs2-banner-btns { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section id="about" className="gs2" ref={section.ref}>
        {/* ══ METRICS STRIP ══ */}
        <div className="gs2-metrics">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`gs2-metric gs2-fade ${section.v ? "on" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="gs2-metric-bar"
                style={{
                  background: `linear-gradient(90deg, ${m.col}, transparent)`,
                }}
              />
              <div className="gs2-metric-val" style={{ color: m.col }}>
                <Counter target={m.val} />
              </div>
              <div className="gs2-metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>

        {/* ══ MIDDLE GRID ══ */}
        <div className="gs2-mid">
          {/* Left — heading */}
          <div className="gs2-mid-left">
            <div className={`gs2-tag gs2-fade ${section.v ? "on" : ""} d1`}>
              Why Choose Us
            </div>
            <h2 className={`gs2-heading gs2-fade ${section.v ? "on" : ""} d2`}>
              What Sets
              <br />
              <em>Advanced Gloskin</em>
              <br />
              Apart?
            </h2>

            <button
              onClick={() => {
                const formElement = document.getElementById("appointment-form");
                if (formElement) {
                  formElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center", // Adjusts vertical alignment: 'start', 'center', 'end', or 'nearest'
                  });
                }
              }}
              className={`gs2-pill gs2-fade ${section.v ? "on" : ""} d4`}
            >
              Book Consultation
              <span className="gs2-pill-arrow">→</span>
            </button>
          </div>

          {/* Right — steps */}
          <div className="gs2-mid-right">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`gs2-step gs2-fade ${section.v ? "on" : ""} ${hov === i ? "hov" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              >
                <div className="gs2-step-dot" />
                <span className="gs2-step-num">{s.n}</span>
                <div className="gs2-step-content">
                  <div className="gs2-step-title">{s.title}</div>
                  <div className="gs2-step-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
