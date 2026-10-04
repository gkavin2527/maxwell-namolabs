import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "parchment" | "cobalt" | "obsidian";
  withHover?: boolean;
}

export function Card({
  className,
  variant = "white",
  withHover = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    white: "bg-[#ffffff] text-[#4f4f4f] border border-[#e9e9e9]",
    parchment: "bg-[#f9f9f9] text-[#4f4f4f] border border-[#e9e9e9]",
    cobalt: "bg-[#006cff] text-[#ffffff] border border-transparent",
    obsidian: "bg-[#202020] text-[#ffffff] border border-[#303030]",
  };

  return (
    <div
      className={cn(
        "rounded-[40px] p-[24px] md:p-[32px] transition-all duration-200",
        variantStyles[variant],
        withHover && "hover:border-[#66a7ff] hover:shadow-[rgba(0,0,0,0.1)_0px_8px_24px_0px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
