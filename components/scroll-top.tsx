'use client'

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes tickerUp {
          0%   { transform: translateY(0);    opacity: 1; }
          45%  { transform: translateY(-100%); opacity: 0; }
          46%  { transform: translateY(100%);  opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes sttFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.85); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes sttFadeOut {
          from { opacity: 1; transform: translateY(0)   scale(1); }
          to   { opacity: 0; transform: translateY(20px) scale(0.85); }
        }

        .stt-btn {
          position: fixed;
          bottom: 30px;
          right: 20px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
        }
        .stt-btn.show { animation: sttFadeIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }
        .stt-btn.hide { animation: sttFadeOut 0.3s ease both; pointer-events: none; }

        /* Circle */
        .stt-circle {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ec4899, #be185d);
          box-shadow: 0 6px 24px rgba(236,72,153,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floatY 3s ease-in-out infinite;
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .stt-btn:hover .stt-circle {
          box-shadow: 0 10px 36px rgba(236,72,153,0.65);
          transform: scale(1.08);
          animation: none;
        }
        .stt-btn:active .stt-circle { transform: scale(0.94); }

        /* Ripple ring */
        .stt-ripple {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(236,72,153,0.5);
          animation: ripple 2s ease-out infinite;
        }
        .stt-ripple2 {
          animation-delay: 0.7s;
        }

        /* Arrow */
        .stt-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          position: relative;
          z-index: 1;
        }
        .stt-arrow svg {
          width: 18px;
          height: 18px;
          color: #fff;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
        }

        /* Ticker text */
        .stt-label {
          overflow: hidden;
          height: 16px;
          display: flex;
          align-items: center;
        }
        .stt-label span {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #be185d;
          display: inline-block;
          animation: tickerUp 3s ease-in-out infinite;
          white-space: nowrap;
        }

        @media (max-width: 480px) {
          .stt-btn { bottom: 80px; right: 14px; }
          .stt-circle { width: 46px; height: 46px; }
        }
      `}</style>

      <button
        className={`stt-btn ${visible ? 'show' : 'hide'}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
        style={{ display: visible ? 'flex' : 'none' }}
      >
        {/* Animated text label */}
        <div className="stt-label">
          <span>Back to Top</span>
        </div>

        {/* Circle with ripple + arrow */}
        <div className="stt-circle">
          <div className="stt-ripple" />
          <div className="stt-ripple stt-ripple2" />
          <div className="stt-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>
        </div>
      </button>
    </>
  );
}
