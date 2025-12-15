import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InnoSite Tech Solutions | Web, Mobile & AI Development Agency",
  description: "InnoSite Tech Solutions provides modern web development, mobile apps, cloud solutions, and AI automation to help businesses scale efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200`}>
        {children}
      </body>
    </html>
  );
}
