import { describe, expect, it } from "vitest";

import { navigationItems, standardPages } from "@/content/site";
import { getStandardPageBySlug, getVisibleNavigationItems } from "@/lib/navigation";

describe("getVisibleNavigationItems", () => {
  it("returns only visible items sorted by order", () => {
    const result = getVisibleNavigationItems(navigationItems);

    expect(result.map((item) => item.path)).toEqual(["/", "/about", "/resources"]);
  });
});

describe("getStandardPageBySlug", () => {
  it("finds a configured standard page by its slug", () => {
    const page = getStandardPageBySlug("about", standardPages);

    expect(page).toMatchObject({
      slug: "about",
      title: "关于我",
    });
  });

  it("returns null when the slug does not exist", () => {
    expect(getStandardPageBySlug("missing-page", standardPages)).toBeNull();
  });
});
