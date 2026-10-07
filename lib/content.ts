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
/**
 * Map display name → filename stem in /public/tech.
 * Only list icons that exist on disk (missing entries use letter fallbacks).
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
  Postgres: "postgres",
  Supabase: "supabase",
  Stripe: "stripe",
  Resend: "resend",
  "Vue.js": "vue",
  Laravel: "laravel",
  Twilio: "twilio",
  Java: "java",
  PHP: "php",
  MCP: "mcp",
  Cursor: "cursor",
  "OpenAI Agents SDK": "openai",
  "Vercel AI SDK": "vercel",
  Vercel: "vercel",
  "Claude Code": "claude",
  "Spring Boot": "spring-boot",
  "shadcn/ui": "shadcn",
  "Better Auth": "better-auth",
  tRPC: "trpc",
  "Node.js": "nodejs",
  JavaScript: "javascript",
  GitHub: "github",
};

export function techIconSrc(name: string): string | null {
  const file = techIcons[name];
  return file ? `/tech/${file}.png` : null;
}

/** Open off-site http(s) links in a new tab. */
export function externalLinkProps(href: string) {
  if (/^https?:\/\//i.test(href)) {
    return { target: "_blank" as const, rel: "noopener noreferrer" };
  }
  return {};
}

export type Project = {
  id: string;
  title: string;
  summary: string;
  /** Tech names — icons resolve from `techIcons`. */
  stack: string[];
  href?: string;
  year: string;
  /** Optional mark in /public — shown in the project tile. */
  logo?: string | null;
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
  /** Render a dark mono mark as white on the charcoal stage. */
  logoInvert?: boolean;
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  period?: string;
  summary?: string;
  logo?: string | null;
};

export type Tool = {
  id: string;
  name: string;
  /** Optional short note — not shown on the icon-only stack page. */
  use?: string;
  group:
    | "Languages"
    | "Frontend"
    | "Backend"
    | "AI"
    | "Platform"
    | "Integrations";
};

export type Post = {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  href?: string;
};

export const education: Education[] = [
  {
    id: "byu",
    school: "Brigham Young University",
    degree: "B.S. Computer Science",
    summary: "Computer Science coursework with teaching and research assistant roles.",
    logo: "/logos/byu.png",
  },
  {
    id: "sandbox",
    school: "Sandbox",
    degree: "Startup Incubator",
    summary:
      "Member of the SB04 cohort. Built and iterated on an early-stage product inside BYU's Sandbox startup incubator.",
    logo: "/logos/sandbox.png",
  },
];

export const projects: Project[] = [
  {
    id: "ssn",
    title: "Sport Science Network",
    summary:
      "Full-stack site for the Sport Science Network with event registration and Stripe payments — processed $190k+ in transactions in 4 months with 0 failures.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Postgres", "Stripe", "Resend", "AWS"],
    year: "2026",
    href: "https://www.sportsciencenetwork.com",
    logo: "/logos/ssn.png",
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
      "Built an AI-powered web application that transforms unstructured notes into organized knowledge, actionable tasks, priorities, and due dates.",
      "Built a web application demonstrating AI capabilities and use cases to senior stakeholders, including a mini CRM that enables non-developers to manage and update showcased use cases without modifying code.",
      "Built and maintained Ansible playbooks and roles to automate VM provisioning, configuration, and operational workflows, reducing manual intervention in infrastructure tasks.",
      "Resolved 200+ infrastructure and automation-related incidents, identifying recurring failure patterns and converting them into reusable automation improvements.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "AWS", "OpenShift", "Ansible"],
    logo: "/logos/northrop-grumman.png",
  },
  {
    slug: "self-employed",
    company: "Freelance Work",
    title: "Freelance Software Engineer",
    period: "Aug 2025 — Present",
    summary:
      "Shipping full-stack client websites with payments, registration, and SEO.",
    bullets: [
      "Built and deployed a full-stack website for the Sport Science Network using Next.js, Supabase, and Stripe, enabling event registration and payments.",
      "Implemented a payment and registration system that processed $28k+ in transactions in 2 months with 0 failures.",
      "Delivered 3+ client websites, implementing SEO, lead capture forms, and analytics to support customer acquisition.",
    ],
    stack: [
      "Next.js",
      "Tailwind",
      "Supabase",
      "Postgres",
      "Stripe",
      "Resend",
      "AWS",
    ],
    logo: "/logos/napkin-systems.png",
    logoInvert: true,
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
    stack: [
      "Vue.js",
      "Laravel",
      "Tailwind",
      "Supabase",
      "Postgres",
      "AWS",
      "Twilio",
      "Stripe",
    ],
    logo: "/logos/noodle-journal.png",
  },
  {
    slug: "byu",
    company: "Brigham Young University",
    title: "Teaching Assistant & Research Assistant",
    period: "2021 — 2024",
    summary:
      "Supported Computer Science courses and faculty research while completing a CS degree.",
    bullets: [
      "Served as a Teaching Assistant for Computer Science courses, helping students through labs, assignments, and core programming concepts.",
      "Worked as a Research Assistant supporting faculty research projects in the Computer Science department.",
    ],
    stack: ["React", "Python"],
    logo: "/logos/byu.png",
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experience.find((role) => role.slug === slug);
}

export const tools: Tool[] = [
  { id: "ts", name: "TypeScript", group: "Languages" },
  { id: "js", name: "JavaScript", group: "Languages" },
  { id: "py", name: "Python", group: "Languages" },
  { id: "java", name: "Java", group: "Languages" },
  { id: "php", name: "PHP", group: "Languages" },
  { id: "next", name: "Next.js", group: "Frontend" },
  { id: "react", name: "React", group: "Frontend" },
  { id: "vue", name: "Vue.js", group: "Frontend" },
  { id: "tailwind", name: "Tailwind", group: "Frontend" },
  { id: "shadcn", name: "shadcn/ui", group: "Frontend" },
  { id: "node", name: "Node.js", group: "Backend" },
  { id: "pg", name: "Postgres", group: "Backend" },
  { id: "trpc", name: "tRPC", group: "Backend" },
  { id: "better-auth", name: "Better Auth", group: "Backend" },
  { id: "laravel", name: "Laravel", group: "Backend" },
  { id: "spring", name: "Spring Boot", group: "Backend" },
  { id: "vercel-ai-sdk", name: "Vercel AI SDK", group: "AI" },
  { id: "mcp", name: "MCP", group: "AI" },
  { id: "claude-code", name: "Claude Code", group: "AI" },
  { id: "cursor", name: "Cursor", group: "AI" },
  { id: "openai", name: "OpenAI Agents SDK", group: "AI" },
  { id: "aws", name: "AWS", group: "Platform" },
  { id: "supabase", name: "Supabase", group: "Platform" },
  { id: "vercel", name: "Vercel", group: "Platform" },
  { id: "openshift", name: "OpenShift", group: "Platform" },
  { id: "ansible", name: "Ansible", group: "Platform" },
  { id: "github", name: "GitHub", group: "Platform" },
  { id: "stripe", name: "Stripe", group: "Integrations" },
  { id: "resend", name: "Resend", group: "Integrations" },
  { id: "twilio", name: "Twilio", group: "Integrations" },
];

export const posts: Post[] = [];

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
