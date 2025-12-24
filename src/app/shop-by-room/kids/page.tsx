import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kids Room Rugs | Fun & Durable Rugs for Children | Boise Rugs",
  description: "Shop playful, durable rugs perfect for kids\' rooms and playrooms. Soft, stain-resistant, and easy to clean. Educational designs and fun patterns available. Free shipping.",
  keywords: "kids rugs, children\'s rugs, playroom rugs, kids room area rugs, educational rugs, washable kids rugs, alphabet rugs, Boise",
  openGraph: {
    title: "Kids Room Rugs | Fun & Durable Rugs for Children",
    description: "Shop playful, durable rugs perfect for kids\' rooms. Soft and easy to clean. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/kids",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function KidsRoomRugsPage() {
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
            <span className="text-gray-900 font-medium">Kids</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kids Room Rugs
            </h1>
            <p className="text-lg md:text-xl text-pink-200 mb-6">
              Create a fun, safe play space with our kids\' room rugs. From educational alphabet designs to playful patterns, our rugs are soft, durable, and easy to clean.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Soft & safe for play</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Stain-resistant materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Educational designs</span>
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
              Choosing the Perfect Kids Room Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Kids\' room rugs need to balance fun and function. They should be comfortable for play, easy to clean after spills and accidents, and durable enough to withstand years of active use while adding personality to the room.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Popular Styles</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Educational:</strong> Alphabets, numbers, maps</li>
                    <li><strong>Play mats:</strong> Roads, cityscapes, farm scenes</li>
                    <li><strong>Character themes:</strong> Animals, space, ocean</li>
                    <li><strong>Colorful patterns:</strong> Stripes, polka dots, geometric</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Must-Have Features</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Soft surface:</strong> Comfortable for sitting and playing</li>
                    <li><strong>Stain-resistant:</strong> Easy cleanup for spills and messes</li>
                    <li><strong>Non-toxic:</strong> Safe materials for children</li>
                    <li><strong>Machine washable:</strong> Ultimate convenience for parents</li>
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
              title="Kids Room Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
