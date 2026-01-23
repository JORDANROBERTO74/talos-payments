"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, Menu, ArrowRight, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationItems = [
  {
    name: "Products",
    href: "#products",
    hasDropdown: true,
  },
  {
    name: "Solutions",
    href: "#solutions",
    hasDropdown: true,
  },
  {
    name: "Developers",
    href: "#developers",
    hasDropdown: true,
  },
  {
    name: "Resources",
    href: "#resources",
    hasDropdown: true,
  },
  {
    name: "Pricing",
    href: "#pricing",
    hasDropdown: false,
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="absolute w-full z-50 transition-all duration-300 pt-6">
      <div className="max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="flex justify-between items-center h-12 gap-8">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="font-black text-2xl tracking-tighter text-white drop-shadow-sm">stripe</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="group flex items-center gap-1 text-white hover:text-white/80 font-semibold transition-colors duration-200 text-base"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="text-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a className="text-white font-semibold hover:text-white/80 transition-colors mr-2 text-base flex items-center" href="#">
              Sign in <ChevronRight className="text-sm ml-1 pt-0.5" />
            </a>
            <a className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-semibold rounded-full text-[#0a2540] bg-white hover:text-[#0a2540]/80 transition-all shadow-md hover:shadow-lg group" href="#">
              Contact sales <ChevronRight className="text-sm ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <span className="text-xl font-bold">FractalGrid</span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="rounded-md px-3 py-2 text-left text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                <div className="mt-4 flex flex-col gap-3 border-t pt-4">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    View Demo
                  </Button>
                  <Button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                    className="w-full gap-2"
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
