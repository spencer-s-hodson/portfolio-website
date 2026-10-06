"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseIcon,
  FolderIcon,
  HomeIcon,
  PenIcon,
  WrenchIcon,
} from "./icons";

export const navLinks = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/projects", label: "Projects", Icon: FolderIcon },
  { href: "/experience", label: "Experience", Icon: BriefcaseIcon },
  { href: "/tech", label: "Tech", Icon: WrenchIcon },
  { href: "/blog", label: "Blog", Icon: PenIcon },
] as const;

export function PillNav() {
  const pathname = usePathname();

  return (
    <nav className="pill-nav" aria-label="Primary">
      {navLinks.map(({ href, label, Icon }) => {
        const current =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className="pill-link"
            aria-label={label}
            aria-current={current ? "page" : undefined}
          >
            <Icon className="h-[1.3rem] w-[1.3rem]" />
            <span className="pill-tip" aria-hidden="true">
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
