"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What sizes of rugs do you offer?",
      answer: "We offer a wide range of sizes from small accent rugs (2x3) to large area rugs (12x15 and larger). Common sizes include 5x7, 6x9, 8x10, and 9x12. Many of our rugs are also available in runner sizes."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free shipping on all orders over $99. Orders under $99 have a flat shipping rate that is calculated at checkout based on size and weight."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day hassle-free return policy. If you are not completely satisfied with your rug, you can return it within 30 days of delivery for a full refund. The rug must be in its original condition and packaging."
    },
    {
      question: "How do I clean my rug?",
      answer: "Cleaning instructions vary by rug type. Washable rugs can be machine washed. For other rugs, we recommend regular vacuuming and professional cleaning as needed. Specific care instructions are included with each rug."
    },
    {
      question: "Are your rugs pet-friendly?",
      answer: "Yes! Many of our rugs are perfect for pet owners. We recommend our washable rugs, outdoor rugs, or low-pile options that are easy to clean and resist stains and pet hair."
    },
    {
      question: "How long does shipping take?",
      answer: "Most orders ship within 1-2 business days and arrive within 5-7 business days. Some specialty items may take longer. You will receive tracking information once your order ships."
    },
    {
      question: "Can I see the rug in person before buying?",
      answer: "We operate primarily online to keep costs low and pass savings to you. However, we offer free samples for many of our rug collections. Contact us to request a sample."
    },
    {
      question: "Do you offer rug pads?",
      answer: "Yes! We offer rug pads in various sizes to help protect your floors and keep your rug in place. We recommend using a rug pad with all our rugs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Shop Pay. All transactions are secure and encrypted."
    },
    {
      question: "How do I choose the right size rug?",
      answer: "For living rooms, your rug should fit all furniture or at least the front legs. For dining rooms, ensure the rug extends 24 inches beyond the table on all sides. For bedrooms, the rug should extend beyond the bed on three sides."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">FAQ</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions about our rugs, shipping, and policies.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#00857E] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">Our team is here to help! Contact us and we will get back to you as soon as possible.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#00857E] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
