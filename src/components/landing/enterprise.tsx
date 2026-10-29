"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { VektraLogo } from "../commons/vektra";
import { NorthwindLogo } from "../commons/northwind";
import { MarlinLineLogo } from "../commons/marlin-line";
import { SignalhubLogo } from "../commons/signalhub";
import { CreditCard, Building2, ChevronRight } from "lucide-react";

type BrandData = {
  name: string;
  image: string;
  metrics: {
    value: string;
    description: string[];
  }[];
  products: {
    name: string;
    icon: string;
    color: string;
  }[];
  headline: string;
  logoComponent: React.ComponentType<{ className?: string }>;
};

const BRAND_DATA: BrandData[] = [
  {
    name: "Vektra",
    image: "/images/vektra.svg",
    metrics: [
      {
        value: "Millions",
        description: ["Vektra owners using", "Vektra Drive Store"],
      },
      {
        value: "350+",
        description: ["US dealerships"],
      },
    ],
    products: [
      {
        name: "Payments",
        icon: "payments",
        color: "text-teal-600",
      },
      {
        name: "Connect",
        icon: "account_balance",
        color: "text-teal-600",
      },
    ],
    headline: "Learn why Vektra chose Talos to power ecommerce and payments",
    logoComponent: VektraLogo,
  },
  {
    name: "Northwind",
    image: "/images/northwind.svg",
    metrics: [
      {
        value: "5+",
        description: ["Northwind businesses on Talos including", "Northwind Retail, and Northwind Pay"],
      },
      {
        value: "50+",
        description: ["Payment methods available on Talos"],
      },
    ],
    products: [
      {
        name: "Payments",
        icon: "payments",
        color: "text-teal-600",
      },
      {
        name: "Connect",
        icon: "account_balance",
        color: "text-teal-600",
      },
    ],
    headline: "See how Northwind simplified cross-border payments with Talos",
    logoComponent: NorthwindLogo,
  },
  {
    name: "Marlin Line",
    image: "/images/marlin-line.svg",
    metrics: [
      {
        value: "130",
        description: ["Countries in logistics network"],
      },
      {
        value: "$10+",
        description: ["Billion worth of goods moved around", "the world each year"],
      },
    ],
    products: [
      {
        name: "Payments",
        icon: "payments",
        color: "text-teal-600",
      },
      {
        name: "Connect",
        icon: "account_balance",
        color: "text-teal-600",
      },
    ],
    headline: "See how Marlin Line tapped into new technology to make it easier to ship around the world",
    logoComponent: MarlinLineLogo,
  },
  {
    name: "Signalhub",
    image: "/images/signalhub.svg",
    metrics: [
      {
        value: "+5.5%",
        description: ["Uplift from Talos's Global", "Payments Infrastructure"],
      },
      {
        value: "+1%",
        description: ["Uplift from Adaptive Acceptance"],
      },
    ],
    products: [
      {
        name: "Payments",
        icon: "payments",
        color: "text-teal-600",
      },
      {
        name: "Talos Lens",
        icon: "analytics",
        color: "text-amber-500",
      },
    ],
    headline: "See how Signalhub increased authorization rates by 10% with Talos",
    logoComponent: SignalhubLogo,
  },
];

const BRAND_OVERLAYS: Record<string, { gradient: string; shadow: string; borderColor: string }> = {
  Vektra: {
    gradient: "from-teal-900/30 via-teal-800/40 to-teal-900/60",
    shadow: "rgba(14,124,107,0.35)",
    borderColor: "border-teal-700",
  },
  Northwind: {
    gradient: "from-amber-900/30 via-amber-800/40 to-amber-900/60",
    shadow: "rgba(242,184,75,0.3)",
    borderColor: "border-amber-500",
  },
  "Marlin Line": {
    gradient: "from-teal-900/40 via-teal-800/30 to-teal-900/60",
    shadow: "rgba(10,94,81,0.4)",
    borderColor: "border-teal-600",
  },
  Signalhub: {
    gradient: "from-teal-900/30 via-slate-800/40 to-teal-900/60",
    shadow: "rgba(14,124,107,0.3)",
    borderColor: "border-teal-500",
  },
};

export function Enterprise() {
  const [selectedBrand, setSelectedBrand] = useState<BrandData>(BRAND_DATA[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const selectedBrandRef = useRef(selectedBrand);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  selectedBrandRef.current = selectedBrand;

  const rotateToNext = useCallback(() => {
    const current = selectedBrandRef.current;
    const idx = BRAND_DATA.findIndex((b) => b.name === current.name);
    const nextIdx = (idx + 1) % BRAND_DATA.length;
    return BRAND_DATA[nextIdx];
  }, []);

  const applyBrand = useCallback((brand: BrandData) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedBrand(brand);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, []);

  const handleBrandSelect = useCallback(
    (brand: BrandData, isUserInitiated = false) => {
      if (brand.name === selectedBrandRef.current.name) return;

      if (isUserInitiated && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      applyBrand(brand);

      if (isUserInitiated) {
        setTimeout(() => {
          const id = setInterval(() => {
            const next = rotateToNext();
            applyBrand(next);
          }, 5000);
          intervalRef.current = id;
        }, 350);
      }
    },
    [applyBrand, rotateToNext]
  );

  useEffect(() => {
    const id = setInterval(() => {
      const next = rotateToNext();
      applyBrand(next);
    }, 5000);
    intervalRef.current = id;
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [rotateToNext, applyBrand]);

  return (
    <section className="bg-white py-24 diagonal-container -mt-10 relative z-25">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        {/* Header Section - Top */}
        <div className="mb-16">
          <h2 className="text-[#0e7c6b] font-bold text-sm uppercase tracking-wide mb-3">
            Enterprise reinvention
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a1f2c] mb-6">
            Bring agility to your enterprise
          </h3>
          <p className="text-lg text-[#43514d] mb-8 leading-relaxed max-w-3xl">
            Quickly build great payments experiences with a{" "}
            <Link href="#" className="text-[#0e7c6b] hover:underline">
              professional services team
            </Link>
            ,{" "}
            <Link href="#" className="text-[#0e7c6b] hover:underline">
              certified partners
            </Link>
            , and{" "}
            <Link href="#" className="text-[#0e7c6b] hover:underline">
              Relay
            </Link>
            ,{" "}
            <Link href="#" className="text-[#0e7c6b] hover:underline">
              SAP
            </Link>
            , and{" "}
            <Link href="#" className="text-[#0e7c6b] hover:underline">
              Talos App Marketplace
            </Link>
            .
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0e7c6b] text-white font-semibold rounded-lg hover:bg-[#0a5e51] transition-colors"
          >
            Explore Talos for enterprises{" "}
            <ChevronRight className="text-sm ml-2" />
          </Link>
        </div>

        {/* Metrics and Image - Side by Side */}
        <div className="grid lg:grid-cols-[auto_minmax(600px,750px)] gap-16 items-stretch min-h-[250px] md:min-h-[400px]">
          {/* Left Column - Statistics */}
          <div className="flex flex-col">
            <div className="flex flex-col justify-between flex-1 min-h-[250px] md:min-h-[400px]">
              {/* Dynamic Metrics */}
              <div
                key={selectedBrand.name}
                className={`flex flex-col justify-between flex-1 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
              >
                {selectedBrand.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`border-l-2 ${BRAND_OVERLAYS[selectedBrand.name]?.borderColor || "border-[#0a1f2c]"} pl-4`}
                  >
                    <p className="text-2xl font-bold text-[#0a1f2c] mb-1">{metric.value}</p>
                    {metric.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-base text-[#43514d]">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}

                {/* Products Used */}
                <div
                  className={`border-l-2 ${BRAND_OVERLAYS[selectedBrand.name]?.borderColor || "border-[#0a1f2c]"} pl-4`}
                >
                  <p className="text-lg text-[#43514d] mb-3 font-bold">Products used</p>
                  <div className="space-y-2">
                    {selectedBrand.products.map((product, index) => {
                      const IconComponent = product.icon === "payments" ? CreditCard : Building2;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <IconComponent className="text-xl text-[#0a1f2c]" />
                          <span className="text-base text-[#0a1f2c]">{product.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Brand Card */}
          <div className="relative h-full min-h-[250px] md:min-h-[400px] w-full">
            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[250px] md:h-[400px]">
              <div className="w-full h-full relative">
                {/* Brand Image */}
                <div
                  key={`image-${selectedBrand.name}`}
                  className={`absolute inset-0 transition-all duration-300 ${isTransitioning
                    ? "opacity-0 scale-105"
                    : "opacity-100 scale-100"
                    }`}
                >
                  <Image
                    src={selectedBrand.image}
                    alt={`${selectedBrand.name} case study`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>

                {/* Gradient Overlay - Dynamic based on brand */}
                {BRAND_OVERLAYS[selectedBrand.name] && (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${BRAND_OVERLAYS[selectedBrand.name].gradient}`}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        boxShadow: `inset 0 0 100px ${BRAND_OVERLAYS[selectedBrand.name].shadow}`,
                      }}
                    ></div>
                  </>
                )}





                {/* Overlay Text - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 z-10">
                  <h4
                    key={`headline-${selectedBrand.name}`}
                    className={`text-white text-lg font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    {selectedBrand.headline}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {BRAND_DATA.map((brand, index) => {
              const LogoComponent = brand.logoComponent;
              const isSelected = selectedBrand.name === brand.name;
              return (
                <button
                  key={index}
                  onClick={() => handleBrandSelect(brand, true)}
                  className={`h-16 flex items-center justify-center transition-all duration-200 cursor-pointer ${isSelected
                    ? "opacity-100 scale-110 rounded-lg px-4 py-2"
                    : "opacity-40 hover:opacity-100 hover:scale-105"
                    }`}
                  aria-label={`Select ${brand.name} case study`}
                >
                  <LogoComponent />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
