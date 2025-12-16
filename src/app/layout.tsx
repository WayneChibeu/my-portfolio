import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SocialSidebar from "@/components/SocialSidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayne Chibeu | Full-Stack Developer",
  description: "Portfolio of Wayne Chibeu, a Full-Stack Developer and Indie Hacker building accessible web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-navy selection:bg-teal-tint selection:text-teal`}
      >
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}
