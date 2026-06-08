'use client';

import Image from 'next/image';
import { useEffect, useState, type CSSProperties } from 'react';
import { CheckCircle, Leaf, Radio, Sparkles, Syringe } from 'lucide-react';
import ClinicBannerButtons from './clinic-banner-buttons';

const treatments = [
  {
    icon: Radio,
    number: '01',
    image: '/ant-ageing.avif',
    title: 'RF Skin Tightening',
    subtitle: 'Radio Frequency Skin Tightening',
    description:
      'The most popular non-surgical skin tightening treatment in Chennai. Radiofrequency energy penetrates deep into the skin layers, stimulating collagen production and tightening loose, sagging skin - especially around the jawline, cheeks, neck, and eye area.',
    listLabel: 'Ideal for',
    points: [
      'Sagging cheeks and jawline',
      'Loose neck skin',
      'Fine lines and deep wrinkles on face',
      'Overall face lift effect - zero downtime',
    ],
    note: 'If you are searching for non-surgical skin tightening or radio frequency skin tightening in Velachery or near you - Advanced Gloskin is your answer.',
    reverse: false,
  },
  {
    icon: Syringe,
    number: '02',
    image: '/doctor-treatment.jpg',
    title: 'Dermal Fillers',
    subtitle: 'Cosmetic Filler Treatments',
    description:
      'Restore lost facial volume and smooth out deep wrinkles with our cosmetic filler treatments. Administered by certified dermatologists, fillers deliver instant, natural-looking results - no surgery, no recovery time.',
    listLabel: 'Commonly treated areas',
    points: [
      'Smile lines and nasolabial folds',
      'Under-eye hollows',
      'Cheek volume restoration',
      'Lip enhancement',
    ],
    note: null,
    reverse: true,
  },
  {
    icon: Leaf,
    number: '03',
    image: '/woman-beauty.avif',
    title: 'Collagen Boosters',
    subtitle: 'Skin Firming & Renewal',
    description:
      "As we age, collagen levels drop - causing skin to lose its bounce, firmness, and glow. Our collagen-boosting treatments use proven technologies to stimulate your skin's natural repair process from within.",
    listLabel: 'Benefits',
    points: [
      'Firmer, plumper skin',
      'Reduced appearance of fine lines',
      'Improved skin elasticity',
      'Long-lasting results with a proper skincare routine',
    ],
    note: 'Best treatment for deep wrinkles on face | Cosmetic skin doctor near Velachery.',
    reverse: false,
  },
];

export default function AntiAgeingTreatments() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % treatments.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <style>{`
        .anti-card-track {
          display: flex;
          transform: translateX(calc(var(--anti-active-card) * -100%));
          transition: transform 0.55s ease;
        }

        .anti-card-slide {
          flex: 0 0 100%;
          min-width: 100%;
        }

        @media (min-width: 1024px) {
          .anti-card-track {
            display: block;
            transform: none;
          }

          .anti-card-slide {
            min-width: 0;
          }
        }
      `}</style>

      <div
        className="relative overflow-hidden px-4 py-9 text-center sm:px-6 md:py-12 lg:px-10"
      >
        {/* <div
          className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }}
        /> */}

        <div className="relative mx-auto max-w-5xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#ec4899]" />
            <span className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent">
              Advanced Gloskin - Velachery
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Anti-Ageing Skin Treatments -{' '}
            <span className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
              Look Younger Without Surgery
            </span>
          </h2>

          <div
            className="mx-auto h-[3px] w-14 rounded-full"
            style={{ background: 'linear-gradient(90deg, #ec4899, #be185d)' }}
          />

          <p className="text-sm leading-relaxed text-gray-600 sm:text-[17px]">
            Fine lines, sagging skin, and loss of volume are natural parts of ageing - but they do
            not have to define how you look or feel. Advanced Gloskin offers non-surgical
            anti-ageing solutions that restore firmness, lift, and youth without a single cut or stitch.
          </p>
        </div>
      </div>

      <div className="overflow-hidden lg:overflow-visible">
        <div
          className="anti-card-track"
          style={{ '--anti-active-card': activeCard } as CSSProperties}
        >
          {treatments.map(({ icon: Icon, number, image, title, subtitle, description, listLabel, points, note, reverse }, idx) => (
            <div key={number} className="anti-card-slide">
              <div
                className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                style={{
                  background: idx % 2 === 0
                    ? 'linear-gradient(135deg, #fff0f6 0%, #fce7f3 100%)'
                    : '#ffffff',
                }}
              >
                <div className="relative min-h-[220px] w-full overflow-hidden sm:min-h-[260px] lg:min-h-[300px] lg:w-1/2">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`pointer-events-none absolute bottom-4 ${reverse ? 'right-4' : 'left-4'} select-none text-8xl font-extrabold leading-none`}
                    style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'serif' }}
                  >
                    {number}
                  </div>
                  <div
                    className={`absolute inset-y-0 ${reverse ? 'left-0 w-1' : 'right-0 w-1'} hidden lg:block`}
                    style={{ background: 'linear-gradient(to bottom, #ec4899, #be185d)' }}
                  />
                </div>

                <div className="flex w-full items-center px-4 py-6 sm:px-8 lg:w-1/2 lg:px-12 lg:py-8">
                  <div className="w-full max-w-lg space-y-3 sm:mx-auto lg:mx-0">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #ec4899, #be185d)',
                          boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
                        }}
                      >
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ec4899] sm:text-xs sm:tracking-widest">
                        {subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                      {title}
                    </h3>

                    <div
                      className="h-[2px] w-10 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #ec4899, #be185d)' }}
                    />

                    <p className="text-sm leading-relaxed text-gray-600">{description}</p>

                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#be185d]">
                      {listLabel}
                    </p>

                    <ul className="space-y-1.5">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span
                            className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                            style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)' }}
                          >
                            <CheckCircle className="h-2.5 w-2.5 text-white" />
                          </span>
                          <span className="text-sm leading-snug text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {note && (
                      <div
                        className="rounded-xl px-4 py-3 text-xs font-medium leading-relaxed"
                        style={{
                          background: 'rgba(236,72,153,0.07)',
                          border: '1px solid rgba(236,72,153,0.22)',
                          color: '#be185d',
                        }}
                      >
                        {note}
                      </div>
                    )}

                    <ClinicBannerButtons variant="light" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 py-5 lg:hidden">
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
    </section>
  );
}
