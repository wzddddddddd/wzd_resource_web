import type { HomeContent, NavigationItem, StandardPage } from "@/types/content";

export const navigationItems: NavigationItem[] = [
  { title: "首页", path: "/", visible: true, order: 1 },
  { title: "资源", path: "/resources", visible: true, order: 3 },
  { title: "关于我", path: "/about", visible: true, order: 2 },
  { title: "隐藏样例", path: "/hidden", visible: false, order: 99 },
];

export const homeContent: HomeContent = {
  availability: "个人站点 / 简历与精选资源",
  title: "用克制的排版，呈现真正重要的能力与作品。",
  intro: "你好，我正在把个人经历、核心简历和长期整理的高质量资源放进一个清爽、易访问的空间里。",
  description:
    "这个网站基于配置驱动结构搭建，后续可以持续追加新页面和新资源，而不需要改动核心布局。它既是对外展示窗口，也是一个可扩展的内容入口。",
  primaryLinks: [
    { label: "查看资源", href: "/resources", variant: "primary" },
    { label: "了解更多", href: "/about", variant: "secondary" },
    { label: "下载简历", href: "/downloads/resume.pdf", variant: "secondary" },
  ],
  highlights: [
    {
      eyebrow: "简历概览",
      title: "聚焦关键经历与优势",
      description: "首页只保留最有说服力的信息密度，让访客更快理解你是谁、你能做什么。",
    },
    {
      eyebrow: "资源体系",
      title: "站内下载与外链并存",
      description: "资源页通过统一数据结构渲染，既能放文件，也能放网盘、案例集或工具入口。",
    },
    {
      eyebrow: "持续扩展",
      title: "页面可按模板追加",
      description: "后续新增关于页、项目页、联系页时，可以复用同一套页面模板与导航配置。",
    },
  ],
};

export const standardPages: StandardPage[] = [
  {
    slug: "about",
    title: "关于我",
    intro: "这里预留给更完整的背景介绍、工作方式、项目理念或你想补充的长期价值主张。",
    sections: [
      {
        title: "工作方式",
        body: "我偏好把复杂问题拆成清晰模块，先梳理结构，再补充视觉和细节，从而让内容长期可维护。",
      },
      {
        title: "内容策略",
        body: "这个页面模板适合放个人经历、项目方法论、合作方式等相对稳定的内容，后续只需改配置即可扩展。",
      },
    ],
  },
];
