export const metadata = {
  title: 'Terms of Service | Boise Rugs',
  description: 'Terms of service for Boise Rugs.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Terms of Service</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By using this website, you agree to these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Pricing</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Prices are in USD and subject to change</li>
                <li>We reserve the right to refuse orders</li>
                <li>Payment required before processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns</h2>
              <p className="text-gray-600">
                Returns must be requested within 30 days. Items must be in original condition.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}