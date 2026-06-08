'use client';

import { CalendarCheck, Phone } from 'lucide-react';

function scrollToContact() {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

type ClinicBannerButtonsProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export default function ClinicBannerButtons({ variant = 'dark', className = '' }: ClinicBannerButtonsProps) {
  const isLight = variant === 'light';

  return (
    <div className={`flex w-full max-w-full flex-col gap-2.5 pt-1 md:w-auto md:flex-row md:items-center md:gap-3 ${className}`}>
      <button
        type="button"
        onClick={scrollToContact}
        className="inline-flex min-h-11 w-full max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-[13px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 md:w-auto md:gap-2.5 md:px-5 md:py-3 md:text-sm"
        style={{
          background: 'linear-gradient(135deg, #ec4899, #be185d)',
        }}
      >
        <CalendarCheck className="h-4 w-4" />
        Book Appointment
      </button>

      <a
        href="tel:+918970656789"
        className="inline-flex min-h-11 w-full max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border px-4 py-2.5 text-[13px] font-bold transition-colors hover:bg-white/10 md:w-auto md:gap-2.5 md:px-5 md:py-3 md:text-sm"
        style={{
          borderColor: isLight ? 'rgba(236,72,153,0.34)' : 'rgba(249,168,212,0.45)',
          color: isLight ? '#be185d' : '#fff0f6',
          background: isLight ? 'rgba(236,72,153,0.07)' : 'rgba(255,255,255,0.06)',
        }}
      >
        <Phone className="h-4 w-4 text-[#f9a8d4]" />
        Call Now
      </a>
    </div>
  );
}
