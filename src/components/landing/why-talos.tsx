"use client";

import React from "react";
import { Zap, Shield } from "lucide-react";

export function WhyTalos() {
  return (
    <section className="bg-white py-32 diagonal-container -mt-20 relative z-40">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="max-w-2xl mb-16">
          <h2 className="text-[#0e7c6b] font-bold text-sm uppercase tracking-wide mb-3">
            Why Talos?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a1f2c]">
            A technology-first approach to payments and finance.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-1 md:col-span-2 bg-[#f4f7f5] rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
            <div className="relative z-10 max-w-sm">
              <h4 className="text-xl font-bold text-[#0a1f2c] mb-2">Close to the metal</h4>
              <p className="text-[#43514d]">
                From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.
              </p>
            </div>
            <div className="mt-8 flex gap-4 items-end">
              <div className="w-24 h-32 bg-white rounded-t-lg shadow-subtle mx-auto border-t-4 border-[#0e7c6b] translate-y-4"></div>
              <div className="w-32 h-40 bg-white rounded-t-lg shadow-card mx-auto border-t-4 border-[#f2b84b] z-10"></div>
              <div className="w-24 h-24 bg-white rounded-t-lg shadow-subtle mx-auto border-t-4 border-teal-600 translate-y-4"></div>
            </div>
          </div>
          <div className="col-span-1 bg-[#f4f7f5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="mb-6">
              <div className="w-12 h-12 bg-[#0e7c6b]/10 rounded-full flex items-center justify-center text-[#0e7c6b] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[#0a1f2c] mb-2">
                Fastest improving platform
              </h4>
              <p className="text-[#43514d] text-sm">
                We release hundreds of features and improvements each year to help you stay ahead of industry shifts.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                  NEW
                </span>
                <span className="text-xs font-semibold text-[#0a1f2c]">Instant Payouts</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-3/4"></div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-[#f4f7f5] rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#f2b84b]/10 rounded-full flex items-center justify-center text-[#f2b84b] mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#0a1f2c] mb-2">Battle-tested reliability</h4>
            <p className="text-[#43514d] text-sm mb-6">
              Our systems operate with 99.99%+ uptime and are highly scalable and redundant. Talos is certified to the highest compliance standards.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>System Status: Operational</span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 bg-[#f4f7f5] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center h-full">
              <div>
                <h4 className="text-xl font-bold text-[#0a1f2c] mb-2">
                  Intelligent optimizations
                </h4>
                <p className="text-[#43514d]">
                  Our machine learning models train on billions of data points and help increase revenue across conversion, fraud, recovery, and more.
                </p>
              </div>
              <div className="relative h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 border border-slate-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="w-24 h-24 bg-white shadow-lg rounded-full absolute flex items-center justify-center text-[#0e7c6b] font-bold text-2xl">
                    ML
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-green-400 rounded-full opacity-50 blur-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-400 rounded-full opacity-50 blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
