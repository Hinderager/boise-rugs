'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'All Rugs', href: '/rugs' },
  { name: 'Persian & Oriental', href: '/persian-oriental' },
  { name: 'Washable Rugs', href: '/washable-rugs' },
  { name: 'Natural & Wool', href: '/natural-wool-rugs' },
  { name: 'Outdoor Rugs', href: '/outdoor-rugs' },
  { name: 'Baby & Kids', href: '/baby-kids' },
  { name: 'Mats', href: '/mats' },
  { 
    name: 'Decor & More', 
    href: '/decor',
    submenu: [
      { name: 'Handmade Pillows', href: '/decor/pillows' },
      { name: 'Throw Blankets', href: '/decor/blankets' },
      { name: 'Table Runners', href: '/decor/table-runners' },
      { name: 'Pet Beds', href: '/decor/pet-beds' },
      { name: 'Rug Pads', href: '/decor/rug-pads' },
    ]
  },
  { name: 'New & Trending', href: '/new-trending' },
  { name: 'Clearance', href: '/clearance' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#00857E] text-white text-center py-2 text-sm">
        <p>Free Shipping on All Orders | Extra 10% Off 2+ Rugs</p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#00857E]">Boise Rugs</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search rugs..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00857E] focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center space-x-8">
            {navigation.map((item) => (
              <li 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="block py-4 text-sm font-medium text-gray-700 hover:text-[#00857E] transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg py-2 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#00857E]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search rugs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00857E]"
            />
          </div>
          <ul className="px-4 pb-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="block py-3 text-gray-700 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
