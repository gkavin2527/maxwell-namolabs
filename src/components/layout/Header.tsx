"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { mainNavConfig } from "@/content/nav-config";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Adjust state during render when route changes per React 19 patterns
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  return (
    <header className="sticky top-0 z-40 bg-[#ffffff] border-b border-[#e9e9e9] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff] rounded-[8px]"
          aria-label="Maxwell Financial Services Home"
        >
          <Image
            src="/images/logo.png"
            alt="Maxwell Financial Services"
            width={180}
            height={50}
            className="h-[42px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main navigation"
        >
          {mainNavConfig.map((item) => {
            if ("children" in item && item.children) {
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-[15px] font-medium text-[#1b2045] hover:text-[#006cff] transition-colors py-2 focus-visible:outline-none focus-visible:underline"
                    aria-expanded={isOpen}
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#006cff]" : "text-[#787878]"
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-[560px] bg-[#ffffff] border border-[#e9e9e9] rounded-[24px] shadow-[rgba(0,0,0,0.12)_0px_12px_32px_0px] p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      role="menu"
                    >
                      {item.children.map((group) => (
                        <div key={group.category || "links"} className="space-y-3">
                          {group.category && (
                            <h3 className="text-[12px] font-bold text-[#006cff] uppercase tracking-wider">
                              {group.category}
                            </h3>
                          )}
                          <ul className="space-y-2">
                            {group.items.map((subItem) => (
                              <li key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  className="block p-2 rounded-[12px] hover:bg-[#f9f9f9] transition-colors group"
                                >
                                  <div className="text-[14px] font-semibold text-[#1b2045] group-hover:text-[#006cff] transition-colors">
                                    {subItem.label}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-[12px] text-[#787878] leading-snug line-clamp-1">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (!("children" in item) && item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors hover:text-[#006cff] py-2 focus-visible:outline-none focus-visible:underline ${
                    pathname === item.href ? "text-[#006cff] font-semibold" : "text-[#1b2045]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return null;
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href="/contact"
            variant="primary"
            size="default"
            className="hidden sm:inline-flex"
          >
            Get A Free Quote
          </Button>

          <button
            type="button"
            className="md:hidden p-2 text-[#1b2045] hover:text-[#006cff] rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-[#e9e9e9] px-4 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-[16px] font-semibold text-[#1b2045] py-2 border-b border-[#e9e9e9]"
            >
              Home
            </Link>

            <div className="py-2 border-b border-[#e9e9e9]">
              <div className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider mb-2">
                Insurance Products
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <Link href="/life-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Life Insurance
                </Link>
                <Link href="/trauma-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Trauma Insurance
                </Link>
                <Link href="/income-protection" className="py-1.5 text-[15px] text-[#1b2045]">
                  Income / Mortgage Protection
                </Link>
                <Link href="/permanent-disability-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Permanent Disability
                </Link>
                <Link href="/health-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Health Insurance
                </Link>
                <Link href="/home-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Home Insurance
                </Link>
                <Link href="/car-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Car Insurance
                </Link>
                <Link href="/contents-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Contents Insurance
                </Link>
                <Link href="/business-insurance" className="py-1.5 text-[15px] text-[#1b2045]">
                  Business Insurance
                </Link>
              </div>
            </div>

            <div className="py-2 border-b border-[#e9e9e9]">
              <div className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider mb-2">
                About & Legal
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <Link href="/about" className="py-1.5 text-[15px] text-[#1b2045]">
                  About Roger & Kiri
                </Link>
                <Link href="/testimonials" className="py-1.5 text-[15px] text-[#1b2045]">
                  Testimonials & Awards
                </Link>
                <Link href="/disclosure-statement" className="py-1.5 text-[15px] text-[#1b2045]">
                  Disclosure Statement
                </Link>
                <Link href="/privacy-policy" className="py-1.5 text-[15px] text-[#1b2045]">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-[16px] font-semibold text-[#1b2045] py-2"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Button href="/contact" variant="primary" size="lg" className="w-full">
              Get A Free Quote
            </Button>
            <Button
              href={siteConfig.phone.mobileTel}
              variant="secondary"
              size="default"
              className="w-full flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Roger: {siteConfig.phone.mobile}</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
