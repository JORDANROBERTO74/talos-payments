"use client";

import React from "react";
import Link from "next/link";
import { QrCode } from "../commons/qrCode";
import { Visa } from "../commons/visa";
import { Mastercard } from "../commons/mastercard";
import { Separator } from "../ui/separator";
import { CheckCircle2, FileText, Building2, ChevronRight, CreditCard } from "lucide-react";

export function Startup() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 diagonal-container -mt-10 relative z-25">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 md:pb-36">
          {/* Card 1: Atlas */}
          <div className="bg-white rounded-xl p-1 shadow-lg group md:translate-y-[100px]">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative">
              <div className="bg-white rounded-tl-lg p-3 sm:p-4 w-full max-w-[466px]">
                <div className="grid grid-cols-2 gap-3">
                  {/* Left Column - Navigation */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0a2540] mb-2 sm:mb-3">Atlas</h4>
                    <nav className="space-y-1.5 sm:space-y-2">
                      <Link href="#" className="block text-xs sm:text-sm text-[#635bff] font-medium pl-2 border-l-2 border-[#635bff]">
                        Overview
                      </Link>
                      <Link href="#" className="block text-xs sm:text-sm text-[#425466] hover:text-[#635bff] transition-colors pl-2">
                        Company
                      </Link>
                      <Link href="#" className="block text-xs sm:text-sm text-[#425466] hover:text-[#635bff] transition-colors pl-2">
                        Templates
                      </Link>
                      <Link href="#" className="block text-xs sm:text-sm text-[#425466] hover:text-[#635bff] transition-colors pl-2">
                        Partners
                      </Link>
                    </nav>
                  </div>

                  {/* Right Column - Progress Checklist */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0a2540] mb-2 sm:mb-3">RocketRides, Inc.</h4>
                    <div className="space-y-2 sm:space-y-2.5">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle2 className="text-green-500 text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#0a2540]">Incorporate your company</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle2 className="text-green-500 text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#0a2540]">Stock issued for founders</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle2 className="text-green-500 text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#0a2540]">Purchase your shares</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <FileText className="text-[#425466] text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#0a2540]">File 83(b) election</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Building2 className="text-[#425466] text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#0a2540]">Open a bank account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Atlas Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-orange-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#425466] bg-slate-100 px-2 py-0.5 rounded-full">Atlas</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#0a2540] mb-2">Incorporate your company</h5>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                Form a legal entity, issue stock, and start accepting payments.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#635bff] hover:text-[#5851ea] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn about Atlas{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>

          {/* Card 2: Payment Links */}
          <div className="bg-white rounded-xl p-1 shadow-lg group">
            {/* Interactive Panel with Chat and QR Code - Now on top */}
            <div className="bg-[#f6f9fc] rounded-xl flex gap-10 justify-between items-start relative h-[288px]">
              {/* Left Column - Chat Interface */}
              <div className="bg-white rounded-lg p-3 relative w-full">
                {/* Close Icon */}
                <div className="absolute top-2 right-2">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 12.7c3.5899 0 6.5-2.84299 6.5-6.35C13 2.84299 10.0899 0 6.5 0 2.91015 0 0 2.84299 0 6.35c0 3.50701 2.91015 6.35 6.5 6.35Zm2.75764-8.14604c.25385-.24798.25385-.65004 0-.89803-.25384-.24798-.66539-.24798-.91923 0L6.49993 5.45198 4.66145 3.65593c-.25384-.24798-.6654-.24798-.91924 0-.25384.24799-.25384.65005 0 .89803l1.83848 1.79605-1.83848 1.79605c-.25384.24798-.25384.65004 0 .89803.25384.24798.6654.24798.91924 0l1.83848-1.79605 1.83848 1.79605c.25384.24798.66539.24798.91923 0 .25385-.24799.25385-.65005 0-.89803L7.41917 6.35001l1.83847-1.79605Z" fill="#CAD2D9"></path>
                  </svg>
                </div>

                {/* Chat Icon */}
                <div className="absolute bottom-8 md:bottom-4 right-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#019688"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="m20.3152 20.9743-.7236 3.8138c-.0097.0511-.0335.0979-.0684.1347-.0976.1029-.2559.1029-.3535 0L16.39 21.9924c-.1292.0051-.2593.0076-.39.0076-4.4183 0-8-2.9101-8-6.5S11.5817 9 16 9s8 2.9101 8 6.5c0 2.2986-1.4685 4.3186-3.6848 5.4743Z" fill="#fff"></path>
                  </svg>
                </div>

                {/* Chat Messages */}
                <div className="space-y-2 mb-8 pt-8">
                  <div className="bg-blue-50 rounded-lg p-2 text-xs text-[#0a2540]">
                    👋 anything I can help with today?
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2 text-xs text-[#0a2540] ml-auto w-fit">
                    Hey, can I buy a license just for myself?
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 text-xs text-[#0a2540]">
                    Sure, in that case I&apos;d recommend our starter plan.
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 text-xs">
                    <span className="text-[#635bff]">buy.stripe.com/Ae93Jis</span>
                  </div>
                </div>
              </div>

              {/* Right Column - QR Code Payment */}
              <div className="bg-white rounded-tl-lg p-4 text-center self-end w-full">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#0a2540]">$19.99</div>
                  <div className="text-xs text-[#425466] mt-1">per item</div>
                </div>
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                  <QrCode className="w-[80px] h-[80px]" />
                </div>
                <div className="text-xs text-[#425466]">Scan to pay</div>
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Payment Links Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-teal-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#425466] bg-slate-100 px-2 py-0.5 rounded-full">Payment Links</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#0a2540] mb-2">Validate your idea</h5>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                Test your product idea by launching payments with little to no code.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#635bff] hover:text-[#5851ea] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn about Payment Links{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 3: Sell products */}
          <div className="bg-white rounded-xl p-1 shadow-lg group md:translate-y-[100px]">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative">
              <div className="bg-white rounded-tl-lg p-3 sm:p-4 w-full max-w-[380px]">
                {/* Payment Form */}
                <div className="text-xs text-[#425466] mb-2">Email</div>
                <input
                  type="email"
                  value="jane.diaz@example.com"
                  readOnly
                  className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none bg-white mb-4"
                />
                <div className="text-xs text-[#425466] mb-2">Card information</div>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value="1234 1234 1234 1234"
                    readOnly
                    className="flex-1 border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none bg-white"
                  />
                  <div className="flex items-center gap-1.5">
                    <Visa width={32} height={20} />
                    <Mastercard width={32} height={20} />

                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    readOnly
                    className="border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none bg-white"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="CVC"
                      readOnly
                      className="w-full border border-slate-200 rounded px-3 py-2 text-sm pr-8 focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none bg-white"
                    />
                    <CreditCard className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  </div>
                </div>
                <div className="text-xs text-[#425466] mb-2">Name on card</div>
                <input
                  type="text"
                  placeholder=""
                  readOnly
                  className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none bg-white"
                />
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Checkout Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#425466] bg-slate-100 px-2 py-0.5 rounded-full">Checkout</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#0a2540] mb-2">Sell products and services</h5>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                Launch a business with a prebuilt payment page that&apos;s optimized for conversion.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#635bff] hover:text-[#5851ea] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn about Atlas{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>

          {/* Card 4: Billing */}
          <div className="bg-white rounded-xl p-1 shadow-lg group">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative">
              <div className="bg-white rounded-tl-lg p-3 sm:p-4 w-full max-w-[380px]">
                {/* Cloud Token Analytics */}
                <h4 className="text-xs sm:text-sm font-bold text-[#0a2540] mb-4">Cloud token</h4>

                {/* Period Metrics */}
                <div className="flex gap-3 sm:gap-4 mb-4">
                  <div className="w-full">
                    <div className="text-xs text-[#425466]">Previous period</div>
                    <div className="text-base sm:text-lg font-bold text-[#0a2540]">80,250,068</div>
                  </div>
                  <div className="hidden sm:block"><Separator orientation="vertical" /></div>
                  <div className="w-full">
                    <div className="text-xs text-[#425466]">Current period</div>
                    <div className="text-base sm:text-lg font-bold text-[#0a2540]">68,491,224</div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="mb-2">
                  <div className="h-24 bg-white rounded border border-slate-200 flex items-end justify-around p-2 pb-0">
                    {[65, 70, 75, 68, 72, 80, 85].map((height, i) => (
                      <div
                        key={i}
                        className="bg-green-500 rounded-t"
                        style={{ width: '5%', height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-around text-[11px] text-[#425466] mt-1 px-2">
                    <span>Apr 24</span>
                    <span>Apr 25</span>
                    <span>Apr 26</span>
                    <span>Apr 27</span>
                    <span>Apr 28</span>
                    <span>Apr 29</span>
                    <span>Apr 30</span>
                  </div>
                </div>
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Cloud Token Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#425466] bg-slate-100 px-2 py-0.5 rounded-full">Cloud token</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#0a2540] mb-2">Track usage and metrics</h5>
              <p className="text-sm text-[#425466] leading-relaxed mb-4">
                Monitor your cloud token usage with real-time analytics and insights.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#635bff] hover:text-[#5851ea] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn about Analytics{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>
        </div>

        {/* CTA Section */}
      </div>
    </section>
  );
}
