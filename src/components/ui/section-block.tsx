import type { SectionProps } from "@/types/content";

export function SectionBlock({ title, eyebrow, description, children }: SectionProps) {
  return (
    <section className="sectionBlock">
      <div className="sectionCopy">
        {eyebrow ? <p className="sectionEyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="sectionDescription">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
