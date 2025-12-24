'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

interface FeaturedCollectionsProps {
  title?: string;
  subtitle?: string;
  collections?: Collection[];
}

const defaultCollections: Collection[] = [
  {
    id: 'persian',
    title: 'Persian Rugs',
    description: 'Timeless elegance and intricate patterns',
    image: 'https://placehold.co/400x500/00857E/white?text=Persian+Rugs',
    href: '/collections/persian',
    badge: 'Popular'
  },
  {
    id: 'washable',
    title: 'Washable Rugs',
    description: 'Easy care for busy households',
    image: 'https://placehold.co/400x500/00857E/white?text=Washable+Rugs',
    href: '/collections/washable',
    badge: 'New'
  },
  {
    id: 'natural',
    title: 'Natural Rugs',
    description: 'Eco-friendly jute and sisal',
    image: 'https://placehold.co/400x500/00857E/white?text=Natural+Rugs',
    href: '/collections/natural'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Rugs',
    description: 'Weather-resistant and durable',
    image: 'https://placehold.co/400x500/00857E/white?text=Outdoor+Rugs',
    href: '/collections/outdoor'
  },
  {
    id: 'handmade',
    title: 'Handmade Rugs',
    description: 'Artisan-crafted masterpieces',
    image: 'https://placehold.co/400x500/00857E/white?text=Handmade+Rugs',
    href: '/collections/handmade',
    badge: 'Premium'
  },
  {
    id: 'kids',
    title: 'Kids Rugs',
    description: 'Fun designs for playful spaces',
    image: 'https://placehold.co/400x500/00857E/white?text=Kids+Rugs',
    href: '/collections/kids'
  }
];

const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  title = "Featured Collections",
  subtitle = "Curated collections for every style and space",
  collections = defaultCollections
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, collections.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-gray-600">
              {subtitle}
            </p>
          </div>

          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="p-2 border border-gray-300 rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:border-[#00857E]"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 border border-gray-300 rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:border-[#00857E]"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Collections Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3"
              >
                <Link
                  href={collection.href}
                  className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    {collection.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#00857E] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                          {collection.badge}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">
                        {collection.title}
                      </h3>
                      <p className="text-gray-200 text-sm drop-shadow-md">
                        {collection.description}
                      </p>

                      {/* Shop Now Link */}
                      <div className="mt-4 flex items-center text-white font-semibold group-hover:text-[#00857E] transition-colors">
                        <span className="text-sm">Shop Now</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex md:hidden justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(collections.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? 'bg-[#00857E] w-8'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-10">
          <Link
            href="/collections"
            className="inline-block bg-[#00857E] hover:bg-[#006d66] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
