# Games Database Documentation

## Overview

This directory contains the centralized game database with SEO-optimized metadata for all games on Free Agar Games.

## Files

- `games.ts` - Main game database with type definitions and helper functions

## Game Data Structure

Each game includes comprehensive SEO metadata:

```typescript
interface Game {
  id: string;                    // Unique identifier (URL-friendly)
  name: string;                  // Display name
  title: string;                 // SEO-optimized page title
  description: string;           // Full SEO description (150-160 chars)
  shortDesc: string;             // Brief description for cards
  image: string;                 // Emoji or image path
  rating: number;                // User rating (0-5)
  bgColor: string;               // Tailwind gradient classes
  category: GameCategory[];      // Game categories
  tags: string[];                // Search and filter tags
  iframeUrl?: string;           // Game embed URL (optional)
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: string;               // Player count info
  keywords: string[];            // SEO keywords
  featured?: boolean;            // Featured game flag
  new?: boolean;                 // New game badge
  trending?: boolean;            // Trending game badge
}
```

## Game Collections

### Featured Games (4 games)
Core Agar.io variants:
- Classic Agar.io
- Agar.io Teams
- Agar.io FFA
- Agar.io Experimental

### Popular IO Games (20 games)
Top-rated multiplayer IO games:
- Slither.io - Snake multiplayer
- Diep.io - Tank battle arena
- Paper.io 2 - Territory conquest
- Krunker.io - 3D FPS shooter
- Moomoo.io - Survival building
- Zombs Royale - Battle royale
- Wings.io - Airplane combat
- Hole.io - Black hole game
- Surviv.io - 2D battle royale
- Spinz.io - Spinning combat
- Arrow.io - Archery battle
- Starve.io - Wilderness survival
- Deeeep.io - Ocean evolution
- Shellshock.io - Egg FPS
- Brutal.io - Flail spinning
- Splix.io - Territory capture
- Narwhale.io - Narwhal combat
- Wilds.io - Battle royale survival
- Powerline.io - Electric snake
- Wormax.io - Enhanced snake

### Casual Games (8 games)
Single-player and casual experiences:
- Cookie Clicker
- Monkey Mart
- Subway Moto
- Chicken Flip
- Bunny Farm
- Escape Bear
- Galaxy Clicker
- Ragdoll Playground

## Helper Functions

### Search & Filter

```typescript
// Get games by category
getGamesByCategory(category: GameCategory): Game[]

// Get games by tag
getGamesByTag(tag: string): Game[]

// Search games by name, title, or keywords
searchGames(query: string): Game[]
```

### Collections

```typescript
// Get trending games (games with trending: true)
getTrendingGames(): Game[]

// Get new games (games with new: true)
getNewGames(): Game[]

// Get featured games (games with featured: true)
getFeaturedGames(): Game[]

// Get top rated games (sorted by rating)
getTopRatedGames(limit?: number): Game[]
```

## SEO Optimization Features

### 1. **Comprehensive Metadata**
Each game includes:
- SEO-optimized title (60 chars)
- Meta description (150-160 chars)
- Relevant keywords array
- Category tags for filtering

### 2. **Semantic Keywords**
Games include variations of:
- Game name + "online", "free", "unblocked"
- Genre keywords ("io game", "battle royale", etc.)
- Gameplay keywords ("multiplayer", "shooter", etc.)

### 3. **User Intent Targeting**
Keywords cover:
- Informational: "what is agar.io"
- Navigational: "play slither.io"
- Transactional: "agar.io online free"

### 4. **Long-tail Keywords**
Each game targets specific queries:
- "play [game] online free 2025"
- "[game] unblocked"
- "[game] no download"

## Usage in Components

### Import games data:

```typescript
import {
  featuredGames,
  popularIOGames,
  casualGames,
  getTrendingGames,
  getNewGames,
  searchGames,
  type Game,
} from '@/constants/games';
```

### Display games:

```typescript
// Featured games
const featured = featuredGames;

// Trending IO games
const trending = getTrendingGames();

// Search games
const results = searchGames('slither');

// Filter by category
const shooters = getGamesByCategory('Shooter');
```

## Categories

Available game categories:
- `Action` - Fast-paced action games
- `Strategy` - Strategic gameplay
- `Shooter` - Shooting games (FPS/TPS)
- `Battle Royale` - Last-player-standing
- `Racing` - Racing games
- `Survival` - Survival mechanics
- `Casual` - Casual/idle games
- `Arena` - Arena-based multiplayer
- `Team` - Team-based games
- `FFA` - Free-for-all matches

## Adding New Games

To add a new game:

1. Add game object to appropriate array in `games.ts`
2. Include all required fields
3. Write SEO-optimized title and description
4. Add relevant keywords (5-10 per game)
5. Choose appropriate categories and tags
6. Set rating and difficulty
7. Add badges (trending/new/featured) if applicable

Example:

```typescript
{
  id: 'example-io',
  name: 'Example.io',
  title: 'Example.io - Play Free IO Game Online 2025',
  description: 'Play Example.io free! Multiplayer action game with unique mechanics. Join thousands of players worldwide in this addictive IO game.',
  shortDesc: 'Unique multiplayer action',
  image: '🎮',
  rating: 4.5,
  bgColor: 'from-blue-500/30 to-cyan-500/30',
  category: ['Action', 'Arena', 'FFA'],
  tags: ['Multiplayer', 'Fast-paced', 'Competitive'],
  difficulty: 'Medium',
  players: 'Massively Multiplayer',
  keywords: ['example.io', 'example io game', 'play example.io'],
  trending: true,
}
```

## SEO Best Practices

### Title Format
`[Game Name] - Play [Type] IO Game Free [Year]`

Example: "Slither.io - Play Snake IO Game Free 2025"

### Description Format
Include:
1. Main game feature (1 sentence)
2. Unique selling point (1 sentence)
3. Call to action

Example: "Control a growing snake, eat glowing orbs, and trap opponents! The addictive multiplayer snake game with millions of players. Play now for free!"

### Keywords Selection
Include:
- Exact game name
- Name variations (with/without .io)
- Genre keywords
- "unblocked", "free", "online"
- Year (2025)

## Maintenance

- Review and update ratings quarterly
- Add new trending games monthly
- Update keywords based on search trends
- Remove outdated games annually
- Keep descriptions fresh and accurate
