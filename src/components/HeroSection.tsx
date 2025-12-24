import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  discount?: string;
  imageUrl?: string;
  darkOverlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Transform Your Space",
  subtitle = "Discover thousands of premium rugs at unbeatable prices",
  ctaText = "Shop Now",
  ctaLink = "/rugs",
  discount = "Up to 80% OFF",
  imageUrl = "https://placehold.co/1920x600/00857E/white?text=Premium+Rugs+Collection",
  darkOverlay = true
}) => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        {darkOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          {/* Discount Badge */}
          {discount && (
            <div className="inline-block mb-6">
              <span className="bg-[#00857E] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                {discount}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-md">
            {subtitle}
          </p>

          {/* CTA Button */}
          <Link
            href={ctaLink}
            className="inline-block bg-[#00857E] hover:bg-[#006d66] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {ctaText}
          </Link>

          {/* Additional Features */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#00857E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#00857E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#00857E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Expert Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
