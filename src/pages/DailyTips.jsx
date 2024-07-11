import React from 'react';
import TipsList from '../components/TipsList';
import Footer from '../components/Footer';

const DailyTips = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TipsList />
      <Footer/>
    </div>
  );
};

export default DailyTips;
