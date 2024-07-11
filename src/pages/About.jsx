import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt velit eget urna bibendum, vel blandit dolor dignissim. Duis consectetur commodo felis id porttitor.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nullam venenatis felis sed libero dictum, sed lacinia lectus eleifend. Integer sodales ex eget mauris congue ullamcorper. Sed dapibus leo at scelerisque tincidunt.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Fusce nec mauris sit amet augue dapibus iaculis. Donec ullamcorper pretium nulla, eu vestibulum magna convallis in. Nullam eget feugiat ante, in blandit odio.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Sed ac arcu a libero lacinia lacinia. Aliquam erat volutpat. Duis tempus ultricies sapien, eget tristique ipsum eleifend sit amet.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
