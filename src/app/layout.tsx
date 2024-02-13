import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LeftNavbar } from "@/components/leftNavbar";
import { ThemeProvider } from "@/providers/themeProvider";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abena Openiam docs",
  description: "openiam docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header></Header>
          <div className="flex">
            <LeftNavbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
