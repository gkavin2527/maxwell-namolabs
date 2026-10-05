import * as React from "react";
import type { Metadata } from "next";
import { ContactPageClient } from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us & Free Insurance Quote | Maxwell Financial Services",
  description:
    "Get in touch with Roger Venkatesh at Maxwell Financial Services. Call 021 592 786 or request a free insurance quote online.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
