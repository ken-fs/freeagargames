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
    default: "Free Agar Games - Play Agar.io Online Games",
    template: "%s | Free Agar Games"
  },
  description: "Play the best collection of free Agar.io-style games online. Eat, grow, and dominate in multiplayer cell games. No downloads required!",
  keywords: ["agar.io", "agario", "agar games", "free games", "online games", "multiplayer games", "cell games", "browser games"],
  authors: [{ name: "Free Agar Games" }],
  creator: "Free Agar Games",
  publisher: "Free Agar Games",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freeagargames.com",
    siteName: "Free Agar Games",
    title: "Free Agar Games - Play Agar.io Online Games",
    description: "Play the best collection of free Agar.io-style games online. Eat, grow, and dominate in multiplayer cell games.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Agar Games"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Agar Games - Play Agar.io Online Games",
    description: "Play the best collection of free Agar.io-style games online. Eat, grow, and dominate in multiplayer cell games.",
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
