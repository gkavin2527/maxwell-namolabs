import { z } from "zod";

// NZ phone validation: allows +64, 021, 022, 027, 09, spaces, dashes, parentheses
const nzPhoneRegex = /^(?:\+?64|0)[ -]?(?:\d[ -]?){7,11}\d$/;

export const callbackSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (minimum 2 characters)")
    .max(100, "Name must be under 100 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .regex(nzPhoneRegex, "Please enter a valid New Zealand phone number (e.g. 021 592 786 or 09 215 2423)"),
  bestTime: z.enum(["morning", "afternoon", "evening", "anytime"], {
    message: "Please select a preferred contact time",
  }),
  notes: z.string().trim().max(500, "Notes must be under 500 characters").optional(),
  turnstileToken: z.string().optional(),
});

export type CallbackFormData = z.infer<typeof callbackSchema>;

export const quoteEnquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (minimum 2 characters)")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .regex(nzPhoneRegex, "Please enter a valid New Zealand phone number"),
  interests: z
    .array(z.string())
    .min(1, "Please select at least one insurance type of interest"),
  preferredAdviser: z
    .enum(["any", "roger", "kiri"])
    .default("any")
    .optional(),
  contactMethod: z
    .enum(["phone", "email", "either"])
    .default("either")
    .optional(),
  message: z.string().trim().max(2000, "Message must be under 2,000 characters").optional(),
  turnstileToken: z.string().optional(),
});

export type QuoteEnquiryFormData = z.infer<typeof quoteEnquirySchema>;
