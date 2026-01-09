
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: `Follow us on ${platform}!`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleLinkClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Youtube, name: 'Youtube', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold">RN</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Rojgar Network</span>
                <p className="text-xs text-gray-400">Your Career Partner</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Providing latest government job notifications, exam updates, and career guidance to help you achieve your dreams.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.name)}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {['Latest Jobs', 'Admit Cards', 'Results', 'Answer Keys', 'Syllabus', 'Previous Papers'].map((link) => (
                <li key={link}>
                  <button
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold mb-4 block">Categories</span>
            <ul className="space-y-2">
              {['Banking Jobs', 'Railway Jobs', 'SSC Jobs', 'UPSC Jobs', 'State Govt Jobs', 'Teaching Jobs'].map((category) => (
                <li key={category}>
                  <button
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>contact@rojgarnetwork.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Rojgar Network. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((item) => (
                <button
                  key={item}
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
