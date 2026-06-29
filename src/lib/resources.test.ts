import { describe, expect, it } from "vitest";

import { resources } from "@/content/resources";
import { getOrderedResources, groupResourcesByCategory } from "@/lib/resources";

describe("getOrderedResources", () => {
  it("sorts resources by order", () => {
    const result = getOrderedResources(resources);

    expect(result.map((item) => item.title)).toEqual([
      "吴钟锭 - 嵌入式软件简历",
      "ESP32S3 触控手表项目源码",
      "资源页占位示例",
    ]);
  });
});

describe("groupResourcesByCategory", () => {
  it("creates ordered category groups from resources", () => {
    const result = groupResourcesByCategory(resources);

    expect(result.map((group) => group.category)).toEqual(["简历", "项目链接", "外部链接"]);
    expect(result[0]?.items[0]?.type).toBe("download");
    expect(result[2]?.items[0]?.type).toBe("external");
  });
});
