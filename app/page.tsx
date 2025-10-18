"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Rating System State
  const [averageRating, setAverageRating] = useState(4.5);
  const [totalVotes, setTotalVotes] = useState(278);
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  // Load ratings from localStorage on mount
  useEffect(() => {
    const savedRatings = localStorage.getItem("game-ratings");
    if (savedRatings) {
      const ratings = JSON.parse(savedRatings);
      setAverageRating(ratings.average || 4.5);
      setTotalVotes(ratings.total || 278);
      setUserRating(ratings.userRating || 0);
    }
  }, []);

  // Handle user rating
  const handleRating = (rating: number) => {
    if (userRating > 0) {
      // User already voted, update their rating
      const currentTotal = averageRating * totalVotes;
      const newTotal = currentTotal - userRating + rating;
      const newAverage = newTotal / totalVotes;

      setAverageRating(Number(newAverage.toFixed(1)));
      setUserRating(rating);

      localStorage.setItem(
        "game-ratings",
        JSON.stringify({
          average: Number(newAverage.toFixed(1)),
          total: totalVotes,
          userRating: rating,
        })
      );
    } else {
      // First time voting
      const currentTotal = averageRating * totalVotes;
      const newTotal = currentTotal + rating;
      const newTotalVotes = totalVotes + 1;
      const newAverage = newTotal / newTotalVotes;

      setAverageRating(Number(newAverage.toFixed(1)));
      setTotalVotes(newTotalVotes);
      setUserRating(rating);

      localStorage.setItem(
        "game-ratings",
        JSON.stringify({
          average: Number(newAverage.toFixed(1)),
          total: newTotalVotes,
          userRating: rating,
        })
      );
    }
  };
  const newGames = [
    {
      name: "Cookie Clicker",
      image: "🍪",
      rating: 5,
      bgColor: "from-amber-500/30 to-orange-500/30",
    },
    {
      name: "BloodMoney",
      image: "💰",
      rating: 5,
      bgColor: "from-purple-500/30 to-pink-500/30",
    },
    {
      name: "Ragdoll Playground",
      image: "🎯",
      rating: 5,
      bgColor: "from-red-500/30 to-rose-500/30",
    },
    {
      name: "Shadow Milk [Fixed Pets]",
      image: "🧫",
      rating: 4,
      bgColor: "from-blue-500/30 to-cyan-500/30",
    },
    {
      name: "Subway Moto",
      image: "🏍️",
      rating: 5,
      bgColor: "from-yellow-500/30 to-amber-500/30",
    },
    {
      name: "Bloodmoney 2",
      image: "💸",
      rating: 5,
      bgColor: "from-fuchsia-500/30 to-purple-500/30",
    },
    {
      name: "Labubu Clicker",
      image: "🎮",
      rating: 5,
      bgColor: "from-indigo-500/30 to-blue-500/30",
    },
    {
      name: "Golden Cheese Cookie!",
      image: "🧀",
      rating: 4.9,
      bgColor: "from-orange-500/30 to-yellow-500/30",
    },
    {
      name: "Galaxy Clicker",
      image: "🌌",
      rating: 5,
      bgColor: "from-purple-500/30 to-violet-500/30",
    },
    {
      name: "Shadow Milk Cookie",
      image: "🍪",
      rating: 5,
      bgColor: "from-slate-500/30 to-gray-500/30",
    },
    {
      name: "Chicken Flip",
      image: "🐔",
      rating: 5,
      bgColor: "from-green-500/30 to-emerald-500/30",
    },
    {
      name: "Silent Salt",
      image: "🧂",
      rating: 4.5,
      bgColor: "from-purple-500/30 to-indigo-500/30",
    },
    {
      name: "Bunny Farm",
      image: "🐰",
      rating: 5,
      bgColor: "from-pink-500/30 to-rose-500/30",
    },
    {
      name: "Monkey Mart",
      image: "🐵",
      rating: 5,
      bgColor: "from-cyan-500/30 to-teal-500/30",
    },
    {
      name: "Escape Bear",
      image: "🐻",
      rating: 5,
      bgColor: "from-lime-500/30 to-green-500/30",
    },
    {
      name: "Eternal Sugar",
      image: "🍬",
      rating: 4.8,
      bgColor: "from-violet-500/30 to-purple-500/30",
    },
  ];

  const featuredGames = [
    {
      name: "Classic Agar.io",
      desc: "Original multiplayer",
      image: "🧫",
      rating: 4.8,
      bgColor: "from-blue-500/30 to-cyan-500/30",
    },
    {
      name: "Agar.io Teams",
      desc: "Team strategy",
      image: "🎯",
      rating: 4.6,
      bgColor: "from-purple-500/30 to-pink-500/30",
    },
    {
      name: "Agar.io FFA",
      desc: "Free for all",
      image: "⚔️",
      rating: 4.9,
      bgColor: "from-orange-500/30 to-red-500/30",
    },
    {
      name: "Agar.io Experimental",
      desc: "New features",
      image: "🔬",
      rating: 4.7,
      bgColor: "from-green-500/30 to-emerald-500/30",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <Image
                src="/agar.png"
                alt="Agar Games Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                Free Agar Games
              </span>
            </Link>

            {/* Card-style Navigation */}
            <nav className="flex gap-3 overflow-x-auto flex-1">
              <Link
                href="#play"
                className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 border border-primary/30 rounded-xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔥</span>
                  <span className="font-semibold text-primary">Hot Games</span>
                </div>
              </Link>

              <Link
                href="#new-games"
                className="flex-shrink-0 bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary/30 hover:to-secondary/20 border border-secondary/30 rounded-xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎮</span>
                  <span className="font-semibold text-secondary">
                    New Games
                  </span>
                </div>
              </Link>

              <Link
                href="#tips"
                className="flex-shrink-0 bg-gradient-to-br from-accent/20 to-accent/10 hover:from-accent/30 hover:to-accent/20 border border-accent/30 rounded-xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  <span className="font-semibold text-accent">
                    Casual Games
                  </span>
                </div>
              </Link>

              <Link
                href="#scratch"
                className="flex-shrink-0 bg-gradient-to-br from-green-500/20 to-green-500/10 hover:from-green-500/30 hover:to-green-500/20 border border-green-500/30 rounded-xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">📦</span>
                  <span className="font-semibold text-green-400">
                    Scratch Games
                  </span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-background/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-base">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="#games"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Hot Games
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-semibold">Agar</span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* 2-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {/* Game Info Header */}
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10 flex-shrink-0">
                  <Image
                    src="/agarpaper.io.jpg"
                    alt="Agar Paper.io"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h1 className="text-3xl md:text-4xl font-bold">
                      Agar Paper.io
                    </h1>
                    <span className="bg-muted/50 text-foreground px-3 py-1 rounded-full text-sm font-semibold border border-border/50">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <span>⭐</span>
                      <span className="font-semibold">{averageRating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-3 py-1 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer">
                      IO Games
                    </span>
                    <span className="px-3 py-1 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer">
                      Multiplayer
                    </span>
                    <span className="px-3 py-1 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer">
                      Casual Games
                    </span>
                    <span className="px-3 py-1 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer">
                      Arena Games
                    </span>
                    <span className="px-3 py-1 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer">
                      Trending
                    </span>
                  </div>
                </div>
              </div>

              {/* Game Embed Section */}
              <section
                id="play"
                className="bg-card rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 relative group"
              >
                <div className="aspect-video w-full bg-muted/30 relative">
                  <iframe
                    src="https://iogames.onl/agarpaperio.embed"
                    className="w-full h-full"
                    title="Play Agar Paper.io Online Free"
                    allowFullScreen
                    loading="eager"
                    id="game-iframe"
                  />
                  {/* Fullscreen Button */}
                  <button
                    onClick={() => {
                      const iframe = document.getElementById("game-iframe");
                      if (iframe) {
                        if (iframe.requestFullscreen) {
                          iframe.requestFullscreen();
                        }
                      }
                    }}
                    className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg z-10"
                    title="Fullscreen"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </button>
                </div>
              </section>

              {/* Hero Content */}
              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text ">
                  🧫 Play Agar.io Online — Free Multiplayer Blob Game
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Welcome to{" "}
                    <strong className="text-primary">Free Agar Games</strong>,
                    your go-to hub for the original{" "}
                    <strong className="text-foreground">
                      Agar.io online experience
                    </strong>
                    .
                  </p>
                  <p>
                    Join millions of players worldwide in this fast-paced{" "}
                    <strong className="text-foreground">
                      multiplayer cell-eating game
                    </strong>
                    . Grow your blob by consuming smaller cells, avoid being
                    eaten by bigger players, and{" "}
                    <strong className="text-primary">
                      dominate the leaderboard
                    </strong>
                    !
                  </p>
                </div>
              </section>

              {/* What Is Agar.io Section */}
              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎮</span>
                  <span>What Is Agar.io?</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong className="text-foreground">Agar.io</strong> is one of
                  the most popular{" "}
                  <strong className="text-foreground">
                    .io multiplayer games
                  </strong>{" "}
                  ever created. You control a small blob in a petri dish — your
                  goal is simple:{" "}
                  <strong className="text-primary">eat to grow</strong>. But
                  remember,{" "}
                  <strong className="text-foreground">
                    the bigger you get, the slower you move
                  </strong>
                  , and that&apos;s when strategy matters!
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      emoji: "🟣",
                      title: "Eat smaller blobs to grow in size",
                      desc: "Consume cells smaller than you to increase your mass and climb the leaderboard.",
                      color: "primary",
                    },
                    {
                      emoji: "🟢",
                      title: "Avoid larger cells — or you'll be eaten",
                      desc: "Stay alert! Bigger players are hunting you. Use your speed to escape danger.",
                      color: "secondary",
                    },
                    {
                      emoji: "🔵",
                      title: "Split your blob to chase and trap enemies",
                      desc: "Master the split mechanic to catch fast opponents or escape tight situations.",
                      color: "accent",
                    },
                    {
                      emoji: "🔴",
                      title: "Team up or play solo to rule the arena",
                      desc: "Choose your strategy: dominate alone or coordinate with teammates for victory.",
                      color: "primary",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`bg-gradient-to-br from-${item.color}/10 to-${item.color}/5 border border-${item.color}/30 rounded-xl p-5 hover:border-${item.color}/50 transition-all hover:shadow-lg hover:shadow-${item.color}/20`}
                    >
                      <div className="text-3xl mb-2">{item.emoji}</div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* No Download Section */}
              <section className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  🚀 Play Free, No Download Required
                </h2>
                <p className="text-center text-muted-foreground leading-relaxed">
                  Just{" "}
                  <strong className="text-primary">
                    click and play instantly
                  </strong>{" "}
                  in your browser — no signup, no installation. Whether
                  you&apos;re on a computer, tablet, or Chromebook, Agar.io runs
                  smoothly anywhere.
                </p>
              </section>

              {/* Tips & Tricks Section */}
              <section
                id="tips"
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🧠</span>
                  <span>Tips & Tricks for Beginners</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      num: "1",
                      title: "Stay small at first",
                      desc: "Use your speed advantage to dodge danger and collect easy mass.",
                    },
                    {
                      num: "2",
                      title: "Hide in virus clusters",
                      desc: "Viruses split large players. Use them as shields to avoid predators.",
                    },
                    {
                      num: "3",
                      title: "Split smartly",
                      desc: "Chasing too aggressively can backfire. Calculate before you split.",
                    },
                    {
                      num: "4",
                      title: "Watch the leaderboard",
                      desc: "Track the top predators to avoid dangerous areas of the map.",
                    },
                  ].map((tip) => (
                    <div
                      key={tip.num}
                      className="bg-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent">
                          {tip.num}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">
                            {tip.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {tip.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground">
                    Looking for more? Read our full{" "}
                    <Link
                      href="#"
                      className="text-primary hover:underline font-semibold"
                    >
                      Agar.io Strategy Guide
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Why Popular Section */}
              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🌍</span>
                  <span>Why Agar.io Is Still Popular in 2025</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      icon: "✨",
                      title: "Simple yet addictive mechanics",
                      desc: "Easy to learn, hard to master",
                    },
                    {
                      icon: "⚡",
                      title: "Quick matches and real-time multiplayer",
                      desc: "Jump in and out anytime",
                    },
                    {
                      icon: "📱",
                      title: "Cross-platform accessibility",
                      desc: "Play on any device, anywhere",
                    },
                    {
                      icon: "🌎",
                      title: "Thriving community worldwide",
                      desc: "Millions of active players daily",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-muted-foreground mt-6 leading-relaxed">
                  Agar.io defined the{" "}
                  <strong className="text-primary">&quot;.io game&quot;</strong>{" "}
                  genre and continues to inspire modern multiplayer web games
                  like <strong>Slither.io</strong>, <strong>Diep.io</strong>,
                  and <strong>Paper.io</strong>.
                </p>
              </section>

              {/* New Games Section */}
              <section
                id="new-games"
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <span className="text-3xl">🎮</span>
                    <span>New Games</span>
                  </h2>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 border border-border/50 flex items-center justify-center transition-all hover:shadow-lg">
                      ←
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 border border-border/50 flex items-center justify-center transition-all hover:shadow-lg">
                      →
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {newGames.map((game) => (
                    <Link
                      key={game.name}
                      href="#"
                      className="group bg-muted/30 border border-border/50 rounded-xl overflow-hidden hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all transform hover:scale-105"
                    >
                      <div
                        className={`aspect-video bg-gradient-to-br ${game.bgColor} flex items-center justify-center border-b border-border/50`}
                      >
                        <div className="text-5xl group-hover:scale-110 transition-transform">
                          {game.image}
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-sm mb-2 group-hover:text-orange-500 transition-colors line-clamp-1">
                          {game.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <span className="text-primary text-sm">⭐</span>
                          <span className="text-sm font-semibold">
                            {game.rating}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQ Section - SEO Goldmine! */}
              <section
                id="faq"
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">❓</span>
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Is Agar.io free to play?",
                      a: "Yes! Agar.io is 100% free to play. You can enjoy the full multiplayer experience without any payment. Just open your browser and start playing instantly."
                    },
                    {
                      q: "Can I play Agar.io unblocked at school?",
                      a: "Our platform provides access to Agar.io-style games that work in most educational environments. Since the game runs directly in your browser with no downloads, it's accessible on school computers and Chromebooks."
                    },
                    {
                      q: "Do I need to download Agar.io to play?",
                      a: "No download required! Agar.io is a browser-based game. Simply visit our website and click the play button to start your game immediately. It works on desktop, laptop, tablet, and mobile devices."
                    },
                    {
                      q: "What are the controls for Agar.io?",
                      a: "Use your mouse to move your cell. Press SPACEBAR to split your cell and W to eject mass. These simple controls make the game easy to learn but challenging to master."
                    },
                    {
                      q: "How do I get better at Agar.io?",
                      a: "Practice is key! Start by staying small to move quickly, use viruses as shields, split strategically to catch opponents, and watch the leaderboard to avoid big players. Check our Tips & Tricks section above for more strategies."
                    },
                    {
                      q: "Can I play Agar.io on mobile?",
                      a: "Yes! Agar.io works on mobile browsers. Visit our website on your smartphone or tablet, and you can play using touch controls. The game automatically adapts to your screen size."
                    },
                    {
                      q: "What are IO games?",
                      a: "IO games are multiplayer browser games with simple mechanics and competitive gameplay. Agar.io pioneered this genre in 2015. Other popular IO games include Slither.io, Diep.io, and Paper.io."
                    },
                    {
                      q: "Is Agar.io safe for kids?",
                      a: "Yes, Agar.io is safe for players of all ages. The game contains no violence, inappropriate content, or chat features. It's a family-friendly competitive game focused purely on strategy and skill."
                    }
                  ].map((faq, i) => (
                    <details
                      key={i}
                      className="bg-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/50 transition-all group"
                    >
                      <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between group-hover:text-primary transition-colors">
                        {faq.q}
                        <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="mt-4 text-muted-foreground leading-relaxed pl-1">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 text-center shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  🏆 Join the Arena — Eat or Be Eaten
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  Ready to prove your skill? Play{" "}
                  <strong className="text-primary">Agar.io online free</strong>,
                  compete with players around the world, and climb the global
                  leaderboard.
                </p>
                <button className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                  👉 Play Agar.io Now!
                </button>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:w-80 space-y-6">
              {/* Rating Card */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 text-center shadow-lg">
                <div className="text-6xl font-bold mb-3 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {averageRating}
                </div>
                <div className="flex justify-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => {
                    // Determine which state to display (hover > user rating > average)
                    const isHovered = hoveredStar > 0 && hoveredStar >= i;
                    const isUserRated = userRating > 0 && userRating >= i;
                    const isAverage =
                      userRating === 0 &&
                      hoveredStar === 0 &&
                      i <= Math.round(averageRating);

                    // Determine if star should be filled
                    const isFilled = isHovered || isUserRated || isAverage;

                    return (
                      <button
                        key={i}
                        onClick={() => handleRating(i)}
                        onMouseEnter={() => setHoveredStar(i)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className={`text-4xl transition-all duration-200 cursor-pointer hover:scale-125 active:scale-95 relative ${
                          isHovered
                            ? "text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,1)]"
                            : isUserRated
                            ? "text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]"
                            : isAverage
                            ? "text-primary/70"
                            : "text-muted-foreground/30"
                        }`}
                        title={`Rate ${i} star${i > 1 ? "s" : ""}`}
                      >
                        {isFilled ? "★" : "☆"}
                      </button>
                    );
                  })}
                </div>
                <p className="text-muted-foreground font-semibold text-sm">
                  {totalVotes} vote{totalVotes !== 1 ? "s" : ""}
                </p>
                {userRating > 0 && (
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <p className="text-xs text-primary font-medium">
                      ✓ You rated {userRating} star{userRating > 1 ? "s" : ""}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Click to change your rating
                    </p>
                  </div>
                )}
                {!userRating && (
                  <p className="text-xs text-muted-foreground/70 mt-3">
                    Click stars to rate this game
                  </p>
                )}
              </div>

              {/* Featured Games */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Featured Games</h3>
                <div className="grid grid-cols-2 gap-3">
                  {featuredGames.map((game) => (
                    <Link
                      key={game.name}
                      href="#"
                      className="group block bg-muted/30 rounded-xl overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all hover:shadow-lg"
                    >
                      <div
                        className={`aspect-square bg-gradient-to-br ${game.bgColor} flex items-center justify-center border-b border-border/50`}
                      >
                        <div className="text-4xl group-hover:scale-110 transition-transform">
                          {game.image}
                        </div>
                      </div>
                      <div className="p-2">
                        <h4 className="font-bold text-xs mb-1 group-hover:text-orange-500 transition-colors line-clamp-1">
                          {game.name}
                        </h4>
                        <div className="flex items-center justify-between text-xs">
                          <p className="text-muted-foreground line-clamp-1">
                            {game.desc}
                          </p>
                          <div className="flex items-center gap-0.5">
                            <span className="text-primary">⭐</span>
                            <span className="font-semibold">{game.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🧫</span>
                <span>Free Agar Games</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Your ultimate destination for free Agar.io-style multiplayer
                games. Play instantly, no downloads required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#play"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Play Agar.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="#tips"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tips & Tricks
                  </Link>
                </li>
                <li>
                  <Link
                    href="#new-games"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    New Games
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Games</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Slither.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Diep.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Paper.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Krunker.io
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Free Agar Games. All rights
              reserved. | Play the best free Agar.io games online - No
              downloads, just fun!
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Agar.io is a trademark of Miniclip. This site is not affiliated
              with Miniclip.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
