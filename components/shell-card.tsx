"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Placement = "start" | "end";

export function ShellCard({
  children,
  placement,
}: {
  children: ReactNode;
  placement: Placement;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <aside
      className={[
        "shell-card",
        placement === "start" ? "shell-card-start" : "shell-card-end",
        isHome ? "shell-card-home" : "shell-card-inner",
      ].join(" ")}
    >
      {children}
    </aside>
  );
}
