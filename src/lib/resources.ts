import type { ResourceGroup, ResourceItem } from "@/types/content";

export function getOrderedResources(items: ResourceItem[]) {
  return [...items].sort((left, right) => left.order - right.order);
}

export function groupResourcesByCategory(items: ResourceItem[]): ResourceGroup[] {
  const groups = new Map<string, ResourceItem[]>();

  for (const item of getOrderedResources(items)) {
    const list = groups.get(item.category) ?? [];
    list.push(item);
    groups.set(item.category, list);
  }

  return Array.from(groups.entries()).map(([category, groupedItems]) => ({
    category,
    items: groupedItems,
  }));
}
