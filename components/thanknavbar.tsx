'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const raw = sessionStorage.getItem("appointmentDetails");
    if (raw) {
      const data = JSON.parse(raw);
      setName(data.name || "");
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        .ty-page {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          background: #fff;
          display: flex;
          flex-direction: column;
        }

        /* ── Top accent bar ── */
        .ty-bar {
          height: 5px;
          background: linear-gradient(90deg, #c0174b, #e8527a, #c0174b);
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer { to { background-position: -200% 0; } }

        /* ── Main content ── */
        .ty-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          background: linear-gradient(160deg, #fff 0%, #fdf0f4 60%, #fce8ef 100%);
          position: relative;
          overflow: hidden;
        }

        /* Background glow */
        .ty-main::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(192,23,75,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .ty-card {
          position: relative; z-index: 1;
          background: #fff;
          border-radius: 24px;
          padding: 64px 56px;
          max-width: 520px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 60px rgba(192,23,75,0.1), 0 4px 20px rgba(0,0,0,0.04);
          border: 1px solid rgba(192,23,75,0.1);
          animation: card-in 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes card-in {
          from { opacity:0; transform:translateY(30px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* Check icon */
        .ty-icon-wrap {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c0174b 0%, #8f0f36 100%);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 28px;
          box-shadow: 0 12px 32px rgba(192,23,75,0.35);
          animation: pop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s both;
        }
        @keyframes pop { from { transform:scale(0); } to { transform:scale(1); } }

        .ty-icon-wrap svg {
          width: 38px; height: 38px;
          stroke: #fff; stroke-width: 2.5;
          stroke-linecap: round; stroke-linejoin: round;
          fill: none;
        }

        /* Tag */
        .ty-tag {
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #c0174b; margin-bottom: 12px;
          opacity: 0.8;
        }

        /* Heading */
        .ty-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.9rem, 4vw, 2.4rem);
          font-weight: 700;
          color: #1a0812;
          line-height: 1.18;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }
        .ty-heading em { font-style: italic; color: #c0174b; }

        /* Body */
        .ty-body {
          font-size: 0.95rem;
          color: #7a5060;
          line-height: 1.78;
          font-weight: 400;
          margin-bottom: 36px;
        }

        /* Divider */
        .ty-divider {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, #c0174b, transparent);
          border-radius: 2px;
          margin: 0 auto 32px;
        }

        /* Info pill */
        .ty-info {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fdf0f4;
          border: 1px solid rgba(192,23,75,0.15);
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 0.82rem; font-weight: 500;
          color: #c0174b;
          margin-bottom: 32px;
        }

        /* CTA button */
        .ty-btn {
          background: linear-gradient(135deg, #c0174b 0%, #8f0f36 100%);
          color: #fff; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 14px 40px;
          border-radius: 8px; cursor: pointer;
          box-shadow: 0 6px 24px rgba(192,23,75,0.3);
          transition: all 0.25s;
        }
        .ty-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(192,23,75,0.42); }

        /* ── Footer ── */
        .ty-footer {
          text-align: center;
          padding: 20px;
          background: #fff;
          border-top: 1px solid #f0e4e8;
          font-size: 0.78rem;
          color: #c8aab5;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        /* Responsive */
        @media(max-width:520px) {
          .ty-card { padding: 48px 28px; }
          .ty-heading { font-size: 1.7rem; }
        }
      `}</style>

      <div className="ty-page">

        {/* Top shimmer bar */}
        <div className="ty-bar" />

        {/* Main */}
        <main className="ty-main">
          <div className="ty-card">

            {/* Check icon */}
            <div className="ty-icon-wrap">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <p className="ty-tag">Appointment Confirmed</p>

            <h1 className="ty-heading">
              {name ? `Thank You, ${name.split(" ")[0]}!` : "Thank You!"}
              <br /><em>We'll be in touch.</em>
            </h1>

            <div className="ty-divider" />

            <p className="ty-body">
              Your appointment request has been received. Our team will contact
              you shortly to confirm your consultation slot.
            </p>

            <div className="ty-info">
              ✦ &nbsp;Expected call within 24 hours
            </div>

            <button className="ty-btn" onClick={() => router.push("/")}>
              Back to Home
            </button>

          </div>
        </main>

        {/* Footer */}
        <footer className="ty-footer">
          © 2024 Advanced Gloskin. All rights reserved.
        </footer>

      </div>
    </>
  );
}