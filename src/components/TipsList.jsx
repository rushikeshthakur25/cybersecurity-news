import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleCard from './ArticleCard';

const TipsList = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('newest'); // Default sort by newest

  useEffect(() => {
    const getArticles = async () => {
      const articlesData = await fetchArticles();
      // Sort articles based on sortBy state
      const sortedArticles = articlesData.sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        } else {
          return new Date(a.publishedAt) - new Date(b.publishedAt);
        }
      });
      setArticles(sortedArticles);
    };
    getArticles();
  }, [sortBy]); // Trigger useEffect on sortBy change

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">Daily Cybersecurity Tips</h1>

      {/* Sort Dropdown */}
      <div className="text-right mb-4">
        <label htmlFor="sortSelect" className="mr-2 font-medium text-gray-600">Sort by:</label>
        <select
          id="sortSelect"
          value={sortBy}
          onChange={handleSortChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(article => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TipsList;
