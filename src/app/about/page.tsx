export const metadata = {
  title: 'About Us - Boise Rugs | Quality Area Rugs',
  description: 'Learn about Boise Rugs, your trusted source for quality area rugs at unbeatable prices.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">About Us</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Boise Rugs</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Your trusted source for quality area rugs at unbeatable prices in Boise, Idaho.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Boise Rugs was founded with a simple mission: to make high-quality, beautiful area rugs accessible to everyone. 
                  We believe that a great rug can transform a space, adding warmth, style, and personality to your home.
                </p>
                <p className="text-gray-600">
                  By working directly with manufacturers and cutting out middlemen, we bring you designer-quality rugs at 
                  prices up to 80% below retail.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  We are dedicated to providing exceptional value without compromising on quality. Every rug in our collection 
                  is carefully selected for its craftsmanship, durability, and design.
                </p>
                <p className="text-gray-600">
                  From traditional Persian rugs to modern geometric designs, we offer something for every style and budget.
                </p>
              </div>
            </div>

            <div className="bg-[#00857E] text-white rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Boise Rugs?</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unbeatable Prices</h3>
                  <p className="text-teal-100">Save up to 80% off retail</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                  <p className="text-teal-100">Premium materials</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                  <p className="text-teal-100">On orders over $99</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Rug?</h2>
              <p className="text-gray-600 mb-6">
                Browse our collection and discover why thousands of customers trust Boise Rugs.
              </p>
              <a
                href="/rugs"
                className="inline-block bg-[#00857E] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#006d66] transition-colors"
              >
                Shop All Rugs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
