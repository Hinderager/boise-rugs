'use client';

import { useState } from 'react';
import { ThumbsUp } from 'lucide-react';

interface Review {
  id: string;
  userName: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  helpful: number;
}

interface ProductReviewsProps {
  overallRating: number;
  totalReviews: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  reviews: Review[];
}

export default function ProductReviews({ overallRating, totalReviews, ratingBreakdown, reviews }: ProductReviewsProps) {
  const [helpfulClicks, setHelpfulClicks] = useState<Set<string>>(new Set());

  const handleHelpful = (reviewId: string) => {
    setHelpfulClicks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'sm') => {
    const sizeClass = size === 'lg' ? 'w-8 h-8' : 'w-5 h-5';
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizeClass} ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  const getRatingPercentage = (count: number) => {
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Customer Reviews
      </h2>

      {/* Overall Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left: Overall Rating */}
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
          <div className="text-6xl font-bold text-gray-900 mb-2">
            {overallRating.toFixed(1)}
          </div>
          {renderStars(Math.round(overallRating), 'lg')}
          <p className="text-gray-600 mt-3">
            Based on {totalReviews} reviews
          </p>
        </div>

        {/* Right: Rating Breakdown */}
        <div className="flex flex-col justify-center space-y-3">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = ratingBreakdown[stars as keyof typeof ratingBreakdown];
            const percentage = getRatingPercentage(count);
            return (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-12">
                  {stars} star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">
                  {percentage.toFixed(0)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Write a Review Button */}
      <div className="mb-8">
        <button className="bg-[#00857E] hover:bg-[#006d67] text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Write a Review
        </button>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-gray-900">{review.userName}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              {renderStars(review.rating)}
            </div>

            <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
            <p className="text-gray-700 leading-relaxed mb-4">{review.text}</p>

            <button
              onClick={() => handleHelpful(review.id)}
              className={`flex items-center gap-2 text-sm transition-colors ${
                helpfulClicks.has(review.id)
                  ? 'text-[#00857E] font-semibold'
                  : 'text-gray-600 hover:text-[#00857E]'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${helpfulClicks.has(review.id) ? 'fill-current' : ''}`} />
              Helpful ({review.helpful + (helpfulClicks.has(review.id) ? 1 : 0)})
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {reviews.length > 0 && (
        <div className="mt-8 text-center">
          <button className="border-2 border-gray-300 hover:border-[#00857E] text-gray-700 hover:text-[#00857E] font-semibold py-3 px-8 rounded-lg transition-colors">
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
}
