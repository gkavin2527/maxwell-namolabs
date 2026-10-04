import * as React from "react";
import Image from "next/image";
import { Adviser } from "@/content/advisers";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, Award } from "lucide-react";

export interface AdviserCardProps {
  adviser: Adviser;
}

export function AdviserCard({ adviser }: AdviserCardProps) {
  return (
    <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-7 md:p-9 shadow-sm flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-36 h-36 rounded-[32px] overflow-hidden shrink-0 bg-[#f9f9f9] border border-[#e9e9e9]">
            <Image
              src={adviser.photo}
              alt={adviser.photoAlt}
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="text-center sm:text-left space-y-1.5">
            <h3 className="text-[22px] font-bold text-[#1b2045]">
              {adviser.name}
            </h3>
            <p className="text-[14px] font-semibold text-[#006cff]">
              {adviser.role}
            </p>
            {adviser.fspNumber && (
              <span className="inline-block bg-[#cce2ff] text-[#1b2045] text-[12px] font-medium px-2.5 py-0.5 rounded-[16px]">
                {adviser.fspNumber}
              </span>
            )}
            <div className="flex items-center gap-1.5 text-[13px] text-[#787878] pt-1">
              <Award className="w-4 h-4 text-[#006cff] shrink-0" />
              <span>{adviser.experience}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-[15px] text-[#4f4f4f] leading-relaxed pt-2 border-t border-[#e9e9e9]">
          {adviser.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[#e9e9e9] flex flex-wrap items-center gap-3">
        <Button
          href={`tel:${adviser.phone.replace(/[^0-9+]/g, "")}`}
          variant="secondary"
          size="sm"
          className="flex items-center gap-2 text-[14px]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call: {adviser.phone}</span>
        </Button>

        <Button
          href={`mailto:${adviser.email}`}
          variant="secondary"
          size="sm"
          className="flex items-center gap-2 text-[14px]"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email</span>
        </Button>
      </div>
    </div>
  );
}
