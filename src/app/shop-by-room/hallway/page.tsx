import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hallway Runners | Stylish Runner Rugs for Hallways | Boise Rugs",
  description: "Add style and protection to your hallways with durable runner rugs. Perfect for high-traffic areas. Multiple lengths and styles available. Free shipping on all orders.",
  keywords: "hallway runners, runner rugs, hall runners, long runners, narrow rugs, hallway rugs, corridor runners, Boise",
  openGraph: {
    title: "Hallway Runners | Stylish Runner Rugs for Hallways",
    description: "Add style and protection to your hallways with durable runner rugs. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/hallway",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function HallwayRunnersPage() {
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
            <span className="text-gray-900 font-medium">Hallway</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hallway Runners
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6">
              Transform narrow spaces into stylish pathways with our hallway runners. Designed for high-traffic areas, these durable rugs protect your floors while adding visual interest.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Multiple lengths available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>High-traffic durability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Free shipping</span>
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
              Choosing the Perfect Hallway Runner
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Hallway runners serve both functional and aesthetic purposes. They protect high-traffic floors from wear, reduce noise, and create visual flow throughout your home. The right runner can make a narrow hallway feel more spacious and inviting.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sizing Your Runner</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Width:</strong> Leave 4-6" of floor visible on each side</li>
                    <li><strong>Length:</strong> Should not extend all the way to walls</li>
                    <li><strong>Standard widths:</strong> 2\', 2.3\', 2.6\', 3\'</li>
                    <li><strong>Common lengths:</strong> 6\', 8\', 10\', 12\', 14\', 16\'</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Material Selection</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Low-pile:</strong> Best for high traffic, easy to clean</li>
                    <li><strong>Flatweave:</strong> Durable, won\'t bunch up</li>
                    <li><strong>Synthetic:</strong> Stain-resistant, affordable</li>
                    <li><strong>Wool blend:</strong> Durable with natural beauty</li>
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
              title="Hallway Runners"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
