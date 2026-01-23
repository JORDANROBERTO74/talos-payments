"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

export function Security() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const businessTypes = [
    {
      title: "AI",
      description: "FractalGrid supports businesses across the AI ecosystem—from usage-based billing for AI assistants like Perplexity to premium subscriptions for infrastructure providers like OpenAI.",
      link: "#",
      logos: [
        { name: "OpenAI", icon: null },
        { name: "CURSOR", icon: "cube" },
        { name: "ANTHROPIC", icon: "triangle" },
      ],
    },
    {
      title: "SaaS",
      description: "Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions, invoicing, tax, accounting, and more.",
      link: "#",
      logos: [
        { name: "slack", icon: "tag" },
        { name: "twilio", icon: "circle" },
        { name: "Linear", icon: "dot" },
      ],
    },
    {
      title: "Marketplace",
      description: "Get everything you need to onboard service providers, manage multiparty payments, and send payouts, all in one place.",
      link: "#",
      logos: [
        { name: "BLOOMNATION", icon: null },
        { name: "instacart", icon: "carrot" },
        { name: "deliveroo", icon: "delivery" },
      ],
    },
    {
      title: "E-commerce",
      description: "Power your online store with seamless checkout experiences, global payment methods, and fraud protection built for scale.",
      link: "#",
      logos: [
        { name: "Shopify", icon: null },
        { name: "WooCommerce", icon: null },
        { name: "BigCommerce", icon: null },
      ],
    },
    {
      title: "Platforms",
      description: "Build marketplaces and platforms that handle complex payment flows, split payments, and automated payouts to sellers.",
      link: "#",
      logos: [
        { name: "Airbnb", icon: null },
        { name: "Uber", icon: null },
        { name: "Lyft", icon: null },
      ],
    },
    {
      title: "Enterprise",
      description: "Enterprise-grade payment infrastructure with dedicated support, custom integrations, and advanced reporting capabilities.",
      link: "#",
      logos: [
        { name: "Microsoft", icon: null },
        { name: "Amazon", icon: null },
        { name: "Google", icon: null },
      ],
    },
  ];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
    scrollContainerRef.current.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="bg-white py-36 diagonal-container -mt-10 relative z-25">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a2540] mb-6">
            Support for any business type
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-lg text-[#425466] flex-1">
              From global AI companies to category-defining marketplaces, successful businesses across industries grow and scale with FractalGrid.
            </p>
            <div className="flex items-center gap-1 flex-shrink-0 w-full md:w-auto">
              <Button size={"sm"} variant={"outline"} onClick={handleScrollLeft} className="flex-1 md:flex-none">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button size={"sm"} variant={"outline"} onClick={handleScrollRight} className="flex-1 md:flex-none">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Cards Grid - Scrollable */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col w-[280px] sm:w-[320px] flex-shrink-0"
            >
              {/* Top border accent */}
              <div className="h-1 bg-gradient-to-r from-[#635bff] to-[#00d4ff] rounded-t-lg -mx-6 -mt-6 mb-4"></div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0a2540] mb-3">
                {business.title}
              </h3>

              {/* Description */}
              <p className="text-[#425466] mb-6 leading-relaxed flex-grow">
                {business.description}
              </p>

              {/* Learn more link */}
              <Link
                href={business.link}
                className="text-[#635bff] font-semibold text-sm hover:text-[#5851ea] transition-colors mb-6 inline-flex items-center"
              >
                Learn more{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

              {/* Logos */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                {business.logos.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="text-xs font-semibold text-[#425466] opacity-60"
                  >
                    {logo.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
