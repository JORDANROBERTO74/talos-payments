"use client";

import React from "react";
import Link from "next/link";
import { CardChip } from "../commons/cardChip";
import { CreditCard, Receipt, Building2, ChevronRight, Sofa } from "lucide-react";

function ModularDiagram() {
  // Map module names by position (rowIndex, colIndex)
  const moduleNames: { [key: string]: string } = {
    '0-2': 'tax',        // Row 0, Col 2 - visible
    '1-0': 'billing',
    '1-3': 'invoicing',
    '1-4': 'capital',
    '2-1': 'atlas',
    '2-2': 'payments',
    '2-3': 'climate',
    '2-5': 'treasury',
    '3-0': 'connect',
    '3-3': 'radar',
    '4-3': 'checkout',
    '4-4': 'issuing',
    '5-1': 'identity',
    '5-4': 'sigma',
    '5-5': 'elements',
  };

  // Icon components for each name
  const getIcon = (name: string | undefined) => {
    if (!name) return null;

    const iconSize = "w-5 h-5";
    const iconColor = "text-slate-600";

    switch (name) {
      case 'tax':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="8" x2="16" y2="8" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="8" y1="16" x2="12" y2="16" />
          </svg>
        );
      case 'billing':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="4" width="14" height="16" rx="1" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="9" y1="16" x2="13" y2="16" />
          </svg>
        );
      case 'invoicing':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
          </svg>
        );
      case 'capital':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v12M6 12h12" />
          </svg>
        );
      case 'atlas':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case 'payments':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
            <circle cx="7" cy="14" r="1" />
            <circle cx="12" cy="14" r="1" />
          </svg>
        );
      case 'climate':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
        );
      case 'treasury':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="12" rx="2" />
            <path d="M3 10c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-8z" />
            <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            <circle cx="12" cy="14" r="2" />
          </svg>
        );
      case 'connect':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
            <circle cx="5" cy="5" r="1.5" />
            <circle cx="19" cy="5" r="1.5" />
            <circle cx="5" cy="19" r="1.5" />
            <circle cx="19" cy="19" r="1.5" />
          </svg>
        );
      case 'radar':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" />
          </svg>
        );
      case 'checkout':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 8h18" />
            <circle cx="7" cy="14" r="1" />
            <path d="M12 12l3 3 5-5" />
          </svg>
        );
      case 'issuing':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="4" y="6" width="16" height="12" rx="2" />
            <line x1="4" y1="10" x2="20" y2="10" />
            <circle cx="9" cy="14" r="1" />
            <circle cx="15" cy="14" r="1" />
          </svg>
        );
      case 'identity':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'sigma':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 4H6l6 8-6 8h12" />
          </svg>
        );
      case 'elements':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-[350px] lg:h-[450px] flex items-center justify-center overflow-visible">
      <div className="relative w-full h-full" style={{ maxWidth: "500px" }}>
        {/* Background modules (grey outlines) - 6x6 grid */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          {/* Generate 6 rows x 6 columns grid */}
          {Array.from({ length: 6 }).map((_, rowIndex) => 
            Array.from({ length: 6 }).map((_, colIndex) => {
              // Fixed 5px gap between modules
              // Calculate positions with uniform 5px gap
              const moduleSize = 60;
              const gapPx = 5;
              const containerWidth = 500;
              const containerHeight = 450; // lg height
              
              // Total space: 6 modules (360px) + 5 gaps (25px) = 385px
              const totalSpace = moduleSize * 6 + gapPx * 5;
              
              // Center the grid
              const startX = (containerWidth - totalSpace) / 2;
              const startY = (containerHeight - totalSpace) / 2;
              
              // Calculate position for each module
              const left = `${((startX + colIndex * (moduleSize + gapPx)) / containerWidth) * 100}%`;
              const top = `${((startY + rowIndex * (moduleSize + gapPx)) / containerHeight) * 100}%`;
              // Hide specific modules by row and column
              const hiddenModules: Record<number, number[]> = {
                0: [0, 1, 3, 4, 5], // Row 0: columns 0, 1, 3, 4, 5
                1: [1, 2, 5],        // Row 1: columns 1, 2, 5
                2: [0, 4],           // Row 2: columns 0, 4
                3: [1, 2, 4, 5],     // Row 3: columns 1, 2, 4, 5
                4: [0, 1, 2, 5],     // Row 4: columns 0, 1, 2, 5 (removed terminal at 4-2)
                5: [0, 2, 3],        // Row 5: columns 0, 2, 3
              };
              const isHidden = hiddenModules[rowIndex]?.includes(colIndex) || false;
              const moduleName = moduleNames[`${rowIndex}-${colIndex}`];
              
              // Specific positions for vertical lines: below Tax (row 1, col 2) and below Payments (row 3, col 2)
              const showVerticalLine = (rowIndex === 1 && colIndex === 2) || (rowIndex === 3 && colIndex === 2);
              
              // Modules that should always be in hover state: tax, payments, radar
              const alwaysHoverModules = ['tax', 'payments', 'radar'];
              const isAlwaysHover = moduleName && alwaysHoverModules.includes(moduleName);
              
              return (
                <>
                  {showVerticalLine ? (
                    <>
                      {/* Vertical line in primary color at specific position */}
                      {/* Tax line (row 1, col 2) - full height */}
                      {rowIndex === 1 && colIndex === 2 ? (
                        <div
                          key={`line-vertical-${rowIndex}-${colIndex}`}
                          className="absolute w-0.5 bg-[#635bff]"
                          style={{ 
                            top: `${((startY + rowIndex * (moduleSize + gapPx)) / containerHeight) * 100}%`,
                            left: `${((startX + colIndex * (moduleSize + gapPx) + moduleSize / 2) / containerWidth) * 100}%`,
                            height: `${moduleSize}px`,
                            transform: 'translateX(-50%)'
                          }}
                        />
                      ) : null}
                      {/* Payments line (row 3, col 2) - half height with horizontal line */}
                      {rowIndex === 3 && colIndex === 2 ? (
                        <>
                          <div
                            key={`line-vertical-${rowIndex}-${colIndex}`}
                            className="absolute w-0.5 bg-[#635bff]"
                            style={{ 
                              top: `${((startY + rowIndex * (moduleSize + gapPx)) / containerHeight) * 100}%`,
                              left: `${((startX + colIndex * (moduleSize + gapPx) + moduleSize / 2) / containerWidth) * 100}%`,
                              height: `${moduleSize / 2}px`,
                              transform: 'translateX(-50%)'
                            }}
                          />
                          {/* Horizontal line in the center of vertical line */}
                          <div
                            key={`line-horizontal-${rowIndex}-${colIndex}`}
                            className="absolute h-0.5 bg-[#635bff]"
                            style={{ 
                              top: `${((startY + rowIndex * (moduleSize + gapPx) + moduleSize / 2) / containerHeight) * 100}%`,
                              left: `calc(${((startX + colIndex * (moduleSize + gapPx) + moduleSize / 1.35) / containerWidth) * 100}%)`,
                              width: `${moduleSize / 2}px`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          />
                        </>
                      ) : null}
                    </>
                  ) : null}
                  {!isHidden ? (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`group absolute w-[60px] h-[60px] border border-slate-300 rounded-lg flex flex-col items-center justify-center bg-white/50 transition-all duration-150 ease-out hover:scale-[1.075] hover:min-h-[60px] hover:py-1 origin-center ${isAlwaysHover ? 'scale-[1.075] min-h-[60px] py-1' : ''}`}
                      style={{ top, left }}
                    >
                      {moduleName ? (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                          <div className={`${isAlwaysHover ? 'text-[#635bff]' : 'text-slate-600'} group-hover:text-[#635bff] transition-colors duration-300 ease-out flex items-center justify-center`}>
                            {getIcon(moduleName)}
                          </div>
                          <span className={`text-[10px] font-semibold text-[#0a2540] mt-1.5 capitalize whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out h-0 group-hover:h-[14px] overflow-hidden ${isAlwaysHover ? 'opacity-100 h-[14px]' : ''}`}>
                            {moduleName}
                          </span>
                        </div>
                      ) : (
                        // Default icon for modules without names
                        <div className={`w-3 h-3 bg-slate-400 rounded-full group-hover:bg-[#635bff] transition-colors duration-150 ${isAlwaysHover ? 'bg-[#635bff]' : ''}`}></div>
                      )}
                    </div>
                  ) : null}
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: CreditCard,
      title: "Payments",
      description: "Online payments aimed at growth.",
      color: "#635bff",
      link: "#",
    },
    {
      icon: Receipt,
      title: "Billing",
      description: "Subscription management and recurring billing.",
      color: "#00d4ff",
      link: "#",
    },
    {
      icon: Building2,
      title: "Connect",
      description: "Payments for platforms and marketplaces.",
      color: "#0a2540",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#f6f9fc] py-24 diagonal-container -mt-10 relative z-10">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="mb-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-[#635bff] font-bold text-sm uppercase tracking-wide mb-3">
              Modular solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a2540] mb-6">
              A fully integrated suite of financial products.
            </h3>
            <p className="text-lg text-[#425466] max-w-2xl leading-relaxed">
              We bring together everything that&apos;s required to build websites and apps that accept payments and send payouts globally. FractalGrid&apos;s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between.
            </p>
          </div>
          <div className="hidden lg:block flex-1 w-full lg:w-auto lg:min-w-[400px]">
            <ModularDiagram />
          </div>
        </div>
        {/* Payments Feature - Stripe-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <CreditCard className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#0a2540]">Payments</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a2540] mb-6">
              Accept and optimize payments, globally
            </h2>
            <p className="text-lg text-[#425466] mb-8 leading-relaxed">
              Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851ea] transition-colors mb-8"
            >
              Start with Payments{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0a2540] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Tax for automating tax registration, collection, and filing
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Radar for AI-powered fraud protection
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Issuing for creating card issuing programs
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side - Payment widget */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="bg-white rounded-xl shadow-lg p-4 border border-slate-200 w-full max-w-[400px] mx-auto lg:mx-0">
              {/* Product display */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Sofa className="text-amber-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#0a2540]">Wood Chair 001</p>
                  <p className="text-xl font-bold text-[#0a2540]">$149</p>
                </div>
              </div>
              
              {/* Payment buttons */}
              <div className="space-y-2 mb-4">
                <button className="w-full bg-black text-white py-2.5 px-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Pay
                </button>
                <button className="w-full bg-green-500 text-white py-2.5 px-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
                  Pay with{" "}
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {" "}link
                </button>
              </div>
              
              {/* Separator */}
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500 text-[10px]">Or pay another way</span>
                </div>
              </div>
              
              {/* Form fields */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-[#0a2540] mb-1.5">Email</label>
                  <input
                    type="email"
                    value="jane.diaz@example.com"
                    readOnly
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-slate-50 text-[#0a2540]"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-[#0a2540] mb-1.5">Card information</label>
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="text"
                        value="4242 4242 4242 4242"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-slate-50 text-[#0a2540] pr-10"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <span className="text-[10px] font-semibold text-blue-600">VISA</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value="05/26"
                        readOnly
                        className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-slate-50 text-[#0a2540]"
                      />
                      <div className="relative">
                        <input
                          type="text"
                          value="123"
                          readOnly
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-slate-50 text-[#0a2540] pr-8"
                        />
                        <CreditCard className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-[#0a2540] mb-1.5">Country or region</label>
                  <select className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white text-[#0a2540]">
                    <option>United States</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-[#0a2540] mb-1.5">ZIP/Postal code</label>
                  <input
                    type="text"
                    value="97712"
                    readOnly
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-slate-50 text-[#0a2540]"
                  />
                </div>
                
                <button className="w-full bg-[#635bff] text-white py-3 px-4 rounded-lg font-semibold text-base hover:bg-[#5851ea] transition-colors mt-2">
                  Pay $149
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Billing Feature - Stripe-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Receipt className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#0a2540]">Billing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a2540] mb-6">
              Capture recurring revenue
            </h2>
            <p className="text-lg text-[#425466] mb-8 leading-relaxed">
              Manage flat rate, usage-based, and hybrid pricing models, minimize churn, and automate finance operations.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851ea] transition-colors mb-8"
            >
              Start with Billing{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0a2540] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Invoicing for invoice creation, collection, and tracking
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Usage-based billing for metering, billing, and consumption insights
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Stripe Sigma for custom revenue reports—no SQL required
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side - Pricing table */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="bg-slate-50 rounded-xl shadow-lg p-6 border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#635bff] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Q</span>
                  </div>
                  <span className="font-semibold text-[#0a2540]">Quantum</span>
                </div>
                <div className="flex gap-4 text-sm text-[#425466]">
                  <button className="hover:text-[#635bff] transition-colors">Products</button>
                  <button className="hover:text-[#635bff] transition-colors font-semibold text-[#635bff]">Pricing</button>
                  <button className="hover:text-[#635bff] transition-colors">Contact</button>
                </div>
              </div>
              
              {/* Pricing tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Standard */}
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold text-[#0a2540] mb-2">Standard</h3>
                  <p className="text-xs text-[#425466] mb-3">Up to 5 users</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#0a2540]">$49</span>
                    <span className="text-sm text-[#425466]"> /month</span>
                  </div>
                  <button className="w-full bg-[#635bff] text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-[#5851ea] transition-colors mb-4">
                    Subscribe
                  </button>
                  <div className="space-y-2 text-xs text-[#425466]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>12 months historical data</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>4 hr data refresh</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>500+ third party integrations</span>
                    </div>
                  </div>
                </div>
                
                {/* Professional */}
                <div className="bg-white rounded-lg p-4 border-2 border-[#635bff] relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Popular!
                  </div>
                  <h3 className="font-semibold text-[#0a2540] mb-2">Professional</h3>
                  <p className="text-xs text-[#425466] mb-3">Up to 25 users</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#0a2540]">$149</span>
                    <span className="text-sm text-[#425466]"> /month</span>
                  </div>
                  <button className="w-full bg-[#635bff] text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-[#5851ea] transition-colors mb-4">
                    Subscribe
                  </button>
                  <div className="space-y-2 text-xs text-[#425466]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>24 months historical data</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>1 hr data refresh</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>1,000+ third party integrations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>Simple reporting</span>
                    </div>
                  </div>
                </div>
                
                {/* Enterprise */}
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold text-[#0a2540] mb-2">Enterprise</h3>
                  <p className="text-xs text-[#425466] mb-3">Unlimited users</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#0a2540]">$299</span>
                    <span className="text-sm text-[#425466]"> /month</span>
                  </div>
                  <button className="w-full bg-[#635bff] text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-[#5851ea] transition-colors mb-4">
                    Subscribe
                  </button>
                  <div className="space-y-2 text-xs text-[#425466]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>Unlimited historical data</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>15 min data refresh</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>2,000+ third party integrations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>Advanced reporting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#635bff] mt-0.5">✓</span>
                      <span>Priority support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connect Feature - Stripe-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <Building2 className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#0a2540]">Connect</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a2540] mb-6">
              Set up multiparty payments and payouts
            </h2>
            <p className="text-lg text-[#425466] mb-8 leading-relaxed">
              Integrate payments into your platform or marketplace for end-to-end payments experiences.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851ea] transition-colors mb-8"
            >
              Start with Connect{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0a2540] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Issuing for creating card issuing programs
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Instant Payouts for fast payments to users
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Payment Elements for customizable UIs
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side - Orders mobile app mockup */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 w-full max-w-[400px] mx-auto lg:mx-0 overflow-hidden">
              {/* Mobile app header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <h3 className="font-bold text-lg text-[#0a2540]">Orders</h3>
                <button className="p-1">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* Orders list */}
              <div className="p-4 space-y-6 max-h-[500px] overflow-y-auto">
                {/* TODAY */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-3 uppercase">Today</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#0a2540]">#9125 Hanako Yamada</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0a2540]">$150.00</span>
                        <ChevronRight className="text-slate-400 text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* YESTERDAY */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-3 uppercase">Yesterday</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#0a2540]">#9124 Jacques Muller</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0a2540]">$200.00</span>
                        <ChevronRight className="text-slate-400 text-sm" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#0a2540]">#9123 John Appleseed</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded">On Hold</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0a2540]">$178.00</span>
                        <ChevronRight className="text-slate-400 text-sm" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#0a2540]">#9122 Jane Diaz</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0a2540]">$200.00</span>
                        <ChevronRight className="text-slate-400 text-sm" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#0a2540]">#9121 Anna Nowak</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0a2540]">$200.00</span>
                        <ChevronRight className="text-slate-400 text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* OLDER THAN 2 DAYS */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-3 uppercase">Older than 2 days</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#0a2540]">#9120 Wei Qing</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0a2540]">$156.00</span>
                        <ChevronRight className="text-slate-400 text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom navigation bar */}
              <div className="border-t border-slate-200 bg-slate-50 p-3">
                <div className="flex justify-around items-center">
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-[10px] text-slate-400">My store</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-5 h-5 text-[#635bff]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    <span className="text-[10px] text-[#635bff] font-semibold">Orders</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-[10px] text-slate-400">Products</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-[10px] text-slate-400">Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Issuing Feature - Stripe-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <CreditCard className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#0a2540]">Issuing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a2540] mb-6">
              Create a card issuing program
            </h2>
            <p className="text-lg text-[#425466] mb-8 leading-relaxed">
              Launch, manage, and scale a commercial card program without any setup fees.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851ea] transition-colors mb-8"
            >
              Start with Issuing{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0a2540] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Connect for powering platform payments
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Financial Accounts for platforms
                </Link>
                <Link href="#" className="block text-[#635bff] hover:text-[#5851ea] transition-colors text-sm">
                  Capital for platforms
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side - Card stack mockup */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="relative w-full max-w-[400px] mx-auto lg:mx-0">
              {/* Card stack */}
              <div className="relative">
                {/* Bottom card - powdur */}
                <div className="absolute top-[80px] left-0 w-[280px] h-[180px] bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg border border-green-100 transform rotate-[-4deg] z-0">
                  <div className="p-4 h-full flex flex-col relative overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-50 rounded-full -ml-12 -mb-12 opacity-50"></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-lg font-bold text-green-800">powdur</div>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-200 to-green-300 rounded flex items-center justify-center">
                          <span className="text-green-700 font-bold text-xs">p</span>
                        </div>
                      </div>
                      
                      {/* Chip */}
                      <div className="mb-2">
                        <CardChip className="w-12 h-10" />
                      </div>
                      
                      {/* Card number */}
                      <div className="mb-2">
                        <div className="text-sm font-mono text-green-800 tracking-wider opacity-90">4532 •••• •••• 7890</div>
                      </div>
                      
                      {/* Cardholder name and expiry */}
                      <div className="flex items-end justify-between mt-auto pr-12">
                        <div>
                          <div className="text-xs text-green-600 mb-0.5 opacity-80">CARDHOLDER</div>
                          <div className="text-xs font-semibold text-green-800 opacity-80">Frank McNamara</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-green-600 mb-0.5 opacity-80">EXPIRES</div>
                          <div className="text-xs font-semibold text-green-800 opacity-80">12/26</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* VISA logo */}
                    <div className="absolute bottom-[9px] right-4 z-10">
                      <div className="flex items-center gap-1 bg-white px-2 py-1 rounded">
                        <span className="text-xs font-bold text-green-800 opacity-80">VISA</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Middle card - ROCKET RIDES */}
                <div className="absolute top-[40px] left-[20px] w-[280px] h-[180px] bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-xl border border-green-800 transform rotate-[2deg] z-10">
                  <div className="p-4 h-full flex flex-col text-white relative overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-full -mr-20 -mt-20 opacity-20"></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                          <span className="font-bold text-sm tracking-wide">ROCKET RIDES</span>
                        </div>
                      </div>
                      
                      {/* Chip */}
                      <div className="mb-2">
                        <CardChip className="w-12 h-10" />
                      </div>
                      
                      {/* Card number */}
                      <div className="mb-2">
                        <div className="text-sm font-mono text-white tracking-wider opacity-90">5289 •••• •••• 3456</div>
                      </div>
                      
                      {/* Cardholder name and expiry */}
                      <div className="flex items-end justify-between mt-auto pr-12">
                        <div>
                          <div className="text-xs text-green-200 mb-0.5 opacity-80">CARDHOLDER</div>
                          <div className="text-xs font-semibold text-white opacity-80">Sarah Chen</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-green-200 mb-0.5 opacity-80">EXPIRES</div>
                          <div className="text-xs font-semibold text-white opacity-80">09/25</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* VISA logo */}
                    <div className="absolute bottom-[14px] right-4 z-10">
                      <span className="text-xs font-bold text-white opacity-80">VISA</span>
                    </div>
                  </div>
                </div>
                
                {/* Top card - KAVHOLM */}
                <div className="relative top-0 left-[40px] w-[280px] h-[180px] bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl border border-gray-800 transform rotate-[6deg] z-20">
                  <div className="p-4 h-full flex flex-col text-white relative overflow-hidden">
                    {/* Decorative shine */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 opacity-5"></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg tracking-wider">KAVHOLM</span>
                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Chip */}
                      <div className="mb-2">
                        <CardChip className="w-12 h-10" />
                      </div>
                      
                      {/* Card number */}
                      <div className="mb-2">
                        <div className="text-sm font-mono text-white tracking-wider opacity-90">4242 •••• •••• 1234</div>
                      </div>
                      
                      {/* Cardholder name and expiry */}
                      <div className="flex items-end justify-between mt-auto pr-12">
                        <div>
                          <div className="text-xs text-gray-400 mb-0.5 opacity-80">CARDHOLDER</div>
                          <div className="text-xs font-semibold text-white opacity-80">Erik Andersson</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-400 mb-0.5 opacity-80">EXPIRES</div>
                          <div className="text-xs font-semibold text-white opacity-80">03/27</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* VISA logo */}
                    <div className="absolute bottom-[13px] right-4 z-10">
                      <span className="text-xs font-bold text-white opacity-80">VISA</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative icons */}
              <div className="absolute -right-8 top-20 opacity-10">
                <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="12" rx="2" />
                  <line x1="4" y1="10" x2="20" y2="10" />
                </svg>
              </div>
              <div className="absolute -left-4 bottom-10 opacity-10">
                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Curved connecting line */}
              <svg className="absolute bottom-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }} viewBox="0 0 400 300" preserveAspectRatio="none">
                <defs>
                  <marker id="arrowhead-issuing" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#635bff" />
                  </marker>
                </defs>
                <path d="M 50 250 Q 150 200 200 150" stroke="#635bff" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-issuing)" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Other features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.filter((f) => f.title !== "Payments" && f.title !== "Billing" && f.title !== "Connect" && f.title !== "Issuing").map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#635bff] transition-colors rounded-t-lg"
                style={{ backgroundColor: feature.color }}
              ></div>
              <div className="mb-4" style={{ color: feature.color }}>
                <feature.icon className="text-3xl" />
              </div>
              <h4 className="text-lg font-bold text-[#0a2540] mb-2">{feature.title}</h4>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                {feature.description}
              </p>
              <Link
                href={feature.link}
                className="text-[#635bff] font-semibold text-sm flex items-center group-hover:text-[#0a2540] transition-colors"
              >
                Start with {feature.title}{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
