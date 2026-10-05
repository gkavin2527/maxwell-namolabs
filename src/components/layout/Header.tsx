"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { aboutPageLinks, mainNavConfig } from "@/content/nav-config";
import { X, ChevronDown, ArrowRight, Phone } from "lucide-react";
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
      {/* Scroll-aware top ambient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-12 lg:h-16 transition-opacity duration-500 ease-out pointer-events-none"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "linear-gradient(to bottom, #f9f9f9 50%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />

      {/* Floating navbar container */}
      <div className="relative mx-auto w-full max-w-[1200px] px-4 pt-4 sm:pt-5 pointer-events-auto transition-all duration-300">
        <div
          data-menu-open={mobileMenuOpen}
          className={`rounded-[40px] transition-all duration-300 ease-out bg-white/95 backdrop-blur-md border border-[#e9e9e9]/80 ${
            scrolled
              ? "shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-[#e9e9e9]"
              : "shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          }`}
        >
          {/* Desktop nav */}
          <nav
            className="hidden lg:flex justify-between items-center py-2 px-5 w-full"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-85 pl-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff] rounded-[16px]"
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
            <div className="flex justify-center items-center gap-2 xl:gap-3 ml-4">
              {mainNavConfig.map((item) => {
                if ("children" in item && item.children) {
                  const isOpen = activeDropdown === item.label;
                  const menuId = dropdownId(item.label);
                  const isCurrentSection = item.children.some((group) =>
                    group.items.some((subItem) => subItem.href === pathname)
                  );

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
                        className={`flex items-center gap-1.5 text-[15px] font-medium px-3.5 py-2 rounded-[12px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff] cursor-pointer ${
                          isOpen
                            ? "bg-[#f2f6ff] text-[#006cff]"
                            : isCurrentSection
                            ? "text-[#1b2045] font-semibold"
                            : "text-[#4f4f4f] hover:text-[#1b2045] hover:bg-neutral-100/70"
                        }`}
                        aria-expanded={isOpen}
                        aria-controls={menuId}
                        onClick={(event) => {
                          if (event.detail === 0 && isOpen) closeDropdown();
                          else openDropdown(item.label);
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ease-out ${
                            isOpen ? "rotate-180 text-[#006cff]" : "text-[#9a9a9a]"
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Mega Menu Dropdown with hover bridge */}
                      {isOpen && (
                        <div
                          id={menuId}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white/98 backdrop-blur-md border border-[#e9e9e9] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.10)] p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150 before:absolute before:inset-x-0 before:-top-3 before:h-3"
                        >
                          {item.children.map((group) => (
                            <div key={group.category || "links"} className="space-y-2">
                              {group.category && (
                                <h3 className="text-[11px] font-bold text-[#006cff] uppercase tracking-wider pb-1.5 border-b border-[#e9e9e9]">
                                  {group.category}
                                </h3>
                              )}
                              <ul className="space-y-1">
                                {group.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      aria-current={pathname === subItem.href ? "page" : undefined}
                                      onClick={closeDropdown}
                                      className="block px-3 py-2 rounded-[12px] hover:bg-[#f2f6ff] transition-all duration-150 group"
                                    >
                                      <div className="text-[13px] font-semibold text-[#1b2045] group-hover:text-[#006cff] group-aria-[current=page]:text-[#006cff] group-hover:translate-x-0.5 transition-all duration-150">
                                        {subItem.label}
                                      </div>
                                      {subItem.description && (
                                        <p className="text-[12px] text-[#9a9a9a] leading-snug line-clamp-1 mt-0.5 group-hover:text-[#6c6c6c] transition-colors">
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
                  const isCurrent = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-[15px] font-medium px-3.5 py-2 rounded-[12px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff] ${
                        isCurrent
                          ? "bg-[#f2f6ff] text-[#006cff] font-semibold"
                          : "text-[#4f4f4f] hover:text-[#1b2045] hover:bg-neutral-100/70"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return null;
              })}
            </div>

            {/* CTA Button — Design System 16px radius */}
            <div className="flex items-center pr-1">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-[16px] min-h-[42px] px-5 text-[14px] font-semibold transition-all duration-200 shadow-sm hover:shadow-md text-white bg-[#1b2045] hover:bg-[#006cff] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006cff]"
              >
                <span>Get A Free Quote</span>
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
                  className="flex flex-col justify-center items-center space-y-[5px] focus:outline-none w-10 h-10 hover:opacity-70 transition-opacity rounded-full cursor-pointer"
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

            {/* Mobile Drawer with smooth animation */}
            <div
              className={`grid transition-all duration-300 ease-out overflow-hidden ${
                mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 border-t border-[#e9e9e9]/60 px-5 pt-3 pb-6 space-y-4">
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
                      {aboutPageLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="py-1.5 text-[14px] text-[#4f4f4f] hover:text-[#1b2045]">{link.label}</Link>
                      ))}
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
                    className="w-full inline-flex items-center justify-center gap-2 rounded-[16px] min-h-[46px] px-6 text-[15px] font-semibold text-white bg-[#006cff] hover:bg-[#0056cc] transition-colors shadow-sm"
                  >
                    <span>Get A Free Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={siteConfig.phone.mobileTel}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-[16px] min-h-[46px] px-6 text-[15px] font-medium text-[#1b2045] bg-transparent border border-[#1b2045]/20 hover:border-[#1b2045]/40 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#006cff]" />
                    <span>Call Roger: {siteConfig.phone.mobile}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}