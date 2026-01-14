'use client';

import { useState, useEffect } from 'react';
import { getFavorites } from './storage';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      setFavorites(getFavorites());
    };

    loadFavorites();

    const handleStorageChange = () => {
      loadFavorites();
    };

    window.addEventListener('favorites-changed', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('favorites-changed', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return favorites;
}
