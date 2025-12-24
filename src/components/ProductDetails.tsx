'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductDetailsProps {
  description: string;
  specifications: {
    material: string;
    pileHeight: string;
    construction: string;
    origin: string;
    careInstructions: string;
  };
  shipping: {
    freeShipping: boolean;
    returnPolicy: string;
    deliveryTime: string;
  };
}

export default function ProductDetails({ description, specifications, shipping }: ProductDetailsProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['description']));

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const isExpanded = (section: string) => expandedSections.has(section);

  return (
    <div className="w-full border-t border-gray-200">
      {/* Description Section */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection('description')}
          className="w-full flex items-center justify-between py-5 px-6 hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900">Description</h3>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isExpanded('description') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isExpanded('description') && (
          <div className="px-6 pb-5">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Specifications Section */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection('specifications')}
          className="w-full flex items-center justify-between py-5 px-6 hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900">Specifications</h3>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isExpanded('specifications') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isExpanded('specifications') && (
          <div className="px-6 pb-5">
            <dl className="space-y-3">
              <div className="flex items-start">
                <dt className="font-semibold text-gray-900 w-40">Material:</dt>
                <dd className="text-gray-700 flex-1">{specifications.material}</dd>
              </div>
              <div className="flex items-start">
                <dt className="font-semibold text-gray-900 w-40">Pile Height:</dt>
                <dd className="text-gray-700 flex-1">{specifications.pileHeight}</dd>
              </div>
              <div className="flex items-start">
                <dt className="font-semibold text-gray-900 w-40">Construction:</dt>
                <dd className="text-gray-700 flex-1">{specifications.construction}</dd>
              </div>
              <div className="flex items-start">
                <dt className="font-semibold text-gray-900 w-40">Origin:</dt>
                <dd className="text-gray-700 flex-1">{specifications.origin}</dd>
              </div>
              <div className="flex items-start">
                <dt className="font-semibold text-gray-900 w-40">Care Instructions:</dt>
                <dd className="text-gray-700 flex-1">{specifications.careInstructions}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>

      {/* Shipping & Returns Section */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection('shipping')}
          className="w-full flex items-center justify-between py-5 px-6 hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900">Shipping & Returns</h3>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isExpanded('shipping') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isExpanded('shipping') && (
          <div className="px-6 pb-5">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
                <p className="text-gray-700">
                  {shipping.freeShipping
                    ? `Enjoy free standard shipping on all orders. Your rug will arrive in ${shipping.deliveryTime}.`
                    : `Standard shipping rates apply. Delivery in ${shipping.deliveryTime}.`}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Returns</h4>
                <p className="text-gray-700">{shipping.returnPolicy}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-gray-700">
                  Contact our customer service team at{' '}
                  <a href="tel:1-800-555-0123" className="text-[#00857E] hover:underline">
                    1-800-555-0123
                  </a>{' '}
                  or{' '}
                  <a href="mailto:support@boiserugs.com" className="text-[#00857E] hover:underline">
                    support@boiserugs.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
