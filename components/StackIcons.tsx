import { techIconSrc } from "@/lib/content";

function FallbackMark({ name }: { name: string }) {
  const letters = name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return <span className="stack-fallback">{letters}</span>;
}

export function StackIcons({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <ul className="stack-icons" aria-label="Technologies">
      {items.map((name) => {
        const icon = techIconSrc(name);

        return (
          <li key={name} className="stack-icon">
            <span className="stack-icon-face">
              {icon ? (
                // eslint-disable-next-line @next/next/no-img-element -- colored brand assets from /public
                <img
                  src={icon}
                  alt=""
                  width={20}
                  height={20}
                  className="stack-icon-img"
                />
              ) : (
                <FallbackMark name={name} />
              )}
              <span className="stack-tip" aria-hidden="true">
                {name}
              </span>
            </span>
            <span className="sr-only">{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
