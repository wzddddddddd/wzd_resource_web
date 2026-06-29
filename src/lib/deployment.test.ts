import { describe, expect, it } from "vitest";

import { getGitHubPagesBasePath } from "@/lib/deployment";

describe("getGitHubPagesBasePath", () => {
  it("returns an empty base path for user site repositories", () => {
    expect(getGitHubPagesBasePath("86177/86177.github.io", true)).toBe("");
  });

  it("returns the repository name as base path for project pages", () => {
    expect(getGitHubPagesBasePath("86177/personal-resume-resources-site", true)).toBe(
      "/personal-resume-resources-site",
    );
  });

  it("returns an empty string outside GitHub Actions", () => {
    expect(getGitHubPagesBasePath("86177/personal-resume-resources-site", false)).toBe("");
  });
});
