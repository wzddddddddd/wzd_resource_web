import type { ResourceItem } from "@/types/content";

export const resources: ResourceItem[] = [
  {
    title: "个人简历 PDF",
    description: "适合快速查看和下载的简历版本，适用于投递或转发。",
    type: "download",
    url: "/downloads/resume.pdf",
    category: "简历",
    order: 1,
    tag: "PDF",
  },
  {
    title: "产品设计资料包",
    description: "一个站内下载示例，后续可以替换成你的压缩包、案例合集或资料包。",
    type: "download",
    url: "/downloads/design-kit.pdf",
    category: "下载资源",
    order: 2,
    tag: "下载",
  },
  {
    title: "灵感参考库",
    description: "一个外部链接示例，适合放网盘、飞书文档、Notion 集合或精选链接页。",
    type: "external",
    url: "https://example.com/resources",
    category: "外部链接",
    order: 3,
    tag: "外链",
  },
];
