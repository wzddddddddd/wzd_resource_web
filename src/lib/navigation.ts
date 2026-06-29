import type { NavigationItem, StandardPage } from "@/types/content";

export function getVisibleNavigationItems(items: NavigationItem[]) {
  return [...items]
    .filter((item) => item.visible)
    .sort((left, right) => left.order - right.order);
}

export function getStandardPageBySlug(slug: string, pages: StandardPage[]) {
  return pages.find((page) => page.slug === slug) ?? null;
}
