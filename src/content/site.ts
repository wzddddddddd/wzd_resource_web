import type { HomeContent, NavigationItem, StandardPage } from "@/types/content";

export const navigationItems: NavigationItem[] = [
  { title: "首页", path: "/", visible: true, order: 1 },
  { title: "资源", path: "/resources", visible: true, order: 3 },
  { title: "关于我", path: "/about", visible: true, order: 2 },
  { title: "隐藏样例", path: "/hidden", visible: false, order: 99 },
];

export const homeContent: HomeContent = {
  availability: "嵌入式软件工程师求职 / 简历与项目资源",
  title: "聚焦嵌入式软件、RTOS 与图形界面开发。",
  intro: "你好，我是吴钟锭，河南理工大学自动化本科生，正在寻找嵌入式软件工程师岗位机会。",
  description:
    "我有 STM32、ESP32-S3、CH32 开发经验，熟悉 FreeRTOS、LVGL、常用外设驱动与软硬件联调，也做过基于 ESP32-S3 的 LVGL 触控手表毕业设计。",
  primaryLinks: [
    { label: "查看资源", href: "/resources", variant: "primary" },
    { label: "了解更多", href: "/about", variant: "secondary" },
    { label: "下载简历", href: "/downloads/resume.pdf", variant: "secondary" },
  ],
  highlights: [
    {
      eyebrow: "实习经历",
      title: "两段嵌入式软件实习",
      description: "在合肥磐研电子和深圳光速时代参与嵌入式代码编写、板级焊接、软硬件联调与 Git 协作开发。",
    },
    {
      eyebrow: "技术栈",
      title: "熟悉 MCU、RTOS 与 GUI",
      description: "覆盖 STM32、ESP32-S3、CH32、FreeRTOS、LVGL，以及 Keil、CubeMX、VS Code、GitLab 等常用工具链。",
    },
    {
      eyebrow: "项目经历",
      title: "做过完整毕业设计项目",
      description: "独立完成 ESP32-S3 触控手表项目，包含 UI、文件系统、媒体显示、时间同步、升级与低功耗方案。",
    },
  ],
};

export const standardPages: StandardPage[] = [
  {
    slug: "about",
    title: "关于我",
    intro: "我目前就读于河南理工大学自动化专业，求职方向是嵌入式软件工程师，关注 MCU 开发、RTOS、图形界面与设备联调。",
    sections: [
      {
        title: "教育与方向",
        body: "本科阶段主修 C 语言、嵌入式基础、电路分析、模电、数电和自动控制原理，希望在嵌入式软件方向持续深入发展。",
      },
      {
        title: "技能与实践",
        body: "我熟悉 C 语言、常见数据结构、指针与回调，了解 STM32 标准库与 HAL，能进行外设驱动、任务调度、界面开发、焊接调试和基础硬件联调。",
      },
      {
        title: "项目与协作",
        body: "我做过 ESP32-S3 触控手表毕业设计，也参与过 HX3506 运动相机 UI Bug 修复，能结合 Git、测试复现、样机验证和 AI 辅助工具一起推进问题解决。",
      },
    ],
  },
];
