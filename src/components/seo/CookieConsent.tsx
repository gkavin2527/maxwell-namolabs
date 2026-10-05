"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return localStorage.getItem("mfs_cookie_consent") === "accepted";
}

function getServerSnapshot() {
  return true; // Return true during SSR so no server/client markup mismatch occurs
}

export function CookieConsent() {
  const isAccepted = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleAccept = () => {
    localStorage.setItem("mfs_cookie_consent", "accepted");
    window.dispatchEvent(new Event("storage"));
  };

  if (isAccepted) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-desc"
      className="fixed bottom-4 right-4 z-50 max-w-[420px] bg-[#ffffff] border border-[#e9e9e9] rounded-[24px] p-5 shadow-[rgba(0,0,0,0.18)_0px_12px_36px_0px] font-[family-name:var(--font-roboto)] animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="space-y-3">
        <h3 className="text-[15px] font-bold text-[#1b2045]">
          Your Privacy &amp; Cookies
        </h3>
        <p id="cookie-desc" className="text-[13px] text-[#4f4f4f] leading-relaxed">
          We use essential cookies and analytics to ensure our website functions securely and to improve our advisory services. Read our{" "}
          <Link href="/privacy-policy" className="text-[#006cff] underline hover:text-[#4672ff]">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex items-center gap-3 pt-1">
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={handleAccept}
            className="text-[13px] py-1.5 px-4 min-h-[34px]"
          >
            Accept &amp; Continue
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleAccept}
            className="text-[13px] text-[#6c6c6c]"
          >
            Close
          </Button>
        </div>
      </div>
    </aside>
  );
}
