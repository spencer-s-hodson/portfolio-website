"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import {
  BriefcaseIcon,
  FolderIcon,
  HomeIcon,
  MailIcon,
  PenIcon,
  WrenchIcon,
} from "./icons";

export const navLinks = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/projects", label: "Projects", Icon: FolderIcon },
  { href: "/experience", label: "Experience", Icon: BriefcaseIcon },
  { href: "/tech", label: "Tech Stack", Icon: WrenchIcon },
  { href: "/blog", label: "Blog", Icon: PenIcon },
] as const;

const contactHref = "/#contact";

export function PillNav() {
  const pathname = usePathname();

  function goToContact(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", contactHref);
  }

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
      <Link
        href={contactHref}
        className="pill-link pill-link-contact"
        aria-label="Contact"
        onClick={goToContact}
      >
        <MailIcon className="h-[1.3rem] w-[1.3rem]" />
        <span className="pill-tip" aria-hidden="true">
          Contact
        </span>
      </Link>
    </nav>
  );
}
