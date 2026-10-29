"use client";

import React from "react";

export function GlobalScale() {
  const stats = [
    {
      value: "500M+",
      description: "API requests per day, peaking at 13,000 requests a second.",
    },
    {
      value: "99.999%",
      description: "Historical uptime for Talos services.",
    },
    {
      value: "90%",
      description: "of US adults have bought from businesses using Talos.",
    },
    {
      value: "135+",
      description: "Currencies and payment methods supported.",
    },
  ];

  return (
    <section className="bg-[#0a1f2c] py-20 sm:py-24 md:py-32 diagonal-container -mt-10 relative z-30 text-white border-t border-white/5">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 relative">
          <div className="relative z-10">
            <h2 className="text-[#f2b84b] font-bold text-sm uppercase tracking-wide mb-3">
              Global Scale
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              The backbone for global commerce.
            </h3>
            <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-12 leading-relaxed">
              Talos makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-[#0e7c6b] pl-3 sm:pl-4">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative h-full min-h-[400px]">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-[#0a1f2c] to-[#0a1f2c]"></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  transform: "perspective(1000px) rotateX(60deg) translateY(-100px) scale(1.5)",
                }}
              ></div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#f2b84b] rounded-full shadow-[0_0_20px_#f2b84b] animate-ping"></div>
            <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-[#0e7c6b] rounded-full shadow-[0_0_15px_#0e7c6b] animate-ping delay-75"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-teal-600 rounded-full shadow-[0_0_20px_purple] animate-ping delay-150"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
              <div className="w-48 h-48 border border-white/5 rounded-full"></div>
              <div className="absolute w-full h-[1px] bg-white/10 top-1/2"></div>
              <div className="absolute h-full w-[1px] bg-white/10 left-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
