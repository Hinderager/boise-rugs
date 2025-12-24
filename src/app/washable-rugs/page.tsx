import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';

export const metadata = {
  title: 'Washable Rugs - Easy Care Machine Washable Rugs | Boise Rugs',
  description: 'Shop machine washable rugs perfect for high-traffic areas, kids rooms, and pet-friendly homes. Easy to clean and maintain.',
};

export default function WashableRugsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Washable Rugs</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Washable Rugs</h1>
          <p className="mt-2 text-lg text-gray-600">
            Machine washable rugs that combine style with easy maintenance - perfect for busy homes
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
