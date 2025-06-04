import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // For navigation
import heroImage from '../assets/hero3.png'; // Adjust path as needed

const Hero = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact'); // Your route to contact page
  };

  const goToServices = () => {
    navigate('/services'); // Your route to services page
  };

  return (
    <section className="relative bg-white overflow-hidden py-20 px-6 sm:px-12 md:px-20">
      {/* Decorative SVG Background */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="#f3f4f6"
          d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,213.3C672,235,768,213,864,192C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L0,320Z"
        />
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative items-center">
        {/* LEFT SIDE: TEXT */}
        <motion.div
          className="text-left space-y-6"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            WE ARE <br />
            <span className="text-indigo-600">CREATIVE NINJAS</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            LET’S REDEFINE SUCCESS, TOGETHER. Transforming ideas into real digital impact.
          </p>

          {/* Buttons with spacing */}
          <div className="flex space-x-4">
            <button
              onClick={goToContact}
              className="px-6 py-3 bg-highlight text-white hover:bg-highlight-hover transition-all duration-300 transform hover:scale-105 rounded-md"
            >
              Contact Us
            </button>
            <button
              onClick={goToServices}
              className="px-6 py-3 bg-highlight text-white hover:bg-highlight-hover transition-all duration-300 transform hover:scale-105 rounded-md"
            >
              Services
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img src={heroImage} alt="Creative Ninjas Hero" draggable={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
