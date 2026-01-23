"use client";

import React from "react";
import { ArrowRight, Smartphone, CreditCard, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[800px] lg:min-h-[950px] overflow-hidden bg-white">
      <div className="hero-bg-wrapper">
        <div className="refined-mesh"></div>
      </div>
      <div className="relative z-10 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
        <div className="max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-6 sm:pt-10">
            <div className="max-w-lg pt-6 sm:pt-12">
              <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-black tracking-tighter text-[#3a3a3a] leading-[0.95] mb-6 sm:mb-8 hero-h1">
                Financial infrastructure to increase your revenue
              </h1>
              <p className="text-lg sm:text-xl text-[#425466] mb-8 sm:mb-10 leading-relaxed font-medium max-w-[460px]">
                Join the millions of businesses that use Stripe to accept online and in-person payments, integrate financial services, launch new custom revenue models, and build a more profitable business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start pb-6 sm:pb-10">
                <form className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 sm:py-2.5 text-base border border-slate-200 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#635bff] focus:border-transparent bg-white text-[#0a2540] placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-7 py-3 sm:py-2.5 text-base font-bold rounded-full sm:rounded-l-none sm:rounded-r-full text-white bg-[#0a2540] hover:bg-[#0a2540]/90 transition-all group shadow-lg shadow-black/20"
                  >
                    Start now{" "}
                    <ArrowRight className="text-sm ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
            <div className="relative hidden lg:block h-[600px] w-full mt-[-60px]">
              {/* Rocket Rides Dashboard Card */}
              <div className="absolute right-0 top-10 w-[520px] bg-white rounded-2xl shadow-card z-10 overflow-hidden transform scale-90 translate-x-60">
                {/* Top Bar with Gradient */}
                <div className="h-12 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
                      <path fill="#FFF" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z"></path>
                    </svg>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Rocket Rides
                    </span>
                    <svg width="10" height="4" viewBox="0 0 10 4" className="text-white">
                      <polyline fill="none" stroke="#FFF" points="1 0 5 4 9 0"></polyline>
                    </svg>
                  </div>
                  <div className="bg-white/20 rounded px-2 py-1 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 10 10">
                      <circle cx="4" cy="4" r="3.5" fill="none" stroke="#FFF" strokeWidth="0.5"></circle>
                      <path fill="#FFF" d="M6.15 6.15c.2-.2.5-.2.7 0l2.12 2.12a.5.5 0 1 1-.7.7L6.15 6.85a.5.5 0 0 1 0-.7z"></path>
                    </svg>
                    <span className="text-xs text-white">Search</span>
                  </div>
                </div>

                <div className="p-5 bg-white">
                  {/* Today Section with two columns */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-[#0a2540] mb-4">Today</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column - Net Volume */}
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-xs font-semibold text-slate-500">Net volume</span>
                          <svg width="7" height="4" fill="none" className="text-[#0a2540]">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.532.54a.379.379 0 0 1 .536.536L3.684 3.46a.378.378 0 0 1-.535 0L.765 1.076A.379.379 0 0 1 1.3.54l2.116 2.116L5.532.54Z" fill="#0A2540"></path>
                          </svg>
                        </div>
                        <div className="text-2xl font-bold text-[#0a2540] mb-1">$3,528,198.72</div>
                        <div className="text-xs text-slate-400 mb-4">2:00 PM</div>

                        {/* Main Graph */}
                        <div className="h-20 w-full relative mb-2">
                          <svg className="w-full h-full" viewBox="0 0 468 70" fill="none">
                            <path opacity=".3" d="M0 68.125h467.488v.623H0v-.623Z" fill="#C4CCD8"></path>
                            <path d="M-1.934 68.15h78.16l19.54-8.899h78.16l19.54-21.75 19.54-4.35h19.54l19.54-4.152h21.559" stroke="#635BFF" strokeWidth="1.271" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>12:00 AM</span>
                          <span className="font-semibold">Now, 2:00 PM</span>
                          <span>11:59 PM</span>
                        </div>
                      </div>

                      {/* Right Column - USD Balance & Payouts */}
                      <div>
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1">
                              <span className="text-xs font-semibold text-slate-500">USD Balance</span>
                              <svg width="7" height="4" fill="none" className="text-[#0a2540]">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.532.54a.379.379 0 0 1 .536.536L3.684 3.46a.378.378 0 0 1-.535 0L.765 1.076A.379.379 0 0 1 1.3.54l2.116 2.116L5.532.54Z" fill="#0A2540"></path>
                              </svg>
                            </div>
                            <span className="text-xs text-slate-500">View</span>
                          </div>
                          <div className="text-2xl font-bold text-[#0a2540] mb-1">$553,257.51</div>
                          <div className="text-xs text-slate-400">Available to pay out</div>
                        </div>
                        <div className="border-t border-slate-100 pt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-slate-500">Payouts</span>
                            <span className="text-xs text-slate-500">View</span>
                          </div>
                          <div className="text-2xl font-bold text-[#0a2540] mb-1">$102,633.07</div>
                          <div className="text-xs text-slate-400">Expected today</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Three Columns */}
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                    {/* Net volume from sales */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-[#0a2540]">Net volume from sales</span>
                        <span className="text-xs font-semibold text-green-600">+32.8%</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-[#0a2540]">$39,274.29</span>
                        <span className="text-sm text-slate-400">$29,573.54</span>
                      </div>
                      <div className="h-16 w-full relative mb-2">
                        <svg className="w-full h-full" viewBox="0 0 220 112" fill="none">
                          <path opacity=".3" d="M218.625 108.961H.81v.351h217.815v-.351Z" fill="#C4CCD8"></path>
                          <path d="m21.151 108.785 32.95-29.8 32.948-14.9 32.948 29.8 32.95-44.7h32.948l32.949-29.8" stroke="#635BFF" strokeWidth="1.691" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Apr 20</span>
                        <span>Today</span>
                      </div>
                      <div className="text-xs text-slate-400">Updated today 7:50 AM</div>
                    </div>

                    {/* New customers */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-[#0a2540]">New customers</span>
                        <span className="text-xs font-semibold text-green-600">+32.1%</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-[#0a2540]">37</span>
                        <span className="text-sm text-slate-400">28</span>
                      </div>
                      <div className="h-16 w-full relative mb-2">
                        <svg className="w-full h-full" viewBox="0 0 220 112" fill="none">
                          <path opacity=".3" d="M218.625 108.961H.81v.351h217.815v-.351Z" fill="#C4CCD8"></path>
                          <path d="m21.15 108.785 32.95-14.8 32.949-24.9 32.948 12.8 32.95-32.7 32.948-4 32.949-25.8" stroke="#635BFF" strokeWidth="1.691" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Apr 20</span>
                        <span>Today</span>
                      </div>
                      <div className="text-xs text-slate-400">Updated today 7:50 AM</div>
                    </div>

                    {/* Invoices */}
                    <div>
                      <span className="text-sm font-bold text-[#0a2540]">Invoices</span>
                      <div className="h-2 w-full bg-slate-100 rounded-full mt-3 mb-4 flex overflow-hidden">
                        <div className="bg-purple-500" style={{ width: '54%' }}></div>
                        <div className="bg-blue-500" style={{ width: '43%' }}></div>
                        <div className="bg-teal-500" style={{ width: '3%' }}></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-xs text-slate-500">Paid</span>
                          </div>
                          <span className="text-xs font-semibold text-[#0a2540]">$25,000.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-xs text-slate-500">Open</span>
                          </div>
                          <span className="text-xs font-semibold text-[#0a2540]">$20,000.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <span className="text-xs text-slate-500">Past due</span>
                          </div>
                          <span className="text-xs font-semibold text-[#0a2540]">$1,000.00</span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-400 mt-3">Updated today 7:50 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription Card Component */}
              <div className="absolute right-20 top-20 w-[300px] bg-white rounded-[20px] shadow-floating z-20 overflow-hidden transform transition-transform hover:-translate-y-1 duration-500">
                <div className="p-6">
                  <div className="flex flex-col items-center mb-5 text-center">
                    <div className="w-14 h-14 rounded-lg bg-gray-50 shadow-md mb-3 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-400 opacity-80"></div>
                      <div className="relative z-10 bg-white p-1 rounded shadow-sm">
                        <span className="text-[7px] font-bold">Issue 001</span>
                      </div>
                    </div>
                    <h3 className="text-[#0a2540] font-bold text-base">Abstraction Magazine</h3>
                    <p className="text-slate-500 text-xs">USD19 per month</p>
                  </div>
                  <button className="w-full bg-[#0a2540] text-white font-bold py-2 rounded shadow-lg hover:bg-[#1a3855] transition-colors flex items-center justify-center gap-1 mb-5">
                    <Smartphone className="text-base" /> Pay
                  </button>
                  <div className="relative flex py-2 items-center mb-3">
                    <div className="flex-grow border-t border-slate-100"></div>
                    <span className="flex-shrink-0 mx-3 text-slate-400 text-[10px]">
                      Or pay with card
                    </span>
                    <div className="flex-grow border-t border-slate-100"></div>
                  </div>
                  <form className="space-y-2.5">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-1">
                        Email
                      </label>
                      <input
                        className="w-full border-slate-200 rounded px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none bg-white"
                        placeholder=""
                        type="email"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-1">
                        Card information
                      </label>
                      <div className="border border-slate-200 rounded overflow-hidden">
                        <div className="flex items-center px-2.5 py-1.5 border-b border-slate-200 bg-white">
                          <input
                            className="w-full outline-none text-xs placeholder-slate-300"
                            placeholder="Number"
                          />
                          <div className="flex gap-1 opacity-50">
                            <div className="w-5 h-3 bg-slate-200 rounded"></div>
                            <div className="w-5 h-3 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                        <div className="flex bg-white">
                          <input
                            className="w-1/2 border-r border-slate-200 px-2.5 py-1.5 outline-none text-xs placeholder-slate-300"
                            placeholder="MM/YY"
                          />
                          <div className="w-1/2 flex items-center px-2.5 py-1.5">
                            <input
                              className="w-full outline-none text-xs placeholder-slate-300"
                              placeholder="CVC"
                            />
                            <CreditCard className="text-slate-300 text-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-1">
                        Country or region
                      </label>
                      <div className="relative">
                        <select className="w-full border-slate-200 rounded px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none appearance-none bg-white text-[#0a2540]">
                          <option>United States</option>
                        </select>
                        <ChevronDown className="absolute right-2.5 top-2 pointer-events-none text-slate-400 text-xs" />
                      </div>
                    </div>
                    <div>
                      <input
                        className="w-full border-slate-200 rounded px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-[#635bff] focus:border-transparent outline-none bg-white"
                        placeholder="Postal code"
                        type="text"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
