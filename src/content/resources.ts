import type { ResourceItem } from "@/types/content";

export const resources: ResourceItem[] = [
  {
    title: "吴钟锭 - 嵌入式软件简历",
    description: "当前最新的个人简历 PDF，适用于查看、转发和投递嵌入式软件岗位。",
    type: "download",
    url: "/downloads/resume.pdf",
    category: "简历",
    order: 1,
    tag: "PDF",
  },
  {
    title: "ESP32S3 触控手表项目源码",
    description: "毕业设计项目源码仓库，包含 LVGL 界面、SD 卡文件访问、媒体显示、时间同步与升级相关实现。",
    type: "external",
    url: "https://github.com/wzddddddddd/ESP32S3_watch_LVGL_WZD.git",
    category: "项目链接",
    order: 2,
    tag: "GitHub",
  },
  {
    title: "资源页占位示例",
    description: "这里保留一个外链示例位，后续你给我更多网盘、文档或项目链接时，可以继续往这里追加。",
    type: "external",
    url: "https://example.com/resources",
    category: "外部链接",
    order: 3,
    tag: "外链",
  },
];
