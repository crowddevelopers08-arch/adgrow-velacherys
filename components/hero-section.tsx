'use client'

import { Star, Sparkles, TrendingUp, User } from 'lucide-react';
import Image from 'next/image';
import { DM_Sans, Playfair_Display } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '800', '900'] });

const icons = [User, User, User, User];

export default function Hero() {
  return (
    <section className={`${dmSans.className} relative pt-16 max-sm:pt-22 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden`}>
      {/* Background Gradient with Responsive Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
        <div className="absolute top-10 md:top-20 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl lg:blur-3xl opacity-20 md:opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl lg:blur-3xl opacity-20 md:opacity-30 animate-pulse"
          style={{ animationDelay: '1000ms' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl lg:blur-3xl opacity-10 md:opacity-20 animate-pulse"
          style={{ animationDelay: '2000ms' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center max-sm:gap-5">
          {/* Left Content - Only visible on desktop */}
          <div className="hidden lg:block space-y-6 md:space-y-8 animate-in slide-in-from-left duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg border border-pink-100">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#ec4899]" />
              <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                #1 Skin Clinic In Velachery
              </span>
            </div>

            {/* Heading */}
            <h1 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight`}>
              Get Unparalleled{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                  Skin Results
                </span>
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                  height="8" 
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4 Q50 0, 100 4 T200 4"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2" 
                    className="md:stroke-width-3"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#B964DD" />
                      <stop offset="100%" stopColor="#F849C1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              That You Actually Dream Of
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Advanced Dermatology Solutions for Velachery, Confident Skin
            </p>

            {/* Buttons - Only visible on desktop in left column */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 rounded-md
                bg-gradient-to-r from-[#ec4899] to-[#be185d]
                hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
                text-white font-semibold text-sm md:text-base
                shadow-lg hover:shadow-xl
                transition-all duration-300 w-full sm:w-auto"
              >
                <span>Book Your Consultation</span>
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+91 89706 56789"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 md:px-5 md:py-3.5 lg:px-8 lg:py-4 
                bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm md:text-base 
                rounded-md shadow-lg hover:shadow-xl transition-all duration-300 
                border-2 border-gray-200 w-full sm:w-auto"
              >
                <span>Call Now</span>
              </a>
            </div>

            {/* Stats Card */}
            <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 lg:p-5 rounded-2xl shadow-xl border border-pink-100 w-full max-w-md">
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                <div className="flex -space-x-2 md:-space-x-3">
                  {icons.map((Icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10
                                rounded-full
                                bg-gradient-to-r from-[#ec4899] to-[#be185d]
                                flex items-center justify-center
                                border-2 border-white"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start gap-0.5 md:gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-bold text-gray-800">
                    15K+ Clients Transformed
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Content - Visible only on mobile/tablet */}
          <div className="lg:hidden space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg border border-pink-100">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#ec4899]" />
              <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                #1 Skin Clinic In Chennai
              </span>
            </div>

            {/* Heading */}
            <h1 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-tight max-sm:mb-2`}>
              Get Unparalleled{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                  Skin Results
                </span>
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                  height="8" 
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4 Q50 0, 100 4 T200 4"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2" 
                    className="md:stroke-width-3"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#B964DD" />
                      <stop offset="100%" stopColor="#F849C1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              That You Actually Dream Of
            </h1>

            {/* Subtitle - Comes BEFORE image on mobile */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Advanced Dermatology Solutions for Radiant, Confident Skin
            </p>
          </div>

          {/* Image Section - Visible on all screens */}
          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899] to-[#be185d] rounded-full filter blur-xl md:blur-2xl lg:blur-3xl opacity-10 md:opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white to-cyan-50 rounded-2xl md:rounded-3xl p-2 md:p-3 shadow-xl md:shadow-2xl max-sm:mb-5">
                <div className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-rose-200/30 "></div>
                  <Image
                    src="https://ik.imagekit.io/ti3453sgoo/rajajihero.jpg"
                    alt="Beautiful skin results"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority
                  />
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-pink-100 ">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#B964DD] rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">92%</p>
                    <p className="text-xs md:text-sm text-gray-500">Achievement Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Buttons and Stats - Comes AFTER image on mobile */}
          <div className="lg:hidden space-y-6">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 py-3 md:px-5 md:py-3.5 rounded-md
                bg-gradient-to-r from-[#ec4899] to-[#be185d]
                hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
                text-white font-semibold text-sm md:text-base
                shadow-lg hover:shadow-xl
                transition-all duration-300 w-full sm:w-auto"
              >
                <span>Book Your Consultation</span>
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+91 89706 56789"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 md:px-5 md:py-3.5 
                bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm md:text-base 
                rounded-md shadow-lg hover:shadow-xl transition-all duration-300 
                border-2 border-gray-200 w-full sm:w-auto"
              >
                <span>Call Now</span>
              </a>
            </div>

            {/* Stats Card */}
            <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-pink-100 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                <div className="flex -space-x-2 md:-space-x-3">
                  {icons.map((Icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10
                                rounded-full
                                bg-gradient-to-r from-[#ec4899] to-[#be185d]
                                flex items-center justify-center
                                border-2 border-white"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start gap-0.5 md:gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-bold text-gray-800">
                    15K+ Clients Transformed
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}