/**
 * Replace every field here with your real materials.
 * Nothing in this file is claimed as factual proof.
 */

export const site = {
  name: "Spencer Hodson",
  role: "AI Native Software Engineer",
  /** Two-tone hero lines: first line bright, second line dim. */
  heroLines: ["Software", "Engineer"],
  supportingLine:
    "I build AI-native systems like agents, MCP servers, automations, and web apps. I love building things that save time, make money, and solve problems in my own life.",
  cardLine: "A software engineer with a bias for shipping",
  /** Drop a portrait at /public/portrait.jpg and set this to "/portrait.jpg". */
  portrait: "/portrait.jpg" as string | null,
  email: "spencer.s.hodson@gmail.com",
  location: "Lehi, UT",
  links: {
    github: "https://github.com/spencer-s-hodson",
    linkedin: "https://www.linkedin.com/in/spencer-hodson-3b4305229/",
    x: "https://x.com/spenztheman",
    instagram: "https://www.instagram.com/spencer.hodson/",
  },
  /** Hero stats — swap in real numbers when you're ready. */
  stats: [
    { value: 3, label: ["Years of", "experience"] },
    { value: 12, label: ["Projects", "completed"] },
    { value: 8, label: ["Clients", "served"] },
  ],
} as const;

/**
 * Universal tech icon map — used by projects and experience.
 * Drop PNGs in /public/tech (e.g. typescript.png), then map the label to the filename stem.
 */
export const techIcons: Record<string, string> = {
  TypeScript: "typescript",
  OpenShift: "openshift",
  React: "react",
  "Next.js": "nextjs",
  Python: "python",
  Rust: "rust",
  Tailwind: "tailwind",
  AWS: "aws",
  Ansible: "ansible",
};

export function techIconSrc(name: string): string | null {
  const file = techIcons[name];
  return file ? `/tech/${file}.png` : null;
}

export type Project = {
  id: string;
  title: string;
  summary: string;
  /** Tech names — icons resolve from `techIcons`. */
  stack: string[];
  href?: string;
  year: string;
};

export type Experience = {
  /** URL segment under `/experience/[slug]`. */
  slug: string;
  company: string;
  title: string;
  period: string;
  /** One-line role summary shown on list views. */
  summary: string;
  /** Detailed wins — shown on the role detail page. */
  bullets?: string[];
  /** Tech names — icons resolve from `techIcons`. */
  stack?: string[];
  /**
   * Square company logo in /public.
   * Example: drop `public/logos/northrop.png` → logo: "/logos/northrop.png"
   */
  logo?: string | null;
};

export type Tool = {
  id: string;
  name: string;
  use: string;
  group: "Languages" | "Frameworks" | "AI" | "Infrastructure";
};

export type Post = {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  href?: string;
};

export const projects: Project[] = [
  {
    id: "signal-router",
    title: "Signal Router",
    summary:
      "Placeholder project. Describe the problem, what you built, and the outcome.",
    stack: ["TypeScript", "Next.js"],
    year: "2025",
    href: "#",
  },
  {
    id: "lattice-cli",
    title: "Lattice CLI",
    summary:
      "Placeholder project. Swap this for a real tool, library, or product you shipped.",
    stack: ["Rust", "CLI"],
    year: "2024",
    href: "#",
  },
  {
    id: "agent-desk",
    title: "Agent Desk",
    summary:
      "Placeholder project. Note the AI-native angle and what made the system trustworthy.",
    stack: ["Python", "Agents", "Eval"],
    year: "2024",
    href: "#",
  },
];

export const experience: Experience[] = [
  {
    slug: "northrop-grumman",
    company: "Northrop Grumman",
    title: "Software Engineer",
    period: "Feb 2024 — Present",
    summary:
      "Building AI-powered internal tools and infrastructure automation for corporate leadership.",
    bullets: [
      "Building an AI-powered web application that transforms unstructured notes into organized knowledge, actionable tasks, priorities, and due dates.",
      "Built a web application demonstrating AI capabilities and use cases to senior stakeholders, including a mini CRM that enables non-developers to manage and update showcased use cases without modifying code.",
      "Built and maintained Ansible playbooks and roles to automate VM provisioning, configuration, and operational workflows, reducing manual intervention in infrastructure tasks.",
      "Resolved 200+ infrastructure and automation-related incidents, identifying recurring failure patterns and converting them into reusable automation improvements.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "AWS", "OpenShift", "Ansible"],
    logo: "/logos/northrop-grumman.png",
  },
  {
    slug: "self-employed",
    company: "Self-Employed",
    title: "Freelance Web Developer",
    period: "Aug 2025 — Present",
    summary:
      "Shipping full-stack client websites with payments, registration, and SEO.",
    bullets: [
      "Built and deployed a full-stack website for the Sport Science Network using Next.js, Supabase, and Stripe, enabling event registration and payments.",
      "Implemented a payment and registration system that processed $28k+ in transactions in 2 months with 0 failures.",
      "Delivered 3+ client websites, implementing SEO, lead capture forms, and analytics to support customer acquisition.",
    ],
    stack: ["Next.js", "Supabase", "Stripe"],
    logo: null,
  },
  {
    slug: "noodle-journal",
    company: "Noodle Journal",
    title: "Co-Founder and Lead Engineer",
    period: "Jan 2025 — Aug 2025",
    summary:
      "Led end-to-end development of a full-stack journaling platform.",
    bullets: [
      "Led end-to-end development of a full-stack journaling platform using Vue.js, Laravel, and Supabase.",
      "Integrated third-party services including Stripe and Twilio for payments and messaging.",
      "Acquired 70+ paying users through demos, user feedback, and iterative product improvements.",
      "Presented product at RootsTech 2025, engaging with hundreds of attendees and gathering customer insights.",
    ],
    stack: ["Vue.js", "Laravel", "Supabase"],
    logo: "/logos/noodle-journal.png",
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experience.find((role) => role.slug === slug);
}

export const tools: Tool[] = [
  { id: "ts", name: "TypeScript", use: "Product code", group: "Languages" },
  { id: "py", name: "Python", use: "Data & agents", group: "Languages" },
  { id: "next", name: "Next.js", use: "Web apps", group: "Frameworks" },
  { id: "react", name: "React", use: "Interfaces", group: "Frameworks" },
  { id: "claude", name: "Claude", use: "Agentic coding", group: "AI" },
  { id: "evals", name: "Evals", use: "Model quality", group: "AI" },
  { id: "pg", name: "Postgres", use: "Storage", group: "Infrastructure" },
  { id: "vercel", name: "Vercel", use: "Deploys", group: "Infrastructure" },
];

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Placeholder post title",
    summary: "One line on what the post argues. Replace in lib/content.ts.",
    date: "2026-09-01",
    readTime: "6 min",
  },
  {
    id: "post-2",
    title: "Another placeholder post",
    summary: "Keep summaries to one sentence so the list stays scannable.",
    date: "2026-07-14",
    readTime: "4 min",
  },
];

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
