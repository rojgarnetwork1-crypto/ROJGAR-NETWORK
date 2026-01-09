
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, CreditCard, Users, CheckCircle, ExternalLink, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RailwayJobDetails = () => {
  const { toast } = useToast();

  const handleLinkClick = (type) => {
    toast({
      title: `Redirecting to ${type}...`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleSocialClick = (platform) => {
    if (platform === 'WhatsApp') {
      window.open('https://chat.whatsapp.com/CuxHZQk9bL0Ir4ouXf0cbI', '_blank');
      return;
    }
    toast({
      title: `Join our ${platform} community!`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Railway Recruitment 2024 - Job Details, Dates, Syllabus</title>
        <meta name="description" content="Detailed information about Railway Recruitment 2024. Check vacancies, eligibility, exam dates, syllabus and apply online." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Railway Recruitment 2024</h1>
          <p className="text-blue-100 font-medium">Railway Recruitment Board (RRB)</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
             <span className="bg-white/20 px-3 py-1 rounded-full">Advt No: RRB/2024/01</span>
             <span className="bg-white/20 px-3 py-1 rounded-full">Total Posts: 10,000+</span>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          
          {/* Job Overview Table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">Job Overview</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 font-semibold text-gray-700 w-1/3">Post Name</th>
                    <td className="px-6 py-4 text-gray-600">Assistant Loco Pilot (ALP), Technician & Group D</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-6 py-4 font-semibold text-gray-700">Job Location</th>
                    <td className="px-6 py-4 text-gray-600">All India</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 font-semibold text-gray-700">Last Date</th>
                    <td className="px-6 py-4 text-red-600 font-bold">31 December 2024</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-6 py-4 font-semibold text-gray-700">Official Website</th>
                    <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer" onClick={() => handleLinkClick('Official Website')}>indianrailways.gov.in</td>
                  </tr>
                   <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 font-semibold text-gray-700">Form Mode</th>
                    <td className="px-6 py-4 text-green-600 font-bold">Online</td>
                  </tr>
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-700">Job Advertisement</th>
                    <td className="px-6 py-4 text-gray-600">Railway Recruitment 2024 Notification</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Info Boxes Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Important Dates */}
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
              <div className="flex items-center gap-2 mb-4 text-pink-700">
                <Calendar className="h-6 w-6" />
                <h3 className="text-xl font-bold">Important Dates</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between"><span>Application Start:</span> <span className="font-semibold">01 Dec 2024</span></li>
                <li className="flex justify-between"><span>Last Date:</span> <span className="font-semibold">31 Dec 2024</span></li>
                <li className="flex justify-between"><span>Fee Payment Last Date:</span> <span className="font-semibold">02 Jan 2025</span></li>
                <li className="flex justify-between"><span>Exam Date:</span> <span className="font-semibold">Feb 2025</span></li>
              </ul>
            </div>

            {/* Application Fees */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center gap-2 mb-4 text-blue-700">
                <CreditCard className="h-6 w-6" />
                <h3 className="text-xl font-bold">Application Fees</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between"><span>Gen / OBC / EWS:</span> <span className="font-semibold">₹ 500/-</span></li>
                <li className="flex justify-between"><span>SC / ST / PH:</span> <span className="font-semibold">₹ 250/-</span></li>
                <li className="flex justify-between"><span>All Category Female:</span> <span className="font-semibold">₹ 250/-</span></li>
                <li className="mt-2 text-xs text-gray-500 italic">*Payment via Debit Card, Credit Card, Net Banking only.</li>
              </ul>
            </div>

            {/* Age Details */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-2 mb-4 text-green-700">
                <Users className="h-6 w-6" />
                <h3 className="text-xl font-bold">Age Details</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between"><span>Minimum Age:</span> <span className="font-semibold">18 Years</span></li>
                <li className="flex justify-between"><span>Maximum Age:</span> <span className="font-semibold">33 Years</span></li>
                <li className="text-xs text-gray-500 mt-2">
                  *Age relaxation extra as per Railway Recruitment Rules:
                  <br/> OBC: 3 Years, SC/ST: 5 Years
                </li>
              </ul>
            </div>

             {/* Selection Process */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center gap-2 mb-4 text-purple-700">
                <CheckCircle className="h-6 w-6" />
                <h3 className="text-xl font-bold">Selection Process</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Computer Based Test (CBT - 1)</li>
                <li>Computer Based Test (CBT - 2)</li>
                <li>Computer Based Aptitude Test (CBAT)</li>
                <li>Document Verification</li>
                <li>Medical Examination</li>
              </ul>
            </div>
          </section>

          {/* Job Qualification Table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">Job Qualification</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                  <tr>
                    <th className="px-6 py-3 border-b">Post Name</th>
                    <th className="px-6 py-3 border-b">Qualification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Assistant Loco Pilot (ALP)</td>
                    <td className="px-6 py-4">Matriculation / SSLC plus ITI from recognized institutions of NCVT/SCVT in relevant trade OR Diploma in Engineering.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Technician Grade III</td>
                    <td className="px-6 py-4">Matriculation / SSLC plus ITI from recognized institutions of NCVT/SCVT in relevant trade.</td>
                  </tr>
                   <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Group D</td>
                    <td className="px-6 py-4">10th Pass OR ITI from recognized institutions of NCVT/SCVT.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Category Wise Vacancy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">Category Wise Vacancy</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-center">
                <thead className="bg-blue-600 text-white uppercase">
                  <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">General</th>
                    <th className="px-4 py-3">OBC</th>
                    <th className="px-4 py-3">EWS</th>
                    <th className="px-4 py-3">SC</th>
                    <th className="px-4 py-3">ST</th>
                    <th className="px-4 py-3 bg-blue-700">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-left">Vacancy</td>
                    <td className="px-4 py-3">4,500</td>
                    <td className="px-4 py-3">2,700</td>
                    <td className="px-4 py-3">1,000</td>
                    <td className="px-4 py-3">1,200</td>
                    <td className="px-4 py-3">600</td>
                    <td className="px-4 py-3 font-bold text-blue-600">10,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Application Process Steps */}
          <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
             <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">Recruitment Application Process</h2>
             <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
               <li>Check the eligibility from the official notification.</li>
               <li>Click on the "Apply Online" link given below or visit the official website.</li>
               <li>Fill out the application form with correct details.</li>
               <li>Upload the required documents (Photo, Signature, Marksheets).</li>
               <li>Pay the application fee as per your category.</li>
               <li>Submit the application form and take a printout for future reference.</li>
             </ol>
          </section>

          {/* Important Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">Important Links</h2>
            <div className="overflow-hidden rounded-lg border border-gray-200">
               <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-6 py-3 w-1/2">Link Name</th>
                    <th className="px-6 py-3 w-1/2">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-green-600">Fill Online Form</td>
                    <td className="px-6 py-4">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleLinkClick('Online Form')}>Apply Now</Button>
                    </td>
                  </tr>
                   <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">Download Notification</td>
                    <td className="px-6 py-4">
                      <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => handleLinkClick('Notification PDF')}>Click Here</Button>
                    </td>
                  </tr>
                   <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-600">Official Website</td>
                    <td className="px-6 py-4">
                      <Button size="sm" variant="secondary" onClick={() => handleLinkClick('Official Website')}>Visit Now</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

           {/* Follow Section */}
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Rojgar Network</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button 
                className="bg-green-500 hover:bg-green-600 text-white gap-2"
                onClick={() => handleSocialClick('WhatsApp')}
              >
                <MessageCircle className="h-5 w-5" /> Join WhatsApp Group
              </Button>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white gap-2"
                onClick={() => handleSocialClick('Telegram')}
              >
                <Send className="h-5 w-5" /> Join Telegram Channel
              </Button>
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

export default RailwayJobDetails;
