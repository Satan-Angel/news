import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Live Hindustan के बारे में</h3>
            <p className="text-sm text-gray-300">
              Live Hindustan भारत की प्रमुख हिंदी न्यूज़ पोर्टल है जो देश और दुनिया की ताज़ा खबरें लाता है।
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">श्रेणियाँ</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-white">दिल्ली</a></li>
              <li><a href="/" className="hover:text-white">व्यापार</a></li>
              <li><a href="/" className="hover:text-white">खेल</a></li>
              <li><a href="/" className="hover:text-white">शिक्षा</a></li>
              <li><a href="/" className="hover:text-white">तकनीक</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">कंपनी</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-white">हमारे बारे में</a></li>
              <li><a href="/" className="hover:text-white">संपर्क करें</a></li>
              <li><a href="/" className="hover:text-white">गोपनीयता नीति</a></li>
              <li><a href="/" className="hover:text-white">शर्तें और शर्तें</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">हमें फॉलो करें</h3>
            <div className="flex gap-4 text-sm text-gray-300">
              <a href="#" className="hover:text-white">फेसबुक</a>
              <a href="#" className="hover:text-white">ट्विटर</a>
              <a href="#" className="hover:text-white">इंस्टाग्राम</a>
              <a href="#" className="hover:text-white">यूट्यूब</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Live Hindustan. सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
}
