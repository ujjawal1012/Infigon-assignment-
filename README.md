
## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

5. **Run linting**
   ```bash
   npm run lint
   ```

## ✨ Features Implemented

### Core Features

#### 1. Product Listing Page
- ✅ Fetches products from FakeStore API (`https://fakestoreapi.com/products`)
- ✅ Responsive grid layout (1-4 columns based on screen size)
- ✅ Displays product image, title, price, category, and rating
- ✅ Loading state with skeleton components
- ✅ Error handling with retry functionality
- ✅ Server-side rendering for optimal performance

#### 2. Search & Filtering
- ✅ Real-time search by product title (client-side)
- ✅ Category filtering with button interface
- ✅ Combined filtering (search + category + favorites)
- ✅ Results count display
- ✅ Empty state when no products match filters

#### 3. Product Details Page
- ✅ Dynamic routing using Next.js App Router (`/products/[id]`)
- ✅ Large product image display
- ✅ Full product description
- ✅ Price and rating information
- ✅ Category badge
- ✅ Back navigation to product list
- ✅ SEO-friendly metadata generation
- ✅ Static generation for better performance

#### 4. Favorites Feature
- ✅ Add/remove products to favorites with heart icon
- ✅ Persistent storage using localStorage
- ✅ Filter to show only favorite products
- ✅ Real-time sync across components
- ✅ Favorites count badge
- ✅ Cross-tab synchronization

#### 5. Responsive Design
- ✅ Mobile-first approach
- ✅ Optimized for mobile, tablet, and desktop
- ✅ Touch-friendly interactions
- ✅ Adaptive grid layouts
- ✅ Responsive typography and spacing

### Technical Features

- ✅ **TypeScript** - Fully typed codebase with no `any` types
- ✅ **Next.js App Router** - Modern routing with Server Components
- ✅ **Tailwind CSS** - Utility-first styling with dark mode support
- ✅ **Component Architecture** - Reusable, composable components
- ✅ **State Management** - React hooks with localStorage persistence
- ✅ **Error Handling** - Comprehensive error states and retry mechanisms
- ✅ **Performance** - Image optimization, lazy loading, static generation
- ✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Clean Code** - Well-organized folder structure, no comments

### UI/UX Enhancements

- ✅ Beautiful gradient background theme
- ✅ Smooth transitions and hover effects
- ✅ Orange star ratings for better visibility
- ✅ Dark mode support (system preference)
- ✅ Loading skeletons for better perceived performance
- ✅ Focus states for keyboard navigation
- ✅ Smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **API**: FakeStore API

## 📝 API Endpoints Used

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product
- `GET /products/categories` - Fetch all categories

