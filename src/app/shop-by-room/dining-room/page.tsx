import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dining Room Rugs | Elegant Area Rugs for Dining Spaces | Boise Rugs",
  description: "Anchor your dining space with beautiful, durable dining room rugs. Stain-resistant, easy-clean materials perfect for under dining tables. Free shipping on all orders.",
  keywords: "dining room rugs, dining area rugs, dining table rugs, stain resistant rugs, easy clean rugs, formal dining rugs, Boise",
  openGraph: {
    title: "Dining Room Rugs | Elegant Area Rugs for Dining Spaces",
    description: "Anchor your dining space with beautiful, durable dining room rugs. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/dining-room",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function DiningRoomRugsPage() {
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
            <span className="text-gray-900 font-medium">Dining Room</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-900 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dining Room Rugs
            </h1>
            <p className="text-lg md:text-xl text-rose-200 mb-6">
              Elevate your dining experience with rugs that define your space and protect your floors. Our dining room rugs are designed to handle spills and chair movement with style.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Stain-resistant materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Easy to clean</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Chair-friendly design</span>
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
              Choosing the Perfect Dining Room Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                A dining room rug anchors your table and chairs, defines the eating area, and protects your flooring from chair scratches and food spills. The key is choosing a size that extends beyond the chairs when pulled out.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sizing Guide</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Round table (4-seat):</strong> 6\' round or 6x6 rug</li>
                    <li><strong>Rectangle table (4-6 seat):</strong> 6x9 or 8x10</li>
                    <li><strong>Large table (8+ seat):</strong> 9x12 or larger</li>
                    <li><strong>Rule:</strong> Rug extends 24-30" beyond table on all sides</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Material Considerations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Low-pile:</strong> Chairs slide easily, won\'t catch</li>
                    <li><strong>Stain-resistant:</strong> Treated to repel spills</li>
                    <li><strong>Flatweave:</strong> Easy to clean, durable</li>
                    <li><strong>Indoor/outdoor:</strong> Ultimate spill protection</li>
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
              title="Dining Room Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
