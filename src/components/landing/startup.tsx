"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlockHead, Shell } from "./block";

export function Startup() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Shell>
        <BlockHead
          overline="Built for growth"
          title="Take your startup further, faster"
          body="Form the company, launch payments and watch every metric from one place. Talos grows with you instead of becoming the thing you rebuild."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <article className="relative overflow-hidden rounded-[1.75rem] bg-ink p-8 text-white lg:col-span-2">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-amber/20 blur-3xl" />
            </div>
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber">
                Entity + payments
              </p>
              <h3 className="mt-5 max-w-[24ch] text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight">
                Form a legal entity, issue stock and start accepting payments.
              </h3>
              <p className="mt-4 max-w-[44ch] text-[14px] leading-relaxed text-white/60">
                Test your product idea by launching payments with little to no
                code, then turn on billing when the first customer asks.
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-[13.5px] font-semibold text-ink transition-colors hover:bg-white"
              >
                Start from zero
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="flex flex-col rounded-[1.75rem] bg-white p-7 shadow-ring">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
              Usage
            </p>
            <p className="mt-5 font-display text-[34px] font-semibold leading-none text-ink">
              184,320
            </p>
            <p className="mt-1 text-[12px] text-ink-mute">tokens metered today</p>
            <svg viewBox="0 0 160 48" className="mt-5 h-12 w-full" aria-hidden>
              <polyline
                points="0,40 20,34 40,38 60,26 80,30 100,18 120,22 140,10 160,14"
                fill="none"
                stroke="#0e7c6b"
                strokeWidth="2"
              />
            </svg>
            <p className="mt-4 text-[12.5px] leading-relaxed text-ink-soft">
              Monitor your cloud token usage with real-time analytics and
              insights, straight from the billing meter.
            </p>
          </article>
        </div>

        <figure className="mt-5 rounded-[1.75rem] border border-sand-line bg-white p-7 sm:p-9">
          <blockquote className="max-w-[62ch] font-display text-[clamp(1.15rem,1.9vw,1.45rem)] font-medium leading-snug text-ink">
            “Hey, can I buy a license just for myself?”
          </blockquote>
          <figcaption className="mt-4 flex flex-wrap items-center gap-3 text-[12.5px] text-ink-mute">
            <span className="h-7 w-7 rounded-full bg-amber/40" aria-hidden />
            <span className="font-semibold text-ink">Early access customer</span>
            <span aria-hidden>·</span>
            <span>Answered with a payment link in four minutes</span>
          </figcaption>
        </figure>
      </Shell>
    </section>
  );
}
