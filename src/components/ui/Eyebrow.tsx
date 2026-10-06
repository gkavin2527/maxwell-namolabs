import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Small uppercase label above a section heading.
 *
 * Electric Cobalt (#006cff) is only 4.34:1 on the #f9f9f9 page background, short of the 4.5:1 that
 * WCAG AA needs for small text. #0064ff looks the same and reaches 4.67:1.
 */
export function Eyebrow({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("text-[13px] font-bold text-[#0064ff] uppercase tracking-wider", className)}
      {...props}
    >
      {children}
    </span>
  );
}
