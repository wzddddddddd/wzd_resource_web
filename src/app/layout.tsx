import type { Metadata } from "next";
import { Manrope, Noto_Serif_SC } from "next/font/google";

import "./globals.css";

import { SiteShell } from "@/components/layout/site-shell";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "个人简历与资源展示站",
  description: "一个模块化、可扩展的个人简历与资源展示网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${sans.variable} ${serif.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
