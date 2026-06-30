import Link from "next/link";

import type { HomeContent } from "@/types/content";

type HeroSectionProps = {
  content: HomeContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="heroSection">
      <div className="heroCopy">
        <div className="heroText">
          <p className="sectionEyebrow">{content.availability}</p>
          <h1>{content.intro}</h1>
          <p className="heroDescription">{content.description}</p>
        </div>
        <div className="heroActions">
          {content.primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.variant === "secondary" ? "secondaryButton" : "primaryButton"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
