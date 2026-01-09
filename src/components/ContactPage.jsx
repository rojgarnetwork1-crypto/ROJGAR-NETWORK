
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Sidebar from '@/components/Sidebar';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: `Redirecting to ${platform}...`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleContactAction = (action, value) => {
    toast({
      title: action === 'email' ? 'Opening Email Client...' : 'Opening WhatsApp...',
      description: `Contacting: ${value}`
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Contact Us - Rojgar Network</title>
        <meta name="description" content="Contact Rojgar Network for any queries regarding government jobs, exam results, and admit cards. Join our WhatsApp and Telegram groups." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Main Contact Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-center">
                <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                <p className="text-purple-100">We are here to help you with your career journey</p>
              </div>

              <div className="p-8">
                {/* Welcome Message */}
                <div className="mb-8 text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Rojgar Network</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Hello Friends, Welcome to RojgarNetwork.com. If you have any questions or suggestions regarding our website or content, please feel free to contact us. We value your feedback and are committed to providing you with the best service possible.
                  </p>
                </div>

                {/* Contact Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">WhatsApp Support</h3>
                    <p className="text-gray-600 text-sm mb-4">Chat with us for quick queries</p>
                    <Button 
                      onClick={() => handleContactAction('whatsapp', '9050623215')}
                      className="bg-green-600 hover:bg-green-700 text-white w-full"
                    >
                      +91 90506 23215
                    </Button>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Email Support</h3>
                    <p className="text-gray-600 text-sm mb-4">Send us your detailed queries</p>
                    <Button 
                      onClick={() => handleContactAction('email', 'rojgarnetwork1@gmail.com')}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                    >
                      rojgarnetwork1@gmail.com
                    </Button>
                  </div>
                </div>

                {/* Join Groups Table */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-purple-600 pl-3">
                    Join Our Social Groups
                  </h2>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700 font-bold">
                        <tr>
                          <th className="px-6 py-4">Platform</th>
                          <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold flex items-center gap-3">
                            <span className="p-2 bg-green-100 rounded-full text-green-600">
                              <MessageCircle className="h-5 w-5" />
                            </span>
                            Join WhatsApp Group
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Button 
                              size="sm" 
                              className="bg-green-500 hover:bg-green-600 text-white min-w-[100px]"
                              onClick={() => handleSocialClick('WhatsApp Group')}
                            >
                              Join Now
                            </Button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold flex items-center gap-3">
                            <span className="p-2 bg-blue-100 rounded-full text-blue-600">
                              <Send className="h-5 w-5" />
                            </span>
                            Join Telegram Channel
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Button 
                              size="sm" 
                              className="bg-blue-500 hover:bg-blue-600 text-white min-w-[100px]"
                              onClick={() => handleSocialClick('Telegram Channel')}
                            >
                              Join Now
                            </Button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold flex items-center gap-3">
                            <span className="p-2 bg-pink-100 rounded-full text-pink-600">
                              <Globe className="h-5 w-5" />
                            </span>
                            Visit Website
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-pink-500 text-pink-600 hover:bg-pink-50 min-w-[100px]"
                              onClick={() => handleSocialClick('Home Page')}
                            >
                              Click Here
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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

export default ContactPage;
