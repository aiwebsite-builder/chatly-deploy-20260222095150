import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Rocket, Globe, Shield } from 'lucide-react';

const partners = [
  { name: 'GlobalCorp', icon: Briefcase },
  { name: 'InnovateX', icon: Zap },
  { name: 'LaunchPad', icon: Rocket },
  { name: 'WorldWide', icon: Globe },
  { name: 'SecureNet', icon: Shield },
];

export default function SocialProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-10">Trusted by leading companies worldwide</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center text-gray-500">
              <partner.icon className="w-8 h-8 md:w-10 md:h-10 text-indigo-500 mr-3" />
              <span className="text-xl md:text-2xl font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
