import * as React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "glacial" | "white" | "dark" | "cobalt";
}

export function Tag({
  className,
  variant = "glacial",
  children,
  ...props
}: TagProps) {
  const variantStyles = {
    glacial: "bg-[#cce2ff] text-[#1b2045]",
    white: "bg-[#ffffff] text-[#1b2045] border border-[#e9e9e9]",
    dark: "bg-[#202020] text-[#ffffff]",
    cobalt: "bg-[#006cff] text-[#ffffff]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[12px] font-medium leading-[1.43] tracking-wide uppercase px-[12px] py-[6px] rounded-[3px]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
