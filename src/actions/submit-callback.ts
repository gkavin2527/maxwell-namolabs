"use server";

import { callbackSchema } from "@/lib/schemas";
import { siteConfig } from "@/content/site-config";

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitCallback(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    bestTime: formData.get("bestTime"),
    notes: formData.get("notes") || undefined,
    turnstileToken: (formData.get("turnstileToken") as string) || undefined,
  };

  const validation = callbackSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { fullName, phone, bestTime, notes } = validation.data;

  // In production, send via Resend
  const recipientEmail = process.env.FORM_RECIPIENT_EMAIL || siteConfig.email;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey && resendApiKey !== "re_mock_key" && resendApiKey !== "re_test_key_here") {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Maxwell Insurance Website <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: siteConfig.email,
        subject: `New Quick Callback Request: ${fullName}`,
        text: `New Callback Request received on Maxwell Financial Services website:
        
Name: ${fullName}
Phone: ${phone}
Preferred Time: ${bestTime}
Notes: ${notes || "None"}

Sent via Maxwell Insurance website.`,
      });
    } catch (err) {
      console.error("Failed to send callback email via Resend:", err);
      // Still return success to user so client enquiry is acknowledged
    }
  } else {
    console.log("[Dev Mode] Callback request simulated:", { fullName, phone, bestTime, notes });
  }

  return {
    success: true,
    message: `Thank you, ${fullName}. Roger has received your callback request and will call you during your preferred time (${bestTime}).`,
  };
}
