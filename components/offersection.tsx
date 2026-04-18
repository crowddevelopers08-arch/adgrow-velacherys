'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { CheckCircle, Sparkles, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const dmSans   = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '800'] });

const images = [
  { src: 'https://ik.imagekit.io/ti3453sgoo/before1.webp',       label: 'Skin Brightening' },
  { src: 'https://ik.imagekit.io/ti3453sgoo/before2.webp',       label: 'Hydrafacial' },
  { src: 'https://ik.imagekit.io/ti3453sgoo/Hydrafacial-2.webp', label: 'Glow Treatment' },
  { src: 'https://ik.imagekit.io/ti3453sgoo/before4.webp',       label: 'White Veil Therapy' },
];

const features = ['White Veil Therapy', 'Hydrafacial', 'Glow Booster Serum'];

export default function SkinOfferSection() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCur(p => (p - 1 + images.length) % images.length);
  const next = () => setCur(p => (p + 1) % images.length);

  return (
    <>
      <style>{`
        @keyframes pink-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%,100% { box-shadow: 0 0 28px rgba(236,72,153,0.3); }
          50%      { box-shadow: 0 0 52px rgba(236,72,153,0.55); }
        }
        .pink-shimmer-text {
          background: linear-gradient(90deg, #ec4899, #f9a8d4, #be185d, #f9a8d4, #ec4899);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pink-shimmer 4s linear infinite;
        }
        .book-btn {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 50%, #ec4899 100%);
          background-size: 200% auto;
          transition: background-position 0.5s ease, transform 0.2s, box-shadow 0.3s;
        }
        .book-btn:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(236,72,153,0.55) !important;
        }
        .book-btn:active { transform: scale(0.97); }
        .img-fade { transition: opacity 0.6s ease; }
        .card-glow { animation: glow-pulse 4s ease-in-out infinite; }
        .feature-item { animation: fadeInUp 0.5s ease both; }
      `}</style>

      <section
        id="offers"
        className={`${dmSans.className} relative py-20 px-4 overflow-hidden`}
        style={{ background: 'linear-gradient(160deg, #1a0010 0%, #2d0020 40%, #1a0018 100%)' }}
      >
        {/* Grain texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px',
          }} />

        {/* Ambient pink glow blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #be185d 0%, transparent 70%)' }} />

        <div className="relative max-w-5xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,transparent,#ec4899)' }} />
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#ec4899]">
                Limited Time Deal
              </span>
              <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,#ec4899,transparent)' }} />
            </div>

            <h2 className={`${playfair.className} text-4xl md:text-5xl font-extrabold leading-tight`}
              style={{ color: '#fff0f6' }}>
              Skin Care{' '}
              <span className="pink-shimmer-text">Special Offer</span>
            </h2>

            <p className="mt-4 text-sm tracking-wide" style={{ color: 'rgba(255,240,246,0.4)' }}>
              Reserve your{' '}
              <span className="font-semibold text-[#f9a8d4]">FREE consultation</span>
              {' '}— limited appointments only
            </p>
          </div>

          {/* ── Main Card ── */}
          <div
            className="card-glow relative rounded-3xl overflow-hidden"
            style={{
              border: '1px solid rgba(236,72,153,0.25)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* top pink line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] z-20"
              style={{ background: 'linear-gradient(90deg,transparent,#ec4899 30%,#f9a8d4 50%,#ec4899 70%,transparent)' }} />

            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* ── LEFT: Carousel ── */}
              <div className="relative h-[320px] md:h-[400px] group overflow-hidden">
                {images.map((img, i) => (
                  <div key={i} className="img-fade absolute inset-0"
                    style={{ opacity: i === cur ? 1 : 0, zIndex: i === cur ? 1 : 0 }}>
                    <Image src={img.src} alt={img.label} fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i === 0} />
                  </div>
                ))}

                {/* cinematic overlays */}
                <div className="absolute inset-0 z-10"
                  style={{ background: 'linear-gradient(to right,rgba(26,0,16,0.35) 0%,transparent 40%)' }} />
                <div className="absolute inset-0 z-10"
                  style={{ background: 'linear-gradient(to top,rgba(26,0,16,0.9) 0%,rgba(26,0,16,0.1) 55%,transparent 100%)' }} />


                {/* dots */}
                <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setCur(i)}
                      className="rounded-full border-0 cursor-pointer transition-all duration-300"
                      style={{
                        width: i === cur ? 24 : 6,
                        height: 6,
                        background: i === cur
                          ? 'linear-gradient(90deg,#ec4899,#f9a8d4)'
                          : 'rgba(255,255,255,0.2)',
                        boxShadow: i === cur ? '0 0 10px rgba(236,72,153,0.7)' : 'none',
                      }} />
                  ))}
                </div>

                {/* arrows */}
                {[
                  { fn: prev, Icon: ChevronLeft, pos: 'left-3' },
                  { fn: next, Icon: ChevronRight, pos: 'right-3' },
                ].map(({ fn, Icon, pos }) => (
                  <button key={pos} onClick={fn}
                    className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110`}
                    style={{
                      background: 'rgba(26,0,16,0.7)',
                      border: '1px solid rgba(236,72,153,0.4)',
                      color: '#ec4899',
                      backdropFilter: 'blur(4px)',
                    }}>
                    <Icon className="w-4 h-4" />
                  </button>
                ))}

                {/* 50% OFF stamp */}
                <div className="absolute top-5 right-5 z-20 w-16 h-16 rounded-full flex flex-col items-center justify-center font-extrabold"
                  style={{
                    background: 'linear-gradient(135deg,#ec4899,#be185d)',
                    boxShadow: '0 4px 24px rgba(236,72,153,0.6)',
                    color: '#fff',
                    fontSize: '11px',
                    lineHeight: 1.1,
                  }}>
                  <span style={{ fontSize: '17px', fontWeight: 900 }}>50%</span>
                  <span>OFF</span>
                </div>
              </div>

              {/* ── RIGHT: Offer Details ── */}
              <div className="relative flex flex-col justify-center gap-6 px-8 py-10"
                style={{ background: 'linear-gradient(160deg,rgba(45,0,32,0.97) 0%,rgba(30,0,22,0.99) 100%)' }}>

                {/* corner glow */}
                <div className="pointer-events-none absolute bottom-0 right-0 w-48 h-48 opacity-15"
                  style={{ background: 'radial-gradient(circle at bottom right,#ec4899,transparent 70%)' }} />

                {/* title */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3"
                    style={{ color: 'rgba(249,168,212,0.65)' }}>
                    Exclusive Package
                  </p>
                  <h3 className={`${playfair.className} text-2xl md:text-[2rem] font-extrabold leading-tight`}
                    style={{ color: '#fff0f6' }}>
                     Skin{' '}
                    <span className="pink-shimmer-text">Treatment</span>
                  </h3>
                </div>

                {/* pink divider */}
                <div className="h-px w-12"
                  style={{ background: 'linear-gradient(90deg,#ec4899,transparent)' }} />

                {/* features */}
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={f} className="feature-item flex items-center gap-3"
                      style={{ animationDelay: `${i * 0.12}s` }}>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(236,72,153,0.12)',
                          border: '1px solid rgba(236,72,153,0.35)',
                        }}>
                        <CheckCircle className="w-3.5 h-3.5 text-[#ec4899]" />
                      </span>
                      <span className="text-sm font-medium" style={{ color: 'rgba(255,240,246,0.75)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#contact"
                    className="book-btn flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold text-white"
                    style={{ boxShadow: '0 8px 32px rgba(236,72,153,0.4)' }}>
                    <Sparkles className="w-4 h-4 flex-shrink-0" />
                    Book Now — Free Consult
                  </a>
                  <a href="tel:+918970656789"
                    className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-sm font-bold transition-all hover:scale-[1.02] active:scale-95"
                    style={{
                      border: '1px solid rgba(236,72,153,0.4)',
                      color: '#f9a8d4',
                      background: 'rgba(236,72,153,0.07)',
                    }}>
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
              </div>

            </div>

            {/* bottom pink line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{ background: 'linear-gradient(90deg,transparent,#ec4899 30%,#f9a8d4 50%,#ec4899 70%,transparent)' }} />
          </div>

        </div>
      </section>
    </>
  );
}