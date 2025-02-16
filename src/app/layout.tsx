import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import ThemeProvider from "@/components/ui/Theme/ThemeProvider";
import {siteConfig} from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    '프론트엔드',
    '자바스크립트',
    '타입스크립트',
    '리액트',
    '넥스트',
    'frontend',
    'js',
    'javascript',
    'ts',
    'typescript',
    'react',
    'nextjs',
  ],
  authors: [
    {
      name: 'Jin',
      url: siteConfig.url,
    },
  ],
  creator: 'Jin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-dvh mb-10`}>
        <ThemeProvider>
          <Header />
          <main className={"max-w-[768px] mx-auto p-4"}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
