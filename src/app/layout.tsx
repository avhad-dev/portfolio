import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SiteChrome from "@/components/layout/SiteChrome";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Developer | Creative Engineering",
  description: "Portfolio of a software developer specializing in creative engineering and precise execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-[0.04]"></div>
          <SiteChrome />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
