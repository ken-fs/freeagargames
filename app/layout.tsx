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
  metadataBase: new URL('https://freeagargames.live'),
  title: {
    default: "Play Agar.io Online Free 2025 - Unblocked IO Games | Free Agar Games",
    template: "%s | Free Agar Games - Play IO Games Online"
  },
  description: "★ Play Agar.io online FREE in 2025! 🎮 No download, unblocked multiplayer cell game. Eat, grow, dominate! Join 100M+ players in the #1 IO game arena. Play now in your browser!",
  keywords: [
    // Primary keywords
    "Agar.io", "Play Agar.io", "Agar.io online", "Agar.io free",
    // Long-tail keywords
    "Agar.io unblocked", "Agar.io game", "Agar.io 2025", "play Agar.io online free",
    // IO games keywords
    "IO games", "free IO games", "IO games unblocked", "multiplayer IO games",
    // Game mechanics
    "cell eating game", "blob game online", "multiplayer browser games",
    // Competitor keywords
    "agario", "agar games", "paper.io", "slither.io alternative",
    // Location-based
    "Agar.io USA", "Agar.io online free no download",
    // Action keywords
    "play now", "free online games", "browser games 2025"
  ],
  authors: [{ name: "Free Agar Games Team" }],
  creator: "Free Agar Games",
  publisher: "Free Agar Games",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freeagargames.live",
    siteName: "Free Agar Games - #1 IO Games Platform",
    title: "🎮 Play Agar.io Online FREE 2025 - Unblocked Multiplayer IO Game",
    description: "★★★★★ Join 100M+ players! Eat cells, grow bigger, dominate the arena. Play Agar.io FREE - No download, unblocked, instant multiplayer fun!",
    images: [
      {
        url: "/agarpaper.io.jpg",
        width: 1200,
        height: 630,
        alt: "Play Agar.io Online Free - Multiplayer IO Game 2025",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@FreeAgarGames",
    creator: "@FreeAgarGames",
    title: "🎮 Play Agar.io Online FREE - Unblocked IO Games 2025",
    description: "★★★★★ 100M+ players! Play Agar.io FREE in your browser. No download needed. Eat, grow, dominate! #IOGames #AgarIO",
    images: ["/agarpaper.io.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://freeagargames.live",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: 'games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://freeagargames.live/#website",
        "url": "https://freeagargames.live",
        "name": "Free Agar Games",
        "description": "Play Agar.io and other IO games online for free. No download needed, play directly in your browser!",
        "publisher": {
          "@type": "Organization",
          "name": "Free Agar Games",
          "logo": {
            "@type": "ImageObject",
            "url": "https://freeagargames.live/agar.png"
          }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://freeagargames.live/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "VideoGame",
        "@id": "https://freeagargames.live/#game",
        "name": "Agar Paper.io",
        "url": "https://freeagargames.live",
        "description": "Play Agar.io online for free! Control your cell, eat smaller blobs, and survive in the multiplayer arena.",
        "image": "https://freeagargames.live/agarpaper.io.jpg",
        "genre": ["IO Games", "Multiplayer", "Casual Games", "Arena Games"],
        "gamePlatform": ["Web Browser", "Online"],
        "author": {
          "@type": "Organization",
          "name": "Free Agar Games"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "278"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeagargames.live/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://freeagargames.live"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hot Games",
            "item": "https://freeagargames.live/#games"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Agar Paper.io"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeagargames.live/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Agar.io free to play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Agar.io is 100% free to play. You can enjoy the full multiplayer experience without any payment. Just open your browser and start playing instantly."
            }
          },
          {
            "@type": "Question",
            "name": "Can I play Agar.io unblocked at school?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our platform provides access to Agar.io-style games that work in most educational environments. Since the game runs directly in your browser with no downloads, it's accessible on school computers and Chromebooks."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to download Agar.io to play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No download required! Agar.io is a browser-based game. Simply visit our website and click the play button to start your game immediately. It works on desktop, laptop, tablet, and mobile devices."
            }
          },
          {
            "@type": "Question",
            "name": "What are the controls for Agar.io?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use your mouse to move your cell. Press SPACEBAR to split your cell and W to eject mass. These simple controls make the game easy to learn but challenging to master."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get better at Agar.io?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Practice is key! Start by staying small to move quickly, use viruses as shields, split strategically to catch opponents, and watch the leaderboard to avoid big players."
            }
          },
          {
            "@type": "Question",
            "name": "Can I play Agar.io on mobile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Agar.io works on mobile browsers. Visit our website on your smartphone or tablet, and you can play using touch controls. The game automatically adapts to your screen size."
            }
          },
          {
            "@type": "Question",
            "name": "What are IO games?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IO games are multiplayer browser games with simple mechanics and competitive gameplay. Agar.io pioneered this genre in 2015. Other popular IO games include Slither.io, Diep.io, and Paper.io."
            }
          },
          {
            "@type": "Question",
            "name": "Is Agar.io safe for kids?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Agar.io is safe for players of all ages. The game contains no violence, inappropriate content, or chat features. It's a family-friendly competitive game focused purely on strategy and skill."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://freeagargames.live" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
