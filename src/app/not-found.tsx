import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'पृष्ठ नहीं मिला - Live Hindustan',
  description: 'यह पृष्ठ मौजूद नहीं है।',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">पृष्ठ नहीं मिला</h2>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        क्षमा करें, जिस पृष्ठ को आप खोज रहे हैं वह मौजूद नहीं है।
      </p>
      <a 
        href="/"
        className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition"
      >
        होम पर जाएं
      </a>
    </div>
  );
}
