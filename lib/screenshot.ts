/**
 * Screenshot Generation Utilities
 * Generate website screenshots from game URLs using various free services
 */

export type ScreenshotService = 'screenshotone' | 'apiflash' | 'urlbox' | 'microlink' | 'screenshotapi' | 'unavatar';

/**
 * Screenshot service configuration
 */
const SCREENSHOT_SERVICES = {
  // Free tier: 100 screenshots/month
  screenshotone: (url: string) =>
    `https://api.screenshotone.com/take?url=${encodeURIComponent(url)}&viewport_width=1280&viewport_height=720&format=jpg&quality=80`,

  // Using microlink.io (free, no API key needed for basic usage)
  microlink: (url: string) =>
    `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`,

  // Alternative: Using shot.screenshotapi.net (free, no registration)
  screenshotapi: (url: string) =>
    `https://shot.screenshotapi.net/screenshot?url=${encodeURIComponent(url)}&width=1280&height=720&output=image&file_type=png`,

  // Using Unavatar (works for some sites)
  unavatar: (url: string) =>
    `https://unavatar.io/${url}?fallback=false`,
};

/**
 * Generate screenshot URL for a game
 * @param gameUrl - The game's URL
 * @param service - Screenshot service to use
 * @returns Screenshot image URL
 */
export function getGameScreenshot(
  gameUrl: string,
  service: ScreenshotService = 'screenshotapi'
): string {
  if (!gameUrl) return '';

  // Clean up the URL
  const cleanUrl = gameUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const fullUrl = gameUrl.startsWith('http') ? gameUrl : `https://${gameUrl}`;

  // For specific game sites, we can use their open graph images
  if (gameUrl.includes('agar.io')) {
    return 'https://agar.io/img/agario-preview.jpg';
  }

  if (gameUrl.includes('slither.io')) {
    return 'https://slither.io/img/game.png';
  }

  if (gameUrl.includes('diep.io')) {
    return 'https://diep.io/favicon.png';
  }

  // Use screenshot service for other games
  return SCREENSHOT_SERVICES.screenshotapi(fullUrl);
}

/**
 * Generate Open Graph image URL (often better quality than screenshots)
 * Many games have official OG images that look better
 */
export function getGameOGImage(gameUrl: string): string | null {
  const domain = new URL(gameUrl.startsWith('http') ? gameUrl : `https://${gameUrl}`).hostname;

  // Known game OG images
  const knownOGImages: Record<string, string> = {
    'agar.io': '/game-screenshots/agario.jpg',
    'slither.io': '/game-screenshots/slitherio.jpg',
    'diep.io': '/game-screenshots/diepio.jpg',
    'krunker.io': '/game-screenshots/krunkerio.jpg',
    'moomoo.io': '/game-screenshots/moomooio.jpg',
    'zombsroyale.io': '/game-screenshots/zombsroyale.jpg',
    'surviv.io': '/game-screenshots/survivio.jpg',
    'paper-io.com': '/game-screenshots/paperio.jpg',
    'wings.io': '/game-screenshots/wingsio.jpg',
    'hole-io.com': '/game-screenshots/holeio.jpg',
    'starve.io': '/game-screenshots/starveio.jpg',
    'deeeep.io': '/game-screenshots/deeeep.jpg',
    'shellshock.io': '/game-screenshots/shellshockio.jpg',
    'brutal.io': '/game-screenshots/brutalio.jpg',
    'splix.io': '/game-screenshots/splixio.jpg',
    'narwhale.io': '/game-screenshots/narwhaleio.jpg',
    'wilds.io': '/game-screenshots/wildsio.jpg',
    'powerline.io': '/game-screenshots/powerlineio.jpg',
    'wormax.io': '/game-screenshots/wormaxio.jpg',
    'arrow.io': '/game-screenshots/arrowio.jpg',
    'spinz.io': '/game-screenshots/spinzio.jpg',
  };

  return knownOGImages[domain] || null;
}

/**
 * Get screenshot or fallback to emoji
 * @param gameUrl - Game URL
 * @param emoji - Fallback emoji
 * @returns Image source (screenshot URL or emoji data URI)
 */
export function getGameImageSrc(gameUrl: string | undefined, emoji: string): string {
  if (!gameUrl) {
    return createEmojiDataURI(emoji);
  }

  // Try OG image first
  const ogImage = getGameOGImage(gameUrl);
  if (ogImage) {
    return ogImage;
  }

  // Fallback to screenshot service
  return getGameScreenshot(gameUrl);
}

/**
 * Create a data URI from an emoji for use as img src
 * This is a fallback when screenshots aren't available
 */
export function createEmojiDataURI(emoji: string, size: number = 200): string {
  // Create an SVG with the emoji
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" font-size="${size * 0.7}" text-anchor="middle" dominant-baseline="middle">
        ${emoji}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Generate placeholder image for games without screenshots
 */
export function getGamePlaceholder(gameName: string, bgColor: string): string {
  const svg = `
    <svg width="1280" height="720" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(59,130,246);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(147,51,234);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white">
        ${gameName}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
