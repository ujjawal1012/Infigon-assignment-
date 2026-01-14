'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { toggleFavorite, isFavorite } from '@/lib/storage';

interface ProductDetailsClientProps {
  productId: number;
}

export default function ProductDetailsClient({
  productId,
}: ProductDetailsClientProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(productId));
    
    const handleFavoritesChange = () => {
      setIsFav(isFavorite(productId));
    };
    
    window.addEventListener('favorites-changed', handleFavoritesChange);
    window.addEventListener('storage', handleFavoritesChange);
    
    return () => {
      window.removeEventListener('favorites-changed', handleFavoritesChange);
      window.removeEventListener('storage', handleFavoritesChange);
    };
  }, [productId]);

  const handleFavoriteToggle = () => {
    toggleFavorite(productId);
  };

  return (
    <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
      <button
        onClick={handleFavoriteToggle}
        className={`flex w-full items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors ${
          isFav
            ? 'border-red-500 bg-red-50 text-red-700 dark:border-red-400 dark:bg-red-900/20 dark:text-red-400'
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart
          className={`h-5 w-5 ${
            isFav ? 'fill-red-500 text-red-500' : 'text-gray-400'
          }`}
        />
        <span>{isFav ? 'Remove from Favorites' : 'Add to Favorites'}</span>
      </button>
    </div>
  );
}
