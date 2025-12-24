'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Style {
  id: string;
  name: string;
  image: string;
  description: string;
  productCount: number;
  href: string;
}

interface StyleSelectorProps {
  title?: string;
  subtitle?: string;
  styles?: Style[];
  onStyleSelect?: (styleId: string) => void;
}

const defaultStyles: Style[] = [
  {
    id: 'persian',
    name: 'Persian',
    image: 'https://placehold.co/300x400/00857E/white?text=Persian',
    description: 'Intricate patterns and rich colors',
    productCount: 1245,
    href: '/styles/persian'
  },
  {
    id: 'modern',
    name: 'Modern',
    image: 'https://placehold.co/300x400/00857E/white?text=Modern',
    description: 'Clean lines and contemporary designs',
    productCount: 2156,
    href: '/styles/modern'
  },
  {
    id: 'natural',
    name: 'Natural',
    image: 'https://placehold.co/300x400/00857E/white?text=Natural',
    description: 'Organic materials and earthy tones',
    productCount: 876,
    href: '/styles/natural'
  },
  {
    id: 'geometric',
    name: 'Geometric',
    image: 'https://placehold.co/300x400/00857E/white?text=Geometric',
    description: 'Bold shapes and patterns',
    productCount: 1534,
    href: '/styles/geometric'
  },
  {
    id: 'solid',
    name: 'Solid',
    image: 'https://placehold.co/300x400/00857E/white?text=Solid',
    description: 'Single color, timeless appeal',
    productCount: 1987,
    href: '/styles/solid'
  },
  {
    id: 'traditional',
    name: 'Traditional',
    image: 'https://placehold.co/300x400/00857E/white?text=Traditional',
    description: 'Classic designs and motifs',
    productCount: 1678,
    href: '/styles/traditional'
  },
  {
    id: 'moroccan',
    name: 'Moroccan',
    image: 'https://placehold.co/300x400/00857E/white?text=Moroccan',
    description: 'Exotic patterns and textures',
    productCount: 945,
    href: '/styles/moroccan'
  },
  {
    id: 'vintage',
    name: 'Vintage',
    image: 'https://placehold.co/300x400/00857E/white?text=Vintage',
    description: 'Distressed and aged appearance',
    productCount: 1234,
    href: '/styles/vintage'
  },
  {
    id: 'braided',
    name: 'Braided',
    image: 'https://placehold.co/300x400/00857E/white?text=Braided',
    description: 'Textured and rustic charm',
    productCount: 567,
    href: '/styles/braided'
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    image: 'https://placehold.co/300x400/00857E/white?text=Outdoor',
    description: 'Weather-resistant designs',
    productCount: 1123,
    href: '/styles/outdoor'
  }
];

const StyleSelector: React.FC<StyleSelectorProps> = ({
  title = "Shop by Style",
  subtitle = "Find the perfect style to match your home's aesthetic",
  styles = defaultStyles,
  onStyleSelect
}) => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);

  const handleStyleClick = (styleId: string) => {
    setSelectedStyle(styleId);
    onStyleSelect?.(styleId);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {styles.map((style) => (
            <div key={style.id} className="group">
              <Link
                href={style.href}
                onClick={() => handleStyleClick(style.id)}
                onMouseEnter={() => setHoveredStyle(style.id)}
                onMouseLeave={() => setHoveredStyle(null)}
                className={`block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                  selectedStyle === style.id ? 'ring-4 ring-[#00857E]' : ''
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                    hoveredStyle === style.id ? 'opacity-100' : 'opacity-80'
                  }`}></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    {/* Style Name */}
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 drop-shadow-lg">
                      {style.name}
                    </h3>

                    {/* Description - shows on hover */}
                    <p className={`text-gray-200 text-xs md:text-sm mb-2 transition-all duration-300 ${
                      hoveredStyle === style.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {style.description}
                    </p>

                    {/* Product Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 text-xs font-medium">
                        {style.productCount.toLocaleString()} rugs
                      </span>

                      {/* Arrow Icon */}
                      <div className={`w-8 h-8 bg-[#00857E] rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredStyle === style.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                      }`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedStyle === style.id && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-[#00857E] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Styles Button */}
        <div className="text-center mt-10">
          <Link
            href="/styles"
            className="inline-block bg-[#00857E] hover:bg-[#006d66] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Explore All Styles
          </Link>
        </div>

        {/* Popular Style Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="text-sm text-gray-600 font-medium">Popular Searches:</span>
          {['Modern', 'Persian', 'Vintage', 'Geometric', 'Outdoor'].map((tag) => (
            <Link
              key={tag}
              href={`/styles/${tag.toLowerCase()}`}
              className="text-sm px-4 py-2 border border-gray-300 rounded-full hover:border-[#00857E] hover:text-[#00857E] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleSelector;
