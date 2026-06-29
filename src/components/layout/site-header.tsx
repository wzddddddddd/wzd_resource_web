import Link from "next/link";

import type { NavigationItem } from "@/types/content";

type SiteHeaderProps = {
  items: NavigationItem[];
};

export function SiteHeader({ items }: SiteHeaderProps) {
  return (
    <header className="siteHeader">
      <Link href="/" className="brandMark">
        Personal Archive
      </Link>
      <nav className="mainNav" aria-label="主导航">
        {items.map((item) => (
          <Link key={item.path} href={item.path}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
