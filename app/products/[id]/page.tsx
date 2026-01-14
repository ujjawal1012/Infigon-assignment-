import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProductById, fetchProducts } from '@/lib/api';
import { ArrowLeft, Heart } from 'lucide-react';
import ProductDetailsClient from '@/components/ProductDetailsClient';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  try {
    const products = await fetchProducts();
    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  try {
    const product = await fetchProductById(Number.parseInt(id));
    return {
      title: `${product.title} - Product Explorer`,
      description: product.description,
    };
  } catch {
    return {
      title: 'Product Not Found - Product Explorer',
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number.parseInt(id);

  if (Number.isNaN(productId)) {
    notFound();
  }

  let product;
  try {
    product = await fetchProductById(productId);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            </div>

          <div className="flex flex-col space-y-6">
            <div>
              <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                {product.category}
              </p>
              <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                {product.title}
              </h1>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1 dark:bg-gray-800">
                  <span className="text-orange-500">★</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {product.rating.rate}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
              <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Description
              </h2>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
            </div>

            <ProductDetailsClient productId={product.id} />
          </div>
        </div>
      </main>
    </div>
  );
}
