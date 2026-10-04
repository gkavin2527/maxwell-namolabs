"use client";

import * as React from "react";
import { useActionState } from "react";
import { submitCallback, ActionResponse } from "@/actions/submit-callback";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { PhoneCall, CheckCircle, Clock } from "lucide-react";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export function CallbackForm() {
  const [state, formAction, isPending] = useActionState(submitCallback, initialState);

  const timeOptions = [
    { value: "anytime", label: "Anytime during business hours" },
    { value: "morning", label: "Morning (8:30am – 12:00pm)" },
    { value: "afternoon", label: "Afternoon (12:00pm – 4:00pm)" },
    { value: "evening", label: "Late Afternoon / Evening (4:00pm – 6:30pm)" },
  ];

  return (
    <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-12 shadow-sm">
      <div className="max-w-[640px] mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-[16px] bg-[#cce2ff] text-[#006cff] mb-2">
            <PhoneCall className="w-6 h-6" />
          </div>
          <Heading as="h3" size="heading">
            Request a Quick Callback
          </Heading>
          <p className="text-[15px] text-[#4f4f4f]">
            Leave your contact number and Roger will call you back at your convenience for a free, confidential discussion.
          </p>
        </div>

        {state.success ? (
          <div
            className="bg-[#cce2ff]/40 border border-[#006cff]/30 rounded-[24px] p-6 text-center space-y-3 animate-in fade-in"
            role="status"
          >
            <CheckCircle className="w-10 h-10 text-[#006cff] mx-auto" />
            <h4 className="text-[18px] font-bold text-[#1b2045]">Callback Requested!</h4>
            <p className="text-[15px] text-[#1b2045]">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            {state.message && !state.success && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-[14px] p-4 rounded-[16px]">
                {state.message}
              </div>
            )}

            <Input
              label="Your Full Name"
              name="fullName"
              id="cb-fullName"
              placeholder="e.g. Sarah Jenkins"
              required
              error={state.errors?.fullName?.[0]}
            />

            <Input
              label="Phone Number"
              name="phone"
              id="cb-phone"
              type="tel"
              placeholder="e.g. 021 592 786"
              required
              error={state.errors?.phone?.[0]}
            />

            <Select
              label="Best Time to Call"
              name="bestTime"
              id="cb-bestTime"
              options={timeOptions}
              defaultValue="anytime"
              required
              error={state.errors?.bestTime?.[0]}
            />

            <Textarea
              label="What would you like to discuss? (Optional)"
              name="notes"
              id="cb-notes"
              rows={3}
              placeholder="e.g. Reviewing my current life cover or getting health insurance for my family..."
              error={state.errors?.notes?.[0]}
            />

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full font-semibold"
                disabled={isPending}
              >
                {isPending ? "Submitting Request..." : "Request Free Callback"}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[12px] text-[#787878] pt-2">
              <Clock className="w-3.5 h-3.5 text-[#006cff]" />
              <span>Roger typically replies within 2–4 business hours</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
