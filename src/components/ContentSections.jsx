
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, FileText, CreditCard, Key, Award, File, Gift } from 'lucide-react';
import JobList from '@/components/JobList';

const ContentSections = () => {
  const sections = [
    {
      title: 'Latest Job',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      jobs: [
        { title: 'Railway Group D Recruitment 2024', date: '25 Dec 2024', posts: '50,000+', path: '/job/railway-recruitment-2024' },
        { title: 'SSC CGL Notification 2024', date: '20 Dec 2024', posts: '17,000+', path: '/job/ssc-cgl-2024' },
        { title: 'UPSC Civil Services 2024', date: '18 Dec 2024', posts: '1,056', path: '/job/upsc-civil-services-2024' },
        { title: 'Police SI Recruitment', date: '15 Dec 2024', posts: '5,000+' },
        { title: 'Bank Clerk Recruitment', date: '12 Dec 2024', posts: '12,000+' }
      ]
    },
    {
      title: 'Upcoming',
      icon: Calendar,
      color: 'from-purple-500 to-purple-600',
      jobs: [
        { title: 'IBPS RRB Notification', date: 'Jan 2025', posts: '15,000+' },
        { title: 'SSC JE Recruitment', date: 'Jan 2025', posts: '1,500+' },
        { title: 'Railway NTPC Phase 2', date: 'Feb 2025', posts: '25,000+' },
        { title: 'UPSC CDS Notification', date: 'Feb 2025', posts: '350+' },
        { title: 'Teaching Jobs 2025', date: 'Mar 2025', posts: '10,000+' }
      ]
    },
    {
      title: 'Exam Date',
      icon: FileText,
      color: 'from-pink-500 to-pink-600',
      jobs: [
        { title: 'SSC CGL Tier 1 Exam', date: '10 Jan 2025', posts: 'Announced' },
        { title: 'Bank PO Prelims', date: '15 Jan 2025', posts: 'Announced' },
        { title: 'Railway Group D Exam', date: '20 Jan 2025', posts: 'Announced' },
        { title: 'UPSC Prelims 2025', date: '25 May 2025', posts: 'Announced' },
        { title: 'SSC CHSL Exam', date: '05 Feb 2025', posts: 'Announced' }
      ]
    },
    {
      title: 'Admit Card',
      icon: CreditCard,
      color: 'from-green-500 to-green-600',
      jobs: [
        { title: 'SSC CGL Tier 1 Admit Card', date: 'Available', posts: 'Download' },
        { title: 'Railway NTPC Admit Card', date: 'Available', posts: 'Download' },
        { title: 'Bank Clerk Prelims Admit Card', date: '28 Dec 2024', posts: 'Soon' },
        { title: 'UPSC CSE Prelims Admit Card', date: 'May 2025', posts: 'Soon' },
        { title: 'Police Constable Admit Card', date: 'Available', posts: 'Download' }
      ]
    },
    {
      title: 'Answer Key',
      icon: Key,
      color: 'from-orange-500 to-orange-600',
      jobs: [
        { title: 'SSC MTS Answer Key 2024', date: 'Released', posts: 'Download' },
        { title: 'Railway Group D Answer Key', date: 'Released', posts: 'Download' },
        { title: 'Bank PO Prelims Answer Key', date: 'Expected Soon', posts: 'Wait' },
        { title: 'UPSC CAPF Answer Key', date: 'Released', posts: 'Download' },
        { title: 'SSC JE Answer Key', date: 'Expected Soon', posts: 'Wait' }
      ]
    },
    {
      title: 'Result',
      icon: Award,
      color: 'from-red-500 to-red-600',
      jobs: [
        { title: 'SSC CGL Tier 2 Result 2024', date: 'Declared', posts: 'Check Now' },
        { title: 'Railway NTPC Result', date: 'Declared', posts: 'Check Now' },
        { title: 'Bank Clerk Prelims Result', date: 'Expected Jan 2025', posts: 'Wait' },
        { title: 'UPSC CSE Mains Result', date: 'Declared', posts: 'Check Now' },
        { title: 'Police SI Result 2024', date: 'Declared', posts: 'Check Now' }
      ]
    },
    {
      title: 'Offline Form',
      icon: File,
      color: 'from-teal-500 to-teal-600',
      jobs: [
        { title: 'State Police Constable Form', date: '31 Dec 2024', posts: 'Apply' },
        { title: 'Teaching Job Application', date: '15 Jan 2025', posts: 'Apply' },
        { title: 'Post Office Recruitment Form', date: '20 Jan 2025', posts: 'Apply' },
        { title: 'Forest Guard Application', date: '10 Jan 2025', posts: 'Apply' },
        { title: 'Village Accountant Form', date: '25 Jan 2025', posts: 'Apply' }
      ]
    },
    {
      title: 'Govt. Scheme',
      icon: Gift,
      color: 'from-indigo-500 to-indigo-600',
      jobs: [
        { title: 'PM Kisan Samman Nidhi', date: 'Active', posts: 'Apply' },
        { title: 'Ayushman Bharat Yojana', date: 'Active', posts: 'Apply' },
        { title: 'Pradhan Mantri Awas Yojana', date: 'Active', posts: 'Apply' },
        { title: 'Skill India Mission', date: 'Active', posts: 'Enroll' },
        { title: 'Start-up India Scheme', date: 'Active', posts: 'Register' }
      ]
    }
  ];

  return (
    <section className="space-y-6">
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <JobList
            title={section.title}
            icon={section.icon}
            color={section.color}
            jobs={section.jobs}
          />
        </motion.div>
      ))}
    </section>
  );
};

export default ContentSections;
