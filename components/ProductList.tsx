'use client';

import { useState, useEffect, useMemo } from 'react';
import { fetchProducts, fetchCategories } from '@/lib/api';
import { Product } from '@/types/product';
import { useFavorites } from '@/lib/hooks';
import ProductCard from './ProductCard';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorState from './ErrorState';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import FavoritesFilter from './FavoritesFilter';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const favorites = useFavorites();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [productsData, categoriesData] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (showFavorites) {
      filtered = filtered.filter((product) => favorites.includes(product.id));
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, showFavorites, favorites]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={loadData} />;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <FavoritesFilter
            showFavorites={showFavorites}
            onToggle={() => setShowFavorites(!showFavorites)}
            favoritesCount={favorites.length}
          />
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="mb-4 text-6xl">🔍</div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
            No products found
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
