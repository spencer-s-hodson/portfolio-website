import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { ContactCTA } from "@/components/ContactCTA";
import { PillNav } from "@/components/PillNav";
import { ProfileCard } from "@/components/ProfileCard";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.supportingLine,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <PillNav />
        <div className="shell">
          <aside className="shell-card">
            <ProfileCard />
          </aside>
          <div className="shell-main" id="content">
            {children}
            <ContactCTA />
            <footer className="site-footer">
              © {new Date().getFullYear()} {site.name}
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
