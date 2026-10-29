import React from "react";
import { Hero } from "@/components/landing/hero";
import { Companies } from "@/components/landing/companies";
import { Features } from "@/components/landing/features";
import { Developers } from "@/components/landing/developers";
import { LowCodeOptions } from "@/components/landing/low-code-options";
import { Security } from "@/components/landing/security";
import { Enterprise } from "@/components/landing/enterprise";
import { Startup } from "@/components/landing/startup";
import { GlobalScale } from "@/components/landing/global-scale";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Companies />
      <Features />
      <GlobalScale />
      <Security />
      <Enterprise />
      <Startup />
      <Developers />
      <LowCodeOptions />
      <CTA />
      <Footer />
    </main>
  );
}
