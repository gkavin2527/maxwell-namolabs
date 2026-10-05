"use client";

import * as React from "react";
import { useActionState } from "react";
import { submitEnquiry, ActionResponse } from "@/actions/submit-enquiry";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { products } from "@/content/products";
import { CheckCircle, ShieldCheck } from "lucide-react";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export interface QuoteFormProps {
  defaultProductSlug?: string;
  embedded?: boolean;
}

export function QuoteForm({ defaultProductSlug, embedded = false }: QuoteFormProps) {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);

  const adviserOptions = [
    { value: "any", label: "No preference (Next available adviser)" },
    { value: "roger", label: "Roger Venkatesh (Director & Financial Adviser)" },
    { value: "kiri", label: "Kiri Venkatesh (Key Account Manager)" },
  ];

  const contactOptions = [
    { value: "either", label: "Either Phone or Email" },
    { value: "phone", label: "Phone call preferred" },
    { value: "email", label: "Email preferred" },
  ];

  const inner = (
    <div className="space-y-8">
      {!embedded && (
        <div className="text-center space-y-3">
          <span className="text-[13px] font-bold text-[#006cff] uppercase tracking-wider">
            No Obligation &bull; 100% Free Consultation
          </span>
          <Heading as="h2" size="heading-lg">
            Request an Insurance Quote &amp; Advice
          </Heading>
          <p className="text-[16px] text-[#4f4f4f] leading-relaxed">
            Fill in your details below and one of our licensed advisers will review your circumstances, compare policy options, and provide tailored recommendations.
          </p>
        </div>
      )}

        {state.success ? (
          <div
            className="bg-[#cce2ff]/40 border border-[#006cff]/40 rounded-[32px] p-8 text-center space-y-4 animate-in fade-in"
            role="status"
          >
            <CheckCircle className="w-12 h-12 text-[#006cff] mx-auto" />
            <h3 className="text-[22px] font-bold text-[#1b2045]">Enquiry Received!</h3>
            <p className="text-[16px] text-[#1b2045] max-w-[560px] mx-auto leading-relaxed">
              {state.message}
            </p>
          </div>
        ) : (
          <form action={formAction} className="space-y-6">
            {state.message && !state.success && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-[14px] p-4 rounded-[16px]">
                {state.message}
              </div>
            )}

            {/* Step 1: Insurance Interests */}
            <div>
              <fieldset>
                <legend className="text-[15px] font-bold text-[#1b2045] mb-1">
                  What insurance covers are you interested in? <span className="text-[#006cff]">*</span>
                </legend>
                <p className="text-[13px] text-[#787878] mb-4">
                  Select all that apply. We can bundle and optimize across multiple providers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#f9f9f9] p-5 rounded-[24px] border border-[#e9e9e9]">
                  {products.map((p) => {
                    const isDefault = defaultProductSlug === p.slug;
                    return (
                      <Checkbox
                        key={p.slug}
                        id={`interest-${p.slug}`}
                        name="interests"
                        value={p.title}
                        label={p.title}
                        defaultChecked={isDefault}
                      />
                    );
                  })}
                </div>
                {state.errors?.interests && (
                  <p className="mt-1.5 text-[13px] text-red-600 font-medium">
                    {state.errors.interests[0]}
                  </p>
                )}
              </fieldset>
            </div>

            {/* Step 2: Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="fullName"
                id="q-fullName"
                placeholder="e.g. David & Mary Smith"
                required
                error={state.errors?.fullName?.[0]}
              />

              <Input
                label="Phone Number"
                name="phone"
                id="q-phone"
                type="tel"
                placeholder="e.g. 021 592 786"
                required
                error={state.errors?.phone?.[0]}
              />
            </div>

            <Input
              label="Email Address"
              name="email"
              id="q-email"
              type="email"
              placeholder="e.g. david.smith@example.co.nz"
              required
              error={state.errors?.email?.[0]}
            />

            {/* Step 3: Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Preferred Contact Method"
                name="contactMethod"
                id="q-contactMethod"
                options={contactOptions}
                defaultValue="either"
              />

              <Select
                label="Adviser Preference"
                name="preferredAdviser"
                id="q-preferredAdviser"
                options={adviserOptions}
                defaultValue="any"
              />
            </div>

            {/* Step 4: Notes */}
            <Textarea
              label="Additional Notes / Questions (Optional)"
              name="message"
              id="q-message"
              rows={4}
              placeholder="Tell us about your current coverage, mortgage level, or any specific health conditions you wish to discuss..."
              error={state.errors?.message?.[0]}
            />

            <div className="p-4 bg-[#f9f9f9] rounded-[20px] border border-[#e9e9e9] flex items-start gap-3 text-[13px] text-[#4f4f4f]">
              <ShieldCheck className="w-5 h-5 text-[#006cff] shrink-0 mt-0.5" />
              <span>
                <strong>Your privacy is protected:</strong> Information submitted is held strictly confidential in accordance with the New Zealand Privacy Act 2020 and used solely by Maxwell Financial Services to provide your insurance quotation.
              </span>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full font-bold"
                disabled={isPending}
              >
                {isPending ? "Submitting Quote Request..." : "Submit Quote Request"}
              </Button>
            </div>
          </form>
        )}
      </div>
  );

  if (embedded) {
    return inner;
  }

  return (
    <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm">
      <div className="max-w-[760px] mx-auto">
        {inner}
      </div>
    </div>
  );
}
