# 个人简历与资源展示站

一个基于 `Next.js 16` 的模块化个人站点骨架，适合放置：

- 个人简介与简历摘要
- 站内可下载资源
- 外部资源链接
- 后续扩展的标准展示页

## 开发命令

```bash
npm install
npm run dev
npm test
npm run lint
npm run build
```

## 当前页面

- `/`：首页
- `/resources`：资源页
- `/about`：标准展示页示例

## 目录结构

```text
src/
  app/                 路由页面
  components/          公共组件与页面模块
  content/             页面和资源数据
  lib/                 排序、分组、查找等纯函数
  types/               统一内容类型
public/
  downloads/           站内下载文件
```

## 如何新增资源

1. 把文件放进 `public/downloads/`
2. 在 `src/content/resources.ts` 追加一条资源数据

示例：

```ts
{
  title: "新的资源名称",
  description: "一句话描述这个资源的用途。",
  type: "download",
  url: "/downloads/new-file.pdf",
  category: "下载资源",
  order: 4,
  tag: "PDF",
}
```

外部链接资源示例：

```ts
{
  title: "外部资源",
  description: "跳转到网盘、文档或项目页。",
  type: "external",
  url: "https://example.com",
  category: "外部链接",
  order: 5,
}
```

## 如何新增标准页面

在 `src/content/site.ts` 的 `standardPages` 中增加一项：

```ts
{
  slug: "projects",
  title: "项目展示",
  intro: "这里可以放项目总览。",
  sections: [
    {
      title: "代表项目",
      body: "写项目简介、职责和成果。",
    },
  ],
}
```

如果希望它出现在导航里，再往 `navigationItems` 追加：

```ts
{ title: "项目", path: "/projects", visible: true, order: 4 }
```

## 首版占位文件

以下文件目前是占位文件，后续可直接替换成你的真实内容：

- `public/downloads/resume.pdf`
- `public/downloads/design-kit.pdf`

## 部署到 GitHub Pages

推荐流程：

1. 把项目推到 GitHub
2. 在 GitHub 仓库的 `Settings > Pages` 中确认使用 `GitHub Actions`
3. 推送到 `main` 后，工作流会自动测试、构建并发布静态站点
4. 部署完成后通过 GitHub Pages 地址访问

如果仓库名是 `username.github.io`，站点会直接部署在根路径。
如果仓库名是普通项目仓库，例如 `personal-resume-resources-site`，项目会自动使用对应仓库名作为路径前缀。

这个项目已经通过 `npm test`、`npm run lint` 和 `npm run build` 验证，可以直接用于 GitHub Pages 自动部署。
