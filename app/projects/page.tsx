import type { Metadata } from "next";
import { PageHeader, ProjectList } from "@/components/sections";
import { projects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects by ${site.name}`,
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        bright="Recent"
        dim="Projects"
        lede="Systems worth judging: what the problem was, what I built, and how it held up."
        note="Synthetic project names · replace in lib/content.ts"
      />
      <div className="page-body">
        <ProjectList items={projects} />
      </div>
    </main>
  );
}
