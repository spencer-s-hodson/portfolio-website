import Link from "next/link";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  FolderIcon,
} from "@/components/icons";
import {
  ExperienceList,
  PostList,
  ProjectList,
  Section,
  ToolGrid,
  TwoTone,
} from "@/components/sections";
import { experience, posts, projects, site, tools } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <TwoTone
          as="h1"
          size="hero"
          bright={site.heroLines[0]}
          dim={site.heroLines[1]}
        />
        <p className="lede mt-7">{site.supportingLine}</p>

        <dl className="counts">
          {site.stats.map(({ value, label }) => (
            <div key={label.join(" ")}>
              <dt className="count-label">
                {label[0]}
                <br />
                {label[1]}
              </dt>
              <dd className="count-value display">
                {String(value).padStart(2, "0")}
              </dd>
            </div>
          ))}
        </dl>

        <div className="feature-cards">
          <Link href="/projects" className="feature-card feature-mark">
            <svg
              className="feature-art"
              viewBox="0 0 320 260"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M210 -10c-40 60 40 90 10 150s-140 40-170 130" />
              <path d="M330 40c-60 10-50 80-110 100" />
            </svg>
            <FolderIcon className="feature-icon" />
            <span className="feature-title display">Projects</span>
            <span className="feature-go" aria-hidden="true">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
          <Link href="/experience" className="feature-card feature-lime">
            <svg
              className="feature-art"
              viewBox="0 0 320 260"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M-10 230 50 40l40 150 60-170 50 190 50-150 40 120 50-160" />
            </svg>
            <BriefcaseIcon className="feature-icon" />
            <span className="feature-title display">Experience</span>
            <span className="feature-go" aria-hidden="true">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </header>

      <Section
        id="projects"
        bright="Recent"
        dim="Projects"
        more={{ href: "/projects", label: "All projects" }}
      >
        <ProjectList items={projects.slice(0, 3)} />
      </Section>

      <Section
        id="experience"
        bright="Work"
        dim="Experience"
        more={{ href: "/experience", label: "Full experience" }}
      >
        <ExperienceList items={experience.slice(0, 2)} />
      </Section>

      <Section
        id="tech"
        bright="Tech"
        dim="Stack"
        more={{ href: "/tech", label: "Whole stack" }}
      >
        <ToolGrid items={tools.slice(0, 6)} />
      </Section>

      <Section
        id="blog"
        bright="Notes"
        dim="& Writing"
        more={{ href: "/blog", label: "All posts" }}
      >
        <PostList items={posts.slice(0, 2)} />
      </Section>

      <section className="home-section contact" aria-labelledby="contact-title">
        <TwoTone id="contact-title" bright="Let's work" dim="together" />
        <p className="lede mt-6">
          Hiring for a full-time role, or need a contract engineer? The inbox
          is open.
        </p>
        <a href={`mailto:${site.email}`} className="stamp mt-8">
          {site.email}
        </a>
      </section>
    </main>
  );
}
