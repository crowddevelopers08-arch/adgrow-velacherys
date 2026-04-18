"use client";

import { Phone, Calendar } from "lucide-react";

import { useState } from "react";

export default function MobileActionBar() {
    const handleBookNow = () => {
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t shadow-lg
        flex md:hidden
      "
    >
      {/* Call Now */}
      <a
        href="tel:+91 89706 56789"
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold text-white
          text-sm
          bg-[#e8185a]
          active:scale-95 transition
        "
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>

      {/* Book Now */}
      <button onClick={handleBookNow}
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold
          text-black
          text-sm
          border-l border-gray-200
          active:scale-95 transition
        "
      >
        <Calendar className="w-4 h-4" />
        Book Now
      </button>
    </div>
  );
}
