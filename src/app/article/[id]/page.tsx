import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getArticleById, getAllArticles } from '@/lib/mockData';

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticleById(params.id);

  if (!article) {
    return {
      title: 'लेख नहीं मिला',
      description: 'यह लेख मौजूद नहीं है।',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
      type: 'article',
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

// Generate static paths for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map(article => ({
    id: article.id,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleById(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            होम
          </Link>
          <span>/</span>
          <span className="text-gray-500">{article.category}</span>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-white px-4 py-2 rounded font-semibold text-sm">
                {article.category}
              </span>
              <span className="text-gray-600 text-sm">{article.readTime} मिनट की पढ़ाई</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-700 mb-6">{article.description}</p>

            <div className="flex items-center gap-4 text-sm text-gray-600 border-b pb-6">
              <span>लेखक: <strong>{article.author}</strong></span>
              <span>•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString('hi-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 md:h-[500px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-800 leading-8 whitespace-pre-wrap">
              {article.content}
            </p>
          </div>

          {/* Article Footer */}
          <div className="border-t pt-8">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">लेख साझा करें</h3>
              <p className="text-gray-700 mb-4">इस लेख को अपने दोस्तों और परिवार के साथ साझा करें।</p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700 transition">
                  फेसबुक पर साझा करें
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
                  ट्विटर पर साझा करें
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Related Articles */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">संबंधित लेख</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder for related articles */}
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 animate-pulse">
                <div className="bg-gray-200 h-40 rounded mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
