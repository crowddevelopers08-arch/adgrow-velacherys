
'use client'

import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Star, Award, Users } from 'lucide-react';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const stats = [
  { icon: Users,        end: 15,  suffix: 'K+',  label: 'Clients Transformed',  color: 'from-[#ec4899] to-[#be185d]' },
  { icon: Award,        end: 90,  suffix: '%',   label: 'Diagnostic Precision',  color: 'from-[#ec4899] to-[#be185d]' },
  { icon: Star,         end: 4.7, suffix: '★',   label: 'Google Rating',         color: 'from-[#ec4899] to-[#be185d]', decimal: true },
  { icon: CheckCircle,  end: 92,  suffix: '%',   label: 'Achievement Rate',      color: 'from-[#ec4899] to-[#be185d]' },
];

function CountUp({ end, suffix, decimal, run }: { end: number; suffix: string; decimal?: boolean; run: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * end;
      setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (step >= steps) {
        setCount(end);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [run, end, decimal]);

  return (
    <span>{decimal ? count.toFixed(1) : count}{suffix}</span>
  );
}

export default function Stats() {
  const [run, setRun] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRun(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`${dmSans.className} py-1 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                <div className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 md:mb-2`}>
                  <CountUp end={stat.end} suffix={stat.suffix} decimal={stat.decimal} run={run} />
                </div>

                <div className="text-xs md:text-sm text-gray-600 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full -mr-6 md:-mr-10 -mt-6 md:-mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
