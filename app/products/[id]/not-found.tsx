import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-gray-100">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Product Not Found
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </Link>
      </div>
    </div>
  );
}
