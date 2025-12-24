export const metadata = {
  title: 'Rugs 101 - Complete Guide | Boise Rugs',
  description: 'Learn everything about buying area rugs. Size guide, material guide, and care tips.',
};

export default function Rugs101Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Rugs 101</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rugs 101: Complete Guide</h1>

          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing the Right Size</h2>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Living Room</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>All furniture on rug: 8x10 or larger</li>
                  <li>Front legs on: 6x9 or 8x10</li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bedroom</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Queen bed: 8x10 rug</li>
                  <li>King bed: 9x12 rug</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rug Materials</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#00857E] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Wool</h3>
                  <p className="text-gray-600">Natural, durable, and luxurious.</p>
                </div>
                <div className="border-l-4 border-[#00857E] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Synthetic</h3>
                  <p className="text-gray-600">Affordable and easy to clean.</p>
                </div>
              </div>
            </section>

            <div className="bg-[#00857E] text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Shop?</h2>
              <a href="/rugs" className="inline-block bg-white text-[#00857E] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Shop All Rugs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}