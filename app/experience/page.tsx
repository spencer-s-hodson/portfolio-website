import type { Metadata } from "next";
import { ExperienceList, PageHeader } from "@/components/sections";
import { experience, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience of ${site.name}`,
};

export default function ExperiencePage() {
  return (
    <main>
      <PageHeader
        bright="Work"
        dim="Experience"
        lede="Roles I've held and systems I've shaped — open any for the full story."
      />
      <div className="page-body">
        <ExperienceList items={experience} />
      </div>
    </main>
  );
}
