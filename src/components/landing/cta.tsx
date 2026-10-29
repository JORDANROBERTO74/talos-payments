"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Shell } from "./block";

export function CTA() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-ink py-24 text-white md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 arc-rings opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-amber/15 blur-[130px]" />

      <Shell className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber">
            Get started
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.02]">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-white/60">
            Create an account, take a test payment and move to live keys when you
            are ready. No minimum volume, no setup fee.
          </p>

          <form
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="cta-email">
              Work email
            </label>
            <input
              id="cta-email"
              type="email"
              placeholder="you@company.com"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-[14px] text-white placeholder:text-white/35 focus:border-amber focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber px-6 text-[14px] font-semibold text-ink transition-colors hover:bg-white"
            >
              Start now
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/50">
            <Link href="#" className="transition-colors hover:text-white">
              Pricing details →
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              API reference →
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Contact sales →
            </Link>
          </div>
        </div>
      </Shell>
    </section>
  );
}
