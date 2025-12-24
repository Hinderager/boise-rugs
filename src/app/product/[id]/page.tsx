import { Metadata } from 'next';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import ProductDetails from '@/components/ProductDetails';
import ProductReviews from '@/components/ProductReviews';
import RelatedProducts from '@/components/RelatedProducts';

// Generate static params for known product IDs
export async function generateStaticParams() {
  // In a real app, fetch from database or API
  return [
    { id: 'modern-abstract-teal-rug' },
    { id: 'bohemian-vintage-runner' },
    { id: 'contemporary-geometric-rug' },
  ];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  // In a real app, fetch product data
  const { id } = await params;
  const productName = id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${productName} - Boise Rugs`,
    description: `Shop the ${productName} at Boise Rugs. Free shipping, 30-day returns, and expert customer service.`,
    openGraph: {
      title: `${productName} - Boise Rugs`,
      description: `Shop the ${productName} at Boise Rugs. Free shipping, 30-day returns, and expert customer service.`,
      images: [
        {
          url: 'https://placehold.co/1200x630/00857E/white?text=Rug+Product',
          width: 1200,
          height: 630,
          alt: productName,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // In a real app, fetch product data from database or API based on params.id
  // For now, using sample data
  const productData = {
    name: 'Modern Abstract Teal Area Rug',
    category: 'Contemporary',
    isBestSeller: true,
    rating: 4.5,
    reviewCount: 127,
    originalPrice: 499.99,
    salePrice: 349.99,
    colors: [
      { name: 'Teal', hex: '#00857E' },
      { name: 'Gray', hex: '#6B7280' },
      { name: 'Beige', hex: '#D4C5B9' },
      { name: 'Navy', hex: '#1E3A8A' },
    ],
    sizes: [
      "2' x 3'",
      "3' x 5'",
      "4' x 6'",
      "5' x 7'",
      "6' x 9'",
      "8' x 10'",
      "9' x 12'",
      "Runner 2' x 8'",
      'Round 4ft',
      'Round 6ft',
    ],
    estimatedDelivery: 'Dec 28-30, 2025',
  };

  const productImages = [
    'https://placehold.co/600x800/00857E/white?text=Rug+Main',
    'https://placehold.co/600x800/00857E/white?text=Rug+Detail+1',
    'https://placehold.co/600x800/00857E/white?text=Rug+Detail+2',
    'https://placehold.co/600x800/00857E/white?text=Rug+Lifestyle',
    'https://placehold.co/600x800/00857E/white?text=Rug+Close-up',
    'https://placehold.co/600x800/00857E/white?text=Rug+Back',
  ];

  const productDescription = `Transform your living space with this stunning Modern Abstract Teal Area Rug. Featuring a contemporary design with bold geometric patterns and a rich teal color palette, this rug serves as the perfect focal point for any room.

Crafted with premium materials and expert craftsmanship, this rug combines style with durability. The soft pile height provides comfortable underfoot feel while maintaining its beautiful appearance even in high-traffic areas.

Perfect for living rooms, bedrooms, dining rooms, or home offices, this versatile rug complements both modern and transitional decor styles. The abstract design adds visual interest without overwhelming your space, while the teal tones bring a refreshing pop of color that pairs beautifully with neutral furnishings.`;

  const specifications = {
    material: '100% Polypropylene',
    pileHeight: '0.4 inches (Low Pile)',
    construction: 'Machine Woven',
    origin: 'Turkey',
    careInstructions:
      'Vacuum regularly without beater bar. Spot clean with mild detergent. Professional cleaning recommended annually.',
  };

  const shipping = {
    freeShipping: true,
    returnPolicy:
      'We offer a 30-day return policy. Rugs must be in original condition with tags attached. Return shipping is free for defective items.',
    deliveryTime: '3-5 business days',
  };

  const reviewsData = {
    overallRating: 4.5,
    totalReviews: 127,
    ratingBreakdown: {
      5: 85,
      4: 28,
      3: 10,
      2: 3,
      1: 1,
    },
    reviews: [
      {
        id: '1',
        userName: 'Sarah M.',
        date: 'December 18, 2025',
        rating: 5,
        title: 'Absolutely Love This Rug!',
        text: 'This rug exceeded my expectations! The colors are vibrant and true to the photos. The quality is excellent and it feels soft underfoot. It really ties my living room together. Highly recommend!',
        helpful: 24,
      },
      {
        id: '2',
        userName: 'Michael R.',
        date: 'December 10, 2025',
        rating: 5,
        title: 'Perfect for My Home Office',
        text: 'Great quality rug at a fantastic price. The abstract design adds character to my home office without being distracting. Easy to clean and maintain. Very happy with this purchase.',
        helpful: 18,
      },
      {
        id: '3',
        userName: 'Jessica L.',
        date: 'December 5, 2025',
        rating: 4,
        title: 'Beautiful Design, Good Quality',
        text: 'Really beautiful rug with a modern aesthetic. The only reason I did not give it 5 stars is that it is a bit thinner than I expected, but it still looks great and serves its purpose well.',
        helpful: 12,
      },
      {
        id: '4',
        userName: 'David K.',
        date: 'November 28, 2025',
        rating: 5,
        title: 'Best Purchase This Year',
        text: 'I have been looking for the perfect rug for months and finally found it! The teal color is gorgeous and matches my decor perfectly. Shipping was fast and the rug arrived in perfect condition.',
        helpful: 9,
      },
    ],
  };

  const relatedProducts = [
    {
      id: 'bohemian-vintage-runner',
      name: 'Bohemian Vintage Runner',
      category: 'Vintage',
      price: 199.99,
      originalPrice: 299.99,
      image: 'https://placehold.co/300x400/8B5A3C/white?text=Vintage+Runner',
      rating: 4.7,
      reviewCount: 89,
    },
    {
      id: 'contemporary-geometric-rug',
      name: 'Contemporary Geometric Rug',
      category: 'Contemporary',
      price: 279.99,
      image: 'https://placehold.co/300x400/4A5568/white?text=Geometric+Rug',
      rating: 4.3,
      reviewCount: 56,
    },
    {
      id: 'scandinavian-minimal-rug',
      name: 'Scandinavian Minimal Rug',
      category: 'Modern',
      price: 399.99,
      originalPrice: 549.99,
      image: 'https://placehold.co/300x400/E5E7EB/333?text=Minimal+Rug',
      rating: 4.8,
      reviewCount: 142,
    },
    {
      id: 'traditional-persian-rug',
      name: 'Traditional Persian Rug',
      category: 'Traditional',
      price: 599.99,
      image: 'https://placehold.co/300x400/7C2D12/white?text=Persian+Rug',
      rating: 4.9,
      reviewCount: 203,
    },
    {
      id: 'coastal-blue-area-rug',
      name: 'Coastal Blue Area Rug',
      category: 'Coastal',
      price: 329.99,
      originalPrice: 459.99,
      image: 'https://placehold.co/300x400/1E40AF/white?text=Coastal+Rug',
      rating: 4.4,
      reviewCount: 78,
    },
    {
      id: 'shag-plush-cream-rug',
      name: 'Shag Plush Cream Rug',
      category: 'Shag',
      price: 449.99,
      image: 'https://placehold.co/300x400/F5F5DC/333?text=Shag+Rug',
      rating: 4.6,
      reviewCount: 112,
    },
    {
      id: 'moroccan-trellis-rug',
      name: 'Moroccan Trellis Rug',
      category: 'Moroccan',
      price: 259.99,
      originalPrice: 379.99,
      image: 'https://placehold.co/300x400/92400E/white?text=Moroccan+Rug',
      rating: 4.5,
      reviewCount: 94,
    },
    {
      id: 'farmhouse-braided-rug',
      name: 'Farmhouse Braided Rug',
      category: 'Farmhouse',
      price: 189.99,
      image: 'https://placehold.co/300x400/78716C/white?text=Braided+Rug',
      rating: 4.2,
      reviewCount: 67,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Product Section - Image Gallery + Product Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Image Gallery (40%) */}
          <div className="lg:col-span-2">
            <ProductImageGallery images={productImages} productName={productData.name} />
          </div>

          {/* Right Column - Product Info (60%) */}
          <div className="lg:col-span-3">
            <ProductInfo product={productData} />
          </div>
        </div>
      </div>

      {/* Product Details Accordion */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetails
          description={productDescription}
          specifications={specifications}
          shipping={shipping}
        />
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductReviews
          overallRating={reviewsData.overallRating}
          totalReviews={reviewsData.totalReviews}
          ratingBreakdown={reviewsData.ratingBreakdown}
          reviews={reviewsData.reviews}
        />
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <RelatedProducts products={relatedProducts} />
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: productData.name,
            image: productImages,
            description: productDescription,
            brand: {
              '@type': 'Brand',
              name: 'Boise Rugs',
            },
            offers: {
              '@type': 'Offer',
              price: productData.salePrice,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              priceValidUntil: '2026-12-31',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: reviewsData.overallRating,
              reviewCount: reviewsData.totalReviews,
            },
          }),
        }}
      />
    </main>
  );
}
