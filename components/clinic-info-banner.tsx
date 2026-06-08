'use client'

import Image from 'next/image';
import { MapPin, Phone, Globe, Sparkles, CheckCircle } from 'lucide-react';
import ClinicBannerButtons from './clinic-banner-buttons';

const trustItems = [
  'Trusted by 15,000+ Clients',
  'MBBS-Certified Dermatologists',
  'Personalized Care Plans',
];

export default function ClinicInfoBanner() {
  return (
    <section className="relative w-full min-h-[560px] overflow-hidden mt-17 sm:min-h-[620px] md:min-h-[650px]">

      {/* Background Image — mobile */}
      <Image
        src="/mobile-banner.png"
        alt="Advanced Gloskin Skin Clinic Velachery"
        fill
        className="object-cover object-center sm:hidden"
        sizes="100vw"
        priority
      />

      {/* Background Image — desktop */}
      <Image
        src="/banners-img.png"
        alt="Advanced Gloskin Skin Clinic Velachery"
        fill
        className="object-cover object-center hidden sm:block"
        sizes="100vw"
        priority
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(20,0,12,0.90) 0%, rgba(26,0,16,0.80) 45%, rgba(26,0,16,0.30) 75%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] z-10"
        style={{ background: 'linear-gradient(90deg, transparent, #ec4899 30%, #f9a8d4 50%, #ec4899 70%, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-[2px] z-10"
        style={{ background: 'linear-gradient(90deg, transparent, #ec4899 30%, #f9a8d4 50%, #ec4899 70%, transparent)' }} />

      {/* Content left aligned */}
      <div className="relative z-10 flex min-h-[560px] items-center px-4 py-8 sm:min-h-[620px] sm:px-8 md:min-h-[550px] md:px-10 lg:px-16 xl:px-20">
        <div className="w-full max-w-3xl space-y-4 sm:space-y-5">

          {/* Clinic name */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full px-3 py-2 sm:px-4"
            style={{ background: 'rgba(236,72,153,0.15)', border: '1px solid rgba(236,72,153,0.40)' }}>
            <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f9a8d4] sm:text-xs sm:tracking-widest">
              Advanced Gloskin — Velachery, Chennai
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl font-bold leading-snug sm:text-4xl md:text-5xl"
            style={{ color: '#fff0f6' }}>
            Best Skin Clinic in{' '}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }}>
              Velachery, Chennai
            </span>
          </h2>

          {/* Pink divider */}
          <div className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #ec4899, #f9a8d4, transparent)' }} />

          {/* Trust items */}
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)' }}>
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-sm font-semibold" style={{ color: '#f9a8d4' }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Description */}
          <p className="text-sm sm:text-[15px] leading-relaxed"
            style={{ color: 'rgba(255,240,246,0.70)' }}>
            Struggling with{' '}
            <span className="font-semibold text-[#f9a8d4]">dark spots</span>,{' '}
            <span className="font-semibold text-[#f9a8d4]">dull skin</span>,{' '}
            <span className="font-semibold text-[#f9a8d4]">wrinkles</span>, or{' '}
            <span className="font-semibold text-[#f9a8d4]">uneven skin tone</span>?{' '}
            You are in the right place. Advanced Gloskin is Velachery&apos;s most trusted skin
            clinic — where board-certified dermatologists design treatment plans built
            specifically for your skin type, lifestyle, and goals.
          </p>

          <ClinicBannerButtons className="md:justify-start" />

          {/* Thin divider */}
          <div className="h-px w-full" style={{ background: 'rgba(236,72,153,0.22)' }} />

          {/* Contact */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 text-xs" style={{ color: 'rgba(249,168,212,0.62)' }}>
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#ec4899]" />
              <span>Sankaran Avenue, Pandian Street, Velachery, Chennai — 600042</span>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="tel:+918970656789"
              className="flex items-center gap-2.5 text-xs hover:text-[#f9a8d4] transition-colors"
              style={{ color: 'rgba(249,168,212,0.62)' }}>
              <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#ec4899]" />
              +91 89706 56789
            </a>
            <a href="https://www.adgloclinicvelachery.in"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs hover:text-[#f9a8d4] transition-colors"
              style={{ color: 'rgba(249,168,212,0.62)' }}>
              <Globe className="w-3.5 h-3.5 flex-shrink-0 text-[#ec4899]" />
              www.adgloclinicvelachery.in
            </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
