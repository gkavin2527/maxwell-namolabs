import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-[14px] font-medium text-[#1b2045] mb-2"
          >
            {label}
            {props.required && <span className="text-[#006cff] ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          rows={props.rows || 4}
          className={cn(
            "w-full bg-[#ffffff] text-[#1b2045] placeholder-[#787878] border border-[#e9e9e9] rounded-[16px] px-[16px] py-[12px] text-[16px] leading-[1.5] transition-colors focus:border-[#006cff] focus:outline-none focus:ring-2 focus:ring-[#006cff]/20 disabled:bg-[#e9e9e9] disabled:cursor-not-allowed resize-y",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-[13px] text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
