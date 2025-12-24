import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Entry & Doorway Rugs | Welcome Mats & Entryway Rugs | Boise Rugs",
  description: "Make a great first impression with stylish entry rugs and doormats. Durable, dirt-trapping designs that protect your floors. Indoor and outdoor options. Free shipping.",
  keywords: "entry rugs, doorway rugs, entryway rugs, welcome mats, door mats, foyer rugs, mudroom rugs, Boise",
  openGraph: {
    title: "Entry & Doorway Rugs | Welcome Mats & Entryway Rugs",
    description: "Make a great first impression with stylish entry rugs. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/doorway",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function DoorwayRugsPage() {
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
            <span className="text-gray-900 font-medium">Doorway</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Entry & Doorway Rugs
            </h1>
            <p className="text-lg md:text-xl text-amber-200 mb-6">
              Welcome guests with style while protecting your floors from dirt and moisture. Our entry rugs combine functionality with beautiful design to make a great first impression.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Dirt-trapping design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Indoor/outdoor options</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Weather-resistant</span>
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
              Choosing the Perfect Entry Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Entry and doorway rugs are your home\'s first line of defense against dirt, mud, and moisture. They need to be tough enough to handle heavy traffic while still looking welcoming and stylish.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Placement Options</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Front door:</strong> 2x3 or 3x5 indoor/outdoor mat</li>
                    <li><strong>Foyer:</strong> 4x6 or 5x7 area rug inside entry</li>
                    <li><strong>Mudroom:</strong> Durable runner or larger mat</li>
                    <li><strong>Double defense:</strong> Mat outside + rug inside</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Dirt-trapping:</strong> Textured surfaces catch debris</li>
                    <li><strong>Low-profile:</strong> Won\'t catch on opening door</li>
                    <li><strong>Non-slip backing:</strong> Stays in place with traffic</li>
                    <li><strong>Easy to clean:</strong> Shake out or hose down</li>
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
              title="Entry & Doorway Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
