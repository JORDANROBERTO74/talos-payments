"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BlockHead, Shell } from "./block";

const products = [
  {
    index: "01",
    name: "Payments",
    description: "Online payments aimed at growth.",
    detail:
      "Accept cards, wallets and local methods with adaptive acceptance and fraud protection built in.",
  },
  {
    index: "02",
    name: "Billing",
    description: "Subscription management and recurring billing.",
    detail:
      "Model flat, usage-based or hybrid pricing without rebuilding your finance stack.",
  },
  {
    index: "03",
    name: "Platforms",
    description: "Payments for platforms and marketplaces.",
    detail:
      "Onboard sellers, split payments and send payouts from the same ledger as your revenue.",
  },
];

const paymentRows = [
  ["Tax", "Automate tax registration, collection and filing across every jurisdiction you sell in."],
  ["Radar", "AI-powered fraud protection that adapts to your own transaction history."],
  ["Issuing", "Create card issuing programmes without managing a bank relationship."],
];

const tiers = [
  {
    name: "Standard",
    price: "$49",
    seats: "Up to 5 users",
    features: ["12 months of history", "4 hr data refresh", "500+ integrations"],
  },
  {
    name: "Professional",
    price: "$149",
    seats: "Up to 25 users",
    popular: true,
    features: ["24 months of history", "1 hr data refresh", "1,000+ integrations"],
  },
  {
    name: "Enterprise",
    price: "$299",
    seats: "Unlimited users",
    features: ["Unlimited history", "15 min data refresh", "Priority support"],
  },
];

const platformLinks = [
  ["Issuing", "Card programmes for your platform"],
  ["Instant Payouts", "Fast payments to sellers and creators"],
  ["Payment Elements", "Customisable checkout UIs"],
];

const issuingLinks = [
  ["Connect", "Powering platform payments"],
  ["Financial Accounts", "Ledger accounts for platforms"],
  ["Capital", "Embedded financing for your customers"],
];

function CardVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-amber/15 blur-2xl"
      />
      <div className="relative aspect-[1.58] w-full overflow-hidden rounded-[1.75rem] bg-ink p-6 text-white shadow-lift">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-teal/60 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-amber/30 blur-3xl" />
        </div>
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="font-display text-lg font-semibold tracking-tight">
              Talos
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              Commercial
            </span>
          </div>
          <div>
            <div className="mb-4 h-9 w-12 rounded-md bg-gradient-to-br from-amber/80 to-amber/30" />
            <p className="font-mono text-[15px] tracking-[0.18em] text-white/85">
              4242 4242 4242 4242
            </p>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                  Card holder
                </p>
                <p className="text-[12.5px]">Abstraction Studio</p>
              </div>
              <p className="font-mono text-[12px] text-white/70">12 / 28</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white p-4 text-ink shadow-soft">
        <div className="flex items-center justify-between">
          <p className="text-[12.5px] font-semibold">Card programme live</p>
          <span className="rounded-full bg-teal-soft px-2 py-0.5 text-[10px] font-semibold text-teal-deep">
            Issuing
          </span>
        </div>
        <p className="mt-1 text-[11.5px] text-ink-soft">
          3,480 cards issued · $1.2M authorised this month
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <>
      <section id="products" className="bg-sand py-20 md:py-28">
        <Shell>
          <BlockHead
            overline="Products"
            title="One platform, every payment flow"
            body="A fully integrated suite of financial products, sharing one ledger, one API and one set of controls."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href="#"
                className="group flex flex-col rounded-3xl bg-white p-7 shadow-ring transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="font-display text-[12px] font-semibold tracking-[0.18em] text-ink-mute">
                  {product.index}
                </span>
                <h3 className="mt-6 text-[24px] font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 text-[14.5px] font-medium text-teal">
                  {product.description}
                </p>
                <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                  {product.detail}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-ink">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Shell>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <BlockHead
                align="left"
                overline="Global payments"
                title="Accept and optimize payments, globally"
                body="Increase authorisation rates, offer local payment methods and reduce fraud using AI — without managing a dozen acquirers."
              />
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-teal-deep"
              >
                Start with Payments
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <ol className="lg:col-span-7">
              {paymentRows.map(([name, detail], index) => (
                <li
                  key={name}
                  className="grid gap-3 border-t border-sand-line py-7 sm:grid-cols-[64px_1fr] sm:gap-8"
                >
                  <span className="font-display text-[13px] font-semibold tracking-[0.14em] text-amber-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[22px] font-semibold text-ink">{name}</h3>
                    <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-ink-soft">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Shell>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <Shell>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <BlockHead
                align="left"
                overline="Billing"
                title="Capture recurring revenue"
                body="Manage flat-rate, usage-based and hybrid pricing, minimise churn and automate finance operations on one meter."
              />
              <div className="mt-8 space-y-3">
                {[
                  "Invoicing for creation, collection and tracking",
                  "Usage-based billing for metering and consumption",
                  "Talos Lens for custom revenue reports, no SQL required",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-[13.5px] text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-deep" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-7">
                <div className="flex items-center justify-between border-b border-sand-line pb-4">
                  <p className="text-[13px] font-semibold text-ink">Quantum</p>
                  <div className="flex gap-5 text-[12px] text-ink-mute">
                    <span>Products</span>
                    <span className="font-semibold text-teal">Pricing</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`relative rounded-2xl p-4 ${
                        tier.popular
                          ? "bg-ink text-white shadow-soft"
                          : "bg-sand text-ink"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1.5">
                        <p
                          className={`text-[10.5px] font-semibold uppercase tracking-[0.08em] ${
                            tier.popular ? "text-amber" : "text-teal"
                          }`}
                        >
                          {tier.name}
                        </p>
                        {tier.popular ? (
                          <span className="rounded-full bg-amber px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-ink">
                            Popular
                          </span>
                        ) : null}
                      </div>
                      <p
                        className={`mt-1 text-[11.5px] ${
                          tier.popular ? "text-white/50" : "text-ink-mute"
                        }`}
                      >
                        {tier.seats}
                      </p>
                      <p className="mt-3 font-display text-[26px] font-semibold">
                        {tier.price}
                        <span
                          className={`ml-1 text-[11px] font-normal ${
                            tier.popular ? "text-white/50" : "text-ink-mute"
                          }`}
                        >
                          /mo
                        </span>
                      </p>
                      <ul className="mt-4 space-y-2">
                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className={`flex items-start gap-2 text-[11.5px] leading-snug ${
                              tier.popular ? "text-white/70" : "text-ink-soft"
                            }`}
                          >
                            <Check
                              className={`mt-0.5 h-3 w-3 shrink-0 ${
                                tier.popular ? "text-amber" : "text-teal"
                              }`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 h-[400px] w-[400px] rounded-full bg-amber/10 blur-[120px]" />
          <div className="absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full bg-teal/25 blur-[120px]" />
        </div>
        <Shell className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <BlockHead
                align="left"
                tone="dark"
                overline="Platforms"
                title="Set up multiparty payments and payouts"
                body="Integrate payments into your platform or marketplace with end-to-end flows: onboarding, splitting, payouts and reconciliation."
              />
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-semibold text-ink transition-colors hover:bg-amber"
              >
                Start with Connect
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur">
                <div className="flex items-center justify-between px-4 py-3 text-[10.5px] uppercase tracking-[0.16em] text-white/40">
                  <span>POST /v1/payment_intents</span>
                  <span className="text-amber">201 created</span>
                </div>
                <div className="rounded-2xl bg-[#081821] p-5 font-mono text-[11.5px] leading-[1.9] text-white/70 sm:text-[12.5px]">
                  <p className="text-white/35">{"// split a marketplace charge"}</p>
                  <p>
                    <span className="text-amber">await</span> talos.paymentIntents.
                    <span className="text-white">create</span>({"{"}
                  </p>
                  <p className="pl-4">
                    amount: <span className="text-amber">1900</span>,
                  </p>
                  <p className="pl-4">
                    currency: <span className="text-amber">&apos;usd&apos;</span>,
                  </p>
                  <p className="pl-4">
                    transfer_data: {"{"} destination:{" "}
                    <span className="text-amber">&apos;acct_9f2&apos;</span> {"}"},
                  </p>
                  <p className="pl-4">
                    application_fee_amount:{" "}
                    <span className="text-amber">190</span>,
                  </p>
                  <p>{"}"});</p>
                  <p className="mt-3 text-white/35">
                    <span className="text-teal-soft">✓</span> 10% platform fee
                    recorded · payout scheduled
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {platformLinks.map(([name, detail]) => (
                  <li key={name} className="border-t border-white/15 pt-3">
                    <p className="text-[13px] font-semibold text-white">{name}</p>
                    <p className="mt-1 text-[11.5px] leading-snug text-white/45">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Shell>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Shell>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <CardVisual />
            </div>
            <div className="lg:col-span-6">
              <BlockHead
                align="left"
                overline="Issuing"
                title="Create a card issuing program"
                body="Launch, manage and scale a commercial card programme without setup fees, while keeping spend controls in one place."
              />
              <ul className="mt-8 border-t border-sand-line">
                {issuingLinks.map(([name, detail]) => (
                  <li
                    key={name}
                    className="flex items-baseline justify-between gap-4 border-b border-sand-line py-4"
                  >
                    <span className="text-[14px] font-semibold text-ink">{name}</span>
                    <span className="text-right text-[12.5px] text-ink-soft">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}
