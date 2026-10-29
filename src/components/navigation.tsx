"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BrandWordmark } from "@/components/brand-wordmark";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Products", href: "#products" },
  { name: "Solutions", href: "#solutions" },
  { name: "Developers", href: "#developers" },
  { name: "Resources", href: "#resources" },
  { name: "Pricing", href: "#pricing" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offsetPosition =
          element.getBoundingClientRect().top + window.pageYOffset - 76;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-sand/90 text-ink shadow-soft backdrop-blur-md"
          : "bg-transparent text-white"
      )}
    >
      <div className="shell flex h-[76px] items-center justify-between gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Talos home"
        >
          <BrandWordmark />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-[14px] font-medium transition-colors",
                isScrolled
                  ? "text-ink-soft hover:text-ink"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className={cn(
              "rounded-full px-4 py-2 text-[14px] font-semibold transition-colors",
              isScrolled
                ? "text-ink-soft hover:text-ink"
                : "text-white/70 hover:text-white"
            )}
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-amber px-5 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:bg-white"
          >
            Contact sales
          </a>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              className={cn(
                "-mr-2 inline-flex h-10 w-10 items-center justify-center",
                isScrolled ? "text-ink" : "text-white"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[320px] border-l border-sand-line bg-sand p-0 sm:w-[380px]"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-[76px] items-center border-b border-sand-line px-6 text-ink">
                <BrandWordmark />
              </div>
              <nav className="flex flex-col px-6 py-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="border-b border-sand-line py-4 text-left text-lg font-medium text-ink"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <a
                  href="#"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
