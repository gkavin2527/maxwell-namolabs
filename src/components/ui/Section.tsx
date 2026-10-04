import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "default" | "tight" | "loose" | "none";
  surface?: "canvas" | "white" | "cobalt" | "obsidian";
}

export function Section({
  className,
  spacing = "default",
  surface = "canvas",
  children,
  ...props
}: SectionProps) {
  const spacingStyles = {
    default: "py-12 md:py-16", // 64px standard gap
    tight: "py-8 md:py-10",
    loose: "py-16 md:py-24",
    none: "py-0",
  };

  const surfaceStyles = {
    canvas: "bg-[#f9f9f9]",
    white: "bg-[#ffffff]",
    cobalt: "bg-[#006cff] text-[#ffffff]",
    obsidian: "bg-[#202020] text-[#ffffff]",
  };

  return (
    <section
      className={cn(
        "w-full relative",
        spacingStyles[spacing],
        surfaceStyles[surface],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
