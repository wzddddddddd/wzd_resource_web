import type { NextConfig } from "next";

import { getGitHubPagesBasePath } from "@/lib/deployment";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY;
const basePath = getGitHubPagesBasePath(repository, isGitHubActions);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
