import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/article/${article.id}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
          <div className="relative h-80 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-primary px-3 py-1 rounded text-sm font-semibold mb-3">
                {article.category}
              </span>
              <h3 className="text-2xl font-bold leading-tight">{article.title}</h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-3">{article.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{article.author}</span>
              <span>{article.readTime} मिनट की पढ़ाई</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 sm:h-32 sm:w-40 flex-shrink-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{article.readTime} मिनट</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {article.description}
            </p>
            <div className="text-xs text-gray-500">
              {article.author} • {new Date(article.publishedAt).toLocaleDateString('hi-IN')}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
