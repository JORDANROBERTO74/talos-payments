"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlockHead, Shell } from "./block";

const resources = [
  ["API reference", "Every resource, parameter and error code."],
  ["Client libraries", "Node, Python, Go, Ruby and PHP."],
  ["Webhooks", "Signed events for every state change."],
  ["Sandbox", "Test cards, clocks and failure modes."],
];

export function Developers() {
  return (
    <section id="developers" className="bg-white py-20 md:py-28">
      <Shell>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <BlockHead
              align="left"
              overline="Developers"
              title="One API for every money movement."
              body="Payments, payouts, accounts and cards share the same primitives. If you can describe the flow, you can ship it."
            />

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {resources.map(([title, detail]) => (
                <li key={title}>
                  <Link
                    href="#"
                    className="group flex h-full flex-col rounded-2xl border border-sand-line bg-sand p-4 transition-colors hover:border-teal/40"
                  >
                    <span className="flex items-center justify-between text-[13px] font-semibold text-ink">
                      {title}
                      <ArrowUpRight className="h-3.5 w-3.5 text-ink-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1.5 text-[11.5px] leading-snug text-ink-soft">
                      {detail}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem] bg-ink shadow-lift">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex gap-4 text-[11px] font-semibold uppercase tracking-[0.14em]">
                  <span className="text-amber">Request</span>
                  <span className="text-white/35">Response</span>
                </div>
                <span className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] text-white/45">
                  live
                </span>
              </div>
              <div className="p-6 font-mono text-[11.5px] leading-[2] text-white/65 sm:text-[12.5px]">
                <p className="text-white/35">$ curl https://api.talos.com/v1/charges \</p>
                <p className="pl-4">
                  -u <span className="text-amber">sk_live_••••</span>: \
                </p>
                <p className="pl-4">
                  -d amount=<span className="text-amber">1900</span> \
                </p>
                <p className="pl-4">
                  -d currency=<span className="text-amber">usd</span> \
                </p>
                <p className="pl-4">
                  -d source=<span className="text-amber">tok_visa</span>
                </p>
                <div className="my-5 h-px bg-white/10" />
                <pre className="whitespace-pre-wrap text-white/55">
{`{
  "id": "ch_9f2b",
  "amount": 1900,
  "currency": "usd",
  "status": "succeeded",
  "balance_transaction": "txn_71c"
}`}
                </pre>
                <p className="mt-4 text-[11px] text-teal-soft">
                  <span aria-hidden>✓</span> 201 created in 214 ms · idempotent
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-6 py-4 text-[11px] text-white/40">
                <span>Node · Python · Go · Ruby · PHP</span>
                <span className="text-amber">Docs →</span>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
