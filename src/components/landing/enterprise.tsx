"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlockHead, Shell } from "./block";

const cases = [
  {
    company: "Vektra",
    image: "/images/vektra.jpg",
    headline: "Learn why Vektra chose Talos to power ecommerce and payments",
    stats: [
      ["Millions", "owners using Vektra Drive Store"],
      ["1,200+", "US dealerships on Talos"],
    ],
  },
  {
    company: "Northwind",
    image: "/images/northwind.jpg",
    headline: "See how Northwind simplified cross-border payments with Talos",
    stats: [
      ["12,000+", "businesses on Talos"],
      ["135+", "payment methods available"],
    ],
  },
  {
    company: "Marlin Line",
    image: "/images/marlin-line.jpg",
    headline: "How Marlin Line tapped into new technology to ship around the world",
    stats: [
      ["120+", "countries in its logistics network"],
      ["$40B", "worth of goods moved yearly"],
    ],
  },
  {
    company: "Signalhub",
    image: "/images/signalhub.jpg",
    headline: "How Signalhub increased authorisation rates by 10% with Talos",
    stats: [
      ["+5.5%", "uplift from global infrastructure"],
      ["10%", "uplift from Adaptive Acceptance"],
    ],
  },
];

const pathways = [
  ["Professional services", "A dedicated team to scope and deliver your migration."],
  ["Certified partners", "Vetted agencies that build and deploy on Talos."],
  ["Talos App Marketplace", "Prebuilt apps for your finance and commerce stack."],
];

export function Enterprise() {
  return (
    <section id="solutions" className="bg-white py-20 md:py-28">
      <Shell>
        <BlockHead
          overline="Enterprise reinvention"
          title="Bring agility to your enterprise"
          body="The same primitives that power a startup's first payment run the largest commerce platforms in the world."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.company}
              className="group overflow-hidden rounded-[1.75rem] bg-sand shadow-ring"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  width={720}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                />
                <p className="absolute bottom-4 left-6 font-display text-lg font-semibold text-white">
                  {item.company}
                </p>
              </div>
              <div className="p-6">
                <h3 className="max-w-[34ch] text-[16.5px] font-semibold leading-snug text-ink">
                  {item.headline}
                </h3>
                <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-sand-line pt-4">
                  {item.stats.map(([value, label]) => (
                    <div key={label}>
                      <dt className="font-display text-[18px] font-semibold text-ink">
                        {value}
                      </dt>
                      <dd className="mt-1 text-[11.5px] leading-snug text-ink-soft">
                        {label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-semibold text-teal transition-colors hover:text-ink"
                >
                  Read the story
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {pathways.map(([title, detail]) => (
            <li key={title}>
              <Link
                href="#"
                className="flex h-full flex-col rounded-2xl border border-sand-line bg-sand p-5 transition-colors hover:border-teal/40 hover:bg-teal-soft/40"
              >
                <span className="text-[13.5px] font-semibold text-ink">{title}</span>
                <span className="mt-2 text-[12.5px] leading-relaxed text-ink-soft">
                  {detail}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
