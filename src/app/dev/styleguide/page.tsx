import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";

export const metadata: Metadata = {
  title: "Design System Styleguide | Internal Development",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StyleguidePage() {
  const sampleColors = [
    { name: "Electric Cobalt", hex: "#006cff", role: "Primary Brand Signal & Hero Panels", text: "#ffffff" },
    { name: "Indigo Action", hex: "#4672ff", role: "Interactive Action Button Hover", text: "#ffffff" },
    { name: "Deep Indigo", hex: "#1b2045", role: "Headings & High-contrast Text", text: "#ffffff" },
    { name: "Sky Tint", hex: "#66a7ff", role: "Subtle Outlines & Hover Accents", text: "#1b2045" },
    { name: "Glacial Wash", hex: "#cce2ff", role: "Tag Fills & Wash Highlights", text: "#1b2045" },
    { name: "Parchment", hex: "#f9f9f9", role: "Canvas Background", text: "#1b2045" },
    { name: "Pure White", hex: "#ffffff", role: "Cards & Elevated Surfaces", text: "#1b2045" },
    { name: "Mist", hex: "#e9e9e9", role: "Hairline Borders & Dividers", text: "#1b2045" },
    { name: "Graphite", hex: "#4f4f4f", role: "Accessible Body Copy (WCAG AA)", text: "#ffffff" },
    { name: "Obsidian", hex: "#202020", role: "Footer & Dark Bands", text: "#ffffff" },
  ];

  return (
    <div className="py-12 space-y-16">
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-12 shadow-sm space-y-4">
          <Tag variant="dark">Internal Reference &bull; Noindex</Tag>
          <Heading as="h1" size="display">
            Maxwell Design System &amp; Component Styleguide
          </Heading>
          <p className="text-[16px] text-[#4f4f4f] max-w-[700px]">
            Single source of truth component reference strictly implementing DESIGN.md token rules: three-tier radius (3px / 16px / 40px), Deep Indigo headings, Graphite body copy, and zero pure black.
          </p>
        </div>
      </Container>

      {/* 1. Radius System */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-6">
          <Heading as="h2" size="heading">
            1. Strict Three-Tier Radius Philosophy
          </Heading>
          <p className="text-[14px] text-[#4f4f4f]">
            The system permits exactly 3 radius values: 3px (tags/chips), 16px (interactive controls), 40px (content surfaces). Never interpolate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#f9f9f9] border border-[#e9e9e9] rounded-[3px] space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#006cff]">3px &bull; Tag / Chip Radius</span>
              <p className="text-[13px] text-[#4f4f4f]">Used for compact badges, category chips, and small checkboxes.</p>
              <div className="pt-2">
                <Tag variant="glacial">3px Chip Tag</Tag>
              </div>
            </div>

            <div className="p-6 bg-[#f9f9f9] border border-[#e9e9e9] rounded-[16px] space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#006cff]">16px &bull; Control Radius</span>
              <p className="text-[13px] text-[#4f4f4f]">Used for buttons, text inputs, selects, textareas, and navigation pills.</p>
              <div className="pt-2">
                <Button variant="primary" size="sm">16px Button</Button>
              </div>
            </div>

            <div className="p-6 bg-[#f9f9f9] border border-[#e9e9e9] rounded-[40px] space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#006cff]">40px &bull; Surface Radius</span>
              <p className="text-[13px] text-[#4f4f4f]">Used for cards, images, hero panels, and terminating dark bands.</p>
              <div className="pt-2">
                <div className="bg-[#ffffff] border border-[#e9e9e9] p-3 rounded-[40px] text-center text-[12px] font-semibold">
                  40px Card Surface
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Color Palette */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-6">
          <Heading as="h2" size="heading">
            2. Color Palette Tokens
          </Heading>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {sampleColors.map((color) => (
              <div
                key={color.name}
                className="border border-[#e9e9e9] rounded-[16px] overflow-hidden shadow-sm"
              >
                <div
                  className="h-20 p-3 flex flex-col justify-end font-mono text-[12px]"
                  style={{ backgroundColor: color.hex, color: color.text }}
                >
                  <span className="font-bold">{color.hex}</span>
                </div>
                <div className="p-3 bg-[#ffffff] space-y-1">
                  <div className="text-[13px] font-bold text-[#1b2045]">{color.name}</div>
                  <div className="text-[11px] text-[#787878] leading-tight">{color.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 3. Typography Scale */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-6">
          <Heading as="h2" size="heading">
            3. Typography Scale (Inter / KHTeka Voice)
          </Heading>

          <div className="space-y-4 divide-y divide-[#e9e9e9]">
            <div className="pt-3">
              <span className="text-[12px] font-mono text-[#787878]">display &bull; 36px font-bold</span>
              <Heading as="h1" size="display">Protecting What Matters Most in New Zealand</Heading>
            </div>
            <div className="pt-3">
              <span className="text-[12px] font-mono text-[#787878]">heading-lg &bull; 30px font-bold</span>
              <Heading as="h2" size="heading-lg">Tailored Life, Health &amp; Trauma Insurance</Heading>
            </div>
            <div className="pt-3">
              <span className="text-[12px] font-mono text-[#787878]">heading &bull; 24px font-bold</span>
              <Heading as="h3" size="heading">Personalised Independent Financial Advice</Heading>
            </div>
            <div className="pt-3">
              <span className="text-[12px] font-mono text-[#787878]">heading-sm &bull; 20px font-semibold</span>
              <Heading as="h4" size="heading-sm">Our 6-Step Advisory Process</Heading>
            </div>
            <div className="pt-3">
              <span className="text-[12px] font-mono text-[#787878]">body &bull; 16px font-normal (Graphite #4f4f4f)</span>
              <p className="text-[16px] text-[#4f4f4f] leading-relaxed max-w-[700px]">
                We compare policies across New Zealand’s most reputable insurance providers to find the optimal coverage and premium terms for you and your family.
              </p>
            </div>
            <div className="pt-3">
              <span className="text-[12px] font-mono text-[#787878]">caption &bull; 12px font-medium</span>
              <p className="text-[12px] text-[#787878] uppercase tracking-wide">
                Licensed Class 2 Financial Advice Provider &bull; FSP737512
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* 4. Interactive Components */}
      <Container>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-10 shadow-sm space-y-6">
          <Heading as="h2" size="heading">
            4. Buttons &amp; Interactive Controls
          </Heading>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary Button (#006cff)</Button>
            <Button variant="secondary">Secondary Dark Border</Button>
            <Button variant="white" className="bg-[#f0f0f0]">White / Inverted</Button>
            <Button variant="ghost">Ghost Text Link</Button>
          </div>

          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px]">
            <Input label="Sample Text Input" placeholder="Type here..." />
            <Select
              label="Sample Select"
              options={[
                { value: "1", label: "Option One" },
                { value: "2", label: "Option Two" },
              ]}
            />
            <div className="md:col-span-2">
              <Textarea label="Sample Textarea" placeholder="Type notes here..." rows={3} />
            </div>
            <div className="md:col-span-2">
              <Checkbox label="Sample Checkbox Option" description="Supporting description with 3px border radius." />
            </div>
            <div className="md:col-span-2">
              <Card variant="white">
                <h4 className="font-bold text-[#1b2045]">Card Component Sample</h4>
                <p className="text-[14px] text-[#4f4f4f]">40px radius card with subtle elevation.</p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
