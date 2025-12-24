import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Trust Badges Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00857E] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $49</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00857E] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">30-Day Returns</h3>
              <p className="text-sm text-gray-600">Easy return policy</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00857E] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure Shopping</h3>
              <p className="text-sm text-gray-600">SSL encrypted checkout</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00857E] rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Expert Support</h3>
              <p className="text-sm text-gray-600">7 days a week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-[#00857E]">BoiseRugs</h2>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Quality rugs at unbeatable prices. Transform your space with our curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00857E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00857E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00857E] transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/rugs" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">All Rugs</Link></li>
              <li><Link href="/rugs/area-rugs" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Area Rugs</Link></li>
              <li><Link href="/rugs/runners" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Runner Rugs</Link></li>
              <li><Link href="/rugs/outdoor" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Outdoor Rugs</Link></li>
              <li><Link href="/rugs/washable" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Washable Rugs</Link></li>
              <li><Link href="/rugs/kids" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Kids Rugs</Link></li>
              <li><Link href="/sale" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Shop by Room Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop by Room</h3>
            <ul className="space-y-2">
              <li><Link href="/rooms/living-room" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Living Room</Link></li>
              <li><Link href="/rooms/bedroom" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Bedroom</Link></li>
              <li><Link href="/rooms/dining-room" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Dining Room</Link></li>
              <li><Link href="/rooms/kitchen" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Kitchen</Link></li>
              <li><Link href="/rooms/bathroom" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Bathroom</Link></li>
              <li><Link href="/rooms/hallway" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Hallway</Link></li>
              <li><Link href="/rooms/office" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Office</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Rug Size Guide</Link></li>
              <li><Link href="/care-guide" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Care & Cleaning</Link></li>
              <li><Link href="/track-order" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Press</Link></li>
              <li><Link href="/affiliate" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Affiliate Program</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-[#00857E] text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} BoiseRugs. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <img src="https://placehold.co/50x30/png?text=VISA" alt="Visa" className="h-6" />
              <img src="https://placehold.co/50x30/png?text=MC" alt="Mastercard" className="h-6" />
              <img src="https://placehold.co/50x30/png?text=AMEX" alt="American Express" className="h-6" />
              <img src="https://placehold.co/50x30/png?text=DISC" alt="Discover" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
