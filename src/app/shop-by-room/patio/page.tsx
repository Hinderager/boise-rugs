import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Outdoor Patio Rugs | Weather-Resistant Outdoor Rugs | Boise Rugs",
  description: "Transform your outdoor space with durable, weather-resistant patio rugs. UV-resistant, mold-resistant, and easy to clean. Perfect for patios, decks, and porches. Free shipping.",
  keywords: "outdoor rugs, patio rugs, deck rugs, weather resistant rugs, UV resistant rugs, outdoor area rugs, Boise",
  openGraph: {
    title: "Outdoor Patio Rugs | Weather-Resistant Outdoor Rugs",
    description: "Transform your outdoor space with durable, weather-resistant patio rugs. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/patio",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function PatioRugsPage() {
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
            <span className="text-gray-900 font-medium">Patio</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Outdoor Patio Rugs
            </h1>
            <p className="text-lg md:text-xl text-green-200 mb-6">
              Extend your living space outdoors with weather-resistant patio rugs. Built to withstand the elements while adding style and comfort to your outdoor areas.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>UV & fade resistant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Mold & mildew resistant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Easy to clean</span>
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
              Choosing the Perfect Outdoor Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Outdoor rugs are specially designed to resist fading, mold, and mildew while providing comfort and style to your patio, deck, or porch. They create defined spaces and make your outdoor areas feel more like home.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal Locations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Patios:</strong> Define seating and dining areas</li>
                    <li><strong>Decks:</strong> Add warmth to wood or composite</li>
                    <li><strong>Porches:</strong> Create welcoming entryways</li>
                    <li><strong>Pool areas:</strong> Non-slip, quick-dry options</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Material Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Polypropylene:</strong> Most durable, fade-resistant</li>
                    <li><strong>Recycled plastic:</strong> Eco-friendly, weatherproof</li>
                    <li><strong>All-weather synthetic:</strong> UV protected, easy care</li>
                    <li><strong>Indoor/outdoor:</strong> Versatile, water-resistant</li>
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
              title="Outdoor Patio Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
