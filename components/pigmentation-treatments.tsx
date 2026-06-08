'use client';

import Image from 'next/image';
import { useEffect, useState, type CSSProperties } from 'react';
import { CheckCircle, Layers, ScanLine, Sparkles, Zap } from 'lucide-react';
import ClinicBannerButtons from './clinic-banner-buttons';

const treatments = [
  {
    icon: Layers,
    number: '01',
    image: '/rejuvenating.jpg',
    title: 'Skin Renewal Peels',
    subtitle: 'Chemical Peel Treatment',
    description:
      'One of the most effective solutions for dull skin, pigmentation, acne marks, and uneven texture. A medical-grade chemical peel gently removes the damaged outer layer of skin, revealing fresher, brighter skin underneath.',
    listLabel: 'What it treats',
    points: [
      'Sun damage and tan removal',
      'Dark spots and post-acne marks',
      'Uneven skin tone and rough texture',
      'Dry and flaky skin',
    ],
    note: 'Consultation-based pricing | Affordable chemical peel cost in Chennai',
  },
  {
    icon: ScanLine,
    number: '02',
    image: '/female12.avif',
    title: 'Microdermabrasion',
    subtitle: 'Non-Invasive Skin Refresh',
    description:
      'A non-invasive treatment that uses fine crystals to gently exfoliate and resurface the skin. Ideal for people looking for a quick, zero-downtime skin refresh - great before events too.',
    listLabel: 'Best suited for',
    points: [
      'Dull and tired-looking skin',
      'Fine lines and early ageing signs',
      'Enlarged pores',
      'Mild acne scarring',
    ],
    note: null,
  },
  {
    icon: Zap,
    number: '03',
    image: '/laser.jpg',
    title: 'Q-Switched Laser',
    subtitle: 'Dark Spot Removal',
    description:
      'Our Q-Switched Nd:YAG laser is clinically proven to break down melanin deposits deep in the skin - effectively fading pigmentation, sunspots, melasma, and age spots with minimal side effects.',
    listLabel: 'Key benefits',
    points: [
      'Targets stubborn deep pigmentation',
      'Safe for Indian skin tones',
      'Minimal downtime',
      'Visible results within a few sessions',
    ],
    note: 'Ask us about laser dark spot removal cost near Velachery during your free consultation.',
  },
];

export default function PigmentationTreatments() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % treatments.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden px-4 py-10 sm:px-6 md:py-8 lg:px-10"
      style={{ background: 'linear-gradient(160deg, #fff0f6 0%, #fce7f3 50%, #fff5f9 100%)' }}
    >
      <style>{`
        .pig-card-track {
          display: flex;
          transform: translateX(calc(var(--pig-active-card) * -100%));
          transition: transform 0.55s ease;
        }

        .pig-card-slide {
          flex: 0 0 100%;
          min-width: 100%;
          padding: 0 2px;
        }

        @media (min-width: 640px) {
          .pig-card-track {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
            transform: none;
          }

          .pig-card-slide {
            min-width: 0;
            padding: 0;
          }
        }

        @media (min-width: 768px) {
          .pig-card-track {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .pig-card-track {
            gap: 1.5rem;
          }
        }
      `}</style>

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #be185d 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl space-y-8 sm:space-y-10 lg:space-y-12">
        <div className="mx-auto max-w-5xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#ec4899]" />
            <span className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent">
              Advanced Gloskin - Velachery
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Dark Spots &amp; Pigmentation{' '}
            <span className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
              Treatments in Chennai
            </span>
          </h2>

          <div
            className="mx-auto h-[3px] w-14 rounded-full"
            style={{ background: 'linear-gradient(90deg, #ec4899, #be185d)' }}
          />

          <p className="text-sm leading-relaxed text-gray-600 sm:text-[17px]">
            Are dark spots, uneven skin tone, or stubborn pigmentation affecting your confidence?
            You are not alone - and more importantly, these are treatable. At Advanced Gloskin,
            our dermatologists diagnose the root cause of your skin discolouration and create a
            targeted treatment plan that works.
          </p>
        </div>

        <div className="overflow-hidden sm:overflow-visible">
          <div
            className="pig-card-track"
            style={{ '--pig-active-card': activeCard } as CSSProperties}
          >
            {treatments.map(({ icon: Icon, number, image, title, subtitle, description, listLabel, points, note }) => (
              <div key={number} className="pig-card-slide">
                <div className="group relative flex min-h-[470px] flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[520px] md:min-h-[560px]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(20,0,12,0.45) 0%, rgba(20,0,12,0.75) 50%, rgba(20,0,12,0.95) 100%)',
                    }}
                  />

                  <div
                    className="absolute inset-x-0 top-0 z-10 h-[3px]"
                    style={{ background: 'linear-gradient(90deg, #ec4899, #be185d)' }}
                  />

                  <div className="relative z-10 flex flex-1 flex-col space-y-4 p-5 sm:p-6 lg:p-7">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-5xl font-extrabold leading-none"
                        style={{ color: 'rgba(236,72,153,0.25)' }}
                      >
                        {number}
                      </span>
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #ec4899, #be185d)',
                          boxShadow: '0 4px 16px rgba(236,72,153,0.45)',
                        }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold leading-snug" style={{ color: '#fff0f6' }}>
                        {title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#f9a8d4]">{subtitle}</p>
                    </div>

                    <div
                      className="h-[2px] w-10 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #ec4899, transparent)' }}
                    />

                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,240,246,0.72)' }}>
                      {description}
                    </p>

                    <div className="flex-1 space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#f9a8d4]">
                        {listLabel}
                      </p>
                      <ul className="space-y-2">
                        {points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <span
                              className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                              style={{
                                background: 'rgba(236,72,153,0.20)',
                                border: '1px solid rgba(236,72,153,0.50)',
                              }}
                            >
                              <CheckCircle className="h-3 w-3 text-[#f9a8d4]" />
                            </span>
                            <span className="text-sm leading-snug" style={{ color: 'rgba(255,240,246,0.75)' }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {note && (
                      <div
                        className="rounded-lg px-3 py-2.5 text-xs font-medium leading-relaxed"
                        style={{
                          background: 'rgba(236,72,153,0.18)',
                          border: '1px solid rgba(236,72,153,0.40)',
                          color: '#f9a8d4',
                        }}
                      >
                        {note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 sm:hidden">
          {treatments.map((treatment, index) => (
            <button
              key={treatment.number}
              type="button"
              onClick={() => setActiveCard(index)}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: activeCard === index ? 22 : 10,
                background: activeCard === index ? '#ec4899' : 'rgba(236,72,153,0.24)',
              }}
              aria-label={`Show ${treatment.title}`}
            />
          ))}
        </div>

        <div className="flex justify-center px-0 sm:px-4">
          <ClinicBannerButtons variant="light" className="max-w-md md:max-w-none md:justify-center" />
        </div>
      </div>
    </section>
  );
}
