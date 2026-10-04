"use server";

import { quoteEnquirySchema } from "@/lib/schemas";
import { siteConfig } from "@/content/site-config";

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitEnquiry(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const interests = formData.getAll("interests") as string[];

  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    interests: interests.length > 0 ? interests : [],
    preferredAdviser: (formData.get("preferredAdviser") as "any" | "roger" | "kiri") || "any",
    contactMethod: (formData.get("contactMethod") as "phone" | "email" | "either") || "either",
    message: formData.get("message") || undefined,
    turnstileToken: (formData.get("turnstileToken") as string) || undefined,
  };

  const validation = quoteEnquirySchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { fullName, email, phone, interests: selectedInterests, preferredAdviser, contactMethod, message } =
    validation.data;

  const recipientEmail = process.env.FORM_RECIPIENT_EMAIL || siteConfig.email;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey && resendApiKey !== "re_mock_key" && resendApiKey !== "re_test_key_here") {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Maxwell Insurance Enquiries <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: `New Insurance Quote Request: ${fullName} (${selectedInterests.join(", ")})`,
        text: `New Insurance Enquiry received on Maxwell Financial Services website:
        
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Insurance Types of Interest: ${selectedInterests.join(", ")}
Preferred Adviser: ${preferredAdviser}
Preferred Contact Method: ${contactMethod}
Client Message:
${message || "No additional message provided."}

Sent via Maxwell Insurance website.`,
      });
    } catch (err) {
      console.error("Failed to send quote enquiry email via Resend:", err);
    }
  } else {
    console.log("[Dev Mode] Quote enquiry simulated:", {
      fullName,
      email,
      phone,
      selectedInterests,
      preferredAdviser,
      contactMethod,
      message,
    });
  }

  return {
    success: true,
    message: `Thank you, ${fullName}! Your quote request has been received. Roger or Kiri will review your requirements and reach out within 1 business day.`,
  };
}
