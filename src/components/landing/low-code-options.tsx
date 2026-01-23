"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { CheckCircle2, ChevronRight, Shield, User } from "lucide-react";

export function LowCodeOptions() {
  return (
    <section className="bg-white pt-36 diagonal-container relative z-25">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-[#635bff] font-bold text-sm uppercase tracking-wide mb-3">
            Built for growth
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0a2540] mb-4 sm:mb-6">
            Take your startup further, faster
          </h3>
          <p className="text-base sm:text-lg text-[#425466] mb-6 sm:mb-8 leading-relaxed max-w-3xl">
            Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low-to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-wrap gap-6">
          {/* Card 1: Atlas */}
          <div className="bg-white rounded-xl p-1 shadow-lg group flex flex-col flex-1 min-w-[320px] max-w-full md:max-w-[calc(33.333%-16px)]">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative flex-shrink-0 h-[320px]">
              <div className="rounded-tl-lg w-full max-w-[420px] mx-auto">
                <div className="grid grid-cols-2 gap-6 items-center justify-items-center">
                  {/* Squarespace Logo - Top Left (larger, black) */}
                  <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
                    <div className="flex flex-col items-center justify-center px-2">
                      {/* Squarespace S icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                        <path d="M12 3L4 7L12 11L20 7L12 3Z" fill="white" />
                        <path d="M4 17L12 21L20 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-white text-[10px] font-bold leading-tight tracking-tight">SQUARESPACE</span>
                    </div>
                  </div>

                  {/* HubSpot-like Logo - Top Right (coral/orange) */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="5" fill="white" />
                      <circle cx="16" cy="7" r="2.5" fill="white" />
                      <circle cx="24" cy="16" r="2.5" fill="white" />
                      <circle cx="16" cy="25" r="2.5" fill="white" />
                      <circle cx="8" cy="16" r="2.5" fill="white" />
                      <circle cx="20.5" cy="10.5" r="2" fill="white" />
                      <circle cx="20.5" cy="21.5" r="2" fill="white" />
                      <circle cx="11.5" cy="10.5" r="2" fill="white" />
                      <circle cx="11.5" cy="21.5" r="2" fill="white" />
                    </svg>
                  </div>

                  {/* Intuit Logo - Bottom Left (blue) */}
                  <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold tracking-wide">intuit</span>
                  </div>

                  {/* Segment-like Logo - Bottom Right (white with red flame icon) */}
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-md">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Flame/droplet shape */}
                      <path d="M16 6C14 6 12 8 12 10C12 12 14 14 16 18C18 14 20 12 20 10C20 8 18 6 16 6Z" fill="#EF4444" />
                      <path d="M16 18C14 18 12 20 12 22C12 24 14 26 16 28C18 26 20 24 20 22C20 20 18 18 16 18Z" fill="#EF4444" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[220px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4 flex-shrink-0">


              {/* Title and Description */}
              <h4 className="text-xl font-bold text-[#0a2540] mb-2">Use a pre-integrated platform</h4>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                Explore our directory to find out-of-the-box solutions that connect with Stripe, such as Squarespace and Lightspeed.              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#635bff] hover:text-[#5851ea] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                See directory{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>

          {/* Card 2: Payment Links */}
          <div className="bg-white rounded-xl p-1 shadow-lg group flex flex-col flex-1 min-w-[320px] max-w-full md:max-w-[calc(33.333%-16px)]">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative flex-shrink-0 h-[320px]">
              <div className="flex items-center justify-center gap-6 w-full px-8 py-8">
                {/* Left Circle - User with Shield */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg relative">
                    {/* User icon with gradient colors */}
                    <div className="relative">
                      <User className="w-14 h-14 text-cyan-400" strokeWidth={2} />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-teal-400 opacity-20 rounded-full"></div>
                    </div>
                    {/* Shield badge with checkmark */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center shadow-md border-2 border-white relative">
                      <Shield className="w-4 h-4 text-white" fill="currentColor" />
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-purple-700 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrows - Improved styling */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div
                      key={i}
                      className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[7px] border-l-blue-500"
                    />
                  ))}
                </div>

                {/* Right Circle - Stripe App Windows */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg relative">
                    {/* Background window (blue) - rotated */}
                    <div className="absolute w-16 h-16 bg-blue-100 rounded-md transform rotate-[-8deg] shadow-sm border border-blue-200"></div>
                    {/* Foreground window (white) - slightly rotated */}
                    <div className="relative w-14 h-14 bg-white rounded-md border border-slate-200 shadow-md transform rotate-[2deg]">
                      {/* Window header bar */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-slate-50 border-b border-slate-200 rounded-t-md"></div>
                      {/* Stripe S logo in bottom-left */}
                      <div className="absolute bottom-1.5 left-1.5 w-5 h-5 bg-purple-700 rounded flex items-center justify-center shadow-sm">
                        <span className="text-white text-[9px] font-bold leading-none">S</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[220px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4 flex-shrink-0">


              {/* Title and Description */}
              <h4 className="text-xl font-bold text-[#0a2540] mb-2">Build with Stripe-certified experts</h4>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#635bff] hover:text-[#5851ea] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                View partners{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>

          {/* Card 3: Sell products */}
          <div className="bg-white rounded-xl p-1 shadow-lg group flex flex-col flex-1 min-w-[320px] max-w-full md:max-w-[calc(33.333%-16px)]">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative flex-shrink-0 h-[320px]">
              <div className="bg-white rounded-tl-lg p-4 w-full max-w-[320px] mx-auto">
                {/* Brand Elements Form */}
                <div className="text-xs font-semibold text-[#0a2540] mb-1">Brand elements</div>
                <div className="text-[10px] text-[#425466] mb-4 leading-relaxed">
                  Customize how your brand appears globally across the Stripe products your customers use.
                </div>

                {/* Icon field */}
                <div className="flex gap-2 items-center justify-between mb-3">
                  <label className="text-xs text-[#425466] mb-1 block">Icon</label>
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center bg-white hover:bg-slate-50 transition-colors">
                      <span className="text-sm font-semibold text-[#0a2540]">T</span>
                    </button>
                  </div>
                </div>

                {/* Logo field */}
                <div className="flex gap-2 items-center justify-between mb-3">
                  <label className="text-xs text-[#425466] mb-1 block">Logo</label>
                  <input
                    type="text"
                    value="Typeform"
                    readOnly
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm bg-white text-[#0a2540]"
                  />
                </div>

                <Separator className="my-4" />

                {/* Brand color field */}
                <div className="flex gap-2 items-center justify-between">
                  <label className="text-xs text-[#425466] mb-1 block">Brand color</label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded border border-slate-300 bg-[#F5F0EA]" />
                    <input
                      type="text"
                      value="#F5F0EA"
                      readOnly
                      className="flex-1 border border-slate-300 rounded px-3 py-2 text-xs bg-white text-[#425466] font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[220px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4 flex-shrink-0">


              {/* Title and Description */}
              <h4 className="text-xl font-bold text-[#0a2540] mb-2">Try our no-code products</h4>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                Set up usage-based billing, accept an in-person payment with your phone, or share a payment link directly from your Dashboard to start generating revenue in minutes—no code required.                </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#635bff] hover:text-[#5851ea] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Explore no-code{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
