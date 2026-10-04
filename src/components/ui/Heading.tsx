import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "display" | "heading-lg" | "heading" | "heading-sm" | "subheading";
  inverted?: boolean;
}

export function Heading({
  as: Component = "h2",
  size,
  inverted = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const sizeClass = {
    display: "text-[32px] md:text-[36px] font-bold leading-[1.1] tracking-tight",
    "heading-lg": "text-[26px] md:text-[30px] font-bold leading-[1.2]",
    heading: "text-[22px] md:text-[24px] font-bold leading-[1.25]",
    "heading-sm": "text-[18px] md:text-[20px] font-semibold leading-[1.33]",
    subheading: "text-[16px] md:text-[18px] font-medium leading-[1.4]",
  };

  const defaultSizeByTag: Record<string, keyof typeof sizeClass> = {
    h1: "display",
    h2: "heading-lg",
    h3: "heading",
    h4: "heading-sm",
    h5: "subheading",
    h6: "subheading",
  };

  const resolvedSize = size || defaultSizeByTag[Component] || "heading";

  return (
    <Component
      className={cn(
        sizeClass[resolvedSize],
        inverted ? "text-[#ffffff]" : "text-[#1b2045]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
