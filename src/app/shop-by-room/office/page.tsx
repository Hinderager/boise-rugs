import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Office Rugs | Professional Area Rugs for Home Office | Boise Rugs",
  description: "Create a professional, comfortable workspace with our office rugs. Low-pile, chair-friendly designs that protect floors and reduce noise. Free shipping on all orders.",
  keywords: "office rugs, home office rugs, desk chair mats, office area rugs, low pile rugs, workspace rugs, Boise",
  openGraph: {
    title: "Office Rugs | Professional Area Rugs for Home Office",
    description: "Create a professional, comfortable workspace with our office rugs. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/office",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function OfficeRugsPage() {
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
            <span className="text-gray-900 font-medium">Office</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Office Rugs
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-6">
              Enhance your workspace with professional office rugs that define your area, protect your floors, and provide comfort during long work days. Chair-friendly and stylish.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Low-pile, chair-friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Reduces noise</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Professional styles</span>
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
              Choosing the Perfect Office Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                The right office rug can transform your workspace, defining your work area while protecting floors from desk chairs. Low-pile rugs are essential for allowing chairs to roll smoothly while adding warmth and reducing echo.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Size Recommendations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Small desk:</strong> 4x6 or 5x7 under desk area</li>
                    <li><strong>Standard workspace:</strong> 6x9 or 8x10</li>
                    <li><strong>Large office:</strong> 9x12 to define entire space</li>
                    <li><strong>Pro tip:</strong> Rug should extend beyond chair movement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best Materials</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Low-pile synthetic:</strong> Chair glides easily, durable</li>
                    <li><strong>Flatweave:</strong> Smooth surface, won\'t snag</li>
                    <li><strong>Wool blend:</strong> Professional look, natural durability</li>
                    <li><strong>Commercial grade:</strong> Built for heavy use</li>
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
              title="Office Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
