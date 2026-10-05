import * as React from "react";
import Link from "next/link";
import { aboutPageLinks } from "@/content/nav-config";
import { cn } from "@/lib/utils";

export interface AboutSubnavProps {
  /** Route of the page being shown, e.g. "/about/advisers". */
  current: string;
}

export function AboutSubnav({ current }: AboutSubnavProps) {
  return (
    <nav aria-label="About Us sections">
      <ul className="flex flex-wrap gap-2">
        {aboutPageLinks.map((link) => {
          const isCurrent = link.href === current;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "inline-flex items-center min-h-[40px] px-4 rounded-2xl border text-[14px] font-medium transition-colors",
                  isCurrent
                    ? "bg-electric-cobalt border-electric-cobalt text-white"
                    : "bg-white border-mist text-graphite hover:border-sky-tint hover:text-deep-indigo"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
