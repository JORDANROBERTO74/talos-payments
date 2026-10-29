"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Code, BookOpen } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1f2c] mb-4 sm:mb-6">Ready to get started?</h2>
            <p className="text-[#43514d] mb-6 sm:mb-8 text-base sm:text-lg max-w-sm">
              Explore Talos Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold rounded-full text-white bg-[#0e7c6b] hover:bg-[#0a1f2c] transition-colors shadow-lg shadow-teal-600/30 group"
              >
                Start now{" "}
                <ArrowRight className="text-sm ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold rounded-full text-[#0e7c6b] bg-[#0e7c6b]/10 hover:bg-[#0e7c6b]/20 transition-colors"
              >
                Contact sales{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-2 text-[#0a1f2c] font-bold mb-2">
                <Code className="text-[#0e7c6b]" />
                <span>Always know what you pay</span>
              </div>
              <p className="text-sm text-[#43514d]">
                Integrated per-transaction pricing with no hidden fees.
              </p>
              <Link
                href="#"
                className="text-[#0e7c6b] font-semibold text-sm mt-3 inline-block hover:text-[#0a1f2c]"
              >
                Pricing details →
              </Link>
            </div>
            <div className="p-6 transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-2 text-[#0a1f2c] font-bold mb-2">
                <BookOpen className="text-[#0e7c6b]" />
                <span>Start your integration</span>
              </div>
              <p className="text-sm text-[#43514d]">
                Get up and running with our easy-to-use developer docs.
              </p>
              <Link
                href="#"
                className="text-[#0e7c6b] font-semibold text-sm mt-3 inline-block hover:text-[#0a1f2c]"
              >
                API Reference →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
