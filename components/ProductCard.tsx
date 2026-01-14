'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { isFavorite, toggleFavorite } from '@/lib/storage';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(product.id));
    
    const handleFavoritesChange = () => {
      setIsFav(isFavorite(product.id));
    };
    
    window.addEventListener('favorites-changed', handleFavoritesChange);
    window.addEventListener('storage', handleFavoritesChange);
    
    return () => {
      window.removeEventListener('favorites-changed', handleFavoritesChange);
      window.removeEventListener('storage', handleFavoritesChange);
    };
  }, [product.id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <button
        onClick={handleFavoriteClick}
        className="absolute right-2 top-2 z-10 rounded-full bg-white/90 p-2 shadow-sm transition-all hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart
          className={`h-5 w-5 transition-colors ${
            isFav
              ? 'fill-red-500 text-red-500'
              : 'text-gray-400 group-hover:text-red-400'
          }`}
        />
      </button>

      <div className="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium text-blue-600 dark:text-blue-400">
          {product.category}
        </p>
        <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
          {product.title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <span className="text-orange-500">★</span>
            <span>{product.rating.rate}</span>
            <span className="text-gray-400">({product.rating.count})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
