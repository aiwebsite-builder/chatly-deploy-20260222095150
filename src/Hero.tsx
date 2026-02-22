import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-indigo-50 py-20 md:py-28 text-gray-900">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dotPattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#e0e7ff" /> {/* Light indigo dots */}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            Unlock Your <span className="text-indigo-600">Digital Potential</span> with Vortex
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Vortex delivers cutting-edge solutions for businesses seeking innovation, efficiency, and a competitive edge in the modern landscape.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 border border-gray-300 font-semibold rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
            alt="Innovative technology solutions"
            className="w-full max-w-lg h-auto rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-indigo-500 opacity-10 rounded-3xl blur-2xl transform scale-105 z-[-1]"></div>
        </motion.div>
      </div>
    </section>
  );
}
