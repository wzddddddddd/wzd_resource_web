import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ResourceCard } from "@/components/resources/resource-card";
import type { ResourceItem } from "@/types/content";

describe("ResourceCard", () => {
  it("renders download resources with a direct-download action", () => {
    const resource: ResourceItem = {
      title: "个人简历 PDF",
      description: "适合快速查看和下载的简历版本。",
      type: "download",
      url: "/downloads/resume.pdf",
      category: "简历",
      order: 1,
      tag: "PDF",
    };

    render(<ResourceCard resource={resource} />);

    expect(screen.getByRole("link", { name: /下载资源/i })).toHaveAttribute("href", "/downloads/resume.pdf");
    expect(screen.getByText("站内下载")).toBeInTheDocument();
  });

  it("renders external resources with a visit action", () => {
    const resource: ResourceItem = {
      title: "灵感参考库",
      description: "整理好的外部案例与收藏入口。",
      type: "external",
      url: "https://example.com/resources",
      category: "外部链接",
      order: 3,
    };

    render(<ResourceCard resource={resource} />);

    expect(screen.getByRole("link", { name: /访问链接/i })).toHaveAttribute("href", "https://example.com/resources");
    expect(screen.getByText("外部链接")).toBeInTheDocument();
  });
});
