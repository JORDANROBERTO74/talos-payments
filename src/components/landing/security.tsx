"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlockHead, Shell } from "./block";

const businessTypes = [
  {
    title: "SaaS",
    description:
      "Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions, invoicing and tax.",
  },
  {
    title: "Marketplace",
    description:
      "Onboard service providers, manage multiparty payments and send payouts, all in one place.",
  },
  {
    title: "E-commerce",
    description:
      "Power your online store with seamless checkout experiences, global payment methods and fraud protection.",
  },
  {
    title: "Platforms",
    description:
      "Build marketplaces and platforms that handle complex payment flows, split payments and automated payouts.",
  },
  {
    title: "Enterprise",
    description:
      "Enterprise-grade payment infrastructure with dedicated support, custom integrations and advanced reporting.",
  },
  {
    title: "Financial services",
    description:
      "Embed accounts, cards and money movement into your product with programmable financial primitives.",
  },
];

export function Security() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-sand py-20 md:py-28">
      <Shell>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <BlockHead
            align="left"
            overline="Use cases"
            title="Support for any business type"
            body="From global AI companies to category-defining marketplaces, successful businesses across industries grow with Talos."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous use cases"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-line text-ink transition-colors hover:border-ink"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next use cases"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-line text-ink transition-colors hover:border-ink"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="no-scrollbar -mx-1 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 pt-3"
        >
          {businessTypes.map((item, index) => (
            <li
              key={item.title}
              className="w-[300px] shrink-0 snap-start sm:w-[340px]"
            >
              <Link
                href="#"
                className="group flex h-full min-h-[240px] flex-col rounded-3xl bg-white p-7 shadow-ring transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-amber-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[22px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <span className="mt-6 text-[12.5px] font-semibold text-teal">
                  Read the playbook →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
