import type { ReactNode } from "react";

export type NavigationItem = {
  title: string;
  path: string;
  visible: boolean;
  order: number;
};

export type HeroLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HighlightItem = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeContent = {
  availability: string;
  title: string;
  intro: string;
  description: string;
  primaryLinks: HeroLink[];
  highlights: HighlightItem[];
};

export type StandardPageSection = {
  title: string;
  body: string;
};

export type StandardPage = {
  slug: string;
  title: string;
  intro: string;
  sections: StandardPageSection[];
};

export type ResourceType = "download" | "external";

export type ResourceItem = {
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  category: string;
  order: number;
  tag?: string;
  cover?: string;
};

export type ResourceGroup = {
  category: string;
  items: ResourceItem[];
};

export type SectionProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
};
