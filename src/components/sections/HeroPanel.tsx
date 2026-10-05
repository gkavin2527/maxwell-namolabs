"use client";

import * as React from "react";
import Image from "next/image";
import { ShieldCheck, Play, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Curated high-resolution lifestyle photography with ideal framing
const photos = {
  // Col 1 — Top: Joyful father giving piggyback ride to daughter
  fatherDaughter:
    "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&auto=format&fit=crop&q=80",
  // Col 1 — Bottom: Senior gentleman with glasses smiling at cafe table
  seniorCoffee:
    "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&auto=format&fit=crop&q=80",
  // Col 2 — Top: Woman in white sweater comfortably checking phone
  womanPhone:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
  // Col 2 — Middle: Joyful mother and child laughing happily
  happyCustomers:
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
  // Col 2 — Bottom: Young man in polo with glasses outdoors smiling
  youngManPolo:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
  // Col 3 — Row 1: Young cheerful couple / coworkers at laptop
  coupleLaptop:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
  // Col 3 — Row 2: Warm senior couple smiling in winter coats
  seniorCouple:
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80",
  // Col 3 — Row 3: Friends at cafe with card contactless payment
  cafePayment:
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&auto=format&fit=crop&q=80",
  // Col 3 — Row 4: Elegant senior woman with phone
  olderWomanPhone:
    "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&auto=format&fit=crop&q=80",
};

export function HeroPanel() {
  const heroRef = React.useRef<HTMLElement>(null);
  const showcaseRef = React.useRef<HTMLDivElement>(null);
  const col1Ref = React.useRef<HTMLDivElement>(null);
  const col2Ref = React.useRef<HTMLDivElement>(null);
  const col3Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline for copy
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
      .from(
        ".hero-title-line",
        {
          y: 35,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
        },
        "-=0.35"
      )
      .from(
        ".hero-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.65,
        },
        "-=0.4"
      )
      .from(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.45"
      );

      // 2. Initial column entrance animations
      gsap.from(".hero-col-1", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-col-2", {
        y: 70,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.from(".hero-col-3", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.5,
      });

      // 3. Card scale/fade entrance on load
      gsap.from(".hero-card", {
        scale: 0.96,
        opacity: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.25,
      });

      // 4. Static, elegant hover effect — images NEVER move or displace
      const cards = gsap.utils.toArray<HTMLElement>(".hero-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            boxShadow: "0 12px 28px -6px rgba(0, 108, 255, 0.22), 0 0 0 2px rgba(0, 108, 255, 0.45)",
            borderColor: "rgba(0, 108, 255, 0.5)",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(233, 233, 233, 0.8)",
            borderColor: "rgba(233, 233, 233, 0.8)",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      });

      // 5. Gentle ScrollTrigger Parallax on scroll
      if (col1Ref.current && col2Ref.current && col3Ref.current) {
        gsap.to(col1Ref.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.to(col2Ref.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.0,
          },
        });

        gsap.to(col3Ref.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-[calc(100vh-88px)] flex items-center py-6 sm:py-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[46%_54%] gap-8 xl:gap-12 items-center">

        {/* ── LEFT: Copy & CTAs adhering strictly to Project Design System ── */}
        <div className="space-y-6 lg:pr-2">
          {/* Eyebrow button — Interactive pill with subtle glow and hover state */}
          <div className="hero-badge">
            <a
              href="/about"
              className="group inline-flex items-center gap-2.5 text-[13px] font-medium text-[#1b2045] bg-white border border-[#e9e9e9] hover:border-[#66a7ff] rounded-full px-4 py-2 shadow-[0_2px_10px_rgba(0,108,255,0.06)] hover:shadow-[0_4px_16px_rgba(0,108,255,0.12)] transition-all duration-300 w-fit"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#006cff]/10 text-[#006cff] group-hover:bg-[#006cff] group-hover:text-white transition-colors duration-200 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <span className="tracking-tight">Secure lives with smart finance</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#9a9a9a] group-hover:text-[#006cff] group-hover:translate-x-0.5 transition-all shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Headline: Deep Indigo primary, Pewter secondary, project sans-serif typography */}
          <h1 className="leading-[1.06] tracking-tight">
            <span className="hero-title-line block italic font-bold text-[50px] sm:text-[60px] lg:text-[68px] text-[#1b2045]">
              Drive Financial
            </span>
            <span className="hero-title-line block font-bold text-[46px] sm:text-[54px] lg:text-[62px] text-[#b3b3b3]">
              Strength with
            </span>
            <span className="hero-title-line block font-bold text-[46px] sm:text-[54px] lg:text-[62px] text-[#b3b3b3]">
              Insurance
            </span>
          </h1>

          {/* Subtitle / Description — Steel */}
          <p className="hero-desc text-[15px] sm:text-[16px] text-[#787878] leading-[1.65] max-w-[430px]">
            Drive your life financially strong by taking control, staying disciplined, and building a secure future with confidence.
          </p>

          {/* CTA Buttons — Electric Cobalt & Deep Indigo, 16px radius */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="hero-cta">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[16px] bg-[#006cff] hover:bg-[#4672ff] active:bg-[#005bd6] text-white font-medium text-[15px] shadow-sm hover:shadow-md transition-all duration-200"
              >
                Get Started
              </a>
            </div>

            <div className="hero-cta">
              <a
                href={siteConfig.phone.mobileTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[16px] bg-white hover:bg-neutral-50 text-[#1b2045] border border-[#e9e9e9] font-medium text-[15px] shadow-sm transition-all duration-200"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#006cff]/10">
                  <Play className="w-3 h-3 fill-[#006cff] text-[#006cff] ml-0.5" aria-hidden="true" />
                </span>
                Play Video
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT: 3-Column Lifestyle Showcase in a Sculpted Half-Heart Silhouette ── */}
        <div ref={showcaseRef} className="w-full max-w-[560px] mx-auto lg:ml-auto grid grid-cols-3 gap-3 sm:gap-3.5 items-start">
          
          {/* Column 1 (Left / Inner Dip): Starts lower (pt-20) */}
          <div ref={col1Ref} className="hero-col-1 flex flex-col gap-3 sm:gap-3.5 pt-16 sm:pt-20">
            {/* Card 1: Father with daughter on piggyback */}
            <div className="hero-card relative h-[170px] sm:h-[185px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.fatherDaughter}
                alt="Father playing with daughter"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 768px) 33vw, 185px"
                priority
              />
            </div>

            {/* Card 2: Senior gentleman with coffee */}
            <div className="hero-card relative h-[180px] sm:h-[195px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.seniorCoffee}
                alt="Confident senior gentleman at cafe table"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 33vw, 185px"
              />
              {/* Subtle bottom fade matching parchment canvas */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f9f9f9] via-[#f9f9f9]/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Column 2 (Center / Heart Lobe Arch): Arches up to the highest crest (pt-0) */}
          <div ref={col2Ref} className="hero-col-2 flex flex-col gap-3 sm:gap-3.5 pt-0">
            {/* Card 1: Woman on phone */}
            <div className="hero-card relative h-[155px] sm:h-[170px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.womanPhone}
                alt="Woman reviewing financial plans on phone"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 768px) 33vw, 185px"
                priority
              />
            </div>

            {/* Card 2: Happy customers image */}
            <div className="hero-card relative h-[165px] sm:h-[180px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.happyCustomers}
                alt="Happy mother and daughter enjoying peace of mind"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 768px) 33vw, 185px"
              />
            </div>

            {/* Card 3: Young man in polo outdoors */}
            <div className="hero-card relative h-[175px] sm:h-[190px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.youngManPolo}
                alt="Young professional outdoors with smartphone"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 33vw, 185px"
              />
              {/* Subtle bottom fade matching parchment canvas */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f9f9f9] via-[#f9f9f9]/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Column 3 (Right / Tapering Tail): Starts slightly below peak (pt-6) and tapers down */}
          <div ref={col3Ref} className="hero-col-3 flex flex-col gap-3 sm:gap-3.5 pt-6 sm:pt-7">
            {/* Card 1: Young couple / coworkers at laptop */}
            <div className="hero-card relative h-[130px] sm:h-[145px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.coupleLaptop}
                alt="Young couple celebrating good news on laptop"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 33vw, 185px"
                priority
              />
            </div>

            {/* Card 2: Warm senior couple in winter coats */}
            <div className="hero-card relative h-[140px] sm:h-[155px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.seniorCouple}
                alt="Senior couple smiling warmly"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 33vw, 185px"
              />
            </div>

            {/* Card 3: Friends at cafe / contactless tap payment */}
            <div className="hero-card relative h-[140px] sm:h-[155px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.cafePayment}
                alt="Friends having coffee and making easy payment"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 33vw, 185px"
              />
            </div>

            {/* Card 4: Elegant senior woman with phone (lowest tapered tip) */}
            <div className="hero-card relative h-[145px] sm:h-[160px] w-full rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-white border border-[#e9e9e9]/80">
              <Image
                src={photos.olderWomanPhone}
                alt="Mature woman looking at smartphone"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 33vw, 185px"
              />
              {/* Subtle bottom fade matching parchment canvas */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f9f9f9] via-[#f9f9f9]/40 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
