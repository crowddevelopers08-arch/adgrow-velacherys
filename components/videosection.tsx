'use client'

import React, { useState, useRef } from 'react';

const ClinicVideosResponsiveGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    { id: 1, title: "Doctor Explaining Hair Loss Evaluation",  videoUrl: "/", duration: "5:30" },
    { id: 2, title: "Regenera Activa Treatment Overview",      videoUrl: "/", duration: "8:45" },
    { id: 3, title: "In-Clinic Hair Treatment Process",        videoUrl: "/", duration: "6:15" },
  ];

  const pauseAllVideos = () => {
    videoRefs.current.forEach((ref) => { if (ref) ref.pause(); });
  };

  const nextSlide = () => { pauseAllVideos(); setCurrentSlide((prev) => (prev + 1) % videos.length); };
  const prevSlide = () => { pauseAllVideos(); setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length); };
  const goToSlide = (index: number) => { pauseAllVideos(); setCurrentSlide(index); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,500&family=Outfit:wght@300;400;500;600&display=swap');

        .cvg-section {
          font-family: 'Outfit', sans-serif;
        }

        .cvg-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
        }

        .cvg-subtext {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      <section className="cvg-section py-8 sm:py-12 md:py-16 lg:py-15 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-6 sm:mb-8 md:mb-5 lg:mb-10">
            <h2 className="cvg-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              Proof
            </h2>
            <p className="cvg-subtext text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Discover powerful before & after videos revealing real treatment outcomes and natural-looking results.
            </p>
          </div>

          {/* ─── MOBILE SLIDER (below lg) ─── */}
          <div className="lg:hidden relative mb-8 sm:mb-10">
            <div className="relative w-full">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-black">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 relative'
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="relative w-full bg-black" style={{ height: '500px' }}>
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={video.videoUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next Arrows */}
            {videos.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-[45%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
                  style={{ backgroundColor: '#ec4899' }}
                  aria-label="Previous video"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-[45%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
                  style={{ backgroundColor: '#ec4899' }}
                  aria-label="Next video"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Dot Indicators */}
            {videos.length > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-8 sm:w-10 h-3 sm:h-3.5'
                        : 'w-3 sm:w-3.5 h-3 sm:h-3.5 opacity-50 hover:opacity-75'
                    }`}
                    style={{ backgroundColor: '#ec4899' }}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ─── DESKTOP CAROUSEL (lg+) — 3 videos ─── */}
          <div className="hidden lg:block mb-10 lg:mb-12">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {[0].map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full grid grid-cols-3 gap-6 xl:gap-8">
                      {videos.map((video, index) => (
                        <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                          <div className="relative w-full bg-black" style={{ height: '600px' }}>
                            <video
                              ref={(el) => { videoRefs.current[index + 3] = el; }}
                              src={video.videoUrl}
                              className="absolute inset-0 w-full h-full object-cover"
                              controls
                              preload="metadata"
                              playsInline
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {videos.length > 3 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:scale-110 z-20"
                    style={{ backgroundColor: '#ec4899' }}
                    aria-label="Previous"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:scale-110 z-20"
                    style={{ backgroundColor: '#ec4899' }}
                    aria-label="Next"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ClinicVideosResponsiveGrid;