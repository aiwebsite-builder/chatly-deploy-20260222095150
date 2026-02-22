import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-indigo-600 py-20 md:py-28 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#6366f1" strokeWidth="0.5" /> {/* Indigo-700 lines */}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10"
        >
          Join the growing number of companies leveraging Vortex for unparalleled growth and innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-indigo-200 text-indigo-100 font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
