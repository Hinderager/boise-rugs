'use client';

import { useState } from 'react';
import { Heart, Truck, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface ProductInfoProps {
  product: {
    name: string;
    category: string;
    isBestSeller?: boolean;
    rating: number;
    reviewCount: number;
    originalPrice: number;
    salePrice: number;
    colors: { name: string; hex: string }[];
    sizes: string[];
    estimatedDelivery: string;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [addRugPad, setAddRugPad] = useState(false);

  const savings = product.originalPrice - product.salePrice;
  const discountPercentage = Math.round((savings / product.originalPrice) * 100);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:text-[#00857E]">
          Home
        </Link>
        <span>/</span>
        <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-[#00857E]">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Best Seller Badge */}
      {product.isBestSeller && (
        <div className="inline-block bg-[#00857E] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          BEST SELLER
        </div>
      )}

      {/* Product Title and Wishlist */}
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex-1 pr-4">
          {product.name}
        </h1>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-3 mb-6">
        {renderStars(product.rating)}
        <span className="text-gray-600">
          ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl font-bold text-gray-900">
            ${product.salePrice.toFixed(2)}
          </span>
          <span className="text-xl text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="bg-red-100 text-red-700 text-sm font-semibold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </span>
        </div>
        <p className="text-green-600 font-medium">
          Save ${savings.toFixed(2)}
        </p>
      </div>

      {/* Size Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Size
        </label>
        <div className="relative">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 pr-10 bg-white hover:border-[#00857E] focus:border-[#00857E] focus:outline-none focus:ring-2 focus:ring-[#00857E]/20 transition-colors"
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
        </div>
      </div>

      {/* Color Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Color: {selectedColor.name}
        </label>
        <div className="flex items-center gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? 'border-[#00857E] ring-2 ring-[#00857E]/30 scale-110'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Quantity
        </label>
        <div className="relative w-32">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 pr-10 bg-white hover:border-[#00857E] focus:border-[#00857E] focus:outline-none focus:ring-2 focus:ring-[#00857E]/20 transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
        </div>
      </div>

      {/* Rug Pad Option */}
      <div className="mb-6">
        <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#00857E] transition-colors">
          <input
            type="checkbox"
            checked={addRugPad}
            onChange={(e) => setAddRugPad(e.target.checked)}
            className="w-5 h-5 text-[#00857E] rounded border-gray-300 focus:ring-[#00857E]"
          />
          <div className="flex-1">
            <span className="block text-sm font-semibold text-gray-900">
              Add Rug Pad
            </span>
            <span className="block text-xs text-gray-600">
              Recommended for extra cushion and to prevent slipping
            </span>
          </div>
          <span className="text-sm font-semibold text-gray-900">+$29.99</span>
        </label>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-[#00857E] hover:bg-[#006d67] text-white font-semibold py-4 px-6 rounded-lg transition-colors mb-4 text-lg">
        Add to Cart
      </button>

      {/* Free Shipping Badge */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-3">
        <div className="bg-[#00857E] p-2 rounded-lg">
          <Truck className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Free Shipping</p>
          <p className="text-sm text-gray-600">
            Estimated delivery: {product.estimatedDelivery}
          </p>
        </div>
      </div>
    </div>
  );
}
