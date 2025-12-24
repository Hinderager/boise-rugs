import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bedroom Rugs | Soft & Comfortable Area Rugs for Bedrooms | Boise Rugs",
  description: "Create a cozy bedroom retreat with our soft, plush bedroom rugs. Choose from luxurious materials and calming colors. Free shipping on all orders.",
  keywords: "bedroom rugs, area rugs for bedrooms, soft rugs, plush rugs, bedroom area rugs, cozy rugs, Boise",
  openGraph: {
    title: "Bedroom Rugs | Soft & Comfortable Area Rugs for Bedrooms",
    description: "Create a cozy bedroom retreat with our soft, plush bedroom rugs. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/bedroom",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function BedroomRugsPage() {
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
            <span className="text-gray-900 font-medium">Bedroom</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bedroom Rugs
            </h1>
            <p className="text-lg md:text-xl text-purple-200 mb-6">
              Create your personal sanctuary with soft, luxurious bedroom rugs. Step out of bed onto plush comfort and add a layer of warmth and style to your most intimate space.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Soft, high-pile options</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Calming colors & patterns</span>
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
              Choosing the Perfect Bedroom Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Your bedroom rug should provide comfort underfoot while complementing your decor. Whether you want a plush carpet to sink your toes into or a stylish accent that ties the room together, we have options for every preference.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Placement Options</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Under the bed:</strong> Extends 18-24" on sides and foot</li>
                    <li><strong>Beside the bed:</strong> Two matching 3x5 runners</li>
                    <li><strong>At the foot:</strong> 4x6 or 5x7 accent rug</li>
                    <li><strong>Full room:</strong> 8x10 or larger for spacious bedrooms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Material Recommendations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Wool:</strong> Naturally soft, warm, and durable</li>
                    <li><strong>Synthetic plush:</strong> Affordable, easy to clean</li>
                    <li><strong>Cotton:</strong> Soft, washable, hypoallergenic</li>
                    <li><strong>Shag:</strong> Ultimate luxury and comfort</li>
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
              title="Bedroom Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
