import { techIconSrc, type Tool } from "@/lib/content";

function MarqueeItem({ tool }: { tool: Tool }) {
  const icon = techIconSrc(tool.name);
  const letters = tool.name
    .split(/[\s.]+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <li className="tech-marquee-item">
      <span className="tech-marquee-face" title={tool.name}>
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element -- colored brand assets from /public
          <img
            src={icon}
            alt=""
            width={40}
            height={40}
            className="tech-marquee-img"
          />
        ) : (
          <span className="tech-marquee-fallback display">{letters}</span>
        )}
      </span>
      <span className="tech-marquee-label">{tool.name}</span>
    </li>
  );
}

export function TechMarquee({ items }: { items: Tool[] }) {
  if (!items.length) return null;

  const loop = [...items, ...items];

  return (
    <div className="tech-marquee" aria-label="Languages, frontend, and backend">
      <ul className="tech-marquee-track">
        {loop.map((tool, index) => (
          <MarqueeItem key={`${tool.id}-${index}`} tool={tool} />
        ))}
      </ul>
    </div>
  );
}
