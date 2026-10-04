import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const checkboxId = id || `cb-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="flex items-start gap-3">
        <div className="flex items-center h-6">
          <input
            id={checkboxId}
            ref={ref}
            type="checkbox"
            className={cn(
              "h-5 w-5 rounded-[3px] border-[#bbbbbb] text-[#006cff] focus:ring-2 focus:ring-[#006cff] focus:ring-offset-2 transition-colors cursor-pointer",
              className
            )}
            {...props}
          />
        </div>
        <div className="text-[15px] leading-[1.4]">
          <label
            htmlFor={checkboxId}
            className="font-medium text-[#1b2045] cursor-pointer select-none"
          >
            {label}
          </label>
          {description && (
            <p className="text-[13px] text-[#4f4f4f] mt-0.5">{description}</p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
