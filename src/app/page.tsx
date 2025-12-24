import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedCollections from '@/components/FeaturedCollections';
import StyleSelector from '@/components/StyleSelector';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Boise Rugs - Up to 80% Off Designer Rugs | Free Shipping',
  description: 'Shop premium area rugs in Boise, ID. Save up to 80% on designer rugs with free shipping. Persian, washable, outdoor, and kids rugs. Lightning deals daily.',
};

// Lightning deals sample data
const lightningDeals = [
  {
    id: '1',
    name: 'Vintage Persian Rug 8x10',
    price: 299.99,
    originalPrice: 1499.99,
    image: 'https://placehold.co/361x464/8B4513/white?text=Persian+Rug',
    rating: 4.8,
    reviewCount: 124,
    badge: '80% OFF',
    freeShipping: true,
  },
  {
    id: '2',
    name: 'Modern Geometric Runner 2x8',
    price: 79.99,
    originalPrice: 249.99,
    image: 'https://placehold.co/361x464/4A5568/white?text=Geometric',
    rating: 4.6,
    reviewCount: 89,
    badge: '68% OFF',
    freeShipping: true,
  },
  {
    id: '3',
    name: 'Washable Area Rug 5x7',
    price: 149.99,
    originalPrice: 449.99,
    image: 'https://placehold.co/361x464/3B82F6/white?text=Washable',
    rating: 4.9,
    reviewCount: 203,
    badge: '67% OFF',
    freeShipping: true,
  },
  {
    id: '4',
    name: 'Outdoor Patio Rug 6x9',
    price: 129.99,
    originalPrice: 399.99,
    image: 'https://placehold.co/361x464/10B981/white?text=Outdoor',
    rating: 4.7,
    reviewCount: 156,
    badge: '67% OFF',
    freeShipping: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Lightning Deals Section */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">Lightning Deals</h2>
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg text-gray-600">Limited time offers - Save up to 80%</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lightningDeals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Room Category Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Room</h2>
            <p className="mt-2 text-lg text-gray-600">Find the perfect rug for every space in your home</p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedCollections />
        </div>
      </section>

      {/* Style Selector */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Style</h2>
            <p className="mt-2 text-lg text-gray-600">Discover rugs that match your aesthetic</p>
          </div>
          <StyleSelector />
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-12 bg-[#00857E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-teal-100">On all orders over $99</p>
            </div>

            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-teal-100">Premium materials & craftsmanship</p>
            </div>

            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-teal-100">30-day hassle-free returns</p>
            </div>

            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price Promise</h3>
              <p className="text-teal-100">Up to 80% off retail prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated on New Deals</h2>
          <p className="text-gray-600 mb-6">Get exclusive discounts and be the first to know about new arrivals</p>

          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-lg flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-[#00857E]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#00857E] text-white font-semibold rounded-lg hover:bg-[#006d66] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
