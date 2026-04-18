'use client'

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">

          {/* Left — Logo */}
          <div className="relative w-32 md:w-40 h-9 md:h-11 flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="https://ik.imagekit.io/ti3453sgoo/iconed.webp"
              alt="Swetika Skin Clinic"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Center — Nav links */}
          <nav className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1">
            {[
              { label: 'Home',  href: '/'  },
              { label: 'About',    href: '#about'    },
              { label: 'Services', href: '#services' },
              { label: 'Offers',   href: '#offers'   },
              { label: 'Results',  href: '#results'  },
              { label: 'Reviews',  href: '#reviews'  },
              { label: 'FAQ',      href: '#faq'      },
              { label: 'Contact',  href: '#contact'  },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative group px-2.5 py-1.5 text-[13px] lg:text-sm font-medium text-gray-600 hover:text-[#ec4899] transition-colors duration-200 whitespace-nowrap rounded-md hover:bg-pink-50"
              >
                {label}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#ec4899] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right — CTA buttons + mobile hamburger */}
          <div className="flex items-center gap-2 lg:gap-3 justify-end">
            <a
              href="tel:+918970656789"
              className="hidden md:flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-semibold text-white whitespace-nowrap shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#ec4899,#be185d)' }}
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" />
              <span>+91 89706 56789</span>
            </a>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-semibold text-white whitespace-nowrap shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#ec4899,#be185d)' }}
            >
              <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Book Now</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen
                ? <X    className="w-6 h-6 text-gray-700" />
                : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 pb-4">
            {/* 2-col grid of links */}
            <div className="grid grid-cols-2 gap-1 pt-3">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Offers',   href: '#offers'   },
                { label: 'Results',  href: '#results'  },
                { label: 'Gallery',  href: '#gallery'  },
                { label: 'About',    href: '#about'    },
                { label: 'Reviews',  href: '#reviews'  },
                { label: 'FAQ',      href: '#faq'      },
                { label: 'Contact',  href: '#contact'  },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-[#ec4899] hover:bg-pink-50 rounded-lg transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
            {/* CTA buttons */}
            <div className="flex gap-2 mt-4">
              <a
                href="tel:+918970656789"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold text-white shadow-md"
                style={{ background: 'linear-gradient(135deg,#ec4899,#be185d)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold text-white shadow-md"
                style={{ background: 'linear-gradient(135deg,#ec4899,#be185d)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}