import { describe, expect, it } from "vitest";

import { resources } from "@/content/resources";
import { getOrderedResources, groupResourcesByCategory } from "@/lib/resources";

describe("getOrderedResources", () => {
  it("sorts resources by order", () => {
    const result = getOrderedResources(resources);

    expect(result.map((item) => item.title)).toEqual(["个人简历 PDF", "产品设计资料包", "灵感参考库"]);
  });
});

describe("groupResourcesByCategory", () => {
  it("creates ordered category groups from resources", () => {
    const result = groupResourcesByCategory(resources);

    expect(result.map((group) => group.category)).toEqual(["简历", "下载资源", "外部链接"]);
    expect(result[0]?.items[0]?.type).toBe("download");
    expect(result[2]?.items[0]?.type).toBe("external");
  });
});
