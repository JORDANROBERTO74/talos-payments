"use client";

import React from "react";

const clients = [
  "AcmeCorp",
  "BoltShift",
  "Forest",
  "WaveTech",
  "Nexus",
  "CloudSync",
  "SpaceTech",
  "Premium",
];

export function Companies() {
  return (
    <section className="border-t border-white/10 bg-ink py-9">
      <div className="shell flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Powering 4M+ businesses
        </p>
        <div className="relative flex-1 overflow-hidden fade-x">
          <ul className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
              <li
                key={`${client}-${index}`}
                aria-hidden={index >= clients.length}
                className="flex items-center gap-10"
              >
                <span className="font-display text-[16px] font-semibold tracking-tight text-white/70">
                  {client}
                </span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-amber/70" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
