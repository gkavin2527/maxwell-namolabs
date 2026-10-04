import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cobalt focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none text-[16px] leading-[1.25]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#006cff] text-[#ffffff] hover:bg-[#4672ff] active:bg-[#0052cc] rounded-[16px] border border-transparent shadow-sm",
        secondary:
          "bg-transparent text-[#1b2045] border border-[#1b2045] hover:bg-[#1b2045]/5 active:bg-[#1b2045]/10 rounded-[16px]",
        white:
          "bg-[#ffffff] text-[#006cff] hover:bg-[#f9f9f9] active:bg-[#e9e9e9] rounded-[16px] border border-transparent shadow-sm font-semibold",
        ghost:
          "bg-transparent text-[#1b2045] hover:underline p-0 h-auto rounded-none font-medium",
        outlineWhite:
          "bg-transparent text-[#ffffff] border border-[#ffffff] hover:bg-[#ffffff]/10 rounded-[16px]",
      },
      size: {
        default: "py-[11px] px-[20px] min-h-[46px]",
        sm: "py-[8px] px-[14px] text-[14px] min-h-[38px]",
        lg: "py-[14px] px-[28px] text-[18px] min-h-[52px]",
        link: "p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant, size, className }))}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
