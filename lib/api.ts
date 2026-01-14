import { Product } from '@/types/product';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json();
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE_URL}/products/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}
