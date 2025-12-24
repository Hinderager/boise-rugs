import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Living Room Rugs | Premium Area Rugs for Living Spaces | Boise Rugs",
  description: "Discover beautiful living room rugs that anchor your space with style. Choose from modern, traditional, Persian, and contemporary area rugs. Free shipping on all orders.",
  keywords: "living room rugs, area rugs, living room area rugs, modern living room rugs, traditional rugs, Persian living room rugs, Boise",
  openGraph: {
    title: "Living Room Rugs | Premium Area Rugs for Living Spaces",
    description: "Discover beautiful living room rugs that anchor your space with style. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/living-room",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function LivingRoomRugsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#00857E] transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/shop-by-room" className="text-gray-600 hover:text-[#00857E] transition-colors">
              Shop by Room
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Living Room</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Living Room Rugs
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Transform your living space with the perfect area rug. Our collection features styles that anchor your room, define conversation areas, and add warmth and comfort underfoot.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Popular sizes: 5x7, 6x9, 8x10, 9x12</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Free shipping on all orders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introductory Content */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Choosing the Perfect Living Room Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                The living room is often the heart of your home, where family gathers and guests are welcomed. The right area rug can tie together your furniture, define your seating area, and add texture and warmth to your space.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Size Guide</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Small rooms (10x12):</strong> 5x7 or 6x9 rug</li>
                    <li><strong>Medium rooms (12x15):</strong> 8x10 rug</li>
                    <li><strong>Large rooms (15x18+):</strong> 9x12 or larger</li>
                    <li><strong>Pro tip:</strong> Front furniture legs should rest on the rug</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Style Considerations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Modern spaces:</strong> Geometric patterns, solid colors</li>
                    <li><strong>Traditional rooms:</strong> Persian, Oriental designs</li>
                    <li><strong>Casual living:</strong> Natural fibers, relaxed patterns</li>
                    <li><strong>High traffic:</strong> Low-pile, durable materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Filter + Products */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-4">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid
              title="Living Room Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
