"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavConfig } from "@/content/nav-config";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/content/site-config";

const dropdownId = (label: string) => `nav-menu-${label.toLowerCase().replace(/\s+/g, "-")}`;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Adjust state during render when route changes per React 19 patterns
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDropdown = (label: string) => {
    cancelClose();
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    cancelClose();
    setActiveDropdown(null);
  };

  // Short grace period so an off-axis pointer path doesn't dismiss the menu.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  React.useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Escape dismisses an open menu (also when it was opened by hover); focus
  // returns to the trigger only if it was inside the menu.
  React.useEffect(() => {
    if (!activeDropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const trigger = document.querySelector<HTMLElement>(
        `[aria-controls="${dropdownId(activeDropdown)}"]`
      );
      const focusWasInside = trigger?.parentElement?.contains(document.activeElement);
      setActiveDropdown(null);
      if (focusWasInside) trigger?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      {/* Scroll-aware top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-10 lg:h-14 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "linear-gradient(to bottom, #f9f9f9 40%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      />

      {/* Floating pill container */}
      <div className="relative mx-auto w-full max-w-[1200px] px-4 pt-5 pointer-events-auto">
        <div
          data-menu-open={mobileMenuOpen}
          className={`rounded-[40px] transition-all duration-300 bg-white/95 backdrop-blur-md border border-[#e9e9e9]/70 ${
            scrolled
              ? "shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
              : "shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
          }`}
        >
          {/* Desktop nav */}
          <nav
            className="hidden lg:flex justify-between items-center py-2.5 px-5 w-full"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 transition-opacity hover:opacity-80 pl-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff] rounded-[16px]"
              aria-label="Maxwell Financial Services Home"
            >
              <Image
                src="/images/logo.png"
                alt="Maxwell Financial Services"
                width={160}
                height={44}
                className="h-[38px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Nav links */}
            <div className="flex justify-center items-center gap-7 ml-6">
              {mainNavConfig.map((item) => {
                if ("children" in item && item.children) {
                  const isOpen = activeDropdown === item.label;
                  const menuId = dropdownId(item.label);

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={scheduleClose}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) closeDropdown();
                      }}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 text-[15px] font-medium text-[#4f4f4f] hover:text-[#1b2045] transition-colors duration-200 py-2 focus-visible:outline-none focus-visible:underline cursor-pointer"
                        aria-expanded={isOpen}
                        aria-controls={menuId}
                        onClick={(event) => {
                          // A mouse click on a menu that hover already opened must not shut it;
                          // keyboard activation (detail === 0) still toggles.
                          if (event.detail === 0 && isOpen) closeDropdown();
                          else openDropdown(item.label);
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#006cff]" : "text-[#9a9a9a]"
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Mega Menu Dropdown. The ::before strip bridges the mt-3 gap so the pointer stays inside the hover area on its way down from the trigger. */}
                      {isOpen && (
                        <div
                          id={menuId}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-white/98 backdrop-blur-sm border border-[#e9e9e9]/80 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.10)] p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150 before:absolute before:inset-x-0 before:-top-3 before:h-3"
                        >
                          {item.children.map((group) => (
                            <div key={group.category || "links"} className="space-y-2">
                              {group.category && (
                                <h3 className="text-[11px] font-bold text-[#006cff] uppercase tracking-wider pb-1 border-b border-[#e9e9e9]">
                                  {group.category}
                                </h3>
                              )}
                              <ul className="space-y-1">
                                {group.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      onClick={closeDropdown}
                                      className="block px-3 py-2 rounded-[12px] hover:bg-[#f9f9f9] transition-colors group"
                                    >
                                      <div className="text-[13px] font-semibold text-[#1b2045] group-hover:text-[#006cff] transition-colors">
                                        {subItem.label}
                                      </div>
                                      {subItem.description && (
                                        <p className="text-[12px] text-[#9a9a9a] leading-snug line-clamp-1 mt-0.5">
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
                      className={`text-[15px] font-medium transition-colors duration-200 hover:text-[#1b2045] py-2 focus-visible:outline-none focus-visible:underline ${
                        pathname === item.href
                          ? "text-[#1b2045] font-semibold"
                          : "text-[#4f4f4f]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return null;
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center pr-1">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full min-h-[42px] px-6 text-[14px] font-semibold transition-all duration-200 shadow-sm text-white bg-[#1b2045] hover:bg-[#006cff] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff]"
              >
                Get A Free Quote
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </nav>

          {/* Mobile header bar */}
          <div className="lg:hidden flex flex-col">
            <div className="flex justify-between items-center px-5 py-3">
              <Link
                href="/"
                className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff] rounded-[12px]"
                aria-label="Maxwell Financial Services Home"
              >
                <Image
                  src="/images/logo.png"
                  alt="Maxwell Financial Services"
                  width={140}
                  height={40}
                  className="h-[34px] w-auto object-contain"
                  priority
                />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex flex-col justify-center items-center space-y-[5px] focus:outline-none w-10 h-10 hover:opacity-70 transition-opacity rounded-full"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-expanded={mobileMenuOpen}
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5 text-[#1b2045]" aria-hidden="true" />
                  ) : (
                    <>
                      <span className="w-[20px] h-[1.5px] transition-all duration-300 ease-out origin-center bg-[#1b2045]" />
                      <span className="w-[20px] h-[1.5px] transition-all duration-300 ease-out bg-[#1b2045]" />
                      <span className="w-[20px] h-[1.5px] transition-all duration-300 ease-out origin-center bg-[#1b2045]" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
              <div className="border-t border-[#e9e9e9]/60 px-5 pt-4 pb-6 space-y-4">
                <div className="flex flex-col space-y-1">
                  <Link
                    href="/"
                    className="text-[15px] font-semibold text-[#1b2045] py-2.5 border-b border-[#e9e9e9]/60"
                  >
                    Home
                  </Link>

                  <div className="py-2.5 border-b border-[#e9e9e9]/60">
                    <div className="text-[11px] font-bold text-[#006cff] uppercase tracking-wider mb-2">
                      Insurance Products
                    </div>
                    <div className="grid grid-cols-1 gap-0.5 pl-2">
                      <Link href="/life-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Life Insurance</Link>
                      <Link href="/trauma-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Trauma Insurance</Link>
                      <Link href="/income-protection" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Income Protection</Link>
                      <Link href="/permanent-disability-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Permanent Disability</Link>
                      <Link href="/health-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Health Insurance</Link>
                      <Link href="/home-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Home Insurance</Link>
                      <Link href="/car-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Car Insurance</Link>
                      <Link href="/contents-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Contents Insurance</Link>
                      <Link href="/business-insurance" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Business Insurance</Link>
                    </div>
                  </div>

                  <div className="py-2.5 border-b border-[#e9e9e9]/60">
                    <div className="text-[11px] font-bold text-[#006cff] uppercase tracking-wider mb-2">
                      About &amp; Legal
                    </div>
                    <div className="grid grid-cols-1 gap-0.5 pl-2">
                      <Link href="/about" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">About Roger &amp; Kiri</Link>
                      <Link href="/testimonials" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Testimonials &amp; Awards</Link>
                      <Link href="/disclosure-statement" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Disclosure Statement</Link>
                      <Link href="/privacy-policy" className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">Privacy Policy</Link>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="text-[15px] font-semibold text-[#1b2045] py-2.5"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="pt-1 flex flex-col gap-2.5">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full min-h-[46px] px-6 text-[15px] font-semibold text-white bg-[#1b2045] hover:bg-[#006cff] transition-colors"
                  >
                    Get A Free Quote
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={siteConfig.phone.mobileTel}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full min-h-[46px] px-6 text-[15px] font-medium text-[#1b2045] bg-transparent border border-[#1b2045]/20 hover:border-[#1b2045]/40 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Roger: {siteConfig.phone.mobile}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
