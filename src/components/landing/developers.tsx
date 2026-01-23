"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Terminal, Bot, Box, Code } from "lucide-react";

export function Developers() {
  return (
    <section className="bg-[#0a2540] py-36 diagonal-container -mt-5 relative z-20 text-white overflow-hidden">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-[#00d4ff] font-bold text-sm uppercase tracking-wide mb-3">
            Designed for Developers
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            The world&apos;s most powerful and easy-to-use APIs.
          </h3>
          <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
            We agonize over the right abstractions so your teams don&apos;t need to stitch together disparate systems or spend months integrating payment functionality.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-1 bg-[#635bff] rounded-full"></div>
            <p className="text-sm font-medium text-slate-300">
              Client libraries available in every major language
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:py-2 text-sm font-bold rounded-full text-[#0a2540] bg-[#00d4ff] hover:bg-[#00d4ff]/90 transition-all"
            >
              Read the docs{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
          </div>
        </div>
        <div className="relative bg-[#1a2542] rounded-lg shadow-2xl border border-white/10 overflow-hidden font-mono text-xs sm:text-sm leading-relaxed mt-8 lg:mt-0">
          <div className="flex items-center px-4 py-3 bg-[#0a2540] border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs text-slate-400 font-sans">server.js</div>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto text-slate-300">
            <pre className="text-xs sm:text-sm">
              <code>
                <span className="token-keyword">const</span> stripe ={" "}
                <span className="token-function">require</span>(
                <span className="token-string">&apos;stripe&apos;</span>)(
                <span className="token-string">&apos;sk_test_...&apos;</span>);
                <br />
                <span className="token-keyword">const</span> session ={" "}
                <span className="token-keyword">await</span> stripe.checkout.sessions.
                <span className="token-function">create</span>(&#123;
                <br />
                {"  "}
                <span className="token-string">line_items</span>: [
                <br />
                {"    "}&#123;
                <br />
                {"      "}
                <span className="token-string">price_data</span>: &#123;
                <br />
                {"        "}
                <span className="token-string">currency</span>:{" "}
                <span className="token-string">&apos;usd&apos;</span>,
                <br />
                {"        "}
                <span className="token-string">product_data</span>: &#123;
                <br />
                {"          "}
                <span className="token-string">name</span>:{" "}
                <span className="token-string">&apos;T-shirt&apos;</span>,
                <br />
                {"        "}&#125;,
                <br />
                {"        "}
                <span className="token-string">unit_amount</span>:{" "}
                <span className="token-operator">2000</span>,
                <br />
                {"      "}&#125;,
                <br />
                {"      "}
                <span className="token-string">quantity</span>:{" "}
                <span className="token-operator">1</span>,
                <br />
                {"    "}&#125;,
                <br />
                {"  "}],
                <br />
                {"  "}
                <span className="token-string">mode</span>:{" "}
                <span className="token-string">&apos;payment&apos;</span>,
                <br />
                {"  "}
                <span className="token-string">success_url</span>:{" "}
                <span className="token-string">&apos;https://example.com/success&apos;</span>,
                <br />
                {"  "}
                <span className="token-string">cancel_url</span>:{" "}
                <span className="token-string">&apos;https://example.com/cancel&apos;</span>,
                <br />
                &#125;);
              </code>
            </pre>
          </div>
          <div className="bg-[#0a2540] p-3 text-xs text-slate-400 border-t border-white/10 flex justify-between">
            <span>Terminal</span>
            <span className="text-green-400">● Online</span>
          </div>
        </div>
      </div>

      {/* Feature cards row */}
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0 mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Use Stripe with your stack */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0 sm:border-r sm:border-dotted lg:border-r lg:border-dotted">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Terminal className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Use Stripe with your stack</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              We offer client and server libraries in everything from React and PHP to .NET and iOS.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              See libraries <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          {/* Card 2: Build AI agents */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0 sm:border-r sm:border-dotted lg:border-r lg:border-dotted">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Bot className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Build AI agents</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              Create agents that can manage money and handle support tasks using the Stripe API.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              View docs <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          {/* Card 3: Explore prebuilt integrations */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0 sm:border-r sm:border-dotted lg:border-r lg:border-dotted">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Box className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Explore prebuilt integrations</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              Connect Stripe to over a hundred tools including Adobe, Salesforce, and Xero.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              Browse App Marketplace <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          {/* Card 4: Build on Stripe Apps */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Code className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Build on Stripe Apps</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              Create an app just for your team or for the millions of businesses on Stripe.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              Learn about Apps <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
