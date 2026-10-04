import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function Container({
  className,
  narrow = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-[800px]" : "max-w-[1200px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
