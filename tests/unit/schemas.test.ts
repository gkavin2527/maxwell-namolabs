import { describe, it, expect } from "vitest";
import { callbackSchema, quoteEnquirySchema } from "@/lib/schemas";

describe("Validation Schemas", () => {
  describe("callbackSchema", () => {
    it("accepts valid NZ phone numbers and full inputs", () => {
      const validCases = [
        { fullName: "Sarah Connor", phone: "021 592 786", bestTime: "morning" },
        { fullName: "Roger V", phone: "09 215 2423", bestTime: "anytime", notes: "Review please" },
        { fullName: "Kiri V", phone: "+6421592786", bestTime: "evening" },
      ];

      for (const input of validCases) {
        const result = callbackSchema.safeParse(input);
        expect(result.success).toBe(true);
      }
    });

    it("rejects invalid inputs", () => {
      const invalidCases = [
        { fullName: "A", phone: "021 592 786", bestTime: "morning" }, // name too short
        { fullName: "Valid Name", phone: "123", bestTime: "morning" }, // invalid phone
        { fullName: "Valid Name", phone: "021 592 786", bestTime: "midnight" }, // invalid time enum
      ];

      for (const input of invalidCases) {
        const result = callbackSchema.safeParse(input);
        expect(result.success).toBe(false);
      }
    });
  });

  describe("quoteEnquirySchema", () => {
    it("accepts valid quote submissions with selected interests", () => {
      const validData = {
        fullName: "Michael Smith",
        email: "michael@example.co.nz",
        phone: "021 123 4567",
        interests: ["Life Insurance", "Health Insurance"],
        preferredAdviser: "roger",
        contactMethod: "phone",
        message: "Need family cover",
      };

      const result = quoteEnquirySchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("rejects when no interests are selected", () => {
      const invalidData = {
        fullName: "Michael Smith",
        email: "michael@example.co.nz",
        phone: "021 123 4567",
        interests: [],
      };

      const result = quoteEnquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("rejects invalid email formats", () => {
      const invalidData = {
        fullName: "Michael Smith",
        email: "invalid-email",
        phone: "021 123 4567",
        interests: ["Life Insurance"],
      };

      const result = quoteEnquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
