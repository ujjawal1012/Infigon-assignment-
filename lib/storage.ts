const FAVORITES_KEY = 'product-favorites';

export function getFavorites(): number[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error reading favorites from localStorage:', error);
    return [];
  }
}

export function addFavorite(productId: number): void {
  if (typeof window === 'undefined') return;
  
  try {
    const favorites = getFavorites();
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding favorite to localStorage:', error);
  }
}

export function removeFavorite(productId: number): void {
  if (typeof window === 'undefined') return;
  
  try {
    const favorites = getFavorites();
    const updated = favorites.filter((id) => id !== productId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error removing favorite from localStorage:', error);
  }
}

export function isFavorite(productId: number): boolean {
  const favorites = getFavorites();
  return favorites.includes(productId);
}

export function toggleFavorite(productId: number): void {
  if (isFavorite(productId)) {
    removeFavorite(productId);
  } else {
    addFavorite(productId);
  }
  
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('favorites-changed'));
  }
}
