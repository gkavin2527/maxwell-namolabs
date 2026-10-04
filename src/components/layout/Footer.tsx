import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import { products } from "@/content/products";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#202020] text-[#ffffff] pt-16 pb-12 border-t border-[#303030]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#303030]">
          {/* Col 1: Brand & FSP */}
          <div className="space-y-4">
            <div className="bg-[#ffffff] p-3 rounded-[16px] inline-block">
              <Image
                src="/images/logo.png"
                alt="Maxwell Financial Services"
                width={160}
                height={45}
                className="h-[36px] w-auto object-contain"
              />
            </div>
            <p className="text-[14px] text-[#bbbbbb] leading-relaxed">
              Independent New Zealand insurance advisory. Helping families and businesses navigate life, health, and commercial risks since 2017.
            </p>
            <div className="pt-2 text-[13px] text-[#bbbbbb] space-y-1">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#66a7ff] shrink-0" />
                <span>Financial Advice Provider (FAP): <strong>{siteConfig.fspNumber}</strong></span>
              </div>
              <div className="text-[12px] text-[#787878] pl-6">
                FMA Class 2 Licence
              </div>
            </div>
          </div>

          {/* Col 2: Insurance Products */}
          <div>
            <h3 className="text-[15px] font-bold text-[#ffffff] uppercase tracking-wider mb-4">
              Insurance Products
            </h3>
            <ul className="space-y-2 text-[14px] text-[#bbbbbb]">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="hover:text-[#66a7ff] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div>
            <h3 className="text-[15px] font-bold text-[#ffffff] uppercase tracking-wider mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#bbbbbb]">
              <li>
                <Link href="/about" className="hover:text-[#66a7ff] transition-colors">
                  About Roger & Kiri Venkatesh
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#66a7ff] transition-colors">
                  Testimonials & Awards
                </Link>
              </li>
              <li>
                <Link href="/disclosure-statement" className="hover:text-[#66a7ff] transition-colors font-medium text-[#ffffff]">
                  Public Disclosure Statement
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#66a7ff] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#66a7ff] transition-colors">
                  Contact & Office Location
                </Link>
              </li>
              <li className="pt-3">
                <div className="text-[12px] text-[#787878] leading-snug">
                  Independent Dispute Resolution:
                  <div className="text-[#bbbbbb] font-medium mt-0.5">
                    Financial Services Complaints Ltd (FSCL) &bull; 0800 347 257
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="text-[15px] font-bold text-[#ffffff] uppercase tracking-wider mb-4">
              Contact Roger & Kiri
            </h3>
            <ul className="space-y-3 text-[14px] text-[#bbbbbb]">
              <li>
                <a
                  href={siteConfig.phone.mobileTel}
                  className="flex items-start gap-2.5 hover:text-[#66a7ff] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#66a7ff] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[#ffffff] font-medium">{siteConfig.phone.mobile}</span>
                    <span className="text-[12px] text-[#787878]">Roger Venkatesh (Direct / Mobile)</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phone.officeTel}
                  className="flex items-start gap-2.5 hover:text-[#66a7ff] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#66a7ff] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[#ffffff] font-medium">{siteConfig.phone.office}</span>
                    <span className="text-[12px] text-[#787878]">Auckland Office</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 hover:text-[#66a7ff] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#66a7ff] mt-0.5 shrink-0" />
                  <span className="text-[#ffffff] break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#bbbbbb]">
                <MapPin className="w-4 h-4 text-[#66a7ff] mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.suburb},{" "}
                  {siteConfig.address.city} {siteConfig.address.postcode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclosure Band */}
        {/* COMPLIANCE-REVIEW: Mandatory character-for-character FSP / FMA statement */}
        <div className="py-6 border-b border-[#303030] text-[13px] text-[#bbbbbb] leading-relaxed">
          <p>
            {siteConfig.regulatoryStatement}
          </p>
          <p className="mt-2 text-[12px] text-[#787878]">
            Important Notice: The information on this website is of a general nature only and does not constitute personalised financial advice. We recommend that you consult a qualified Financial Adviser who can take your individual objectives, financial situation and needs into account before making any financial decisions. Read our full{" "}
            <Link href="/disclosure-statement" className="text-[#66a7ff] underline hover:text-[#ffffff]">
              Disclosure Statement
            </Link>{" "}
            for full adviser and licensing information.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#787878]">
          <p>
            &copy; 2026 {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/disclosure-statement" className="hover:text-[#ffffff] transition-colors">
              Disclosure Statement
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#ffffff] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#ffffff] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
