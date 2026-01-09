
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, ChevronRight, Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useToast } from '@/components/ui/use-toast';

const ExamDatePage = () => {
  const { toast } = useToast();

  const handleCardClick = (title) => {
    toast({
      title: "Viewing Exam Schedule...",
      description: `Opening schedule for ${title}`
    });
  };

  const examDates = [
    { id: 1, title: "SSC CGL Tier 1 Exam Date 2024", date: "26 Dec 2024" },
    { id: 2, title: "Railway NTPC CBT-1 Exam Schedule Released", date: "25 Dec 2024" },
    { id: 3, title: "UPSC Civil Services Prelims Exam Date 2025", date: "24 Dec 2024" },
    { id: 4, title: "UP Police Constable Re-Exam Date Announced", date: "23 Dec 2024" },
    { id: 5, title: "IBPS PO Mains Exam Date Notice", date: "22 Dec 2024" },
    { id: 6, title: "CTET January 2025 Exam Date & Schedule", date: "21 Dec 2024" },
    { id: 7, title: "NEET UG 2025 Exam Date Announced", date: "20 Dec 2024" },
    { id: 8, title: "JEE Main 2025 Session 1 Exam Dates", date: "19 Dec 2024" },
    { id: 9, title: "Airforce Agnipath Vayu Exam Date & City Intimation", date: "18 Dec 2024" },
    { id: 10, title: "NDA & NA (I) Exam Date 2025", date: "17 Dec 2024" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Exam Dates 2024-25 - Upcoming Government Exams Schedule</title>
        <meta name="description" content="Check latest exam dates for SSC, Banking, Railway, UPSC, and other government exams. Stay updated with exam schedules and calendar." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-6 text-white">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <CalendarIcon className="h-8 w-8" />
                Latest Exam Dates
              </h1>
              <p className="text-pink-50 mt-2">Upcoming Examination Schedules & Calendars</p>
            </div>

            <div className="p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for exam dates..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
              </div>

              <div className="space-y-4">
                {examDates.map((exam, index) => (
                  <motion.div
                    key={exam.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleCardClick(exam.title)}
                    className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-pink-50 rounded-lg border border-gray-100 hover:border-pink-200 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-pink-700 transition-colors text-lg">
                        {exam.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Updated: {exam.date}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-400 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
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

export default ExamDatePage;
