
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Calendar, ChevronRight, Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useToast } from '@/components/ui/use-toast';

const ResultPage = () => {
  const { toast } = useToast();

  const handleCardClick = (title) => {
    toast({
      title: "Checking Result...",
      description: `Redirecting to result page for ${title}`
    });
  };

  const results = [
    { id: 1, title: "SSC CGL Tier 1 Result 2024 Declared", date: "26 Dec 2024" },
    { id: 2, title: "Railway Group D Final Result 2024", date: "25 Dec 2024" },
    { id: 3, title: "IBPS PO Mains Result 2024 Out", date: "24 Dec 2024" },
    { id: 4, title: "UP Police Constable Result 2024", date: "23 Dec 2024" },
    { id: 5, title: "CTET Result 2024 Released", date: "22 Dec 2024" },
    { id: 6, title: "Bihar STET Result 2024 (Phase 1)", date: "21 Dec 2024" },
    { id: 7, title: "SSC GD Constable Final Result 2024", date: "20 Dec 2024" },
    { id: 8, title: "UPSC Civil Services Mains Result 2024", date: "19 Dec 2024" },
    { id: 9, title: "DRDO CEPTAM 10 Result Declared", date: "18 Dec 2024" },
    { id: 10, title: "MP Patwari Result 2024", date: "17 Dec 2024" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Sarkari Results 2024 - Check Latest Government Exam Results</title>
        <meta name="description" content="Check latest sarkari results for SSC, Railway, Banking, Police, and other government exams. Download merit lists and cut-off marks." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Award className="h-8 w-8" />
                Latest Results
              </h1>
              <p className="text-red-50 mt-2">Check Exam Results, Merit Lists & Cut-offs</p>
            </div>

            <div className="p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for exam result..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>

              <div className="space-y-4">
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleCardClick(result.title)}
                    className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-red-50 rounded-lg border border-gray-100 hover:border-red-200 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-red-700 transition-colors text-lg">
                        {result.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>Declared: {result.date}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
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

export default ResultPage;
