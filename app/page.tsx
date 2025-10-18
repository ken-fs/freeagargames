import Link from "next/link";

export default function Home() {
  const newGames = [
    { name: "Cookie Clicker", image: "🍪", rating: 5, bgColor: "from-amber-500/30 to-orange-500/30" },
    { name: "BloodMoney", image: "💰", rating: 5, bgColor: "from-purple-500/30 to-pink-500/30" },
    { name: "Ragdoll Playground", image: "🎯", rating: 5, bgColor: "from-red-500/30 to-rose-500/30" },
    { name: "Shadow Milk [Fixed Pets]", image: "🧫", rating: 4, bgColor: "from-blue-500/30 to-cyan-500/30" },
    { name: "Subway Moto", image: "🏍️", rating: 5, bgColor: "from-yellow-500/30 to-amber-500/30" },
    { name: "Bloodmoney 2", image: "💸", rating: 5, bgColor: "from-fuchsia-500/30 to-purple-500/30" },
    { name: "Labubu Clicker", image: "🎮", rating: 5, bgColor: "from-indigo-500/30 to-blue-500/30" },
    { name: "Golden Cheese Cookie!", image: "🧀", rating: 4.9, bgColor: "from-orange-500/30 to-yellow-500/30" },
    { name: "Galaxy Clicker", image: "🌌", rating: 5, bgColor: "from-purple-500/30 to-violet-500/30" },
    { name: "Shadow Milk Cookie", image: "🍪", rating: 5, bgColor: "from-slate-500/30 to-gray-500/30" },
    { name: "Chicken Flip", image: "🐔", rating: 5, bgColor: "from-green-500/30 to-emerald-500/30" },
    { name: "Silent Salt", image: "🧂", rating: 4.5, bgColor: "from-purple-500/30 to-indigo-500/30" },
    { name: "Bunny Farm", image: "🐰", rating: 5, bgColor: "from-pink-500/30 to-rose-500/30" },
    { name: "Monkey Mart", image: "🐵", rating: 5, bgColor: "from-cyan-500/30 to-teal-500/30" },
    { name: "Escape Bear", image: "🐻", rating: 5, bgColor: "from-lime-500/30 to-green-500/30" },
    { name: "Eternal Sugar", image: "🍬", rating: 4.8, bgColor: "from-violet-500/30 to-purple-500/30" }
  ];

  const featuredGames = [
    { name: "Classic Agar.io", desc: "Original multiplayer", image: "🧫", rating: 4.8, bgColor: "from-blue-500/30 to-cyan-500/30" },
    { name: "Agar.io Teams", desc: "Team strategy", image: "🎯", rating: 4.6, bgColor: "from-purple-500/30 to-pink-500/30" },
    { name: "Agar.io FFA", desc: "Free for all", image: "⚔️", rating: 4.9, bgColor: "from-orange-500/30 to-red-500/30" },
    { name: "Agar.io Experimental", desc: "New features", image: "🔬", rating: 4.7, bgColor: "from-green-500/30 to-emerald-500/30" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-3xl">🧫</span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Free Agar Games
              </span>
            </Link>
          </div>

          {/* Card-style Navigation */}
          <nav className="flex gap-3 overflow-x-auto pb-2">
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
                <span className="font-semibold text-secondary">New Games</span>
              </div>
            </Link>

            <Link
              href="#tips"
              className="flex-shrink-0 bg-gradient-to-br from-accent/20 to-accent/10 hover:from-accent/30 hover:to-accent/20 border border-accent/30 rounded-xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🎯</span>
                <span className="font-semibold text-accent">Casual Games</span>
              </div>
            </Link>

            <Link
              href="#scratch"
              className="flex-shrink-0 bg-gradient-to-br from-green-500/20 to-green-500/10 hover:from-green-500/30 hover:to-green-500/20 border border-green-500/30 rounded-xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">📦</span>
                <span className="font-semibold text-green-400">Scratch Games</span>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-muted/50 border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="#games" className="hover:text-primary transition-colors">IO Games</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Play Agar.io Online</span>
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
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center text-4xl border-2 border-primary/30 shadow-lg shadow-primary/10">
                  🧫
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h1 className="text-3xl md:text-4xl font-bold">Play Agar.io Online</h1>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold border border-primary/30">
                      ✓ Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1">
                      <span className="text-primary">⭐</span>
                      <span className="font-semibold text-foreground">4.6</span>
                    </div>
                    <span>•</span>
                    <span>IO Games</span>
                    <span>•</span>
                    <span>Multiplayer Games</span>
                    <span>•</span>
                    <span>Casual Games</span>
                  </div>
                </div>
              </div>

              {/* Game Embed Section */}
              <section id="play" className="bg-card rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <div className="aspect-video w-full bg-muted/30">
                  <iframe
                    src="https://agar.io/"
                    className="w-full h-full"
                    title="Play Agar.io Online Free"
                    allowFullScreen
                    loading="eager"
                  />
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-t border-border/50">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-primary-foreground px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                      ▶ Play Now
                    </button>
                    <button className="bg-gradient-to-r from-secondary to-purple-600 hover:from-secondary/90 hover:to-purple-600/90 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-secondary/30">
                      🔄 Restart Game
                    </button>
                  </div>
                </div>
              </section>

              {/* Hero Content */}
              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  🧫 Play Agar.io Online — Free Multiplayer Blob Game
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Welcome to <strong className="text-primary">Free Agar Games</strong>, your go-to hub for the original <strong className="text-foreground">Agar.io online experience</strong>.
                  </p>
                  <p>
                    Join millions of players worldwide in this fast-paced <strong className="text-foreground">multiplayer cell-eating game</strong>.
                    Grow your blob by consuming smaller cells, avoid being eaten by bigger players, and <strong className="text-primary">dominate the leaderboard</strong>!
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
                  <strong className="text-foreground">Agar.io</strong> is one of the most popular <strong className="text-foreground">.io multiplayer games</strong> ever created.
                  You control a small blob in a petri dish — your goal is simple: <strong className="text-primary">eat to grow</strong>.
                  But remember, <strong className="text-foreground">the bigger you get, the slower you move</strong>, and that&apos;s when strategy matters!
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { emoji: "🟣", title: "Eat smaller blobs to grow in size", desc: "Consume cells smaller than you to increase your mass and climb the leaderboard.", color: "primary" },
                    { emoji: "🟢", title: "Avoid larger cells — or you'll be eaten", desc: "Stay alert! Bigger players are hunting you. Use your speed to escape danger.", color: "secondary" },
                    { emoji: "🔵", title: "Split your blob to chase and trap enemies", desc: "Master the split mechanic to catch fast opponents or escape tight situations.", color: "accent" },
                    { emoji: "🔴", title: "Team up or play solo to rule the arena", desc: "Choose your strategy: dominate alone or coordinate with teammates for victory.", color: "primary" }
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-br from-${item.color}/10 to-${item.color}/5 border border-${item.color}/30 rounded-xl p-5 hover:border-${item.color}/50 transition-all hover:shadow-lg hover:shadow-${item.color}/20`}>
                      <div className="text-3xl mb-2">{item.emoji}</div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                  Just <strong className="text-primary">click and play instantly</strong> in your browser — no signup, no installation.
                  Whether you&apos;re on a computer, tablet, or Chromebook, Agar.io runs smoothly anywhere.
                </p>
              </section>

              {/* Tips & Tricks Section */}
              <section id="tips" className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🧠</span>
                  <span>Tips & Tricks for Beginners</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { num: "1", title: "Stay small at first", desc: "Use your speed advantage to dodge danger and collect easy mass." },
                    { num: "2", title: "Hide in virus clusters", desc: "Viruses split large players. Use them as shields to avoid predators." },
                    { num: "3", title: "Split smartly", desc: "Chasing too aggressively can backfire. Calculate before you split." },
                    { num: "4", title: "Watch the leaderboard", desc: "Track the top predators to avoid dangerous areas of the map." }
                  ].map((tip) => (
                    <div key={tip.num} className="bg-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent">
                          {tip.num}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                          <p className="text-sm text-muted-foreground">{tip.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground">
                    Looking for more? Read our full <Link href="#" className="text-primary hover:underline font-semibold">Agar.io Strategy Guide</Link>.
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
                    { icon: "✨", title: "Simple yet addictive mechanics", desc: "Easy to learn, hard to master" },
                    { icon: "⚡", title: "Quick matches and real-time multiplayer", desc: "Jump in and out anytime" },
                    { icon: "📱", title: "Cross-platform accessibility", desc: "Play on any device, anywhere" },
                    { icon: "🌎", title: "Thriving community worldwide", desc: "Millions of active players daily" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-muted-foreground mt-6 leading-relaxed">
                  Agar.io defined the <strong className="text-primary">&quot;.io game&quot;</strong> genre and continues to inspire modern multiplayer web games like <strong>Slither.io</strong>, <strong>Diep.io</strong>, and <strong>Paper.io</strong>.
                </p>
              </section>

              {/* New Games Section */}
              <section id="new-games" className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
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
                      className="group bg-muted/30 border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all transform hover:scale-105"
                    >
                      <div className={`aspect-video bg-gradient-to-br ${game.bgColor} flex items-center justify-center border-b border-border/50`}>
                        <div className="text-5xl group-hover:scale-110 transition-transform">
                          {game.image}
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-1">
                          {game.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <span className="text-primary text-sm">⭐</span>
                          <span className="text-sm font-semibold">{game.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 text-center shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  🏆 Join the Arena — Eat or Be Eaten
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  Ready to prove your skill? Play <strong className="text-primary">Agar.io online free</strong>, compete with players around the world, and climb the global leaderboard.
                </p>
                <button className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                  👉 Play Agar.io Now!
                </button>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:w-80 space-y-6">
              {/* Rating Card */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 text-center sticky top-24 shadow-lg">
                <div className="text-6xl font-bold mb-3 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">4.6</div>
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4].map((i) => (
                    <span key={i} className="text-primary text-2xl">★</span>
                  ))}
                  <span className="text-primary/30 text-2xl">★</span>
                </div>
                <p className="text-muted-foreground font-semibold">278 votes</p>
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
                      <div className={`aspect-square bg-gradient-to-br ${game.bgColor} flex items-center justify-center border-b border-border/50`}>
                        <div className="text-4xl group-hover:scale-110 transition-transform">
                          {game.image}
                        </div>
                      </div>
                      <div className="p-2">
                        <h4 className="font-bold text-xs mb-1 group-hover:text-primary transition-colors line-clamp-1">
                          {game.name}
                        </h4>
                        <div className="flex items-center justify-between text-xs">
                          <p className="text-muted-foreground line-clamp-1">{game.desc}</p>
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
                Your ultimate destination for free Agar.io-style multiplayer games. Play instantly, no downloads required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#play" className="text-muted-foreground hover:text-primary transition-colors">Play Agar.io</Link></li>
                <li><Link href="#tips" className="text-muted-foreground hover:text-primary transition-colors">Tips & Tricks</Link></li>
                <li><Link href="#new-games" className="text-muted-foreground hover:text-primary transition-colors">New Games</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Games</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Slither.io</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Diep.io</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Paper.io</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Krunker.io</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Free Agar Games. All rights reserved. |
              Play the best free Agar.io games online - No downloads, just fun!
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Agar.io is a trademark of Miniclip. This site is not affiliated with Miniclip.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
