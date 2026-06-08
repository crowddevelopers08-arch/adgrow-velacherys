'use client'

import { Zap, Droplets, Sparkles, Stethoscope } from 'lucide-react';
import ClinicBannerButtons from './clinic-banner-buttons';

const conditions = [
  {
    number: '01',
    icon: Zap,
    title: 'Acne & Acne Scars',
    description:
      'Persistent acne can be frustrating — especially when home remedies and over-the-counter creams stop working. Our acne treatment plan combines clinical peels, medical-grade skincare, and targeted laser therapy to clear active breakouts and fade acne scars effectively.',
    note: null,
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Dry & Flaky Skin',
    description:
      "Dry skin is not just a seasonal problem — it can signal a deeper skin barrier issue. Our dry skin treatment protocol restores your skin's natural moisture barrier using medical hydration therapies, customized skincare prescriptions, and nourishing treatments.",
    note: null,
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Wart Removal',
    description:
      'Warts are caused by a viral infection and can appear on the face, hands, feet, or anywhere on the body. Our certified dermatologists offer safe, scar-free wart removal using the latest techniques.If you are looking for a wart specialist near you in Chennai, our Velachery clinic is the right choice.',
    note: null,
  },
  {
    number: '04',
    icon: Stethoscope,
    title: 'Skin Diseases & Dermatology Consultation',
    description:
      'Rashes, infections, chronic skin conditions, or unusual spots — do not ignore them. Our board-certified skin doctors provide expert diagnosis and evidence-based treatment for all types of skin diseases.If you are searching for a dermatologist near Velachery, a skin specialist in Chennai, or a doctor for skin disease — book your consultation with us today.',
    note: null,
  },
];

export default function SkinConditions() {
  return (
    <section
      className="w-full px-4 py-10 sm:px-6 sm:py-12 md:py-12 lg:px-10 lg:py-8"
      style={{ background: 'linear-gradient(160deg, #fff0f8 0%, #fdf4f9 60%, #ffffff 100%)' }}
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Header ── */}
        <div className="mx-auto mb-10 max-w-5xl space-y-4 text-center sm:mb-12 lg:mb-14">

          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-pink-200 bg-white px-3 py-2 shadow-sm sm:px-4">
            <Stethoscope className="h-3.5 w-3.5 flex-shrink-0 text-[#ec4899]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent sm:text-xs sm:tracking-widest">
              Advanced Gloskin — Velachery
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Common Skin Conditions{' '}
            <span className="inline-block bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
              We Treat
            </span>
          </h2>

          <div
            className="mx-auto w-14 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #ec4899, #be185d)' }}
          />

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-[17px]">
            Our dermatologists are experienced in diagnosing and treating a wide range of skin
            concerns — from chronic conditions to cosmetic goals.
          </p>

        </div>

        {/* ── Cards Row ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {conditions.map(({ number, icon: Icon, title, description, note }) => (
            <div
              key={number}
              className="relative flex min-h-[230px] flex-col gap-3 overflow-hidden rounded-2xl bg-white px-4 py-5 sm:min-h-[280px] sm:px-5 sm:py-6 lg:min-h-0"
              style={{
                boxShadow: '0 2px 24px rgba(236,72,153,0.08)',
                border: '1px solid rgba(236,72,153,0.14)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(90deg, #ec4899, #be185d, transparent)' }}
              />

              {/* Watermark number */}
              <span
                className="pointer-events-none absolute right-4 top-2 select-none text-5xl font-extrabold leading-none sm:text-6xl"
                style={{ color: 'rgba(236,72,153,0.06)', fontFamily: 'serif' }}
              >
                {number}
              </span>

              {/* Icon */}
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #be185d)',
                  boxShadow: '0 4px 14px rgba(236,72,153,0.30)',
                }}
              >
                <Icon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-bold leading-snug text-gray-900 sm:text-[17px]">
                {title}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-[2px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #ec4899, #be185d)' }}
              />

              {/* Description */}
              <p className="flex-1 text-[13px] leading-relaxed text-gray-600">
                {description}
              </p>

              {/* Note */}
              {note && (
                <div
                  className="relative rounded-xl px-4 py-3 mt-1 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(236,72,153,0.10) 0%, rgba(190,24,93,0.07) 100%)',
                    border: '1px solid rgba(236,72,153,0.28)',
                  }}
                >
                  {/* left highlight bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                    style={{ background: 'linear-gradient(to bottom, #ec4899, #be185d)' }}
                  />
                  <p className="text-[12px] font-semibold leading-[1.65] pl-1"
                    style={{ color: '#be185d' }}>
                    {note}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center px-0 sm:mt-8 sm:px-4">
          <ClinicBannerButtons variant="light" className="max-w-md md:max-w-none md:justify-center" />
        </div>

      </div>
    </section>
  );
}
