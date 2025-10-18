import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Play Agar.io Online Free - Eat, Grow, and Dominate the Arena!",
    template: "%s | Free Agar Games"
  },
  description: "Play Agar.io online for free! Control your cell, eat smaller blobs, and survive in the multiplayer arena. No download needed — just play directly in your browser!",
  keywords: ["Agar.io", "Play Agar.io", "Agar.io Online", "Free IO Games", "Multiplayer Browser Games", "agario", "agar games", "cell games", "blob game"],
  authors: [{ name: "Free Agar Games" }],
  creator: "Free Agar Games",
  publisher: "Free Agar Games",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freeagargames.com",
    siteName: "Free Agar Games",
    title: "Play Agar.io Online Free",
    description: "Join millions of players in Agar.io — the legendary cell-eating multiplayer game. Free to play, no download needed!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Play Agar.io Online Free"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Agar.io Online Free",
    description: "Join millions of players in Agar.io — the legendary cell-eating multiplayer game. Free to play, no download needed!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
