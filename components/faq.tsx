'use client'

import { useState, useEffect, useRef } from "react";


const faqs = [
  {
    q: "What are the common skin concerns that can be treated?",
    a: "Our skin treatments address a wide range of concerns, including acne, wrinkles, sun damage, hyperpigmentation, and uneven skin tone. Whether you’re looking to improve the appearance of fine lines or reduce blemishes, we have treatments tailored to your specific needs.",
  },
  {
    q: "How long does it take to see results from skin treatments?",
    a: "The timeline for visible results can vary depending on the type of treatment and individual factors. In general, you may start noticing improvements after a few sessions, but optimal results are typically achieved after a series of treatments. Our experienced professionals will guide you through the process and provide realistic expectations based on your unique circumstances.",
  },
  {
    q: "Are the skin treatments safe for all skin types?",
    a: "Our skin treatments are designed to be safe and effective for various skin types. We offer customized solutions that can be tailored to accommodate sensitive, oily, dry, or combination skin. During your consultation, we will assess your skin and recommend the most suitable treatment options to achieve the desired outcomes while ensuring your safety.",
  },
  {
    q: "Is there any downtime associated with skin treatments?",
    a: "The amount of downtime can vary depending on the specific treatment you choose. While some treatments may have minimal to no downtime, others might involve temporary redness, mild peeling, or slight swelling. Our knowledgeable staff will provide you with post-treatment instructions and recommendations to help you recover comfortably and quickly.",
  },
];

function useVisible() {
  const [v, setV] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold: 0.08 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

export default function FAQSection() {
  const { ref, v } = useVisible();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .faq { font-family:'DM Sans',sans-serif; background:#fff; padding:90px 60px; position:relative; overflow:hidden; }

        /* Ghost watermark */
        .faq::after {
          content:'?';
          position:absolute; bottom:-60px; right:40px;
          font-family:'Cormorant Garamond',serif;
          font-style:italic; font-weight:700;
          font-size:22rem; line-height:1;
          color:rgba(192,23,75,0.03);
          pointer-events:none; user-select:none;
        }

        /* ── Heading ── */
        .faq-head {
          text-align:center; margin-bottom:60px;
        }

        .faq-tag {
          display:inline-flex; align-items:center; gap:10px;
          font-size:0.7rem; font-weight:600;
          letter-spacing:0.26em; text-transform:uppercase;
          color:#c0174b; margin-bottom:16px;
        }
        .faq-tag::before,.faq-tag::after {
          content:''; width:22px; height:1.5px;
          background:#c0174b; border-radius:2px; display:block;
        }

        .faq-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.2rem,3.5vw,3.2rem);
          font-weight:600; line-height:1.15;
          color:#1a0812; letter-spacing:-0.01em;
          margin-bottom:0;
        }
        .faq-title em {
          font-style:italic; color:#c0174b;
        }

        /* ── 2-column grid ── */
        .faq-grid {
          max-width:1060px; margin:0 auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:0 40px;
        }

        /* ── FAQ item ── */
        .faq-item {
          border-bottom:1px solid #f0e0e6;
          cursor:pointer;
          transition:background 0.25s;
        }
        .faq-item:first-child,.faq-item:nth-child(2) { border-top:1px solid #f0e0e6; }
        .faq-item.open { background:#fdf5f7; }

        .faq-q {
          display:flex; align-items:center; gap:16px;
          padding:22px 20px 22px 0;
        }

        .faq-q-num {
          font-family:'Cormorant Garamond',serif;
          font-style:italic; font-size:1.5rem;
          color:#c0174b; opacity:0.4; min-width:24px;
          transition:opacity 0.25s;
          flex-shrink:0;
        }
        .faq-item.open .faq-q-num { opacity:1; }

        .faq-q-text {
          flex:1; font-size:0.94rem; font-weight:600;
          color:#1a0812; line-height:1.4;
          transition:color 0.25s;
        }
        .faq-item.open .faq-q-text { color:#c0174b; }

        .faq-btn {
          width:32px; height:32px; border-radius:50%;
          border:1.5px solid rgba(192,23,75,0.2);
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0; color:#c0174b;
          transition:all 0.35s cubic-bezier(0.4,0,0.2,1);
          background:transparent;
        }
        .faq-item.open .faq-btn {
          background:#c0174b; border-color:#c0174b;
          color:#fff; transform:rotate(45deg);
        }
        .faq-btn svg {
          width:13px; height:13px; stroke:currentColor;
          stroke-width:2.2; stroke-linecap:round; fill:none;
        }

        /* Answer */
        .faq-a {
          max-height:0; overflow:hidden;
          transition:max-height 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
          opacity:0; padding-left:40px;
        }
        .faq-item.open .faq-a { max-height:140px; opacity:1; }

        .faq-a-inner {
          padding-bottom:22px;
          font-size:0.85rem; color:#7a4a58;
          line-height:1.82; font-weight:300;
        }

        /* ── Animations ── */
        .fi { opacity:0; transform:translateY(20px); transition:opacity .65s ease, transform .65s ease; }
        .fi.on { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.05s!important}
        .d2{transition-delay:.13s!important}
        .d3{transition-delay:.21s!important}
        .d4{transition-delay:.29s!important}
        .d5{transition-delay:.37s!important}

        /* ── Responsive ── */
        @media(max-width:768px) {
          .faq { padding:70px 24px; }
          .faq-grid { grid-template-columns:1fr; gap:0; }
          .faq-item:nth-child(2) { border-top:none; }
        }
        @media(max-width:480px) {
          .faq { padding:36px 18px; }
          .faq-title { font-size:1.9rem; }
          .faq-heading { margin-bottom:30px; }
          .faq-q-num { display:none; }
          .faq-q { padding:20px 0; gap:12px; }
        }
      `}</style>

      <section id="faq" className="faq">
        <div ref={ref}>

          <div className="faq-head">
            <div className={`faq-tag fi ${v ? "on" : ""} d1`}>Ask Us Anything</div>
            <h2 className={`faq-title fi ${v ? "on" : ""} d2`}>
              Frequently Asked <em>Questions</em>
            </h2>
          </div>
          <div className="faq-grid">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item fi ${v ? "on" : ""} d${i + 2} ${open === i ? "open" : ""}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="faq-q">
                  <span className="faq-q-num">0{i + 1}</span>
                  <span className="faq-q-text">{f.q}</span>
                  <div className="faq-btn">
                    <svg viewBox="0 0 14 14">
                      <line x1="7" y1="1" x2="7" y2="13" />
                      <line x1="1" y1="7" x2="13" y2="7" />
                    </svg>
                  </div>
                </div>
                <div className="faq-a">
                  <p className="faq-a-inner">{f.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}