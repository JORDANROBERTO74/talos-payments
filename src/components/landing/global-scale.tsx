"use client";

import React from "react";
import { BlockHead, Shell } from "./block";

const stats = [
  ["500M+", "API requests per day, peaking at 13,000 requests a second."],
  ["99.999%", "Historical uptime across Talos services."],
  ["10M+", "Transactions processed monthly across customers."],
  ["200+", "Payment methods and data sources, one integration."],
];

export function GlobalScale() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 arc-rings opacity-50" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/3 h-[420px] w-[420px] rounded-full bg-teal/25 blur-[140px]" />

      <Shell className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <BlockHead
              align="left"
              tone="dark"
              overline="Global scale"
              title="The backbone for internet commerce."
              body="Talos moves money for businesses of every size, in every region, on one programmable surface. The network is the product."
            />
          </div>

          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {stats.map(([value, description]) => (
              <div key={value}>
                <dt className="font-display text-[clamp(2.4rem,4.4vw,3.75rem)] font-semibold leading-none tracking-[-0.04em]">
                  {value}
                </dt>
                <div aria-hidden className="mt-4 h-0.5 w-10 bg-amber" />
                <dd className="mt-4 max-w-[32ch] text-[13.5px] leading-relaxed text-white/55">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}
