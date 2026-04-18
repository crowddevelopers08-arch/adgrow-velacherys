'use client'

import { useState, useEffect, useRef } from "react";


/* ── Types ── */
interface ServiceItem {
  label: string;
  desc: string;
}

interface Service {
  id: number;
  tag: string;
  img: string;
  title: string;
  subtitle: string;
  accent: string;
  bgTint: string;
  items: ServiceItem[];
}

/* ── Services Data ── */
const services: Service[] = [
  {
    id: 1,
    tag: "01",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=85",
    title: "Brightening & Pigmentation Treatments",
    subtitle: "Reveal Your Natural Beauty.",
    accent: "#c0174b",
    bgTint: "#fff5f7",
    items: [
      { label: "Skin Renewal Peels", desc: "Refresh your skin for a luminous complexion." },
      { label: "Microdermabrasion", desc: "Gently refine imperfections for smoother, radiant skin." },
      { label: "Q-Switched Laser", desc: "Attain a more even skin tone by reducing pigmentation." },
    ],
  },
  {
    id: 2,
    tag: "02",
    img: "https://ik.imagekit.io/ti3453sgoo/girl-receiving.jpg",
    title: "Laser Hair Reduction",
    subtitle: "Embrace Lasting Smoothness and Confidence.",
    accent: "#a0124a",
    bgTint: "#fdf2f5",
    items: [
      { label: "Nd:YAG Laser", desc: "Effectively eliminate unwanted hair for various skin tones and hair types." },
      { label: "Diode Laser", desc: "Perfect for tackling coarse hair on larger areas." },
      { label: "SHR Technology", desc: "Super Hair Removal with minimal discomfort and faster sessions." },
    ],
  },
  {
    id: 3,
    tag: "03",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=85",
    title: "Anti-Ageing Solutions",
    subtitle: "Turn Back the Clock and Revive Your Youthful Appearance.",
    accent: "#b01545",
    bgTint: "#fff5f7",
    items: [
      { label: "Fillers", desc: "Smooth out fine lines and restore youthful volume effortlessly." },
      { label: "RF Skin Tightening", desc: "Firm and lift sagging skin for a toned, defined appearance." },
      { label: "Collagen Boosters", desc: "Stimulate natural collagen for plump, youthful skin." },
    ],
  },
  {
    id: 4,
    tag: "04",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=85",
    title: "Revitalize Dull, Dry Skin",
    subtitle: "Say Goodbye to Lackluster Skin and Achieve a Radiant Glow.",
    accent: "#c0174b",
    bgTint: "#fdf2f5",
    items: [
      { label: "Hydra Facials", desc: "Deep cleanse and hydrate skin for an instant, lasting glow." },
      { label: "Vitamin C Infusion", desc: "Brighten and even out skin tone with powerful antioxidants." },
      { label: "Oxygen Therapy", desc: "Flood skin with pure oxygen for instant radiance and renewal." },
    ],
  },
];

/* ── Responsive hook ── */
function useBreakpoint() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
}

/* ── Check Icon ── */
function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style={{ flexShrink: 0, marginTop: "3px" }}
    >
      <circle cx="10" cy="10" r="10" fill={color} />
      <polyline
        points="5.5,10 8.5,13 14.5,7.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Lotus SVG ── */
function LotusDecor({
  size = 28,
  color = "#c0174b",
  opacity = 0.15,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 36"
      fill="none"
      style={{ opacity }}
    >
      <path
        d="M20 34 C20 34 10 24 10 16 C10 11 14.5 7 20 7 C25.5 7 30 11 30 16 C30 24 20 34 20 34Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M20 34 C20 34 4 28 3 20 C2 14 6 9 12 9"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20 34 C20 34 36 28 37 20 C38 14 34 9 28 9"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Service Card ── */
function ServiceCard({
  service,
  index,
  isMobile,
  isTablet,
}: {
  service: Service;
  index: number;
  isMobile: boolean;
  isTablet: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cardPadding = isMobile ? "20px 18px 28px" : isTablet ? "24px 28px 32px" : "28px 36px 36px";
  const imgSize     = isMobile ? 110 : 138;
  const imgMarginTop = isMobile ? -44 : -55;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? service.bgTint : "#fff",
        borderRadius: isMobile ? "16px" : "24px",
        border: `1.5px solid ${hovered ? service.accent : "#f0d0d8"}`,
        boxShadow: hovered
          ? `0 24px 70px rgba(192,23,75,0.13), 0 4px 20px rgba(192,23,75,0.07)`
          : "0 4px 28px rgba(0,0,0,0.05)",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        transform: visible
          ? hovered
            ? "translateY(-7px)"
            : "translateY(0)"
          : "translateY(32px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Ghost tag number */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "22px",
            right: "24px",
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "3.8rem",
            fontWeight: 600,
            color: service.accent,
            opacity: 0.08,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {service.tag}
        </div>
      )}

      {/* Scalloped Image */}
      <div
        style={{
          marginTop: `${imgMarginTop}px`,
          width: `${imgSize}px`,
          height: `${imgSize}px`,
          borderRadius: "50%",
          padding: "5px",
          background: "#fff",
          boxShadow: `0 0 0 3px #fff, 0 0 0 5.5px ${service.accent}35, 0 8px 24px rgba(192,23,75,0.15)`,
          zIndex: 5,
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            clipPath: `polygon(
              50% 0%, 63% 5%, 74% 3%, 82% 11%, 84% 22%,
              93% 28%, 98% 39%, 96% 51%, 88% 59%, 87% 71%,
              80% 80%, 69% 84%, 59% 81%, 50% 86%,
              41% 81%, 31% 84%, 20% 80%, 13% 71%,
              12% 59%, 4% 51%, 2% 39%, 7% 28%,
              16% 22%, 18% 11%, 26% 3%, 37% 5%
            )`,
          }}
        >
          <img
            src={service.img}
            alt={service.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: cardPadding,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Animated accent bar */}
        <div
          style={{
            width: hovered ? "70px" : "40px",
            height: "2.5px",
            background: `linear-gradient(90deg, ${service.accent}, ${service.accent}55)`,
            borderRadius: "2px",
            margin: "0 auto 16px",
            transition: "width 0.35s ease",
          }}
        />

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "1.2rem" : "1.45rem",
            fontWeight: 600,
            color: "#1a0a10",
            textAlign: "center",
            marginBottom: "9px",
            lineHeight: 1.28,
            letterSpacing: "0.01em",
          }}
        >
          {service.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontSize: isMobile ? "0.78rem" : "0.83rem",
            color: service.accent,
            textAlign: "center",
            marginBottom: "18px",
            fontWeight: 500,
            fontStyle: "italic",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.025em",
          }}
        >
          {service.subtitle}
        </p>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${service.accent}28, transparent)`,
            marginBottom: "18px",
          }}
        />

        {/* Feature list — 2-col on desktop, 1-col on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "12px" : "14px 24px",
            width: "100%",
            marginBottom: "24px",
          }}
        >
          {service.items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "9px",
                fontSize: isMobile ? "0.82rem" : "0.84rem",
                color: "#3a1a24",
                lineHeight: 1.55,
                fontFamily: "'DM Sans', sans-serif",
                gridColumn:
                  !isMobile && service.items.length % 2 !== 0 && i === service.items.length - 1
                    ? "1 / -1"
                    : undefined,
              }}
            >
              <CheckIcon color={service.accent} />
              <span>
                <strong
                  style={{
                    fontWeight: 600,
                    color: "#1a0a10",
                    display: "block",
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </strong>
                <span style={{ color: "#7a4a58", fontWeight: 400, fontSize: "0.8rem" }}>
                  {item.desc}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Learn More pill */}
        <button
          style={{
            background: "transparent",
            border: `1.5px solid ${service.accent}`,
            color: service.accent,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.74rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding: isMobile ? "9px 28px" : "10px 34px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = service.accent;
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.boxShadow = `0 6px 20px ${service.accent}45`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = service.accent;
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

/* ── Lotus decorator positions (no spread type conflict) ── */
interface LotusPos {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  rot: number;
}

const lotusPositions: LotusPos[] = [
  { top: "6%",  left: "2%",  size: 90, rot: 20  },
  { top: "78%", left: "3%",  size: 60, rot: -15 },
  { top: "10%", right: "3%", size: 75, rot: -30 },
  { top: "72%", right: "4%", size: 65, rot: 40  },
];

/* ── Main Section ── */
export default function   BeautyServicesSection() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const sectionPadding = isMobile
    ? "22px 16px 22px"
    : isTablet
    ? "80px 32px 80px"
    : "60px 60px 60px";

  const gridCols = isMobile ? "1fr" : "1fr 1fr";
  const gridGap  = isMobile ? "70px 0" : isTablet ? "65px 32px" : "75px 44px";
  const gridMaxW = isDesktop ? "1060px" : "100%";

  return (
    <section id="services"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background:
          "linear-gradient(160deg, #fff 0%, #fdf5f7 40%, #fff8fa 70%, #fef0f4 100%)",
        padding: sectionPadding,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background lotus decorations — desktop only */}
      {isDesktop &&
        lotusPositions.map((p, i) => {
          const { size, rot, ...posStyles } = p;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                ...posStyles,
                transform: `rotate(${rot}deg)`,
                pointerEvents: "none",
              }}
            >
              <LotusDecor size={size} color="#c0174b" opacity={0.065} />
            </div>
          );
        })}

      {/* ── Heading ── */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "12px" : "16px",
          padding: isMobile ? "0 8px" : "0",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "0.68rem" : "0.74rem",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#c0174b",
            marginBottom: "12px",
            opacity: 0.75,
          }}
        >
          Our Treatments
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: isMobile
              ? "1.6rem"
              : isTablet
              ? "2.2rem"
              : "clamp(1.9rem, 3vw, 2.9rem)",
            color: "#1a0a10",
            lineHeight: 1.22,
            maxWidth: "700px",
            margin: "0 auto 14px",
          }}
        >
          Illuminate Your Beauty Within
        </h2>

        <p
          style={{
            fontSize: isMobile ? "0.88rem" : "1rem",
            color: "#7a4a58",
            fontWeight: 300,
            letterSpacing: "0.05em",
            marginBottom: "20px",
          }}
        >
          Explore Our Extensive Services
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: isMobile ? "40px" : "70px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #c0174b)",
            }}
          />
          <LotusDecor size={24} color="#c0174b" opacity={0.65} />
          <div
            style={{
              width: isMobile ? "40px" : "70px",
              height: "1px",
              background: "linear-gradient(90deg, #c0174b, transparent)",
            }}
          />
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols,
          gap: gridGap,
          maxWidth: gridMaxW,
          margin: "0 auto",
          paddingTop: isMobile ? "52px" : "64px",
        }}
      >
        {services.map((s, i) => (
          <ServiceCard
            key={s.id}
            service={s}
            index={i}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        ))}
      </div>

      {/* ── Bottom CTA ── */}
<div className={`text-center ${isMobile ? 'mt-6' : 'mt-10'}`}>
  <div
    className="inline-block w-full max-w-full animate-fade-up"
    style={{ animationDelay: '0.55s' }}
  >
    <button     onClick={() => {
      const formElement = document.getElementById('appointment-form');
      if (formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // Adjusts vertical alignment: 'start', 'center', 'end', or 'nearest'
        });
      }
    }}

      className="
        bg-gradient-to-r from-pink-500 to-pink-700
        text-white font-bold font-lato
        px-6 sm:px-8 md:px-10
        py-3 sm:py-4
        text-sm sm:text-base md:text-lg
        rounded-md
        border-2 border-white/30
        hover:scale-103 
        transition-all duration-200
        w-auto min-w-[200px] max-w-[90%]
        sm:whitespace-nowrap
        xs:whitespace-normal
        tracking-wider
      "
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      Book Your Appointment Now!
    </button>
  </div>
</div>
    </section>
  );
}