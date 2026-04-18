'use client'

import { useEffect, useRef, useState } from "react";

const MODEL_IMAGE =
  "https://ik.imagekit.io/ti3453sgoo/rejuvenating.jpg"; // replace with your actual image path

const pillars = [
  {
    num: "01",
    title: "Expert Dermatologists",
    desc: "Board-certified specialists with over a decade of hands-on experience in advanced skin care.",
  },
  {
    num: "02",
    title: "Cutting-Edge Technology",
    desc: "State-of-the-art equipment for precise diagnosis and highly effective, lasting treatments.",
  },
  {
    num: "03",
    title: "Personalized Care Plans",
    desc: "Every treatment is uniquely crafted to match your skin type, goals, and lifestyle.",
  },
];

function useVisible() {
  const [v, setV] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

export default function WhoWeAreSection() {
  const { ref, v } = useVisible();
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;1,300;1,700&family=Inter:wght@300;400;500;600&display=swap');

        .wwa2 {
          background: #0e0810;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* Subtle noise texture overlay */
        .wwa2::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        .wwa2-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 680px;
        }

        /* ── LEFT image panel ── */
        .wwa2-img {
          position: relative;
          overflow: hidden;
        }

        .wwa2-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: saturate(0.7) brightness(0.82);
          transition: transform 8s ease;
        }

        .wwa2-img:hover img { transform: scale(1.04); }

        /* Diagonal pink clip on right edge of image */
        .wwa2-img::after {
          content: '';
          position: absolute;
          top: 0; right: -1px; bottom: 0;
          width: 120px;
          background: #0e0810;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        /* Pink accent stripe on image left */
        .wwa2-img-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #e8185a, #ff6b9d, transparent);
          z-index: 3;
        }

        /* Year badge */
        .wwa2-year {
          position: absolute;
          bottom: 48px;
          left: 32px;
          z-index: 5;
          color: #fff;
        }
        .wwa2-year-num {
          font-family: 'Fraunces', serif;
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.5);
        }
        .wwa2-year-lbl {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }

        /* ── RIGHT content panel ── */
        .wwa2-content {
          padding: 80px 72px 80px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
          position: relative;
        }

        /* Top-right decorative circle */
        .wwa2-deco-circle {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 1px solid rgba(232,24,90,0.12);
          pointer-events: none;
        }
        .wwa2-deco-circle::before {
          content: '';
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          border: 1px solid rgba(232,24,90,0.08);
        }

        .wwa2-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #e8185a;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .wwa2-eyebrow::before {
          content: '';
          width: 24px;
          height: 1.5px;
          background: #e8185a;
          display: inline-block;
          border-radius: 2px;
        }

        .wwa2-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.2rem, 3.2vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }
        .wwa2-title em {
          font-style: italic;
          font-weight: 300;
          color: #e8185a;
        }

        .wwa2-body {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.88;
          font-weight: 300;
          margin-bottom: 18px;
          max-width: 400px;
          border-left: 1px solid rgba(232,24,90,0.3);
          padding-left: 18px;
        }

        /* ── Pillar accordion cards ── */
        .wwa2-pillars {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 18px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .wwa2-pillar {
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 20px 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .wwa2-pillar-head {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .wwa2-pillar-num {
          font-family: 'Fraunces', serif;
          font-size: 0.85rem;
          font-weight: 300;
          font-style: italic;
          color: #e8185a;
          opacity: 0.7;
          min-width: 24px;
          transition: opacity 0.3s;
        }

        .wwa2-pillar.open .wwa2-pillar-num { opacity: 1; }

        .wwa2-pillar-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          flex: 1;
          transition: color 0.3s;
          letter-spacing: 0.01em;
        }

        .wwa2-pillar.open .wwa2-pillar-title { color: #fff; }

        .wwa2-pillar-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.3);
          font-size: 0.75rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .wwa2-pillar.open .wwa2-pillar-arrow {
          background: #e8185a;
          border-color: #e8185a;
          color: #fff;
          transform: rotate(45deg);
        }

        .wwa2-pillar-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
          padding-left: 44px;
        }

        .wwa2-pillar.open .wwa2-pillar-body {
          max-height: 100px;
          opacity: 1;
        }

        .wwa2-pillar-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.72;
          font-weight: 300;
          padding-top: 10px;
        }

        /* ── CTA row ── */
        .wwa2-cta {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .wwa2-btn {
          background: #e8185a;
          color: #fff;
          border: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 15px 36px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.28s ease;
          box-shadow: 0 8px 28px rgba(232,24,90,0.35);
        }
        .wwa2-btn:hover {
          background: #c20f47;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(232,24,90,0.48);
        }

        .wwa2-link {
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.1em;
          text-decoration: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.25s;
          background: none;
          border: none;
        }
        .wwa2-link:hover { color: #fff; }
        .wwa2-link::after {
          content: '→';
          font-size: 1rem;
          transition: transform 0.25s;
        }
        .wwa2-link:hover::after { transform: translateX(4px); }

        /* ── Scroll animations ── */
        .fade-l  { opacity:0; transform:translateX(-28px); transition: opacity .75s ease, transform .75s ease; }
        .fade-r  { opacity:0; transform:translateX(28px);  transition: opacity .75s ease, transform .75s ease; }
        .fade-u  { opacity:0; transform:translateY(20px);  transition: opacity .65s ease, transform .65s ease; }
        .show    { opacity:1; transform:translate(0); }
        .dl1 { transition-delay:.05s!important }
        .dl2 { transition-delay:.15s!important }
        .dl3 { transition-delay:.25s!important }
        .dl4 { transition-delay:.35s!important }
        .dl5 { transition-delay:.45s!important }
        .dl6 { transition-delay:.55s!important }

        /* ── Responsive ── */
        @media(max-width:900px) {
          .wwa2-inner { grid-template-columns:1fr; }
          .wwa2-img   { height:420px; order:-1; }
          .wwa2-img::after { clip-path: polygon(100% 90%, 100% 100%, 0 100%); width:100%; height:80px; top:auto; bottom:0; left:0; right:0; }
          .wwa2-content { padding:56px 32px 64px; }
        }

        @media(max-width:500px) {
          .wwa2-img   { height:310px; }
          .wwa2-content { padding:15px 20px 15px; }
          .wwa2-title { font-size:2rem; }
        }
      `}</style>

      <section id="results" className="wwa2">
        <div ref={ref} className="wwa2-inner">

          {/* ══ LEFT — image ══ */}
          <div className={`wwa2-img fade-l ${v ? "show" : ""} dl1`}>
            <div className="wwa2-img-stripe" />
            <img src={MODEL_IMAGE} alt="Skin care professional" />
            <div className="wwa2-year">
              <div className="wwa2-year-num">12</div>
              <div className="wwa2-year-lbl">Years of Excellence</div>
            </div>
          </div>

          {/* ══ RIGHT — content ══ */}
          <div className="wwa2-content">
            <div className="wwa2-deco-circle" />

            <div className={`wwa2-eyebrow fade-r ${v ? "show" : ""} dl1`}>Who We Are</div>

            <h2 className={`wwa2-title fade-r ${v ? "show" : ""} dl2`}>
              Skin Care That's<br />
              <em>Crafted Around</em><br />
              You
            </h2>

            <p className={`wwa2-body fade-r ${v ? "show" : ""} dl3`}>
              Advanced Gloskin is committed to boosting your confidence and
              enhancing your natural radiance through personalized, science-backed
              skin care. Our physicians deliver outstanding outcomes using the
              latest technology — tailored to you.
            </p>

            {/* Accordion pillars */}
            <div className={`wwa2-pillars fade-u ${v ? "show" : ""} dl4`}>
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className={`wwa2-pillar ${active === i ? "open" : ""}`}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div className="wwa2-pillar-head">
                    <span className="wwa2-pillar-num">{p.num}</span>
                    <span className="wwa2-pillar-title">{p.title}</span>
                    <div className="wwa2-pillar-arrow">+</div>
                  </div>
                  <div className="wwa2-pillar-body">
                    <p className="wwa2-pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`wwa2-cta fade-u ${v ? "show" : ""} dl5`}>
              <button     onClick={() => {
      const formElement = document.getElementById('appointment-form');
      if (formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // Adjusts vertical alignment: 'start', 'center', 'end', or 'nearest'
        });
      }
    }}
 className="wwa2-btn">Book Consultation</button>
              <button className="wwa2-link">Explore Services</button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}