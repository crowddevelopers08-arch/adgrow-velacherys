"use client";

import { useEffect, useRef, useState } from "react";

const DOCTOR_IMAGE = "https://ik.imagekit.io/ti3453sgoo/cosmetologist.jpg"; // replace with your actual image path

export default function CTABanner() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Lato:wght@400;600;700&display=swap');

        /* Base responsive styles */
        * {
          box-sizing: border-box;
        }

        .cta-fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cta-fade-up.on { opacity: 1; transform: translateY(0); }

        .cta-fade-right {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .cta-fade-right.on { opacity: 1; transform: translateX(0); }

        .cta-d1 { transition-delay: 0.1s; }
        .cta-d2 { transition-delay: 0.25s; }
        .cta-d3 { transition-delay: 0.4s; }
        .cta-d4 { transition-delay: 0.55s; }
        .cta-d5 { transition-delay: 0.65s; }

        /* Book Appointment — sweep button */
        .book-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.4s ease, border-color 0.4s ease;
          width: 100%;
        }
        
        @media (min-width: 640px) {
          .book-btn { width: auto; }
        }

        .book-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          z-index: 0;
        }
        .book-btn:hover::before { transform: translateX(0); }
        .book-btn:hover { color: #ffffff; }
        .book-btn span { position: relative; z-index: 1; }

        /* Explore Services — slide chevron */
        .explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.75rem 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          color: #db2777;
          border-bottom: 2px solid #f9a8d4;
          transition: border-color 0.3s ease;
        }

        @media (min-width: 640px) {
          .explore-btn {
            font-size: 1rem;
            gap: 0.5rem;
          }
        }

        .explore-btn:hover {
          border-bottom-color: #ec4899;
        }

        .explore-btn .e-text,
        .explore-btn .e-arrow {
          display: inline-block;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .explore-btn:hover .e-text { transform: translateX(-4px); }
        .explore-btn:hover .e-arrow { transform: translateX(6px); }

        /* Image frame decorative ring */
        .img-ring::before {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 9999px;
          border: 2px dashed rgba(236,72,153,0.3);
          animation: spin-slow 18s linear infinite;
        }

        @media (max-width: 640px) {
          .img-ring::before {
            inset: -6px;
            border-width: 1.5px;
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Floating badges responsive */
        .floating-badge {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid #fce7f3;
        }

        @media (max-width: 480px) {
          .floating-badge {
            padding: 0.375rem 0.5rem;
            border-radius: 0.75rem;
          }
          .floating-badge span:first-child {
            font-size: 1rem;
          }
        }

        /* Badge text responsive */
        .badge-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: #1f2937;
          line-height: 1.2;
        }

        .badge-sub {
          font-size: 0.625rem;
          color: #9ca3af;
          line-height: 1.2;
          margin-top: 0.125rem;
        }

        @media (min-width: 640px) {
          .badge-title { font-size: 0.875rem; }
          .badge-sub { font-size: 0.75rem; }
        }

        /* Trust badges responsive */
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: #9ca3af;
          font-size: 0.75rem;
          font-weight: 500;
        }

        @media (min-width: 640px) {
          .trust-badge {
            font-size: 0.875rem;
            gap: 0.5rem;
          }
        }

        /* OVERFLOW FIX */
        .cta-section-wrapper {
          overflow: hidden;
          width: 100%;
          max-width: 100vw;
        }
      `}</style>

      <section
        id="reviews"
        ref={ref}
        className="cta-section-wrapper w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32"
        style={{
          background:
            "linear-gradient(135deg, #fff0f6 0%, #fce7f3 50%, #fdf2f8 100%)",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16" style={{ overflow: 'visible' }}>
          {/* ── LEFT: Text Content ── */}
          <div className="flex-1 flex flex-col items-start gap-4 sm:gap-5 text-left w-full" style={{ overflow: 'visible' }}>
            {/* Eyebrow */}
            <div
              className={`cta-fade-up cta-d1 ${visible ? "on" : ""} inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-pink-300 bg-white/70 backdrop-blur-sm`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span
                className="text-pink-500 text-xs sm:text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Begin Your Journey
              </span>
            </div>

            {/* Title */}
            <h3
              className={`cta-fade-up cta-d2 ${visible ? "on" : ""} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Start Your Path to <br className="hidden xs:block" />
              <em
                className="not-italic text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ec4899, #be185d)",
                }}
              >
                Glowing, Healthy
              </em>{" "}
              Skin
            </h3>

            {/* Body */}
            <p
              className={`cta-fade-up cta-d3 ${visible ? "on" : ""} text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl`}
            >
              Reserve your tailored consultation and meet our physician for
              expert guidance. Receive a thorough skin evaluation and embark on
              your transformation — with personalized treatments crafted for a
              renewed, radiant you.
            </p>

            {/* Divider */}
            <div
              className={`cta-fade-up cta-d3 ${visible ? "on" : ""} w-12 sm:w-16 h-0.5 rounded-full`}
              style={{
                background: "linear-gradient(to right, #ec4899, #be185d)",
              }}
            />

            {/* Buttons */}
            <div
              className={`cta-fade-up cta-d4 ${visible ? "on" : ""} flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-1 w-full sm:w-auto`}
            >
              {/* Book Appointment — sweep fill */}
              <button
                onClick={() => {
                  const formElement =
                    document.getElementById("appointment-form");
                  if (formElement) {
                    formElement.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
                className="book-btn inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-md text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                }}
              >
                <span>Book Appointment</span>
              </button>

              {/* Explore Services — slide arrow */}
              <button className="explore-btn justify-center sm:justify-start">
                <span className="e-text">Explore Services</span>
                <span className="e-arrow text-base sm:text-lg">→</span>
              </button>
            </div>

            {/* Trust badges */}
            <div
              className={`cta-fade-up cta-d5 ${visible ? "on" : ""} flex flex-wrap items-center gap-4 sm:gap-6 mt-2`}
            >
              {[
                "500+ Happy Clients",
                "MBBS Certified",
                "Personalised Care",
              ].map((badge) => (
                <div
                  key={badge}
                  className="trust-badge"
                >
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Doctor Image ── */}
          <div
            className={`cta-fade-right cta-d3 ${visible ? "on" : ""} flex-shrink-0 flex items-center justify-center w-full lg:w-auto`}
            style={{ overflow: 'visible' }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
              {/* Decorative spinning ring */}
              <div className="img-ring absolute inset-0 rounded-full" />

              {/* Soft glow bg */}
              <div
                className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full blur-xl sm:blur-2xl opacity-40"
                style={{
                  background: "radial-gradient(circle, #f9a8d4, #ec4899)",
                }}
              />

              {/* Image circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg sm:shadow-2xl">
                <img
                  src={DOCTOR_IMAGE}
                  alt="Dermatologist"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 floating-badge">
                <span className="text-base sm:text-lg">⭐</span>
                <div>
                  <div className="badge-title">4.9 / 5</div>
                  <div className="badge-sub">Rating</div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 floating-badge">
                <span className="text-base sm:text-lg">🩺</span>
                <div>
                  <div className="badge-title">Expert Care</div>
                  <div className="badge-sub">Certified MD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}