"use client";

import * as React from "react";
import { useActionState } from "react";
import Link from "next/link";
import { submitEnquiry, ActionResponse } from "@/actions/submit-enquiry";
import { siteConfig } from "@/content/site-config";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  SendHorizonal,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const initialState: ActionResponse = { success: false, message: "" };

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone.mobile,
    href: siteConfig.phone.mobileTel,
  },
  {
    icon: MapPin,
    label: "Location",
    value: `${siteConfig.address.suburb}, ${siteConfig.address.city}, New Zealand`,
    href: undefined,
  },
  {
    icon: Send,
    label: "We respond fast",
    value: "Usually within 2–4 business hours.",
    href: undefined,
  },
];

export function ContactPageClient() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);
  const [message, setMessage] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+64");
  const [showCountryMenu, setShowCountryMenu] = React.useState(false);

  const countryOptions = [
    { code: "+64", flag: "🇳🇿", name: "NZ" },
    { code: "+61", flag: "🇦🇺", name: "AU" },
    { code: "+91", flag: "🇮🇳", name: "IN" },
    { code: "+44", flag: "🇬🇧", name: "UK" },
    { code: "+1", flag: "🇺🇸", name: "US" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] flex items-center justify-center overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-white">
      {/* Ambient gradient glow matching reference */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 85% 100%, rgba(59,130,246,0.22) 0%, rgba(147,197,253,0.14) 35%, transparent 70%), radial-gradient(ellipse 55% 45% at 15% 100%, rgba(96,165,250,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* ── LEFT COLUMN: Headline & Contact Info List ── */}
          <div className="lg:col-span-5 space-y-7 xl:space-y-9">
            {/* Main Headline */}
            <div className="space-y-3.5">
              <h1 className="text-[38px] sm:text-[46px] lg:text-[50px] xl:text-[54px] font-bold text-[#111827] leading-[1.08] tracking-tight">
                Let&apos;s build<br />
                what&apos;s{" "}
                <span className="text-[#006cff] italic font-bold">next,</span>
                <br />
                together.
              </h1>
              <p className="text-[14.5px] text-[#6b7280] leading-relaxed max-w-[360px]">
                Have a question, partnership idea, or just want to say hello?
                We&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Info Items with clean spacing */}
            <div className="space-y-6 pt-1">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[14px] bg-[#f3f4f6]/80 flex items-center justify-center shrink-0 border border-[#ebecee]">
                    <Icon className="w-[18px] h-[18px] text-[#4b5563]" strokeWidth={1.8} />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-[#111827] mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[13.5px] text-[#6b7280] hover:text-[#006cff] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[13.5px] text-[#6b7280]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Clean White Form Card ── */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] bg-white rounded-[32px] sm:rounded-[36px] border border-[#ebecee] shadow-[0_12px_44px_rgba(0,0,0,0.06)] p-6 sm:p-8">

              {state.success ? (
                <div className="text-center space-y-4 py-8">
                  <CheckCircle className="w-14 h-14 text-[#006cff] mx-auto" />
                  <h2 className="text-[24px] font-bold text-[#111827]">Message Sent!</h2>
                  <p className="text-[14.5px] text-[#4b5563] leading-relaxed max-w-[380px] mx-auto">
                    {state.message}
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#1b2045] text-white font-medium text-[13.5px] hover:bg-[#006cff] transition-colors mt-2"
                  >
                    Back to Home
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-[14px] bg-[#006cff] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(0,108,255,0.32)] shrink-0">
                      <SendHorizonal className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-[19px] sm:text-[20px] font-bold text-[#111827] leading-snug">
                        Send us a message
                      </h2>
                      <p className="text-[12.5px] text-[#6b7280]">
                        Fill in the details below.
                      </p>
                    </div>
                  </div>

                  <form action={formAction} className="space-y-3.5">
                    {/* Hidden fields for backend validation */}
                    <input type="hidden" name="interests" value="Insurance Advice" />
                    <input type="hidden" name="preferredAdviser" value="any" />
                    <input type="hidden" name="contactMethod" value="either" />

                    {/* Server Error Message */}
                    {state.message && !state.success && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-[12.5px] p-2.5 rounded-[12px]">
                        {state.message}
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="space-y-1">
                      <label htmlFor="c-fullName" className="text-[12.5px] font-semibold text-[#111827]">
                        Full Name <span className="text-[#006cff]">*</span>
                      </label>
                      <input
                        name="fullName"
                        id="c-fullName"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full h-[40px] px-3.5 text-[13.5px] text-[#111827] placeholder-[#a1a1aa] border border-[#e5e7eb] rounded-[12px] outline-none focus:border-[#006cff] focus:ring-1 focus:ring-[#006cff] transition-all bg-white"
                      />
                      {state.errors?.fullName && (
                        <p className="text-[11.5px] text-red-500">{state.errors.fullName[0]}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div className="space-y-1">
                      <label htmlFor="c-email" className="text-[12.5px] font-semibold text-[#111827]">
                        Work Email <span className="text-[#006cff]">*</span>
                      </label>
                      <input
                        name="email"
                        id="c-email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="w-full h-[40px] px-3.5 text-[13.5px] text-[#111827] placeholder-[#a1a1aa] border border-[#e5e7eb] rounded-[12px] outline-none focus:border-[#006cff] focus:ring-1 focus:ring-[#006cff] transition-all bg-white"
                      />
                      {state.errors?.email && (
                        <p className="text-[11.5px] text-red-500">{state.errors.email[0]}</p>
                      )}
                    </div>

                    {/* Phone Number + Company (2-Col Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="c-phone" className="text-[12.5px] font-semibold text-[#111827]">
                          Phone Number <span className="text-[#006cff]">*</span>
                        </label>
                        <div className="flex gap-1.5">
                          {/* Country Code Dropdown */}
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setShowCountryMenu(!showCountryMenu)}
                              className="h-[40px] px-2.5 flex items-center gap-1 text-[13px] font-medium text-[#374151] border border-[#e5e7eb] rounded-[12px] bg-white hover:border-[#d1d5db] transition-colors"
                            >
                              <span>{countryOptions.find((c) => c.code === countryCode)?.flag}</span>
                              <span>{countryCode}</span>
                              <ChevronDown className="w-3 h-3 text-[#9ca3af]" />
                            </button>

                            {showCountryMenu && (
                              <div className="absolute top-[44px] left-0 z-30 bg-white border border-[#e5e7eb] rounded-[12px] shadow-lg py-1 min-w-[120px]">
                                {countryOptions.map((opt) => (
                                  <button
                                    key={opt.code}
                                    type="button"
                                    onClick={() => {
                                      setCountryCode(opt.code);
                                      setShowCountryMenu(false);
                                    }}
                                    className="w-full text-left px-3 py-1.5 text-[12.5px] hover:bg-[#f3f4f6] flex items-center gap-2 text-[#374151]"
                                  >
                                    <span>{opt.flag}</span>
                                    <span className="font-medium">{opt.code}</span>
                                    <span className="text-[#9ca3af] text-[11px] ml-auto">{opt.name}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          <input
                            name="phone"
                            id="c-phone"
                            type="tel"
                            placeholder="021 592 786"
                            required
                            className="flex-1 min-w-0 h-[40px] px-3 text-[13.5px] text-[#111827] placeholder-[#a1a1aa] border border-[#e5e7eb] rounded-[12px] outline-none focus:border-[#006cff] focus:ring-1 focus:ring-[#006cff] transition-all bg-white"
                          />
                        </div>
                        {state.errors?.phone && (
                          <p className="text-[11.5px] text-red-500">{state.errors.phone[0]}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div className="space-y-1">
                        <label htmlFor="c-company" className="text-[12.5px] font-semibold text-[#111827]">
                          Company
                        </label>
                        <input
                          name="company"
                          id="c-company"
                          type="text"
                          placeholder="Your company"
                          className="w-full h-[40px] px-3.5 text-[13.5px] text-[#111827] placeholder-[#a1a1aa] border border-[#e5e7eb] rounded-[12px] outline-none focus:border-[#006cff] focus:ring-1 focus:ring-[#006cff] transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Message Area with 0/500 char counter */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label htmlFor="c-message" className="text-[12.5px] font-semibold text-[#111827]">
                          Message <span className="text-[#006cff]">*</span>
                        </label>
                        <span className="text-[11.5px] text-[#9ca3af] tabular-nums">
                          {message.length} / 500
                        </span>
                      </div>
                      <textarea
                        name="message"
                        id="c-message"
                        rows={3}
                        maxLength={500}
                        required
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder-[#a1a1aa] border border-[#e5e7eb] rounded-[12px] outline-none focus:border-[#006cff] focus:ring-1 focus:ring-[#006cff] transition-all bg-white resize-none"
                      />
                    </div>

                    {/* Footer Row: Privacy Notice + Pill Submit Button */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1.5 text-[12px] text-[#6b7280]">
                        <ShieldCheck className="w-4 h-4 text-[#9ca3af] shrink-0" />
                        <span>
                          <span className="font-semibold text-[#374151]">Privacy First.</span> Your data is secure.
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={isPending}
                        className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#111827] hover:bg-[#006cff] text-white font-medium text-[13.5px] transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-sm hover:shadow"
                      >
                        {isPending ? "Sending..." : "Send Message"}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
