import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * J.A.D.E platform mark. Vector sourced verbatim from the Figma cover
 * (fileKey VZUErSo0XedORzPWi4HRKR, node 2538:12). Uses currentColor so
 * callers set the fill via text color (defaults to the brand blue).
 */
export function Logo({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 332.063 405"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="J.A.D.E"
      className={cn("text-brand", className)}
      {...props}
    >
      <path d="M210.505 359.711L166.032 404.212L121.559 359.711V82.5247L166.032 127.027L210.505 82.5247V359.711Z" />
      <path d="M80.051 81.1436V318.23L0 238.087V1L80.051 81.1436Z" />
      <path d="M252.012 81.1437V318.23L332.063 238.087V1.00001L252.012 81.1437Z" />
    </svg>
  );
}
