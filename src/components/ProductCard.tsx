'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';

export interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  colors?: string[];
  freeShipping?: boolean;
  badge?: string;
  href?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  colors = [],
  freeShipping = true,
  badge,
  href = `/product/${id}`
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <Link href={href} className="block relative aspect-[361/464] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
              {discount}% OFF
            </span>
          )}
          {badge && (
            <span className="bg-[#00857E] text-white px-2 py-1 text-xs font-bold rounded">
              {badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-5 h-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>

        {/* Free Shipping Badge */}
        {freeShipping && (
          <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full shadow-sm">
            <span className="text-xs font-semibold text-[#00857E]">Free Shipping</span>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <Link href={href}>
          <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 hover:text-[#00857E] transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          {renderStars(rating)}
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {colors.length > 0 && (
          <div className="flex items-center gap-2">
            {colors.slice(0, 5).map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColorIndex(index)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColorIndex === index
                    ? 'border-[#00857E] scale-110'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Color option ${index + 1}`}
              />
            ))}
            {colors.length > 5 && (
              <span className="text-xs text-gray-500 ml-1">+{colors.length - 5}</span>
            )}
          </div>
        )}

        {/* Quick Add Button (shown on hover) */}
        <button className="w-full mt-3 bg-[#00857E] text-white py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#006d66] font-medium text-sm">
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
