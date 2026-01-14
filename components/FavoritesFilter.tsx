'use client';

import { Heart } from 'lucide-react';

interface FavoritesFilterProps {
  showFavorites: boolean;
  onToggle: () => void;
  favoritesCount: number;
}

export default function FavoritesFilter({
  showFavorites,
  onToggle,
  favoritesCount,
}: FavoritesFilterProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
        showFavorites
          ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/20 dark:text-blue-400'
          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
      }`}
      aria-label="Toggle favorites filter"
    >
      <Heart
        className={`h-4 w-4 ${
          showFavorites ? 'fill-red-500 text-red-500' : 'text-gray-400'
        }`}
      />
      <span>Favorites</span>
      {favoritesCount > 0 && (
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs dark:bg-blue-900/50">
          {favoritesCount}
        </span>
      )}
    </button>
  );
}
