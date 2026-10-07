import type { Metadata } from "next";
import { PageHeader, PostList } from "@/components/sections";
import { posts, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notes and writing by ${site.name}`,
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        bright="Notes"
        dim="& Writing"
        lede="Working notes on building software with AI in the loop."
      />
      <div className="page-body">
        <PostList items={posts} />
      </div>
    </main>
  );
}
