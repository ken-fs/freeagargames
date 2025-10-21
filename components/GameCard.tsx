'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Game } from '@/constants/games';
import { getGameScreenshot, createEmojiDataURI } from '@/lib/screenshot';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
  variant?: 'default' | 'compact';
}

export function GameCard({ game, onClick, variant = 'default' }: GameCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get screenshot URL or fallback to emoji
  const getImageSrc = () => {
    if (imageError || !game.iframeUrl) {
      return createEmojiDataURI(game.image, 400);
    }

    // Try screenshot if available
    if (game.screenshot) {
      return game.screenshot;
    }

    // Generate screenshot from game URL
    return getGameScreenshot(game.iframeUrl);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <button
      onClick={() => onClick(game)}
      className="group bg-muted/30 border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all transform hover:scale-105 text-left w-full"
      title={game.title}
    >
      {/* Game Screenshot/Image */}
      <div className={`aspect-video bg-gradient-to-br ${game.bgColor} flex items-center justify-center border-b border-border/50 relative overflow-hidden`}>
        {/* Loading state */}
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 animate-pulse">
            <div className="text-4xl">{game.image}</div>
          </div>
        )}

        {/* Screenshot or Emoji fallback */}
        {imageError ? (
          // Fallback to emoji if screenshot fails
          <div className="text-5xl group-hover:scale-110 transition-transform">
            {game.image}
          </div>
        ) : (
          // Try to load screenshot
          <Image
            src={getImageSrc()}
            alt={game.name}
            fill
            className={`object-cover group-hover:scale-105 transition-transform ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            unoptimized // For external URLs
          />
        )}

        {/* Overlay with game emoji on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-6xl animate-bounce">
            {game.image}
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-3">
        <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {game.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
          {game.shortDesc}
        </p>

        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm">⭐</span>
            <span className="text-sm font-semibold">{game.rating}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1">
            {game.trending && (
              <span className="text-xs bg-orange-500/20 text-orange-500 px-1.5 py-0.5 rounded">
                🔥
              </span>
            )}
            {game.new && (
              <span className="text-xs bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded">
                NEW
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        {variant === 'default' && (
          <div className="flex flex-wrap gap-1 mt-2">
            {game.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}

/**
 * Compact variant for sidebar
 */
export function GameCardCompact({ game, onClick }: Omit<GameCardProps, 'variant'>) {
  const [imageError, setImageError] = useState(false);

  const getImageSrc = () => {
    if (imageError || !game.iframeUrl) {
      return createEmojiDataURI(game.image, 200);
    }
    return game.screenshot || getGameScreenshot(game.iframeUrl);
  };

  return (
    <button
      onClick={() => onClick(game)}
      className="group block bg-muted/30 rounded-xl overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all hover:shadow-lg w-full text-left"
      title={game.title}
    >
      <div className={`aspect-square bg-gradient-to-br ${game.bgColor} flex items-center justify-center border-b border-border/50 relative overflow-hidden`}>
        {imageError ? (
          <div className="text-4xl group-hover:scale-110 transition-transform">
            {game.image}
          </div>
        ) : (
          <Image
            src={getImageSrc()}
            alt={game.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            onError={() => setImageError(true)}
            unoptimized
          />
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-5xl animate-bounce">
            {game.image}
          </div>
        </div>
      </div>

      <div className="p-2">
        <h4 className="font-bold text-xs mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {game.name}
        </h4>
        <div className="flex items-center justify-between text-xs">
          <p className="text-muted-foreground line-clamp-1">
            {game.shortDesc}
          </p>
          <div className="flex items-center gap-0.5">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">{game.rating}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

/**
 * List item variant for sidebar quick links
 */
export function GameListItem({ game, onClick }: Omit<GameCardProps, 'variant'>) {
  const [imageError, setImageError] = useState(false);

  const getImageSrc = () => {
    if (imageError || !game.iframeUrl) {
      return createEmojiDataURI(game.image, 100);
    }
    return game.screenshot || getGameScreenshot(game.iframeUrl);
  };

  return (
    <button
      onClick={() => onClick(game)}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group w-full text-left"
      title={game.title}
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${game.bgColor} flex items-center justify-center text-xl flex-shrink-0 relative overflow-hidden`}>
        {imageError ? (
          game.image
        ) : (
          <Image
            src={getImageSrc()}
            alt={game.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-1">
          {game.name}
        </h4>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 text-xs">⭐</span>
          <span className="text-xs font-semibold">{game.rating}</span>
          {game.trending && <span className="text-xs ml-1">🔥</span>}
        </div>
      </div>
    </button>
  );
}
