import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Calendar, ChevronRight, Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useToast } from '@/components/ui/use-toast';

const AdmitCardPage = () => {
  const { toast } = useToast();

  const handleCardClick = (title) => {
    toast({
      title: "Downloading Admit Card...",
      description: `Redirecting to download page for ${title}`
    });
  };

  const admitCards = [
    { id: 1, title: "ITBP ASI, HC, Constable vacancy online Admit Card 2024", date: "26 Dec 2024" },
    { id: 2, title: "SSC CGL Tier 1 Examination Admit Card 2024 (All Regions)", date: "25 Dec 2024" },
    { id: 3, title: "Railway NTPC CBT-1 Exam City & Date Intimation Slip", date: "24 Dec 2024" },
    { id: 4, title: "UP Police Constable Re-Exam Admit Card 2024", date: "23 Dec 2024" },
    { id: 5, title: "IBPS PO Mains Call Letter 2024 Download", date: "22 Dec 2024" },
    { id: 6, title: "UPSC Civil Services (Main) Examination Admit Card", date: "20 Dec 2024" },
    { id: 7, title: "Bihar STET Admit Card 2024 for Phase 2", date: "19 Dec 2024" },
    { id: 8, title: "CRPF Constable (Technical & Tradesman) Admit Card", date: "18 Dec 2024" },
    { id: 9, title: "Airforce Agnipath Vayu Intake 01/2025 Exam Date & City", date: "15 Dec 2024" },
		{ id: 10, title: "Rajasthan CET (Graduation Level) Admit Card 2024", date: "12 Dec 2024" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Admit Card - Download Hall Tickets & Call Letters | Rojgar Network</title>
        <meta name="description" content="Download latest Admit Cards, Hall Tickets, and Call Letters for all Government Exams including SSC, Railway, Banking, UPSC, and State Police." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <FileText className="h-8 w-8" />
                Latest Admit Cards
              </h1>
              <p className="text-green-50 mt-2">Download your exam hall tickets and call letters here.</p>
            </div>

            <div className="p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for your exam admit card..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                />
              </div>

              <div className="space-y-4">
                {admitCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleCardClick(card.title)}
                    className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-green-50 rounded-lg border border-gray-100 hover:border-green-200 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors text-lg">
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>Updated: {card.date}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
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

export default AdmitCardPage;