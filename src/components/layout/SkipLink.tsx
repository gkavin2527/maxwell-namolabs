import * as React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#006cff] focus:text-[#ffffff] focus:font-semibold focus:rounded-[16px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ffffff]"
    >
      Skip to main content
    </a>
  );
}
