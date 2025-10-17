import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Free Agar Games
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/games" className="hover:text-primary transition-colors">
              Games
            </Link>
            <Link href="/guides" className="hover:text-primary transition-colors">
              Guides
            </Link>
            <Link href="/skins" className="hover:text-primary transition-colors">
              Skins
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Play Free Agar.io Games Online
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Enjoy the best collection of Agar.io-style games. Eat, grow, and dominate the arena in these addictive multiplayer games!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/games"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Play Now
            </Link>
            <Link
              href="/guides"
              className="border border-input hover:bg-accent px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Play Our Games?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-2">100% Free</h3>
                <p className="text-muted-foreground">
                  All our games are completely free to play. No hidden fees, no subscriptions required.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2">Multiplayer Online</h3>
                <p className="text-muted-foreground">
                  Compete with players from around the world in real-time multiplayer action.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Instant Play</h3>
                <p className="text-muted-foreground">
                  No downloads required. Jump right into the action from your browser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Games Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Popular Games
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl">🔵</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Agar Game {i}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Eat smaller cells and avoid bigger ones in this classic game mode.
                    </p>
                    <Link
                      href={`/games/${i}`}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded inline-block transition-colors"
                    >
                      Play Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Free Agar Games</h3>
              <p className="text-sm text-muted-foreground">
                The best collection of free Agar.io-style games online.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Games</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/games" className="text-muted-foreground hover:text-foreground">
                    All Games
                  </Link>
                </li>
                <li>
                  <Link href="/games/popular" className="text-muted-foreground hover:text-foreground">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link href="/games/new" className="text-muted-foreground hover:text-foreground">
                    New Games
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/guides" className="text-muted-foreground hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/skins" className="text-muted-foreground hover:text-foreground">
                    Skins
                  </Link>
                </li>
                <li>
                  <Link href="/tips" className="text-muted-foreground hover:text-foreground">
                    Tips & Tricks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Free Agar Games. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
