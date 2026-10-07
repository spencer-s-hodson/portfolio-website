import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  externalLinkProps,
  formatDate,
  techIconSrc,
  type Education,
  type Experience,
  type Post,
  type Project,
  type Tool,
} from "@/lib/content";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";
import { StackIcons } from "./StackIcons";

export function TwoTone({
  bright,
  dim,
  as: Tag = "h2",
  size = "section",
  id,
}: {
  id?: string;
  bright: string;
  dim: string;
  as?: "h1" | "h2";
  size?: "hero" | "section";
}) {
  return (
    <Tag id={id} className={`two-tone display two-tone-${size}`}>
      <span className="two-tone-bright">{bright}</span>{" "}
      <span className="two-tone-dim">{dim}</span>
    </Tag>
  );
}

export function Section({
  id,
  bright,
  dim,
  more,
  children,
}: {
  id: string;
  bright: string;
  dim: string;
  more?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section className="home-section" aria-labelledby={`${id}-title`}>
      <TwoTone id={`${id}-title`} bright={bright} dim={dim} />
      <div className="mt-8">{children}</div>
      {more ? (
        <Link href={more.href} className="more-link">
          {more.label}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      ) : null}
    </section>
  );
}

export function PageHeader({
  bright,
  dim,
  lede,
  note,
}: {
  bright: string;
  dim: string;
  lede: string;
  note?: string;
}) {
  return (
    <header className="page-header">
      <TwoTone as="h1" size="hero" bright={bright} dim={dim} />
      <p className="lede mt-6">{lede}</p>
      {note ? <p className="placeholder-note">{note}</p> : null}
    </header>
  );
}

const tileTones = ["tone-mark", "tone-lime", "tone-sheet"] as const;

export function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="row-list">
      {items.map((project, i) => (
        <li key={project.id}>
          <a
            href={project.href ?? "#"}
            className="row row-project"
            {...externalLinkProps(project.href ?? "#")}
          >
            <span
              className={`project-tile ${project.logo ? "project-tile-logo" : tileTones[i % tileTones.length]}`}
              aria-hidden="true"
            >
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt=""
                  width={160}
                  height={120}
                  className="project-tile-img"
                />
              ) : (
                <span className="display">{project.title[0]}</span>
              )}
            </span>
            <span className="row-body">
              <span className="row-title display">{project.title}</span>
              <span className="row-text">{project.summary}</span>
              <span className="row-meta-row">
                <span className="row-meta">{project.year}</span>
                <StackIcons items={project.stack} />
              </span>
            </span>
            <ArrowUpRightIcon className="row-arrow" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function EducationList({ items }: { items: Education[] }) {
  return (
    <ul className="row-list">
      {items.map((entry) => (
        <li key={entry.id}>
          <div className="row row-experience row-static">
            <span className="company-logo" aria-hidden="true">
              {entry.logo ? (
                <Image
                  src={entry.logo}
                  alt=""
                  width={72}
                  height={72}
                  className="company-logo-img"
                />
              ) : (
                <span className="display">{entry.school[0]}</span>
              )}
            </span>
            <span className="row-body">
              <span className="row-title display">{entry.school}</span>
              <span className="row-sub">{entry.degree}</span>
              {entry.summary ? (
                <span className="row-text">{entry.summary}</span>
              ) : null}
            </span>
            {entry.period ? (
              <span className="row-side">
                <span className="row-period">{entry.period}</span>
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ul className="row-list">
      {items.map((role) => (
        <li key={role.slug}>
          <Link href={`/experience/${role.slug}`} className="row row-experience">
            <span className="company-logo" aria-hidden="true">
              {role.logo ? (
                <Image
                  src={role.logo}
                  alt=""
                  width={72}
                  height={72}
                  className={`company-logo-img${role.logoInvert ? " company-logo-img-invert" : ""}`}
                />
              ) : (
                <span className="display">{role.company[0]}</span>
              )}
            </span>
            <span className="row-body">
              <span className="row-title display">{role.company}</span>
              <span className="row-sub">{role.title}</span>
              <span className="row-text">{role.summary}</span>
              {role.stack?.length ? <StackIcons items={role.stack} /> : null}
            </span>
            <span className="row-side">
              <span className="row-period">{role.period}</span>
              <ArrowRightIcon className="row-arrow" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceDetail({ role }: { role: Experience }) {
  return (
    <article className="experience-detail">
      <div className="experience-detail-head">
        <span className="company-logo company-logo-lg" aria-hidden="true">
          {role.logo ? (
            <Image
              src={role.logo}
              alt=""
              width={96}
              height={96}
              className={`company-logo-img${role.logoInvert ? " company-logo-img-invert" : ""}`}
            />
          ) : (
            <span className="display">{role.company[0]}</span>
          )}
        </span>
        <div className="experience-detail-copy">
          <p className="row-period">{role.period}</p>
          <h1 className="display experience-detail-title">{role.company}</h1>
          <p className="row-sub">{role.title}</p>
          <p className="lede mt-4">{role.summary}</p>
          {role.stack?.length ? (
            <div className="mt-5">
              <StackIcons items={role.stack} />
            </div>
          ) : null}
        </div>
      </div>

      {role.bullets?.length ? (
        <ul className="role-bullets role-bullets-detail">
          {role.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      <Link href="/experience" className="more-link">
        <ArrowRightIcon className="h-4 w-4 rotate-180" />
        All experience
      </Link>
    </article>
  );
}

export function ToolGrid({ items }: { items: Tool[] }) {
  return (
    <ul className="tool-icons" aria-label="Technologies">
      {items.map((tool) => {
        const icon = techIconSrc(tool.name);
        const letters = tool.name
          .split(/[\s.]+/)
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();

        return (
          <li key={tool.id} className="tool-icon">
            <span className="tool-icon-face">
              {icon ? (
                // eslint-disable-next-line @next/next/no-img-element -- colored brand assets from /public
                <img
                  src={icon}
                  alt=""
                  width={36}
                  height={36}
                  className="tool-icon-img"
                />
              ) : (
                <span className="tool-icon-fallback display">{letters}</span>
              )}
              <span className="stack-tip" aria-hidden="true">
                {tool.name}
              </span>
            </span>
            <span className="sr-only">{tool.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function PostList({ items }: { items: Post[] }) {
  if (items.length === 0) {
    return (
      <div className="tbc-box" role="status">
        <p className="tbc-box-label display">To be continued</p>
      </div>
    );
  }

  return (
    <ul className="row-list">
      {items.map((post) => {
        const body = (
          <>
            <span className="row-body">
              <span className="row-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
                {post.readTime} read
              </span>
              <span className="row-title display">{post.title}</span>
              <span className="row-text">{post.summary}</span>
            </span>
            {post.href ? <ArrowUpRightIcon className="row-arrow" /> : null}
          </>
        );
        return (
          <li key={post.id}>
            {post.href ? (
              <a
                href={post.href}
                className="row row-post"
                {...externalLinkProps(post.href)}
              >
                {body}
              </a>
            ) : (
              <div className="row row-static row-post">{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
