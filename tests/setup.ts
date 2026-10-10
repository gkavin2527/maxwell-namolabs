// @ts-expect-error global React act flag
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
if (typeof window !== "undefined") {
  // @ts-expect-error window flag
  window.IS_REACT_ACT_ENVIRONMENT = true;
}
if (typeof global !== "undefined") {
  // @ts-expect-error global flag
  global.IS_REACT_ACT_ENVIRONMENT = true;
}

import "@testing-library/jest-dom";
import * as React from "react";
import { vi } from "vitest";

// Mock next/link for unit tests
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children?: React.ReactNode;
    href?: string;
    [key: string]: unknown;
  }) => React.createElement("a", { href, ...props }, children),
}));

// Mock lucide-react for unit tests to prevent React 19 dual-instance useContext issues
vi.mock("lucide-react", async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>;
  const createIconMock = (name: string) => {
    const Component = (props: React.SVGProps<SVGSVGElement>) =>
      React.createElement("svg", { "data-icon": name, ...props });
    Component.displayName = name;
    return Component;
  };

  const mocks: Record<string, unknown> = {};
  for (const key of Object.keys(actual)) {
    const value = actual[key];
    if (typeof value === "function" || (value && typeof value === "object" && "$$typeof" in value)) {
      mocks[key] = createIconMock(key);
    } else {
      mocks[key] = value;
    }
  }
  return mocks;
});
