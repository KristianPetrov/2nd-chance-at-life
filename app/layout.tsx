import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "2nd Chance at Life | Veteran Recovery & Support",
  description:
    "Helping veterans move beyond homelessness through stable housing, sober support, long-term recovery, and a path to sustainable independence.",
  keywords: [
    "veteran support",
    "veteran homelessness",
    "veteran recovery",
    "sober living",
    "2nd Chance at Life",
  ],
  openGraph: {
    title: "2nd Chance at Life",
    description:
      "Stable, sober, compassionate support helping veterans move from homelessness to lasting independence.",
    type: "website",
    siteName: "2nd Chance at Life",
  },
  twitter: {
    card: "summary_large_image",
    title: "2nd Chance at Life",
    description:
      "Stable, sober, compassionate support helping veterans move from homelessness to lasting independence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
