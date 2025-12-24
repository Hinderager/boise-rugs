import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';

export const metadata = {
  title: 'Persian & Oriental Rugs - Handcrafted Traditional Rugs | Boise Rugs',
  description: 'Discover authentic Persian and Oriental rugs. Handcrafted traditional designs with intricate patterns. Save up to 80% on designer quality.',
};

export default function PersianOrientalPage() {
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
              <li className="text-gray-900 font-medium">Persian & Oriental Rugs</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Persian & Oriental Rugs</h1>
          <p className="mt-2 text-lg text-gray-600">
            Handcrafted traditional rugs with timeless patterns and superior craftsmanship
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
