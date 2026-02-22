import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Cog, Cloud, ShieldCheck, TrendingUp, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Intuitive Dashboards',
    description: 'Access all your key metrics and data visualizations in one simple, customizable interface.',
  },
  {
    icon: Cog,
    title: 'Automated Workflows',
    description: 'Streamline your operations with intelligent automation that saves time and reduces errors.',
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Infrastructure',
    description: 'Grow your business without limits with our robust and flexible cloud-native solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Security',
    description: 'Protect your data with enterprise-grade security protocols and continuous monitoring.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Gain deep insights into your performance with detailed analytics and reporting tools.',
  },
  {
    icon: BarChart2,
    title: 'Data-Driven Decisions',
    description: 'Empower your team with real-time data to make smarter, faster strategic choices.',
  },
];

export default function Features() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Solutions Designed For Your Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine innovative technology with strategic insights to deliver powerful, measurable results.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-start text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out group"
            >
              <div className="p-4 bg-indigo-500/10 text-indigo-600 rounded-xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 ease-in-out">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
