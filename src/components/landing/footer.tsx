"use client";

import React from "react";
import Link from "next/link";
import { BrandWordmark } from "@/components/brand-wordmark";
import { Shell } from "./block";

const columns = [
  {
    title: "Products",
    links: ["Payments", "Billing", "Connect", "Issuing", "Radar", "Tax"],
  },
  {
    title: "Developers",
    links: ["Documentation", "API Reference", "API Status", "API Changelog", "Build a Talos App"],
  },
  {
    title: "Solutions",
    links: ["E-commerce", "SaaS", "Marketplaces", "Platforms", "Enterprise"],
  },
  {
    title: "Company",
    links: ["Customers", "Contact Sales", "Privacy & Terms", "Careers"],
  },
];

export function Footer() {
  return (
    <footer id="resources" className="bg-sand-deep">
      <Shell>
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="text-ink">
              <BrandWordmark />
            </div>
            <p className="mt-5 max-w-[34ch] text-[13px] leading-relaxed text-ink-soft">
              Financial infrastructure for the internet. Millions of businesses
              of all sizes use Talos to accept payments and manage their business
              online.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((column) => (
              <nav key={column.title}>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[12.5px] text-ink-soft transition-colors hover:text-ink"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-sand-line py-6 text-[12px] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Talos Payments, Inc.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="#" className="hover:text-ink">
              Privacy & Terms
            </Link>
            <Link href="#" className="hover:text-ink">
              Cookies
            </Link>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-teal" />
              All systems operational
            </span>
          </div>
        </div>
      </Shell>
    </footer>
  );
}
