import type { HighlightItem } from "@/types/content";

type HighlightGridProps = {
  items: HighlightItem[];
};

export function HighlightGrid({ items }: HighlightGridProps) {
  return (
    <div className="highlightGrid">
      {items.map((item) => (
        <article key={item.title} className="highlightCard">
          <p className="sectionEyebrow">{item.eyebrow}</p>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
