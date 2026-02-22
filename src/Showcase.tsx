import React from 'react';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 md:py-28 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Experience Vortex in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how our intuitive platform empowers teams to achieve more, effortlessly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-4xl mx-auto group"
        >
          <div className="absolute inset-0 bg-indigo-500 opacity-20 rounded-3xl blur-3xl transform scale-105 group-hover:scale-110 transition-all duration-500 z-[-1]"></div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Product interface preview"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white transform rotate-[-2deg] group-hover:rotate-[2deg] transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
}
