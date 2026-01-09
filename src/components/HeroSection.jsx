
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Briefcase, label: 'Active Jobs', value: '500+' },
    { icon: Calendar, label: 'Upcoming Exams', value: '150+' },
    { icon: Award, label: 'Results', value: '200+' }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Rojgar Network
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Your One-Stop Destination for Government Jobs & Updates
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="h-10 w-10 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
