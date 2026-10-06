import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/sections";
import { experience, getExperience } from "@/lib/content";

export function generateStaticParams() {
  return experience.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getExperience(slug);

  if (!role) {
    return { title: "Experience" };
  }

  return {
    title: `${role.title} · ${role.company}`,
    description: role.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getExperience(slug);

  if (!role) {
    notFound();
  }

  return (
    <main>
      <div className="page-body page-body-flush">
        <ExperienceDetail role={role} />
      </div>
    </main>
  );
}
