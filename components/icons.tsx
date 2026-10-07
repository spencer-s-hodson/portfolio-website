import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function Stroke({
  className,
  children,
  width = 1.75,
}: IconProps & { children: ReactNode; width?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </Stroke>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h4l2 2.5h7a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-10Z" />
    </Stroke>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.5" y="7" width="17" height="13" rx="2" />
      <path d="M8.5 7V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V7M9 7v13M15 7v13" />
    </Stroke>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a5.5 5.5 0 0 1-7.3 7.3l-6.5 6.5a2.1 2.1 0 0 1-3-3l6.5-6.5a5.5 5.5 0 0 1 7.3-7.3l-3.4 3.4Z" />
    </Stroke>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 20h8.5" />
      <path d="M16.4 3.6a2 2 0 0 1 2.9 2.9L7.5 18.3 3.5 19.5l1.2-4L16.4 3.6Z" />
    </Stroke>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Stroke {...props} width={2}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Stroke>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Stroke {...props} width={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5M3 17l9 5 9-5" />
    </Stroke>
  );
}

export function LayoutIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M3.5 9h17M9 9v11.5" />
    </Stroke>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <Stroke {...props} width={2}>
      <path d="M12 3.5c.5 4.2 2.3 6 6.5 6.5-4.2.5-6 2.3-6.5 6.5-.5-4.2-2.3-6-6.5-6.5 4.2-.5 6-2.3 6.5-6.5Z" />
      <path d="M18.5 16v4M16.5 18h4" />
    </Stroke>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Stroke>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Stroke {...props} width={2.25}>
      <path d="M5 12.5 9.5 17 19 7" />
    </Stroke>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </Stroke>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V16.5M7.5 7.5v.01M11.5 16.5v-3.5a2.5 2.5 0 0 1 5 0v3.5M11.5 10.5v6" />
    </Stroke>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Stroke {...props} width={1.5}>
      <path d="M4 4h4l12 16h-4L4 4ZM19.5 4l-6.6 7.4M4.5 20l6.6-7.4" />
    </Stroke>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
    </Stroke>
  );
}
