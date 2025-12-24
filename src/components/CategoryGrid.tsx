import React from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

interface CategoryGridProps {
  title?: string;
  subtitle?: string;
  categories?: Category[];
}

const defaultCategories: Category[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    image: 'https://placehold.co/400x300/00857E/white?text=Living+Room',
    href: '/rooms/living-room'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: 'https://placehold.co/400x300/00857E/white?text=Bedroom',
    href: '/rooms/bedroom'
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image: 'https://placehold.co/400x300/00857E/white?text=Kitchen',
    href: '/rooms/kitchen'
  },
  {
    id: 'patio',
    name: 'Patio',
    image: 'https://placehold.co/400x300/00857E/white?text=Patio',
    href: '/rooms/patio'
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://placehold.co/400x300/00857E/white?text=Bathroom',
    href: '/rooms/bathroom'
  },
  {
    id: 'hallway',
    name: 'Hallway',
    image: 'https://placehold.co/400x300/00857E/white?text=Hallway',
    href: '/rooms/hallway'
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://placehold.co/400x300/00857E/white?text=Kids+Room',
    href: '/rooms/kids'
  },
  {
    id: 'doorway',
    name: 'Doorway',
    image: 'https://placehold.co/400x300/00857E/white?text=Doorway',
    href: '/rooms/doorway'
  },
  {
    id: 'office',
    name: 'Office',
    image: 'https://placehold.co/400x300/00857E/white?text=Office',
    href: '/rooms/office'
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    image: 'https://placehold.co/400x300/00857E/white?text=Dining+Room',
    href: '/rooms/dining-room'
  }
];

const CategoryGrid: React.FC<CategoryGridProps> = ({
  title = "Shop by Room",
  subtitle = "Find the perfect rug for every space in your home",
  categories = defaultCategories
}) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Category Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg md:text-xl text-center drop-shadow-lg">
                  {category.name}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00857E] rounded-lg transition-colors duration-300"></div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/rooms"
            className="inline-block bg-[#00857E] hover:bg-[#006d66] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
