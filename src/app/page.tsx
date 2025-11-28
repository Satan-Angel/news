import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Live Hindustan - ताज़ा हिंदी समाचार',
  description: 'भारत की ताज़ा खबरें, समाचार और विश्लेषण। दिल्ली, व्यापार, खेल, शिक्षा और तकनीक से जुड़ी खबरें पढ़ें।',
  openGraph: {
    title: 'Live Hindustan - ताज़ा हिंदी समाचार',
    description: 'भारत की ताज़ा खबरें, समाचार और विश्लेषण',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Hindustan - ताज़ा हिंदी समाचार',
    description: 'भारत की ताज़ा खबरें, समाचार और विश्लेषण',
  },
  keywords: 'समाचार, हिंदी, भारत, दिल्ली, व्यापार, खेल, शिक्षा, तकनीक',
};

interface HomeProps {
  searchParams?: {
    category?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const allArticles = await getAllArticles();
  const selectedCategory = searchParams?.category;
  
  const articles = selectedCategory 
    ? allArticles.filter(article => article.category === selectedCategory)
    : allArticles;

  const featuredArticles = articles.slice(0, 3);
  const otherArticles = articles.slice(3);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Featured Section */}
        <section className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">मुख्य खबरें</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArticles.map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  featured 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Articles List */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6">
                  {selectedCategory ? `${selectedCategory} की खबरें` : 'सभी खबरें'}
                </h2>
                <div className="space-y-6">
                  {otherArticles.length > 0 ? (
                    otherArticles.map(article => (
                      <ArticleCard 
                        key={article.id} 
                        article={article}
                      />
                    ))
                  ) : (
                    <p className="text-gray-600 text-center py-8">
                      इस श्रेणी में कोई खबर नहीं है।
                    </p>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:w-80">
                {/* Widget - Most Read */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">🔥</span> सबसे अधिक पढ़ी गई
                  </h3>
                  <ul className="space-y-4">
                    {articles.slice(0, 5).map((article, index) => (
                      <li key={article.id} className="pb-4 border-b last:border-b-0">
                        <div className="flex gap-3">
                          <span className="text-primary font-bold text-lg">{index + 1}</span>
                          <a 
                            href={`/article/${article.id}`}
                            className="text-gray-800 hover:text-primary font-semibold text-sm line-clamp-2"
                          >
                            {article.title}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Widget - Subscribe */}
                <div className="bg-primary text-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">न्यूजलेटर</h3>
                  <p className="text-sm mb-4">
                    ताज़ी खबरें सीधे अपने इनबॉक्स में प्राप्त करें।
                  </p>
                  <input
                    type="email"
                    placeholder="आपका ईमेल"
                    className="w-full px-4 py-2 rounded text-gray-900 mb-3 focus:outline-none"
                  />
                  <button className="w-full bg-white text-primary font-bold py-2 rounded hover:bg-gray-100 transition">
                    सदस्य बनें
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Ads Section (Placeholder) */}
        <section className="bg-white py-12 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gray-100 rounded-lg p-12 text-center text-gray-500">
              <p>विज्ञापन स्थान</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
