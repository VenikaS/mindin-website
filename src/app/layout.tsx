import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrisisBanner from "@/components/CrisisBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mind'in | Therapy and Mental Wellness",
  description: "A calming, modern, and premium space for individual, couples, child, and family therapy. Find calm, understand yourself, heal, and grow.",
  keywords: ["therapy", "mental wellness", "counseling", "mind'in", "anxiety", "depression", "healing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-neutral-bg text-text-charcoal font-sans selection:bg-primary-light selection:text-text-navy"
        suppressHydrationWarning
      >
        <CrisisBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
