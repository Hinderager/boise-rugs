import type { Metadata } from "next";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Rugs | Soft & Absorbent Bath Mats | Boise Rugs",
  description: "Shop plush, absorbent bathroom rugs and bath mats. Non-slip backing, machine washable, and luxuriously soft. Add comfort and style to your bathroom. Free shipping.",
  keywords: "bathroom rugs, bath mats, bathroom area rugs, absorbent bath mats, non-slip bath mats, washable bathroom rugs, Boise",
  openGraph: {
    title: "Bathroom Rugs | Soft & Absorbent Bath Mats",
    description: "Shop plush, absorbent bathroom rugs. Non-slip and machine washable. Free shipping on all orders.",
    url: "https://boise-rugs.com/shop-by-room/bathroom",
    siteName: "Boise Rugs",
    locale: "en_US",
    type: "website",
  },
};

export default function BathroomRugsPage() {
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
            <span className="text-gray-900 font-medium">Bathroom</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bathroom Rugs
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-6">
              Step out of the shower onto plush comfort. Our bathroom rugs offer superior absorbency, non-slip safety, and spa-like luxury for your daily routine.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Super absorbent materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Non-slip backing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00857E] rounded-full"></div>
                <span>Machine washable</span>
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
              Choosing the Perfect Bathroom Rug
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Bathroom rugs need to be functional first – absorbent, quick-drying, and safe. But that doesn\'t mean sacrificing style. Our collection offers both practicality and beauty for your bathroom.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Size & Placement</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Standard bath mat:</strong> 20"x30" or 21"x34"</li>
                    <li><strong>Contour mats:</strong> Fit around toilet base</li>
                    <li><strong>Runner:</strong> 22"x60" for long bathrooms</li>
                    <li><strong>Large bath rugs:</strong> 24"x60" or 30"x50"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Absorbency:</strong> Cotton or microfiber materials</li>
                    <li><strong>Non-slip:</strong> Rubber backing for safety</li>
                    <li><strong>Quick-dry:</strong> Prevents mold and mildew</li>
                    <li><strong>Easy care:</strong> Machine washable and durable</li>
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
              title="Bathroom Rugs"
              showSorting={true}
              showPagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
