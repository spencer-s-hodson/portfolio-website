import type { Metadata } from "next";
import { PageHeader, ToolGrid } from "@/components/sections";
import { site, tools, type Tool } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tech",
  description: `The tools ${site.name} builds with`,
};

const groups: Tool["group"][] = ["Languages", "Frameworks", "AI", "Infrastructure"];

export default function TechPage() {
  return (
    <main>
      <PageHeader
        bright="Tech"
        dim="Stack"
        lede="The languages, frameworks, and AI tooling I reach for when shipping."
        note="Placeholder stack · replace in lib/content.ts"
      />
      <div className="page-body">
        {groups.map((group) => {
          const items = tools.filter((t) => t.group === group);
          if (items.length === 0) return null;
          return (
            <section key={group} className="tool-group" aria-label={group}>
              <h2 className="group-title">{group}</h2>
              <ToolGrid items={items} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
