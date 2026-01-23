"use client";

import React from "react";
import { Coins, Zap, Mountain, Waves, Network, Cloud, Rocket, Gem } from "lucide-react";

export function Companies() {
  return (
    <section className="bg-[#f6f9fc] py-12 diagonal-container -mt-20 relative z-20">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Coins className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">AcmeCorp</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Zap className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">BoltShift</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Mountain className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">Forest</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Waves className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">WaveTech</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Network className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">Nexus</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Cloud className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">CloudSync</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Rocket className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">SpaceTech</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#0a2540]">
            <Gem className="text-2xl sm:text-3xl" /> <span className="text-center sm:text-left">Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
}
