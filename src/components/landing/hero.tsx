"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Shell } from "./block";

const proof = [
  ["4M+", "businesses"],
  ["135", "currencies"],
  ["99.99%", "uptime"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[76px] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-24 h-[560px] w-[560px] rounded-full bg-teal/25 blur-[120px]" />
        <div className="absolute -right-20 top-16 h-[420px] w-[420px] rounded-full bg-amber/15 blur-[120px]" />
        <div className="absolute inset-0 arc-rings opacity-70" />
      </div>

      <Shell className="relative pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium text-white/70">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber" />
              Payments, billing and platforms
            </p>

            <h1 className="mt-7 max-w-[14ch] text-[clamp(2.5rem,4.6vw,4.1rem)] font-semibold leading-[1] tracking-[-0.04em]">
              Financial infrastructure to increase your revenue
            </h1>

            <p className="mt-6 max-w-[46ch] text-[16.5px] leading-relaxed text-white/65">
              Join the millions of businesses using Talos to accept online and
              in-person payments, embed financial services and launch new
              revenue models from one API.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-colors hover:bg-white"
              >
                Start now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:border-white/50"
              >
                Contact sales
              </Link>
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {proof.map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-xl font-semibold text-white">
                    {value}
                  </dd>
                  <dd className="text-[12px] text-white/45">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[460px]">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

              <div className="absolute right-0 top-2 z-10 w-[290px] rotate-[3deg] rounded-3xl bg-white p-6 text-ink shadow-lift sm:w-[310px]">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                    Checkout
                  </p>
                  <span className="rounded-full bg-teal-soft px-2 py-0.5 text-[10px] font-semibold text-teal-deep">
                    Live
                  </span>
                </div>
                <p className="mt-5 text-[17px] font-semibold">Abstraction Magazine</p>
                <p className="text-[12.5px] text-ink-soft">USD 19 per month</p>
                <div className="mt-5 rounded-xl border border-sand-line bg-sand px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-ink-mute">
                    Email
                  </p>
                  <p className="mt-1 text-[13px]">reader@studio.co</p>
                </div>
                <div className="mt-2 rounded-xl border border-sand-line bg-sand px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-ink-mute">
                      Card
                    </p>
                    <span className="flex gap-1">
                      <span className="h-3 w-5 rounded-sm bg-ink/15" />
                      <span className="h-3 w-5 rounded-sm bg-ink/15" />
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[13px] tracking-[0.12em]">
                    4242 4242 4242 4242
                  </p>
                </div>
                <button className="mt-4 w-full rounded-full bg-ink py-3 text-[13.5px] font-semibold text-white">
                  Pay USD 19.00
                </button>
              </div>

              <div className="absolute bottom-2 left-0 z-20 hidden w-[206px] -rotate-[4deg] rounded-3xl border border-white/10 bg-[#0c2735]/95 p-4 backdrop-blur-md sm:block">
                <p className="text-[9.5px] uppercase tracking-[0.14em] text-white/50">
                  Available to pay out
                </p>
                <p className="mt-1 font-display text-[19px] font-semibold text-white">
                  $553,257.51
                </p>
                <svg viewBox="0 0 220 56" className="mt-4 h-14 w-full" aria-hidden>
                  <polyline
                    points="0,46 30,40 60,42 90,28 120,32 150,18 180,22 220,8"
                    fill="none"
                    stroke="#f2b84b"
                    strokeWidth="2"
                  />
                </svg>
                <p className="mt-2 text-[11px] text-white/45">
                  Net volume today · +32.8%
                </p>
              </div>

              <div className="absolute left-2 top-14 z-30 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 text-ink shadow-lift animate-float sm:flex">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold">Payment succeeded</p>
                  <p className="text-[10.5px] text-ink-mute">
                    Visa · 4242 · USD 19.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
