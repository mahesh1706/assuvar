import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero3.png'; // Your actual path

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-6 sm:px-12 md:px-20">
      {/* Decorative SVG Background */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f3f4f6"
          d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,213.3C672,235,768,213,864,192C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320..."
        ></path>
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
          <button className="px-6 py-3 bg-highlight text-white hover:bg-highlight-hover transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </motion.div>

        {/* RIGHT SIDE: IMAGE */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img
            src={heroImage}
            alt="Hero"
           
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
