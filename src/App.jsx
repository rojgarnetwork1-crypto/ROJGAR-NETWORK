
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JobUpdates from '@/components/JobUpdates';
import ContentSections from '@/components/ContentSections';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import RailwayJobDetails from '@/components/RailwayJobDetails';
import SSCCGLJobDetails from '@/components/SSCCGLJobDetails';
import UPSCJobDetails from '@/components/UPSCJobDetails';
import AdmitCardPage from '@/components/AdmitCardPage';
import ContactPage from '@/components/ContactPage';
import LatestJobPage from '@/components/LatestJobPage';
import ExamDatePage from '@/components/ExamDatePage';
import ResultPage from '@/components/ResultPage';
import OfflineFormPage from '@/components/OfflineFormPage';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => (
  <>
    <Helmet>
      <title>Rojgar Network - Latest Govt Jobs, Results & Exam Updates</title>
      <meta name="description" content="Rojgar Network provides latest government job notifications, exam dates, admit cards, results, and offline forms. Stay updated with all government employment opportunities." />
    </Helmet>
    <HeroSection />
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <JobUpdates />
          <ContentSections />
        </div>
        <div className="lg:col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/job/railway-recruitment-2024" element={<RailwayJobDetails />} />
            <Route path="/job/ssc-cgl-2024" element={<SSCCGLJobDetails />} />
            <Route path="/job/upsc-civil-services-2024" element={<UPSCJobDetails />} />
            <Route path="/latest-job" element={<LatestJobPage />} />
            <Route path="/exam-date" element={<ExamDatePage />} />
            <Route path="/admit-card" element={<AdmitCardPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/offline-form" element={<OfflineFormPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
