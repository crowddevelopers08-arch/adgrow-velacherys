'use client'

import { CheckCircle, Layers, RefreshCcw, Sparkles } from 'lucide-react';
import ClinicBannerButtons from './clinic-banner-buttons';

const treats = [
  'Acne and post-acne dark marks',
  'Hyperpigmentation and melasma',
  'Sun damage and tanning',
  'Rough, uneven, or flaky skin texture',
  'Fine lines and early wrinkles',
  'Enlarged pores',
  'Dull and tired-looking skin',
];

const peelTypes = [
  {
    title: 'Superficial Peels',
    description:
      'Gentle exfoliating peels for mild concerns - zero downtime, perfect for a quick skin refresh.',
  },
  {
    title: 'Medium-Depth Peels',
    description:
      'For deeper pigmentation, acne scars, and uneven texture - minimal recovery time with significant results.',
  },
  {
    title: 'Deep Peels',
    description:
      'Prescribed for severe sun damage or deep wrinkles - supervised by our certified dermatologists.',
  },
];

export default function FacialPeelingTreatment() {
  return (
    <section
      className="relative overflow-hidden px-4 py-10 sm:px-6 md:py-12 lg:px-10 lg:py-14"
      style={{ background: 'white' }}
    >


      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-between rounded-2xl border border-pink-100 bg-white/85 p-5 sm:p-8 lg:p-10">
            <div className="space-y-5">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-2 sm:px-4">
                <Sparkles className="h-3.5 w-3.5 text-[#ec4899]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#be185d] sm:text-xs sm:tracking-widest">
                  Facial Peeling Treatment
                </span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Facial Peeling Treatment <span className="text-[#be185d]">&mdash; Reset Your Skin</span>
              </h2>

              <div
                className="h-[3px] w-16 rounded-full"
                style={{ background: 'linear-gradient(90deg, #ec4899, #be185d)' }}
              />

              <p className="text-sm leading-relaxed text-gray-600 sm:text-[17px]">
                A facial peeling treatment &mdash; also known as a chemical peel or skin peel &mdash; is one of the most effective and versatile procedures in dermatology. It uses medical-grade peeling agents to remove the outermost layer of damaged or dull skin, triggering natural regeneration for visibly fresher, smoother, and more even skin.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-pink-200 bg-pink-50/80 p-4 text-sm font-medium leading-relaxed text-[#9d174d] sm:p-5">
              All peel treatments at Advanced Gloskin are performed by MBBS-certified skin doctors using internationally approved formulations. Affordable chemical peel treatment cost in Chennai &mdash; ask us during your free consultation.
            </div>

            <ClinicBannerButtons variant="light" className="mt-5 max-w-md md:max-w-none" />
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-pink-100 bg-white p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #be185d)',
                    boxShadow: '0 8px 22px rgba(236,72,153,0.28)',
                  }}
                >
                  <RefreshCcw className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                  What Does a Facial Peeling Treat?
                </h3>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {treats.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-xl bg-pink-50/70 px-3 py-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ec4899]" />
                    <span className="text-sm leading-snug text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-pink-100 bg-[#1a0010] p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #be185d)',
                    boxShadow: '0 8px 22px rgba(236,72,153,0.38)',
                  }}
                >
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#fff0f6] sm:text-2xl">
                  Types of Facial Peels Available
                </h3>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {peelTypes.map((peel) => (
                  <div key={peel.title} className="rounded-xl border border-pink-300/20 bg-white/5 p-4">
                    <h4 className="mb-2 text-sm font-bold text-[#f9a8d4]">{peel.title}</h4>
                    <p className="text-sm leading-relaxed text-pink-50/70">{peel.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
