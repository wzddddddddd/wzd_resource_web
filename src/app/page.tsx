import { HighlightGrid } from "@/components/home/highlight-grid";
import { HeroSection } from "@/components/home/hero-section";
import { SectionBlock } from "@/components/ui/section-block";
import { homeContent } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HeroSection content={homeContent} />
      <SectionBlock
        title="用模块化内容，持续扩展这个网站"
        eyebrow="结构优势"
        description="首版先放简历和资源，后续可以沿着同一套结构继续补充更多页面与内容。"
      >
        <HighlightGrid items={homeContent.highlights} />
      </SectionBlock>
    </>
  );
}
