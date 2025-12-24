export const metadata = {
  title: 'Privacy Policy | Boise Rugs',
  description: 'Privacy policy for Boise Rugs.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600">
                We collect information you provide directly to us when you make a purchase or create an account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Questions? Contact us at info@boiserugs.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}