// components/GrohairTopBar.tsx
"use client";

import Image from "next/image";

type Props = {
  logoSrc?: string;
  phone?: string;
  buttonText?: string;
};

export default function GrohairTopBar({
  logoSrc = "https://ik.imagekit.io/7yen5ugz0/public/iconed.webp",
  phone = "+91 89706 56789",
  buttonText = "Call Now",
}: Props) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  const handleCallClick = () => {
    window.location.href = telHref;
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;700&display=swap');

        .topbar-btn {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          color: #ffffff;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          border-radius: 4px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .topbar-btn:hover {
          transform: scale(1.02);
        }

        .topbar-btn:active {
          transform: scale(0.98);
        }
      `}</style>

      {/* Spacer */}
      <div className="h-[70px] xs:h-[75px] sm:h-[80px] md:h-[85px] lg:h-[90px] xl:h-[95px] 2xl:h-[100px]" />

      <header
        className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-100"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 xs:px-5 sm:px-6 md:px-10 lg:px-20 xl:px-28 2xl:px-36">
          <div className="flex items-center justify-between py-3 xs:py-3.5 sm:py-4 md:py-4 lg:py-4.5 xl:py-5 2xl:py-5.5">

            {/* Left: Logo */}
            <div className="flex items-center">
              <div className="relative h-[55px] w-[180px] xs:h-[48px] xs:w-[170px]
                              sm:h-[50px] sm:w-[180px] md:h-[55px] md:w-[200px]
                              lg:h-[65px] lg:w-[250px] xl:h-[75px] xl:w-[300px]
                              2xl:h-[85px] 2xl:w-[350px]">
                <Image
                  src={logoSrc}
                  alt="Advanced GloSkin"
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 170px, (max-width: 1024px) 180px, (max-width: 1280px) 200px, (max-width: 1536px) 300px, 350px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Right: Call Now Button */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleCallClick}
                aria-label={`Call ${phone}`}
                className="topbar-btn px-5 py-2.5 sm:px-6 sm:py-3 md:px-5 md:py-2.5 text-sm sm:text-base md:text-base"
              >
                {/* Phone Icon */}
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3c0-.6.4-1 1-1h4.2c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="font-semibold">{buttonText}</span>
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}