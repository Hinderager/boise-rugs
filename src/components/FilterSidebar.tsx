'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterSection {
  id: string;
  title: string;
  options: FilterOption[];
  type: 'checkbox' | 'price' | 'color';
}

interface FilterSidebarProps {
  onFilterChange?: (filters: Record<string, string[]>) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const filterSections: FilterSection[] = [
  {
    id: 'sizes',
    title: 'Sizes',
    type: 'checkbox',
    options: [
      { id: '2x3', label: '2\' x 3\'', count: 145 },
      { id: '3x5', label: '3\' x 5\'', count: 230 },
      { id: '4x6', label: '4\' x 6\'', count: 189 },
      { id: '5x7', label: '5\' x 7\'', count: 312 },
      { id: '6x9', label: '6\' x 9\'', count: 278 },
      { id: '8x10', label: '8\' x 10\'', count: 256 },
      { id: '9x12', label: '9\' x 12\'', count: 198 },
      { id: 'runner', label: 'Runner', count: 167 }
    ]
  },
  {
    id: 'shapes',
    title: 'Shapes',
    type: 'checkbox',
    options: [
      { id: 'rectangle', label: 'Rectangle', count: 1245 },
      { id: 'round', label: 'Round', count: 345 },
      { id: 'square', label: 'Square', count: 189 },
      { id: 'runner', label: 'Runner', count: 234 },
      { id: 'oval', label: 'Oval', count: 89 }
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    type: 'color',
    options: [
      { id: 'blue', label: 'Blue' },
      { id: 'gray', label: 'Gray' },
      { id: 'beige', label: 'Beige' },
      { id: 'red', label: 'Red' },
      { id: 'green', label: 'Green' },
      { id: 'black', label: 'Black' },
      { id: 'white', label: 'White' },
      { id: 'brown', label: 'Brown' }
    ]
  },
  {
    id: 'styles',
    title: 'Styles',
    type: 'checkbox',
    options: [
      { id: 'modern', label: 'Modern', count: 567 },
      { id: 'traditional', label: 'Traditional', count: 445 },
      { id: 'persian', label: 'Persian', count: 234 },
      { id: 'moroccan', label: 'Moroccan', count: 189 },
      { id: 'geometric', label: 'Geometric', count: 312 },
      { id: 'vintage', label: 'Vintage', count: 267 },
      { id: 'bohemian', label: 'Bohemian', count: 198 }
    ]
  },
  {
    id: 'patterns',
    title: 'Patterns',
    type: 'checkbox',
    options: [
      { id: 'solid', label: 'Solid', count: 456 },
      { id: 'striped', label: 'Striped', count: 234 },
      { id: 'geometric', label: 'Geometric', count: 345 },
      { id: 'floral', label: 'Floral', count: 189 },
      { id: 'abstract', label: 'Abstract', count: 267 },
      { id: 'oriental', label: 'Oriental', count: 198 }
    ]
  },
  {
    id: 'materials',
    title: 'Materials',
    type: 'checkbox',
    options: [
      { id: 'wool', label: 'Wool', count: 345 },
      { id: 'cotton', label: 'Cotton', count: 289 },
      { id: 'synthetic', label: 'Synthetic', count: 567 },
      { id: 'jute', label: 'Jute', count: 178 },
      { id: 'silk', label: 'Silk', count: 89 },
      { id: 'polyester', label: 'Polyester', count: 456 }
    ]
  },
  {
    id: 'pile-height',
    title: 'Pile Height',
    type: 'checkbox',
    options: [
      { id: 'low', label: 'Low (< 0.25")', count: 456 },
      { id: 'medium', label: 'Medium (0.25" - 0.5")', count: 567 },
      { id: 'high', label: 'High (> 0.5")', count: 234 }
    ]
  }
];

const colorMap: Record<string, string> = {
  blue: '#3B82F6',
  gray: '#6B7280',
  beige: '#D4C5B9',
  red: '#EF4444',
  green: '#10B981',
  black: '#000000',
  white: '#FFFFFF',
  brown: '#92400E'
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onFilterChange,
  isOpen = true,
  onClose
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['sizes', 'colors', 'styles'])
  );
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleFilterChange = (sectionId: string, optionId: string) => {
    const currentFilters = selectedFilters[sectionId] || [];
    const newFilters = currentFilters.includes(optionId)
      ? currentFilters.filter(id => id !== optionId)
      : [...currentFilters, optionId];

    const updatedFilters = {
      ...selectedFilters,
      [sectionId]: newFilters
    };

    setSelectedFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setPriceRange({ min: '', max: '' });
    onFilterChange?.({});
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((total, filters) => total + filters.length, 0);
  };

  return (
    <div className={`bg-white border-r border-gray-200 h-full overflow-y-auto ${isOpen ? 'block' : 'hidden lg:block'}`}>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
          </h2>
          <div className="flex items-center gap-2">
            {getActiveFilterCount() > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-[#00857E] hover:text-[#006d66] font-medium"
              >
                Clear All
              </button>
            )}
            {onClose && (
              <button onClick={onClose} className="lg:hidden">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00857E]"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00857E]"
            />
          </div>
          <button className="w-full mt-3 bg-[#00857E] hover:bg-[#006d66] text-white py-2 rounded-md transition-colors font-medium">
            Apply
          </button>
        </div>

        {/* Filter Sections */}
        {filterSections.map((section) => (
          <div key={section.id} className="mb-4 pb-4 border-b border-gray-200 last:border-0">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between py-2 hover:text-[#00857E] transition-colors"
            >
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
              {expandedSections.has(section.id) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Section Options */}
            {expandedSections.has(section.id) && (
              <div className="mt-2 space-y-2">
                {section.type === 'color' ? (
                  <div className="grid grid-cols-4 gap-2">
                    {section.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleFilterChange(section.id, option.id)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedFilters[section.id]?.includes(option.id)
                            ? 'border-[#00857E] scale-110'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{
                          backgroundColor: colorMap[option.id],
                          boxShadow: option.id === 'white' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                        }}
                        title={option.label}
                      />
                    ))}
                  </div>
                ) : (
                  section.options.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters[section.id]?.includes(option.id) || false}
                          onChange={() => handleFilterChange(section.id, option.id)}
                          className="w-4 h-4 text-[#00857E] border-gray-300 rounded focus:ring-[#00857E]"
                        />
                        <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                      </div>
                      {option.count && (
                        <span className="text-xs text-gray-500">({option.count})</span>
                      )}
                    </label>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
