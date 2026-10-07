import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import {
  EducationList,
  ExperienceList,
  PostList,
  ProjectList,
  Section,
  TwoTone,
} from "@/components/sections";
import { TechMarquee } from "@/components/TechMarquee";
import { education, experience, posts, projects, site, tools } from "@/lib/content";

const marqueeTools = tools.filter(
  (tool) =>
    tool.group === "Languages" ||
    tool.group === "Frontend" ||
    tool.group === "Backend",
);

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

        <div className="feature-cards">
          <Link href="/projects" className="feature-card feature-mark">
            <svg
              className="feature-art"
              viewBox="0 0 320 260"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <path
                className="feature-stroke"
                d="M210 -10c-40 60 40 90 10 150s-140 40-170 130"
              />
              <path
                className="feature-stroke"
                d="M330 40c-60 10-50 80-110 100"
              />
            </svg>
            <span className="feature-title display">Projects</span>
            <span className="feature-go" aria-hidden="true">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>

          <Link href="/experience" className="feature-card feature-lime">
            <svg
              className="feature-art"
              viewBox="0 0 320 260"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <path
                className="feature-stroke"
                d="M-10 230 50 40l40 150 60-170 50 190 50-150 40 120 50-160"
              />
            </svg>
            <span className="feature-title display">Experience</span>
            <span className="feature-go" aria-hidden="true">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>

          <Link href="/tech" className="feature-card feature-violet">
            <svg
              className="feature-art"
              viewBox="0 0 320 260"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect
                className="feature-fill"
                x="190"
                y="-10"
                width="100"
                height="100"
                transform="rotate(16 240 40)"
              />
              <rect
                className="feature-fill"
                x="235"
                y="85"
                width="130"
                height="130"
                transform="rotate(-14 300 150)"
              />
              <rect
                className="feature-fill"
                x="155"
                y="155"
                width="78"
                height="78"
                transform="rotate(26 194 194)"
              />
              <circle className="feature-fill" cx="55" cy="205" r="52" />
            </svg>
            <span className="feature-title display">Stack</span>
            <span className="feature-go" aria-hidden="true">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>

          <Link href="/blog" className="feature-card feature-cyan">
            <svg
              className="feature-art"
              viewBox="0 0 320 260"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <circle className="feature-ring" cx="250" cy="30" r="64" />
              <circle className="feature-ring" cx="250" cy="30" r="104" />
              <circle className="feature-ring" cx="250" cy="30" r="144" />
            </svg>
            <span className="feature-title display">Blog</span>
            <span className="feature-go" aria-hidden="true">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </header>

      <Section id="education" bright="School" dim="Path">
        <EducationList items={education} />
      </Section>

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
        more={{ href: "/tech", label: "Full tech stack" }}
      >
        <TechMarquee items={marqueeTools} />
      </Section>

      {posts.length > 0 ? (
        <Section
          id="blog"
          bright="Notes"
          dim="& Writing"
          more={{ href: "/blog", label: "All posts" }}
        >
          <PostList items={posts.slice(0, 2)} />
        </Section>
      ) : null}
    </main>
  );
}
