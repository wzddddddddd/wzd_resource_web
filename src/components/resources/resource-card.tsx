import Link from "next/link";

import type { ResourceItem } from "@/types/content";

type ResourceCardProps = {
  resource: ResourceItem;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const isDownload = resource.type === "download";
  const actionLabel = isDownload ? "下载资源" : "访问链接";
  const metaLabel = isDownload ? "站内下载" : "外部链接";

  return (
    <article className="resourceCard">
      <div className="resourceMeta">
        <span>{metaLabel}</span>
        {resource.tag ? <span>{resource.tag}</span> : null}
      </div>
      <div className="resourceBody">
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
      </div>
      <Link
        href={resource.url}
        className="resourceAction"
        target={isDownload ? undefined : "_blank"}
        rel={isDownload ? undefined : "noreferrer"}
      >
        {actionLabel}
      </Link>
    </article>
  );
}
