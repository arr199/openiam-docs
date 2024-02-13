import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LeftNavbar } from "@/components/ui/leftNavbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abena Openiam docs",
  description: "openiam docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className) }>
      <Header></Header>
      <div className="flex">
      <LeftNavbar/>
        {children}
      </div>
      
      </body>
    </html>
  );
}

export function Header () {
  return (
    <header className="w-full flex justify-center p-4 border-b-2 bg-slate-800 text-white">
      <h1 className="font-bold text-3xl">Open Iam Documentation</h1>
    </header>
  )
}
