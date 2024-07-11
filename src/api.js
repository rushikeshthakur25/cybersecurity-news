import axios from 'axios';

const API_KEY = 'f9ecf6e8ca8644da9d201beb8f1adb6c';  // Replace with your NewsAPI key

export const fetchArticles = async () => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${API_KEY}`);
  return response.data.articles;
};
