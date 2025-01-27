import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import ThemeProvider from "@/components/ui/Theme/ThemeProvider";

export const metadata: Metadata = {
  title: "유병진 | Jin",
  description: "Dev 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-dvh dark:bg-foreground dark:text-white mb-10`}
      >
        <ThemeProvider>
          <Header />
          <main className={"max-w-[768px] mx-auto p-4"}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
