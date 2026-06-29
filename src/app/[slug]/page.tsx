import { notFound } from "next/navigation";

import { StandardPageView } from "@/components/pages/standard-page";
import { standardPages } from "@/content/site";
import { getStandardPageBySlug } from "@/lib/navigation";

type StandardPageRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return standardPages.map((page) => ({ slug: page.slug }));
}

export default async function StandardPageRoute({ params }: StandardPageRouteProps) {
  const { slug } = await params;
  const page = getStandardPageBySlug(slug, standardPages);

  if (!page) {
    notFound();
  }

  return <StandardPageView page={page} />;
}
