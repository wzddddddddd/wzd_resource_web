import type { ResourceGroup } from "@/types/content";

import { ResourceCard } from "./resource-card";

type ResourceGroupsProps = {
  groups: ResourceGroup[];
};

export function ResourceGroups({ groups }: ResourceGroupsProps) {
  return (
    <div className="resourceGroups">
      {groups.map((group) => (
        <section key={group.category} className="resourceGroup">
          <div className="resourceGroupHeading">
            <p className="sectionEyebrow">资源分类</p>
            <h3>{group.category}</h3>
          </div>
          <div className="resourceGrid">
            {group.items.map((resource) => (
              <ResourceCard key={`${group.category}-${resource.title}`} resource={resource} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
