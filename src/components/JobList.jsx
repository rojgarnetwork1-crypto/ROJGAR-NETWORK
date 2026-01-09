
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const JobList = ({ title, icon: Icon, color, jobs }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleJobClick = (job) => {
    if (job.path) {
      navigate(job.path);
    } else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`bg-gradient-to-r ${color} p-4`}>
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <Icon className="h-7 w-7" />
          {title}
        </h3>
      </div>
      
      <div className="max-h-96 overflow-y-auto custom-scrollbar">
        <div className="divide-y divide-gray-100">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => handleJobClick(job)}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="font-medium">Date:</span> {job.date}
                    </span>
                    {job.posts && (
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Posts:</span> {job.posts}
                      </span>
                    )}
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
