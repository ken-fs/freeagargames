/**
 * IO Games Database - SEO Optimized
 * All games with comprehensive metadata for better search rankings
 */

export interface Game {
  id: string;
  name: string;
  title: string; // SEO optimized title
  description: string; // SEO description
  shortDesc: string; // Short description for cards
  image: string; // Emoji or image path
  screenshot?: string; // Screenshot image URL (optional)
  rating: number;
  bgColor: string; // Tailwind gradient classes
  category: GameCategory[];
  tags: string[];
  iframeUrl?: string; // Game embed URL
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: string; // e.g., "Multiplayer", "1-100 players"
  keywords: string[]; // SEO keywords
  featured?: boolean;
  new?: boolean;
  trending?: boolean;
}

export type GameCategory =
  | 'Action'
  | 'Strategy'
  | 'Shooter'
  | 'Battle Royale'
  | 'Racing'
  | 'Survival'
  | 'Casual'
  | 'Arena'
  | 'Team'
  | 'FFA';

/**
 * Featured IO Games - Top rated and most popular
 */
export const featuredGames: Game[] = [
  {
    id: 'agario-classic',
    name: 'Classic Agar.io',
    title: 'Play Classic Agar.io Online Free - Original Cell Game 2025',
    description: 'The original Agar.io experience! Control your cell, eat smaller players, grow bigger, and dominate the arena. Join millions in the game that started the IO revolution.',
    shortDesc: 'Original multiplayer cell game',
    image: '🧫',
    rating: 4.8,
    bgColor: 'from-blue-500/30 to-cyan-500/30',
    category: ['Arena', 'Casual', 'FFA'],
    tags: ['Classic', 'Cell Game', 'Multiplayer', 'Original'],
    iframeUrl: 'https://agar.io',
    difficulty: 'Easy',
    players: 'Multiplayer (100+ players)',
    keywords: ['agario classic', 'original agario', 'cell game', 'blob game'],
    featured: true,
    trending: true,
  },
  {
    id: 'agario-teams',
    name: 'Agar.io Teams',
    title: 'Agar.io Teams Mode - Play Team Strategy IO Game Free',
    description: 'Team up with other players in Agar.io Teams mode! Coordinate with your team, share mass, and dominate rival teams in this strategic multiplayer experience.',
    shortDesc: 'Team-based strategy',
    image: '🎯',
    rating: 4.6,
    bgColor: 'from-purple-500/30 to-pink-500/30',
    category: ['Team', 'Strategy', 'Arena'],
    tags: ['Team Mode', 'Strategy', 'Cooperative'],
    iframeUrl: 'https://agar.io/#teams',
    difficulty: 'Medium',
    players: 'Team Multiplayer',
    keywords: ['agario teams', 'team mode', 'cooperative agario'],
    featured: true,
  },
  {
    id: 'agario-ffa',
    name: 'Agar.io FFA',
    title: 'Agar.io Free For All - Play FFA Mode Online 2025',
    description: 'Pure chaos! Every player for themselves in Agar.io FFA mode. No teams, no mercy - eat or be eaten in the ultimate survival arena.',
    shortDesc: 'Free for all chaos',
    image: '⚔️',
    rating: 4.9,
    bgColor: 'from-orange-500/30 to-red-500/30',
    category: ['FFA', 'Action', 'Arena'],
    tags: ['Free For All', 'Competitive', 'Solo'],
    iframeUrl: 'https://agar.io/#ffa',
    difficulty: 'Hard',
    players: 'Multiplayer FFA',
    keywords: ['agario ffa', 'free for all', 'solo agario'],
    featured: true,
    trending: true,
  },
  {
    id: 'agario-experimental',
    name: 'Agar.io Experimental',
    title: 'Agar.io Experimental Mode - New Features & Mechanics',
    description: 'Try the latest Agar.io features! Experimental mode offers new mechanics, power-ups, and gameplay modifications not found in classic mode.',
    shortDesc: 'New experimental features',
    image: '🔬',
    rating: 4.7,
    bgColor: 'from-green-500/30 to-emerald-500/30',
    category: ['Casual', 'Arena'],
    tags: ['Experimental', 'New Features', 'Beta'],
    iframeUrl: 'https://agar.io/#experimental',
    difficulty: 'Medium',
    players: 'Multiplayer',
    keywords: ['agario experimental', 'new features', 'beta mode'],
    featured: true,
  },
];

/**
 * Popular IO Games - Most played and trending
 */
export const popularIOGames: Game[] = [
  {
    id: 'slither-io',
    name: 'Slither.io',
    title: 'Play Slither.io Online Free - Snake IO Game Unblocked 2025',
    description: 'Control a growing snake, eat glowing orbs, trap opponents, and become the longest slither! The addictive snake game with millions of players worldwide.',
    shortDesc: 'Classic snake multiplayer',
    image: '🐍',
    rating: 4.7,
    bgColor: 'from-green-500/30 to-lime-500/30',
    category: ['Arena', 'Casual', 'FFA'],
    tags: ['Snake Game', 'Multiplayer', 'Trap Enemies'],
    iframeUrl: 'http://slither.io',
    difficulty: 'Easy',
    players: 'Massively Multiplayer',
    keywords: ['slither.io', 'snake game', 'slither io unblocked'],
    trending: true,
  },
  {
    id: 'diep-io',
    name: 'Diep.io',
    title: 'Diep.io - Play Tank Battle IO Game Free Online',
    description: 'Command powerful tanks, upgrade your weapons, and destroy enemy tanks in Diep.io! Choose from 50+ tank classes and dominate the battlefield.',
    shortDesc: 'Tank warfare multiplayer',
    image: '🛡️',
    rating: 4.8,
    bgColor: 'from-gray-500/30 to-slate-500/30',
    category: ['Shooter', 'Strategy', 'Arena'],
    tags: ['Tank Game', 'Shooter', 'Upgrades'],
    iframeUrl: 'https://diep.io',
    difficulty: 'Medium',
    players: 'Multiplayer Arena',
    keywords: ['diep.io', 'tank game', 'diep io online'],
    trending: true,
  },
  {
    id: 'paper-io',
    name: 'Paper.io 2',
    title: 'Paper.io 2 - Play Territory IO Game Free Unblocked',
    description: 'Capture territory by drawing your trail! Expand your area, cut off opponents, and conquer the map in this addictive strategy IO game.',
    shortDesc: 'Territory conquest game',
    image: '📄',
    rating: 4.6,
    bgColor: 'from-blue-500/30 to-indigo-500/30',
    category: ['Strategy', 'Casual', 'FFA'],
    tags: ['Territory', 'Strategy', 'Drawing'],
    iframeUrl: 'https://paper-io.com',
    difficulty: 'Easy',
    players: 'Multiplayer',
    keywords: ['paper.io', 'territory game', 'paper io 2'],
    trending: true,
  },
  {
    id: 'krunker-io',
    name: 'Krunker.io',
    title: 'Krunker.io - Play 3D FPS IO Shooter Game Free',
    description: 'Fast-paced 3D first-person shooter! Choose your class, customize weapons, and compete in pixelated FPS battles with players worldwide.',
    shortDesc: '3D FPS multiplayer shooter',
    image: '🔫',
    rating: 4.9,
    bgColor: 'from-red-500/30 to-orange-500/30',
    category: ['Shooter', 'Action', 'FFA'],
    tags: ['FPS', '3D', 'Shooting', 'Competitive'],
    iframeUrl: 'https://krunker.io',
    difficulty: 'Hard',
    players: 'Online Multiplayer',
    keywords: ['krunker.io', 'fps io game', '3d shooter'],
    trending: true,
  },
  {
    id: 'moomoo-io',
    name: 'Moomoo.io',
    title: 'Moomoo.io - Play Survival IO Game Free Online',
    description: 'Gather resources, build defenses, and protect your village! Craft weapons, team up with friends, and survive against hostile players in this strategic IO game.',
    shortDesc: 'Survival building game',
    image: '⚒️',
    rating: 4.7,
    bgColor: 'from-amber-500/30 to-yellow-500/30',
    category: ['Survival', 'Strategy', 'Arena'],
    tags: ['Crafting', 'Building', 'Survival'],
    iframeUrl: 'https://moomoo.io',
    difficulty: 'Medium',
    players: 'Multiplayer Survival',
    keywords: ['moomoo.io', 'survival io', 'building game'],
    trending: true,
  },
  {
    id: 'zombs-royale',
    name: 'Zombs Royale',
    title: 'Zombs Royale - Play Battle Royale IO Game Free',
    description: '100-player battle royale in your browser! Loot weapons, survive the shrinking zone, and be the last player standing in this fast-paced IO battle royale.',
    shortDesc: '100-player battle royale',
    image: '👑',
    rating: 4.8,
    bgColor: 'from-purple-500/30 to-violet-500/30',
    category: ['Battle Royale', 'Shooter', 'FFA'],
    tags: ['Battle Royale', '100 Players', 'Survival'],
    iframeUrl: 'https://zombsroyale.io',
    difficulty: 'Hard',
    players: '100 Players',
    keywords: ['zombs royale', 'battle royale io', 'zombsroyale'],
    trending: true,
  },
  {
    id: 'wings-io',
    name: 'Wings.io',
    title: 'Wings.io - Play Airplane Combat IO Game Free',
    description: 'Dogfight in the skies! Control your plane, shoot down enemies, and upgrade your aircraft in this aerial combat IO game.',
    shortDesc: 'Airplane combat multiplayer',
    image: '✈️',
    rating: 4.5,
    bgColor: 'from-sky-500/30 to-blue-500/30',
    category: ['Shooter', 'Action', 'Arena'],
    tags: ['Airplane', 'Combat', 'Flying'],
    iframeUrl: 'https://wings.io',
    difficulty: 'Medium',
    players: 'Multiplayer',
    keywords: ['wings.io', 'airplane game', 'flight combat'],
  },
  {
    id: 'hole-io',
    name: 'Hole.io',
    title: 'Hole.io - Play Black Hole IO Game Free Online',
    description: 'Become a black hole and swallow everything! Consume objects, grow bigger, and devour other players in this unique IO game.',
    shortDesc: 'Black hole eating game',
    image: '⚫',
    rating: 4.6,
    bgColor: 'from-slate-700/30 to-gray-900/30',
    category: ['Casual', 'Arena', 'FFA'],
    tags: ['Black Hole', 'Eating', 'Casual'],
    iframeUrl: 'https://hole-io.com',
    difficulty: 'Easy',
    players: 'Multiplayer',
    keywords: ['hole.io', 'black hole game', 'hole io online'],
  },
  {
    id: 'surviv-io',
    name: 'Surviv.io',
    title: 'Surviv.io - Play 2D Battle Royale IO Game Free',
    description: '2D battle royale survival! Loot buildings, find weapons, and outlast 100 players in this top-down shooter IO game.',
    shortDesc: '2D battle royale shooter',
    image: '🎯',
    rating: 4.8,
    bgColor: 'from-green-600/30 to-emerald-600/30',
    category: ['Battle Royale', 'Shooter', 'Survival'],
    tags: ['Battle Royale', '2D', 'Looting'],
    iframeUrl: 'https://surviv.io',
    difficulty: 'Hard',
    players: '100 Players',
    keywords: ['surviv.io', '2d battle royale', 'surviv io'],
    trending: true,
  },
  {
    id: 'spinz-io',
    name: 'Spinz.io',
    title: 'Spinz.io - Play Spinning Battle IO Game Free',
    description: 'Attach a weapon to your spinner and knock out opponents! Collect power-ups and become the ultimate spinning champion.',
    shortDesc: 'Spinning weapon combat',
    image: '🌀',
    rating: 4.4,
    bgColor: 'from-cyan-500/30 to-teal-500/30',
    category: ['Action', 'Arena', 'FFA'],
    tags: ['Spinning', 'Combat', 'Power-ups'],
    iframeUrl: 'https://spinz.io',
    difficulty: 'Easy',
    players: 'Multiplayer',
    keywords: ['spinz.io', 'spinner game', 'spinning combat'],
  },
  {
    id: 'arrow-io',
    name: 'Arrow.io',
    title: 'Arrow.io - Play Archery Battle IO Game Free',
    description: 'Master the bow and arrow! Shoot enemies, level up, and unlock powerful abilities in this top-down archery IO game.',
    shortDesc: 'Archery combat game',
    image: '🏹',
    rating: 4.5,
    bgColor: 'from-orange-500/30 to-red-500/30',
    category: ['Shooter', 'Action', 'Arena'],
    tags: ['Archery', 'Leveling', 'Abilities'],
    iframeUrl: 'https://arrow.io',
    difficulty: 'Medium',
    players: 'Multiplayer Arena',
    keywords: ['arrow.io', 'archery game', 'bow and arrow'],
  },
  {
    id: 'starve-io',
    name: 'Starve.io',
    title: 'Starve.io - Play Survival Crafting IO Game Free',
    description: 'Survive the wilderness! Gather resources, craft tools, build shelter, and battle hunger, cold, and hostile players.',
    shortDesc: 'Wilderness survival',
    image: '🏕️',
    rating: 4.7,
    bgColor: 'from-green-700/30 to-lime-700/30',
    category: ['Survival', 'Strategy', 'Arena'],
    tags: ['Survival', 'Crafting', 'Resource Management'],
    iframeUrl: 'https://starve.io',
    difficulty: 'Hard',
    players: 'Multiplayer Survival',
    keywords: ['starve.io', 'survival io', 'crafting game'],
  },
  {
    id: 'deeeep-io',
    name: 'Deeeep.io',
    title: 'Deeeep.io - Play Ocean Evolution IO Game Free',
    description: 'Dive into the ocean food chain! Start as a small fish, evolve into powerful sea creatures, and dominate the deep sea.',
    shortDesc: 'Ocean evolution game',
    image: '🐟',
    rating: 4.6,
    bgColor: 'from-blue-600/30 to-cyan-600/30',
    category: ['Casual', 'Strategy', 'Arena'],
    tags: ['Ocean', 'Evolution', 'Underwater'],
    iframeUrl: 'https://deeeep.io',
    difficulty: 'Medium',
    players: 'Multiplayer',
    keywords: ['deeeep.io', 'ocean game', 'evolution io'],
  },
  {
    id: 'shellshock-io',
    name: 'Shellshock.io',
    title: 'Shellshock.io - Play Egg Shooter IO Game Free',
    description: 'Eggs with guns! Control an egg soldier, customize weapons, and battle in fast-paced FPS arenas.',
    shortDesc: 'Egg FPS shooter',
    image: '🥚',
    rating: 4.7,
    bgColor: 'from-yellow-500/30 to-orange-500/30',
    category: ['Shooter', 'Action', 'FFA'],
    tags: ['FPS', 'Shooting', 'Customization'],
    iframeUrl: 'https://shellshock.io',
    difficulty: 'Medium',
    players: 'Multiplayer FPS',
    keywords: ['shellshock.io', 'egg shooter', 'fps io'],
  },
  {
    id: 'brutal-io',
    name: 'Brutal.io',
    title: 'Brutal.io - Play Flail Spinning IO Game Free',
    description: 'Swing your deadly flail and crush opponents! Grow longer, swing harder, and dominate the arena with your spinning weapon.',
    shortDesc: 'Flail spinning combat',
    image: '⛓️',
    rating: 4.5,
    bgColor: 'from-gray-600/30 to-stone-600/30',
    category: ['Action', 'Arena', 'FFA'],
    tags: ['Spinning', 'Combat', 'Physics'],
    iframeUrl: 'https://brutal.io',
    difficulty: 'Medium',
    players: 'Multiplayer',
    keywords: ['brutal.io', 'flail game', 'spinning weapon'],
  },
  {
    id: 'splix-io',
    name: 'Splix.io',
    title: 'Splix.io - Play Territory Capture IO Game Free',
    description: 'Capture territory with your colored trail! Conquer the map, cut off opponents, and defend your claimed areas.',
    shortDesc: 'Territory capture game',
    image: '🎨',
    rating: 4.6,
    bgColor: 'from-pink-500/30 to-rose-500/30',
    category: ['Strategy', 'Casual', 'FFA'],
    tags: ['Territory', 'Strategy', 'Capture'],
    iframeUrl: 'https://splix.io',
    difficulty: 'Easy',
    players: 'Multiplayer',
    keywords: ['splix.io', 'territory io', 'capture game'],
  },
  {
    id: 'narwhale-io',
    name: 'Narwhale.io',
    title: 'Narwhale.io - Play Narwhal Combat IO Game Free',
    description: 'Become a narwhal warrior! Stab opponents with your horn, collect powerups, and freeze enemies in this arctic arena.',
    shortDesc: 'Narwhal battle arena',
    image: '🦄',
    rating: 4.4,
    bgColor: 'from-blue-400/30 to-cyan-400/30',
    category: ['Action', 'Casual', 'Arena'],
    tags: ['Narwhal', 'Arctic', 'Combat'],
    iframeUrl: 'https://narwhale.io',
    difficulty: 'Easy',
    players: 'Multiplayer',
    keywords: ['narwhale.io', 'narwhal game', 'arctic combat'],
  },
  {
    id: 'wilds-io',
    name: 'Wilds.io',
    title: 'Wilds.io - Play Battle Royale Survival IO Game',
    description: 'Battle royale meets survival! Gather resources, craft weapons, build defenses, and be the last team standing.',
    shortDesc: 'Battle royale survival',
    image: '🌲',
    rating: 4.7,
    bgColor: 'from-green-500/30 to-emerald-500/30',
    category: ['Battle Royale', 'Survival', 'Strategy'],
    tags: ['Battle Royale', 'Crafting', 'Team'],
    iframeUrl: 'https://wilds.io',
    difficulty: 'Hard',
    players: 'Team Battle Royale',
    keywords: ['wilds.io', 'survival battle royale', 'wilds io'],
  },
  {
    id: 'powerline-io',
    name: 'Powerline.io',
    title: 'Powerline.io - Play Electric Snake IO Game Free',
    description: 'Electric snake with a twist! Collect power-ups, boost your speed, and trap opponents with your glowing trail.',
    shortDesc: 'Electric snake game',
    image: '⚡',
    rating: 4.5,
    bgColor: 'from-yellow-400/30 to-amber-400/30',
    category: ['Casual', 'Arena', 'FFA'],
    tags: ['Snake', 'Electric', 'Boosting'],
    iframeUrl: 'https://powerline.io',
    difficulty: 'Easy',
    players: 'Multiplayer',
    keywords: ['powerline.io', 'electric snake', 'tron snake'],
  },
  {
    id: 'wormax-io',
    name: 'Wormax.io',
    title: 'Wormax.io - Play Enhanced Snake IO Game Free',
    description: 'Slither.io evolution! Collect skills, use special abilities, and customize your worm in this feature-rich snake game.',
    shortDesc: 'Enhanced snake with skills',
    image: '🐛',
    rating: 4.6,
    bgColor: 'from-purple-500/30 to-fuchsia-500/30',
    category: ['Casual', 'Arena', 'FFA'],
    tags: ['Snake', 'Skills', 'Abilities'],
    iframeUrl: 'https://wormax.io',
    difficulty: 'Medium',
    players: 'Multiplayer',
    keywords: ['wormax.io', 'snake with skills', 'wormax'],
  },
];

/**
 * New & Casual Games
 */
export const casualGames: Game[] = [
  {
    id: 'cookie-clicker',
    name: 'Cookie Clicker',
    title: 'Cookie Clicker - Play Idle Clicker Game Free',
    description: 'The addictive idle game! Click cookies, buy upgrades, and build your cookie empire in this classic incremental game.',
    shortDesc: 'Idle clicker game',
    image: '🍪',
    rating: 5,
    bgColor: 'from-amber-500/30 to-orange-500/30',
    category: ['Casual'],
    tags: ['Idle', 'Clicker', 'Incremental'],
    iframeUrl: 'https://orteil.dashnet.org/cookieclicker',
    difficulty: 'Easy',
    players: 'Single Player',
    keywords: ['cookie clicker', 'idle game', 'clicker'],
    new: true,
  },
  {
    id: 'monkey-mart',
    name: 'Monkey Mart',
    title: 'Monkey Mart - Play Store Management Game Free',
    description: 'Run your own supermarket as a monkey! Plant crops, stock shelves, and serve customers in this cute management game.',
    shortDesc: 'Store management game',
    image: '🐵',
    rating: 5,
    bgColor: 'from-cyan-500/30 to-teal-500/30',
    category: ['Casual', 'Strategy'],
    tags: ['Management', 'Cute', 'Store'],
    iframeUrl: 'https://poki.com/en/g/monkey-mart',
    difficulty: 'Easy',
    players: 'Single Player',
    keywords: ['monkey mart', 'management game', 'cute game'],
    new: true,
  },
  {
    id: 'subway-moto',
    name: 'Subway Moto',
    title: 'Subway Moto - Play Motorcycle Racing Game Free',
    description: 'Race through subway tunnels on your motorcycle! Dodge obstacles, collect coins, and beat your high score.',
    shortDesc: 'Subway motorcycle racing',
    image: '🏍️',
    rating: 5,
    bgColor: 'from-yellow-500/30 to-amber-500/30',
    category: ['Racing', 'Casual'],
    tags: ['Racing', 'Motorcycle', 'Endless'],
    iframeUrl: 'https://poki.com/en/g/subway-surfers',
    difficulty: 'Medium',
    players: 'Single Player',
    keywords: ['subway moto', 'motorcycle racing', 'subway runner'],
    new: true,
  },
  {
    id: 'chicken-flip',
    name: 'Chicken Flip',
    title: 'Chicken Flip - Play Puzzle Flip Game Free',
    description: 'Flip the chicken to solve puzzles! Rotate and match patterns in this challenging brain teaser.',
    shortDesc: 'Puzzle flip game',
    image: '🐔',
    rating: 5,
    bgColor: 'from-green-500/30 to-emerald-500/30',
    category: ['Casual'],
    tags: ['Puzzle', 'Logic', 'Brain Teaser'],
    iframeUrl: 'https://poki.com/en/g/flip-master',
    difficulty: 'Medium',
    players: 'Single Player',
    keywords: ['chicken flip', 'puzzle game', 'flip game'],
    new: true,
  },
  {
    id: 'bunny-farm',
    name: 'Bunny Farm',
    title: 'Bunny Farm - Play Farming Simulation Game Free',
    description: 'Build your bunny farm paradise! Raise cute bunnies, grow carrots, and expand your adorable farm.',
    shortDesc: 'Cute farming simulation',
    image: '🐰',
    rating: 5,
    bgColor: 'from-pink-500/30 to-rose-500/30',
    category: ['Casual', 'Strategy'],
    tags: ['Farming', 'Cute', 'Simulation'],
    iframeUrl: 'https://poki.com/en/g/rabbit-samurai-2',
    difficulty: 'Easy',
    players: 'Single Player',
    keywords: ['bunny farm', 'farming game', 'cute farm'],
    new: true,
  },
  {
    id: 'escape-bear',
    name: 'Escape Bear',
    title: 'Escape Bear - Play Adventure Escape Game Free',
    description: 'Help the bear escape! Solve puzzles, avoid traps, and find your way to freedom in this adventure game.',
    shortDesc: 'Adventure escape game',
    image: '🐻',
    rating: 5,
    bgColor: 'from-lime-500/30 to-green-500/30',
    category: ['Casual'],
    tags: ['Adventure', 'Puzzle', 'Escape'],
    iframeUrl: 'https://poki.com/en/g/we-bare-bears-adventure',
    difficulty: 'Medium',
    players: 'Single Player',
    keywords: ['escape bear', 'escape game', 'puzzle adventure'],
    new: true,
  },
  {
    id: 'galaxy-clicker',
    name: 'Galaxy Clicker',
    title: 'Galaxy Clicker - Play Space Idle Game Free',
    description: 'Conquer the galaxy one click at a time! Build space stations, explore planets, and expand your cosmic empire.',
    shortDesc: 'Space idle clicker',
    image: '🌌',
    rating: 5,
    bgColor: 'from-purple-500/30 to-violet-500/30',
    category: ['Casual'],
    tags: ['Idle', 'Space', 'Clicker'],
    iframeUrl: 'https://poki.com/en/g/galaxy-clicker',
    difficulty: 'Easy',
    players: 'Single Player',
    keywords: ['galaxy clicker', 'space idle', 'cosmic clicker'],
    new: true,
  },
  {
    id: 'ragdoll-playground',
    name: 'Ragdoll Playground',
    title: 'Ragdoll Playground - Play Physics Sandbox Game Free',
    description: 'Experiment with ragdoll physics! Create scenarios, test weapons, and watch hilarious ragdoll simulations.',
    shortDesc: 'Ragdoll physics sandbox',
    image: '🎯',
    rating: 5,
    bgColor: 'from-red-500/30 to-rose-500/30',
    category: ['Casual'],
    tags: ['Physics', 'Sandbox', 'Simulation'],
    iframeUrl: 'https://poki.com/en/g/ragdoll-archers',
    difficulty: 'Easy',
    players: 'Single Player',
    keywords: ['ragdoll playground', 'physics game', 'sandbox'],
    new: true,
  },
];

/**
 * All games combined for search and filtering
 */
export const allGames: Game[] = [
  ...featuredGames,
  ...popularIOGames,
  ...casualGames,
];

/**
 * Get games by category
 */
export function getGamesByCategory(category: GameCategory): Game[] {
  return allGames.filter(game => game.category.includes(category));
}

/**
 * Get games by tag
 */
export function getGamesByTag(tag: string): Game[] {
  return allGames.filter(game =>
    game.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

/**
 * Search games by name, title, or keywords
 */
export function searchGames(query: string): Game[] {
  const lowerQuery = query.toLowerCase();
  return allGames.filter(game =>
    game.name.toLowerCase().includes(lowerQuery) ||
    game.title.toLowerCase().includes(lowerQuery) ||
    game.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get trending games
 */
export function getTrendingGames(): Game[] {
  return allGames.filter(game => game.trending);
}

/**
 * Get new games
 */
export function getNewGames(): Game[] {
  return allGames.filter(game => game.new);
}

/**
 * Get featured games
 */
export function getFeaturedGames(): Game[] {
  return allGames.filter(game => game.featured);
}

/**
 * Get top rated games
 */
export function getTopRatedGames(limit: number = 10): Game[] {
  return [...allGames]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}
