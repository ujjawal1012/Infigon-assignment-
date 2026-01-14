import { Suspense } from 'react';
import ProductList from '@/components/ProductList';
import LoadingSkeleton from '@/components/LoadingSkeleton';

export const metadata = {
  title: 'Product Explorer - Discover Amazing Products',
  description: 'Browse and explore our collection of amazing products',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Product Explorer
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover amazing products from our collection
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingSkeleton />}>
          <ProductList />
        </Suspense>
      </main>
    </div>
  );
}
