import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kitchen Rugs | Durable & Easy-Clean Kitchen Runners | Boise Rugs",
  description: "Shop practical and stylish kitchen rugs. Water-resistant, stain-resistant, and easy to clean. Perfect for adding comfort and style to your kitchen. Free shipping.",
  keywords: "kitchen rugs, kitchen runners, washable kitchen rugs, anti-fatigue rugs, kitchen mats, stain resistant rugs, Boise",
  openGraph: {
    title: "Kitchen Rugs | Durable & Easy-Clean Kitchen Runners",
    description: "Shop practical and stylish kitchen rugs. Water-resistant and easy to clean. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/kitchen",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function KitchenRugsPage() {
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
            <span className="text-gray-900 font-medium">Kitchen</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kitchen Rugs
            </h1>
            <p className="text-lg md:text-xl text-orange-200 mb-6">
              Combine style and practicality with kitchen rugs designed for high-traffic areas. Water-resistant, stain-resistant, and easy to clean – perfect for busy kitchens.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Water & stain resistant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Machine washable options</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Anti-fatigue comfort</span>
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
              Choosing the Perfect Kitchen Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Kitchen rugs need to withstand spills, heavy foot traffic, and frequent cleaning while still looking great. Look for durable, low-pile materials that won\'t trip you up and are easy to maintain.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best Placement</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>In front of sink:</strong> 2x3 or 3x5 anti-fatigue mat</li>
                    <li><strong>Under table:</strong> 5x7 or 6x9 (extends beyond chairs)</li>
                    <li><strong>Galley kitchens:</strong> Long runners (2.5x8 or 2.5x10)</li>
                    <li><strong>Island area:</strong> Round or rectangular accent rugs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Must-Have Features</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Low pile:</strong> Easy to clean, won\'t trap crumbs</li>
                    <li><strong>Non-slip backing:</strong> Safety first in kitchens</li>
                    <li><strong>Stain resistant:</strong> Repels spills and stains</li>
                    <li><strong>Machine washable:</strong> Convenient maintenance</li>
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
              title="Kitchen Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
