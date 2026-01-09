
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { File, Calendar, ChevronRight, Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useToast } from '@/components/ui/use-toast';

const OfflineFormPage = () => {
  const { toast } = useToast();

  const handleCardClick = (title) => {
    toast({
      title: "Downloading Form...",
      description: `Opening offline form for ${title}`
    });
  };

  const offlineForms = [
    { id: 1, title: "Indian Airforce Group C Civilian Offline Form 2024", date: "26 Dec 2024" },
    { id: 2, title: "Indian Army HQ Northern Command Offline Form", date: "25 Dec 2024" },
    { id: 3, title: "Coast Guard Enrolled Follower / Sweeper Offline Form", date: "24 Dec 2024" },
    { id: 4, title: "ASC Centre South Bangalore Offline Form 2024", date: "23 Dec 2024" },
    { id: 5, title: "ECHS Polyclinic Various Post Offline Form", date: "22 Dec 2024" },
    { id: 6, title: "Income Tax Department Sports Quota Offline Form", date: "21 Dec 2024" },
    { id: 7, title: "Post Office Driver & MTS Offline Form 2024", date: "20 Dec 2024" },
    { id: 8, title: "Border Roads Organisation (BRO) Offline Form", date: "19 Dec 2024" },
    { id: 9, title: "Ministry of Defence Transit Camp Offline Form", date: "18 Dec 2024" },
    { id: 10, title: "HQ Central Command Lucknow Offline Form", date: "17 Dec 2024" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Offline Forms 2024 - Download Government Job Application Forms</title>
        <meta name="description" content="Download latest offline application forms for government jobs. Find PDF forms for Army, Airforce, Navy, and other departmental vacancies." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-6 text-white">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <File className="h-8 w-8" />
                Latest Offline Forms
              </h1>
              <p className="text-teal-50 mt-2">Download Offline Application Forms & Formats</p>
            </div>

            <div className="p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for offline form..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              <div className="space-y-4">
                {offlineForms.map((form, index) => (
                  <motion.div
                    key={form.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleCardClick(form.title)}
                    className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-teal-50 rounded-lg border border-gray-100 hover:border-teal-200 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-teal-700 transition-colors text-lg">
                        {form.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>Updated: {form.date}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-400 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <ChevronRight className="h-5 w-5" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default OfflineFormPage;
