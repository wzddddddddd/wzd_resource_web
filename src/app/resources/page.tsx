import { ResourceGroups } from "@/components/resources/resource-groups";
import { SectionBlock } from "@/components/ui/section-block";
import { resources } from "@/content/resources";
import { groupResourcesByCategory } from "@/lib/resources";

export default function ResourcesPage() {
  const groups = groupResourcesByCategory(resources);

  return (
    <SectionBlock
      title="精选资源"
      eyebrow="Resources"
      description="这里统一展示站内可下载资源和外部链接资源。后续新增内容时，只需补一条资源配置。"
    >
      <ResourceGroups groups={groups} />
    </SectionBlock>
  );
}
