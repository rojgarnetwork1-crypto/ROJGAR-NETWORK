
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const LatestJobPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCardClick = (job) => {
    if (job.path) {
      navigate(job.path);
    } else {
      toast({
        title: "Opening Job Details...",
        description: `Redirecting to details page for ${job.title} (Demo)`
      });
    }
  };

  const latestJobs = [
    { id: 1, title: "Railway Group D Recruitment 2024 Notification", date: "26 Dec 2024", path: "/job/railway-recruitment-2024" },
    { id: 2, title: "SSC CGL 2024 Notification & Online Form", date: "25 Dec 2024", path: "/job/ssc-cgl-2024" },
    { id: 3, title: "UPSC Civil Services 2024 Notification", date: "24 Dec 2024", path: "/job/upsc-civil-services-2024" },
    { id: 4, title: "UP Police Constable Vacancy 2024 Notification", date: "23 Dec 2024" },
    { id: 5, title: "IBPS Clerk 2024 Notification Out", date: "22 Dec 2024" },
    { id: 6, title: "Bihar Police SI Recruitment 2024 Apply Online", date: "21 Dec 2024" },
    { id: 7, title: "Delhi Police Constable Executive Recruitment", date: "20 Dec 2024" },
    { id: 8, title: "Indian Navy Agniveer MR/SSR Recruitment 2024", date: "19 Dec 2024" },
    { id: 9, title: "MP Vyapam Group 2 Sub Group 4 Vacancy", date: "18 Dec 2024" },
    { id: 10, title: "Rajasthan Patwari Recruitment 2024 Notification", date: "17 Dec 2024" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Latest Government Jobs 2024 - Free Job Alerts | Rojgar Network</title>
        <meta name="description" content="Find latest government jobs, sarkari naukri notifications, central and state govt vacancies 2024. Apply online for SSC, Banking, Railway, and Police jobs." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Briefcase className="h-8 w-8" />
                Latest Government Jobs
              </h1>
              <p className="text-blue-50 mt-2">Latest Sarkari Naukri Notifications & Updates</p>
            </div>

            <div className="p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for latest jobs..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-4">
                {latestJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleCardClick(job)}
                    className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-100 hover:border-blue-200 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors text-lg">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>Updated: {job.date}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
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

export default LatestJobPage;
