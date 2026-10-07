import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ContactCTA } from "@/components/contact-cta";
import { PillNav } from "@/components/pill-nav";
import { ProfileCard } from "@/components/profile-card";
import { ShellCard } from "@/components/shell-card";
import { site } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <PillNav />
        <div className="shell">
          <ShellCard placement="start">
            <ProfileCard priority />
          </ShellCard>
          <div className="shell-main" id="content">
            {children}
            <ContactCTA />
            <ShellCard placement="end">
              <ProfileCard />
            </ShellCard>
            <footer className="site-footer">
              © {new Date().getFullYear()} {site.name}
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
