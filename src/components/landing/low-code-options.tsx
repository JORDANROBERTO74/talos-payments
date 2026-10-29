"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlockHead, Shell } from "./block";

export function LowCodeOptions() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <BlockHead
              align="left"
              overline="Integrations"
              title="Extend Talos without writing code"
              body="Start from the marketplace, bring in a partner, or make the checkout look like yours. The ledger underneath never changes."
            />
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[13.5px] font-semibold text-ink transition-colors hover:border-ink"
            >
              Browse the directory
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <Link
            href="#"
            className="group relative overflow-hidden rounded-[1.75rem] bg-ink p-8 text-white lg:col-span-2 lg:row-span-2"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
              <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
            </div>
            <div className="relative flex h-full flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber">
                Marketplace
              </p>
              <h3 className="mt-5 max-w-[22ch] text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight">
                Plug in the tools your finance team already runs.
              </h3>
              <p className="mt-4 max-w-[42ch] text-[13.5px] leading-relaxed text-white/55">
                Out-of-the-box connections for tax, accounting, analytics and
                identity, reviewed by Talos and covered by the same audit trail.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-10">
                {["NetSuite", "Xero", "QuickBooks", "Snowflake", "Okta", "Stripe Tax"].map(
                  (app) => (
                    <span
                      key={app}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-[11.5px] text-white/70"
                    >
                      {app}
                    </span>
                  )
                )}
              </div>
            </div>
          </Link>

          <Link
            href="#"
            className="group flex flex-col rounded-[1.75rem] bg-white p-7 shadow-ring transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
              Partners
            </p>
            <h3 className="mt-4 text-[20px] font-semibold leading-snug text-ink">
              Work with a Talos consulting partner.
            </h3>
            <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
              Integrate and deploy Talos with a team that has done it before, on
              a fixed scope.
            </p>
            <span className="mt-auto pt-5 text-[12.5px] font-semibold text-ink">
              Find a partner →
            </span>
          </Link>

          <Link
            href="#"
            className="group flex flex-col rounded-[1.75rem] bg-amber-soft p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
              Custom branding
            </p>
            <h3 className="mt-4 text-[20px] font-semibold leading-snug text-ink">
              Make every touchpoint yours.
            </h3>
            <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
              Customise how your brand appears across the Talos products your
              customers use, from domain to palette.
            </p>
            <span className="mt-auto pt-5 text-[12.5px] font-semibold text-ink">
              See branding options →
            </span>
          </Link>
        </div>
      </Shell>
    </section>
  );
}
