import type { ReactNode } from "react";

import { navigationItems } from "@/content/site";
import { getVisibleNavigationItems } from "@/lib/navigation";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const items = getVisibleNavigationItems(navigationItems);

  return (
    <div className="siteFrame">
      <div className="pageGlow pageGlowLeft" />
      <div className="pageGlow pageGlowRight" />
      <SiteHeader items={items} />
      <main className="pageMain">{children}</main>
      <SiteFooter />
    </div>
  );
}
