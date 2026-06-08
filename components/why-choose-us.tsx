'use client';

import {
  Stethoscope,
  Users,
  TrendingUp,
  Cpu,
  HeartHandshake,
  BadgeCheck,
  MapPin,
  Gift,
} from 'lucide-react';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

const reasons = [
  {
    icon: Stethoscope,
    title: 'Expert Dermatologists',
    desc: 'MBBS-certified dermatologists with 12+ years of clinical experience.',
  },
  {
    icon: Users,
    title: '15,000+ Clients Treated',
    desc: 'Trusted by thousands of clients across Chennai for proven skin results.',
  },
  {
    icon: TrendingUp,
    title: '92% Achievement Rate',
    desc: 'Industry-leading treatment success rate backed by real outcomes.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    desc: 'RF, Q-Switch Laser & HydraFacial machines — cutting-edge, results-driven care.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care Plans',
    desc: 'Every treatment is tailored to your skin type — no one-size-fits-all approach.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    desc: 'Clear, upfront pricing with absolutely no hidden costs or surprises.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    desc: 'Conveniently located in the heart of Velachery, Chennai — easy to reach.',
  },
  {
    icon: Gift,
    title: 'Free Initial Consultation',
    desc: 'Begin your skin journey with a complimentary first consultation — zero cost.',
  },
];

function Card({ item }: { item: (typeof reasons)[number] }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(236,72,153,0.18)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Hover glow fill */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236,72,153,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Top highlight border on hover */}
      <div
        className="absolute inset-x-0 top-0 h-[1.5px] rounded-t-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, transparent, #ec4899 40%, #f9a8d4 60%, transparent)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        {/* Icon */}
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)' }}
        >
          <item.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
        </div>

        {/* Text */}
        <h3 className="text-[15px] font-bold leading-snug" style={{ color: '#fff0f6' }}>
          {item.title}
        </h3>
        <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(249,168,212,0.60)' }}>
          {item.desc}
        </p>
      </div>

      {/* Corner decoration */}
      <div
        className="pointer-events-none absolute -right-4 -bottom-4 h-16 w-16 rounded-full opacity-20 transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }}
      />
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className={`${dmSans.className} relative w-full overflow-hidden max-sm:py-0 max-sm:pt-10 py-16 px-4 sm:px-6 lg:px-8`}
      style={{
        background: 'linear-gradient(160deg, #0d0008 0%, #1a0010 50%, #0d0008 100%)',
      }}
    >
      <style>{`
        @keyframes wcu-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .wcu-marquee {
          animation: wcu-scroll-left 22s linear infinite;
        }
        .wcu-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, #ec4899 30%, #f9a8d4 50%, #ec4899 70%, transparent)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(236,72,153,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 max-sm:mb-6 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.20em]"
            style={{
              background: 'rgba(236,72,153,0.14)',
              border: '1px solid rgba(236,72,153,0.38)',
              color: '#f9a8d4',
            }}
          >
            Advanced Gloskin — Velachery
          </span>

          <h2
            className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
            style={{ color: '#fff0f6' }}
          >
            Why Choose{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }}
            >
              Advanced Gloskin?
            </span>
          </h2>

          {/* Divider */}
          <div
            className="mx-auto mt-4 h-[2px] w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #ec4899, #f9a8d4, transparent)' }}
          />

          <p
            className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: 'rgba(249,168,212,0.65)' }}
          >
            Where science meets personalised care — delivering real results for real skin.
          </p>
        </div>

        {/* ── MOBILE: single-row auto-scrolling marquee ── */}
        <div className="block sm:hidden -mx-4 overflow-hidden">
          {/* Edge fade masks */}
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10"
              style={{ background: 'linear-gradient(90deg, #0d0008, transparent)' }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10"
              style={{ background: 'linear-gradient(270deg, #0d0008, transparent)' }}
            />

            {/* Marquee track — cards duplicated for seamless loop */}
            <div className="wcu-marquee flex gap-4 w-max px-4 py-2">
              {[...reasons, ...reasons].map((item, idx) => (
                <div key={idx} className="w-[230px] flex-shrink-0">
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP: 4-column grid — untouched ── */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>

      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 inset-x-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, #ec4899 30%, #f9a8d4 50%, #ec4899 70%, transparent)',
        }}
      />
    </section>
  );
}
