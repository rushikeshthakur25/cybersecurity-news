import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import cyberSecurityImage from '../assets/cybersecurity.jpg'; // Example image import
import hackingDevicesImage from '../assets/hacking-devices.jpg'; // Example image import
import hackerImage from '../assets/top-hackers.jpg'; // Example image import
import booksImage from '../assets/recommended-books.jpg'; // Example image import
import blogImage from '../assets/latest-blogs.png'; // Example image import
import Footer from '../components/Footer';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articlesData = await fetchArticles();
        setArticles(articlesData.slice(0, 3)); // Limit to 3 articles for homepage
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    getArticles();
  }, []);

  return (
    <>
    <div className="bg-gray-100">
      {/* Main Heading and Image */}
      <div className="container mx-auto px-4 py-8 text-center">
        <img src={cyberSecurityImage} alt="Cybersecurity" className="mx-auto mb-4 h-32 md:h-48" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Cybersecurity News and Hacking Tools</h1>
      </div>

      {/* Navigation Buttons */}
      <div className="container mx-auto flex justify-center space-x-4 mb-8">
        <a href="/daily-tips" className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">Daily Cyber Tips</a>
        <a href="/hacking-tools" className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">Explore Hacking Tools</a>
      </div>

    </div>
      <Footer/>
    </>
  );
};

export default Home;
