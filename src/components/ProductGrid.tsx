'use client';

import React, { useState } from 'react';
import ProductCard, { ProductCardProps } from './ProductCard';
import { ChevronLeft, ChevronRight, Grid3x3, LayoutGrid } from 'lucide-react';

interface ProductGridProps {
  products?: ProductCardProps[];
  title?: string;
  showSorting?: boolean;
  showPagination?: boolean;
}

// Sample product data
const sampleProducts: ProductCardProps[] = [
  {
    id: '1',
    name: 'Moroccan Geometric Area Rug - Blue & Ivory',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+1',
    price: 129.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviewCount: 342,
    colors: ['#3B82F6', '#F3F4F6', '#6B7280', '#92400E'],
    freeShipping: true,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Modern Abstract Rug - Gray & Gold',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+2',
    price: 189.99,
    originalPrice: 449.99,
    rating: 5,
    reviewCount: 218,
    colors: ['#6B7280', '#D4C5B9', '#FFFFFF'],
    freeShipping: true
  },
  {
    id: '3',
    name: 'Persian Traditional Oriental Rug',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+3',
    price: 249.99,
    originalPrice: 599.99,
    rating: 4,
    reviewCount: 156,
    colors: ['#EF4444', '#92400E', '#D4C5B9', '#000000', '#3B82F6'],
    freeShipping: true,
    badge: 'New Arrival'
  },
  {
    id: '4',
    name: 'Natural Jute Braided Round Rug',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+4',
    price: 89.99,
    rating: 4.5,
    reviewCount: 89,
    colors: ['#D4C5B9', '#92400E'],
    freeShipping: true
  },
  {
    id: '5',
    name: 'Contemporary Geometric Runner - Navy',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+5',
    price: 159.99,
    originalPrice: 279.99,
    rating: 4.5,
    reviewCount: 234,
    colors: ['#1E40AF', '#FFFFFF', '#6B7280'],
    freeShipping: true
  },
  {
    id: '6',
    name: 'Vintage Distressed Area Rug - Beige',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+6',
    price: 199.99,
    originalPrice: 399.99,
    rating: 5,
    reviewCount: 445,
    colors: ['#D4C5B9', '#92400E', '#6B7280'],
    freeShipping: true,
    badge: 'Top Rated'
  },
  {
    id: '7',
    name: 'Outdoor Patio Rug - Turquoise',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+7',
    price: 119.99,
    originalPrice: 229.99,
    rating: 4,
    reviewCount: 178,
    colors: ['#00857E', '#FFFFFF', '#6B7280'],
    freeShipping: true
  },
  {
    id: '8',
    name: 'Kids Playroom Alphabet Rug',
    image: 'https://placehold.co/361x464/00857E/white?text=Rug+8',
    price: 79.99,
    rating: 4.5,
    reviewCount: 267,
    colors: ['#EF4444', '#3B82F6', '#10B981', '#FBBF24'],
    freeShipping: true,
    badge: 'Kids'
  }
];

const ProductGrid: React.FC<ProductGridProps> = ({
  products = sampleProducts,
  title = 'Featured Rugs',
  showSorting = true,
  showPagination = true
}) => {
  const [sortBy, setSortBy] = useState('relevance');
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  const [gridCols, setGridCols] = useState(4);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Title and Count */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-600 mt-1">{products.length} products</p>
            </div>

            {/* Controls */}
            {showSorting && (
              <div className="flex flex-wrap items-center gap-4">
                {/* Grid View Toggle */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-2 ${gridCols === 3 ? 'bg-[#00857E] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    aria-label="3 columns"
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`p-2 ${gridCols === 4 ? 'bg-[#00857E] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    aria-label="4 columns"
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                </div>

                {/* Sort By */}
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00857E]"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="size">Size</option>
                    <option value="new">New Arrivals</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>

                {/* Items Per Page */}
                <div className="flex items-center gap-2">
                  <label htmlFor="perPage" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    Show:
                  </label>
                  <select
                    id="perPage"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00857E]"
                  >
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                    <option value={48}>48</option>
                    <option value={84}>84</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridCols} gap-6`}>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {displayedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button className="mt-4 text-[#00857E] hover:text-[#006d66] font-medium">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        currentPage === page
                          ? 'bg-[#00857E] text-white'
                          : 'border border-gray-300 hover:bg-white'
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2">...</span>;
                }
                return null;
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Results Info */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} results
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
