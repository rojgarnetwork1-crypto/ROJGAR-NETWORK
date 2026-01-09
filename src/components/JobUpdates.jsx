
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Briefcase, MapPin, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobUpdates = () => {
  const navigate = useNavigate();

  const jobBoxes = [
    {
      title: 'Railway Recruitment 2024',
      department: 'Indian Railways',
      posts: '10,000+ Posts',
      location: 'All India',
      lastDate: '31 Dec 2024',
      color: 'from-blue-500 to-blue-600',
      link: '/job/railway-recruitment-2024'
    },
    {
      title: 'SSC CGL 2024',
      department: 'Staff Selection Commission',
      posts: '15,000+ Posts',
      location: 'All India',
      lastDate: '28 Dec 2024',
      color: 'from-purple-500 to-purple-600',
      link: null
    },
    {
      title: 'UPSC Civil Services',
      department: 'Union Public Service Commission',
      posts: '1,000+ Posts',
      location: 'All India',
      lastDate: '15 Jan 2025',
      color: 'from-pink-500 to-pink-600',
      link: null
    },
    {
      title: 'Bank PO Recruitment',
      department: 'IBPS',
      posts: '5,000+ Posts',
      location: 'All India',
      lastDate: '05 Jan 2025',
      color: 'from-green-500 to-green-600',
      link: null
    },
    {
      title: 'Teaching Jobs 2024',
      department: 'Various State Boards',
      posts: '8,000+ Posts',
      location: 'Multiple States',
      lastDate: '20 Jan 2025',
      color: 'from-orange-500 to-orange-600',
      link: null
    },
    {
      title: 'Police Constable Recruitment',
      department: 'State Police Department',
      posts: '12,000+ Posts',
      location: 'State Level',
      lastDate: '10 Jan 2025',
      color: 'from-red-500 to-red-600',
      link: null
    }
  ];

  return (
    <section className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-blue-600" />
          Latest Job Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobBoxes.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => job.link && navigate(job.link)}
              className={`bg-gradient-to-br ${job.color} rounded-xl shadow-lg overflow-hidden cursor-pointer group`}
            >
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {job.title}
                </h3>
                <p className="text-sm opacity-90 mb-4">{job.department}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{job.posts}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-semibold">Last Date:</span>
                  </div>
                  <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                    {job.lastDate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default JobUpdates;
