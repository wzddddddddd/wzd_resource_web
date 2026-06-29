import type { StandardPage } from "@/types/content";

type StandardPageProps = {
  page: StandardPage;
};

export function StandardPageView({ page }: StandardPageProps) {
  return (
    <section className="standardPage">
      <div className="pageIntro">
        <p className="sectionEyebrow">标准展示页</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>
      <div className="standardSections">
        {page.sections.map((section) => (
          <article key={section.title} className="standardCard">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
