import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with date and subscribe */}
      <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 flex justify-between items-center">
        <span>
          {new Date().toLocaleDateString('hi-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
        <button className="text-primary font-semibold hover:underline">
          न्यूजलेटर सदस्य बनें
        </button>
      </div>

      {/* Main header */}
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer mb-4">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">LH</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary">Live Hindustan</h1>
                <p className="text-xs text-gray-600">भारत की आवाज़</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-6 overflow-x-auto scrollbar-hide">
          <Link href="/" className="text-gray-700 font-semibold hover:text-primary whitespace-nowrap">
            होम
          </Link>
          <Link href="/?category=दिल्ली" className="text-gray-600 hover:text-primary whitespace-nowrap">
            दिल्ली
          </Link>
          <Link href="/?category=व्यापार" className="text-gray-600 hover:text-primary whitespace-nowrap">
            व्यापार
          </Link>
          <Link href="/?category=खेल" className="text-gray-600 hover:text-primary whitespace-nowrap">
            खेल
          </Link>
          <Link href="/?category=शिक्षा" className="text-gray-600 hover:text-primary whitespace-nowrap">
            शिक्षा
          </Link>
          <Link href="/?category=तकनीक" className="text-gray-600 hover:text-primary whitespace-nowrap">
            तकनीक
          </Link>
          <Link href="/?category=पर्यावरण" className="text-gray-600 hover:text-primary whitespace-nowrap">
            पर्यावरण
          </Link>
        </div>
      </nav>
    </header>
  );
}
