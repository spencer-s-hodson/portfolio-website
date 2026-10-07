import Image from "next/image";
import { externalLinkProps, site } from "@/lib/content";
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from "./icons";

const socials = [
  { href: site.links.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.links.x, label: "X", Icon: XIcon },
  { href: site.links.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
];

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function ProfileCard({ priority = false }: { priority?: boolean }) {
  return (
    <article className="profile-card" aria-label={`${site.name}, profile`}>
      <div className="profile-portrait">
        {site.portrait ? (
          <Image
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            fill
            sizes="(min-width: 1024px) 300px, 80vw"
            className="object-cover"
            priority={priority}
          />
        ) : (
          <span className="profile-monogram" aria-hidden="true">
            {initials}
          </span>
        )}
      </div>

      <h2 className="profile-name display">{site.name}</h2>

      <p className="profile-line">{site.cardLine}</p>

      <ul className="profile-socials" aria-label="Elsewhere">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="profile-social"
              {...externalLinkProps(href)}
            >
              <Icon className="h-[1.35rem] w-[1.35rem]" />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
