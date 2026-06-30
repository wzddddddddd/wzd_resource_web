import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroSection } from "@/components/home/hero-section";
import { homeContent } from "@/content/site";

describe("HeroSection", () => {
  it("uses the intro sentence as the main heading and omits the old large title", () => {
    render(<HeroSection content={homeContent} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "你好，我是吴钟锭，河南理工大学自动化本科生，正在寻找嵌入式软件工程师岗位机会。",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText("聚焦嵌入式软件、RTOS 与图形界面开发。")).not.toBeInTheDocument();
  });
});
