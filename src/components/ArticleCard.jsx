import React from 'react';

const ArticleCard = ({ article }) => {
  // Example gradient colors for demonstration
  const gradientColors = 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500';

  return (
    <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 ${gradientColors}`}>
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={article.urlToImage} alt={article.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{article.source.name}</div>
          <a href={article.url} className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">{article.title}</a>
          <p className="mt-2 text-gray-100">{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
